"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// B안 — Model-first Catalog 인터랙티브 프로토타입
// 한 파일에 라우팅/상태/컴포넌트 모두 포함

var _React = React,
  useState = _React.useState,
  useMemo = _React.useMemo,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  Fragment = _React.Fragment;

// ─── DATA ─────────────────────────────────────────────────────────────────────
var MODELS = [{
  id: "fsf2",
  name: "FaceStation F2",
  code: "UB-FSF2",
  cat: "face",
  price: 89000,
  status: "live",
  desc: "안면인식 + 카드 + 지문",
  w: 88,
  h: 168,
  d: 38,
  weight: 142
}, {
  id: "bs3",
  name: "BioStation 3",
  code: "UB-BS3",
  cat: "fp",
  price: 69000,
  status: "live",
  desc: "지문 + RFID 카드",
  w: 76,
  h: 152,
  d: 36,
  weight: 118
}];

// ─── 배송비 정책 ─────────────────────────────────────────────────────────────
// 일반 배송 3,500원 · 제주/도서산간 +3,000원 · 직접 수령 0원.
// 우편번호 앞자리로 자동 판별 (63xxx 제주, 40200~40240 울릉).
var SHIP = {
  FEE: 3500,
  REMOTE_EXTRA: 3000
};
var isRemoteArea = function isRemoteArea(zip) {
  if (!zip) return false;
  var z = String(zip).replace(/\D/g, "");
  if (z.length < 5) return false;
  if (z.startsWith("63")) return true; // 제주
  var n = parseInt(z.substring(0, 5), 10);
  if (n >= 40200 && n <= 40240) return true; // 울릉
  return false;
};
// calcShip(subtotal[, { zip, method }])
// - method === "pickup" → 0
// - 그 외 → FEE + (제주/도서산간이면 REMOTE_EXTRA)
var calcShip = function calcShip(subtotal, opts) {
  if (subtotal === 0) return 0;
  var method = opts && opts.method;
  if (method === "pickup") return 0;
  var zip = opts && opts.zip;
  return SHIP.FEE + (isRemoteArea(zip) ? SHIP.REMOTE_EXTRA : 0);
};

// ─── 회원 등급 정책 ──────────────────────────────────────────────────────────
// VIP: 누적 구매 100만원 이상 또는 4건 이상
// 일반: 1~3건 구매
// 신규: 가입 30일 이내, 구매 1건 미만
var calcGrade = function calcGrade(totalSpent, totalOrders, joinedAt) {
  if (totalSpent >= 1000000 || totalOrders >= 4) return "VIP";
  if (totalOrders >= 1) return "일반";
  return "신규";
};
var GRADE_COLORS = {
  "VIP": {
    bg: "rgba(167,139,250,0.15)",
    fg: "#A78BFA"
  },
  "일반": {
    bg: "rgba(46,124,246,0.15)",
    fg: "#2E7CF6"
  },
  "신규": {
    bg: "rgba(74,222,128,0.15)",
    fg: "#4ADE80"
  }
};

