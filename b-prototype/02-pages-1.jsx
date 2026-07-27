// B안 — 페이지 컴포넌트들
// HomePage, CatalogPage, DetailPage, GuidePage, FAQPage, QuotePage, CartDrawer, ToastHost

const { useState: uS2, useMemo: uM2, useEffect: uE2, useRef: uR2, Fragment: F2 } = React;
const { MODELS, FAQS, STEPS, Ic, Btn, Badge, Bracket, Orbit, useIsMobile: useIsMobile2, useProducts: useProducts2 } = window.UB;

// ─── HERO 제품 360 슬라이드쇼 ─────────────────────────────────────────────
// 영상 파일은 /videos/<ID>_360.{webm,mp4} 에 위치. WebM(VP9 알파) 우선, MP4 폴백.
// 영상 끝(onEnded)에 다음으로 전환. 영상이 없는 ID 는 onError 로 즉시 건너뜀.
// 새 영상 적용 시 캐시 무효화 (?v=숫자 증가)
const HERO_VIDEO_VER = 6;
const HERO_VIDEO_IDS = ["UB-BEP2","UB-BEW2","UB-BLN2","UB-BS2A","UB-BS3","UB-BS3-45","UB-XP2_G","UB-XP2_M","UB-XS2"];
const HERO_PLAYBACK_RATE = 0.65;  // 1 = 원래 속도, 0.65 = 35% 느림

const HeroProductSlideshow = ({ size = 320 }) => {
  const [idx, setIdx] = uS2(0);
  const [ready, setReady] = uS2(false);   // 새 영상이 onCanPlay 발생까지 숨김 → 깜빡임 방지
  const ref = uR2(null);

  uE2(() => {
    setReady(false);  // idx 바뀌면 즉시 숨김 (key 로 element 자체도 갈아끼움)
    const v = ref.current;
    if (!v) return;
    v.playbackRate = HERO_PLAYBACK_RATE;
    try { v.play().catch(() => {}); } catch (e) {}
  }, [idx]);

  const next = () => setIdx(p => (p + 1) % HERO_VIDEO_IDS.length);
  const id = HERO_VIDEO_IDS[idx];

  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <video
        key={`hero-vid-${idx}`}                // idx 변경 시 fresh mount — 이전 프레임 잔존/포스터 깜빡임 제거
        ref={ref}
        autoPlay muted playsInline preload="auto"
        onCanPlay={() => setReady(true)}      // 재생 준비 끝나면 fade in
        onEnded={next}
        onError={next}
        style={{
          width: "100%", height: "100%",
          objectFit: "contain", display: "block",
          opacity: ready ? 1 : 0,
          transition: "opacity 0.45s ease-out",
        }}
      >
        <source src={`/videos/${id}_360.webm?v=${HERO_VIDEO_VER}`} type="video/webm" />
        <source src={`/videos/${id}_360.mp4?v=${HERO_VIDEO_VER}`} type="video/mp4" />
      </video>
      <div style={{ position: "absolute", bottom: -18, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5 }}>
        {HERO_VIDEO_IDS.map((_, i) => (
          <span key={i} style={{
            width: 5, height: 5, borderRadius: "50%",
            background: i === idx ? "var(--cyan-400)" : "rgba(255,255,255,0.18)",
            transition: "background 0.2s",
          }} />
        ))}
      </div>
    </div>
  );
};

