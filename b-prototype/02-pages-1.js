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
// B안 — 페이지 컴포넌트들
// HomePage, CatalogPage, DetailPage, GuidePage, FAQPage, QuotePage, CartDrawer, ToastHost

var _React = React,
  uS2 = _React.useState,
  uM2 = _React.useMemo,
  uE2 = _React.useEffect,
  uR2 = _React.useRef,
  F2 = _React.Fragment;
var _window$UB = window.UB,
  MODELS = _window$UB.MODELS,
  FAQS = _window$UB.FAQS,
  STEPS = _window$UB.STEPS,
  Ic = _window$UB.Ic,
  Btn = _window$UB.Btn,
  Badge = _window$UB.Badge,
  Bracket = _window$UB.Bracket,
  Orbit = _window$UB.Orbit,
  useIsMobile2 = _window$UB.useIsMobile,
  useProducts2 = _window$UB.useProducts;

// ─── HERO 제품 360 슬라이드쇼 ─────────────────────────────────────────────
// 영상 파일은 /videos/<ID>_360.{webm,mp4} 에 위치. WebM(VP9 알파) 우선, MP4 폴백.
// 영상 끝(onEnded)에 다음으로 전환. 영상이 없는 ID 는 onError 로 즉시 건너뜀.
// 새 영상 적용 시 캐시 무효화 (?v=숫자 증가)
var HERO_VIDEO_VER = 6;
var HERO_VIDEO_IDS = ["UB-BEP2", "UB-BEW2", "UB-BLN2", "UB-BS2A", "UB-BS3", "UB-BS3-45", "UB-XP2_G", "UB-XP2_M", "UB-XS2"];
var HERO_PLAYBACK_RATE = 0.65; // 1 = 원래 속도, 0.65 = 35% 느림

var HeroProductSlideshow = function HeroProductSlideshow(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 320 : _ref$size;
  var _uS = uS2(0),
    _uS2 = _slicedToArray(_uS, 2),
    idx = _uS2[0],
    setIdx = _uS2[1];
  var _uS3 = uS2(false),
    _uS4 = _slicedToArray(_uS3, 2),
    ready = _uS4[0],
    setReady = _uS4[1]; // 새 영상이 onCanPlay 발생까지 숨김 → 깜빡임 방지
  var ref = uR2(null);
  uE2(function () {
    setReady(false); // idx 바뀌면 즉시 숨김 (key 로 element 자체도 갈아끼움)
    var v = ref.current;
    if (!v) return;
    v.playbackRate = HERO_PLAYBACK_RATE;
    try {
      v.play()["catch"](function () {});
    } catch (e) {}
  }, [idx]);
  var next = function next() {
    return setIdx(function (p) {
      return (p + 1) % HERO_VIDEO_IDS.length;
    });
  };
  var id = HERO_VIDEO_IDS[idx];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("video", {
    key: "hero-vid-".concat(idx) // idx 변경 시 fresh mount — 이전 프레임 잔존/포스터 깜빡임 제거
    ,
    ref: ref,
    autoPlay: true,
    muted: true,
    playsInline: true,
    preload: "auto",
    onCanPlay: function onCanPlay() {
      return setReady(true);
    } // 재생 준비 끝나면 fade in
    ,
    onEnded: next,
    onError: next,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block",
      opacity: ready ? 1 : 0,
      transition: "opacity 0.45s ease-out"
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "/videos/".concat(id, "_360.webm?v=").concat(HERO_VIDEO_VER),
    type: "video/webm"
  }), /*#__PURE__*/React.createElement("source", {
    src: "/videos/".concat(id, "_360.mp4?v=").concat(HERO_VIDEO_VER),
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -18,
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: 5
    }
  }, HERO_VIDEO_IDS.map(function (_, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: i === idx ? "var(--cyan-400)" : "rgba(255,255,255,0.18)",
        transition: "background 0.2s"
      }
    });
  })));
};