// ─── localStorage 헬퍼 (마이페이지 데이터) ────────────────────────────────────
// 인증 도입 전 임시 — 추후 백엔드 회원 API로 교체
var ME_KEY = "ub:me";
var loadMe = function loadMe() {
  try {
    var raw = localStorage.getItem(ME_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (_unused) {
    return null;
  }
};
var saveMe = function saveMe(me) {
  try {
    localStorage.setItem(ME_KEY, JSON.stringify(me));
  } catch (_unused2) {}
};
var upsertAddress = function upsertAddress(me, addr) {
  var next = me ? _objectSpread(_objectSpread({}, me), {}, {
    addresses: _toConsumableArray(me.addresses || [])
  }) : {
    name: addr.name || "",
    phone: addr.phone || "",
    email: addr.email || "",
    addresses: []
  };
  var idx = next.addresses.findIndex(function (a) {
    return a.zip === addr.zip && a.addr1 === addr.addr1 && a.addr2 === addr.addr2;
  });
  if (idx >= 0) next.addresses[idx] = _objectSpread(_objectSpread({}, next.addresses[idx]), addr);else next.addresses.push(_objectSpread({
    id: "a_".concat(Date.now()),
    label: addr.label || "기본",
    isDefault: next.addresses.length === 0
  }, addr));
  return next;
};

// 회원 데이터는 Supabase auth.users + public.profiles에 저장.
// 관리자 회원 탭은 빈 상태에서 시작 — Supabase Dashboard 또는 추후 API 연동으로 조회.
var MEMBERS = [];
var FAQS = [{
  c: "설치",
  q: "어떻게 고정하나요? 별도 부속이 필요한가요?",
  a: "설치 환경에 따라 두 가지 방법으로 고정합니다.\n\n유리·벽면 부착 시\n→ 브라켓 뒷면에 양면테이프로 부착 후\n→ 실리콘으로 마감합니다.\n\n벽면 직결 시\n→ 동봉된 볼트·너트 제거 후\n→ 직결 피스로 직접 고정합니다."
}, {
  c: "설치",
  q: "케이블은 어떻게 처리하나요?",
  a: "케이블 인입 방향에 맞게\n브라켓 측면 또는 뒷면에\n직접 홀 타공 후 처리합니다.\nPETG 소재라 타공이 쉽습니다."
}, {
  c: "제품·호환성",
  q: "맞춤 제작도 가능한가요?",
  a: "네, 가능합니다.\n지원하지 않는 모델이나\n특수 환경의 경우 문의해 주세요."
}, {
  c: "교환·반품",
  q: "단순 변심 반품이 가능한가요?",
  a: "맞춤 제작 특성상\n제작 착수 후에는 교환·반품이 어렵습니다.\n구매 전 모델 호환 여부를 꼭 확인해 주세요."
}];
var STEPS = [{
  n: "01",
  t: "위치 표시",
  d: "단말기 중심선과 브라켓 상단 위치를 마스킹테이프로 표시합니다.",
  time: "1분",
  tip: "수평계 앱이나 실제 수평계로 정확한 수평을 잡으세요."
}, {
  n: "02",
  t: "브라켓 고정",
  d: "동봉된 M3 볼트·너트로 브라켓을 벽면에 체결합니다.",
  time: "3분",
  tip: "벽 재질에 따라 적절한 앵커(콘크리트)·보강판(석고)을 사용하세요."
}, {
  n: "03",
  t: "단말기 결합",
  d: "단말기 후면을 브라켓 체결구에 맞춰 결합합니다.",
  time: "4분",
  tip: "토크 0.5N·m 이하로 균등하게 조여주세요."
}];

// ─── ICONS ────────────────────────────────────────────────────────────────────
var Ic = {
  search: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  cart: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  })),
  x: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })),
  arrow: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  })),
  check: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  chevron: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  play: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 4l14 8-14 8z"
  })),
  filter: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M7 12h10M10 18h4"
  })),
  external: /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 3h6v6M10 14 21 3M21 14v7H3V3h7"
  })),
  user: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  })),
  plus: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  pencil: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 20h9M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z"
  })),
  trash: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14Z"
  })),
  menu: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  }))
};

// ─── 반응형 훅 ───────────────────────────────────────────────────────────────
// 1024px 미만은 모바일 (햄버거 메뉴, 1열 그리드, 사이드바 stack, 하단 탭바).
// 갤럭시 폴드/대형 폰/태블릿 세로 모드까지 한 번에 모바일 UX로 처리.
var useIsMobile = function useIsMobile() {
  var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1024;
  var _useState = useState(typeof window !== "undefined" ? window.innerWidth < breakpoint : false),
    _useState2 = _slicedToArray(_useState, 2),
    is = _useState2[0],
    setIs = _useState2[1];
  useEffect(function () {
    var onResize = function onResize() {
      return setIs(window.innerWidth < breakpoint);
    };
    window.addEventListener("resize", onResize);
    onResize();
    return function () {
      return window.removeEventListener("resize", onResize);
    };
  }, [breakpoint]);
  return is;
};

// ─── PRIMITIVES ───────────────────────────────────────────────────────────────
var Btn = function Btn(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    children = _ref.children,
    onClick = _ref.onClick,
    style = _ref.style,
    type = _ref.type,
    disabled = _ref.disabled,
    full = _ref.full;
  return /*#__PURE__*/React.createElement("button", {
    type: type || "button",
    onClick: onClick,
    disabled: disabled,
    className: "ub-btn ub-btn-".concat(variant, " ").concat(size === "lg" ? "ub-btn-lg" : ""),
    style: _objectSpread({
      width: full ? "100%" : undefined,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer"
    }, style)
  }, children);
};
var Badge = function Badge(_ref2) {
  var kind = _ref2.kind,
    children = _ref2.children;
  return /*#__PURE__*/React.createElement("span", {
    className: "ub-badge ub-badge-".concat(kind)
  }, children);
};
var Logo = function Logo() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ub-logo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-logo-mark"
  }, "3D"), /*#__PURE__*/React.createElement("span", null, "UNIBOX"));
};

