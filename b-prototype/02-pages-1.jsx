// B안 — 페이지 컴포넌트들
// HomePage, CatalogPage, DetailPage, GuidePage, FAQPage, QuotePage, CartDrawer, ToastHost

const { useState: uS2, useMemo: uM2, useEffect: uE2, useRef: uR2, Fragment: F2 } = React;
const { MODELS, FAQS, STEPS, Ic, Btn, Badge, Bracket, Orbit, useIsMobile: useIsMobile2, useProducts: useProducts2 } = window.UB;

// ─── HERO 제품 360 슬라이드쇼 ─────────────────────────────────────────────
// 영상 파일은 /videos/<ID>_360.{webm,mp4} 에 위치. WebM(VP9 알파) 우선, MP4 폴백.
// 영상 끝(onEnded)에 다음으로 전환. 영상이 없는 ID 는 onError 로 즉시 건너뜀.
// 새 영상 적용 시 캐시 무효화 (?v=숫자 증가)
const HERO_VIDEO_VER = 4;
const HERO_VIDEO_IDS = ["UB-BEP2","UB-BEW2","UB-BLN2","UB-BS2A","UB-BS3","UB-BS3-L","UB-BS3-R","UB-XP2_G","UB-XP2_M","UB-XS2"];

const HeroProductSlideshow = ({ size = 320 }) => {
  const [idx, setIdx] = uS2(0);
  const ref = uR2(null);
  uE2(() => {
    const v = ref.current;
    if (!v) return;
    try { v.load(); v.play().catch(() => {}); } catch (e) {}
  }, [idx]);
  const next = () => setIdx(p => (p + 1) % HERO_VIDEO_IDS.length);
  const id = HERO_VIDEO_IDS[idx];
  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <video
        ref={ref}
        autoPlay muted playsInline
        onEnded={next}
        onError={next}
        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
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

// ─── HOME ─────────────────────────────────────────────────────────────────────
const HomePage = ({ onNav }) => {
  useProducts2();   // products fetch 완료 시 재렌더 구독
  const live = MODELS.filter(m => m.status === "live");
  const isMobile = useIsMobile2(1024);
  const PAD = isMobile ? "32px 16px 28px" : "80px 80px 60px";
  const SECTION_PAD = isMobile ? "40px 16px" : "60px 80px";
  return (
    <div>
      {isMobile ? (
        // 모바일: 컴팩트 Hero + 슬라이드쇼
        <section style={{ padding: "20px 16px 28px" }}>
          <div className="ub-eyebrow" style={{ marginBottom: 6, fontSize: 10 }}>SD CONVERGENCE · 3D PRINTING STUDIO</div>
          <h1 style={{ fontSize: "clamp(22px, 6.5vw, 30px)", lineHeight: 1.25, color: "var(--white)", margin: 0, fontWeight: 800, wordBreak: "keep-all" }}>
            정밀하게 설계했습니다<br/>
            <span style={{ color: "var(--cyan-400)" }}>PETG 소재로 더 가볍게</span>
          </h1>
          <p style={{ color: "var(--gray-300)", fontSize: 13, lineHeight: 1.5, margin: "10px 0 18px" }}>
            3D 프린팅으로 현장의 불편함을 해결합니다.
          </p>
          <div style={{ display: "grid", placeItems: "center", marginTop: 8 }}>
            <HeroProductSlideshow size={240} />
          </div>
        </section>
      ) : (
        <section style={{ padding: PAD }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div className="ub-eyebrow" style={{ marginBottom: 16 }}>SD CONVERGENCE · 3D PRINTING STUDIO</div>
              <h1 className="ub-h1" style={{ fontSize: 60, marginBottom: 20, lineHeight: 1.1, wordBreak: "keep-all", letterSpacing: -1 }}>
                정밀하게 설계했습니다<br/>
                <span style={{ color: "var(--cyan-400)" }}>PETG 소재로 더 가볍게</span>
              </h1>
              <p style={{ color: "var(--gray-200)", fontSize: 18, lineHeight: 1.6, marginBottom: 32, maxWidth: 540 }}>
                3D 프린팅으로 <strong style={{ color: "var(--white)" }}>현장의 불편함</strong>을 해결합니다.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: 36 }}>
                {[["1개+", "최소 주문"], ["1일", "출고 기준"], ["0.1mm", "정밀도"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 40, color: "var(--cyan-400)", lineHeight: 1 }}>{n}</div>
                    <div className="ub-spec-key" style={{ marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", placeItems: "center", height: 360 }}>
              <HeroProductSlideshow size={320} />
            </div>
          </div>
        </section>
      )}

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

      <section style={{ padding: SECTION_PAD, background: "var(--navy-900)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="ub-eyebrow" style={{ marginBottom: 8, textAlign: "center" }}>WHY 3D</div>
        <h2 className="ub-h2" style={{ marginBottom: isMobile ? 24 : 40, textAlign: "center" }}>왜 3D인가</h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 10 : 20 }}>
          {[
            { t: "설치업체가 만든 제품입니다", d: "현장을 아니까 더 실용적으로 만듭니다." },
            { t: "쓰는 사람이 직접 만듭니다",   d: "설치 전문가가 설계하고 검증한 제품입니다." },
            { t: "불편하면 말씀해 주세요",     d: "현장 피드백으로 제품을 계속 개선합니다." },
            { t: "계속 새로운 제품이 나옵니다", d: "현장 수요에 맞춰 라인업을 꾸준히 늘려갑니다." },
          ].map((f, i) => (
            <div key={i} className="ub-card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--cyan-400)", marginBottom: 14, letterSpacing: 1 }}>0{i+1}</div>
              <div style={{ fontSize: isMobile ? 14 : 15, fontWeight: 700, color: "var(--white)", marginBottom: 8, lineHeight: 1.35, wordBreak: "keep-all" }}>{f.t}</div>
              <div style={{ fontSize: isMobile ? 12 : 13, color: "var(--gray-300)", lineHeight: 1.6, wordBreak: "keep-all" }}>{f.d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ m, onClick, onAdd }) => {
  const isMobile = useIsMobile2(1024);
  return (
  <div className="ub-card-product" onClick={onClick}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: isMobile ? 8 : 14 }}>
      <Badge kind={m.status === "live" ? "live" : "soon"}>{m.status === "live" ? "판매중" : "출시예정"}</Badge>
      <span className="ub-mono" style={{ fontSize: 10, color: "var(--gray-400)" }}>{m.code}</span>
    </div>
    <div style={{ aspectRatio: "3 / 4", background: m.image_url ? "#fff" : "rgba(255,255,255,0.02)", borderRadius: 8, display: "grid", placeItems: "center", marginBottom: isMobile ? 10 : 14, border: "1px solid var(--line)", overflow: "hidden" }}>
      {m.image_url && (
        <img src={m.image_url} alt={m.name} loading="eager" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      )}
    </div>
    <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "var(--white)", marginBottom: 2 }}>{m.name}</div>
    {m.desc && (
      <div style={{
        fontSize: isMobile ? 11 : 12,
        color: "var(--gray-300)",
        marginBottom: isMobile ? 8 : 14,
        lineHeight: 1.4,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        wordBreak: "keep-all",
      }}>{m.desc}</div>
    )}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: isMobile ? 8 : 0 }}>
      <span className="ub-mono" style={{ fontSize: isMobile ? 13 : 14, color: "var(--white)", fontWeight: 700 }}>₩{m.price.toLocaleString()}</span>
      {onAdd && m.status === "live" ? (
        <span onClick={(e) => { e.stopPropagation(); onAdd(m); }} style={{ fontSize: 11, color: "var(--cyan-400)", fontWeight: 600, padding: "4px 8px", border: "1px solid var(--cyan-400)", borderRadius: 6 }}>+ 담기</span>
      ) : (
        <span style={{ fontSize: 11, color: "var(--cyan-400)", fontWeight: 600 }}>상세 →</span>
      )}
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
    let r = MODELS.filter(m => m.status === "live");
    if (q.trim()) {
      const k = q.toLowerCase();
      r = r.filter(m => m.name.toLowerCase().includes(k) || m.code.toLowerCase().includes(k) || m.desc.toLowerCase().includes(k));
    }
    if (sort === "price-asc") r = [...r].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") r = [...r].sort((a, b) => b.price - a.price);
    return r;
  }, [q, sort]);

  const askCustom = () => alert("맞춤 제작은 010-9090-9029 또는 leedoo80@gmail.com로 문의 부탁드립니다.");

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