// ─── 특수 라인업 카드 (홈) — 기존 360° 회전 영상(HeroProductSlideshow) 재사용 ──
var Special3DBand = function Special3DBand(_ref2) {
  var onNav = _ref2.onNav;
  var isMobile = useIsMobile2(1024);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: isMobile ? "0 16px 40px" : "0 24px 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 24,
      overflow: "hidden",
      position: "relative",
      background: "linear-gradient(110deg,#0a63d6 0%,#0b2f66 55%,#07203f 100%)",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      minHeight: isMobile ? "auto" : 360,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "28px 22px 8px" : 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isMobile ? 22 : 26,
      fontWeight: 800,
      color: "#fff",
      letterSpacing: -0.5,
      marginBottom: 8
    }
  }, "360\xB0\uB85C \uC0B4\uD3B4\uBCF4\uB294 \uC81C\uD488"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#cfe0ff",
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "\uC2E4\uC81C \uC81C\uD488\uC744 360\xB0 \uB3CC\uB824\uAC00\uBA70 \uD655\uC778\uD558\uC138\uC694. \uBC30\uC120 \uC218\uB0A9 \uAD6C\uC870\uC640 \uB9C8\uAC10 \uD488\uC9C8\uC744 \uD55C\uB208\uC5D0 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return onNav({
        name: "catalog"
      });
    },
    style: {
      marginTop: 22,
      display: "inline-block",
      background: "#fff",
      color: "#0b2f66",
      fontWeight: 800,
      fontSize: 14,
      padding: "12px 20px",
      borderRadius: 11,
      cursor: "pointer"
    }
  }, "\uC804 \uC81C\uD488 \uBCF4\uAE30 \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      padding: isMobile ? "6px 0 34px" : 24,
      minHeight: isMobile ? 240 : 300
    }
  }, /*#__PURE__*/React.createElement(HeroProductSlideshow, {
    size: isMobile ? 220 : 300
  }))));
};

