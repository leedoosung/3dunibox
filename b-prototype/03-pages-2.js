"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// B안 — 페이지 2: Detail / Guide / FAQ / Quote / Cart

var _React = React,
  uS3 = _React.useState,
  uM3 = _React.useMemo,
  uE3 = _React.useEffect,
  F3 = _React.Fragment;
var _window$UB = window.UB,
  MODELS = _window$UB.MODELS,
  FAQS = _window$UB.FAQS,
  STEPS = _window$UB.STEPS,
  Ic = _window$UB.Ic,
  Btn = _window$UB.Btn,
  Badge = _window$UB.Badge,
  Bracket = _window$UB.Bracket,
  SHIP = _window$UB.SHIP,
  calcShip = _window$UB.calcShip,
  useIsMobile3 = _window$UB.useIsMobile,
  useProducts3 = _window$UB.useProducts;

// ─── DETAIL ────────────────────────────────────────────────────────────────
var DetailPage = function DetailPage(_ref) {
  var id = _ref.id,
    onNav = _ref.onNav,
    onAdd = _ref.onAdd,
    toast = _ref.toast;
  useProducts3();
  var isMobile = useIsMobile3(1024);
  var _uS = uS3(1),
    _uS2 = _slicedToArray(_uS, 2),
    qty = _uS2[0],
    setQty = _uS2[1];
  var _uS3 = uS3("desc"),
    _uS4 = _slicedToArray(_uS3, 2),
    tab = _uS4[0],
    setTab = _uS4[1];
  var m = MODELS.find(function (x) {
    return x.id === id;
  }) || MODELS[0];
  if (!m) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 60,
        textAlign: "center",
        color: "var(--gray-400)"
      }
    }, "\uC81C\uD488\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\u2026");
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "12px 16px" : "16px 80px",
      borderBottom: "1px solid var(--line)",
      fontSize: 12,
      color: "var(--gray-400)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return onNav({
        name: "home"
      });
    }
  }, "\uD648"), " /", /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer",
      margin: "0 6px"
    },
    onClick: function onClick() {
      return onNav({
        name: "catalog"
      });
    }
  }, "\uC81C\uD488"), " /", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--white)",
      marginLeft: 6
    }
  }, m.name, " (", m.code, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "20px 16px 40px" : "32px 80px 60px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr",
      gap: isMobile ? 24 : 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: m.status === "live" ? "live" : m.status === "sold_out" ? "soldout" : "soon"
  }, m.status === "live" ? "판매중" : m.status === "sold_out" ? "재고없음" : "출시예정")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3 / 4",
      maxHeight: "75vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, m.image_url ? /*#__PURE__*/React.createElement("img", {
    src: imgCDN(m.image_url, 1100),
    alt: m.name,
    loading: "eager",
    decoding: "async",
    style: {
      maxWidth: "100%",
      maxHeight: "100%",
      width: "auto",
      height: "auto",
      display: "block",
      borderRadius: 20,
      filter: "drop-shadow(0 22px 44px rgba(0,0,0,0.6))"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      fontSize: 12,
      color: "var(--gray-500, #6B7280)"
    }
  }, m.code))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 12,
      color: "var(--cyan-400)",
      marginBottom: 8
    }
  }, m.code), /*#__PURE__*/React.createElement("h1", {
    className: "ub-h2",
    style: {
      fontSize: 30,
      marginBottom: 20
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      marginBottom: 20,
      background: "linear-gradient(160deg, #1f6aff 0%, #0f3c93 100%)",
      border: "1px solid rgba(255,255,255,0.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 28,
      color: "#fff",
      fontWeight: 700
    }
  }, "\u20A9", (m.price * qty).toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.75)",
      textAlign: "right"
    }
  }, "VAT \uD3EC\uD568", /*#__PURE__*/React.createElement("br", null), "\uBC30\uC1A1\uBE44 \u20A9", SHIP.FEE.toLocaleString(), " \uBCC4\uB3C4", /*#__PURE__*/React.createElement("br", null), "\uC81C\uC8FC\xB7\uB3C4\uC11C\uC0B0\uAC04 +\u20A9", SHIP.REMOTE_EXTRA.toLocaleString(), /*#__PURE__*/React.createElement("br", null), "\uD3C9\uADE0 2~5\uC601\uC5C5\uC77C \uCD9C\uACE0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ub-spec-key",
    style: {
      color: "rgba(255,255,255,0.85)"
    }
  }, "\uC218\uB7C9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      border: "1px solid rgba(255,255,255,0.32)",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setQty(Math.max(1, qty - 1));
    },
    style: {
      padding: "8px 14px",
      borderRight: "1px solid rgba(255,255,255,0.32)",
      cursor: "pointer",
      userSelect: "none",
      color: "#fff"
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      padding: "8px 18px",
      color: "#fff",
      minWidth: 50,
      textAlign: "center"
    }
  }, qty), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setQty(qty + 1);
    },
    style: {
      padding: "8px 14px",
      borderLeft: "1px solid rgba(255,255,255,0.32)",
      cursor: "pointer",
      userSelect: "none",
      color: "#fff"
    }
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, m.status === "live" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    full: true,
    style: {
      background: "#fff",
      color: "#0f3c93",
      boxShadow: "0 10px 26px -8px rgba(0,0,0,0.4)"
    },
    onClick: function onClick() {
      onAdd(m, qty);
      onNav({
        name: "order"
      });
    }
  }, "\uBC14\uB85C \uAD6C\uB9E4 (\u20A9", (m.price * qty).toLocaleString(), ") ", Ic.arrow), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    size: "lg",
    style: {
      borderColor: "rgba(255,255,255,0.45)",
      color: "#fff"
    },
    onClick: function onClick() {
      onAdd(m, qty);
      toast("".concat(m.name, " ").concat(qty, "\uAC1C \uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE40"));
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8")) : m.status === "sold_out" ? /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    full: true,
    disabled: true,
    style: {
      background: "rgba(255,255,255,0.18)",
      color: "#fff",
      cursor: "not-allowed",
      boxShadow: "none"
    }
  }, "\uC7AC\uACE0\uC5C6\uC74C \xB7 \uAD6C\uB9E4 \uBD88\uAC00") : /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    full: true,
    style: {
      background: "#fff",
      color: "#0f3c93"
    },
    onClick: function onClick() {
      return alert("출시 알림은 010-2776-9109 또는 leedoo80@gmail.com로 신청해 주세요.");
    }
  }, "\uCD9C\uC2DC \uC54C\uB9BC \uC2E0\uCCAD"))), function () {
    var tags = (m.compat_tags || "유리,콘크리트,석고").split(",").map(function (s) {
      return s.trim();
    }).filter(Boolean);
    if (tags.length === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ub-spec-key",
      style: {
        marginBottom: 10
      }
    }, "\uC124\uCE58 \uD658\uACBD \uD638\uD658"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, tags.map(function (c) {
      return /*#__PURE__*/React.createElement("span", {
        key: c,
        style: {
          fontSize: 12,
          fontFamily: "var(--font-mono)",
          padding: "6px 10px",
          borderRadius: 6,
          background: "rgba(74,222,128,0.1)",
          color: "var(--success)",
          border: "1px solid rgba(74,222,128,0.25)"
        }
      }, c, " \u2713");
    })));
  }(), /*#__PURE__*/React.createElement("div", {
    className: "ub-tabs"
  }, [["desc", "제품 설명"], ["spec", "스펙"], ["return", "배송·교환·반품"]].map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      k = _ref3[0],
      l = _ref3[1];
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "ub-tab ".concat(tab === k ? "active" : ""),
      onClick: function onClick() {
        return setTab(k);
      }
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 0",
      color: "var(--gray-200)",
      fontSize: 15,
      lineHeight: 1.75,
      minHeight: 120
    }
  }, tab === "desc" && (m.long_description ? /*#__PURE__*/React.createElement("div", {
    style: {
      whiteSpace: "pre-line"
    }
  }, m.long_description) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uC804\uC6A9\uC73C\uB85C \uC124\uACC4\uB41C \uBE0C\uB77C\uCF13"), "\uC73C\uB85C", /*#__PURE__*/React.createElement("br", null), "\uD6C4\uBA74 \uD615\uC0C1\uACFC \uC815\uD655\uD788 \uB9DE\uC544 \uC720\uACA9 \uC5C6\uC774 \uC7A5\uCC29\uB429\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "\uB3D9\uBD09\uB41C ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "M3 \uBCFC\uD2B8\xB7\uB108\uD2B8"), "\uB85C", /*#__PURE__*/React.createElement("br", null), "\uC720\uB9AC\xB7\uCF58\uD06C\uB9AC\uD2B8\xB7\uC11D\uACE0\uBCBD \uB4F1", /*#__PURE__*/React.createElement("br", null), "\uB2E4\uC591\uD55C \uD658\uACBD\uC5D0 \uC124\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), tab === "spec" && function () {
    var hasDim = m.w != null && m.h != null && m.d != null;
    var rows = [["모델", m.code], ["재질", m.material || "PETG · 무광 블랙"], hasDim ? ["치수", "W ".concat(m.w, " \xD7 H ").concat(m.h, " \xD7 D ").concat(m.d, " mm")] : null].filter(Boolean);
    return /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        fontFamily: "var(--font-mono)",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("tbody", null, rows.map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        k = _ref5[0],
        v = _ref5[1];
      return /*#__PURE__*/React.createElement("tr", {
        key: k,
        style: {
          borderTop: "1px solid var(--line)"
        }
      }, /*#__PURE__*/React.createElement("td", {
        style: {
          padding: "12px 0",
          color: "var(--gray-400)",
          width: 140
        }
      }, k.toUpperCase()), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: "12px 0",
          color: "var(--white)"
        }
      }, v));
    })));
  }(), tab === "return" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cyan-400)",
      fontWeight: 700,
      marginBottom: 4
    }
  }, "\uBC30\uC1A1 \uAE30\uAC04"), "\uACB0\uC81C \uD655\uC778 \uD6C4 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "1\uC601\uC5C5\uC77C \uC774\uB0B4 \uC81C\uC791 \uCC29\uC218"), "\uC5D0 \uB4E4\uC5B4\uAC00\uBA70, \uD3C9\uADE0 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "2~5\uC601\uC5C5\uC77C \uC774\uB0B4 \uCD9C\uACE0"), "\uD569\uB2C8\uB2E4. (\uB3C4\uC11C\uC0B0\uAC04 \uC9C0\uC5ED \uCD94\uAC00 1~2\uC77C)"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cyan-400)",
      fontWeight: 700,
      marginBottom: 4
    }
  }, "\uB2E8\uC21C \uBCC0\uC2EC \uBC18\uD488"), "\uBCF8 \uC81C\uD488\uC740 \uC0AC\uC6A9\uC790 \uC8FC\uBB38\uC5D0 \uB530\uB77C \uAC1C\uBCC4 \uC0DD\uC0B0\uB418\uB294 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uB9DE\uCDA4 \uC81C\uC791 \uC81C\uD488"), "\uC73C\uB85C, \u300C\uC804\uC790\uC0C1\uAC70\uB798\uBC95 \uC81C17\uC870 \uC81C2\uD56D \uC81C5\uD638\u300D\uC5D0 \uB530\uB77C \uCD9C\uACE0 \uD6C4 \uB2E8\uC21C \uBCC0\uC2EC\uC5D0 \uC758\uD55C \uCDE8\uC18C\xB7\uBC18\uD488\xB7\uAD50\uD658\uC740 \uC81C\uD55C\uB429\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cyan-400)",
      fontWeight: 700,
      marginBottom: 4
    }
  }, "\uC81C\uD488 \uD558\uC790"), "\uC81C\uD488 \uC218\uB839 \uD6C4 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "7\uC77C \uC774\uB0B4 \uBA85\uBC31\uD55C \uC81C\uD488 \uD558\uC790"), "(\uD30C\uC190\xB7\uCD9C\uB825 \uBD88\uB7C9\xB7\uBAA8\uB378 \uBD88\uC77C\uCE58)\uAC00 \uD655\uC778\uB41C \uACBD\uC6B0 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "100% \uBB34\uC0C1 \uAD50\uD658\xB7\uD658\uBD88"), "\uD574 \uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cyan-400)",
      fontWeight: 700,
      marginBottom: 4
    }
  }, "\uBAA8\uB378 \uC120\uD0DD \uC624\uB958"), "\uC8FC\uBB38 \uBAA8\uB378 \uBCC0\uACBD/\uCDE8\uC18C\uB294 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uC81C\uC791 \uCC29\uC218 \uC804\uAE4C\uC9C0"), "\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC81C\uC791 \uCC29\uC218 \uC774\uD6C4\uC5D0\uB294 \uD658\uBD88\xB7\uAD50\uD658\uC774 \uC5B4\uB824\uC6B0\uBBC0\uB85C \uACB0\uC81C \uC804 \uBAA8\uB378 \uD638\uD658 \uC5EC\uBD80\uB97C \uBC18\uB4DC\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694."))))));
};