// CSS bracket render (smaller, isometric-ish)
var Bracket = function Bracket(_ref3) {
  var _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? 200 : _ref3$size,
    model = _ref3.model;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      position: "relative",
      perspective: 800
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "12%",
      transform: "rotateX(20deg) rotateY(-25deg)",
      transformStyle: "preserve-3d"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(135deg, #1a3a5c, #14263f)",
      border: "1px solid rgba(46,124,246,0.3)",
      borderRadius: 8,
      boxShadow: "0 30px 60px -20px rgba(46,124,246,0.3), inset 0 0 0 1px rgba(255,255,255,0.05)"
    }
  }, [[15, 15], [85, 15], [15, 85], [85, 85]].map(function (_ref4, i) {
    var _ref5 = _slicedToArray(_ref4, 2),
      x = _ref5[0],
      y = _ref5[1];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "absolute",
        left: "".concat(x, "%"),
        top: "".concat(y, "%"),
        transform: "translate(-50%,-50%)",
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#0a1628",
        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.6)"
      }
    });
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "30%",
      transform: "translateX(-50%)",
      width: 14,
      height: "40%",
      background: "rgba(0,0,0,0.4)",
      borderRadius: 4,
      boxShadow: "inset 0 0 4px rgba(0,0,0,0.6)"
    }
  })), model && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "20%",
      top: "15%",
      width: "60%",
      height: "70%",
      transform: "translateZ(20px)",
      background: "linear-gradient(160deg, #1a2940, #0d1828)",
      borderRadius: 8,
      border: "1px solid rgba(46,124,246,0.3)"
    }
  })));
};