// ─── HOME ─────────────────────────────────────────────────────────────────────
var HomePage = function HomePage(_ref3) {
  var onNav = _ref3.onNav;
  useProducts2(); // products fetch 완료 시 재렌더 구독
  var live = MODELS.filter(function (m) {
    return m.status === "live" || m.status === "sold_out";
  });
  var isMobile = useIsMobile2(1024);
  var PAD = isMobile ? "32px 16px 28px" : "80px 80px 60px";
  var SECTION_PAD = isMobile ? "40px 16px" : "52px 24px";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: isMobile ? "18px 16px 4px" : "32px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr 0.9fr",
      gap: isMobile ? 12 : 16
    }
  }, [{
    kick: "배선 정리",
    bg: "linear-gradient(160deg, #1e5fc0 0%, #103070 55%, #0b2050 100%)",
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "\uB4A4\uC5C9\uD0A8 \uBC30\uC120 \uBB49\uCE58,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--cyan-400)"
      }
    }, "\uC5B5\uC9C0\uB85C \uAD6C\uACA8 \uB123\uC73C\uC168\uB098\uC694?")),
    pill: "여유 공간 설계로 딱 맞게 →",
    to: "catalog"
  }, {
    kick: "유리문 시공",
    bg: "linear-gradient(160deg, #16478f 0%, #0c2a5c 75%)",
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "\uC720\uB9AC\uBB38\uC774\uB77C", /*#__PURE__*/React.createElement("br", null), "\uC2DC\uACF5 \uBABB \uD558\uC168\uB098\uC694?"),
    pill: "이제 가능합니다 →",
    to: "catalog"
  }, {
    kick: "호환 브랜드",
    bg: "linear-gradient(160deg, #1f6aff 0%, #0f3c93 100%)",
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "SUPREMA \xB7 ZKTeco", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--cyan-400)"
      }
    }, "glonexs")),
    pill: "전 제품 보기 →",
    to: "catalog"
  }].map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "relative",
        borderRadius: 20,
        padding: isMobile ? "20px 18px" : "24px 22px",
        minHeight: isMobile ? 140 : 210,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid var(--line)",
        background: c.bg
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 1,
        color: "rgba(255,255,255,0.85)"
      }
    }, c.kick), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: isMobile ? 20 : 24,
        fontWeight: 800,
        lineHeight: 1.3,
        margin: "12px 0 0",
        color: "#fff",
        wordBreak: "keep-all"
      }
    }, c.h), /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return onNav({
          name: c.to
        });
      },
      style: {
        marginTop: isMobile ? 16 : "auto",
        alignSelf: "flex-start",
        background: "rgba(0,0,0,0.28)",
        border: "1px solid rgba(255,255,255,0.22)",
        borderRadius: 100,
        padding: "9px 15px",
        fontSize: 12.5,
        fontWeight: 600,
        color: "#fff",
        cursor: "pointer"
      }
    }, c.pill));
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      border: "1px solid rgba(255,255,255,0.14)",
      borderRadius: 20,
      padding: "20px 20px",
      background: "var(--navy-950)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 16px",
      fontSize: 16,
      fontWeight: 800,
      color: "var(--white)"
    }
  }, "\uBC14\uB85C\uAC00\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px 8px"
    }
  }, [["📦", "#3B82F6", "전 제품", "catalog"], ["🧰", "#22C3E6", "시공 사례", "guide"], ["💬", "#A78BFA", "자주 묻는 질문", "faq"], ["📋", "#F59E0B", "주문 조회", "me"], ["🏢", "#34D399", "회사 소개", "about"], ["🛒", "#F472B6", "대량구매", "about"]].map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 4),
      ic = _ref5[0],
      col = _ref5[1],
      label = _ref5[2],
      to = _ref5[3];
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      onClick: function onClick() {
        return onNav({
          name: to
        });
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        fontSize: 12.5,
        fontWeight: 600,
        color: "var(--gray-100)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 9,
        background: col + "22",
        display: "grid",
        placeItems: "center",
        fontSize: 15,
        flexShrink: 0
      }
    }, ic), /*#__PURE__*/React.createElement("span", {
      style: {
        wordBreak: "keep-all",
        lineHeight: 1.2
      }
    }, label));
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: SECTION_PAD
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: isMobile ? 18 : 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "PRODUCT LINEUP"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2"
  }, "3D UniBox \uC81C\uD488 \uB77C\uC778\uC5C5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
      gap: isMobile ? 10 : 16
    }
  }, live.map(function (m) {
    return /*#__PURE__*/React.createElement(ProductCard, {
      key: m.id,
      m: m,
      onClick: function onClick() {
        return onNav({
          name: "detail",
          id: m.id
        });
      }
    });
  }))), /*#__PURE__*/React.createElement(Special3DBand, {
    onNav: onNav
  }));
};
var ProductCard = function ProductCard(_ref6) {
  var m = _ref6.m,
    onClick = _ref6.onClick,
    onAdd = _ref6.onAdd;
  var isMobile = useIsMobile2(1024);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3 / 4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: isMobile ? 12 : 16,
      overflow: "hidden",
      padding: 4,
      boxSizing: "border-box"
    }
  }, m.image_url ? /*#__PURE__*/React.createElement("img", {
    src: imgCDN(m.image_url, 800),
    alt: m.name,
    loading: "lazy",
    decoding: "async",
    style: {
      maxWidth: "100%",
      maxHeight: "100%",
      width: "auto",
      height: "auto",
      display: "block",
      borderRadius: 16,
      filter: "drop-shadow(0 14px 26px rgba(0,0,0,0.55))"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-500, #6B7280)"
    }
  }, m.code)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isMobile ? 14 : 16,
      fontWeight: 700,
      color: "var(--white)",
      marginBottom: 4,
      lineHeight: 1.3,
      wordBreak: "keep-all"
    }
  }, m.name), m.desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: isMobile ? 12 : 13,
      color: "var(--gray-300)",
      marginBottom: 8,
      lineHeight: 1.45,
      wordBreak: "keep-all",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, m.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      fontSize: isMobile ? 14 : 16,
      color: "var(--white)",
      fontWeight: 800
    }
  }, "\u20A9", m.price.toLocaleString()), /*#__PURE__*/React.createElement(Badge, {
    kind: m.status === "live" ? "live" : m.status === "sold_out" ? "soldout" : "soon"
  }, m.status === "live" ? "판매중" : m.status === "sold_out" ? "재고없음" : "출시예정")));
};