// ─── 특수 라인업 카드 (홈) — 기존 360° 회전 영상(HeroProductSlideshow) 재사용 ──
const Special3DBand = ({ onNav }) => {
  const isMobile = useIsMobile2(1024);
  return (
    <section style={{ padding: isMobile ? "0 16px 40px" : "0 24px 60px" }}>
      <div style={{ borderRadius: 24, overflow: "hidden", position: "relative",
        background: "linear-gradient(110deg,#0a63d6 0%,#0b2f66 55%,#07203f 100%)",
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", minHeight: isMobile ? "auto" : 360, alignItems: "center" }}>
        <div style={{ padding: isMobile ? "28px 22px 8px" : 44 }}>
          <div style={{ fontSize: isMobile ? 22 : 26, fontWeight: 800, color: "#fff", letterSpacing: -0.5, marginBottom: 8 }}>360°로 살펴보는 제품</div>
          <div style={{ color: "#cfe0ff", fontSize: 14, lineHeight: 1.6 }}>실제 제품을 360° 돌려가며 확인하세요. 배선 수납 구조와 마감 품질을 한눈에 볼 수 있습니다.</div>
          <div onClick={() => onNav({ name: "catalog" })} style={{ marginTop: 22, display: "inline-block", background: "#fff", color: "#0b2f66", fontWeight: 800, fontSize: 14, padding: "12px 20px", borderRadius: 11, cursor: "pointer" }}>전 제품 보기 →</div>
        </div>
        <div style={{ display: "grid", placeItems: "center", padding: isMobile ? "6px 0 34px" : 24, minHeight: isMobile ? 240 : 300 }}>
          <HeroProductSlideshow size={isMobile ? 220 : 300} />
        </div>
      </div>
    </section>
  );
};

// ─── HOME ─────────────────────────────────────────────────────────────────────
const HomePage = ({ onNav }) => {
  useProducts2();   // products fetch 완료 시 재렌더 구독
  const live = MODELS.filter(m => m.status === "live" || m.status === "sold_out");
  const isMobile = useIsMobile2(1024);
  const PAD = isMobile ? "32px 16px 28px" : "80px 80px 60px";
  const SECTION_PAD = isMobile ? "40px 16px" : "52px 24px";
  return (
    <div>
      <section style={{ padding: isMobile ? "18px 16px 4px" : "32px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr 0.9fr", gap: isMobile ? 12 : 16 }}>
          {[
            { kick: "배선 정리", bg: "linear-gradient(160deg, #1e5fc0 0%, #103070 55%, #0b2050 100%)",
              h: <>뒤엉킨 배선 뭉치,<br/><span style={{ color: "var(--cyan-400)" }}>억지로 구겨 넣으셨나요?</span></>,
              pill: "여유 공간 설계로 딱 맞게 →", to: "catalog" },
            { kick: "유리문 시공", bg: "linear-gradient(160deg, #16478f 0%, #0c2a5c 75%)",
              h: <>유리문이라<br/>시공 못 하셨나요?</>,
              pill: "이제 가능합니다 →", to: "catalog" },
            { kick: "호환 브랜드", bg: "linear-gradient(160deg, #1f6aff 0%, #0f3c93 100%)",
              h: <>SUPREMA · ZKTeco<br/><span style={{ color: "var(--cyan-400)" }}>glonexs</span></>,
              pill: "전 제품 보기 →", to: "catalog" },
          ].map((c, i) => (
            <div key={i} style={{ position: "relative", borderRadius: 20, padding: isMobile ? "20px 18px" : "24px 22px", minHeight: isMobile ? 140 : 210, display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid var(--line)", background: c.bg }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, color: "rgba(255,255,255,0.85)" }}>{c.kick}</div>
              <h3 style={{ fontSize: isMobile ? 20 : 24, fontWeight: 800, lineHeight: 1.3, margin: "12px 0 0", color: "#fff", wordBreak: "keep-all" }}>{c.h}</h3>
              <div onClick={() => onNav({ name: c.to })} style={{ marginTop: isMobile ? 16 : "auto", alignSelf: "flex-start", background: "rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 100, padding: "9px 15px", fontSize: 12.5, fontWeight: 600, color: "#fff", cursor: "pointer" }}>{c.pill}</div>
            </div>
          ))}
          <aside style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: 20, padding: "20px 20px", background: "var(--navy-950)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h4 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 800, color: "var(--white)" }}>바로가기</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 8px" }}>
              {[
                ["📦", "#3B82F6", "전 제품", "catalog"], ["🧰", "#22C3E6", "시공 사례", "guide"],
                ["💬", "#A78BFA", "자주 묻는 질문", "faq"], ["📋", "#F59E0B", "주문 조회", "me"],
                ["🏢", "#34D399", "회사 소개", "about"], ["🛒", "#F472B6", "대량구매", "about"],
              ].map(([ic, col, label, to]) => (
                <div key={label} onClick={() => onNav({ name: to })} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12.5, fontWeight: 600, color: "var(--gray-100)", cursor: "pointer" }}>
                  <span style={{ width: 30, height: 30, borderRadius: 9, background: col + "22", display: "grid", placeItems: "center", fontSize: 15, flexShrink: 0 }}>{ic}</span>
                  <span style={{ wordBreak: "keep-all", lineHeight: 1.2 }}>{label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: SECTION_PAD }}>
        <div style={{ marginBottom: isMobile ? 18 : 28 }}>
          <div className="ub-eyebrow" style={{ marginBottom: 8 }}>PRODUCT LINEUP</div>
          <h2 className="ub-h2">3D UniBox 제품 라인업</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 10 : 16 }}>
          {live.map(m => (
            <ProductCard key={m.id} m={m} onClick={() => onNav({ name: "detail", id: m.id })} />
          ))}
        </div>
      </section>

      <Special3DBand onNav={onNav} />
    </div>
  );
};

const ProductCard = ({ m, onClick, onAdd }) => {
  const isMobile = useIsMobile2(1024);
  return (
  <div onClick={onClick} style={{ cursor: "pointer" }}>
    <div style={{ aspectRatio: "3 / 4", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: isMobile ? 12 : 16, overflow: "hidden", padding: 4, boxSizing: "border-box" }}>
      {m.image_url ? (
        <img src={m.image_url} alt={m.name} loading="eager"
             style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", display: "block", borderRadius: 16, filter: "drop-shadow(0 14px 26px rgba(0,0,0,0.55))" }} />
      ) : (
        <span className="ub-mono" style={{ fontSize: 11, color: "var(--gray-500, #6B7280)" }}>{m.code}</span>
      )}
    </div>
    <div style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, color: "var(--white)", marginBottom: 4, lineHeight: 1.3, wordBreak: "keep-all" }}>{m.name}</div>
    {m.desc && (
      <div style={{ fontSize: isMobile ? 12 : 13, color: "var(--gray-300)", marginBottom: 8, lineHeight: 1.45, wordBreak: "keep-all",
        display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{m.desc}</div>
    )}
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
      <span className="ub-mono" style={{ fontSize: isMobile ? 14 : 16, color: "var(--white)", fontWeight: 800 }}>₩{m.price.toLocaleString()}</span>
      <Badge kind={m.status === "live" ? "live" : m.status === "sold_out" ? "soldout" : "soon"}>{m.status === "live" ? "판매중" : m.status === "sold_out" ? "재고없음" : "출시예정"}</Badge>
    </div>
  </div>
  );
};

// ─── CATALOG ──────────────────────────────────────────────────────────────────
const CatalogPage = ({ onNav, onAdd }) => {
  useProducts2();
  const isMobile = useIsMobile2(1024);
  const [q, setQ] = uS2("");
  const [sort, setSort] = uS2("status");

  const filtered = uM2(() => {
    let r = MODELS.filter(m => m.status === "live" || m.status === "sold_out");
    if (q.trim()) {
      const k = q.toLowerCase();
      r = r.filter(m => m.name.toLowerCase().includes(k) || m.code.toLowerCase().includes(k) || m.desc.toLowerCase().includes(k));
    }
    if (sort === "price-asc") r = [...r].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") r = [...r].sort((a, b) => b.price - a.price);
    return r;
  }, [q, sort]);

  const askCustom = () => alert("맞춤 제작은 010-2776-9109 또는 leedoo80@gmail.com로 문의 부탁드립니다.");

  return (
    <div style={{ padding: isMobile ? "20px 16px 40px" : "32px 80px 60px" }}>
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "stretch" : "flex-end", gap: isMobile ? 16 : 0, marginBottom: 20 }}>
        <div>
          <div className="ub-eyebrow" style={{ marginBottom: 8 }}>PRODUCT CATALOG</div>
          <h2 className="ub-h2">모델별 전용 브라켓</h2>
          <div style={{ color: "var(--gray-400)", fontSize: 13, marginTop: 6 }}>{filtered.length}개 제품</div>
        </div>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 8, alignItems: isMobile ? "stretch" : "center" }}>
          <div style={{ position: "relative", width: isMobile ? "100%" : "auto" }}>
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--gray-400)" }}>{Ic.search}</span>
            <input className="ub-input" placeholder="모델명 / 코드 검색" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: isMobile ? "100%" : 280, paddingLeft: 36 }} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <select className="ub-select" value={sort} onChange={(e) => setSort(e.target.value)} style={{ width: isMobile ? "100%" : 150, flex: isMobile ? 1 : "none" }}>
              <option value="status">기본 정렬</option>
              <option value="price-asc">가격 낮은순</option>
              <option value="price-desc">가격 높은순</option>
            </select>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div style={{ padding: 60, textAlign: "center", border: "1px dashed var(--line-strong)", borderRadius: 12 }}>
          <div style={{ fontSize: 14, color: "var(--gray-200)", marginBottom: 6 }}>검색 결과가 없습니다</div>
          <div style={{ fontSize: 12, color: "var(--gray-400)" }}>다른 키워드로 검색해주세요</div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 10 : 16 }}>
          {filtered.map(m => (
            <ProductCard key={m.id} m={m} onClick={() => onNav({ name: "detail", id: m.id })} onAdd={onAdd} />
          ))}
        </div>
      )}
    </div>
  );
};

window.UB.HomePage = HomePage;
window.UB.CatalogPage = CatalogPage;
window.UB.ProductCard = ProductCard;
