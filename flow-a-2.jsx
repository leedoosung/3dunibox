// 가설 A — 화면 3,4,5

// A3. 제품 상세 (FaceStation F2 전용 브라켓)
const A3_Detail = () => (
  <div className="ub-screen desktop">
    <TopBar active="products" />
    <div style={{ padding: "20px 80px 16px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Stepper steps={["설치환경", "단말기 선택", "제품 상세", "견적 문의", "완료"]} current={2} />
      <div style={{ fontSize: 12, color: "var(--gray-400)" }}>제품 / 안면인식 / FaceStation F2</div>
    </div>

    <div style={{ flex: 1, overflow: "auto", padding: "40px 80px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
        {/* Left: visual */}
        <div>
          <div style={{
            aspectRatio: "1",
            background: "linear-gradient(160deg, var(--navy-900), var(--navy-800))",
            borderRadius: 16,
            border: "1px solid var(--line)",
            position: "relative",
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
          }}>
            <div className="ub-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
            <div style={{ position: "relative" }}>
              <BracketIso size={400} />
            </div>
            <div style={{ position: "absolute", top: 16, left: 16 }}>
              <Badge kind="live">판매중</Badge>
            </div>
            <div style={{ position: "absolute", bottom: 16, right: 16, display: "flex", gap: 6 }}>
              <ViewBtn>360°</ViewBtn>
              <ViewBtn>측면</ViewBtn>
              <ViewBtn>분해도</ViewBtn>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginTop: 12 }}>
            {[1,2,3,4].map(i => (
              <div key={i} style={{ aspectRatio: "1", borderRadius: 8, border: i === 1 ? "1px solid var(--cyan-400)" : "1px solid var(--line)", background: "var(--navy-900)", display: "grid", placeItems: "center" }}>
                <div style={{ fontSize: 10, color: "var(--gray-400)", fontFamily: "var(--font-mono)" }}>0{i}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: info */}
        <div>
          <div className="ub-mono" style={{ fontSize: 12, color: "var(--cyan-400)", marginBottom: 8 }}>UB-FSF2 · 안면인식 전용</div>
          <h1 className="ub-h2" style={{ marginBottom: 8 }}>FaceStation F2 전용 브라켓</h1>
          <div style={{ color: "var(--gray-300)", fontSize: 14, marginBottom: 24 }}>
            슈프리마 FaceStation F2 단말기를 유리문·콘크리트벽에 깔끔하게 고정.
            케이블 내장 수납으로 마감 품질을 높이고, 1인 시공이 가능하도록 설계되었습니다.
          </div>

          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
            <div className="ub-mono" style={{ fontSize: 32, fontWeight: 700, color: "var(--white)" }}>₩89,000</div>
            <div style={{ fontSize: 12, color: "var(--gray-400)" }}>VAT 포함 · 무료배송</div>
          </div>

          {/* Specs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
            <SpecRow k="대응 단말기" v="FaceStation F2" />
            <SpecRow k="재질" v="PETG · 무광 블랙" />
            <SpecRow k="외형 치수" v="W 88 × H 168 × D 38 mm" />
            <SpecRow k="중량" v="142 g" />
            <SpecRow k="설치 환경" v="유리 · 콘크리트 · 석고" />
            <SpecRow k="케이블 수납" v="최대 8mm 직경" />
            <SpecRow k="고정 방식" v="VHB 양면 + M3 나사" />
            <SpecRow k="시공 시간" v="약 8~10분 (1인 기준)" />
          </div>

          {/* Wall compatibility */}
          <div className="ub-card" style={{ padding: 16, marginBottom: 24, background: "rgba(0,200,240,0.04)", borderColor: "rgba(0,200,240,0.2)" }}>
            <div className="ub-spec-key" style={{ marginBottom: 10, color: "var(--cyan-400)" }}>설치 환경 호환성</div>
            <div style={{ display: "flex", gap: 12 }}>
              <CompatTag good>유리문 ✓</CompatTag>
              <CompatTag good>콘크리트 ✓</CompatTag>
              <CompatTag good>석고벽 ✓</CompatTag>
              <CompatTag>금속 △</CompatTag>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <Btn variant="primary" size="lg" style={{ flex: 1 }} icon="→">견적 문의 / 구매</Btn>
            <Btn variant="ghost" size="lg">설치 가이드</Btn>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ViewBtn = ({ children }) => (
  <div style={{
    padding: "6px 12px",
    fontSize: 11,
    fontFamily: "var(--font-mono)",
    background: "rgba(10,22,40,0.85)",
    border: "1px solid var(--line-strong)",
    borderRadius: 6,
    color: "var(--gray-100)",
    cursor: "pointer",
    backdropFilter: "blur(8px)",
  }}>{children}</div>
);

const SpecRow = ({ k, v }) => (
  <div>
    <div className="ub-spec-key" style={{ marginBottom: 4 }}>{k}</div>
    <div className="ub-spec-val">{v}</div>
  </div>
);

const CompatTag = ({ children, good }) => (
  <div style={{
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "var(--font-mono)",
    padding: "6px 10px",
    borderRadius: 6,
    background: good ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.04)",
    color: good ? "var(--success)" : "var(--gray-300)",
    border: `1px solid ${good ? "rgba(74,222,128,0.25)" : "var(--line)"}`,
  }}>{children}</div>
);

// A4. 견적 문의 폼 (벽 + 모델 자동 채워짐)
const A4_Quote = () => (
  <div className="ub-screen desktop">
    <TopBar active="products" />
    <div style={{ padding: "20px 80px 16px", borderBottom: "1px solid var(--line)" }}>
      <Stepper steps={["설치환경", "단말기 선택", "제품 상세", "견적 문의", "완료"]} current={3} />
    </div>
    <div style={{ flex: 1, overflow: "auto", padding: "40px 80px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48 }}>
      {/* Form */}
      <div>
        <Eyebrow style={{ marginBottom: 10 }}>STEP 4 / 견적 문의</Eyebrow>
        <h2 className="ub-h2" style={{ marginBottom: 8 }}>2영업일 이내 회신드립니다</h2>
        <div style={{ color: "var(--gray-300)", fontSize: 14, marginBottom: 32 }}>
          현장 상황에 맞는 견적과 시공 안내를 보내드릴게요.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Field label="설치 환경" req>
            <select className="ub-select" defaultValue="glass">
              <option value="glass">유리문 / 강화유리 8~12mm</option>
              <option>콘크리트벽</option>
              <option>석고벽</option>
            </select>
          </Field>
          <Field label="단말기 모델" req>
            <select className="ub-select" defaultValue="fsf2">
              <option value="fsf2">FaceStation F2</option>
              <option>FaceStation 2</option>
              <option>BioStation 3</option>
              <option>그 외</option>
            </select>
          </Field>
          <Field label="수량" req>
            <input className="ub-input" type="number" defaultValue={3} />
          </Field>
          <Field label="설치 희망일">
            <input className="ub-input" type="text" placeholder="예: 5월 셋째주" />
          </Field>
          <Field label="회사명 / 소속">
            <input className="ub-input" placeholder="(선택) 법인/기관명" />
          </Field>
          <Field label="담당자명" req>
            <input className="ub-input" placeholder="홍길동" />
          </Field>
          <Field label="연락처" req>
            <input className="ub-input" placeholder="010-0000-0000" />
          </Field>
          <Field label="이메일" req>
            <input className="ub-input" placeholder="name@company.com" />
          </Field>
          <div style={{ gridColumn: "span 2" }}>
            <Field label="현장 메모">
              <textarea className="ub-textarea" rows={4} placeholder="설치 위치 사진을 첨부하시면 정확한 견적 안내가 가능합니다." style={{ resize: "vertical" }} />
            </Field>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 20 }}>
          <input type="checkbox" defaultChecked />
          <div style={{ fontSize: 12, color: "var(--gray-300)" }}>
            개인정보 수집·이용에 동의합니다 (필수) · <span style={{ color: "var(--cyan-400)", textDecoration: "underline" }}>전문보기</span>
          </div>
        </div>

        <Btn variant="primary" size="lg" style={{ marginTop: 24, width: "100%" }} icon="→">
          견적 요청 보내기
        </Btn>
      </div>

      {/* Summary aside */}
      <aside>
        <div className="ub-card" style={{ position: "sticky", top: 0 }}>
          <div className="ub-spec-key" style={{ marginBottom: 14 }}>견적 요약</div>
          <div style={{ display: "grid", gap: 12, paddingBottom: 16, borderBottom: "1px solid var(--line)", marginBottom: 16 }}>
            <SummaryRow k="제품" v="UB-FSF2" />
            <SummaryRow k="대응 단말기" v="FaceStation F2" />
            <SummaryRow k="설치 환경" v="유리문 8~12mm" />
            <SummaryRow k="수량" v="3 EA" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div className="ub-spec-key">예상 금액</div>
            <div className="ub-mono" style={{ fontSize: 24, fontWeight: 700, color: "var(--white)" }}>₩267,000</div>
          </div>
          <div style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 6 }}>VAT 포함 · 정확한 금액은 회신 견적서 기준</div>
        </div>

        <div style={{ marginTop: 20, padding: 20, borderRadius: 12, background: "rgba(0,200,240,0.05)", border: "1px solid rgba(0,200,240,0.2)" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--cyan-400)", marginBottom: 8 }}>📞 빠른 문의</div>
          <div style={{ fontSize: 13, color: "var(--gray-100)", lineHeight: 1.6 }}>
            평일 09–18시<br/>
            <span className="ub-mono" style={{ fontSize: 16, color: "var(--white)" }}>1588-0000</span>
          </div>
        </div>
      </aside>
    </div>
  </div>
);

const Field = ({ label, req, children }) => (
  <div>
    <label className={`ub-label ${req ? "ub-label-req" : ""}`}>{label}</label>
    {children}
  </div>
);
const SummaryRow = ({ k, v }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <div className="ub-spec-key">{k}</div>
    <div style={{ fontSize: 13, color: "var(--white)", fontWeight: 500 }}>{v}</div>
  </div>
);

// A5. 완료
const A5_Done = () => (
  <div className="ub-screen desktop">
    <TopBar active="products" />
    <div style={{ flex: 1, display: "grid", placeItems: "center", padding: 60, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 800px 500px at 50% 30%, rgba(0,200,240,0.15), transparent 60%)" }} />
      <div style={{ position: "relative", textAlign: "center", maxWidth: 560 }}>
        <div style={{
          width: 88, height: 88, margin: "0 auto 28px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--cyan-400), var(--cyan-500))",
          display: "grid", placeItems: "center",
          fontSize: 40, color: "var(--navy-950)", fontWeight: 900,
          boxShadow: "0 20px 60px -10px var(--cyan-glow)",
        }}>✓</div>
        <Eyebrow style={{ marginBottom: 12 }}>REQUEST · #2026-04-30-0142</Eyebrow>
        <h2 className="ub-h2" style={{ marginBottom: 14 }}>견적 요청이 접수되었습니다</h2>
        <div style={{ color: "var(--gray-200)", fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}>
          담당자가 <span style={{ color: "var(--cyan-400)", fontWeight: 600 }}>2영업일 이내</span>로 회신드릴게요.<br/>
          접수번호와 견적서는 입력하신 이메일로도 발송됩니다.
        </div>

        <div className="ub-card" style={{ textAlign: "left", marginBottom: 24 }}>
          <div className="ub-spec-key" style={{ marginBottom: 12 }}>접수 내역</div>
          <div style={{ display: "grid", gap: 10 }}>
            <SummaryRow k="제품 / 모델" v="UB-FSF2 / FaceStation F2" />
            <SummaryRow k="설치 환경" v="유리문 8~12mm" />
            <SummaryRow k="수량" v="3 EA" />
            <SummaryRow k="담당자" v="홍길동 · 010-0000-0000" />
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <Btn variant="primary">설치 가이드 보기</Btn>
          <Btn variant="ghost">메인으로</Btn>
        </div>
      </div>
    </div>
  </div>
);

window.A3_Detail = A3_Detail;
window.A4_Quote = A4_Quote;
window.A5_Done = A5_Done;
window.Field = Field;
window.SummaryRow = SummaryRow;
