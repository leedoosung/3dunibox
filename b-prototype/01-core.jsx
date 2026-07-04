// B안 — Model-first Catalog 인터랙티브 프로토타입
// 한 파일에 라우팅/상태/컴포넌트 모두 포함

const { useState, useMemo, useEffect, useRef, Fragment } = React;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const MODELS = [
  { id: "fsf2", name: "FaceStation F2", code: "UB-FSF2", cat: "face", price: 89000, status: "live", desc: "안면인식 + 카드 + 지문", w:88, h:168, d:38, weight:142 },
  { id: "bs3",  name: "BioStation 3",   code: "UB-BS3",  cat: "fp",   price: 69000, status: "live", desc: "지문 + RFID 카드", w:76, h:152, d:36, weight:118 },
];

// ─── 배송비 정책 ─────────────────────────────────────────────────────────────
// 일반 배송 3,500원 · 제주/도서산간 +3,000원 · 직접 수령 0원.
// 우편번호 앞자리로 자동 판별 (63xxx 제주, 40200~40240 울릉).
const SHIP = { FEE: 3500, REMOTE_EXTRA: 3000 };
const isRemoteArea = (zip) => {
  if (!zip) return false;
  const z = String(zip).replace(/\D/g, "");
  if (z.length < 5) return false;
  if (z.startsWith("63")) return true;                            // 제주
  const n = parseInt(z.substring(0, 5), 10);
  if (n >= 40200 && n <= 40240) return true;                      // 울릉
  return false;
};
// calcShip(subtotal[, { zip, method }])
// - method === "pickup" → 0
// - 그 외 → FEE + (제주/도서산간이면 REMOTE_EXTRA)
const calcShip = (subtotal, opts) => {
  if (subtotal === 0) return 0;
  const method = opts && opts.method;
  if (method === "pickup") return 0;
  const zip = opts && opts.zip;
  return SHIP.FEE + (isRemoteArea(zip) ? SHIP.REMOTE_EXTRA : 0);
};

// ─── 회원 등급 정책 ──────────────────────────────────────────────────────────
// VIP: 누적 구매 100만원 이상 또는 4건 이상
// 일반: 1~3건 구매
// 신규: 가입 30일 이내, 구매 1건 미만
const calcGrade = (totalSpent, totalOrders, joinedAt) => {
  if (totalSpent >= 1000000 || totalOrders >= 4) return "VIP";
  if (totalOrders >= 1) return "일반";
  return "신규";
};
const GRADE_COLORS = {
  "VIP":  { bg: "rgba(167,139,250,0.15)", fg: "#A78BFA" },
  "일반": { bg: "rgba(0,200,240,0.15)",   fg: "#00C8F0" },
  "신규": { bg: "rgba(74,222,128,0.15)",  fg: "#4ADE80" },
};

// ─── localStorage 헬퍼 (마이페이지 데이터) ────────────────────────────────────
// 인증 도입 전 임시 — 추후 백엔드 회원 API로 교체
const ME_KEY = "ub:me";
const loadMe = () => {
  try { const raw = localStorage.getItem(ME_KEY); return raw ? JSON.parse(raw) : null; }
  catch { return null; }
};
const saveMe = (me) => {
  try { localStorage.setItem(ME_KEY, JSON.stringify(me)); } catch {}
};
const upsertAddress = (me, addr) => {
  const next = me ? { ...me, addresses: [...(me.addresses || [])] } : { name: addr.name || "", phone: addr.phone || "", email: addr.email || "", addresses: [] };
  const idx = next.addresses.findIndex(a =>
    a.zip === addr.zip && a.addr1 === addr.addr1 && a.addr2 === addr.addr2);
  if (idx >= 0) next.addresses[idx] = { ...next.addresses[idx], ...addr };
  else next.addresses.push({ id: `a_${Date.now()}`, label: addr.label || "기본", isDefault: next.addresses.length === 0, ...addr });
  return next;
};

// 회원 데이터는 Supabase auth.users + public.profiles에 저장.
// 관리자 회원 탭은 빈 상태에서 시작 — Supabase Dashboard 또는 추후 API 연동으로 조회.
const MEMBERS = [];

