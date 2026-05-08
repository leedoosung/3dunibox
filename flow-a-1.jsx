// 가설 A — Wall-first Discovery
// 설치환경(벽 종류)부터 묻고 → 호환 모델 → 상세 → 견적 → 완료

// A1. Hero: 벽 종류부터 묻기
const A1_Hero = () => (
  <div className="ub-screen desktop">
    <TopBar active="products" />
    <div className="grow ub-radial-cyan ub-grid-bg" style={{ position: "relative", padding: "80px 80px 60px", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center", height: "100%" }}>
        <div>
          <Eyebrow style={{ marginBottom: 20 }}>SUPREMA · UNIVERSAL · 3D PRINTED</Eyebrow>
          <h1 className="ub-h1" style={{ marginBottom: 24 }}>
            어떤 벽에도,<br/>
            어떤 단말기도.<br/>
            <span style={{ color: "var(--cyan-400)" }}>유니버설 3D 브라켓.</span>
          </h1>
          <p style={{ color: "var(--gray-200)", fontSize: 16, lineHeight: 1.6, maxWidth: 480, marginBottom: 40 }}>
            슈프리마 출입통제 단말기를 유리문·콘크리트벽 어디든 깔끔하게.
            케이블은 브라켓 안으로, 시공은 10분 안에.
          </p>

          {/* Wall-first selector */}
          <div className="ub-card" style={{ padding: 28, maxWidth: 520 }}>
            <div className="ub-spec-key" style={{ marginBottom: 14 }}>STEP 1 / 어디에 설치하시나요?</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              <WallChoice icon="glass" title="유리문/유리벽" sub="강화유리 8~12mm" selected />
              <WallChoice icon="concrete" title="콘크리트벽" sub="석고·벽돌 포함" />
              <WallChoice icon="mixed" title="기타·복합" sub="목재·금속 등" />
            </div>
            <Btn variant="primary" size="lg" style={{ marginTop: 20, width: "100%" }} icon="→">호환 단말기 보기</Btn>
          </div>
        </div>

        {/* Hero visual */}
        <div style={{ position: "relative", height: "100%", display: "grid", placeItems: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(0,200,240,0.18), transparent 60%)" }} />
          <div style={{ position: "relative", transform: "scale(1.4)" }}>
            <BracketIso size={320} />
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <FeatureChip>케이블 내장 수납</FeatureChip>
            <FeatureChip>드릴 최소화</FeatureChip>
            <FeatureChip>10분 시공</FeatureChip>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WallChoice = ({ icon, title, sub, selected }) => (
  <div style={{
    padding: 14,
    borderRadius: 10,
    border: `1px solid ${selected ? "var(--cyan-400)" : "var(--line-strong)"}`,
    background: selected ? "rgba(0,200,240,0.08)" : "rgba(255,255,255,0.02)",
    cursor: "pointer",
    boxShadow: selected ? "0 0 0 3px rgba(0,200,240,0.1)" : "none",
  }}>
    <div className={`wall-${icon}`} style={{ height: 48, borderRadius: 6, marginBottom: 10 }} />
    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--white)", marginBottom: 2 }}>{title}</div>
    <div style={{ fontSize: 11, color: "var(--gray-400)", fontFamily: "var(--font-mono)" }}>{sub}</div>
  </div>
);

const FeatureChip = ({ children }) => (
  <div style={{
    padding: "8px 14px",
    borderRadius: 100,
    background: "rgba(10,22,40,0.85)",
    border: "1px solid var(--line-strong)",
    fontSize: 12,
    color: "var(--gray-100)",
    fontWeight: 500,
    backdropFilter: "blur(8px)",
  }}>
    {children}
  </div>
);

// A2. 호환 단말기 그리드 (벽=유리 선택됨)
const A2_Compatible = () => {
  const filtered = MODELS.slice(0, 8);
  return (
    <div className="ub-screen desktop">
      <TopBar active="products" />
      <div style={{ padding: "32px 80px 24px", borderBottom: "1px solid var(--line)" }}>
        <Stepper steps={["설치환경", "단말기 선택", "제품 상세", "견적 문의", "완료"]} current={1} />
      </div>
      <div style={{ padding: "32px 80px", flex: 1, overflow: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
          <div>
            <Eyebrow style={{ marginBottom: 10 }}>STEP 2 / 단말기 선택</Eyebrow>
            <h2 className="ub-h2">유리문에 설치 가능한 <span style={{ color: "var(--cyan-400)" }}>11개 모델</span></h2>
            <div style={{ color: "var(--gray-300)", marginTop: 8, fontSize: 14 }}>
              현재 설치환경: <span style={{ color: "var(--cyan-400)" }}>강화유리 8~12mm</span> · <span style={{ textDecoration: "underline", cursor: "pointer" }}>변경</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span className="ub-spec-key">정렬</span>
            <select className="ub-select" style={{ width: 160, padding: "8px 12px" }}>
              <option>판매중 우선</option>
              <option>가격 낮은순</option>
              <option>최신순</option>
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {filtered.map((m) => <ProductCard key={m.id} model={m} />)}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ model, highlight }) => (
  <div className="ub-card-product" style={highlight ? { borderColor: "var(--cyan-400)" } : {}}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
      <Badge kind={model.status === "live" ? "live" : "soon"}>
        {model.status === "live" ? "판매중" : "출시예정"}
      </Badge>
      <div className="ub-mono" style={{ fontSize: 10, color: "var(--gray-400)" }}>{model.code}</div>
    </div>
    <div style={{ height: 120, background: "rgba(255,255,255,0.02)", borderRadius: 8, display: "grid", placeItems: "center", marginBottom: 14, border: "1px solid var(--line)" }}>
      <DeviceIllustration size={64} model={model.cat === "face" ? "face" : model.cat === "card" ? "card" : "fp"} glow={model.status === "live"} />
    </div>
    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--white)", marginBottom: 4 }}>{model.name}</div>
    <div style={{ fontSize: 12, color: "var(--gray-300)", marginBottom: 14, minHeight: 16 }}>{model.desc}</div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div className="ub-mono" style={{ fontSize: 14, color: "var(--white)", fontWeight: 600 }}>
        ₩{model.price.toLocaleString()}
      </div>
      <div style={{ fontSize: 11, color: "var(--cyan-400)", fontWeight: 600 }}>상세 →</div>
    </div>
  </div>
);

window.A1_Hero = A1_Hero;
window.A2_Compatible = A2_Compatible;
window.ProductCard = ProductCard;
window.WallChoice = WallChoice;
window.FeatureChip = FeatureChip;
