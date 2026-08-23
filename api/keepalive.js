// Supabase 무료 플랜 자동 일시정지(inactivity pause) 방지용 keep-alive.
// Vercel Cron(vercel.json "crons")이 매일 1회 이 엔드포인트를 호출 → Supabase에 가벼운 쿼리 1건 실행
// → 프로젝트가 "활성" 상태로 유지되어 자동 pause 되지 않는다.
//
// 비밀정보 불필요: 공개 publishable 키로 products 1행만 조회한다.
// (Pro 전환 시 이 크론은 무해하게 남겨두거나 제거해도 됨)

const SUPABASE_URL = "https://cdpigjktddwyajyjhqtw.supabase.co";
const SUPABASE_KEY = "sb_publishable_p9cs6d7mr5iGXFmE8oeRWQ_N1YebGWy";

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  try {
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/products?select=id&limit=1`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
    );
    const ok = r.ok;
    res.statusCode = ok ? 200 : 502;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ ok, status: r.status, at: new Date().toISOString() }));
  } catch (e) {
    res.statusCode = 502;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ ok: false, error: String(e && e.message || e) }));
  }
};
