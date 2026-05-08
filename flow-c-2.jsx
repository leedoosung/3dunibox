// 가설 C — 3,4,5

// C3. AR 미리보기 (모바일 화면) — 실제 벽에 띄워보기
const C3_ARPreview = () => (
  <div className="ub-screen mobile" style={{ maxWidth: 390, margin: "0 auto", boxShadow: "0 0 0 1px var(--line-strong)" }}>
    <div className="ub-mobile-statusbar">
      <span>9:41</span>
      <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <span style={{ fontSize: 10 }}>5G</span>
        <span style={{ width: 18, height: 10, border: "1px solid var(--white)", borderRadius: 2, position: "relative" }}>
          <span style={{ position: "absolute", inset: 1, background: "var(--white)", borderRadius: 1 }} />
        </span>
      </span>
    </div>

    {/* AR camera view */}
    <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "#1a1f28" }}>
      {/* simulated camera background */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #2a3441 0%, #1a2230 60%, #0f1620 100%)" }}>
        {/* simulated room */}
        <div style={{ position: "absolute", left: 0, right: 0, top: "55%", bottom: 0, background: "linear-gradient(180deg, #3a4250, #1a2030)" }} />
        {/* simulated door frame */}
        <div className="wall-glass" style={{ position: "absolute", left: "20%", right: "20%", top: "10%", bottom: "10%", borderRadius: 4 }} />
      </div>

      {/* AR placed bracket */}
      <div style={{ position: "absolute", left: "50%", top: "42%", transform: "translate(-50%, -50%)" }}>
        <BracketIso size={140} />
      </div>

      {/* AR reticle / instructions */}
      <div style={{ position: "absolute", top: 16, left: 16, right: 16, padding: "10px 14px", borderRadius: 12, background: "rgba(10,22,40,0.85)", backdropFilter: "blur(8px)", border: "1px solid var(--line-strong)" }}>
        <div className="ub-spec-key" style={{ marginBottom: 4, color: "var(--cyan-400)" }}>AR PREVIEW</div>
        <div style={{ fontSize: 13, color: "var(--white)" }}>FaceStation F2 / 유리문 10mm</div>
      </div>

      {/* size hint */}
      <div style={{ position: "absolute", top: "30%", right: "20%", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: "var(--cyan-400)" }}>
        <span style={{ width: 1, height: 60, background: "var(--cyan-400)" }} />
        <span className="ub-mono" style={{ fontSize: 11, padding: "2px 6px", background: "rgba(10,22,40,0.85)", borderRadius: 3 }}>168mm</span>
      </div>

      {/* corner markers */}
      {[[12, 12], [12, 388], [378, 12], [378, 388]].map(([x, y], i) => null)}
      <div style={{ position: "absolute", top: 80, left: 20, width: 24, height: 24, borderTop: "2px solid var(--cyan-400)", borderLeft: "2px solid var(--cyan-400)" }} />
      <div style={{ position: "absolute", top: 80, right: 20, width: 24, height: 24, borderTop: "2px solid var(--cyan-400)", borderRight: "2px solid var(--cyan-400)" }} />

      {/* floating action */}
      <div style={{ position: "absolute", bottom: 90, left: 16, right: 16 }}>
        <div className="ub-card" style={{ padding: 14, background: "rgba(10,22,40,0.92)", backdropFilter: "blur(10px)", marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--gray-300)" }}>화면 속 벽에 정확히 맞춤</div>
              <div style={{ display: "flex", gap: 12, marginTop: 6, alignItems: "center" }}>
                <span className="ub-mono" style={{ fontSize: 13, color: "var(--success)" }}>✓ 호환 가능</span>
                <span className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)" }}>실측 확인 완료</span>
              </div>
            </div>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(0,200,240,0.15)", display: "grid", placeItems: "center", color: "var(--cyan-400)" }}>↻</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Btn variant="ghost" style={{ flex: 1, padding: "12px 16px" }}>📷 캡처</Btn>
          <Btn variant="primary" style={{ flex: 2, padding: "12px 16px" }} icon="→">이 모델로 견적</Btn>
        </div>
      </div>
    </div>

    <div className="ub-mobile-tabbar">
      {[
        { i: "🏠", l: "홈" },
        { i: "📦", l: "제품" },
        { i: "🔍", l: "AR", on: true },
        { i: "💬", l: "문의" },
        { i: "👤", l: "내정보" },
      ].map((t) => (
        <div key={t.l} className={`ub-tabbar-item ${t.on ? "active" : ""}`}>
          <span style={{ fontSize: 18 }}>{t.i}</span>
          <span>{t.l}</span>
        </div>
      ))}
    </div>
  </div>
);

