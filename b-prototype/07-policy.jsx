// B안 — 페이지 7: 정책 페이지 (이용약관 / 개인정보 처리방침)
const { useIsMobile: useIsMobile7 } = window.UB;

const policyPad = (isMobile) => ({
  padding: isMobile ? "28px 16px 60px" : "48px 80px 80px",
  maxWidth: 920,
  margin: "0 auto",
  color: "var(--gray-200)",
  fontSize: 14,
  lineHeight: 1.85,
});

const Section = ({ n, title, children }) => (
  <section style={{ marginBottom: 28 }}>
    <h3 style={{ fontSize: 17, color: "var(--white)", fontWeight: 700, marginBottom: 10 }}>
      <span className="ub-mono" style={{ color: "var(--cyan-400)", marginRight: 8 }}>{n}.</span>
      {title}
    </h3>
    <div style={{ color: "var(--gray-200)" }}>{children}</div>
  </section>
);

// ─── 이용약관 ──────────────────────────────────────────────────────────────
const TermsPage = () => {
  const isMobile = useIsMobile7(1024);
  return (
    <div style={policyPad(isMobile)}>
      <div className="ub-eyebrow" style={{ marginBottom: 8 }}>TERMS</div>
      <h2 className="ub-h2" style={{ marginBottom: 8, fontSize: isMobile ? 24 : 32 }}>이용약관</h2>
      <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)", marginBottom: 32 }}>
        시행일: 2026-05-03
      </div>

      <Section n="01" title="목적">
        본 약관은 에스디컨버전스(이하 “회사”)가 운영하는 3D UniBox(<a href="https://3dunibox.co.kr" style={{ color: "var(--cyan-400)" }}>3dunibox.co.kr</a>)가 제공하는 전자상거래 서비스를 이용함에 있어 회사와 회원의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
      </Section>

      <Section n="02" title="용어의 정의">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li>“서비스”란 회사가 본 사이트를 통해 제공하는 3D 프린팅 제품의 판매 및 관련 부가 서비스를 의미합니다.</li>
          <li>“회원”이란 본 약관에 동의하고 회사에 개인정보를 제공하여 회원등록을 한 자를 말합니다.</li>
          <li>“주문”이란 회원이 본 사이트에서 상품을 구매하기 위해 결제 절차를 완료한 행위를 말합니다.</li>
        </ul>
      </Section>

      <Section n="03" title="약관의 효력 및 변경">
        본 약관은 회원이 동의함으로써 효력이 발생하며, 회사는 관련 법령을 위반하지 않는 범위에서 본 약관을 개정할 수 있습니다. 약관이 변경되는 경우 변경된 약관의 적용일자 7일 전부터 사이트에 공지합니다.
      </Section>

      <Section n="04" title="회원가입">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li>회원가입은 회원이 약관 및 개인정보 처리방침에 동의하고 가입 양식에 정확한 정보를 기재한 후 회사가 이를 승낙함으로써 성립합니다.</li>
          <li>타인의 정보를 도용하거나 허위 정보를 입력한 회원은 서비스 이용이 제한될 수 있습니다.</li>
        </ul>
      </Section>

      <Section n="05" title="회원의 의무">
        회원은 가입 시 등록한 정보에 변경이 있는 경우 즉시 수정해야 하며, 비밀번호를 본인의 책임 하에 안전하게 관리해야 합니다. 회원이 본 약관 및 관련 법령을 위반한 경우 회사는 사전 통지 없이 서비스 이용을 제한할 수 있습니다.
      </Section>

      <Section n="06" title="서비스 제공 및 결제">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li>회사는 회원이 결제한 상품을 결제 확인 후 1영업일 이내 제작에 착수하며, 평균 2~5영업일 이내 출고합니다.</li>
          <li>결제 수단: 신용카드 등 사이트에 명시된 결제 수단.</li>
          <li>모든 가격은 부가세(VAT) 포함, 표시된 통화는 대한민국 원(KRW).</li>
        </ul>
      </Section>

      <Section n="07" title="청약 철회 및 환불">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li>본 사이트의 상품은 회원의 주문에 따라 개별적으로 제작되는 <strong style={{ color: "var(--white)" }}>맞춤 제작 상품</strong>으로,
          「전자상거래법 제17조 제2항 제5호」에 의해 청약 철회가 제한될 수 있습니다.</li>
          <li>다만 다음의 경우 환불·교환이 가능합니다:
            <ul style={{ paddingLeft: 20, marginTop: 4 }}>
              <li>제작 착수 전 취소 요청</li>
              <li>제품 수령 후 7일 이내 명백한 제품 하자(파손·출력 불량·모델 불일치) 확인된 경우</li>
            </ul>
          </li>
          <li>단순 변심에 의한 취소·반품·교환은 출고 후 불가합니다.</li>
        </ul>
      </Section>

      <Section n="08" title="배송">
        배송지는 회원이 결제 시 입력한 주소를 기준으로 합니다. 잘못 입력된 주소로 인한 오배송에 대한 책임은 회원에게 있으며, 재배송 시 추가 배송비가 발생할 수 있습니다.
      </Section>

      <Section n="09" title="회원 탈퇴">
        회원은 언제든지 마이페이지를 통해 회원 탈퇴를 요청할 수 있습니다. 탈퇴 시 회원의 개인정보는 즉시 삭제되며, 단 관계 법령(전자상거래법, 국세기본법 등)에 따라 일정 기간 보관해야 하는 정보는 해당 법령이 정한 기간 동안 보관됩니다.
      </Section>

      <Section n="10" title="면책 및 분쟁 해결">
        회사는 천재지변, 전쟁, 정전 등 회사의 통제 범위를 벗어난 사유로 인한 서비스 중단에 대해 책임지지 않습니다. 본 약관과 관련하여 분쟁이 발생할 경우 회사 본점 소재지 관할 법원을 합의 관할로 합니다.
      </Section>

      <div style={{ marginTop: 40, padding: 18, border: "1px dashed var(--line-strong)", borderRadius: 10, fontSize: 12, color: "var(--gray-300)", lineHeight: 1.8 }}>
        <strong style={{ color: "var(--white)" }}>에스디컨버전스 (SD Convergence)</strong><br/>
        대표 허희경 · 사업자등록번호 449-56-00430<br/>
        통신판매업신고: [번호 발급 후 기재]<br/>
        사업장 주소: 경기도 용인시 기흥구 기흥역로58번길 78 103동 1303호<br/>
        문의: 010-9109-8277 / leedoo80@gmail.com
      </div>
    </div>
  );
};