// ─── TOP NAV ──────────────────────────────────────────────────────────────────
var NAV_ITEMS = [{
  id: "catalog",
  label: "제품"
}, {
  id: "guide",
  label: "시공사례"
}, {
  id: "faq",
  label: "고객지원"
}, {
  id: "about",
  label: "회사소개"
}];
var TopNav = function TopNav(_ref6) {
  var route = _ref6.route,
    onNav = _ref6.onNav,
    cartCount = _ref6.cartCount,
    onOpenCart = _ref6.onOpenCart;
  var isMobile = useIsMobile(1024);
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    menuOpen = _useState4[0],
    setMenuOpen = _useState4[1];
  useEffect(function () {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);
  useEffect(function () {
    setMenuOpen(false);
  }, [route]);
  var isActive = function isActive(id) {
    return route.name === id || route.name === "detail" && id === "catalog";
  };

  // 로그인 상태 — useAuth가 있으면 사용, 없으면 비로그인 가정
  var auth = window.UB && window.UB.useAuth ? window.UB.useAuth() : {
    user: null,
    ready: true
  };
  var user = auth.user;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "ub-topbar",
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      padding: isMobile ? "12px 16px" : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: isMobile ? 12 : 40
    }
  }, isMobile && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setMenuOpen(true);
    },
    "aria-label": "\uBA54\uB274 \uC5F4\uAE30",
    style: {
      background: "transparent",
      border: "1px solid var(--line-strong)",
      borderRadius: 8,
      padding: 6,
      color: "var(--gray-100)",
      cursor: "pointer",
      display: "flex"
    }
  }, Ic.menu), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return onNav({
        name: "home"
      });
    },
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Logo, null)), !isMobile && /*#__PURE__*/React.createElement("nav", {
    className: "ub-nav"
  }, NAV_ITEMS.map(function (n) {
    return /*#__PURE__*/React.createElement("span", {
      key: n.id,
      className: isActive(n.id) ? "active" : "",
      onClick: function onClick() {
        return onNav({
          name: n.id
        });
      }
    }, n.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: isMobile ? 6 : 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onNav({
        name: user ? "me" : "login"
      });
    },
    "aria-label": user ? "마이페이지" : "로그인",
    style: {
      border: "1px solid var(--line-strong)",
      background: "transparent",
      color: route.name === "me" || route.name === "login" ? "var(--cyan-400)" : "var(--gray-100)",
      padding: isMobile ? 8 : "8px 10px",
      borderRadius: 8,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12
    }
  }, Ic.user, !isMobile && /*#__PURE__*/React.createElement("span", null, user ? "마이" : "로그인")), user && !isMobile && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return window.UB.signOut().then(function () {
        return location.reload();
      });
    },
    style: {
      border: "1px solid var(--line-strong)",
      background: "transparent",
      color: "var(--gray-300)",
      padding: "8px 10px",
      borderRadius: 8,
      cursor: "pointer",
      fontSize: 12
    }
  }, "\uB85C\uADF8\uC544\uC6C3"), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCart,
    "aria-label": "\uC7A5\uBC14\uAD6C\uB2C8",
    style: {
      position: "relative",
      border: "1px solid var(--line-strong)",
      background: "transparent",
      color: "var(--gray-100)",
      padding: isMobile ? 8 : "8px 12px",
      borderRadius: 8,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12
    }
  }, Ic.cart, !isMobile && /*#__PURE__*/React.createElement("span", null, "\uC7A5\uBC14\uAD6C\uB2C8"), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: isMobile ? "absolute" : "static",
      top: isMobile ? -4 : undefined,
      right: isMobile ? -4 : undefined,
      minWidth: 18,
      height: 18,
      padding: "0 5px",
      borderRadius: 9,
      background: "var(--cyan-400)",
      color: "var(--navy-950)",
      fontSize: 10,
      fontWeight: 700,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)"
    }
  }, cartCount)))), isMobile && menuOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setMenuOpen(false);
    },
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(4px)",
      zIndex: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "\uBA54\uB274",
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      width: "min(80vw, 320px)",
      background: "var(--navy-950)",
      borderRight: "1px solid var(--line)",
      zIndex: 61,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 16px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setMenuOpen(false);
    },
    "aria-label": "\uBA54\uB274 \uB2EB\uAE30",
    style: {
      background: "transparent",
      border: 0,
      color: "var(--gray-300)",
      cursor: "pointer",
      padding: 4
    }
  }, Ic.x)), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: 12,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, NAV_ITEMS.map(function (n) {
    var active = isActive(n.id);
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      type: "button",
      onClick: function onClick() {
        return onNav({
          name: n.id
        });
      },
      style: {
        textAlign: "left",
        padding: "12px 14px",
        borderRadius: 8,
        background: active ? "rgba(46,124,246,0.10)" : "transparent",
        color: active ? "var(--cyan-400)" : "var(--gray-100)",
        border: active ? "1px solid rgba(46,124,246,0.25)" : "1px solid transparent",
        fontSize: 15,
        fontWeight: active ? 700 : 500,
        cursor: "pointer"
      }
    }, n.label);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--line)",
      margin: "10px 4px"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return onNav({
        name: user ? "me" : "login"
      });
    },
    style: {
      textAlign: "left",
      padding: "12px 14px",
      borderRadius: 8,
      background: "transparent",
      color: "var(--gray-100)",
      border: 0,
      fontSize: 15,
      fontWeight: 500,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cyan-400)"
    }
  }, Ic.user), user ? "마이페이지" : "로그인"), user && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return window.UB.signOut().then(function () {
        return location.reload();
      });
    },
    style: {
      textAlign: "left",
      padding: "12px 14px",
      borderRadius: 8,
      background: "transparent",
      color: "var(--gray-300)",
      border: 0,
      fontSize: 15,
      fontWeight: 500,
      cursor: "pointer"
    }
  }, "\uB85C\uADF8\uC544\uC6C3")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginBottom: 4
    }
  }, "\uACE0\uAC1D\uC13C\uD130"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 16,
      color: "var(--white)",
      fontWeight: 600
    }
  }, "010-2776-9109"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginTop: 4
    }
  }, "\uD3C9\uC77C 09\u201318\uC2DC")))));
};

