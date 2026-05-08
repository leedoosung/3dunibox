// 가설 C — 3D Visualizer / AR Confidence
// 인터랙티브 시뮬레이터 중심: Hero(3D 뷰어) → 모델·벽 조합 시뮬레이션 → 치수 확인 → 설치 미리보기 → 빠른 견적

// C1. Hero — 인터랙티브 3D 뷰어
const C1_Hero = () => (
  <div className="ub-screen desktop">
    <TopBar active="products" />
    <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #050a14, #0a1628)" }}>
      {/* Background grid */}
      <div className="ub-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 65% 50%, rgba(0,200,240,0.18), transparent 55%)" }} />

      <div style={{ position: "relative", height: "100%", display: "grid", gridTemplateColumns: "440px 1fr", gap: 0 }}>
        {/* Left side panel */}
        <div style={{ padding: "60px 40px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "1px solid var(--line)", background: "rgba(10,22,40,0.6)", backdropFilter: "blur(8px)" }}>
          <Eyebrow style={{ marginBottom: 16 }}>3D · INTERACTIVE · TRUE-TO-SCALE</Eyebrow>
          <h1 className="ub-h1" style={{ fontSize: 44, marginBottom: 18, lineHeight: 1.1 }}>
            내 벽에<br/>
            <span style={{ color: "var(--cyan-400)" }}>진짜 맞을까?</span>
          </h1>
          <div style={{ color: "var(--gray-200)", fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>
            단말기 모델과 벽 종류를 골라 실제 치수로 미리 확인하세요. 케이블 경로까지 시각화됩니다.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
            <FeatureLine n="01">실측 기반 1:1 3D 모델</FeatureLine>
            <FeatureLine n="02">벽 두께·재질별 시뮬레이션</FeatureLine>
            <FeatureLine n="03">케이블 동선 미리보기</FeatureLine>
          </div>
          <Btn variant="primary" size="lg" icon="→">시뮬레이터 시작</Btn>
        </div>

        {/* Right: 3D viewport */}
        <div style={{ position: "relative", display: "grid", placeItems: "center" }}>
          {/* viewport chrome */}
          <div style={{ position: "absolute", top: 24, left: 24, right: 24, display: "flex", justifyContent: "space-between", zIndex: 2 }}>
            <div style={{ display: "flex", gap: 6 }}>
              <ViewBtn>360°</ViewBtn>
              <ViewBtn>측면</ViewBtn>
              <ViewBtn>분해</ViewBtn>
              <ViewBtn>치수</ViewBtn>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <ViewBtn>AR</ViewBtn>
              <ViewBtn>전체화면</ViewBtn>
            </div>
          </div>

          {/* The 3D thing */}
          <div style={{ position: "relative", transform: "scale(1.4)" }}>
            <BracketIso size={360} />
          </div>

          {/* Dimension labels */}
          <div style={{ position: "absolute", left: "30%", top: "30%", display: "flex", alignItems: "center", gap: 8, color: "var(--cyan-400)", fontFamily: "var(--font-mono)", fontSize: 12 }}>
            <span style={{ width: 60, height: 1, background: "var(--cyan-400)" }} />
            <span>88mm</span>
          </div>
          <div style={{ position: "absolute", right: "20%", top: "60%", display: "flex", alignItems: "center", gap: 8, color: "var(--cyan-400)", fontFamily: "var(--font-mono)", fontSize: 12 }}>
            <span>168mm</span>
            <span style={{ width: 1, height: 60, background: "var(--cyan-400)" }} />
          </div>

          {/* Bottom mini-controls */}
          <div style={{ position: "absolute", bottom: 32, left: 32, right: 32, display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 2 }}>
            <div className="ub-card" style={{ padding: "10px 16px", display: "flex", gap: 16, alignItems: "center", background: "rgba(10,22,40,0.85)", backdropFilter: "blur(8px)" }}>
              <span className="ub-spec-key">현재 모델</span>
              <span className="ub-mono" style={{ fontSize: 13, color: "var(--white)" }}>FaceStation F2 / 유리문 10mm</span>
              <span style={{ color: "var(--cyan-400)", fontSize: 12, cursor: "pointer" }}>변경 →</span>
            </div>
            <div style={{ display: "flex", gap: 4, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gray-400)" }}>
              <span>DRAG</span><span>·</span><span>SCROLL ZOOM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureLine = ({ n, children }) => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 0", borderTop: "1px solid var(--line)" }}>
    <div className="ub-mono" style={{ fontSize: 11, color: "var(--cyan-400)" }}>{n}</div>
    <div style={{ fontSize: 13, color: "var(--gray-100)" }}>{children}</div>
  </div>
);

// C2. Configurator — 모델 + 벽 조합
const C2_Configurator = () => (
  <div className="ub-screen desktop">
    <TopBar active="products" />
    <div style={{ flex: 1, display: "grid", gridTemplateColumns: "320px 1fr 320px", overflow: "hidden" }}>
      {/* Left: model picker */}
      <div style={{ borderRight: "1px solid var(--line)", overflow: "auto", padding: 24 }}>
        <div className="ub-spec-key" style={{ marginBottom: 14 }}>1 · 단말기 모델</div>
        <input className="ub-input" placeholder="검색..." style={{ marginBottom: 14 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {MODELS.slice(0, 8).map((m, i) => (
            <div key={m.id} style={{
              display: "flex", gap: 12, alignItems: "center",
              padding: 10, borderRadius: 8,
              border: i === 0 ? "1px solid var(--cyan-400)" : "1px solid var(--line)",
              background: i === 0 ? "rgba(0,200,240,0.06)" : "transparent",
              cursor: "pointer",
            }}>
              <div style={{ width: 40, height: 56, flexShrink: 0, background: "rgba(255,255,255,0.03)", borderRadius: 4, display: "grid", placeItems: "center" }}>
                <DeviceIllustration size={28} model={m.cat === "face" ? "face" : m.cat === "card" ? "card" : "fp"} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--white)" }}>{m.name}</div>
                <div className="ub-mono" style={{ fontSize: 10, color: "var(--gray-400)" }}>{m.code}</div>
              </div>
              {m.status === "live" && <Badge kind="live">판매중</Badge>}
            </div>
          ))}
        </div>
      </div>

      {/* Center: 3D viewport */}
      <div style={{ position: "relative", background: "linear-gradient(180deg, #050a14, #0a1628)", overflow: "hidden" }}>
        <div className="ub-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.25 }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 60%, rgba(0,200,240,0.15), transparent 50%)" }} />

        {/* viewport chrome */}
        <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between", zIndex: 2 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <ViewBtn>360°</ViewBtn>
            <ViewBtn>측면</ViewBtn>
            <ViewBtn>위에서</ViewBtn>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <ViewBtn>치수 보기 ✓</ViewBtn>
            <ViewBtn>케이블 ✓</ViewBtn>
          </div>
        </div>

        {/* Wall plane */}
        <div className="wall-glass" style={{ position: "absolute", inset: "20% 15%", borderRadius: 8, transform: "rotateX(8deg)" }} />

        {/* Bracket + device */}
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
          <BracketIso size={300} />
        </div>

        {/* Annotations */}
        <Annotation x="22%" y="38%" label="VHB 부착면" />
        <Annotation x="62%" y="50%" label="케이블 채널 ⌀8mm" />
        <Annotation x="48%" y="22%" label="단말기 결합" right />

        {/* Bottom info */}
        <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, display: "flex", gap: 10, justifyContent: "center" }}>
          <div className="ub-card" style={{ padding: "12px 18px", display: "flex", gap: 24, background: "rgba(10,22,40,0.85)", backdropFilter: "blur(8px)" }}>
            <MiniSpec k="W" v="88mm" />
            <MiniSpec k="H" v="168mm" />
            <MiniSpec k="D" v="38mm" />
            <MiniSpec k="WT" v="142g" />
            <MiniSpec k="MAT" v="PETG" />
          </div>
        </div>
      </div>

      {/* Right: wall + options */}
      <div style={{ borderLeft: "1px solid var(--line)", overflow: "auto", padding: 24 }}>
        <div className="ub-spec-key" style={{ marginBottom: 14 }}>2 · 설치 환경</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 24 }}>
          {[
            { id: "glass", t: "유리문", on: true },
            { id: "concrete", t: "콘크리트", on: false },
            { id: "gypsum", t: "석고벽", on: false },
            { id: "metal", t: "금속", on: false },
          ].map((w) => (
            <div key={w.id} style={{
              padding: 12, borderRadius: 8,
              border: w.on ? "1px solid var(--cyan-400)" : "1px solid var(--line)",
              background: w.on ? "rgba(0,200,240,0.06)" : "rgba(255,255,255,0.02)",
              cursor: "pointer", textAlign: "center",
            }}>
              <div className={w.id === "glass" ? "wall-glass" : w.id === "concrete" ? "wall-concrete" : "wall-mixed"} style={{ height: 32, borderRadius: 4, marginBottom: 8 }} />
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--white)" }}>{w.t}</div>
            </div>
          ))}
        </div>

        <div className="ub-spec-key" style={{ marginBottom: 10 }}>벽 두께</div>
        <div style={{ marginBottom: 24 }}>
          <input type="range" min={6} max={20} defaultValue={10} style={{ width: "100%", accentColor: "var(--cyan-400)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gray-400)" }}>
            <span>6mm</span><span style={{ color: "var(--cyan-400)" }}>10mm</span><span>20mm</span>
          </div>
        </div>

        <div className="ub-spec-key" style={{ marginBottom: 10 }}>케이블 출선구 위치</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, marginBottom: 24 }}>
          {["상단", "중앙", "하단"].map((p, i) => (
            <div key={p} style={{
              padding: "8px", borderRadius: 6, textAlign: "center", fontSize: 12,
              border: i === 1 ? "1px solid var(--cyan-400)" : "1px solid var(--line)",
              color: i === 1 ? "var(--cyan-400)" : "var(--gray-200)",
              cursor: "pointer",
            }}>{p}</div>
          ))}
        </div>

        <div className="ub-card" style={{ padding: 16, background: "rgba(74,222,128,0.06)", borderColor: "rgba(74,222,128,0.25)" }}>
          <div style={{ fontSize: 11, color: "var(--success)", fontFamily: "var(--font-mono)", marginBottom: 6 }}>✓ COMPATIBLE</div>
          <div style={{ fontSize: 12, color: "var(--gray-100)", lineHeight: 1.5 }}>이 조합은 즉시 출고 가능합니다.</div>
        </div>

        <Btn variant="primary" size="lg" style={{ width: "100%", marginTop: 16 }}>이 조합으로 견적</Btn>
      </div>
    </div>
  </div>
);

const Annotation = ({ x, y, label, right }) => (
  <div style={{
    position: "absolute", left: x, top: y,
    display: "flex", flexDirection: right ? "row-reverse" : "row", alignItems: "center", gap: 8,
    pointerEvents: "none",
  }}>
    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--cyan-400)", boxShadow: "0 0 0 4px rgba(0,200,240,0.2)" }} />
    <div style={{ width: 24, height: 1, background: "var(--cyan-400)" }} />
    <div className="ub-mono" style={{ fontSize: 10, color: "var(--cyan-400)", padding: "3px 8px", background: "rgba(10,22,40,0.85)", borderRadius: 3, whiteSpace: "nowrap" }}>{label}</div>
  </div>
);

const MiniSpec = ({ k, v }) => (
  <div style={{ textAlign: "center" }}>
    <div className="ub-spec-key" style={{ fontSize: 10 }}>{k}</div>
    <div className="ub-mono" style={{ fontSize: 13, color: "var(--white)", marginTop: 2, fontWeight: 600 }}>{v}</div>
  </div>
);

window.C1_Hero = C1_Hero;
window.C2_Configurator = C2_Configurator;
