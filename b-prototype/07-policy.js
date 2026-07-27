"use strict";

// B안 — 페이지 7: 정책 페이지 (이용약관 / 개인정보 처리방침)
var useIsMobile7 = window.UB.useIsMobile;
var policyPad = function policyPad(isMobile) {
  return {
    padding: isMobile ? "28px 16px 60px" : "48px 80px 80px",
    maxWidth: 920,
    margin: "0 auto",
    color: "var(--gray-200)",
    fontSize: 14,
    lineHeight: 1.85
  };
};
var Section = function Section(_ref) {
  var n = _ref.n,
    title = _ref.title,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      color: "var(--white)",
      fontWeight: 700,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      color: "var(--cyan-400)",
      marginRight: 8
    }
  }, n, "."), title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gray-200)"
    }
  }, children));
};

// ─── 이용약관 ──────────────────────────────────────────────────────────────
var TermsPage = function TermsPage() {
  var isMobile = useIsMobile7(1024);
  return /*#__PURE__*/React.createElement("div", {
    style: policyPad(isMobile)
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "TERMS"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2",
    style: {
      marginBottom: 8,
      fontSize: isMobile ? 24 : 32
    }
  }, "\uC774\uC6A9\uC57D\uAD00"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginBottom: 32
    }
  }, "\uC2DC\uD589\uC77C: 2026-05-03"), /*#__PURE__*/React.createElement(Section, {
    n: "01",
    title: "\uBAA9\uC801"
  }, "\uBCF8 \uC57D\uAD00\uC740 \uC5D0\uC2A4\uB514\uCEE8\uBC84\uC804\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 3D UniBox(", /*#__PURE__*/React.createElement("a", {
    href: "https://3dunibox.co.kr",
    style: {
      color: "var(--cyan-400)"
    }
  }, "3dunibox.co.kr"), ")\uAC00 \uC81C\uACF5\uD558\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD568\uC5D0 \uC788\uC5B4 \uD68C\uC0AC\uC640 \uD68C\uC6D0\uC758 \uAD8C\uB9AC\xB7\uC758\uBB34 \uBC0F \uCC45\uC784\uC0AC\uD56D\uC744 \uADDC\uC815\uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Section, {
    n: "02",
    title: "\uC6A9\uC5B4\uC758 \uC815\uC758"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, "\u201C\uC11C\uBE44\uC2A4\u201D\uB780 \uD68C\uC0AC\uAC00 \uBCF8 \uC0AC\uC774\uD2B8\uB97C \uD1B5\uD574 \uC81C\uACF5\uD558\uB294 3D \uD504\uB9B0\uD305 \uC81C\uD488\uC758 \uD310\uB9E4 \uBC0F \uAD00\uB828 \uBD80\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, "\u201C\uD68C\uC6D0\u201D\uC774\uB780 \uBCF8 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uACE0 \uD68C\uC0AC\uC5D0 \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uC5EC \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, "\u201C\uC8FC\uBB38\u201D\uC774\uB780 \uD68C\uC6D0\uC774 \uBCF8 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uC0C1\uD488\uC744 \uAD6C\uB9E4\uD558\uAE30 \uC704\uD574 \uACB0\uC81C \uC808\uCC28\uB97C \uC644\uB8CC\uD55C \uD589\uC704\uB97C \uB9D0\uD569\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement(Section, {
    n: "03",
    title: "\uC57D\uAD00\uC758 \uD6A8\uB825 \uBC0F \uBCC0\uACBD"
  }, "\uBCF8 \uC57D\uAD00\uC740 \uD68C\uC6D0\uC774 \uB3D9\uC758\uD568\uC73C\uB85C\uC368 \uD6A8\uB825\uC774 \uBC1C\uC0DD\uD558\uBA70, \uD68C\uC0AC\uB294 \uAD00\uB828 \uBC95\uB839\uC744 \uC704\uBC18\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uBCF8 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC57D\uAD00\uC774 \uBCC0\uACBD\uB418\uB294 \uACBD\uC6B0 \uBCC0\uACBD\uB41C \uC57D\uAD00\uC758 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC804\uBD80\uD130 \uC0AC\uC774\uD2B8\uC5D0 \uACF5\uC9C0\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Section, {
    n: "04",
    title: "\uD68C\uC6D0\uAC00\uC785"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, "\uD68C\uC6D0\uAC00\uC785\uC740 \uD68C\uC6D0\uC774 \uC57D\uAD00 \uBC0F \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68\uC5D0 \uB3D9\uC758\uD558\uACE0 \uAC00\uC785 \uC591\uC2DD\uC5D0 \uC815\uD655\uD55C \uC815\uBCF4\uB97C \uAE30\uC7AC\uD55C \uD6C4 \uD68C\uC0AC\uAC00 \uC774\uB97C \uC2B9\uB099\uD568\uC73C\uB85C\uC368 \uC131\uB9BD\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, "\uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uAC70\uB098 \uD5C8\uC704 \uC815\uBCF4\uB97C \uC785\uB825\uD55C \uD68C\uC6D0\uC740 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC774 \uC81C\uD55C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement(Section, {
    n: "05",
    title: "\uD68C\uC6D0\uC758 \uC758\uBB34"
  }, "\uD68C\uC6D0\uC740 \uAC00\uC785 \uC2DC \uB4F1\uB85D\uD55C \uC815\uBCF4\uC5D0 \uBCC0\uACBD\uC774 \uC788\uB294 \uACBD\uC6B0 \uC989\uC2DC \uC218\uC815\uD574\uC57C \uD558\uBA70, \uBE44\uBC00\uBC88\uD638\uB97C \uBCF8\uC778\uC758 \uCC45\uC784 \uD558\uC5D0 \uC548\uC804\uD558\uAC8C \uAD00\uB9AC\uD574\uC57C \uD569\uB2C8\uB2E4. \uD68C\uC6D0\uC774 \uBCF8 \uC57D\uAD00 \uBC0F \uAD00\uB828 \uBC95\uB839\uC744 \uC704\uBC18\uD55C \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uC0AC\uC804 \uD1B5\uC9C0 \uC5C6\uC774 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC81C\uD55C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Section, {
    n: "06",
    title: "\uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBC0F \uACB0\uC81C"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, "\uD68C\uC0AC\uB294 \uD68C\uC6D0\uC774 \uACB0\uC81C\uD55C \uC0C1\uD488\uC744 \uACB0\uC81C \uD655\uC778 \uD6C4 1\uC601\uC5C5\uC77C \uC774\uB0B4 \uC81C\uC791\uC5D0 \uCC29\uC218\uD558\uBA70, \uD3C9\uADE0 2~5\uC601\uC5C5\uC77C \uC774\uB0B4 \uCD9C\uACE0\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, "\uACB0\uC81C \uC218\uB2E8: \uC2E0\uC6A9\uCE74\uB4DC \uB4F1 \uC0AC\uC774\uD2B8\uC5D0 \uBA85\uC2DC\uB41C \uACB0\uC81C \uC218\uB2E8."), /*#__PURE__*/React.createElement("li", null, "\uBAA8\uB4E0 \uAC00\uACA9\uC740 \uBD80\uAC00\uC138(VAT) \uD3EC\uD568, \uD45C\uC2DC\uB41C \uD1B5\uD654\uB294 \uB300\uD55C\uBBFC\uAD6D \uC6D0(KRW)."))), /*#__PURE__*/React.createElement(Section, {
    n: "07",
    title: "\uCCAD\uC57D \uCCA0\uD68C \uBC0F \uD658\uBD88"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, "\uBCF8 \uC0AC\uC774\uD2B8\uC758 \uC0C1\uD488\uC740 \uD68C\uC6D0\uC758 \uC8FC\uBB38\uC5D0 \uB530\uB77C \uAC1C\uBCC4\uC801\uC73C\uB85C \uC81C\uC791\uB418\uB294 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uB9DE\uCDA4 \uC81C\uC791 \uC0C1\uD488"), "\uC73C\uB85C, \u300C\uC804\uC790\uC0C1\uAC70\uB798\uBC95 \uC81C17\uC870 \uC81C2\uD56D \uC81C5\uD638\u300D\uC5D0 \uC758\uD574 \uCCAD\uC57D \uCCA0\uD68C\uAC00 \uC81C\uD55C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, "\uB2E4\uB9CC \uB2E4\uC74C\uC758 \uACBD\uC6B0 \uD658\uBD88\xB7\uAD50\uD658\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4:", /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("li", null, "\uC81C\uC791 \uCC29\uC218 \uC804 \uCDE8\uC18C \uC694\uCCAD"), /*#__PURE__*/React.createElement("li", null, "\uC81C\uD488 \uC218\uB839 \uD6C4 7\uC77C \uC774\uB0B4 \uBA85\uBC31\uD55C \uC81C\uD488 \uD558\uC790(\uD30C\uC190\xB7\uCD9C\uB825 \uBD88\uB7C9\xB7\uBAA8\uB378 \uBD88\uC77C\uCE58) \uD655\uC778\uB41C \uACBD\uC6B0"))), /*#__PURE__*/React.createElement("li", null, "\uB2E8\uC21C \uBCC0\uC2EC\uC5D0 \uC758\uD55C \uCDE8\uC18C\xB7\uBC18\uD488\xB7\uAD50\uD658\uC740 \uCD9C\uACE0 \uD6C4 \uBD88\uAC00\uD569\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement(Section, {
    n: "08",
    title: "\uBC30\uC1A1"
  }, "\uBC30\uC1A1\uC9C0\uB294 \uD68C\uC6D0\uC774 \uACB0\uC81C \uC2DC \uC785\uB825\uD55C \uC8FC\uC18C\uB97C \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4. \uC798\uBABB \uC785\uB825\uB41C \uC8FC\uC18C\uB85C \uC778\uD55C \uC624\uBC30\uC1A1\uC5D0 \uB300\uD55C \uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC73C\uBA70, \uC7AC\uBC30\uC1A1 \uC2DC \uCD94\uAC00 \uBC30\uC1A1\uBE44\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Section, {
    n: "09",
    title: "\uD68C\uC6D0 \uD0C8\uD1F4"
  }, "\uD68C\uC6D0\uC740 \uC5B8\uC81C\uB4E0\uC9C0 \uB9C8\uC774\uD398\uC774\uC9C0\uB97C \uD1B5\uD574 \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD0C8\uD1F4 \uC2DC \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC989\uC2DC \uC0AD\uC81C\uB418\uBA70, \uB2E8 \uAD00\uACC4 \uBC95\uB839(\uC804\uC790\uC0C1\uAC70\uB798\uBC95, \uAD6D\uC138\uAE30\uBCF8\uBC95 \uB4F1)\uC5D0 \uB530\uB77C \uC77C\uC815 \uAE30\uAC04 \uBCF4\uAD00\uD574\uC57C \uD558\uB294 \uC815\uBCF4\uB294 \uD574\uB2F9 \uBC95\uB839\uC774 \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uB429\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Section, {
    n: "10",
    title: "\uBA74\uCC45 \uBC0F \uBD84\uC7C1 \uD574\uACB0"
  }, "\uD68C\uC0AC\uB294 \uCC9C\uC7AC\uC9C0\uBCC0, \uC804\uC7C1, \uC815\uC804 \uB4F1 \uD68C\uC0AC\uC758 \uD1B5\uC81C \uBC94\uC704\uB97C \uBC97\uC5B4\uB09C \uC0AC\uC720\uB85C \uC778\uD55C \uC11C\uBE44\uC2A4 \uC911\uB2E8\uC5D0 \uB300\uD574 \uCC45\uC784\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uBCF8 \uC57D\uAD00\uACFC \uAD00\uB828\uD558\uC5EC \uBD84\uC7C1\uC774 \uBC1C\uC0DD\uD560 \uACBD\uC6B0 \uD68C\uC0AC \uBCF8\uC810 \uC18C\uC7AC\uC9C0 \uAD00\uD560 \uBC95\uC6D0\uC744 \uD569\uC758 \uAD00\uD560\uB85C \uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      padding: 18,
      border: "1px dashed var(--line-strong)",
      borderRadius: 10,
      fontSize: 12,
      color: "var(--gray-300)",
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uC5D0\uC2A4\uB514\uCEE8\uBC84\uC804\uC2A4 (SD Convergence)"), /*#__PURE__*/React.createElement("br", null), "\uB300\uD45C \uD5C8\uD76C\uACBD \xB7 \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 449-56-00430", /*#__PURE__*/React.createElement("br", null), "\uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0: \uC81C 2026-\uC6A9\uC778\uAE30\uD765-01256 \uD638", /*#__PURE__*/React.createElement("br", null), "\uC0AC\uC5C5\uC7A5 \uC8FC\uC18C: \uACBD\uAE30\uB3C4 \uC6A9\uC778\uC2DC \uAE30\uD765\uAD6C \uAE30\uD765\uC5ED\uB85C58\uBC88\uAE38 78 103\uB3D9 1303\uD638", /*#__PURE__*/React.createElement("br", null), "\uBB38\uC758: 010-2776-9109 / leedoo80@gmail.com"));
};