// ─── BOTTOM TABS (모바일 전용 하단 네비게이션) ────────────────────────────────
var BottomTabs = function BottomTabs(_ref7) {
  var route = _ref7.route,
    onNav = _ref7.onNav,
    cartCount = _ref7.cartCount,
    onOpenCart = _ref7.onOpenCart;
  var isMobile = useIsMobile(1024);
  if (!isMobile) return null;
  var auth = window.UB && window.UB.useAuth ? window.UB.useAuth() : {
    user: null
  };
  var user = auth.user;
  var isActiveCatalog = route.name === "catalog" || route.name === "detail";
  var isActiveHome = route.name === "home";
  var isActiveMe = route.name === "me" || route.name === "login";
  return /*#__PURE__*/React.createElement("nav", {
    className: "ub-bottom-tabs",
    "aria-label": "\uC8FC\uC694 \uBA54\uB274"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ub-bottom-tab" + (isActiveHome ? " active" : ""),
    onClick: function onClick() {
      return onNav({
        name: "home"
      });
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12 12 4l9 8M5 10v10h4v-6h6v6h4V10"
  })), /*#__PURE__*/React.createElement("span", null, "\uD648")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ub-bottom-tab" + (isActiveCatalog ? " active" : ""),
    onClick: function onClick() {
      return onNav({
        name: "catalog"
      });
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  })), /*#__PURE__*/React.createElement("span", null, "\uCE74\uD0C8\uB85C\uADF8")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ub-bottom-tab",
    onClick: onOpenCart
  }, Ic.cart, /*#__PURE__*/React.createElement("span", null, "\uC7A5\uBC14\uAD6C\uB2C8"), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, cartCount)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ub-bottom-tab" + (isActiveMe ? " active" : ""),
    onClick: function onClick() {
      return onNav({
        name: user ? "me" : "login"
      });
    }
  }, Ic.user, /*#__PURE__*/React.createElement("span", null, user ? "마이" : "로그인")));
};

// ─── 다음 우편번호(Daum Postcode) 검색 — 지연 로딩 + 콜백 ─────────────────────
// 사용: openPostcode(({zip, addr1}) => { setZip(zip); setAddr1(addr1); })
var POSTCODE_SRC = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
var openPostcode = function openPostcode(callback) {
  var fire = function fire() {
    try {
      new window.daum.Postcode({
        oncomplete: function oncomplete(data) {
          var zip = data.zonecode || "";
          var addr1 = data.roadAddress || data.jibunAddress || data.address || "";
          if (data.buildingName) addr1 += " (".concat(data.buildingName, ")");
          callback && callback({
            zip: zip,
            addr1: addr1
          });
        }
      }).open();
    } catch (e) {
      alert("주소 검색을 여는 중 오류가 발생했습니다.");
    }
  };
  if (window.daum && window.daum.Postcode) {
    fire();
    return;
  }
  var existing = document.querySelector("script[src=\"".concat(POSTCODE_SRC, "\"]"));
  if (existing) {
    var t = setInterval(function () {
      if (window.daum && window.daum.Postcode) {
        clearInterval(t);
        fire();
      }
    }, 80);
    setTimeout(function () {
      return clearInterval(t);
    }, 8000);
    return;
  }
  var s = document.createElement("script");
  s.src = POSTCODE_SRC;
  s.async = true;
  s.onload = fire;
  s.onerror = function () {
    return alert("주소 검색 스크립트를 불러오지 못했습니다. 인터넷 연결을 확인해주세요.");
  };
  document.head.appendChild(s);
};

// ─── 제품 데이터 — Supabase products 테이블 fetch (fallback: 위 MODELS 하드코딩) ─
// MODELS 배열 레퍼런스는 유지한 채 .length=0 → push(...rows) 로 in-place 교체.
// 모든 page jsx 가 `const { MODELS } = window.UB` 로 가져갔어도 같은 레퍼런스라 자동 반영.
// 컴포넌트 재렌더 트리거는 useProducts() hook 으로 구독.
var _modelListeners = new Set();
var _notifyModels = function _notifyModels() {
  return _modelListeners.forEach(function (fn) {
    try {
      fn();
    } catch (e) {}
  });
};

// 첫 페인트 즉시 사진 표시를 위해 직전 fetch 결과를 localStorage에 캐싱.
// 재방문 시 캐시로 동기 hydrate → 사진 바로 보임 → 백그라운드 fetch로 최신화.
var PRODUCTS_CACHE_KEY = "ub:products:v1";
try {
  var raw = localStorage.getItem(PRODUCTS_CACHE_KEY);
  if (raw) {
    var cached = JSON.parse(raw);
    if (Array.isArray(cached) && cached.length > 0) {
      MODELS.length = 0;
      MODELS.push.apply(MODELS, _toConsumableArray(cached));
    }
  }
} catch (e) {}

