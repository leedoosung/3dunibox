// Shared UI atoms for 3D UniBox prototype
// Defines: Logo, TopBar, Btn, Badge, Stepper, BracketIllustration, DeviceIllustration, etc.

const Logo = ({ size = "md" }) => (
  <div className="ub-logo" style={{ fontSize: size === "lg" ? 28 : 22 }}>
    <div className="ub-logo-mark" style={{ width: size === "lg" ? 36 : 28, height: size === "lg" ? 36 : 28 }}>3D</div>
    <span>UNIBOX</span>
  </div>
);

const TopBar = ({ active = "products" }) => (
  <div className="ub-topbar">
    <Logo />
    <div className="ub-nav">
      <span className={active === "products" ? "active" : ""}>제품</span>
      <span className={active === "guide" ? "active" : ""}>설치 가이드</span>
      <span className={active === "support" ? "active" : ""}>고객지원</span>
      <span className={active === "about" ? "active" : ""}>회사소개</span>
    </div>
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <span style={{ fontSize: 12, color: "var(--gray-300)", fontFamily: "var(--font-mono)" }}>1588-0000</span>
      <div className="ub-cta-mini">견적 문의</div>
    </div>
  </div>
);

const Btn = ({ variant = "primary", size = "md", children, style, icon }) => (
  <button className={`ub-btn ub-btn-${variant} ${size === "lg" ? "ub-btn-lg" : ""}`} style={style}>
    {children}
    {icon && <span style={{ fontFamily: "var(--font-mono)", fontSize: 16 }}>{icon}</span>}
  </button>
);

const Badge = ({ kind, children }) => (
  <span className={`ub-badge ub-badge-${kind}`}>
    {kind === "live" && <span className="ub-badge-dot" />}
    {children}
  </span>
);

const Eyebrow = ({ children, style }) => (
  <div className="ub-eyebrow" style={style}>{children}</div>
);

// Stepper for multi-step flows
const Stepper = ({ steps, current }) => (
  <div className="ub-stepper">
    {steps.map((s, i) => (
      <React.Fragment key={i}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div className={`ub-step-dot ${i < current ? "done" : i === current ? "active" : ""}`}>
            {i < current ? "✓" : i + 1}
          </div>
          <div style={{ fontSize: 12, color: i <= current ? "var(--white)" : "var(--gray-400)", fontWeight: i === current ? 600 : 400 }}>
            {s}
          </div>
        </div>
        {i < steps.length - 1 && <div className={`ub-step-line ${i < current ? "done" : ""}`} />}
      </React.Fragment>
    ))}
  </div>
);

// Stylized Suprema-style device front (illustration only, not branded)
const DeviceIllustration = ({ size = 100, model = "face", glow = true }) => {
  const w = size, h = size * 1.4;
  return (
    <div className="ub-device" style={{ width: w, height: h, borderRadius: 10 }}>
      {model === "face" && (
        <>
          <div className="ub-device-screen" style={{ top: w * 0.08, left: w * 0.1, right: w * 0.1, height: w * 0.85 }}>
            <div style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: w * 0.35, height: w * 0.45, borderRadius: "50%",
              border: "1px dashed rgba(0,200,240,0.5)"
            }} />
            <div style={{ position: "absolute", top: 6, left: 6, width: 4, height: 4, borderRadius: "50%", background: glow ? "#00C8F0" : "#444", boxShadow: glow ? "0 0 6px #00C8F0" : "none" }} />
          </div>
          <div style={{ position: "absolute", bottom: w * 0.08, left: "50%", transform: "translateX(-50%)", width: w * 0.5, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.15)" }} />
        </>
      )}
      {model === "fp" && (
        <>
          <div className="ub-device-screen" style={{ top: w * 0.1, left: w * 0.15, right: w * 0.15, height: w * 0.55 }} />
          <div style={{ position: "absolute", bottom: w * 0.18, left: "50%", transform: "translateX(-50%)", width: w * 0.35, height: w * 0.35, borderRadius: 6, background: "rgba(0,200,240,0.08)", border: "1px solid rgba(0,200,240,0.3)" }} />
        </>
      )}
      {model === "card" && (
        <>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: w * 0.5, height: w * 0.5, borderRadius: "50%", border: "2px solid rgba(0,200,240,0.4)" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60%", height: "60%", borderRadius: "50%", border: "1px solid rgba(0,200,240,0.3)" }} />
          </div>
        </>
      )}
    </div>
  );
};

