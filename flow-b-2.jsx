// 가설 B — 4,5 화면

// B4. 설치 가이드 페이지 (단계 + 영상)
const B4_InstallGuide = () => (
  <div className="ub-screen desktop">
    <TopBar active="guide" />
    <div style={{ flex: 1, overflow: "auto" }}>
      <div className="ub-radial-cyan" style={{ padding: "48px 80px 24px" }}>
        <Eyebrow style={{ marginBottom: 12 }}>INSTALL GUIDE · UB-BS3</Eyebrow>
        <h2 className="ub-h2" style={{ marginBottom: 8 }}>10분 시공, 누구나 가능합니다</h2>
        <div style={{ color: "var(--gray-300)", fontSize: 14 }}>1인 작업자 기준 · 드릴 최소화 설계</div>
      </div>

      <div style={{ padding: "0 80px 48px" }}>
        {/* Video */}
        <div style={{
          aspectRatio: "16 / 9",
          background: "linear-gradient(160deg, var(--navy-900), #050a14)",
          borderRadius: 16,
          border: "1px solid var(--line)",
          display: "grid", placeItems: "center",
          position: "relative",
          overflow: "hidden",
          marginBottom: 32,
        }}>
          <div className="ub-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(0,200,240,0.15), transparent 60%)" }} />
          <div style={{ position: "relative", textAlign: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--cyan-400)", display: "grid", placeItems: "center", color: "var(--navy-950)", fontSize: 28, margin: "0 auto 16px", boxShadow: "0 20px 60px -10px var(--cyan-glow)" }}>▶</div>
            <div className="ub-spec-key" style={{ color: "var(--cyan-400)" }}>YOUTUBE · 4:32</div>
            <div style={{ fontSize: 16, color: "var(--white)", marginTop: 6, fontWeight: 600 }}>BioStation 3 유리문 시공 풀영상</div>
          </div>
          <div style={{ position: "absolute", bottom: 16, left: 16, display: "flex", gap: 6 }}>
            <ViewBtn>유리문</ViewBtn>
            <ViewBtn>콘크리트</ViewBtn>
            <ViewBtn>석고벽</ViewBtn>
          </div>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { n: "01", t: "위치 표시", d: "단말기 중심선과 브라켓 상단 위치를 마스킹테이프로 표시합니다.", time: "1분" },
            { n: "02", t: "케이블 정리", d: "벽 출선구에서 케이블을 끌어내 브라켓 채널에 통과시킵니다.", time: "2분" },
            { n: "03", t: "브라켓 부착", d: "VHB 양면을 벗겨 정위치에 압착, 30초간 강하게 눌러 고정.", time: "1분" },
            { n: "04", t: "단말기 결합", d: "M3 나사 4개로 단말기 후면을 브라켓에 체결합니다.", time: "4분" },
          ].map((s) => (
            <div key={s.n} className="ub-card" style={{ padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 36, color: "var(--cyan-400)", lineHeight: 1 }}>{s.n}</div>
                <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)" }}>{s.time}</div>
              </div>
              <div style={{ height: 100, background: "rgba(255,255,255,0.02)", border: "1px solid var(--line)", borderRadius: 8, marginBottom: 12, display: "grid", placeItems: "center", color: "var(--gray-500)", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                ILLUSTRATION
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--white)", marginBottom: 6 }}>{s.t}</div>
              <div style={{ fontSize: 12, color: "var(--gray-300)", lineHeight: 1.5 }}>{s.d}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, padding: 20, borderRadius: 12, background: "rgba(0,200,240,0.05)", border: "1px solid rgba(0,200,240,0.2)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--white)" }}>출장 시공도 신청 가능</div>
            <div style={{ fontSize: 12, color: "var(--gray-300)", marginTop: 4 }}>수도권 +30,000원 / 지방 별도 견적</div>
          </div>
          <Btn variant="primary">시공 의뢰</Btn>
        </div>
      </div>
    </div>
  </div>
);

