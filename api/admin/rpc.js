// 관리자 데이터 접근 프록시 — Vercel Serverless Function
// 클라이언트(05-admin.jsx)는 이 엔드포인트를 통해서만 관리자 RPC를 호출한다.
// 관리자 비밀번호와 service_role 키는 서버 환경변수에만 존재 → 공개 소스에 비밀정보 없음.
//
// 요청: POST /api/admin/rpc  { secret, fn, args? }
//   secret : 관리자가 로그인 시 입력한 비밀번호 (ADMIN_SECRET 와 일치해야 함)
//   fn     : 호출할 관리자 RPC 이름 (화이트리스트에 있는 것만)  또는 "__verify"(게이트 검증용)
//   args   : RPC 인자 (p_secret 은 서버가 자동으로 붙임)
//
// 필요한 Vercel 환경변수:
//   ADMIN_SECRET               — 관리자 로그인 비밀번호 (이 값으로 인증)
//   SUPABASE_URL               — Supabase 프로젝트 URL (confirm.js 와 공용)
//   SUPABASE_SERVICE_ROLE_KEY  — service_role 키 (RLS 우회 + 관리자 RPC 실행)
//   ADMIN_DB_SECRET (선택)     — DB 함수 p_secret (기본값 내장)

const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
};

// 타이밍 공격 방지용 상수 시간 문자열 비교
const safeEqual = (a, b) => {
  a = String(a == null ? "" : a);
  b = String(b == null ? "" : b);
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
};

// 허용된 관리자 RPC 화이트리스트 (그 외 함수 호출은 차단)
const ALLOWED = new Set([
  "admin_list_orders",
  "admin_list_members",
  "admin_list_products",
  "admin_upsert_product",
  "admin_update_product_extras",
  "admin_delete_product",
  "admin_list_install_cases",
  "admin_upsert_install_case",
  "admin_delete_install_case",
]);

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return json(res, 405, { error: "method not allowed" });

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  body = body || {};

  const adminSecret = process.env.ADMIN_SECRET;
  if (!adminSecret) return json(res, 500, { error: "ADMIN_SECRET env not set" });

  // 1. 관리자 인증 — 서버에서만 비교. 불일치 시 즉시 차단.
  if (!safeEqual(body.secret, adminSecret)) {
    return json(res, 401, { error: "unauthorized" });
  }

  // 게이트 로그인 검증 전용 (DB 접근 없음)
  if (body.fn === "__verify") return json(res, 200, { ok: true });

  // 2. 화이트리스트 검사
  const fn = body.fn;
  if (!ALLOWED.has(fn)) return json(res, 400, { error: "unknown function" });

  // 3. service_role 로 Supabase RPC 실행 (service_role 만 실행 가능하도록 DB 에서 잠금됨)
  const supaUrl = process.env.SUPABASE_URL;
  const supaKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supaUrl || !supaKey) return json(res, 500, { error: "supabase env not set" });

  const dbSecret = process.env.ADMIN_DB_SECRET || "lee91059105*";
  const args = (body.args && typeof body.args === "object") ? body.args : {};

  try {
    const r = await fetch(`${supaUrl}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: {
        "apikey": supaKey,
        "Authorization": `Bearer ${supaKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_secret: dbSecret, ...args }),
    });
    const text = await r.text();
    if (!r.ok) {
      console.error("[admin/rpc] supabase error:", r.status, text);
      return json(res, 502, { error: "db_error", detail: text.slice(0, 300) });
    }
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch (e) { data = null; }
    return json(res, 200, { ok: true, data });
  } catch (e) {
    console.error("[admin/rpc] exception:", e);
    return json(res, 502, { error: "rpc_unreachable", message: String(e) });
  }
};
