// 가설 B — Model-first Catalog
// 카테고리 탭 클래식 카탈로그 → 모델 카드 → 모델 상세(스펙) → 설치가이드 → 구매/문의

// B1. Hero — 카탈로그 직진형
const B1_Hero = () => (
  <div className="ub-screen desktop">
    <TopBar active="products" />
    <div className="ub-radial-cyan" style={{ padding: "60px 80px 40px", borderBottom: "1px solid var(--line)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <Eyebrow style={{ marginBottom: 16 }}>SD CONVERGENCE · OFFICIAL</Eyebrow>
          <h1 className="ub-h1" style={{ fontSize: 48, marginBottom: 18 }}>
            슈프리마 단말기 전용<br/>
            <span style={{ color: "var(--cyan-400)" }}>3D 프린팅 브라켓</span> 카탈로그
          </h1>
          <div style={{ color: "var(--gray-200)", fontSize: 15, lineHeight: 1.6, marginBottom: 28, maxWidth: 480 }}>
            모델별 전용 설계로 완벽한 핏(Fit). 유리·콘크리트 어디든 OK. 케이블 내장 수납.
          </div>
          <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
            <Btn variant="primary" size="lg" icon="↓">전 제품 보기</Btn>
            <Btn variant="ghost" size="lg">대량 견적 문의</Btn>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: 28, marginTop: 20 }}>
            <Stat n="11+" label="대응 모델" />
            <Stat n="3종" label="설치 환경" />
            <Stat n="10분" label="평균 시공시간" />
          </div>
        </div>
        <div style={{ display: "grid", placeItems: "center", height: 320 }}>
          <BracketIso size={300} />
        </div>
      </div>
    </div>

    {/* Tabs preview */}
    <div style={{ padding: "20px 80px 0", flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div className="ub-tabs">
        {CATEGORIES.map((c, i) => (
          <div key={c.id} className={`ub-tab ${i === 0 ? "active" : ""}`}>{c.label} <span className="ub-mono" style={{ fontSize: 10, opacity: 0.6, marginLeft: 4 }}>({c.id === "all" ? 11 : c.id === "face" ? 3 : c.id === "fp" ? 3 : c.id === "card" ? 3 : 2})</span></div>
        ))}
      </div>
    </div>
  </div>
);

const Stat = ({ n, label }) => (
  <div>
    <div style={{ fontFamily: "var(--font-display)", fontSize: 40, color: "var(--cyan-400)", lineHeight: 1 }}>{n}</div>
    <div className="ub-spec-key" style={{ marginTop: 4 }}>{label}</div>
  </div>
);

// B2. 카탈로그 그리드 (탭)
const B2_Catalog = () => (
  <div className="ub-screen desktop">
    <TopBar active="products" />
    <div style={{ padding: "32px 80px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20 }}>
        <div>
          <Eyebrow style={{ marginBottom: 8 }}>PRODUCT CATALOG</Eyebrow>
          <h2 className="ub-h2">모델별 전용 브라켓</h2>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <input className="ub-input" placeholder="모델명 검색 (예: FaceStation, BS3)" style={{ width: 280 }} />
          <select className="ub-select" style={{ width: 140 }}>
            <option>판매중 우선</option>
            <option>가격순</option>
          </select>
        </div>
      </div>
      <div className="ub-tabs" style={{ marginBottom: 0 }}>
        {CATEGORIES.map((c, i) => (
          <div key={c.id} className={`ub-tab ${i === 0 ? "active" : ""}`}>
            {c.label}
            <span className="ub-mono" style={{ fontSize: 10, opacity: 0.6, marginLeft: 6 }}>
              ({c.id === "all" ? 11 : c.id === "face" ? 3 : c.id === "fp" ? 3 : c.id === "card" ? 3 : 2})
            </span>
          </div>
        ))}
      </div>
    </div>

    <div style={{ flex: 1, overflow: "auto", padding: "24px 80px 40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {MODELS.map((m) => <ProductCard key={m.id} model={m} highlight={m.id === "fsf2"} />)}
        <div style={{
          padding: 20, borderRadius: 12,
          border: "1px dashed var(--line-strong)",
          background: "rgba(0,200,240,0.03)",
          display: "grid", placeItems: "center",
          textAlign: "center", minHeight: 240,
        }}>
          <div>
            <div style={{ fontSize: 28, color: "var(--cyan-400)", marginBottom: 10, fontFamily: "var(--font-display)" }}>+</div>
            <div style={{ fontSize: 13, color: "var(--gray-100)", fontWeight: 600, marginBottom: 4 }}>찾는 모델이 없나요?</div>
            <div style={{ fontSize: 11, color: "var(--gray-400)", marginBottom: 12 }}>맞춤 제작 의뢰</div>
            <Btn variant="ghost" style={{ fontSize: 12, padding: "8px 14px" }}>요청 보내기</Btn>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// B3. 모델 상세 — 스펙 중심 (몰 카탈로그 톤)
const B3_ModelDetail = () => (
  <div className="ub-screen desktop">
    <TopBar active="products" />
    <div style={{ padding: "16px 80px", borderBottom: "1px solid var(--line)", fontSize: 12, color: "var(--gray-400)" }}>
      제품 / 지문+카드 / <span style={{ color: "var(--white)" }}>BioStation 3 전용 (UB-BS3)</span>
    </div>
    <div style={{ flex: 1, overflow: "auto", padding: "32px 80px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ aspectRatio: "1", background: "linear-gradient(160deg, var(--navy-900), var(--navy-800))", borderRadius: 16, position: "relative", overflow: "hidden", display: "grid", placeItems: "center" }}>
            <div className="ub-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
            <BracketIso size={360} />
            <div style={{ position: "absolute", top: 16, left: 16 }}>
              <Badge kind="live">판매중</Badge>
            </div>
            <div style={{ position: "absolute", top: 16, right: 16, display: "flex", gap: 6 }}>
              <ViewBtn>360°</ViewBtn>
              <ViewBtn>분해</ViewBtn>
            </div>
          </div>
          {/* Spec table */}
          <div className="ub-card" style={{ marginTop: 16 }}>
            <div className="ub-spec-key" style={{ marginBottom: 14 }}>SPECIFICATIONS</div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono)", fontSize: 12 }}>
              <tbody>
                {[
                  ["MODEL", "UB-BS3"],
                  ["COMPATIBLE", "Suprema BioStation 3"],
                  ["MATERIAL", "PETG, Matte Black"],
                  ["DIMENSIONS", "W 76 × H 152 × D 36 mm"],
                  ["WEIGHT", "118 g"],
                  ["CABLE CHANNEL", "⌀8 mm internal"],
                  ["MOUNTING", "VHB 4910 + M3 screws"],
                  ["WARRANTY", "1 year"],
                ].map(([k, v]) => (
                  <tr key={k} style={{ borderTop: "1px solid var(--line)" }}>
                    <td style={{ padding: "10px 0", color: "var(--gray-400)", width: 140 }}>{k}</td>
                    <td style={{ padding: "10px 0", color: "var(--white)" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="ub-mono" style={{ fontSize: 12, color: "var(--cyan-400)", marginBottom: 8 }}>UB-BS3 · 지문+카드</div>
          <h1 className="ub-h2" style={{ marginBottom: 8, fontSize: 32 }}>BioStation 3 전용 브라켓</h1>
          <div style={{ color: "var(--gray-300)", fontSize: 14, marginBottom: 20 }}>
            슈프리마 BioStation 3 단말기 정확한 핏. 유리문·콘크리트 모두 적용. 케이블은 본체 안으로.
          </div>

          {/* Reviews snip */}
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid var(--line)" }}>
            <div style={{ display: "flex", gap: 2, color: "var(--cyan-400)" }}>★★★★★</div>
            <div style={{ fontSize: 12, color: "var(--gray-300)" }}>4.9 / 27건 리뷰</div>
          </div>

          {/* Price + qty */}
          <div className="ub-card" style={{ marginBottom: 20, background: "rgba(0,200,240,0.03)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <div>
                <div className="ub-spec-key">SD샵 / 스마트스토어</div>
                <div className="ub-mono" style={{ fontSize: 28, color: "var(--white)", fontWeight: 700, marginTop: 4 }}>₩69,000</div>
              </div>
              <div style={{ fontSize: 11, color: "var(--gray-400)" }}>VAT 포함<br/>무료배송</div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
              <span className="ub-spec-key">수량</span>
              <div style={{ display: "flex", border: "1px solid var(--line-strong)", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ padding: "8px 14px", borderRight: "1px solid var(--line-strong)", cursor: "pointer" }}>−</div>
                <div className="ub-mono" style={{ padding: "8px 18px", color: "var(--white)" }}>1</div>
                <div style={{ padding: "8px 14px", borderLeft: "1px solid var(--line-strong)", cursor: "pointer" }}>+</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Btn variant="primary" size="lg" style={{ flex: 1 }}>스마트스토어로 구매</Btn>
              <Btn variant="ghost" size="lg">대량 견적</Btn>
            </div>
          </div>

          {/* Compat */}
          <div style={{ marginBottom: 20 }}>
            <div className="ub-spec-key" style={{ marginBottom: 10 }}>설치 환경 호환</div>
            <div style={{ display: "flex", gap: 8 }}>
              <CompatTag good>유리</CompatTag>
              <CompatTag good>콘크리트</CompatTag>
              <CompatTag good>석고</CompatTag>
              <CompatTag good>벽돌</CompatTag>
            </div>
          </div>

          {/* Tabs */}
          <div className="ub-tabs">
            <div className="ub-tab active">제품 설명</div>
            <div className="ub-tab">설치 가이드</div>
            <div className="ub-tab">리뷰 (27)</div>
            <div className="ub-tab">교환·반품</div>
          </div>
          <div style={{ padding: "20px 0", color: "var(--gray-200)", fontSize: 13, lineHeight: 1.7 }}>
            BioStation 3 단말기 후면에 정확히 맞도록 3D 스캔 데이터 기반으로 설계되었습니다. 케이블이 외부로 노출되지 않아 깔끔한 마감이 가능하며, 동봉된 VHB 양면 테이프로 유리문에도 드릴 없이 견고하게 고정됩니다.
          </div>
        </div>
      </div>
    </div>
  </div>
);

window.B1_Hero = B1_Hero;
window.B2_Catalog = B2_Catalog;
window.B3_ModelDetail = B3_ModelDetail;
window.Stat = Stat;