// B5. FAQ + 푸터 (콘텐츠/신뢰 페이지)
const B5_FAQ = () => (
  <div className="ub-screen desktop">
    <TopBar active="support" />
    <div style={{ flex: 1, overflow: "auto", padding: "48px 80px 0" }}>
      <Eyebrow style={{ marginBottom: 10 }}>FAQ · 자주 묻는 질문</Eyebrow>
      <h2 className="ub-h2" style={{ marginBottom: 32 }}>궁금한 점이 있으세요?</h2>

      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 32, marginBottom: 60 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {["전체", "제품 · 호환성", "설치 · 시공", "배송 · 결제", "교환 · 반품", "기타"].map((c, i) => (
            <div key={c} style={{
              padding: "10px 14px",
              borderRadius: 8,
              background: i === 1 ? "rgba(0,200,240,0.1)" : "transparent",
              color: i === 1 ? "var(--cyan-400)" : "var(--gray-200)",
              fontSize: 13,
              fontWeight: i === 1 ? 600 : 400,
              cursor: "pointer",
              borderLeft: i === 1 ? "2px solid var(--cyan-400)" : "2px solid transparent",
            }}>{c}</div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { q: "유리문이 두꺼워도 설치되나요?", a: "강화유리 8~12mm 까지 표준 대응이며, 그 이상은 사전 문의 시 맞춤 제작 가능합니다.", open: true },
            { q: "벽에 구멍을 뚫지 않고 설치할 수 있나요?", a: "유리문에는 동봉된 VHB 4910 양면테이프만으로 견고하게 고정됩니다. 콘크리트벽은 안전을 위해 M3 나사 4개를 권장합니다." },
            { q: "케이블은 어떻게 숨겨지나요?", a: "브라켓 내부에 ⌀8mm 채널이 있어 단말기 후면에서 벽 출선구로 외부 노출 없이 정리됩니다." },
            { q: "출시예정 모델은 언제 판매되나요?", a: "사전 견적 문의 접수 시 우선 제작 일정에 반영해드리며, 통상 2~3주 이내에 배송 가능합니다." },
            { q: "맞춤 제작도 가능한가요?", a: "슈프리마 외 단말기, 특수 환경(곡면 유리, 옥외 IP등급 등)은 별도 견적 가능합니다." },
          ].map((f, i) => (
            <div key={i} className="ub-card" style={{ padding: "18px 22px", cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span className="ub-mono" style={{ color: "var(--cyan-400)", fontSize: 13 }}>Q.</span>
                  <span style={{ fontSize: 14, color: "var(--white)", fontWeight: 600 }}>{f.q}</span>
                </div>
                <div style={{ color: "var(--gray-400)", fontSize: 16 }}>{f.open ? "−" : "+"}</div>
              </div>
              {f.open && (
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)", color: "var(--gray-200)", fontSize: 13, lineHeight: 1.7, paddingLeft: 28 }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer style={{ borderTop: "1px solid var(--line)", padding: "32px 80px", background: "var(--navy-900)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 24 }}>
        <div>
          <Logo />
          <div style={{ marginTop: 14, fontSize: 12, color: "var(--gray-300)", lineHeight: 1.7 }}>
            에스디컨버전스 (SD Convergence)<br/>
            대표 이두성 · 사업자등록번호 000-00-00000<br/>
            서울특별시 강남구 테헤란로 000<br/>
            통신판매업신고 제2026-서울강남-0000호
          </div>
        </div>
        <FooterCol title="제품" items={["전체보기", "안면인식", "지문+카드", "카드전용"]} />
        <FooterCol title="고객지원" items={["설치 가이드", "FAQ", "교환·반품", "공지사항"]} />
        <FooterCol title="문의" items={["1588-0000", "info@sdconv.kr", "평일 09–18시"]} />
      </div>
      <div style={{ paddingTop: 20, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--gray-400)" }}>
        <div>© 2026 SD Convergence. All rights reserved.</div>
        <div style={{ display: "flex", gap: 16 }}><span>이용약관</span><span>개인정보처리방침</span></div>
      </div>
    </footer>
  </div>
);

const FooterCol = ({ title, items }) => (
  <div>
    <div className="ub-spec-key" style={{ marginBottom: 12 }}>{title}</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((it) => <div key={it} style={{ fontSize: 12, color: "var(--gray-200)" }}>{it}</div>)}
    </div>
  </div>
);

window.B4_InstallGuide = B4_InstallGuide;
window.B5_FAQ = B5_FAQ;