// ─── 개인정보 처리방침 ────────────────────────────────────────────────────
const PrivacyPage = () => {
  const isMobile = useIsMobile7(1024);
  return (
    <div style={policyPad(isMobile)}>
      <div className="ub-eyebrow" style={{ marginBottom: 8 }}>PRIVACY POLICY</div>
      <h2 className="ub-h2" style={{ marginBottom: 8, fontSize: isMobile ? 24 : 32 }}>개인정보 처리방침</h2>
      <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)", marginBottom: 32 }}>
        시행일: 2026-05-03
      </div>

      <p style={{ marginBottom: 28 }}>
        에스디컨버전스(이하 “회사”)는 「개인정보 보호법」을 준수하며, 회원의 개인정보를 다음과 같이 안전하게 처리합니다.
      </p>

      <Section n="01" title="개인정보의 수집 항목 및 방법">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li><strong style={{ color: "var(--white)" }}>필수</strong>: 이메일, 비밀번호(암호화 저장), 이름, 전화번호, 주소(우편번호·기본·상세)</li>
          <li><strong style={{ color: "var(--white)" }}>자동 수집</strong>: 접속 로그, 쿠키, IP 주소, 기기 정보(서비스 이용 기록 분석 목적)</li>
          <li>수집 방법: 회원가입 양식, 결제 양식, 자동 생성 로그</li>
        </ul>
      </Section>

      <Section n="02" title="개인정보의 처리 목적">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li>회원 식별 및 본인 확인</li>
          <li>주문 처리, 결제, 배송 및 사후 관리(교환·환불·CS)</li>
          <li>주문 진행 안내, 영수증 발송, 공지사항 전달</li>
          <li>부정 이용 방지 및 보안</li>
          <li>관련 법령에 따른 의무 이행</li>
        </ul>
      </Section>

      <Section n="03" title="개인정보의 보유 및 이용 기간">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li>회원 정보: 회원 탈퇴 시까지</li>
          <li>주문·결제 기록: 「전자상거래법」에 따라 5년</li>
          <li>접속 로그: 「통신비밀보호법」에 따라 3개월</li>
          <li>탈퇴 시 즉시 파기, 단 위 법정 보관 의무가 있는 정보는 해당 기간 동안 분리 보관 후 파기</li>
        </ul>
      </Section>

      <Section n="04" title="개인정보의 제3자 제공">
        회사는 원칙적으로 회원의 개인정보를 제3자에게 제공하지 않습니다. 단, 다음의 경우는 예외로 합니다.
        <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
          <li>회원이 사전 동의한 경우</li>
          <li>법령 또는 수사기관의 요청이 있는 경우</li>
          <li>배송을 위해 택배사에 배송지·연락처를 전달하는 경우</li>
        </ul>
      </Section>

      <Section n="05" title="개인정보 처리 위탁">
        원활한 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁하고 있습니다.
        <table style={{ width: "100%", marginTop: 10, borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.04)", color: "var(--gray-400)" }}>
              <th style={{ padding: "8px 10px", textAlign: "left", fontWeight: 500 }}>수탁 업체</th>
              <th style={{ padding: "8px 10px", textAlign: "left", fontWeight: 500 }}>위탁 업무</th>
            </tr>
          </thead>
          <tbody style={{ color: "var(--gray-200)" }}>
            <tr style={{ borderTop: "1px solid var(--line)" }}>
              <td style={{ padding: "8px 10px" }}>Vercel Inc.</td>
              <td style={{ padding: "8px 10px" }}>웹 호스팅 / CDN</td>
            </tr>
            <tr style={{ borderTop: "1px solid var(--line)" }}>
              <td style={{ padding: "8px 10px" }}>Supabase Inc.</td>
              <td style={{ padding: "8px 10px" }}>회원 인증 및 데이터베이스</td>
            </tr>
            <tr style={{ borderTop: "1px solid var(--line)" }}>
              <td style={{ padding: "8px 10px" }}>Resend Inc.</td>
              <td style={{ padding: "8px 10px" }}>이메일 발송</td>
            </tr>
            <tr style={{ borderTop: "1px solid var(--line)" }}>
              <td style={{ padding: "8px 10px" }}>택배사(별도 고지)</td>
              <td style={{ padding: "8px 10px" }}>상품 배송</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section n="06" title="정보주체의 권리">
        회원은 언제든지 다음 권리를 행사할 수 있습니다.
        <ul style={{ paddingLeft: 20, margin: "8px 0 0" }}>
          <li>개인정보 열람·정정·삭제·처리정지 요구</li>
          <li>회원 탈퇴 요청</li>
          <li>마이페이지에서 직접 정보 수정·삭제 가능</li>
        </ul>
      </Section>

      <Section n="07" title="개인정보의 안전성 확보 조치">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li>비밀번호 암호화 저장 (Supabase Auth)</li>
          <li>SSL/TLS 암호화 통신(HTTPS)</li>
          <li>접근 권한 최소화 및 접근 기록 보관</li>
          <li>정기적인 보안 점검</li>
        </ul>
      </Section>

      <Section n="08" title="쿠키 사용">
        회사는 서비스 이용 편의를 위해 쿠키를 사용하며, 회원은 브라우저 설정에서 쿠키 사용을 거부할 수 있습니다(거부 시 일부 서비스 이용에 제한이 있을 수 있음).
      </Section>

      <Section n="09" title="개인정보 보호책임자">
        <div style={{ padding: 14, background: "rgba(0,200,240,0.04)", border: "1px solid rgba(0,200,240,0.2)", borderRadius: 8, fontSize: 13 }}>
          <div><strong style={{ color: "var(--white)" }}>개인정보 보호책임자</strong>: 허희경 (대표)</div>
          <div>연락처: 010-9109-8277</div>
          <div>이메일: leedoo80@gmail.com</div>
        </div>
      </Section>

      <Section n="10" title="개정 안내">
        본 처리방침이 변경될 경우 시행 7일 전부터 사이트에 공지합니다.
      </Section>

      <div style={{ marginTop: 40, padding: 18, border: "1px dashed var(--line-strong)", borderRadius: 10, fontSize: 12, color: "var(--gray-300)", lineHeight: 1.8 }}>
        <strong style={{ color: "var(--white)" }}>에스디컨버전스 (SD Convergence)</strong><br/>
        대표 허희경 · 사업자등록번호 449-56-00430<br/>
        통신판매업신고: [번호 발급 후 기재]<br/>
        사업장 주소: 경기도 용인시 기흥구 기흥역로58번길 78 103동 1303호
      </div>
    </div>
  );
};

window.UB.TermsPage = TermsPage;
window.UB.PrivacyPage = PrivacyPage;