const FAQS = [
  { c: "설치", q: "어떻게 고정하나요? 별도 부속이 필요한가요?", a: "설치 환경에 따라 두 가지 방법으로 고정합니다.\n\n유리·벽면 부착 시\n→ 브라켓 뒷면에 양면테이프로 부착 후\n→ 실리콘으로 마감합니다.\n\n벽면 직결 시\n→ 동봉된 볼트·너트 제거 후\n→ 직결 피스로 직접 고정합니다." },
  { c: "설치", q: "케이블은 어떻게 처리하나요?", a: "케이블 인입 방향에 맞게\n브라켓 측면 또는 뒷면에\n직접 홀 타공 후 처리합니다.\nPETG 소재라 타공이 쉽습니다." },
  { c: "제품·호환성", q: "맞춤 제작도 가능한가요?", a: "네, 가능합니다.\n지원하지 않는 모델이나\n특수 환경의 경우 문의해 주세요." },
  { c: "교환·반품", q: "단순 변심 반품이 가능한가요?", a: "맞춤 제작 특성상\n제작 착수 후에는 교환·반품이 어렵습니다.\n구매 전 모델 호환 여부를 꼭 확인해 주세요." },
];

const STEPS = [
  { n: "01", t: "위치 표시", d: "단말기 중심선과 브라켓 상단 위치를 마스킹테이프로 표시합니다.", time: "1분", tip: "수평계 앱이나 실제 수평계로 정확한 수평을 잡으세요." },
  { n: "02", t: "브라켓 고정", d: "동봉된 M3 볼트·너트로 브라켓을 벽면에 체결합니다.", time: "3분", tip: "벽 재질에 따라 적절한 앵커(콘크리트)·보강판(석고)을 사용하세요." },
  { n: "03", t: "단말기 결합", d: "단말기 후면을 브라켓 체결구에 맞춰 결합합니다.", time: "4분", tip: "토크 0.5N·m 이하로 균등하게 조여주세요." },
];

// ─── ICONS ────────────────────────────────────────────────────────────────────
const Ic = {
  search: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>,
  cart: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  x: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>,
  arrow: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  check: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>,
  chevron: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>,
  play: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg>,
  filter: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M7 12h10M10 18h4"/></svg>,
  external: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M10 14 21 3M21 14v7H3V3h7"/></svg>,
  user: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>,
  plus: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>,
  pencil: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z"/></svg>,
  trash: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14Z"/></svg>,
  menu: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
};