// ─── GUIDE — 현장별 설치 사례 (Supabase install_cases fetch) ───────────────
var GuidePage = function GuidePage() {
  var isMobile = useIsMobile3(1024);
  var _uS5 = uS3([]),
    _uS6 = _slicedToArray(_uS5, 2),
    cases = _uS6[0],
    setCases = _uS6[1];
  var _uS7 = uS3(true),
    _uS8 = _slicedToArray(_uS7, 2),
    loading = _uS8[0],
    setLoading = _uS8[1];
  uE3(function () {
    var sb = window.SUPABASE;
    if (!sb) {
      setLoading(false);
      return;
    }
    sb.from("install_cases").select("*").order("sort_order").then(function (_ref6) {
      var data = _ref6.data,
        error = _ref6.error;
      if (!error && Array.isArray(data)) setCases(data);
    })["catch"](function () {})["finally"](function () {
      return setLoading(false);
    });
  }, []);

  // 상단 BEFORE 강조: caption 이 "BEFORE" 로 시작하는 사례들을 모아 최상단에 가로 그리드(4열)로 표시.
  // 관리자 → 설치 사례에서 제목을 "BEFORE ..." 로 등록하고 사진을 올리면 자동으로 여기 뜸.
  var isBeforeCase = function isBeforeCase(c) {
    return /^\s*before\b/i.test(c.caption || "");
  };
  var beforeCases = cases.filter(function (c) {
    return isBeforeCase(c) && c.image_url;
  });
  var gridCases = cases.filter(function (c) {
    return !isBeforeCase(c);
  });
  var allHavePhoto = gridCases.length > 0 && gridCases.every(function (c) {
    return c.image_url;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "28px 16px 40px" : "48px 80px 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "INSTALLATION CASES"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2",
    style: {
      marginBottom: 8
    }
  }, "\uD604\uC7A5\uBCC4 \uC124\uCE58 \uC0AC\uB840"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gray-300)",
      fontSize: 14,
      marginBottom: isMobile ? 20 : 32
    }
  }, "\uC2E4\uC81C \uC801\uC6A9 \uD604\uC7A5 \uBAA8\uC74C"), beforeCases.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: isMobile ? 28 : 40,
      border: "1px solid rgba(251,191,36,0.35)",
      borderRadius: 18,
      overflow: "hidden",
      background: "var(--navy-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: isMobile ? "14px 16px" : "16px 20px",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: 2,
      padding: "5px 12px",
      borderRadius: 100,
      color: "var(--warning, #FBBF24)",
      background: "rgba(251,191,36,0.12)",
      border: "1px solid rgba(251,191,36,0.45)"
    }
  }, "BEFORE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isMobile ? 17 : 22,
      fontWeight: 800,
      color: "var(--white)",
      letterSpacing: "-0.3px"
    }
  }, "\uBE0C\uB77C\uCF13 \uC5C6\uC774 \uC2DC\uACF5\uD55C \uD604\uC7A5")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? 12 : 16,
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
      gap: isMobile ? 10 : 14
    }
  }, beforeCases.map(function (c, i) {
    var label = (c.caption || "").replace(/^\s*before\s*/i, "").trim();
    return /*#__PURE__*/React.createElement("div", {
      key: c.id || i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: "1 / 1",
        borderRadius: 10,
        overflow: "hidden",
        background: "#0d0d0d",
        border: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: imgCDN(c.image_url, 800),
      alt: label || "브라켓 없이 시공한 현장",
      loading: "lazy",
      decoding: "async",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "ub-mono",
      style: {
        position: "absolute",
        top: 8,
        left: 8,
        fontSize: 9,
        fontWeight: 800,
        letterSpacing: 0.5,
        color: "#111",
        background: "var(--warning, #FBBF24)",
        padding: "3px 7px",
        borderRadius: 5
      }
    }, "BEFORE")), label && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        fontSize: 13,
        color: "var(--white)",
        fontWeight: 700,
        lineHeight: 1.4,
        wordBreak: "keep-all"
      }
    }, label), c.description && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        fontSize: 12,
        color: "var(--gray-300)",
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "keep-all"
      }
    }, c.description));
  }))), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 60,
      textAlign: "center",
      color: "var(--gray-400)"
    }
  }, "\uBD88\uB7EC\uC624\uB294 \uC911\u2026") : cases.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 60,
      textAlign: "center",
      border: "1px dashed var(--line-strong)",
      borderRadius: 12,
      color: "var(--gray-400)"
    }
  }, "\uB4F1\uB85D\uB41C \uC0AC\uB840\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4") : gridCases.length === 0 ? null : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: isMobile ? 18 : 24
    }
  }, gridCases.map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.id || i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "1 / 1",
        background: "#0d0d0d",
        borderRadius: 16,
        display: "grid",
        placeItems: "center",
        position: "relative",
        overflow: "hidden"
      }
    }, c.image_url ? /*#__PURE__*/React.createElement("img", {
      src: imgCDN(c.image_url, 800),
      alt: c.caption,
      loading: "lazy",
      decoding: "async",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "ub-grid-bg",
      style: {
        position: "absolute",
        inset: 0,
        opacity: 0.3
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        textAlign: "center",
        color: "var(--gray-500, #6B7280)",
        fontSize: 11,
        fontFamily: "var(--font-mono)",
        letterSpacing: 1.2
      }
    }, "IMAGE ", String(i + 1).padStart(2, "0")))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        fontSize: 14,
        color: "var(--white)",
        fontWeight: 700,
        lineHeight: 1.4
      }
    }, c.caption), c.description && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontSize: 13,
        color: "var(--gray-300)",
        lineHeight: 1.6,
        whiteSpace: "pre-wrap",
        wordBreak: "keep-all"
      }
    }, c.description));
  })), !loading && gridCases.length > 0 && !allHavePhoto && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontSize: 11,
      color: "var(--gray-500, #6B7280)",
      textAlign: "center"
    }
  }, "\uC2E4\uC81C \uD604\uC7A5 \uC0AC\uC9C4\uC73C\uB85C \uAD50\uCCB4 \uC608\uC815 \u2014 \uC784\uC2DC \uD50C\uB808\uC774\uC2A4\uD640\uB354 \uC0AC\uC6A9 \uC911"));
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
var FAQPage = function FAQPage() {
  var isMobile = useIsMobile3(1024);
  var _uS9 = uS3(0),
    _uS0 = _slicedToArray(_uS9, 2),
    open = _uS0[0],
    setOpen = _uS0[1];
  var _uS1 = uS3("전체"),
    _uS10 = _slicedToArray(_uS1, 2),
    cat = _uS10[0],
    setCat = _uS10[1];
  var _uS11 = uS3(""),
    _uS12 = _slicedToArray(_uS11, 2),
    q = _uS12[0],
    setQ = _uS12[1];
  var cats = ["전체"].concat(_toConsumableArray(new Set(FAQS.map(function (f) {
    return f.c;
  }))));
  var filtered = FAQS.filter(function (f) {
    return (cat === "전체" || f.c === cat) && (!q.trim() || f.q.includes(q) || f.a.includes(q));
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "28px 16px 40px" : "48px 80px 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "FAQ \xB7 \uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2",
    style: {
      marginBottom: 24
    }
  }, "\uAD81\uAE08\uD55C \uC810\uC774 \uC788\uC73C\uC138\uC694?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 480,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--gray-400)"
    }
  }, Ic.search), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "\uD0A4\uC6CC\uB4DC\uB85C \uAC80\uC0C9 (\uC608: \uC720\uB9AC, \uCF00\uC774\uBE14, \uBC18\uD488)",
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    style: {
      paddingLeft: 40
    }
  })), isMobile ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 16,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, cats.map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c,
      onClick: function onClick() {
        return setCat(c);
      },
      style: {
        flexShrink: 0,
        padding: "6px 12px",
        borderRadius: 100,
        background: cat === c ? "rgba(46,124,246,0.12)" : "transparent",
        color: cat === c ? "var(--cyan-400)" : "var(--gray-200)",
        border: "1px solid ".concat(cat === c ? "var(--cyan-400)" : "var(--line)"),
        fontSize: 12,
        fontWeight: cat === c ? 600 : 400,
        cursor: "pointer"
      }
    }, c);
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "200px 1fr",
      gap: isMobile ? 0 : 32
    }
  }, !isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, cats.map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c,
      onClick: function onClick() {
        return setCat(c);
      },
      style: {
        padding: "10px 14px",
        borderRadius: 8,
        background: cat === c ? "rgba(46,124,246,0.1)" : "transparent",
        color: cat === c ? "var(--cyan-400)" : "var(--gray-200)",
        fontSize: 13,
        fontWeight: cat === c ? 600 : 400,
        cursor: "pointer",
        borderLeft: cat === c ? "2px solid var(--cyan-400)" : "2px solid transparent"
      }
    }, c);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: "center",
      color: "var(--gray-400)",
      border: "1px dashed var(--line-strong)",
      borderRadius: 12
    }
  }, "\uAC80\uC0C9 \uACB0\uACFC \uC5C6\uC74C") : filtered.map(function (f, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "ub-card",
      style: {
        padding: "16px 22px",
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setOpen(open === i ? -1 : i);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ub-mono",
      style: {
        color: "var(--cyan-400)",
        fontSize: 13
      }
    }, "Q."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "var(--white)",
        fontWeight: 600
      }
    }, f.q), /*#__PURE__*/React.createElement(Badge, {
      kind: "cyan"
    }, f.c)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--gray-400)",
        transform: open === i ? "rotate(180deg)" : "none",
        transition: "transform 0.2s"
      }
    }, Ic.chevron)), open === i && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        paddingTop: 14,
        borderTop: "1px solid var(--line)",
        color: "var(--gray-200)",
        fontSize: 14,
        lineHeight: 1.75,
        paddingLeft: 28,
        whiteSpace: "pre-line"
      }
    }, f.a));
  }))));
};
window.UB.DetailPage = DetailPage;
window.UB.GuidePage = GuidePage;
window.UB.FAQPage = FAQPage;