// ⚠ Supabase 이미지 변환(render/image)은 Pro 플랜 전용. 현재 FREE 플랜이라 변환 엔드포인트는
// 403 "FeatureNotEnabled" 를 반환 → 제품 이미지가 전부 안 보임. 그래서 원본(object/public)을 그대로 전송한다.
// Pro 전환 시 아래 주석 블록을 되살리면 실시간 리사이즈(전송량↓)가 활성화된다.
// 업로드 전 브라우저에서 이미지를 웹 표시 크기로 축소한다.
// FREE 플랜은 서버 리사이즈(render/image)가 없으므로, 클라이언트에서 미리 줄여 올려 전송량을 낮춘다.
// 긴 변 1600px면 카드(~500px)·상세(~600px)는 물론 레티나 2배까지 커버 → 표시 화질 손실 사실상 없음.
// EXIF 회전은 createImageBitmap({imageOrientation:"from-image"})로 자동 보정해 굽는다.
// SVG/GIF 등 캔버스 처리 부적합 형식은 원본 그대로 반환.
function resizeImageForUpload(_x, _x2, _x3) {
  return _resizeImageForUpload.apply(this, arguments);
}
function _resizeImageForUpload() {
  _resizeImageForUpload = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(file, maxDim, quality) {
    var bitmap, W, H, scale, w, h, canvas, blob, base, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          maxDim = maxDim || 1600;
          quality = quality || 0.86;
          if (!(!file || !file.type || !/^image\/(jpe?g|png|webp)$/i.test(file.type))) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, file);
        case 1:
          _context3.p = 1;
          _context3.n = 2;
          return createImageBitmap(file, {
            imageOrientation: "from-image"
          });
        case 2:
          bitmap = _context3.v;
          W = bitmap.width, H = bitmap.height;
          if (!(Math.max(W, H) <= maxDim)) {
            _context3.n = 3;
            break;
          }
          if (bitmap.close) bitmap.close();
          return _context3.a(2, file);
        case 3:
          // 이미 작으면 그대로
          scale = maxDim / Math.max(W, H);
          w = Math.round(W * scale), h = Math.round(H * scale);
          canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          canvas.getContext("2d").drawImage(bitmap, 0, 0, w, h);
          if (bitmap.close) bitmap.close();
          _context3.n = 4;
          return new Promise(function (r) {
            return canvas.toBlob(r, "image/jpeg", quality);
          });
        case 4:
          blob = _context3.v;
          if (!(!blob || blob.size >= file.size)) {
            _context3.n = 5;
            break;
          }
          return _context3.a(2, file);
        case 5:
          // 오히려 커지면 원본 유지
          base = (file.name || "image").replace(/\.[^.]+$/, "");
          return _context3.a(2, new File([blob], base + ".jpg", {
            type: "image/jpeg"
          }));
        case 6:
          _context3.p = 6;
          _t3 = _context3.v;
          console.warn("[resize] 원본 업로드로 폴백:", _t3);
          return _context3.a(2, file);
      }
    }, _callee3, null, [[1, 6]]);
  }));
  return _resizeImageForUpload.apply(this, arguments);
}
function imgCDN(url, width) {
  if (!url || typeof url !== "string") return url;
  return url; // FREE 플랜: 원본 URL 그대로 (변환 미지원)
  /* Pro 전환 시:
  const marker = "/storage/v1/object/public/";
  if (!url.includes(marker)) return url;
  const base = url.replace(marker, "/storage/v1/render/image/public/");
  const sep = base.includes("?") ? "&" : "?";
  return base + sep + "width=" + (width || 800) + "&resize=contain&quality=72";
  */
}
var loadProducts = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var sb, _yield$sb$from$select, data, error, next, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          sb = window.SUPABASE;
          if (sb) {
            _context.n = 1;
            break;
          }
          return _context.a(2, false);
        case 1:
          _context.p = 1;
          _context.n = 2;
          return sb.from("products").select("*")["in"]("status", ["live", "sold_out"]).order("sort_order");
        case 2:
          _yield$sb$from$select = _context.v;
          data = _yield$sb$from$select.data;
          error = _yield$sb$from$select.error;
          if (!error) {
            _context.n = 3;
            break;
          }
          throw error;
        case 3:
          if (!(Array.isArray(data) && data.length > 0)) {
            _context.n = 4;
            break;
          }
          next = data.map(function (r) {
            return {
              id: r.id,
              code: r.code,
              name: r.name,
              cat: r.cat,
              price: r.price,
              status: r.status,
              desc: r.description || "",
              long_description: r.long_description || "",
              material: r.material || "",
              compat_tags: r.compat_tags || "",
              w: r.w,
              h: r.h,
              d: r.d,
              weight: r.weight,
              image_url: r.image_url || null
            };
          });
          MODELS.length = 0;
          MODELS.push.apply(MODELS, _toConsumableArray(next));
          try {
            localStorage.setItem(PRODUCTS_CACHE_KEY, JSON.stringify(next));
          } catch (e) {}
          _notifyModels();
          return _context.a(2, true);
        case 4:
          return _context.a(2, false);
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.warn("[products] load failed, using fallback:", _t);
          return _context.a(2, false);
      }
    }, _callee, null, [[1, 5]]);
  }));
  return function loadProducts() {
    return _ref8.apply(this, arguments);
  };
}();
var useProducts = function useProducts() {
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    setTick = _useState6[1];
  useEffect(function () {
    var fn = function fn() {
      return setTick(function (n) {
        return n + 1;
      });
    };
    _modelListeners.add(fn);
    return function () {
      return _modelListeners["delete"](fn);
    };
  }, []);
  return MODELS;
};