// C4. 설치 시뮬레이션 단계 미리보기
const C4_Simulation = () => (
  <div className="ub-screen desktop">
    <TopBar active="products" />
    <div style={{ padding: "24px 80px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <Eyebrow style={{ marginBottom: 6 }}>STEP-BY-STEP SIMULATION</Eyebrow>
        <h2 className="ub-h2" style={{ fontSize: 24 }}>FaceStation F2 / 유리문 10mm — 설치 미리보기</h2>
      </div>
      <Btn variant="ghost" icon="→">설정 변경</Btn>
    </div>

    <div style={{ flex: 1, padding: "32px 80px", display: "grid", gridTemplateColumns: "1fr 360px", gap: 32, overflow: "hidden" }}>
      {/* Left: scrubbable simulation */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{
          flex: 1,
          background: "linear-gradient(180deg, #050a14, #0a1628)",
          borderRadius: 16, border: "1px solid var(--line)",
          position: "relative", overflow: "hidden",
          minHeight: 380,
        }}>
          <div className="ub-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

          {/* Wall + bracket animation state (step 2 of 4) */}
          <div className="wall-glass" style={{ position: "absolute", inset: "12% 24%", borderRadius: 6 }} />
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
            <div style={{ transform: "translateY(-10px)" }}>
              <BracketIso size={260} withDevice={false} />
            </div>
          </div>

          {/* Cable being routed */}
          <svg style={{ position: "absolute", left: "50%", top: "10%", height: "30%", width: 40, overflow: "visible" }}>
            <path d="M 20 0 Q 10 40 20 80 Q 30 120 20 160" stroke="var(--cyan-400)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          </svg>

          <div style={{ position: "absolute", top: 20, left: 20 }}>
            <div className="ub-mono" style={{ fontSize: 11, color: "var(--cyan-400)", marginBottom: 4 }}>STEP 02 / 04</div>
            <div style={{ fontSize: 16, color: "var(--white)", fontWeight: 600 }}>케이블을 채널로 통과시킵니다</div>
          </div>
          <div style={{ position: "absolute", top: 20, right: 20, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--gray-400)" }}>
            00:42 / 02:18
          </div>
        </div>

        {/* Scrubber */}
        <div style={{ marginTop: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--cyan-400)", color: "var(--navy-950)", display: "grid", placeItems: "center", cursor: "pointer", fontSize: 14 }}>▶</div>
            <div style={{ flex: 1, position: "relative", height: 4, background: "var(--line-strong)", borderRadius: 2 }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "32%", background: "var(--cyan-400)", borderRadius: 2 }} />
              {/* step markers */}
              {[0, 33, 66, 100].map((p) => (
                <div key={p} style={{ position: "absolute", left: `${p}%`, top: -3, width: 10, height: 10, borderRadius: "50%", background: p <= 32 ? "var(--cyan-400)" : "var(--navy-700)", transform: "translateX(-50%)", border: "2px solid var(--navy-950)" }} />
              ))}
            </div>
            <div className="ub-mono" style={{ fontSize: 12, color: "var(--gray-300)" }}>1.0×</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {[
              { n: "01", t: "위치 표시", on: false, done: true },
              { n: "02", t: "케이블 라우팅", on: true, done: false },
              { n: "03", t: "브라켓 부착", on: false, done: false },
              { n: "04", t: "단말기 결합", on: false, done: false },
            ].map((s) => (
              <div key={s.n} style={{
                padding: "10px 12px", borderRadius: 8,
                border: s.on ? "1px solid var(--cyan-400)" : "1px solid var(--line)",
                background: s.on ? "rgba(0,200,240,0.06)" : s.done ? "rgba(74,222,128,0.04)" : "transparent",
                cursor: "pointer",
              }}>
                <div className="ub-mono" style={{ fontSize: 10, color: s.done ? "var(--success)" : s.on ? "var(--cyan-400)" : "var(--gray-400)", marginBottom: 2 }}>
                  {s.done ? "✓ DONE" : s.n}
                </div>
                <div style={{ fontSize: 12, color: "var(--white)", fontWeight: 500 }}>{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: live notes */}
      <aside style={{ overflow: "auto" }}>
        <div className="ub-card">
          <div className="ub-spec-key" style={{ marginBottom: 12 }}>STEP NOTES</div>
          <div style={{ fontSize: 14, color: "var(--white)", fontWeight: 600, marginBottom: 8 }}>케이블 라우팅</div>
          <div style={{ fontSize: 13, color: "var(--gray-200)", lineHeight: 1.7, marginBottom: 16 }}>
            벽 출선구에서 케이블을 끌어내, 브라켓 후면 ⌀8mm 채널에 통과시킵니다. 단말기 후면 커넥터 위치까지 여유 있게 50–80mm 빼두세요.
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            <SummaryRow k="필요 공구" v="십자드라이버, 칼" />
            <SummaryRow k="소요 시간" v="2분" />
            <SummaryRow k="주의" v="피복 손상 주의" />
          </div>
        </div>

        <div className="ub-card" style={{ marginTop: 12, background: "rgba(0,200,240,0.04)", borderColor: "rgba(0,200,240,0.2)" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--cyan-400)", marginBottom: 8 }}>💡 시뮬레이션 결과</div>
          <div style={{ display: "grid", gap: 8 }}>
            <SummaryRow k="총 예상시간" v="9분 24초" />
            <SummaryRow k="필요 공구" v="3종" />
            <SummaryRow k="난이도" v="★★☆☆☆" />
          </div>
        </div>

        <Btn variant="primary" size="lg" style={{ width: "100%", marginTop: 16 }} icon="→">이 구성 견적받기</Btn>
        <Btn variant="ghost" style={{ width: "100%", marginTop: 8 }}>PDF 시방서 다운로드</Btn>
      </aside>
    </div>
  </div>
);

// C5. 빠른 견적 (시뮬레이션 결과 자동 채워짐)
const C5_QuickQuote = () => (
  <div className="ub-screen desktop">
    <TopBar active="products" />
    <div style={{ flex: 1, padding: "48px 80px", overflow: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
      <div>
        <Eyebrow style={{ marginBottom: 12 }}>QUICK QUOTE · SIMULATOR-VERIFIED</Eyebrow>
        <h2 className="ub-h2" style={{ marginBottom: 14 }}>3D로 확인한 그대로,<br/>견적도 빠르게.</h2>
        <div style={{ color: "var(--gray-300)", fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>
          시뮬레이터에서 확인한 모델·벽·치수 정보가 자동으로 견적에 반영됩니다. 연락처만 남겨주세요.
        </div>

        <div className="ub-card" style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid var(--line)" }}>
            <div className="ub-spec-key">시뮬레이션 결과</div>
            <Badge kind="cyan">자동 입력됨</Badge>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            <SummaryRow k="단말기" v="FaceStation F2" />
            <SummaryRow k="브라켓" v="UB-FSF2" />
            <SummaryRow k="설치 환경" v="유리문 10mm" />
            <SummaryRow k="케이블 출선구" v="중앙" />
            <SummaryRow k="검증 결과" v="✓ 호환 가능" />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Field label="수량" req>
            <input className="ub-input" type="number" defaultValue={1} />
          </Field>
          <Field label="배송 희망일">
            <input className="ub-input" placeholder="가능한 빨리" />
          </Field>
          <Field label="담당자명" req>
            <input className="ub-input" placeholder="홍길동" />
          </Field>
          <Field label="연락처" req>
            <input className="ub-input" placeholder="010-0000-0000" />
          </Field>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, fontSize: 12, color: "var(--gray-300)" }}>
          <input type="checkbox" defaultChecked /> 개인정보 수집·이용 동의 (필수)
        </div>

        <Btn variant="primary" size="lg" style={{ marginTop: 20, width: "100%" }} icon="→">30초 견적 요청</Btn>
      </div>

      <aside>
        <div className="ub-card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ aspectRatio: "1", position: "relative", background: "linear-gradient(180deg, #050a14, #0a1628)" }}>
            <div className="ub-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
              <BracketIso size={260} />
            </div>
            <div style={{ position: "absolute", top: 16, left: 16 }}>
              <Badge kind="cyan">3D PREVIEW</Badge>
            </div>
          </div>
          <div style={{ padding: 24, borderTop: "1px solid var(--line)" }}>
            <div className="ub-spec-key" style={{ marginBottom: 12 }}>예상 금액 (1EA 기준)</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
              <div className="ub-mono" style={{ fontSize: 32, fontWeight: 700, color: "var(--white)" }}>₩89,000</div>
              <div style={{ fontSize: 11, color: "var(--gray-400)" }}>VAT 포함<br/>무료배송</div>
            </div>
            <div style={{ display: "grid", gap: 8, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
              <SummaryRow k="제품가" v="₩89,000" />
              <SummaryRow k="배송비" v="무료" />
              <SummaryRow k="설치비" v="별도 (선택)" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 16, padding: 18, borderRadius: 12, background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.2)" }}>
          <div className="ub-spec-key" style={{ color: "var(--success)", marginBottom: 6 }}>✓ 즉시 출고 가능</div>
          <div style={{ fontSize: 12, color: "var(--gray-200)", lineHeight: 1.6 }}>
            견적 확인 후 결제 시 24시간 이내 출고됩니다.
          </div>
        </div>
      </aside>
    </div>
  </div>
);

window.C3_ARPreview = C3_ARPreview;
window.C4_Simulation = C4_Simulation;
window.C5_QuickQuote = C5_QuickQuote;