// ─── 반응형 훅 ───────────────────────────────────────────────────────────────
// 1024px 미만은 모바일 (햄버거 메뉴, 1열 그리드, 사이드바 stack, 하단 탭바).
// 갤럭시 폴드/대형 폰/태블릿 세로 모드까지 한 번에 모바일 UX로 처리.
const useIsMobile = (breakpoint = 1024) => {
  const [is, setIs] = useState(typeof window !== "undefined" ? window.innerWidth < breakpoint : false);
  useEffect(() => {
    const onResize = () => setIs(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return is;
};

// ─── PRIMITIVES ───────────────────────────────────────────────────────────────
const Btn = ({ variant = "primary", size = "md", children, onClick, style, type, disabled, full }) => (
  <button type={type || "button"} onClick={onClick} disabled={disabled}
    className={`ub-btn ub-btn-${variant} ${size === "lg" ? "ub-btn-lg" : ""}`}
    style={{ width: full ? "100%" : undefined, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer", ...style }}>
    {children}
  </button>
);

const Badge = ({ kind, children }) => (
  <span className={`ub-badge ub-badge-${kind}`}>
    {kind === "live" && <span className="ub-badge-dot" />}
    {children}
  </span>
);

const Logo = () => (
  <div className="ub-logo">
    <div className="ub-logo-mark">3D</div>
    <span>UNIBOX</span>
  </div>
);

// CSS bracket render (smaller, isometric-ish)
const Bracket = ({ size = 200, model }) => (
  <div style={{ width: size, height: size, position: "relative", perspective: 800 }}>
    <div style={{ position: "absolute", inset: "12%", transform: "rotateX(20deg) rotateY(-25deg)", transformStyle: "preserve-3d" }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #1a3a5c, #14263f)",
        border: "1px solid rgba(0,200,240,0.3)",
        borderRadius: 8,
        boxShadow: "0 30px 60px -20px rgba(0,200,240,0.3), inset 0 0 0 1px rgba(255,255,255,0.05)",
      }}>
        {[[15, 15], [85, 15], [15, 85], [85, 85]].map(([x, y], i) => (
          <div key={i} style={{ position: "absolute", left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)", width: 6, height: 6, borderRadius: "50%", background: "#0a1628", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.6)" }} />
        ))}
        <div style={{ position: "absolute", left: "50%", top: "30%", transform: "translateX(-50%)", width: 14, height: "40%", background: "rgba(0,0,0,0.4)", borderRadius: 4, boxShadow: "inset 0 0 4px rgba(0,0,0,0.6)" }} />
      </div>
      {model && (
        <div style={{ position: "absolute", left: "20%", top: "15%", width: "60%", height: "70%", transform: "translateZ(20px)", background: "linear-gradient(160deg, #1a2940, #0d1828)", borderRadius: 8, border: "1px solid rgba(0,200,240,0.3)" }} />
      )}
    </div>
  </div>
);

// ─── TOP NAV ──────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "catalog", label: "제품" },
  { id: "guide", label: "시공사례" },
  { id: "faq", label: "고객지원" },
  { id: "about", label: "회사소개" },
];

const TopNav = ({ route, onNav, cartCount, onOpenCart }) => {
  const isMobile = useIsMobile(1024);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);
  useEffect(() => { setMenuOpen(false); }, [route]);

  const isActive = (id) => route.name === id || (route.name === "detail" && id === "catalog");

  // 로그인 상태 — useAuth가 있으면 사용, 없으면 비로그인 가정
  const auth = (window.UB && window.UB.useAuth) ? window.UB.useAuth() : { user: null, ready: true };
  const user = auth.user;

  return (
    <>
      <header className="ub-topbar" style={{
        position: "sticky", top: 0, zIndex: 50,
        padding: isMobile ? "12px 16px" : undefined,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 12 : 40 }}>
          {isMobile && (
            <button type="button" onClick={() => setMenuOpen(true)} aria-label="메뉴 열기"
              style={{ background: "transparent", border: "1px solid var(--line-strong)", borderRadius: 8, padding: 6, color: "var(--gray-100)", cursor: "pointer", display: "flex" }}>
              {Ic.menu}
            </button>
          )}
          <div onClick={() => onNav({ name: "home" })} style={{ cursor: "pointer" }}><Logo /></div>
          {!isMobile && (
            <nav className="ub-nav">
              {NAV_ITEMS.map((n) => (
                <span key={n.id} className={isActive(n.id) ? "active" : ""} onClick={() => onNav({ name: n.id })}>
                  {n.label}
                </span>
              ))}
            </nav>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 6 : 14 }}>
          {!isMobile && (
            <span className="ub-mono" style={{ fontSize: 12, color: "var(--gray-300)" }}>010-9109-8277</span>
          )}
          <button onClick={() => onNav({ name: user ? "me" : "login" })}
            aria-label={user ? "마이페이지" : "로그인"} style={{
            border: "1px solid var(--line-strong)", background: "transparent",
            color: (route.name === "me" || route.name === "login") ? "var(--cyan-400)" : "var(--gray-100)",
            padding: isMobile ? 8 : "8px 10px", borderRadius: 8, cursor: "pointer",
            display: "flex", alignItems: "center", gap: 6, fontSize: 12,
          }}>
            {Ic.user}
            {!isMobile && <span>{user ? "마이" : "로그인"}</span>}
          </button>
          {user && !isMobile && (
            <button onClick={() => window.UB.signOut().then(() => location.reload())}
              style={{
                border: "1px solid var(--line-strong)", background: "transparent",
                color: "var(--gray-300)", padding: "8px 10px", borderRadius: 8,
                cursor: "pointer", fontSize: 12,
              }}>
              로그아웃
            </button>
          )}
          <button onClick={onOpenCart} aria-label="장바구니" style={{
            position: "relative", border: "1px solid var(--line-strong)", background: "transparent",
            color: "var(--gray-100)", padding: isMobile ? 8 : "8px 12px", borderRadius: 8, cursor: "pointer",
            display: "flex", alignItems: "center", gap: 6, fontSize: 12,
          }}>
            {Ic.cart}
            {!isMobile && <span>장바구니</span>}
            {cartCount > 0 && (
              <span style={{
                position: isMobile ? "absolute" : "static",
                top: isMobile ? -4 : undefined, right: isMobile ? -4 : undefined,
                minWidth: 18, height: 18, padding: "0 5px", borderRadius: 9,
                background: "var(--cyan-400)", color: "var(--navy-950)", fontSize: 10, fontWeight: 700,
                display: "grid", placeItems: "center", fontFamily: "var(--font-mono)",
              }}>{cartCount}</span>
            )}
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 패널 */}
      {isMobile && menuOpen && (
        <>
          <div onClick={() => setMenuOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", zIndex: 60 }} />
          <div role="dialog" aria-modal="true" aria-label="메뉴"
            style={{ position: "fixed", top: 0, left: 0, bottom: 0, width: "min(80vw, 320px)", background: "var(--navy-950)", borderRight: "1px solid var(--line)", zIndex: 61, display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Logo />
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기"
                style={{ background: "transparent", border: 0, color: "var(--gray-300)", cursor: "pointer", padding: 4 }}>{Ic.x}</button>
            </div>
            <nav style={{ flex: 1, padding: 12, display: "flex", flexDirection: "column", gap: 4 }}>
              {NAV_ITEMS.map((n) => {
                const active = isActive(n.id);
                return (
                  <button key={n.id} type="button" onClick={() => onNav({ name: n.id })}
                    style={{
                      textAlign: "left", padding: "12px 14px", borderRadius: 8,
                      background: active ? "rgba(0,200,240,0.10)" : "transparent",
                      color: active ? "var(--cyan-400)" : "var(--gray-100)",
                      border: active ? "1px solid rgba(0,200,240,0.25)" : "1px solid transparent",
                      fontSize: 15, fontWeight: active ? 700 : 500, cursor: "pointer",
                    }}>{n.label}</button>
                );
              })}
              <div style={{ height: 1, background: "var(--line)", margin: "10px 4px" }} />
              <button type="button" onClick={() => onNav({ name: user ? "me" : "login" })}
                style={{ textAlign: "left", padding: "12px 14px", borderRadius: 8, background: "transparent", color: "var(--gray-100)", border: 0, fontSize: 15, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "var(--cyan-400)" }}>{Ic.user}</span>{user ? "마이페이지" : "로그인"}
              </button>
              {user && (
                <button type="button" onClick={() => window.UB.signOut().then(() => location.reload())}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 8, background: "transparent", color: "var(--gray-300)", border: 0, fontSize: 15, fontWeight: 500, cursor: "pointer" }}>
                  로그아웃
                </button>
              )}
            </nav>
            <div style={{ padding: 16, borderTop: "1px solid var(--line)" }}>
              <div style={{ fontSize: 11, color: "var(--gray-400)", marginBottom: 4 }}>고객센터</div>
              <div className="ub-mono" style={{ fontSize: 16, color: "var(--white)", fontWeight: 600 }}>010-9109-8277</div>
              <div style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 4 }}>평일 09–18시</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

// ─── BOTTOM TABS (모바일 전용 하단 네비게이션) ────────────────────────────────
const BottomTabs = ({ route, onNav, cartCount, onOpenCart }) => {
  const isMobile = useIsMobile(1024);
  if (!isMobile) return null;

  const auth = (window.UB && window.UB.useAuth) ? window.UB.useAuth() : { user: null };
  const user = auth.user;

  const isActiveCatalog = route.name === "catalog" || route.name === "detail";
  const isActiveHome = route.name === "home";
  const isActiveMe = route.name === "me" || route.name === "login";

  return (
    <nav className="ub-bottom-tabs" aria-label="주요 메뉴">
      <button type="button" className={"ub-bottom-tab" + (isActiveHome ? " active" : "")}
              onClick={() => onNav({ name: "home" })}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12 12 4l9 8M5 10v10h4v-6h6v6h4V10"/></svg>
        <span>홈</span>
      </button>
      <button type="button" className={"ub-bottom-tab" + (isActiveCatalog ? " active" : "")}
              onClick={() => onNav({ name: "catalog" })}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        <span>카탈로그</span>
      </button>
      <button type="button" className="ub-bottom-tab" onClick={onOpenCart}>
        {Ic.cart}
        <span>장바구니</span>
        {cartCount > 0 && <span className="dot">{cartCount}</span>}
      </button>
      <button type="button" className={"ub-bottom-tab" + (isActiveMe ? " active" : "")}
              onClick={() => onNav({ name: user ? "me" : "login" })}>
        {Ic.user}
        <span>{user ? "마이" : "로그인"}</span>
      </button>
    </nav>
  );
};

// ─── 다음 우편번호(Daum Postcode) 검색 — 지연 로딩 + 콜백 ─────────────────────
// 사용: openPostcode(({zip, addr1}) => { setZip(zip); setAddr1(addr1); })
const POSTCODE_SRC = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
const openPostcode = (callback) => {
  const fire = () => {
    try {
      new window.daum.Postcode({
        oncomplete: (data) => {
          const zip = data.zonecode || "";
          let addr1 = data.roadAddress || data.jibunAddress || data.address || "";
          if (data.buildingName) addr1 += ` (${data.buildingName})`;
          callback && callback({ zip, addr1 });
        },
      }).open();
    } catch (e) {
      alert("주소 검색을 여는 중 오류가 발생했습니다.");
    }
  };
  if (window.daum && window.daum.Postcode) { fire(); return; }
  const existing = document.querySelector(`script[src="${POSTCODE_SRC}"]`);
  if (existing) {
    const t = setInterval(() => {
      if (window.daum && window.daum.Postcode) { clearInterval(t); fire(); }
    }, 80);
    setTimeout(() => clearInterval(t), 8000);
    return;
  }
  const s = document.createElement("script");
  s.src = POSTCODE_SRC;
  s.async = true;
  s.onload = fire;
  s.onerror = () => alert("주소 검색 스크립트를 불러오지 못했습니다. 인터넷 연결을 확인해주세요.");
  document.head.appendChild(s);
};

// ─── 제품 데이터 — Supabase products 테이블 fetch (fallback: 위 MODELS 하드코딩) ─
// MODELS 배열 레퍼런스는 유지한 채 .length=0 → push(...rows) 로 in-place 교체.
// 모든 page jsx 가 `const { MODELS } = window.UB` 로 가져갔어도 같은 레퍼런스라 자동 반영.
// 컴포넌트 재렌더 트리거는 useProducts() hook 으로 구독.
const _modelListeners = new Set();
const _notifyModels = () => _modelListeners.forEach(fn => { try { fn(); } catch (e) {} });

// 첫 페인트 즉시 사진 표시를 위해 직전 fetch 결과를 localStorage에 캐싱.
// 재방문 시 캐시로 동기 hydrate → 사진 바로 보임 → 백그라운드 fetch로 최신화.
const PRODUCTS_CACHE_KEY = "ub:products:v1";
try {
  const raw = localStorage.getItem(PRODUCTS_CACHE_KEY);
  if (raw) {
    const cached = JSON.parse(raw);
    if (Array.isArray(cached) && cached.length > 0) {
      MODELS.length = 0;
      MODELS.push(...cached);
    }
  }
} catch (e) {}

const loadProducts = async () => {
  const sb = window.SUPABASE;
  if (!sb) return false;
  try {
    const { data, error } = await sb
      .from("products")
      .select("*")
      .eq("status", "live")
      .order("sort_order");
    if (error) throw error;
    if (Array.isArray(data) && data.length > 0) {
      const next = data.map(r => ({
        id: r.id,
        code: r.code,
        name: r.name,
        cat: r.cat,
        price: r.price,
        status: r.status,
        desc: r.description || "",
        long_description: r.long_description || "",
        material: r.material || "",
        compat_tags: r.compat_tags || "",
        w: r.w, h: r.h, d: r.d, weight: r.weight,
        image_url: r.image_url || null,
      }));
      MODELS.length = 0;
      MODELS.push(...next);
      try { localStorage.setItem(PRODUCTS_CACHE_KEY, JSON.stringify(next)); } catch (e) {}
      _notifyModels();
      return true;
    }
    return false;
  } catch (e) {
    console.warn("[products] load failed, using fallback:", e);
    return false;
  }
};

const useProducts = () => {
  const [, setTick] = useState(0);
  useEffect(() => {
    const fn = () => setTick(n => n + 1);
    _modelListeners.add(fn);
    return () => _modelListeners.delete(fn);
  }, []);
  return MODELS;
};

// 첫 진입 시 자동 fetch — Supabase 클라이언트는 HTML에서 이미 초기화됨
loadProducts();

// ─── ORBIT — Hero 시각 (3D 회전 디스크 ring, wannathis.one 스타일) ───────────
// JS-driven: requestAnimationFrame 으로 매 프레임 angle 갱신. CSS 애니메이션 의존 X.
const Orbit = ({ size = 320, count = 8, speed = 22 }) => {
  // speed = 도/초. 22 → 한 바퀴 약 16초.
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    let raf, last = performance.now();
    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      setAngle(a => (a + speed * dt) % 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const radius = size * 0.42;
  const d = size * 0.22;

  return (
    <div className="ub-orbit" style={{ width: size, height: size }} aria-hidden="true">
      <div className="ub-orbit-rotor" style={{
        transform: `rotateX(18deg) rotateY(${angle}deg)`,
      }}>
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className="ub-orbit-disc" style={{
            width: d, height: d,
            marginLeft: -d / 2, marginTop: -d / 2,
            transform: `rotateY(${(i * 360) / count}deg) translateZ(${radius}px)`,
          }} />
        ))}
      </div>
    </div>
  );
};

// ─── 토스페이먼츠 v2 결제 스캐폴드 ─────────────────────────────────────────
// 현재: 토스 공식 "도큐먼트 테스트 키" — 결제창은 뜨지만 실제 결제 불가.
// 라이브 전환 TODO (CLAUDE.md "토스페이먼츠 통합" 절 참조):
//   1. https://www.tosspayments.com 가맹점 가입
//   2. TOSS_CLIENT_KEY → 라이브 키 (live_ck_...)
//   3. successUrl / failUrl 페이지 백엔드 처리 (paymentKey 받아 /v1/payments/confirm 호출 → 결제 승인)
//   4. orders 테이블 신설 + 결제 정보·상태 저장
// 에스디컨버전스 가맹점 라이브 클라이언트 키 (MID: HJ_3dunibv8cd, 카드사 심사 통과)
const TOSS_CLIENT_KEY = "live_ck_Z1aOwX7K8meo91jKEZ008yQxzvNP";

const payWithToss = async ({ amount, orderName, customerEmail = "", customerName = "" }) => {
  if (!window.TossPayments) {
    alert("토스페이먼츠 SDK 로드 실패 — 잠시 후 다시 시도해 주세요.");
    return false;
  }
  try {
    const tossPayments = window.TossPayments(TOSS_CLIENT_KEY);
    const sbUser = window.__ub_auth && window.__ub_auth.user;
    // customerKey — 영문/숫자/일부 기호만 허용 (2~50자 권장). UUID 또는 anonymous_<랜덤>.
    const rawKey = (sbUser && sbUser.id) || ("anonymous-" + Math.random().toString(36).slice(2, 14));
    const customerKey = String(rawKey).replace(/[^a-zA-Z0-9\-_=.@]/g, "").slice(0, 50);
    const payment = tossPayments.payment({ customerKey });
    const orderId = ("ub" + Date.now() + Math.random().toString(36).slice(2, 8)).slice(0, 64);
    // requestPayment 파라미터 — undefined 는 절대 전달하지 않음 (토스 SDK 가 unknown error 발생)
    const params = {
      method: "CARD",
      amount: { currency: "KRW", value: Number(amount) },
      orderId,
      orderName: String(orderName || "주문").slice(0, 100),
      successUrl: `${location.origin}/?toss=success`,
      failUrl:    `${location.origin}/?toss=fail`,
    };
    if (customerEmail) params.customerEmail = String(customerEmail);
    if (customerName)  params.customerName  = String(customerName);
    console.log("[toss] requestPayment params:", params, "customerKey:", customerKey);
    await payment.requestPayment(params);
    return true;
  } catch (e) {
    if (e && (e.code === "USER_CANCEL" || e.code === "PAY_PROCESS_CANCELED")) return false;
    console.error("[toss] payment error:", e);
    const code = (e && e.code) ? e.code : "UNKNOWN";
    const msg  = (e && e.message) ? e.message : String(e);
    alert(`결제 오류 [${code}]\n${msg}\n\n(개발자 도구 콘솔 F12 → Console 탭에서 상세 확인)`);
    return false;
  }
};

window.UB = {
  useState, useMemo, useEffect, useRef, Fragment,
  MODELS, FAQS, STEPS,
  SHIP, calcShip,
  MEMBERS, calcGrade, GRADE_COLORS,
  loadMe, saveMe, upsertAddress,
  useIsMobile,
  openPostcode,
  loadProducts, useProducts,
  isRemoteArea,
  payWithToss,
  Ic, Btn, Badge, Logo, Bracket, Orbit, TopNav, BottomTabs,
};