// 첫 진입 시 자동 fetch — Supabase 클라이언트는 HTML에서 이미 초기화됨
loadProducts();

// ─── ORBIT — Hero 시각 (3D 회전 디스크 ring, wannathis.one 스타일) ───────────
// JS-driven: requestAnimationFrame 으로 매 프레임 angle 갱신. CSS 애니메이션 의존 X.
var Orbit = function Orbit(_ref9) {
  var _ref9$size = _ref9.size,
    size = _ref9$size === void 0 ? 320 : _ref9$size,
    _ref9$count = _ref9.count,
    count = _ref9$count === void 0 ? 8 : _ref9$count,
    _ref9$speed = _ref9.speed,
    speed = _ref9$speed === void 0 ? 22 : _ref9$speed;
  // speed = 도/초. 22 → 한 바퀴 약 16초.
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    angle = _useState8[0],
    setAngle = _useState8[1];
  useEffect(function () {
    var raf,
      last = performance.now();
    var _tick = function tick(now) {
      var dt = (now - last) / 1000;
      last = now;
      setAngle(function (a) {
        return (a + speed * dt) % 360;
      });
      raf = requestAnimationFrame(_tick);
    };
    raf = requestAnimationFrame(_tick);
    return function () {
      return cancelAnimationFrame(raf);
    };
  }, [speed]);
  var radius = size * 0.42;
  var d = size * 0.22;
  return /*#__PURE__*/React.createElement("div", {
    className: "ub-orbit",
    style: {
      width: size,
      height: size
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-orbit-rotor",
    style: {
      transform: "rotateX(18deg) rotateY(".concat(angle, "deg)")
    }
  }, Array.from({
    length: count
  }, function (_, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "ub-orbit-disc",
      style: {
        width: d,
        height: d,
        marginLeft: -d / 2,
        marginTop: -d / 2,
        transform: "rotateY(".concat(i * 360 / count, "deg) translateZ(").concat(radius, "px)")
      }
    });
  })));
};