// ─── CATALOG ──────────────────────────────────────────────────────────────────
var CatalogPage = function CatalogPage(_ref7) {
  var onNav = _ref7.onNav,
    onAdd = _ref7.onAdd;
  useProducts2();
  var isMobile = useIsMobile2(1024);
  var _uS5 = uS2(""),
    _uS6 = _slicedToArray(_uS5, 2),
    q = _uS6[0],
    setQ = _uS6[1];
  var _uS7 = uS2("status"),
    _uS8 = _slicedToArray(_uS7, 2),
    sort = _uS8[0],
    setSort = _uS8[1];
  var filtered = uM2(function () {
    var r = MODELS.filter(function (m) {
      return m.status === "live" || m.status === "sold_out";
    });
    if (q.trim()) {
      var k = q.toLowerCase();
      r = r.filter(function (m) {
        return m.name.toLowerCase().includes(k) || m.code.toLowerCase().includes(k) || m.desc.toLowerCase().includes(k);
      });
    }
    if (sort === "price-asc") r = _toConsumableArray(r).sort(function (a, b) {
      return a.price - b.price;
    });else if (sort === "price-desc") r = _toConsumableArray(r).sort(function (a, b) {
      return b.price - a.price;
    });
    return r;
  }, [q, sort]);
  var askCustom = function askCustom() {
    return alert("맞춤 제작은 010-2776-9109 또는 leedoo80@gmail.com로 문의 부탁드립니다.");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "20px 16px 40px" : "32px 80px 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "stretch" : "flex-end",
      gap: isMobile ? 16 : 0,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "PRODUCT CATALOG"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2"
  }, "\uBAA8\uB378\uBCC4 \uC804\uC6A9 \uBE0C\uB77C\uCF13"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gray-400)",
      fontSize: 13,
      marginTop: 6
    }
  }, filtered.length, "\uAC1C \uC81C\uD488")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: 8,
      alignItems: isMobile ? "stretch" : "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: isMobile ? "100%" : "auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--gray-400)"
    }
  }, Ic.search), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "\uBAA8\uB378\uBA85 / \uCF54\uB4DC \uAC80\uC0C9",
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    style: {
      width: isMobile ? "100%" : 280,
      paddingLeft: 36
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("select", {
    className: "ub-select",
    value: sort,
    onChange: function onChange(e) {
      return setSort(e.target.value);
    },
    style: {
      width: isMobile ? "100%" : 150,
      flex: isMobile ? 1 : "none"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "status"
  }, "\uAE30\uBCF8 \uC815\uB82C"), /*#__PURE__*/React.createElement("option", {
    value: "price-asc"
  }, "\uAC00\uACA9 \uB0AE\uC740\uC21C"), /*#__PURE__*/React.createElement("option", {
    value: "price-desc"
  }, "\uAC00\uACA9 \uB192\uC740\uC21C"))))), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 60,
      textAlign: "center",
      border: "1px dashed var(--line-strong)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--gray-200)",
      marginBottom: 6
    }
  }, "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--gray-400)"
    }
  }, "\uB2E4\uB978 \uD0A4\uC6CC\uB4DC\uB85C \uAC80\uC0C9\uD574\uC8FC\uC138\uC694")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
      gap: isMobile ? 10 : 16
    }
  }, filtered.map(function (m) {
    return /*#__PURE__*/React.createElement(ProductCard, {
      key: m.id,
      m: m,
      onClick: function onClick() {
        return onNav({
          name: "detail",
          id: m.id
        });
      },
      onAdd: onAdd
    });
  })));
};
window.UB.HomePage = HomePage;
window.UB.CatalogPage = CatalogPage;
window.UB.ProductCard = ProductCard;