// 3D bracket isometric illustration (CSS-only)
const BracketIso = ({ size = 200, withDevice = true, withCable = true }) => {
  const s = size;
  return (
    <div style={{ width: s, height: s, position: "relative", perspective: 800 }}>
      <div style={{
        position: "absolute", inset: "10%",
        transform: "rotateX(20deg) rotateY(-25deg)",
        transformStyle: "preserve-3d",
      }}>
        {/* Bracket back plate */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, #1a3a5c, #14263f)",
          border: "1px solid rgba(0,200,240,0.3)",
          borderRadius: 8,
          boxShadow: "0 30px 60px -20px rgba(0,200,240,0.3), inset 0 0 0 1px rgba(255,255,255,0.05)",
        }}>
          {/* mounting holes */}
          {[[15, 15], [85, 15], [15, 85], [85, 85]].map(([x, y], i) => (
            <div key={i} style={{
              position: "absolute",
              left: `${x}%`, top: `${y}%`,
              transform: "translate(-50%,-50%)",
              width: 6, height: 6, borderRadius: "50%",
              background: "#0a1628", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.6)"
            }} />
          ))}
          {/* cable channel */}
          {withCable && (
            <div style={{
              position: "absolute", left: "50%", top: "30%", transform: "translateX(-50%)",
              width: 14, height: "40%",
              background: "rgba(0,0,0,0.4)",
              borderRadius: 4,
              boxShadow: "inset 0 0 4px rgba(0,0,0,0.6)"
            }} />
          )}
        </div>
        {/* Device floating in front */}
        {withDevice && (
          <div style={{
            position: "absolute", left: "20%", top: "15%", width: "60%", height: "70%",
            transform: "translateZ(20px)",
          }}>
            <DeviceIllustration size={s * 0.5} model="face" />
          </div>
        )}
      </div>
    </div>
  );
};

// Catalog model data
const MODELS = [
  { id: "fsf2", name: "FaceStation F2", code: "UB-FSF2", cat: "face", price: 89000, status: "live", desc: "안면인식 + 카드 + 지문" },
  { id: "fs2", name: "FaceStation 2", code: "UB-FS2", cat: "face", price: 79000, status: "soon", desc: "안면인식 단말기" },
  { id: "ba2", name: "BioStation A2", code: "UB-BA2", cat: "face", price: 79000, status: "soon", desc: "안면인식 + 지문" },
  { id: "bs3", name: "BioStation 3", code: "UB-BS3", cat: "fp", price: 69000, status: "live", desc: "지문 + RFID 카드" },
  { id: "bs2", name: "BioStation 2", code: "UB-BS2", cat: "fp", price: 69000, status: "soon", desc: "지문 + 카드" },
  { id: "bln2", name: "BioLite N2", code: "UB-BLN2", cat: "fp", price: 59000, status: "soon", desc: "옥외용 지문 + 카드" },
  { id: "bw3", name: "BioEntry W3", code: "UB-BW3", cat: "card", price: 49000, status: "soon", desc: "RFID 카드 전용" },
  { id: "bp2", name: "BioEntry P2", code: "UB-BP2", cat: "card", price: 49000, status: "soon", desc: "지문/카드" },
  { id: "xpd2", name: "XPass D2", code: "UB-XPD2", cat: "card", price: 39000, status: "soon", desc: "슬림 카드 단말기" },
  { id: "bsl2", name: "BioStation L2", code: "UB-BSL2", cat: "multi", price: 59000, status: "soon", desc: "지문 + 카드" },
  { id: "cs40", name: "CoreStation 40", code: "UB-CS40", cat: "multi", price: 99000, status: "soon", desc: "통합 컨트롤러" },
];

const CATEGORIES = [
  { id: "all", label: "전체보기" },
  { id: "face", label: "안면인식" },
  { id: "fp", label: "지문+카드" },
  { id: "card", label: "카드전용" },
  { id: "multi", label: "멀티·기타" },
];

// Make globals
Object.assign(window, { Logo, TopBar, Btn, Badge, Eyebrow, Stepper, DeviceIllustration, BracketIso, MODELS, CATEGORIES });