// ─── 개인정보 처리방침 ────────────────────────────────────────────────────
var PrivacyPage = function PrivacyPage() {
  var isMobile = useIsMobile7(1024);
  return /*#__PURE__*/React.createElement("div", {
    style: policyPad(isMobile)
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "PRIVACY POLICY"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2",
    style: {
      marginBottom: 8,
      fontSize: isMobile ? 24 : 32
    }
  }, "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginBottom: 32
    }
  }, "\uC2DC\uD589\uC77C: 2026-05-03"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 28
    }
  }, "\uC5D0\uC2A4\uB514\uCEE8\uBC84\uC804\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uB294 \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D\uC744 \uC900\uC218\uD558\uBA70, \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC548\uC804\uD558\uAC8C \uCC98\uB9AC\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Section, {
    n: "01",
    title: "\uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uD56D\uBAA9 \uBC0F \uBC29\uBC95"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uD544\uC218"), ": \uC774\uBA54\uC77C, \uBE44\uBC00\uBC88\uD638(\uC554\uD638\uD654 \uC800\uC7A5), \uC774\uB984, \uC804\uD654\uBC88\uD638, \uC8FC\uC18C(\uC6B0\uD3B8\uBC88\uD638\xB7\uAE30\uBCF8\xB7\uC0C1\uC138)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uC790\uB3D9 \uC218\uC9D1"), ": \uC811\uC18D \uB85C\uADF8, \uCFE0\uD0A4, IP \uC8FC\uC18C, \uAE30\uAE30 \uC815\uBCF4(\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D \uBD84\uC11D \uBAA9\uC801)"), /*#__PURE__*/React.createElement("li", null, "\uC218\uC9D1 \uBC29\uBC95: \uD68C\uC6D0\uAC00\uC785 \uC591\uC2DD, \uACB0\uC81C \uC591\uC2DD, \uC790\uB3D9 \uC0DD\uC131 \uB85C\uADF8"))), /*#__PURE__*/React.createElement(Section, {
    n: "02",
    title: "\uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, "\uD68C\uC6D0 \uC2DD\uBCC4 \uBC0F \uBCF8\uC778 \uD655\uC778"), /*#__PURE__*/React.createElement("li", null, "\uC8FC\uBB38 \uCC98\uB9AC, \uACB0\uC81C, \uBC30\uC1A1 \uBC0F \uC0AC\uD6C4 \uAD00\uB9AC(\uAD50\uD658\xB7\uD658\uBD88\xB7CS)"), /*#__PURE__*/React.createElement("li", null, "\uC8FC\uBB38 \uC9C4\uD589 \uC548\uB0B4, \uC601\uC218\uC99D \uBC1C\uC1A1, \uACF5\uC9C0\uC0AC\uD56D \uC804\uB2EC"), /*#__PURE__*/React.createElement("li", null, "\uBD80\uC815 \uC774\uC6A9 \uBC29\uC9C0 \uBC0F \uBCF4\uC548"), /*#__PURE__*/React.createElement("li", null, "\uAD00\uB828 \uBC95\uB839\uC5D0 \uB530\uB978 \uC758\uBB34 \uC774\uD589"))), /*#__PURE__*/React.createElement(Section, {
    n: "03",
    title: "\uAC1C\uC778\uC815\uBCF4\uC758 \uBCF4\uC720 \uBC0F \uC774\uC6A9 \uAE30\uAC04"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, "\uD68C\uC6D0 \uC815\uBCF4: \uD68C\uC6D0 \uD0C8\uD1F4 \uC2DC\uAE4C\uC9C0"), /*#__PURE__*/React.createElement("li", null, "\uC8FC\uBB38\xB7\uACB0\uC81C \uAE30\uB85D: \u300C\uC804\uC790\uC0C1\uAC70\uB798\uBC95\u300D\uC5D0 \uB530\uB77C 5\uB144"), /*#__PURE__*/React.createElement("li", null, "\uC811\uC18D \uB85C\uADF8: \u300C\uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95\u300D\uC5D0 \uB530\uB77C 3\uAC1C\uC6D4"), /*#__PURE__*/React.createElement("li", null, "\uD0C8\uD1F4 \uC2DC \uC989\uC2DC \uD30C\uAE30, \uB2E8 \uC704 \uBC95\uC815 \uBCF4\uAD00 \uC758\uBB34\uAC00 \uC788\uB294 \uC815\uBCF4\uB294 \uD574\uB2F9 \uAE30\uAC04 \uB3D9\uC548 \uBD84\uB9AC \uBCF4\uAD00 \uD6C4 \uD30C\uAE30"))), /*#__PURE__*/React.createElement(Section, {
    n: "04",
    title: "\uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5"
  }, "\uD68C\uC0AC\uB294 \uC6D0\uCE59\uC801\uC73C\uB85C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uC74C\uC758 \uACBD\uC6B0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      margin: "8px 0 0"
    }
  }, /*#__PURE__*/React.createElement("li", null, "\uD68C\uC6D0\uC774 \uC0AC\uC804 \uB3D9\uC758\uD55C \uACBD\uC6B0"), /*#__PURE__*/React.createElement("li", null, "\uBC95\uB839 \uB610\uB294 \uC218\uC0AC\uAE30\uAD00\uC758 \uC694\uCCAD\uC774 \uC788\uB294 \uACBD\uC6B0"), /*#__PURE__*/React.createElement("li", null, "\uBC30\uC1A1\uC744 \uC704\uD574 \uD0DD\uBC30\uC0AC\uC5D0 \uBC30\uC1A1\uC9C0\xB7\uC5F0\uB77D\uCC98\uB97C \uC804\uB2EC\uD558\uB294 \uACBD\uC6B0"))), /*#__PURE__*/React.createElement(Section, {
    n: "05",
    title: "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC \uC704\uD0C1"
  }, "\uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uB97C \uC704\uD0C1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      marginTop: 10,
      borderCollapse: "collapse",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "rgba(255,255,255,0.04)",
      color: "var(--gray-400)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "8px 10px",
      textAlign: "left",
      fontWeight: 500
    }
  }, "\uC218\uD0C1 \uC5C5\uCCB4"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "8px 10px",
      textAlign: "left",
      fontWeight: 500
    }
  }, "\uC704\uD0C1 \uC5C5\uBB34"))), /*#__PURE__*/React.createElement("tbody", {
    style: {
      color: "var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px"
    }
  }, "Vercel Inc."), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px"
    }
  }, "\uC6F9 \uD638\uC2A4\uD305 / CDN")), /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px"
    }
  }, "Supabase Inc."), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px"
    }
  }, "\uD68C\uC6D0 \uC778\uC99D \uBC0F \uB370\uC774\uD130\uBCA0\uC774\uC2A4")), /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px"
    }
  }, "Resend Inc."), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px"
    }
  }, "\uC774\uBA54\uC77C \uBC1C\uC1A1")), /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px"
    }
  }, "\uD0DD\uBC30\uC0AC(\uBCC4\uB3C4 \uACE0\uC9C0)"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px"
    }
  }, "\uC0C1\uD488 \uBC30\uC1A1"))))), /*#__PURE__*/React.createElement(Section, {
    n: "06",
    title: "\uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC"
  }, "\uD68C\uC6D0\uC740 \uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC74C \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      margin: "8px 0 0"
    }
  }, /*#__PURE__*/React.createElement("li", null, "\uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C\xB7\uC815\uC815\xB7\uC0AD\uC81C\xB7\uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C"), /*#__PURE__*/React.createElement("li", null, "\uD68C\uC6D0 \uD0C8\uD1F4 \uC694\uCCAD"), /*#__PURE__*/React.createElement("li", null, "\uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C \uC9C1\uC811 \uC815\uBCF4 \uC218\uC815\xB7\uC0AD\uC81C \uAC00\uB2A5"))), /*#__PURE__*/React.createElement(Section, {
    n: "07",
    title: "\uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, "\uBE44\uBC00\uBC88\uD638\uB294 \uB2E8\uBC29\uD5A5 \uC554\uD638\uD654(\uD574\uC2DC)\uB85C \uC800\uC7A5\uB418\uBA70 \uD68C\uC0AC\uB3C4 \uC6D0\uBB38\uC744 \uC54C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (Supabase Auth)."), /*#__PURE__*/React.createElement("li", null, "\uC6F9\uC0AC\uC774\uD2B8 \uC804 \uAD6C\uAC04 SSL/TLS(HTTPS) \uC554\uD638\uD654 \uD1B5\uC2E0."), /*#__PURE__*/React.createElement("li", null, "\uD68C\uC6D0 \uAC1C\uC778\uC815\uBCF4 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB294 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uB300\uD55C\uBBFC\uAD6D \uB0B4 \uB370\uC774\uD130\uC13C\uD130(AWS \uC544\uC2DC\uC544\xB7\uD0DC\uD3C9\uC591 \uC11C\uC6B8 \uB9AC\uC804)"), "\uC5D0 \uC800\uC7A5\xB7\uCC98\uB9AC\uB429\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, "\uAC1C\uC778\uC815\uBCF4\uC5D0 \uB300\uD55C \uC811\uADFC\uC740 \uC11C\uBC84 \uCE21 \uC778\uC99D\uC744 \uD1B5\uACFC\uD55C \uAD00\uB9AC\uC790\uB9CC \uAC00\uB2A5\uD558\uBA70, \uC11C\uBE44\uC2A4 \uD0A4 \uB4F1 \uBBFC\uAC10 \uC815\uBCF4\uB294 \uC11C\uBC84\uC5D0\uB9CC \uBCF4\uAD00\uB418\uC5B4 \uC678\uBD80\uC5D0 \uB178\uCD9C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, "\uAD00\uB9AC\uC790 \uD654\uBA74\uC758 \uBAA9\uB85D\uC5D0\uC11C\uB294 \uC774\uB984\xB7\uC5F0\uB77D\uCC98\xB7\uC774\uBA54\uC77C \uB4F1\uC744 \uB9C8\uC2A4\uD0B9\uD558\uC5EC \uD45C\uC2DC\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, "\uAD00\uB9AC\uC790 \uC811\uADFC \uBC0F \uC11C\uBC84 \uCC98\uB9AC \uAE30\uB85D(\uB85C\uADF8)\uC744 \uBCF4\uAD00\uD558\uACE0 \uC815\uAE30\uC801\uC73C\uB85C \uC810\uAC80\uD569\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement(Section, {
    n: "08",
    title: "\uCFE0\uD0A4 \uC0AC\uC6A9"
  }, "\uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uD3B8\uC758\uB97C \uC704\uD574 \uCFE0\uD0A4\uB97C \uC0AC\uC6A9\uD558\uBA70, \uD68C\uC6D0\uC740 \uBE0C\uB77C\uC6B0\uC800 \uC124\uC815\uC5D0\uC11C \uCFE0\uD0A4 \uC0AC\uC6A9\uC744 \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uAC70\uBD80 \uC2DC \uC77C\uBD80 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC74C)."), /*#__PURE__*/React.createElement(Section, {
    n: "09",
    title: "\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: "rgba(46,124,246,0.04)",
      border: "1px solid rgba(46,124,246,0.2)",
      borderRadius: 8,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790"), ": \uD5C8\uD76C\uACBD (\uB300\uD45C)"), /*#__PURE__*/React.createElement("div", null, "\uC5F0\uB77D\uCC98: 010-2776-9109"), /*#__PURE__*/React.createElement("div", null, "\uC774\uBA54\uC77C: leedoo80@gmail.com"))), /*#__PURE__*/React.createElement(Section, {
    n: "10",
    title: "\uAC1C\uC815 \uC548\uB0B4"
  }, "\uBCF8 \uCC98\uB9AC\uBC29\uCE68\uC774 \uBCC0\uACBD\uB420 \uACBD\uC6B0 \uC2DC\uD589 7\uC77C \uC804\uBD80\uD130 \uC0AC\uC774\uD2B8\uC5D0 \uACF5\uC9C0\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      padding: 18,
      border: "1px dashed var(--line-strong)",
      borderRadius: 10,
      fontSize: 12,
      color: "var(--gray-300)",
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uC5D0\uC2A4\uB514\uCEE8\uBC84\uC804\uC2A4 (SD Convergence)"), /*#__PURE__*/React.createElement("br", null), "\uB300\uD45C \uD5C8\uD76C\uACBD \xB7 \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 449-56-00430", /*#__PURE__*/React.createElement("br", null), "\uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0: \uC81C 2026-\uC6A9\uC778\uAE30\uD765-01256 \uD638", /*#__PURE__*/React.createElement("br", null), "\uC0AC\uC5C5\uC7A5 \uC8FC\uC18C: \uACBD\uAE30\uB3C4 \uC6A9\uC778\uC2DC \uAE30\uD765\uAD6C \uAE30\uD765\uC5ED\uB85C58\uBC88\uAE38 78 103\uB3D9 1303\uD638"));
};
window.UB.TermsPage = TermsPage;
window.UB.PrivacyPage = PrivacyPage;