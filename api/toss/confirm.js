// 토스페이먼츠 결제 승인 — Vercel Serverless Function
// 요청: POST /api/toss/confirm  { paymentKey, orderId, amount, customer?, address?, items? }
// 동작: 토스 confirm API 호출 → 성공시 orders INSERT + 운영자 메일 → 결과 반환
//
// 필요한 Vercel 환경변수:
//   TOSS_SECRET_KEY              — 토스 시크릿 키 (test_sk_... 또는 live_sk_...)
//   SUPABASE_URL                 — Supabase 프로젝트 URL
//   SUPABASE_SERVICE_ROLE_KEY    — Supabase service_role 키 (RLS 우회 INSERT)
//   RESEND_API_KEY               — Resend API 키 (운영자 알림 메일)
//   ADMIN_NOTIFY_EMAIL           — 운영자 메일 (기본 leedoo80@gmail.com)

const TOSS_API = "https://api.tosspayments.com/v1/payments/confirm";

const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
};

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return json(res, 405, { error: "method not allowed" });

  // body parse (vercel 이 자동 파싱하지만 안전하게 처리)
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  const { paymentKey, orderId, amount } = body;
  if (!paymentKey || !orderId || !amount) {
    return json(res, 400, { error: "missing fields", required: ["paymentKey", "orderId", "amount"] });
  }

  const secret = process.env.TOSS_SECRET_KEY;
  if (!secret) return json(res, 500, { error: "TOSS_SECRET_KEY env not set" });

  // ─── 1. 토스 confirm 호출 ────────────────────────────────────────────
  let tossResp;
  try {
    const auth = "Basic " + Buffer.from(secret + ":").toString("base64");
    const r = await fetch(TOSS_API, {
      method: "POST",
      headers: { "Authorization": auth, "Content-Type": "application/json" },
      body: JSON.stringify({ paymentKey, orderId, amount: Number(amount) }),
    });
    tossResp = await r.json();
    if (!r.ok) {
      console.error("[toss/confirm] toss api error:", r.status, tossResp);
      return json(res, r.status, { error: "toss_confirm_failed", code: tossResp.code, message: tossResp.message });
    }
  } catch (e) {
    console.error("[toss/confirm] toss api exception:", e);
    return json(res, 502, { error: "toss_api_unreachable", message: String(e) });
  }

  // ─── 2. Supabase orders INSERT (service_role 키 사용 → RLS 우회) ─────
  try {
    const supaUrl = process.env.SUPABASE_URL;
    const supaKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (supaUrl && supaKey) {
      const row = {
        payment_key:    tossResp.paymentKey || paymentKey,
        order_id:       tossResp.orderId    || orderId,
        amount:         tossResp.totalAmount || Number(amount),
        status:         "paid",
        method:         tossResp.method || null,
        user_id:        body.user_id || null,
        customer_name:  (body.customer && body.customer.name)  || null,
        customer_phone: (body.customer && body.customer.phone) || null,
        customer_email: (body.customer && body.customer.email) || null,
        addr_zip:       (body.address && body.address.zip)   || null,
        addr1:          (body.address && body.address.addr1) || null,
        addr2:          (body.address && body.address.addr2) || null,
        memo:           (body.address && body.address.memo)  || null,
        items:          body.items || null,
        toss_raw:       tossResp,
      };
      const insertResp = await fetch(`${supaUrl}/rest/v1/orders`, {
        method: "POST",
        headers: {
          "apikey": supaKey,
          "Authorization": `Bearer ${supaKey}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal",
        },
        body: JSON.stringify(row),
      });
      if (!insertResp.ok) {
        const txt = await insertResp.text();
        console.error("[toss/confirm] supabase insert failed:", insertResp.status, txt);
        // INSERT 실패해도 사용자에겐 성공으로 반환 (결제는 이미 확정됨, 운영자가 수동 처리)
      }
    } else {
      console.warn("[toss/confirm] supabase env not set — skipping DB insert");
    }
  } catch (e) {
    console.error("[toss/confirm] supabase exception:", e);
  }

  // ─── 3. 운영자 알림 메일 (Resend) ────────────────────────────────────
  try {
    const resendKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_NOTIFY_EMAIL || "leedoo80@gmail.com";
    if (resendKey) {
      const cust = body.customer || {};
      const addr = body.address || {};
      const itemsTxt = (body.items || []).map(it => `· ${it.name || it.id} × ${it.qty} (₩${(it.price * it.qty).toLocaleString()})`).join("\n");
      const html = `
        <div style="font-family: 'Noto Sans KR', sans-serif; max-width: 560px;">
          <h2 style="color:#00C8F0;">💳 새 주문 결제 완료</h2>
          <table style="width:100%; font-size:14px; border-collapse:collapse;">
            <tr><td style="padding:6px 0; color:#666;">주문번호</td><td><b>${orderId}</b></td></tr>
            <tr><td style="padding:6px 0; color:#666;">결제금액</td><td><b>₩${Number(amount).toLocaleString()}</b></td></tr>
            <tr><td style="padding:6px 0; color:#666;">결제수단</td><td>${tossResp.method || '-'}</td></tr>
            <tr><td style="padding:6px 0; color:#666;">고객</td><td>${cust.name || '-'} / ${cust.phone || '-'}</td></tr>
            <tr><td style="padding:6px 0; color:#666;">이메일</td><td>${cust.email || '-'}</td></tr>
            <tr><td style="padding:6px 0; color:#666; vertical-align:top;">배송지</td>
                <td>(${addr.zip || '-'}) ${addr.addr1 || ''} ${addr.addr2 || ''}<br/>${addr.memo ? '메모: ' + addr.memo : ''}</td></tr>
          </table>
          <h3 style="margin-top:20px;">주문 상품</h3>
          <pre style="background:#f5f5f5; padding:12px; border-radius:6px;">${itemsTxt || '(없음)'}</pre>
          <p style="color:#999; font-size:12px; margin-top:20px;">관리자 페이지: https://3dunibox.co.kr/admin</p>
        </div>
      `;
      const mailResp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Authorization": `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "3D UniBox <noreply@3dunibox.co.kr>",
          to: [adminEmail],
          subject: `[3D UniBox] 새 주문 ₩${Number(amount).toLocaleString()} — ${orderId}`,
          html,
        }),
      });
      if (!mailResp.ok) console.warn("[toss/confirm] resend send failed:", mailResp.status, await mailResp.text());
    }
  } catch (e) {
    console.error("[toss/confirm] resend exception:", e);
  }

  // ─── 4. 클라이언트 응답 ──────────────────────────────────────────────
  return json(res, 200, {
    ok: true,
    paymentKey: tossResp.paymentKey,
    orderId: tossResp.orderId,
    amount: tossResp.totalAmount,
    method: tossResp.method,
    approvedAt: tossResp.approvedAt,
  });
};