// ─── 토스페이먼츠 v2 결제 스캐폴드 ─────────────────────────────────────────
// 현재: 토스 공식 "도큐먼트 테스트 키" — 결제창은 뜨지만 실제 결제 불가.
// 라이브 전환 TODO (CLAUDE.md "토스페이먼츠 통합" 절 참조):
//   1. https://www.tosspayments.com 가맹점 가입
//   2. TOSS_CLIENT_KEY → 라이브 키 (live_ck_...)
//   3. successUrl / failUrl 페이지 백엔드 처리 (paymentKey 받아 /v1/payments/confirm 호출 → 결제 승인)
//   4. orders 테이블 신설 + 결제 정보·상태 저장
// 에스디컨버전스 가맹점 라이브 클라이언트 키 (MID: HJ_3dunibv8cd, 카드사 심사 통과)
var TOSS_CLIENT_KEY = "live_ck_Z1aOwX7K8meo91jKEZ008yQxzvNP";
var payWithToss = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_ref0) {
    var amount, orderName, _ref0$customerEmail, customerEmail, _ref0$customerName, customerName, tossPayments, sbUser, rawKey, customerKey, payment, orderId, params, code, msg, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          amount = _ref0.amount, orderName = _ref0.orderName, _ref0$customerEmail = _ref0.customerEmail, customerEmail = _ref0$customerEmail === void 0 ? "" : _ref0$customerEmail, _ref0$customerName = _ref0.customerName, customerName = _ref0$customerName === void 0 ? "" : _ref0$customerName;
          if (window.TossPayments) {
            _context2.n = 1;
            break;
          }
          alert("토스페이먼츠 SDK 로드 실패 — 잠시 후 다시 시도해 주세요.");
          return _context2.a(2, false);
        case 1:
          _context2.p = 1;
          tossPayments = window.TossPayments(TOSS_CLIENT_KEY);
          sbUser = window.__ub_auth && window.__ub_auth.user; // customerKey — 영문/숫자/일부 기호만 허용 (2~50자 권장). UUID 또는 anonymous_<랜덤>.
          rawKey = sbUser && sbUser.id || "anonymous-" + Math.random().toString(36).slice(2, 14);
          customerKey = String(rawKey).replace(/[^a-zA-Z0-9\-_=.@]/g, "").slice(0, 50);
          payment = tossPayments.payment({
            customerKey: customerKey
          });
          orderId = ("ub" + Date.now() + Math.random().toString(36).slice(2, 8)).slice(0, 64); // requestPayment 파라미터 — undefined 는 절대 전달하지 않음 (토스 SDK 가 unknown error 발생)
          params = {
            method: "CARD",
            amount: {
              currency: "KRW",
              value: Number(amount)
            },
            orderId: orderId,
            orderName: String(orderName || "주문").slice(0, 100),
            successUrl: "".concat(location.origin, "/?toss=success"),
            failUrl: "".concat(location.origin, "/?toss=fail")
          };
          if (customerEmail) params.customerEmail = String(customerEmail);
          if (customerName) params.customerName = String(customerName);
          console.log("[toss] requestPayment params:", params, "customerKey:", customerKey);
          _context2.n = 2;
          return payment.requestPayment(params);
        case 2:
          return _context2.a(2, true);
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          if (!(_t2 && (_t2.code === "USER_CANCEL" || _t2.code === "PAY_PROCESS_CANCELED"))) {
            _context2.n = 4;
            break;
          }
          return _context2.a(2, false);
        case 4:
          console.error("[toss] payment error:", _t2);
          code = _t2 && _t2.code ? _t2.code : "UNKNOWN";
          msg = _t2 && _t2.message ? _t2.message : String(_t2);
          alert("\uACB0\uC81C \uC624\uB958 [".concat(code, "]\n").concat(msg, "\n\n(\uAC1C\uBC1C\uC790 \uB3C4\uAD6C \uCF58\uC194 F12 \u2192 Console \uD0ED\uC5D0\uC11C \uC0C1\uC138 \uD655\uC778)"));
          return _context2.a(2, false);
      }
    }, _callee2, null, [[1, 3]]);
  }));
  return function payWithToss(_x4) {
    return _ref1.apply(this, arguments);
  };
}();
window.UB = {
  useState: useState,
  useMemo: useMemo,
  useEffect: useEffect,
  useRef: useRef,
  Fragment: Fragment,
  MODELS: MODELS,
  FAQS: FAQS,
  STEPS: STEPS,
  SHIP: SHIP,
  calcShip: calcShip,
  MEMBERS: MEMBERS,
  calcGrade: calcGrade,
  GRADE_COLORS: GRADE_COLORS,
  loadMe: loadMe,
  saveMe: saveMe,
  upsertAddress: upsertAddress,
  useIsMobile: useIsMobile,
  openPostcode: openPostcode,
  loadProducts: loadProducts,
  useProducts: useProducts,
  imgCDN: imgCDN,
  resizeImageForUpload: resizeImageForUpload,
  isRemoteArea: isRemoteArea,
  payWithToss: payWithToss,
  Ic: Ic,
  Btn: Btn,
  Badge: Badge,
  Logo: Logo,
  Bracket: Bracket,
  Orbit: Orbit,
  TopNav: TopNav,
  BottomTabs: BottomTabs
};