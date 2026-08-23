"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// B안 — 페이지 4: 관리자 페이지 (UI 윤곽 only)
// 인증/결제/도메인/배송 API 연동은 풀스택 전환 시점에 추가.
// 현재는 인메모리 더미 데이터로 화면·인터랙션만 구현.
var _React = React,
  uS5 = _React.useState,
  uM5 = _React.useMemo,
  uE5 = _React.useEffect;
var _window$UB = window.UB,
  MODELS5 = _window$UB.MODELS,
  Ic5 = _window$UB.Ic,
  Btn5 = _window$UB.Btn,
  calcShip5 = _window$UB.calcShip,
  MEMBERS5 = _window$UB.MEMBERS,
  calcGrade5 = _window$UB.calcGrade,
  GRADE_COLORS5 = _window$UB.GRADE_COLORS,
  useIsMobile5 = _window$UB.useIsMobile;

// ─── 주문 상태 (카드 선결제 흐름) ────────────────────────────────────────────
// 결제완료 → 제작중 → 배송중 → 완료. 취소는 별도.
var STATUS_FLOW = ["결제완료", "제작중", "배송중", "완료"];
var STATUS_COLORS = {
  "결제완료": {
    bg: "rgba(46,124,246,0.15)",
    fg: "#2E7CF6",
    dot: "#2E7CF6"
  },
  "제작중": {
    bg: "rgba(251,191,36,0.15)",
    fg: "#FBBF24",
    dot: "#FBBF24"
  },
  "배송중": {
    bg: "rgba(167,139,250,0.15)",
    fg: "#A78BFA",
    dot: "#A78BFA"
  },
  "완료": {
    bg: "rgba(74,222,128,0.15)",
    fg: "#4ADE80",
    dot: "#4ADE80"
  },
  "취소": {
    bg: "rgba(255,255,255,0.05)",
    fg: "#9CA3AF",
    dot: "#9CA3AF"
  }
};

// 실제 주문은 결제 시 Supabase orders 테이블에 저장 (Phase 다음 단계).
// 현재는 빈 상태에서 시작 — 실 주문 들어오면 채워짐.
var SEED_ORDERS = [];
var orderSubtotal = function orderSubtotal(o) {
  return o.items.reduce(function (s, it) {
    // 신규 주문: items[i].price 가 저장돼 있으면 그걸 우선 사용 (제품 삭제·가격 변동 시에도 정확)
    if (it && it.price != null) return s + (Number(it.price) || 0) * (Number(it.qty) || 0);
    var m = MODELS5.find(function (x) {
      return x.id === it.id;
    });
    return s + (m ? m.price * it.qty : 0);
  }, 0);
};
var orderShip = function orderShip(o) {
  // Supabase 주문 row 는 total(=amount) - subtotal 로 배송비 역산 (직접수령=0, 제주=+3000 반영됨)
  if (o.total != null) return Math.max(0, Number(o.total) - orderSubtotal(o));
  return calcShip5(orderSubtotal(o));
};
var orderTotal = function orderTotal(o) {
  return o.total != null ? Number(o.total) : orderSubtotal(o) + orderShip(o);
};
var formatItems = function formatItems(items) {
  return items.map(function (it) {
    var m = MODELS5.find(function (x) {
      return x.id === it.id;
    });
    return m ? "".concat(m.name, " \xD7").concat(it.qty) : "? \xD7".concat(it.qty);
  }).join(", ");
};

// CSV 다운로드 — Excel 한글 호환을 위해 UTF-8 BOM, 줄바꿈 \r\n
var downloadCSV = function downloadCSV(filename, headers, rows) {
  var esc = function esc(v) {
    var s = v == null ? "" : String(v);
    return /[",\n\r]/.test(s) ? "\"".concat(s.replace(/"/g, '""'), "\"") : s;
  };
  var lines = [headers.map(esc).join(",")].concat(_toConsumableArray(rows.map(function (r) {
    return r.map(esc).join(",");
  })));
  var blob = new Blob(["﻿" + lines.join("\r\n")], {
    type: "text/csv;charset=utf-8"
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(function () {
    return URL.revokeObjectURL(url);
  }, 1000);
};

// ─── 작은 컴포넌트 ────────────────────────────────────────────────────────────
var KpiCard = function KpiCard(_ref) {
  var label = _ref.label,
    value = _ref.value,
    sub = _ref.sub,
    accent = _ref.accent;
  return /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 20,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse 200px 80px at 90% 0%, ".concat(accent || "rgba(46,124,246,0.10)", ", transparent 70%)")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: "var(--white)"
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginTop: 6
    }
  }, sub)));
};
var StatusPill = function StatusPill(_ref2) {
  var status = _ref2.status;
  var c = STATUS_COLORS[status] || STATUS_COLORS["접수"];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "3px 10px",
      borderRadius: 100,
      fontSize: 11,
      fontWeight: 600,
      color: c.fg,
      background: c.bg
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: c.dot
    }
  }), status);
};

// ─── ADMIN PAGE ───────────────────────────────────────────────────────────────
// ─── 관리자 진입 게이트 ─────────────────────────────────────────────────────
// 인증은 서버(/api/admin/rpc)에서 검증. 비밀번호·service_role 키는 서버 환경변수에만 존재.
// 클라이언트 소스에는 어떤 비밀정보도 두지 않는다 (개인정보 보호).
var ADMIN_GATE_KEY = "ub:admin:authed";
var ADMIN_SECRET_KEY = "ub:admin:secret"; // 로그인 시 입력한 비밀번호를 세션 메모리에만 임시 보관

// 관리자 데이터는 반드시 서버 프록시를 통해서만 접근. 공개키로는 조회 불가.
var getAdminSecret = function getAdminSecret() {
  try {
    return sessionStorage.getItem(ADMIN_SECRET_KEY) || "";
  } catch (e) {
    return "";
  }
};
var adminApi = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(fn, args) {
    var resp, body, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.n = 1;
          return fetch("/api/admin/rpc", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              secret: getAdminSecret(),
              fn: fn,
              args: args || {}
            })
          });
        case 1:
          resp = _context.v;
          body = {};
          _context.p = 2;
          _context.n = 3;
          return resp.json();
        case 3:
          body = _context.v;
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
        case 5:
          if (resp.status === 401) {
            // 비밀번호 불일치/세션 만료 → 게이트 초기화 후 재로그인 유도
            try {
              sessionStorage.removeItem(ADMIN_GATE_KEY);
              sessionStorage.removeItem(ADMIN_SECRET_KEY);
            } catch (e) {}
          }
          if (resp.ok) {
            _context.n = 6;
            break;
          }
          throw new Error(body.error || "HTTP ".concat(resp.status));
        case 6:
          return _context.a(2, body.data);
      }
    }, _callee, null, [[2, 4]]);
  }));
  return function adminApi(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();

// ─── 개인정보 마스킹 (목록 화면 노출용) ──────────────────────────────────────
var maskName = function maskName(s) {
  var t = String(s || "").trim();
  if (!t) return "-";
  if (t.length === 1) return t;
  if (t.length === 2) return t[0] + "*";
  return t[0] + "*".repeat(t.length - 2) + t[t.length - 1];
};
var maskPhone = function maskPhone(s) {
  var d = String(s || "").replace(/\D/g, "");
  if (d.length < 7) return d ? "***" : "-";
  return d.slice(0, 3) + "-****-" + d.slice(-4);
};
var maskEmail = function maskEmail(s) {
  var t = String(s || "").trim();
  if (!t || t.indexOf("@") < 0) return t ? "***" : "";
  var _t$split = t.split("@"),
    _t$split2 = _slicedToArray(_t$split, 2),
    u = _t$split2[0],
    dom = _t$split2[1];
  var uu = u.length <= 2 ? u[0] + "*" : u.slice(0, 2) + "*".repeat(Math.max(1, u.length - 2));
  return uu + "@" + dom;
};
var AdminGate = function AdminGate(_ref4) {
  var onPass = _ref4.onPass;
  var _uS = uS5(""),
    _uS2 = _slicedToArray(_uS, 2),
    id = _uS2[0],
    setId = _uS2[1];
  var _uS3 = uS5(""),
    _uS4 = _slicedToArray(_uS3, 2),
    pw = _uS4[0],
    setPw = _uS4[1];
  var _uS5 = uS5(false),
    _uS6 = _slicedToArray(_uS5, 2),
    err = _uS6[0],
    setErr = _uS6[1];
  var _uS7 = uS5(false),
    _uS8 = _slicedToArray(_uS7, 2),
    busy = _uS8[0],
    setBusy = _uS8[1];
  var submit = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!busy) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            setBusy(true);
            setErr(false);
            _context2.p = 2;
            try {
              sessionStorage.setItem(ADMIN_SECRET_KEY, pw);
            } catch (e) {}
            _context2.n = 3;
            return adminApi("__verify");
          case 3:
            // 서버가 비밀번호 검증
            try {
              sessionStorage.setItem(ADMIN_GATE_KEY, "1");
            } catch (e) {}
            onPass();
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            try {
              sessionStorage.removeItem(ADMIN_SECRET_KEY);
            } catch (e2) {}
            setErr(true);
            setTimeout(function () {
              return setErr(false);
            }, 2500);
          case 5:
            _context2.p = 5;
            setBusy(false);
            return _context2.f(5);
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4, 5, 6]]);
    }));
    return function submit() {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      padding: "40px 20px",
      background: "var(--navy-950)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(380px, 100%)",
      background: "var(--navy-800)",
      border: "1px solid var(--line)",
      borderRadius: 16,
      padding: "32px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "ADMIN"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2",
    style: {
      fontSize: 22,
      marginBottom: 6
    }
  }, "\uAD00\uB9AC\uC790 \uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gray-400)",
      fontSize: 12,
      marginBottom: 22
    }
  }, "\uAD00\uB9AC\uC790 ID / \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694."), /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "ID"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    autoComplete: "username",
    value: id,
    onChange: function onChange(e) {
      return setId(e.target.value);
    },
    placeholder: "admin"
  }), /*#__PURE__*/React.createElement("label", {
    className: "ub-label",
    style: {
      marginTop: 12
    }
  }, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    type: "password",
    autoComplete: "current-password",
    value: pw,
    onChange: function onChange(e) {
      return setPw(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") submit();
    },
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), err && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: "8px 10px",
      borderRadius: 6,
      fontSize: 12,
      color: "var(--warning, #FBBF24)",
      background: "rgba(251,191,36,0.08)",
      border: "1px solid rgba(251,191,36,0.3)"
    }
  }, "ID \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: submit,
    disabled: busy,
    style: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: 10,
      marginTop: 18,
      background: "var(--cyan-400)",
      color: "var(--navy-950)",
      border: 0,
      fontSize: 14,
      fontWeight: 700,
      cursor: busy ? "wait" : "pointer",
      opacity: busy ? 0.7 : 1
    }
  }, busy ? "확인 중…" : "로그인")));
};
var AdminPageInner = function AdminPageInner() {
  var _uS9 = uS5(SEED_ORDERS),
    _uS0 = _slicedToArray(_uS9, 2),
    orders = _uS0[0],
    setOrders = _uS0[1];
  var _uS1 = uS5("orders"),
    _uS10 = _slicedToArray(_uS1, 2),
    tab = _uS10[0],
    setTab = _uS10[1]; // orders | members | stats
  var _uS11 = uS5(""),
    _uS12 = _slicedToArray(_uS11, 2),
    q = _uS12[0],
    setQ = _uS12[1];
  var _uS13 = uS5("all"),
    _uS14 = _slicedToArray(_uS13, 2),
    statusFilter = _uS14[0],
    setStatusFilter = _uS14[1];
  var _uS15 = uS5(null),
    _uS16 = _slicedToArray(_uS15, 2),
    selected = _uS16[0],
    setSelected = _uS16[1]; // 주문번호 (디테일 드로어)

  // 주문 — Supabase RPC 로 fetch
  var _uS17 = uS5(true),
    _uS18 = _slicedToArray(_uS17, 2),
    ordLoading = _uS18[0],
    setOrdLoading = _uS18[1];
  var _uS19 = uS5(null),
    _uS20 = _slicedToArray(_uS19, 2),
    ordError = _uS20[0],
    setOrdError = _uS20[1];
  var reloadOrders = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var sb, data, rows, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            sb = window.SUPABASE;
            if (sb) {
              _context3.n = 1;
              break;
            }
            setOrdLoading(false);
            setOrdError("Supabase 클라이언트 미초기화");
            return _context3.a(2);
          case 1:
            setOrdLoading(true);
            setOrdError(null);
            _context3.p = 2;
            _context3.n = 3;
            return adminApi("admin_list_orders", {
              p_limit: 500
            });
          case 3:
            data = _context3.v;
            rows = (data || []).map(function (r) {
              return {
                no: r.order_id,
                date: r.created_at ? String(r.created_at).slice(0, 19).replace("T", " ") : "",
                customer: r.customer_name || "-",
                phone: r.customer_phone || "-",
                email: r.customer_email || "",
                addr: "(".concat(r.addr_zip || '', ") ").concat(r.addr1 || '', " ").concat(r.addr2 || '').trim(),
                memo: r.memo || "",
                items: Array.isArray(r.items) ? r.items : [],
                status: r.status === "paid" ? "결제완료" : r.status === "refunded" ? "취소" : r.status === "canceled" ? "취소" : r.status === "failed" ? "취소" : r.status || "결제완료",
                total: Number(r.amount) || 0,
                method: r.method || "-",
                paymentKey: r.payment_key || "",
                waybill: ""
              };
            });
            setOrders(rows);
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t3 = _context3.v;
            console.warn("[admin] orders fetch 실패:", _t3);
            setOrdError((_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || String(_t3));
            setOrders([]);
          case 5:
            _context3.p = 5;
            setOrdLoading(false);
            return _context3.f(5);
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 4, 5, 6]]);
    }));
    return function reloadOrders() {
      return _ref6.apply(this, arguments);
    };
  }();

  // 회원 — Supabase RPC 로 fetch
  var _uS21 = uS5([]),
    _uS22 = _slicedToArray(_uS21, 2),
    members = _uS22[0],
    setMembers = _uS22[1];
  var _uS23 = uS5(true),
    _uS24 = _slicedToArray(_uS23, 2),
    memLoading = _uS24[0],
    setMemLoading = _uS24[1];
  var _uS25 = uS5(null),
    _uS26 = _slicedToArray(_uS25, 2),
    memError = _uS26[0],
    setMemError = _uS26[1];
  var reloadMembers = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var sb, data, rows, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            sb = window.SUPABASE;
            if (sb) {
              _context4.n = 1;
              break;
            }
            setMemLoading(false);
            setMemError("Supabase 클라이언트 미초기화");
            return _context4.a(2);
          case 1:
            setMemLoading(true);
            setMemError(null);
            _context4.p = 2;
            _context4.n = 3;
            return adminApi("admin_list_members", {});
          case 3:
            data = _context4.v;
            rows = (data || []).map(function (r) {
              return {
                id: r.id,
                email: r.email || "",
                name: r.name || "",
                phone: r.phone || "",
                joinedAt: r.joined_at ? String(r.joined_at).slice(0, 10) : "",
                totalOrders: r.total_orders || 0,
                totalSpent: r.total_spent || 0,
                lastOrderAt: r.last_order_at ? String(r.last_order_at).slice(0, 10) : "",
                addresses: Array.isArray(r.addresses) ? r.addresses : [],
                note: ""
              };
            });
            setMembers(rows);
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            console.warn("[admin] members fetch 실패:", _t4);
            setMemError((_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || String(_t4));
            setMembers([]);
          case 5:
            _context4.p = 5;
            setMemLoading(false);
            return _context4.f(5);
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4, 5, 6]]);
    }));
    return function reloadMembers() {
      return _ref7.apply(this, arguments);
    };
  }();
  uE5(function () {
    reloadMembers();
    reloadOrders();
  }, []);
  var filtered = uM5(function () {
    return orders.filter(function (o) {
      if (statusFilter !== "all" && o.status !== statusFilter) return false;
      if (q.trim()) {
        var k = q.trim().toLowerCase();
        var hay = "".concat(o.no, " ").concat(o.customer, " ").concat(o.phone, " ").concat(formatItems(o.items)).toLowerCase();
        if (!hay.includes(k)) return false;
      }
      return true;
    });
  }, [orders, q, statusFilter]);
  var kpis = uM5(function () {
    var today = "2026-04-30";
    var open = orders.filter(function (o) {
      return ["결제완료", "제작중"].includes(o.status);
    });
    var todayOrders = orders.filter(function (o) {
      return o.date.startsWith(today) && o.status !== "취소";
    });
    var shipping = orders.filter(function (o) {
      return o.status === "배송중";
    });
    var lifetime = orders.filter(function (o) {
      return o.status !== "취소";
    }).reduce(function (s, o) {
      return s + orderTotal(o);
    }, 0);
    return {
      open: open.length,
      todaySales: todayOrders.reduce(function (s, o) {
        return s + orderTotal(o);
      }, 0),
      shipping: shipping.length,
      lifetime: lifetime
    };
  }, [orders]);
  var updateOrder = function updateOrder(no, patch) {
    return setOrders(function (list) {
      return list.map(function (o) {
        return o.no === no ? _objectSpread(_objectSpread({}, o), patch) : o;
      });
    });
  };
  var advance = function advance(no) {
    return setOrders(function (list) {
      return list.map(function (o) {
        if (o.no !== no) return o;
        var idx = STATUS_FLOW.indexOf(o.status);
        if (idx < 0 || idx === STATUS_FLOW.length - 1) return o;
        return _objectSpread(_objectSpread({}, o), {}, {
          status: STATUS_FLOW[idx + 1]
        });
      });
    });
  };
  var sel = orders.find(function (o) {
    return o.no === selected;
  });
  var isMobile = useIsMobile5(1024);
  var TABS = [{
    id: "orders",
    label: "주문 관리",
    badge: kpis.open
  }, {
    id: "products",
    label: "제품 관리",
    badge: null
  }, {
    id: "cases",
    label: "설치 사례",
    badge: null
  }, {
    id: "members",
    label: "회원",
    badge: members.length
  }, {
    id: "stats",
    label: "매출 통계",
    badge: null
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
      background: "var(--navy-950)"
    }
  }, isMobile ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--navy-900)",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 6,
      padding: "12px 16px",
      overflowX: "auto",
      whiteSpace: "nowrap"
    }
  }, TABS.map(function (it) {
    var active = tab === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: function onClick() {
        return setTab(it.id);
      },
      style: {
        flexShrink: 0,
        padding: "8px 14px",
        borderRadius: 100,
        background: active ? "rgba(46,124,246,0.12)" : "transparent",
        color: active ? "var(--cyan-400)" : "var(--gray-200)",
        border: "1px solid ".concat(active ? "var(--cyan-400)" : "var(--line)"),
        fontSize: 12,
        fontWeight: active ? 700 : 500,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, it.label, it.badge ? /*#__PURE__*/React.createElement("span", {
      className: "ub-mono",
      style: {
        minWidth: 20,
        padding: "1px 6px",
        borderRadius: 100,
        fontSize: 10,
        fontWeight: 700,
        background: active ? "var(--cyan-400)" : "rgba(255,255,255,0.08)",
        color: active ? "var(--navy-950)" : "var(--gray-200)"
      }
    }, it.badge) : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "0 16px 12px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      location.href = "/";
    },
    style: {
      flex: 1,
      fontSize: 11,
      padding: "6px 0",
      borderRadius: 6,
      background: "transparent",
      border: "1px solid var(--line-strong)",
      color: "var(--gray-200)",
      cursor: "pointer"
    }
  }, "\u2190 \uC0AC\uC774\uD2B8 \uBA54\uC778"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      try {
        sessionStorage.removeItem(ADMIN_GATE_KEY);
      } catch (e) {}
      location.reload();
    },
    style: {
      flex: 1,
      fontSize: 11,
      padding: "6px 0",
      borderRadius: 6,
      background: "transparent",
      border: "1px solid var(--line-strong)",
      color: "var(--gray-300)",
      cursor: "pointer"
    }
  }, "\uAD00\uB9AC\uC790 \uB85C\uADF8\uC544\uC6C3"))) : /*#__PURE__*/React.createElement("aside", {
    style: {
      borderRight: "1px solid var(--line)",
      padding: "32px 16px",
      background: "var(--navy-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 20,
      paddingLeft: 8
    }
  }, "ADMIN CONSOLE"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, TABS.map(function (it) {
    var active = tab === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: function onClick() {
        return setTab(it.id);
      },
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 12px",
        borderRadius: 8,
        background: active ? "rgba(46,124,246,0.10)" : "transparent",
        color: active ? "var(--cyan-400)" : "var(--gray-200)",
        border: active ? "1px solid rgba(46,124,246,0.25)" : "1px solid transparent",
        fontSize: 13,
        fontWeight: active ? 600 : 500,
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", null, it.label), it.badge ? /*#__PURE__*/React.createElement("span", {
      className: "ub-mono",
      style: {
        minWidth: 22,
        padding: "1px 7px",
        borderRadius: 100,
        fontSize: 10,
        fontWeight: 700,
        background: "var(--cyan-400)",
        color: "var(--navy-950)"
      }
    }, it.badge) : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      padding: 12,
      border: "1px dashed var(--line-strong)",
      borderRadius: 8,
      fontSize: 11,
      lineHeight: 1.6,
      color: "var(--gray-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--success, #4ADE80)",
      fontWeight: 600,
      marginBottom: 4
    }
  }, "\uD83D\uDD12 \uBCF4\uC548 \uC811\uADFC"), "\uAC1C\uC778\uC815\uBCF4\uB294 \uC11C\uBC84 \uC778\uC99D\uC744 \uAC70\uCCD0\uC57C\uB9CC", /*#__PURE__*/React.createElement("br", null), "\uC870\uD68C\uB429\uB2C8\uB2E4 (\uBAA9\uB85D\uC740 \uB9C8\uC2A4\uD0B9 \uD45C\uC2DC)."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      location.href = "/";
    },
    style: {
      width: "100%",
      fontSize: 12,
      padding: "8px 0",
      borderRadius: 6,
      background: "transparent",
      border: "1px solid var(--line-strong)",
      color: "var(--gray-200)",
      cursor: "pointer"
    }
  }, "\u2190 \uC0AC\uC774\uD2B8 \uBA54\uC778\uC73C\uB85C"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      try {
        sessionStorage.removeItem(ADMIN_GATE_KEY);
      } catch (e) {}
      location.reload();
    },
    style: {
      width: "100%",
      fontSize: 12,
      padding: "8px 0",
      borderRadius: 6,
      background: "transparent",
      border: "1px solid var(--line-strong)",
      color: "var(--gray-300)",
      cursor: "pointer"
    }
  }, "\uAD00\uB9AC\uC790 \uB85C\uADF8\uC544\uC6C3"))), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: isMobile ? "20px 16px" : "32px 40px",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow"
  }, "DASHBOARD"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2",
    style: {
      fontSize: isMobile ? 22 : 28,
      marginTop: 6
    }
  }, tab === "orders" ? "주문 관리" : tab === "products" ? "제품 관리" : tab === "cases" ? "설치 사례" : tab === "members" ? "회원" : "매출 통계")), !isMobile && /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-400)"
    }
  }, "UPDATED 2026-04-30 10:30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
      gap: isMobile ? 8 : 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "\uBBF8\uCC98\uB9AC \uC8FC\uBB38",
    value: kpis.open,
    sub: "\uACB0\uC81C\uC644\uB8CC / \uC81C\uC791\uC911",
    accent: "rgba(46,124,246,0.12)"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\uC624\uB298 \uB9E4\uCD9C",
    value: "\u20A9".concat(kpis.todaySales.toLocaleString()),
    sub: "2026-04-30",
    accent: "rgba(74,222,128,0.12)"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\uCD9C\uACE0 \uB300\uAE30",
    value: kpis.shipping,
    sub: "\uBC30\uC1A1\uC911 \uC0C1\uD0DC",
    accent: "rgba(167,139,250,0.12)"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\uB204\uC801 \uB9E4\uCD9C",
    value: "\u20A9".concat(kpis.lifetime.toLocaleString()),
    sub: "\uCDE8\uC18C \uC81C\uC678",
    accent: "rgba(251,191,36,0.12)"
  })), tab === "orders" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 14,
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "\uC8FC\uBB38\uBC88\uD638 / \uACE0\uAC1D\uBA85 / \uC804\uD654 / \uBAA8\uB378 \uAC80\uC0C9",
    style: {
      flex: 1,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid var(--line-strong)",
      borderRadius: 8,
      padding: "8px 12px",
      color: "var(--white)",
      fontSize: 13,
      fontFamily: "inherit",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: statusFilter,
    onChange: function onChange(e) {
      return setStatusFilter(e.target.value);
    },
    style: {
      background: "rgba(255,255,255,0.03)",
      border: "1px solid var(--line-strong)",
      borderRadius: 8,
      padding: "8px 12px",
      color: "var(--white)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\uC804\uCCB4 \uC0C1\uD0DC"), Object.keys(STATUS_COLORS).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s,
      value: s
    }, s);
  })), /*#__PURE__*/React.createElement(Btn5, {
    variant: "ghost",
    onClick: function onClick() {
      setQ("");
      setStatusFilter("all");
    }
  }, "\uCD08\uAE30\uD654"), /*#__PURE__*/React.createElement(Btn5, {
    variant: "primary",
    onClick: function onClick() {
      var headers = ["주문번호", "일시", "고객", "전화", "모델·수량", "소계", "배송비", "합계", "상태", "송장"];
      var rows = orders.map(function (o) {
        return [o.no, o.date, o.customer, o.phone, formatItems(o.items), orderSubtotal(o), orderShip(o), orderTotal(o), o.status, o.waybill || ""];
      });
      var today = new Date().toISOString().slice(0, 10);
      downloadCSV("\uC8FC\uBB38_\uC804\uCCB4_".concat(today, ".csv"), headers, rows);
    }
  }, "CSV \uB0B4\uBCF4\uB0B4\uAE30 ", Ic5.arrow)), /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 12,
      minWidth: 980
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "rgba(255,255,255,0.02)",
      color: "var(--gray-400)",
      fontFamily: "var(--font-mono)"
    }
  }, ["주문번호", "일시", "고객", "모델 · 수량", "금액", "상태", "송장", "액션"].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      style: {
        padding: "12px 14px",
        textAlign: "left",
        fontWeight: 500,
        fontSize: 10,
        letterSpacing: 1.2,
        borderBottom: "1px solid var(--line)"
      }
    }, h.toUpperCase());
  }))), /*#__PURE__*/React.createElement("tbody", null, filtered.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 8,
    style: {
      padding: 40,
      textAlign: "center",
      color: "var(--gray-400)"
    }
  }, "\uC77C\uCE58\uD558\uB294 \uC8FC\uBB38\uC774 \uC5C6\uC2B5\uB2C8\uB2E4")) : filtered.map(function (o) {
    var total = orderTotal(o);
    var last = o.status === "완료" || o.status === "취소";
    return /*#__PURE__*/React.createElement("tr", {
      key: o.no,
      style: {
        borderTop: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return setSelected(o.no);
      },
      className: "ub-mono",
      style: {
        background: "transparent",
        border: 0,
        color: "var(--cyan-400)",
        cursor: "pointer",
        fontSize: 12,
        padding: 0
      }
    }, o.no)), /*#__PURE__*/React.createElement("td", {
      className: "ub-mono",
      style: {
        padding: "12px 14px",
        color: "var(--gray-300)",
        fontSize: 11
      }
    }, o.date), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px",
        color: "var(--white)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, maskName(o.customer)), /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        fontSize: 10,
        color: "var(--gray-400)"
      }
    }, maskPhone(o.phone))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px",
        color: "var(--gray-200)",
        maxWidth: 240
      }
    }, formatItems(o.items)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        color: "var(--white)",
        fontWeight: 600
      }
    }, "\u20A9", total.toLocaleString()), /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        fontSize: 10,
        color: "var(--gray-400)",
        marginTop: 2
      }
    }, orderShip(o) === 0 ? "배송 무료" : "+ \uBC30\uC1A1 \u20A9".concat(orderShip(o).toLocaleString()))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: o.status,
      onChange: function onChange(e) {
        return updateOrder(o.no, {
          status: e.target.value
        });
      },
      style: {
        background: STATUS_COLORS[o.status].bg,
        border: "1px solid ".concat(STATUS_COLORS[o.status].fg, "33"),
        color: STATUS_COLORS[o.status].fg,
        borderRadius: 100,
        padding: "3px 10px",
        fontSize: 11,
        fontWeight: 600,
        cursor: "pointer"
      }
    }, Object.keys(STATUS_COLORS).map(function (s) {
      return /*#__PURE__*/React.createElement("option", {
        key: s,
        value: s,
        style: {
          background: "var(--navy-900)",
          color: "var(--white)"
        }
      }, s);
    }))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: o.tracking,
      placeholder: "\uC1A1\uC7A5\uBC88\uD638",
      onChange: function onChange(e) {
        return updateOrder(o.no, {
          tracking: e.target.value
        });
      },
      className: "ub-mono",
      style: {
        width: 120,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid var(--line-strong)",
        borderRadius: 6,
        padding: "5px 8px",
        color: "var(--white)",
        fontSize: 11,
        outline: "none"
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return advance(o.no);
      },
      disabled: last,
      style: {
        background: last ? "transparent" : "rgba(46,124,246,0.10)",
        border: "1px solid ".concat(last ? "var(--line)" : "var(--cyan-400)"),
        color: last ? "var(--gray-500, #6B7280)" : "var(--cyan-400)",
        padding: "5px 10px",
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 600,
        cursor: last ? "not-allowed" : "pointer"
      }
    }, "\uB2E4\uC74C \uB2E8\uACC4 \u2192")));
  })))))), tab === "products" && /*#__PURE__*/React.createElement(ProductsTab, null), tab === "cases" && /*#__PURE__*/React.createElement(CasesTab, null), tab === "members" && /*#__PURE__*/React.createElement(MembersTab, {
    orders: orders,
    members: members,
    loading: memLoading,
    error: memError,
    onReload: reloadMembers
  }), tab === "stats" && /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 40,
      textAlign: "center",
      color: "var(--gray-400)"
    }
  }, "\uB9E4\uCD9C \uD1B5\uACC4 \u2014 \uACB0\uC81C/\uC8FC\uBB38 \uB370\uC774\uD130 \uB204\uC801 \uD6C4 \uCC28\uD2B8 \uCD94\uAC00 \uC608\uC815.", /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      marginTop: 8,
      color: "var(--gray-500, #6B7280)"
    }
  }, "SOON"))), sel && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setSelected(null);
    },
    className: "ub-drawer-overlay is-open"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-panel is-open",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "ub-order-title"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-400)"
    }
  }, "ORDER \xB7 ", sel.no), /*#__PURE__*/React.createElement("div", {
    id: "ub-order-title",
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "var(--white)",
      marginTop: 2
    }
  }, sel.customer)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setSelected(null);
    },
    className: "ub-drawer-iconbtn",
    "aria-label": "\uB2EB\uAE30"
  }, Ic5.x)), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-body",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 6
    }
  }, "\uC8FC\uBB38 \uC77C\uC2DC"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      color: "var(--white)"
    }
  }, sel.date)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 6
    }
  }, "\uC5F0\uB77D\uCC98"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      color: "var(--white)"
    }
  }, sel.phone)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 6
    }
  }, "\uC0C1\uD0DC"), /*#__PURE__*/React.createElement(StatusPill, {
    status: sel.status
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 6
    }
  }, "\uD488\uBAA9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, sel.items.map(function (it, i) {
    var m = MODELS5.find(function (x) {
      return x.id === it.id;
    });
    if (!m) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        borderBottom: "1px dashed var(--line)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        fontSize: 10,
        color: "var(--gray-400)"
      }
    }, m.code), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--white)"
      }
    }, m.name, " ", /*#__PURE__*/React.createElement("span", {
      className: "ub-mono",
      style: {
        color: "var(--gray-300)"
      }
    }, "\xD7", it.qty))), /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        color: "var(--white)",
        fontWeight: 600
      }
    }, "\u20A9", (m.price * it.qty).toLocaleString()));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      color: "var(--gray-300)",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uC0C1\uD488 \uAE08\uC561"), /*#__PURE__*/React.createElement("span", {
    className: "ub-mono"
  }, "\u20A9", orderSubtotal(sel).toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      color: "var(--gray-300)",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uBC30\uC1A1\uBE44"), /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      color: orderShip(sel) === 0 ? "var(--success, #4ADE80)" : "var(--white)"
    }
  }, orderShip(sel) === 0 ? "무료" : "\u20A9".concat(orderShip(sel).toLocaleString()))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 12,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key"
  }, "\uD569\uACC4"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: "var(--white)"
    }
  }, "\u20A9", orderTotal(sel).toLocaleString()))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 6
    }
  }, "\uC1A1\uC7A5\uBC88\uD638"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: sel.tracking,
    onChange: function onChange(e) {
      return updateOrder(sel.no, {
        tracking: e.target.value
      });
    },
    className: "ub-mono",
    placeholder: "\uC785\uB825 \uD6C4 \uC790\uB3D9 \uC800\uC7A5 (\uD504\uB85C\uD1A0\uD0C0\uC785)",
    style: {
      width: "100%",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid var(--line-strong)",
      borderRadius: 8,
      padding: "8px 12px",
      color: "var(--white)",
      fontSize: 13,
      outline: "none"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-footer"
  }, /*#__PURE__*/React.createElement(Btn5, {
    variant: "primary",
    size: "lg",
    full: true,
    onClick: function onClick() {
      advance(sel.no);
    }
  }, "\uB2E4\uC74C \uB2E8\uACC4\uB85C \uC9C4\uD589 ", Ic5.arrow)))));
};

// ─── MEMBERS TAB ──────────────────────────────────────────────────────────────
var MembersTab = function MembersTab(_ref8) {
  var orders = _ref8.orders,
    _ref8$members = _ref8.members,
    members = _ref8$members === void 0 ? [] : _ref8$members,
    _ref8$loading = _ref8.loading,
    loading = _ref8$loading === void 0 ? false : _ref8$loading,
    _ref8$error = _ref8.error,
    error = _ref8$error === void 0 ? null : _ref8$error,
    onReload = _ref8.onReload;
  var _uS27 = uS5(""),
    _uS28 = _slicedToArray(_uS27, 2),
    q = _uS28[0],
    setQ = _uS28[1];
  var _uS29 = uS5("all"),
    _uS30 = _slicedToArray(_uS29, 2),
    gradeFilter = _uS30[0],
    setGradeFilter = _uS30[1];
  var _uS31 = uS5(null),
    _uS32 = _slicedToArray(_uS31, 2),
    selected = _uS32[0],
    setSelected = _uS32[1];
  var list = uM5(function () {
    return members.map(function (m) {
      return _objectSpread(_objectSpread({}, m), {}, {
        grade: calcGrade5(m.totalSpent, m.totalOrders, m.joinedAt)
      });
    }).filter(function (m) {
      if (gradeFilter !== "all" && m.grade !== gradeFilter) return false;
      if (q.trim()) {
        var k = q.trim().toLowerCase();
        if (!"".concat(m.name, " ").concat(m.phone, " ").concat(m.email).toLowerCase().includes(k)) return false;
      }
      return true;
    });
  }, [q, gradeFilter, members]);
  var sel = list.find(function (m) {
    return m.id === selected;
  }) || members.find(function (m) {
    return m.id === selected;
  });
  var memberOrders = sel ? orders.filter(function (o) {
    return o.phone === sel.phone;
  }) : [];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 14,
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "\uC774\uB984 / \uC804\uD654 / \uC774\uBA54\uC77C \uAC80\uC0C9",
    style: {
      flex: 1,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid var(--line-strong)",
      borderRadius: 8,
      padding: "8px 12px",
      color: "var(--white)",
      fontSize: 13,
      fontFamily: "inherit",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: gradeFilter,
    onChange: function onChange(e) {
      return setGradeFilter(e.target.value);
    },
    style: {
      background: "rgba(255,255,255,0.03)",
      border: "1px solid var(--line-strong)",
      borderRadius: 8,
      padding: "8px 12px",
      color: "var(--white)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\uC804\uCCB4 \uB4F1\uAE09"), Object.keys(GRADE_COLORS5).map(function (g) {
    return /*#__PURE__*/React.createElement("option", {
      key: g,
      value: g
    }, g);
  })), /*#__PURE__*/React.createElement(Btn5, {
    variant: "ghost",
    onClick: function onClick() {
      setQ("");
      setGradeFilter("all");
    }
  }, "\uCD08\uAE30\uD654"), /*#__PURE__*/React.createElement(Btn5, {
    variant: "ghost",
    onClick: function onClick() {
      return onReload && onReload();
    }
  }, "\uC0C8\uB85C\uACE0\uCE68"), /*#__PURE__*/React.createElement(Btn5, {
    variant: "primary",
    onClick: function onClick() {
      var headers = ["이름", "연락처", "이메일", "우편번호", "기본 배송지", "상세 주소", "가입일", "주문 수", "누적 구매", "등급"];
      var rows = members.map(function (m) {
        var def = (m.addresses || []).find(function (a) {
          return a.isDefault;
        }) || (m.addresses || [])[0] || {};
        return [m.name, m.phone, m.email, def.zip || "", def.addr1 || "", def.addr2 || "", m.joinedAt, "".concat(m.totalOrders, "\uAC74"), m.totalSpent, calcGrade5(m.totalSpent, m.totalOrders, m.joinedAt)];
      });
      var today = new Date().toISOString().slice(0, 10);
      downloadCSV("\uD68C\uC6D0_\uC804\uCCB4_".concat(today, ".csv"), headers, rows);
    }
  }, "CSV ", Ic5.arrow)), error && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14,
      padding: "10px 14px",
      borderRadius: 8,
      background: "rgba(251,191,36,0.08)",
      border: "1px solid rgba(251,191,36,0.3)",
      color: "var(--warning, #FBBF24)",
      fontSize: 12
    }
  }, "\uD68C\uC6D0 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: ", error, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      color: "var(--gray-400)",
      fontSize: 11
    }
  }, "Supabase\uC5D0\uC11C admin_rpc.sql \uC744 \uC2E4\uD589\uD588\uB294\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 12,
      minWidth: 920
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "rgba(255,255,255,0.02)",
      color: "var(--gray-400)",
      fontFamily: "var(--font-mono)"
    }
  }, ["이름", "연락처", "이메일", "기본 배송지", "가입일", "주문", "누적 구매", "등급"].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      style: {
        padding: "12px 14px",
        textAlign: "left",
        fontWeight: 500,
        fontSize: 10,
        letterSpacing: 1.2,
        borderBottom: "1px solid var(--line)"
      }
    }, h.toUpperCase());
  }))), /*#__PURE__*/React.createElement("tbody", null, loading ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 8,
    style: {
      padding: 40,
      textAlign: "center",
      color: "var(--gray-400)"
    }
  }, "\uBD88\uB7EC\uC624\uB294 \uC911\u2026")) : list.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 8,
    style: {
      padding: 40,
      textAlign: "center",
      color: "var(--gray-400)"
    }
  }, members.length === 0 ? "아직 가입한 회원이 없습니다" : "일치하는 회원이 없습니다")) : list.map(function (m) {
    var def = (m.addresses || []).find(function (a) {
      return a.isDefault;
    }) || (m.addresses || [])[0];
    var gc = GRADE_COLORS5[m.grade];
    return /*#__PURE__*/React.createElement("tr", {
      key: m.id,
      style: {
        borderTop: "1px solid var(--line)",
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setSelected(m.id);
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px",
        color: "var(--white)",
        fontWeight: 600
      }
    }, maskName(m.name)), /*#__PURE__*/React.createElement("td", {
      className: "ub-mono",
      style: {
        padding: "12px 14px",
        color: "var(--gray-200)",
        fontSize: 11
      }
    }, maskPhone(m.phone)), /*#__PURE__*/React.createElement("td", {
      className: "ub-mono",
      style: {
        padding: "12px 14px",
        color: "var(--gray-300)",
        fontSize: 11
      }
    }, maskEmail(m.email)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px",
        color: "var(--gray-200)",
        maxWidth: 240,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, def ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "ub-mono",
      style: {
        fontSize: 10,
        color: "var(--gray-400)",
        marginRight: 6
      }
    }, def.zip), def.addr1) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--gray-500, #6B7280)"
      }
    }, "\uBBF8\uB4F1\uB85D")), /*#__PURE__*/React.createElement("td", {
      className: "ub-mono",
      style: {
        padding: "12px 14px",
        color: "var(--gray-300)",
        fontSize: 11
      }
    }, m.joinedAt), /*#__PURE__*/React.createElement("td", {
      className: "ub-mono",
      style: {
        padding: "12px 14px",
        color: "var(--white)"
      }
    }, m.totalOrders, "\uAC74"), /*#__PURE__*/React.createElement("td", {
      className: "ub-mono",
      style: {
        padding: "12px 14px",
        color: "var(--white)",
        fontWeight: 600
      }
    }, "\u20A9", m.totalSpent.toLocaleString()), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: 100,
        fontSize: 11,
        fontWeight: 600,
        color: gc.fg,
        background: gc.bg
      }
    }, m.grade)));
  }))))), sel && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setSelected(null);
    },
    className: "ub-drawer-overlay is-open"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-panel is-open",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "ub-member-title"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-400)"
    }
  }, "MEMBER \xB7 ", sel.id), /*#__PURE__*/React.createElement("div", {
    id: "ub-member-title",
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "var(--white)",
      marginTop: 2
    }
  }, sel.name, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      padding: "2px 10px",
      borderRadius: 100,
      fontSize: 11,
      fontWeight: 600,
      color: GRADE_COLORS5[calcGrade5(sel.totalSpent, sel.totalOrders, sel.joinedAt)].fg,
      background: GRADE_COLORS5[calcGrade5(sel.totalSpent, sel.totalOrders, sel.joinedAt)].bg
    }
  }, calcGrade5(sel.totalSpent, sel.totalOrders, sel.joinedAt)))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setSelected(null);
    },
    className: "ub-drawer-iconbtn",
    "aria-label": "\uB2EB\uAE30"
  }, Ic5.x)), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-body",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 8
    }
  }, "\uAE30\uBCF8 \uC815\uBCF4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      rowGap: 6,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)"
    }
  }, "\uC5F0\uB77D\uCC98"), /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      color: "var(--white)"
    }
  }, sel.phone), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)"
    }
  }, "\uC774\uBA54\uC77C"), /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      color: "var(--white)"
    }
  }, sel.email), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)"
    }
  }, "\uAC00\uC785\uC77C"), /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      color: "var(--gray-200)"
    }
  }, sel.joinedAt), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)"
    }
  }, "\uCD5C\uADFC \uC8FC\uBB38"), /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      color: "var(--gray-200)"
    }
  }, sel.lastOrderAt || "—"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 8
    }
  }, "\uC8FC\uC18C\uB85D (", sel.addresses.length, ")"), sel.addresses.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      fontSize: 12,
      color: "var(--gray-400)",
      textAlign: "center",
      border: "1px dashed var(--line)",
      borderRadius: 8
    }
  }, "\uB4F1\uB85D\uB41C \uC8FC\uC18C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, sel.addresses.map(function (a) {
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        padding: 12,
        borderRadius: 8,
        border: "1px solid var(--line)",
        background: a.isDefault ? "rgba(46,124,246,0.04)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--white)"
      }
    }, a.label), a.isDefault && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: "var(--cyan-400)",
        padding: "1px 6px",
        border: "1px solid var(--cyan-400)",
        borderRadius: 100
      }
    }, "\uAE30\uBCF8")), /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        fontSize: 11,
        color: "var(--gray-400)"
      }
    }, a.zip), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--gray-100)",
        marginTop: 2
      }
    }, a.addr1, " ", a.addr2), /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        fontSize: 11,
        color: "var(--gray-300)",
        marginTop: 4
      }
    }, a.name, " \xB7 ", a.phone));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 8
    }
  }, "\uC8FC\uBB38 \uC774\uB825 (", memberOrders.length, ")"), memberOrders.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      fontSize: 12,
      color: "var(--gray-400)",
      textAlign: "center",
      border: "1px dashed var(--line)",
      borderRadius: 8
    }
  }, "\uC8FC\uBB38 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, memberOrders.map(function (o) {
    var _STATUS_COLORS$o$stat;
    return /*#__PURE__*/React.createElement("div", {
      key: o.no,
      style: {
        padding: 10,
        borderRadius: 6,
        border: "1px solid var(--line)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        color: "var(--cyan-400)",
        fontSize: 11
      }
    }, o.no), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--gray-200)",
        marginTop: 2
      }
    }, o.items.map(function (it) {
      var m = MODELS5.find(function (x) {
        return x.id === it.id;
      });
      return m ? "".concat(m.name, "\xD7").concat(it.qty) : "";
    }).join(", "))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        color: "var(--white)",
        fontWeight: 600
      }
    }, "\u20A9", (o.items.reduce(function (s, it) {
      var m = MODELS5.find(function (x) {
        return x.id === it.id;
      });
      return s + (m ? m.price * it.qty : 0);
    }, 0) + calcShip5(o.items.reduce(function (s, it) {
      var m = MODELS5.find(function (x) {
        return x.id === it.id;
      });
      return s + (m ? m.price * it.qty : 0);
    }, 0))).toLocaleString()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: ((_STATUS_COLORS$o$stat = STATUS_COLORS[o.status]) === null || _STATUS_COLORS$o$stat === void 0 ? void 0 : _STATUS_COLORS$o$stat.fg) || "var(--gray-400)",
        marginTop: 2
      }
    }, o.status)));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 8
    }
  }, "\uAD00\uB9AC\uC790 \uBA54\uBAA8"), /*#__PURE__*/React.createElement("textarea", {
    defaultValue: sel.note || "",
    placeholder: "\uD68C\uC6D0 \uAD00\uB828 \uBA54\uBAA8 (\uC608: \uAD50\uD658 \uC774\uB825, \uD2B9\uC774\uC0AC\uD56D)",
    rows: 3,
    style: {
      width: "100%",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid var(--line-strong)",
      borderRadius: 8,
      padding: 10,
      color: "var(--white)",
      fontSize: 13,
      resize: "vertical",
      outline: "none"
    }
  }))))));
};

// ─── PRODUCTS TAB ─────────────────────────────────────────────────────────────
// 제품 CRUD — Supabase products 테이블, 관리자 RPC 경유
var PROD_BLANK = {
  id: "",
  code: "",
  name: "",
  cat: "multi",
  price: 0,
  status: "live",
  description: "",
  long_description: "",
  material: "PETG · 무광 블랙",
  compat_tags: "유리, 콘크리트, 석고",
  w: null,
  h: null,
  d: null,
  weight: null,
  image_url: "",
  sort_order: 100
};
var ProductsTab = function ProductsTab() {
  var _editing$w, _editing$h, _editing$d, _editing$weight;
  var _uS33 = uS5([]),
    _uS34 = _slicedToArray(_uS33, 2),
    rows = _uS34[0],
    setRows = _uS34[1];
  var _uS35 = uS5(true),
    _uS36 = _slicedToArray(_uS35, 2),
    loading = _uS36[0],
    setLoading = _uS36[1];
  var _uS37 = uS5(null),
    _uS38 = _slicedToArray(_uS37, 2),
    error = _uS38[0],
    setError = _uS38[1];
  var _uS39 = uS5(null),
    _uS40 = _slicedToArray(_uS39, 2),
    editing = _uS40[0],
    setEditing = _uS40[1]; // null | PROD_BLANK | row
  var _uS41 = uS5(false),
    _uS42 = _slicedToArray(_uS41, 2),
    busy = _uS42[0],
    setBusy = _uS42[1];
  var _uS43 = uS5(""),
    _uS44 = _slicedToArray(_uS43, 2),
    q = _uS44[0],
    setQ = _uS44[1];
  var _uS45 = uS5(false),
    _uS46 = _slicedToArray(_uS45, 2),
    uploadBusy = _uS46[0],
    setUploadBusy = _uS46[1];
  var _uS47 = uS5(null),
    _uS48 = _slicedToArray(_uS47, 2),
    uploadErr = _uS48[0],
    setUploadErr = _uS48[1];
  var _uS49 = uS5(false),
    _uS50 = _slicedToArray(_uS49, 2),
    dragOver = _uS50[0],
    setDragOver = _uS50[1];
  var reload = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var sb, data, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            sb = window.SUPABASE;
            if (sb) {
              _context5.n = 1;
              break;
            }
            setLoading(false);
            setError("Supabase 미초기화");
            return _context5.a(2);
          case 1:
            setLoading(true);
            setError(null);
            _context5.p = 2;
            _context5.n = 3;
            return adminApi("admin_list_products", {});
          case 3:
            data = _context5.v;
            setRows(data || []);
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t5 = _context5.v;
            setError((_t5 === null || _t5 === void 0 ? void 0 : _t5.message) || String(_t5));
            setRows([]);
          case 5:
            _context5.p = 5;
            setLoading(false);
            return _context5.f(5);
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 4, 5, 6]]);
    }));
    return function reload() {
      return _ref9.apply(this, arguments);
    };
  }();
  uE5(function () {
    reload();
  }, []);
  var filtered = rows.filter(function (r) {
    if (!q.trim()) return true;
    var k = q.trim().toLowerCase();
    return "".concat(r.id, " ").concat(r.code, " ").concat(r.name, " ").concat(r.cat).toLowerCase().includes(k);
  });
  var startNew = function startNew() {
    setUploadErr(null);
    setEditing(_objectSpread({}, PROD_BLANK));
  };
  var startEdit = function startEdit(r) {
    setUploadErr(null);
    setEditing({
      id: r.id,
      code: r.code,
      name: r.name,
      cat: r.cat || "multi",
      price: r.price,
      status: r.status,
      description: r.description || "",
      long_description: r.long_description || "",
      material: r.material || "",
      compat_tags: r.compat_tags || "",
      w: r.w,
      h: r.h,
      d: r.d,
      weight: r.weight,
      image_url: r.image_url || "",
      sort_order: r.sort_order
    });
  };
  var cancel = function cancel() {
    setUploadErr(null);
    setEditing(null);
  };
  var save = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var sb, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (editing) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            if (!(!editing.id || !editing.code || !editing.name)) {
              _context6.n = 2;
              break;
            }
            alert("ID · 코드 · 이름은 필수입니다.");
            return _context6.a(2);
          case 2:
            sb = window.SUPABASE;
            if (sb) {
              _context6.n = 3;
              break;
            }
            return _context6.a(2);
          case 3:
            setBusy(true);
            _context6.p = 4;
            _context6.n = 5;
            return adminApi("admin_upsert_product", {
              p_id: editing.id,
              p_code: editing.code,
              p_name: editing.name,
              p_cat: editing.cat,
              p_price: Number(editing.price) || 0,
              p_status: editing.status,
              p_description: editing.description || "",
              p_w: editing.w === "" || editing.w === null ? null : Number(editing.w),
              p_h: editing.h === "" || editing.h === null ? null : Number(editing.h),
              p_d: editing.d === "" || editing.d === null ? null : Number(editing.d),
              p_weight: editing.weight === "" || editing.weight === null ? null : Number(editing.weight),
              p_image_url: editing.image_url || null,
              p_sort_order: Number(editing.sort_order) || 100
            });
          case 5:
            _context6.n = 6;
            return adminApi("admin_update_product_extras", {
              p_id: editing.id,
              p_material: editing.material || null,
              p_compat_tags: editing.compat_tags || null,
              p_long_description: editing.long_description || null
            });
          case 6:
            setEditing(null);
            _context6.n = 7;
            return reload();
          case 7:
            // 고객 카탈로그도 같이 갱신
            if (window.UB && window.UB.loadProducts) window.UB.loadProducts();
            _context6.n = 9;
            break;
          case 8:
            _context6.p = 8;
            _t6 = _context6.v;
            alert("저장 실패: " + ((_t6 === null || _t6 === void 0 ? void 0 : _t6.message) || _t6));
          case 9:
            _context6.p = 9;
            setBusy(false);
            return _context6.f(9);
          case 10:
            return _context6.a(2);
        }
      }, _callee6, null, [[4, 8, 9, 10]]);
    }));
    return function save() {
      return _ref0.apply(this, arguments);
    };
  }();
  var remove = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(id) {
      var sb, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            if (confirm("\"".concat(id, "\" \uC81C\uD488\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694? \uCE74\uD0C8\uB85C\uADF8\uC5D0\uC11C \uC989\uC2DC \uC0AC\uB77C\uC9D1\uB2C8\uB2E4."))) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2);
          case 1:
            sb = window.SUPABASE;
            if (sb) {
              _context7.n = 2;
              break;
            }
            return _context7.a(2);
          case 2:
            _context7.p = 2;
            _context7.n = 3;
            return adminApi("admin_delete_product", {
              p_id: id
            });
          case 3:
            _context7.n = 4;
            return reload();
          case 4:
            if (window.UB && window.UB.loadProducts) window.UB.loadProducts();
            _context7.n = 6;
            break;
          case 5:
            _context7.p = 5;
            _t7 = _context7.v;
            alert("삭제 실패: " + ((_t7 === null || _t7 === void 0 ? void 0 : _t7.message) || _t7));
          case 6:
            return _context7.a(2);
        }
      }, _callee7, null, [[2, 5]]);
    }));
    return function remove(_x3) {
      return _ref1.apply(this, arguments);
    };
  }();
  var upd = function upd(k, v) {
    return setEditing(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };

  // 사진 업로드 — Supabase Storage 'product-images' 버킷
  var uploadImage = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(file) {
      var sb, ext, slug, filename, _yield$sb$storage$fro, upErr, _sb$storage$from$getP, data, publicUrl, _t8;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            if (file) {
              _context8.n = 1;
              break;
            }
            return _context8.a(2);
          case 1:
            if (!(!file.type || !file.type.startsWith("image/"))) {
              _context8.n = 2;
              break;
            }
            setUploadErr("이미지 파일만 업로드 가능합니다 (JPG / PNG / WebP / SVG / GIF).");
            return _context8.a(2);
          case 2:
            if (!(file.size > 20 * 1024 * 1024)) {
              _context8.n = 3;
              break;
            }
            setUploadErr("20MB 이하 파일만 업로드 가능합니다.");
            return _context8.a(2);
          case 3:
            sb = window.SUPABASE;
            if (sb) {
              _context8.n = 4;
              break;
            }
            setUploadErr("Supabase 미초기화");
            return _context8.a(2);
          case 4:
            setUploadBusy(true);
            setUploadErr(null);
            _context8.p = 5;
            _context8.n = 6;
            return resizeImageForUpload(file, 1600, 0.86);
          case 6:
            file = _context8.v;
            // 웹 표시 크기로 축소 후 업로드
            ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
            slug = (editing && editing.id ? editing.id : "product").replace(/[^a-z0-9_-]/g, "");
            filename = "".concat(slug, "_").concat(Date.now(), ".").concat(ext || "jpg");
            _context8.n = 7;
            return sb.storage.from("product-images").upload(filename, file, {
              upsert: false,
              cacheControl: "3600",
              contentType: file.type
            });
          case 7:
            _yield$sb$storage$fro = _context8.v;
            upErr = _yield$sb$storage$fro.error;
            if (!upErr) {
              _context8.n = 8;
              break;
            }
            throw upErr;
          case 8:
            _sb$storage$from$getP = sb.storage.from("product-images").getPublicUrl(filename), data = _sb$storage$from$getP.data;
            publicUrl = data && data.publicUrl;
            if (publicUrl) {
              _context8.n = 9;
              break;
            }
            throw new Error("public URL 발급 실패");
          case 9:
            upd("image_url", publicUrl);
            _context8.n = 11;
            break;
          case 10:
            _context8.p = 10;
            _t8 = _context8.v;
            setUploadErr((_t8 === null || _t8 === void 0 ? void 0 : _t8.message) || String(_t8));
          case 11:
            _context8.p = 11;
            setUploadBusy(false);
            return _context8.f(11);
          case 12:
            return _context8.a(2);
        }
      }, _callee8, null, [[5, 10, 11, 12]]);
    }));
    return function uploadImage(_x4) {
      return _ref10.apply(this, arguments);
    };
  }();
  var onDrop = function onDrop(e) {
    e.preventDefault();
    setDragOver(false);
    var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) uploadImage(f);
  };

  // ── 상태 변경 (판매중 ↔ 재고없음 등) + 일괄 적용 ──
  var P_STATUS = [{
    v: "live",
    label: "판매중",
    color: "#6BA5FF",
    bg: "rgba(46,124,246,0.16)"
  }, {
    v: "sold_out",
    label: "재고없음",
    color: "#FF6B6B",
    bg: "rgba(239,68,68,0.16)"
  }, {
    v: "soon",
    label: "출시예정",
    color: "#FBBF24",
    bg: "rgba(251,191,36,0.14)"
  }, {
    v: "hidden",
    label: "숨김",
    color: "#9CA3AF",
    bg: "rgba(255,255,255,0.06)"
  }];
  var _uS51 = uS5(new Set()),
    _uS52 = _slicedToArray(_uS51, 2),
    selected = _uS52[0],
    setSelected = _uS52[1];
  var toggleSel = function toggleSel(id) {
    return setSelected(function (s) {
      var n = new Set(s);
      n.has(id) ? n["delete"](id) : n.add(id);
      return n;
    });
  };
  var allSel = filtered.length > 0 && filtered.every(function (r) {
    return selected.has(r.id);
  });
  var toggleAll = function toggleAll() {
    return setSelected(allSel ? new Set() : new Set(filtered.map(function (r) {
      return r.id;
    })));
  };
  var applyStatus = function applyStatus(r, st) {
    return adminApi("admin_upsert_product", {
      p_id: r.id,
      p_code: r.code,
      p_name: r.name,
      p_cat: r.cat || "multi",
      p_price: Number(r.price) || 0,
      p_status: st,
      p_description: r.description || "",
      p_w: r.w,
      p_h: r.h,
      p_d: r.d,
      p_weight: r.weight,
      p_image_url: r.image_url || null,
      p_sort_order: r.sort_order
    });
  };
  var changeStatus = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(r, st) {
      var _t9;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            _context9.n = 1;
            return applyStatus(r, st);
          case 1:
            _context9.n = 2;
            return reload();
          case 2:
            if (window.UB && window.UB.loadProducts) window.UB.loadProducts();
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t9 = _context9.v;
            alert("상태 변경 실패: " + ((_t9 === null || _t9 === void 0 ? void 0 : _t9.message) || _t9));
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 3]]);
    }));
    return function changeStatus(_x5, _x6) {
      return _ref11.apply(this, arguments);
    };
  }();
  var bulkStatus = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(st) {
      var ids, lbl, _iterator, _step, _loop, _t0, _t1;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            ids = _toConsumableArray(selected);
            if (ids.length) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            lbl = (P_STATUS.find(function (s) {
              return s.v === st;
            }) || {}).label;
            if (confirm("\uC120\uD0DD\uD55C ".concat(ids.length, "\uAC1C \uC81C\uD488\uC744 \"").concat(lbl, "\"(\uC73C)\uB85C \uBCC0\uACBD\uD560\uAE4C\uC694?"))) {
              _context1.n = 2;
              break;
            }
            return _context1.a(2);
          case 2:
            setBusy(true);
            _context1.p = 3;
            _iterator = _createForOfIteratorHelper(ids);
            _context1.p = 4;
            _loop = /*#__PURE__*/_regenerator().m(function _loop() {
              var id, r;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    id = _step.value;
                    r = rows.find(function (x) {
                      return x.id === id;
                    });
                    if (!r) {
                      _context0.n = 1;
                      break;
                    }
                    _context0.n = 1;
                    return applyStatus(r, st);
                  case 1:
                    return _context0.a(2);
                }
              }, _loop);
            });
            _iterator.s();
          case 5:
            if ((_step = _iterator.n()).done) {
              _context1.n = 7;
              break;
            }
            return _context1.d(_regeneratorValues(_loop()), 6);
          case 6:
            _context1.n = 5;
            break;
          case 7:
            _context1.n = 9;
            break;
          case 8:
            _context1.p = 8;
            _t0 = _context1.v;
            _iterator.e(_t0);
          case 9:
            _context1.p = 9;
            _iterator.f();
            return _context1.f(9);
          case 10:
            setSelected(new Set());
            _context1.n = 11;
            return reload();
          case 11:
            if (window.UB && window.UB.loadProducts) window.UB.loadProducts();
            _context1.n = 13;
            break;
          case 12:
            _context1.p = 12;
            _t1 = _context1.v;
            alert("일괄 변경 실패: " + ((_t1 === null || _t1 === void 0 ? void 0 : _t1.message) || _t1));
          case 13:
            _context1.p = 13;
            setBusy(false);
            return _context1.f(13);
          case 14:
            return _context1.a(2);
        }
      }, _callee0, null, [[4, 8, 9, 10], [3, 12, 13, 14]]);
    }));
    return function bulkStatus(_x7) {
      return _ref12.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 14,
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "ID / \uCF54\uB4DC / \uC774\uB984 \uAC80\uC0C9",
    style: {
      flex: 1,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid var(--line-strong)",
      borderRadius: 8,
      padding: "8px 12px",
      color: "var(--white)",
      fontSize: 13,
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement(Btn5, {
    variant: "ghost",
    onClick: reload
  }, "\uC0C8\uB85C\uACE0\uCE68"), /*#__PURE__*/React.createElement(Btn5, {
    variant: "primary",
    onClick: startNew
  }, "+ \uC0C8 \uC81C\uD488 ", Ic5.arrow)), selected.size > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      padding: "10px 14px",
      borderRadius: 8,
      background: "rgba(46,124,246,0.08)",
      border: "1px solid rgba(46,124,246,0.3)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 13,
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, selected.size, "\uAC1C"), " \uC120\uD0DD\uB428 \u2192"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return bulkStatus("sold_out");
    },
    disabled: busy,
    style: {
      background: "rgba(239,68,68,0.14)",
      border: "1px solid rgba(239,68,68,0.45)",
      color: "#FF6B6B",
      padding: "6px 12px",
      borderRadius: 6,
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "\uC7AC\uACE0\uC5C6\uC74C\uC73C\uB85C"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return bulkStatus("live");
    },
    disabled: busy,
    style: {
      background: "rgba(46,124,246,0.16)",
      border: "1px solid rgba(46,124,246,0.45)",
      color: "#6BA5FF",
      padding: "6px 12px",
      borderRadius: 6,
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "\uD310\uB9E4\uC911\uC73C\uB85C"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setSelected(new Set());
    },
    style: {
      marginLeft: "auto",
      background: "transparent",
      border: "1px solid var(--line-strong)",
      color: "var(--gray-300)",
      padding: "6px 12px",
      borderRadius: 6,
      fontSize: 12,
      cursor: "pointer"
    }
  }, "\uC120\uD0DD \uD574\uC81C")), error && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14,
      padding: "10px 14px",
      borderRadius: 8,
      background: "rgba(251,191,36,0.08)",
      border: "1px solid rgba(251,191,36,0.3)",
      color: "var(--warning, #FBBF24)",
      fontSize: 12
    }
  }, "\uC81C\uD488 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: ", error, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      color: "var(--gray-400)",
      fontSize: 11
    }
  }, "Supabase\uC5D0\uC11C products.sql \uC744 \uC2E4\uD589\uD588\uB294\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 12,
      minWidth: 920
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "rgba(255,255,255,0.02)",
      color: "var(--gray-400)",
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "12px 14px",
      borderBottom: "1px solid var(--line)",
      width: 36
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allSel,
    onChange: toggleAll,
    "aria-label": "\uC804\uCCB4 \uC120\uD0DD"
  })), ["순서", "ID", "코드", "이름", "가격", "상태", "사진", "액션"].map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h,
      style: {
        padding: "12px 14px",
        textAlign: "left",
        fontWeight: 500,
        fontSize: 10,
        letterSpacing: 1.2,
        borderBottom: "1px solid var(--line)"
      }
    }, h.toUpperCase());
  }))), /*#__PURE__*/React.createElement("tbody", null, loading ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 9,
    style: {
      padding: 40,
      textAlign: "center",
      color: "var(--gray-400)"
    }
  }, "\uBD88\uB7EC\uC624\uB294 \uC911\u2026")) : filtered.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 9,
    style: {
      padding: 40,
      textAlign: "center",
      color: "var(--gray-400)"
    }
  }, rows.length === 0 ? "등록된 제품이 없습니다" : "일치하는 제품이 없습니다")) : filtered.map(function (r) {
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id,
      style: {
        borderTop: "1px solid var(--line)",
        background: selected.has(r.id) ? "rgba(46,124,246,0.06)" : undefined
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: selected.has(r.id),
      onChange: function onChange() {
        return toggleSel(r.id);
      },
      "aria-label": "".concat(r.name, " \uC120\uD0DD")
    })), /*#__PURE__*/React.createElement("td", {
      className: "ub-mono",
      style: {
        padding: "12px 14px",
        color: "var(--gray-300)"
      }
    }, r.sort_order), /*#__PURE__*/React.createElement("td", {
      className: "ub-mono",
      style: {
        padding: "12px 14px",
        color: "var(--cyan-400)"
      }
    }, r.id), /*#__PURE__*/React.createElement("td", {
      className: "ub-mono",
      style: {
        padding: "12px 14px",
        color: "var(--gray-200)"
      }
    }, r.code), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px",
        color: "var(--white)",
        fontWeight: 600
      }
    }, r.name), /*#__PURE__*/React.createElement("td", {
      className: "ub-mono",
      style: {
        padding: "12px 14px",
        color: "var(--white)",
        fontWeight: 600
      }
    }, "\u20A9", Number(r.price || 0).toLocaleString()), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px"
      }
    }, function () {
      var cur = P_STATUS.find(function (s) {
        return s.v === r.status;
      }) || P_STATUS[3];
      return /*#__PURE__*/React.createElement("select", {
        value: r.status,
        onChange: function onChange(e) {
          return changeStatus(r, e.target.value);
        },
        style: {
          background: cur.bg,
          border: "1px solid ".concat(cur.color, "66"),
          color: cur.color,
          borderRadius: 100,
          padding: "4px 10px",
          fontSize: 11,
          fontWeight: 700,
          cursor: "pointer",
          outline: "none"
        }
      }, P_STATUS.map(function (s) {
        return /*#__PURE__*/React.createElement("option", {
          key: s.v,
          value: s.v,
          style: {
            background: "var(--navy-900)",
            color: "var(--white)"
          }
        }, s.label);
      }));
    }()), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px"
      }
    }, r.image_url ? /*#__PURE__*/React.createElement("img", {
      src: r.image_url,
      alt: "",
      style: {
        width: 36,
        height: 36,
        objectFit: "cover",
        borderRadius: 4
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: "var(--gray-500, #6B7280)"
      }
    }, "\uC5C6\uC74C")), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 14px",
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return startEdit(r);
      },
      style: {
        background: "rgba(46,124,246,0.10)",
        border: "1px solid var(--cyan-400)",
        color: "var(--cyan-400)",
        padding: "5px 10px",
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 600,
        cursor: "pointer"
      }
    }, "\uC218\uC815"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return remove(r.id);
      },
      style: {
        background: "transparent",
        border: "1px solid var(--line-strong)",
        color: "var(--gray-300)",
        padding: "5px 10px",
        borderRadius: 6,
        fontSize: 11,
        cursor: "pointer"
      }
    }, "\uC0AD\uC81C")));
  }))))), editing && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-overlay is-open"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-panel is-open",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-400)"
    }
  }, "PRODUCT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "var(--white)",
      marginTop: 2
    }
  }, rows.some(function (r) {
    return r.id === editing.id;
  }) ? "제품 수정" : "새 제품 추가")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: cancel,
    className: "ub-drawer-iconbtn",
    "aria-label": "\uB2EB\uAE30"
  }, Ic5.x)), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-body",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "ID (URL \uC2AC\uB7EC\uADF8)"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    value: editing.id,
    onChange: function onChange(e) {
      return upd("id", e.target.value.toLowerCase());
    },
    placeholder: "fsf2 / bs3 \uB4F1 \uC601\uBB38\xB7\uC22B\uC790\uB9CC"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uCF54\uB4DC"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    value: editing.code,
    onChange: function onChange(e) {
      return upd("code", e.target.value);
    },
    placeholder: "UB-FSF2"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC774\uB984"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    value: editing.name,
    onChange: function onChange(e) {
      return upd("name", e.target.value);
    },
    placeholder: "FaceStation F2"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC0C1\uD0DC"), /*#__PURE__*/React.createElement("select", {
    className: "ub-input",
    value: editing.status,
    onChange: function onChange(e) {
      return upd("status", e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "live"
  }, "\uD310\uB9E4\uC911"), /*#__PURE__*/React.createElement("option", {
    value: "sold_out"
  }, "\uC7AC\uACE0\uC5C6\uC74C"), /*#__PURE__*/React.createElement("option", {
    value: "soon"
  }, "\uCD9C\uC2DC\uC608\uC815"), /*#__PURE__*/React.createElement("option", {
    value: "hidden"
  }, "\uC228\uAE40"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uAC00\uACA9 (\u20A9)"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    type: "number",
    value: editing.price,
    onChange: function onChange(e) {
      return upd("price", e.target.value);
    },
    placeholder: "89000"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uC815\uB82C \uC21C\uC11C"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    type: "number",
    value: editing.sort_order,
    onChange: function onChange(e) {
      return upd("sort_order", e.target.value);
    },
    placeholder: "100"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uC7AC\uC9C8 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)",
      fontWeight: 400
    }
  }, "(\uC2A4\uD399 \uD45C)")), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    value: editing.material,
    onChange: function onChange(e) {
      return upd("material", e.target.value);
    },
    placeholder: "PETG \xB7 \uBB34\uAD11 \uBE14\uB799"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uC124\uCE58 \uD658\uACBD \uD638\uD658 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)",
      fontWeight: 400
    }
  }, "(\uC27C\uD45C\uB85C \uAD6C\uBD84 \xB7 \uC0C1\uC138 \uD398\uC774\uC9C0 \u2713 \uD0DC\uADF8\uB85C \uB178\uCD9C)")), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    value: editing.compat_tags,
    onChange: function onChange(e) {
      return upd("compat_tags", e.target.value);
    },
    placeholder: "\uC720\uB9AC, \uCF58\uD06C\uB9AC\uD2B8, \uC11D\uACE0"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uD55C \uC904 \uC124\uBA85"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    value: editing.description,
    onChange: function onChange(e) {
      return upd("description", e.target.value);
    },
    placeholder: "\uC548\uBA74\uC778\uC2DD + \uCE74\uB4DC + \uC9C0\uBB38"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uC81C\uD488 \uC124\uBA85 \uBCF8\uBB38 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)",
      fontWeight: 400
    }
  }, "(\uC0C1\uC138 \uD398\uC774\uC9C0 \"\uC81C\uD488 \uC124\uBA85\" \uD0ED\uC5D0 \uD45C\uC2DC \xB7 \uC904\uBC14\uAFC8 \uADF8\uB300\uB85C \uB178\uCD9C)")), /*#__PURE__*/React.createElement("textarea", {
    className: "ub-input",
    rows: 8,
    value: editing.long_description,
    onChange: function onChange(e) {
      return upd("long_description", e.target.value);
    },
    placeholder: "전용으로 설계된 브라켓으로\n후면 형상과 정확히 맞아 유격 없이 장착됩니다.\n동봉된 M3 볼트·너트로\n유리·콘크리트·석고벽 등\n다양한 환경에 설치할 수 있습니다.",
    style: {
      width: "100%",
      fontFamily: "var(--font-sans)",
      lineHeight: 1.6,
      resize: "vertical"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uC81C\uD488 \uC0AC\uC9C4 (\uC5C6\uC73C\uBA74 SVG \uC77C\uB7EC\uC2A4\uD2B8\uB85C \uD45C\uC2DC)"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "prod-image-upload",
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      setDragOver(true);
    },
    onDragLeave: function onDragLeave() {
      return setDragOver(false);
    },
    onDrop: onDrop,
    style: {
      display: "block",
      cursor: uploadBusy ? "wait" : "pointer",
      padding: 18,
      borderRadius: 10,
      textAlign: "center",
      border: "2px dashed ".concat(dragOver ? "var(--cyan-400)" : "var(--line-strong)"),
      background: dragOver ? "rgba(46,124,246,0.06)" : "rgba(255,255,255,0.02)",
      transition: "all 0.15s"
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: "prod-image-upload",
    type: "file",
    accept: "image/*",
    onChange: function onChange(e) {
      var f = e.target.files && e.target.files[0];
      if (f) uploadImage(f);
      e.target.value = "";
    },
    style: {
      display: "none"
    }
  }), uploadBusy ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--cyan-400)"
    }
  }, "\uC5C5\uB85C\uB4DC \uC911\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gray-200)",
      fontWeight: 600
    }
  }, "\uD074\uB9AD\uD558\uAC70\uB098 \uC0AC\uC9C4\uC744 \uC5EC\uAE30\uB85C \uB4DC\uB798\uADF8"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginTop: 4
    }
  }, "JPG \xB7 PNG \xB7 WebP \xB7 SVG \xB7 GIF \xB7 \uCD5C\uB300 20MB"))), uploadErr && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: "8px 10px",
      borderRadius: 6,
      fontSize: 12,
      color: "var(--warning, #FBBF24)",
      background: "rgba(251,191,36,0.08)",
      border: "1px solid rgba(251,191,36,0.3)"
    }
  }, "\uC5C5\uB85C\uB4DC \uC2E4\uD328: ", uploadErr), editing.image_url && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      border: "1px solid var(--line)",
      borderRadius: 8,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 10px",
      fontSize: 10,
      color: "var(--gray-400)",
      borderBottom: "1px solid var(--line)",
      fontFamily: "var(--font-mono)"
    }
  }, "\uACE0\uAC1D \uD654\uBA74 \uBBF8\uB9AC\uBCF4\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.02)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      aspectRatio: "3 / 4",
      maxHeight: 320,
      overflow: "hidden",
      padding: 12,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: editing.image_url,
    alt: "preview",
    style: {
      maxWidth: "100%",
      maxHeight: "100%",
      width: "auto",
      height: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return upd("image_url", "");
    },
    style: {
      position: "absolute",
      top: 6,
      right: 6,
      padding: "3px 8px",
      fontSize: 10,
      background: "rgba(10,22,40,0.85)",
      color: "var(--gray-200)",
      border: "1px solid var(--line-strong)",
      borderRadius: 4,
      cursor: "pointer"
    }
  }, "\uC0AD\uC81C")), /*#__PURE__*/React.createElement("details", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      cursor: "pointer"
    }
  }, "\uC678\uBD80 URL \uC9C1\uC811 \uC785\uB825"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    value: editing.image_url,
    onChange: function onChange(e) {
      return upd("image_url", e.target.value);
    },
    placeholder: "https://...",
    style: {
      marginTop: 6
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 6
    }
  }, "\uCE58\uC218 (mm) / \uBB34\uAC8C (g)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    type: "number",
    value: (_editing$w = editing.w) !== null && _editing$w !== void 0 ? _editing$w : "",
    onChange: function onChange(e) {
      return upd("w", e.target.value);
    },
    placeholder: "W"
  }), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    type: "number",
    value: (_editing$h = editing.h) !== null && _editing$h !== void 0 ? _editing$h : "",
    onChange: function onChange(e) {
      return upd("h", e.target.value);
    },
    placeholder: "H"
  }), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    type: "number",
    value: (_editing$d = editing.d) !== null && _editing$d !== void 0 ? _editing$d : "",
    onChange: function onChange(e) {
      return upd("d", e.target.value);
    },
    placeholder: "D"
  }), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    type: "number",
    value: (_editing$weight = editing.weight) !== null && _editing$weight !== void 0 ? _editing$weight : "",
    onChange: function onChange(e) {
      return upd("weight", e.target.value);
    },
    placeholder: "g"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-footer",
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn5, {
    variant: "ghost",
    size: "lg",
    onClick: cancel
  }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement(Btn5, {
    variant: "primary",
    size: "lg",
    full: true,
    onClick: save,
    disabled: busy
  }, busy ? "저장 중…" : /*#__PURE__*/React.createElement(React.Fragment, null, "\uC800\uC7A5 ", Ic5.arrow))))));
};

// ─── INSTALL CASES TAB ───────────────────────────────────────────────────────
// 설치 사례 CRUD — install_cases 테이블, 사진은 product-images 버킷 공용 사용
var CASE_BLANK = {
  id: null,
  caption: "",
  description: "",
  image_url: "",
  sort_order: 100
};
var CasesTab = function CasesTab() {
  var _uS53 = uS5([]),
    _uS54 = _slicedToArray(_uS53, 2),
    rows = _uS54[0],
    setRows = _uS54[1];
  var _uS55 = uS5(true),
    _uS56 = _slicedToArray(_uS55, 2),
    loading = _uS56[0],
    setLoading = _uS56[1];
  var _uS57 = uS5(null),
    _uS58 = _slicedToArray(_uS57, 2),
    error = _uS58[0],
    setError = _uS58[1];
  var _uS59 = uS5(null),
    _uS60 = _slicedToArray(_uS59, 2),
    editing = _uS60[0],
    setEditing = _uS60[1];
  var _uS61 = uS5(false),
    _uS62 = _slicedToArray(_uS61, 2),
    busy = _uS62[0],
    setBusy = _uS62[1];
  var _uS63 = uS5(false),
    _uS64 = _slicedToArray(_uS63, 2),
    uploadBusy = _uS64[0],
    setUploadBusy = _uS64[1];
  var _uS65 = uS5(null),
    _uS66 = _slicedToArray(_uS65, 2),
    uploadErr = _uS66[0],
    setUploadErr = _uS66[1];
  var _uS67 = uS5(false),
    _uS68 = _slicedToArray(_uS67, 2),
    dragOver = _uS68[0],
    setDragOver = _uS68[1];
  var reload = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var sb, data, _t10;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            sb = window.SUPABASE;
            if (sb) {
              _context10.n = 1;
              break;
            }
            setLoading(false);
            setError("Supabase 미초기화");
            return _context10.a(2);
          case 1:
            setLoading(true);
            setError(null);
            _context10.p = 2;
            _context10.n = 3;
            return adminApi("admin_list_install_cases", {});
          case 3:
            data = _context10.v;
            setRows(data || []);
            _context10.n = 5;
            break;
          case 4:
            _context10.p = 4;
            _t10 = _context10.v;
            setError((_t10 === null || _t10 === void 0 ? void 0 : _t10.message) || String(_t10));
            setRows([]);
          case 5:
            _context10.p = 5;
            setLoading(false);
            return _context10.f(5);
          case 6:
            return _context10.a(2);
        }
      }, _callee1, null, [[2, 4, 5, 6]]);
    }));
    return function reload() {
      return _ref13.apply(this, arguments);
    };
  }();
  uE5(function () {
    reload();
  }, []);
  var filtered = rows;
  var startNew = function startNew() {
    setUploadErr(null);
    setEditing(_objectSpread({}, CASE_BLANK));
  };
  var startEdit = function startEdit(r) {
    setUploadErr(null);
    setEditing({
      id: r.id,
      caption: r.caption,
      description: r.description || "",
      image_url: r.image_url || "",
      sort_order: r.sort_order
    });
  };
  var cancel = function cancel() {
    setUploadErr(null);
    setEditing(null);
  };
  var upd = function upd(k, v) {
    return setEditing(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };
  var uploadImage = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(file) {
      var sb, ext, filename, _yield$sb$storage$fro2, upErr, _sb$storage$from$getP2, data, publicUrl, _t11;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (file) {
              _context11.n = 1;
              break;
            }
            return _context11.a(2);
          case 1:
            if (!(!file.type || !file.type.startsWith("image/"))) {
              _context11.n = 2;
              break;
            }
            setUploadErr("이미지 파일만 업로드 가능합니다.");
            return _context11.a(2);
          case 2:
            if (!(file.size > 20 * 1024 * 1024)) {
              _context11.n = 3;
              break;
            }
            setUploadErr("20MB 이하 파일만 업로드 가능합니다.");
            return _context11.a(2);
          case 3:
            sb = window.SUPABASE;
            if (sb) {
              _context11.n = 4;
              break;
            }
            setUploadErr("Supabase 미초기화");
            return _context11.a(2);
          case 4:
            setUploadBusy(true);
            setUploadErr(null);
            _context11.p = 5;
            _context11.n = 6;
            return resizeImageForUpload(file, 1600, 0.86);
          case 6:
            file = _context11.v;
            // 웹 표시 크기로 축소 후 업로드
            ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
            filename = "case_".concat(Date.now(), ".").concat(ext || "jpg");
            _context11.n = 7;
            return sb.storage.from("product-images").upload(filename, file, {
              upsert: false,
              cacheControl: "3600",
              contentType: file.type
            });
          case 7:
            _yield$sb$storage$fro2 = _context11.v;
            upErr = _yield$sb$storage$fro2.error;
            if (!upErr) {
              _context11.n = 8;
              break;
            }
            throw upErr;
          case 8:
            _sb$storage$from$getP2 = sb.storage.from("product-images").getPublicUrl(filename), data = _sb$storage$from$getP2.data;
            publicUrl = data && data.publicUrl;
            if (publicUrl) {
              _context11.n = 9;
              break;
            }
            throw new Error("public URL 발급 실패");
          case 9:
            upd("image_url", publicUrl);
            _context11.n = 11;
            break;
          case 10:
            _context11.p = 10;
            _t11 = _context11.v;
            setUploadErr((_t11 === null || _t11 === void 0 ? void 0 : _t11.message) || String(_t11));
          case 11:
            _context11.p = 11;
            setUploadBusy(false);
            return _context11.f(11);
          case 12:
            return _context11.a(2);
        }
      }, _callee10, null, [[5, 10, 11, 12]]);
    }));
    return function uploadImage(_x8) {
      return _ref14.apply(this, arguments);
    };
  }();
  var onDrop = function onDrop(e) {
    e.preventDefault();
    setDragOver(false);
    var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) uploadImage(f);
  };
  var save = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var sb, _t12;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            if (editing) {
              _context12.n = 1;
              break;
            }
            return _context12.a(2);
          case 1:
            if (editing.caption) {
              _context12.n = 2;
              break;
            }
            alert("제목은 필수입니다.");
            return _context12.a(2);
          case 2:
            sb = window.SUPABASE;
            if (sb) {
              _context12.n = 3;
              break;
            }
            return _context12.a(2);
          case 3:
            setBusy(true);
            _context12.p = 4;
            _context12.n = 5;
            return adminApi("admin_upsert_install_case", {
              p_id: editing.id || null,
              p_wall_type: null,
              p_caption: editing.caption,
              p_description: editing.description || null,
              p_image_url: editing.image_url || null,
              p_sort_order: Number(editing.sort_order) || 100
            });
          case 5:
            setEditing(null);
            _context12.n = 6;
            return reload();
          case 6:
            _context12.n = 8;
            break;
          case 7:
            _context12.p = 7;
            _t12 = _context12.v;
            alert("저장 실패: " + ((_t12 === null || _t12 === void 0 ? void 0 : _t12.message) || _t12));
          case 8:
            _context12.p = 8;
            setBusy(false);
            return _context12.f(8);
          case 9:
            return _context12.a(2);
        }
      }, _callee11, null, [[4, 7, 8, 9]]);
    }));
    return function save() {
      return _ref15.apply(this, arguments);
    };
  }();
  var remove = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(r) {
      var sb, _t13;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (confirm("\"".concat(r.caption, "\" \uC0AC\uB840\uB97C \uC0AD\uC81C\uD560\uAE4C\uC694?"))) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            sb = window.SUPABASE;
            if (sb) {
              _context13.n = 2;
              break;
            }
            return _context13.a(2);
          case 2:
            _context13.p = 2;
            _context13.n = 3;
            return adminApi("admin_delete_install_case", {
              p_id: r.id
            });
          case 3:
            _context13.n = 4;
            return reload();
          case 4:
            _context13.n = 6;
            break;
          case 5:
            _context13.p = 5;
            _t13 = _context13.v;
            alert("삭제 실패: " + ((_t13 === null || _t13 === void 0 ? void 0 : _t13.message) || _t13));
          case 6:
            return _context13.a(2);
        }
      }, _callee12, null, [[2, 5]]);
    }));
    return function remove(_x9) {
      return _ref16.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 14,
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginBottom: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 12,
      color: "var(--gray-400)"
    }
  }, "\uCD1D ", rows.length, "\uAC74\uC758 \uC124\uCE58 \uC0AC\uB840"), /*#__PURE__*/React.createElement(Btn5, {
    variant: "ghost",
    onClick: reload
  }, "\uC0C8\uB85C\uACE0\uCE68"), /*#__PURE__*/React.createElement(Btn5, {
    variant: "primary",
    onClick: startNew
  }, "+ \uC0C8 \uC0AC\uB840 ", Ic5.arrow)), error && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14,
      padding: "10px 14px",
      borderRadius: 8,
      background: "rgba(251,191,36,0.08)",
      border: "1px solid rgba(251,191,36,0.3)",
      color: "var(--warning, #FBBF24)",
      fontSize: 12
    }
  }, "\uC124\uCE58 \uC0AC\uB840\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: ", error, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      color: "var(--gray-400)",
      fontSize: 11
    }
  }, "Supabase\uC5D0\uC11C install_cases.sql \uC744 \uC2E4\uD589\uD588\uB294\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 14
    }
  }, loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: "center",
      color: "var(--gray-400)"
    }
  }, "\uBD88\uB7EC\uC624\uB294 \uC911\u2026") : filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: "center",
      color: "var(--gray-400)"
    }
  }, rows.length === 0 ? "등록된 사례가 없습니다" : "필터에 일치하는 사례가 없습니다") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      gap: 14
    }
  }, filtered.map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        border: "1px solid var(--line)",
        borderRadius: 10,
        padding: 10,
        background: "rgba(255,255,255,0.02)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "1 / 1",
        borderRadius: 6,
        border: "1px solid var(--line)",
        overflow: "hidden",
        background: "var(--navy-900)",
        marginBottom: 8,
        display: "grid",
        placeItems: "center"
      }
    }, r.image_url ? /*#__PURE__*/React.createElement("img", {
      src: r.image_url,
      alt: r.caption,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        padding: 6
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--gray-500, #6B7280)",
        fontFamily: "var(--font-mono)"
      }
    }, "NO IMAGE")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "var(--cyan-400)",
        fontFamily: "var(--font-mono)",
        marginBottom: 4
      }
    }, "#", r.sort_order), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--white)",
        fontWeight: 600,
        marginBottom: 4,
        lineHeight: 1.4
      }
    }, r.caption), r.description && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--gray-300)",
        marginBottom: 8,
        lineHeight: 1.5,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      }
    }, r.description), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return startEdit(r);
      },
      style: {
        flex: 1,
        background: "rgba(46,124,246,0.10)",
        border: "1px solid var(--cyan-400)",
        color: "var(--cyan-400)",
        padding: "5px 0",
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 600,
        cursor: "pointer"
      }
    }, "\uC218\uC815"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return remove(r);
      },
      style: {
        flex: 1,
        background: "transparent",
        border: "1px solid var(--line-strong)",
        color: "var(--gray-300)",
        padding: "5px 0",
        borderRadius: 6,
        fontSize: 11,
        cursor: "pointer"
      }
    }, "\uC0AD\uC81C")));
  }))), editing && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-overlay is-open"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-panel is-open",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-400)"
    }
  }, "INSTALL CASE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "var(--white)",
      marginTop: 2
    }
  }, editing.id ? "사례 수정" : "새 사례 추가")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: cancel,
    className: "ub-drawer-iconbtn",
    "aria-label": "\uB2EB\uAE30"
  }, Ic5.x)), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-body",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC81C\uBAA9 (\uD55C \uC904)"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    value: editing.caption,
    onChange: function onChange(e) {
      return upd("caption", e.target.value);
    },
    placeholder: "\uC608: \uAC15\uD654\uC720\uB9AC 10mm \xB7 FaceStation F2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uC124\uBA85 (\uC120\uD0DD, \uC790\uC720 \uC785\uB825)"), /*#__PURE__*/React.createElement("textarea", {
    className: "ub-input",
    rows: 4,
    value: editing.description,
    onChange: function onChange(e) {
      return upd("description", e.target.value);
    },
    placeholder: "\uC774 \uD604\uC7A5\uC5D0 \uB300\uD55C \uC9E7\uC740 \uC124\uBA85\uC744 \uC790\uC720\uB86D\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694. \uC608: \uC11C\uC6B8 \uAC15\uB0A8 \uC0AC\uBB34\uC2E4 \uCD9C\uC785\uAD6C. \uAC15\uD654\uC720\uB9AC 10mm \uC5D0 \uC591\uBA74\uD14C\uC774\uD504 + \uCF00\uC774\uBE14 \uB0B4\uC7A5 \uC2DC\uACF5. 1\uC778 10\uBD84 \uC791\uC5C5.",
    style: {
      resize: "vertical",
      lineHeight: 1.5
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uC815\uB82C \uC21C\uC11C"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    type: "number",
    value: editing.sort_order,
    onChange: function onChange(e) {
      return upd("sort_order", e.target.value);
    },
    placeholder: "100"
  })), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uC0AC\uC9C4"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "case-image-upload",
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      setDragOver(true);
    },
    onDragLeave: function onDragLeave() {
      return setDragOver(false);
    },
    onDrop: onDrop,
    style: {
      display: "block",
      cursor: uploadBusy ? "wait" : "pointer",
      padding: 18,
      borderRadius: 10,
      textAlign: "center",
      border: "2px dashed ".concat(dragOver ? "var(--cyan-400)" : "var(--line-strong)"),
      background: dragOver ? "rgba(46,124,246,0.06)" : "rgba(255,255,255,0.02)",
      transition: "all 0.15s"
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: "case-image-upload",
    type: "file",
    accept: "image/*",
    onChange: function onChange(e) {
      var f = e.target.files && e.target.files[0];
      if (f) uploadImage(f);
      e.target.value = "";
    },
    style: {
      display: "none"
    }
  }), uploadBusy ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--cyan-400)"
    }
  }, "\uC5C5\uB85C\uB4DC \uC911\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gray-200)",
      fontWeight: 600
    }
  }, "\uD074\uB9AD\uD558\uAC70\uB098 \uC0AC\uC9C4\uC744 \uC5EC\uAE30\uB85C \uB4DC\uB798\uADF8"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginTop: 4
    }
  }, "JPG \xB7 PNG \xB7 WebP \xB7 SVG \xB7 GIF \xB7 \uCD5C\uB300 20MB"))), uploadErr && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: "8px 10px",
      borderRadius: 6,
      fontSize: 12,
      color: "var(--warning, #FBBF24)",
      background: "rgba(251,191,36,0.08)",
      border: "1px solid rgba(251,191,36,0.3)"
    }
  }, "\uC5C5\uB85C\uB4DC \uC2E4\uD328: ", uploadErr), editing.image_url && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      border: "1px solid var(--line)",
      borderRadius: 8,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 10px",
      fontSize: 10,
      color: "var(--gray-400)",
      borderBottom: "1px solid var(--line)",
      fontFamily: "var(--font-mono)"
    }
  }, "\uACE0\uAC1D \uD654\uBA74 \uBBF8\uB9AC\uBCF4\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.02)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      aspectRatio: "3 / 4",
      maxHeight: 320,
      overflow: "hidden",
      padding: 12,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: editing.image_url,
    alt: "preview",
    style: {
      maxWidth: "100%",
      maxHeight: "100%",
      width: "auto",
      height: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return upd("image_url", "");
    },
    style: {
      position: "absolute",
      top: 6,
      right: 6,
      padding: "3px 8px",
      fontSize: 10,
      background: "rgba(10,22,40,0.85)",
      color: "var(--gray-200)",
      border: "1px solid var(--line-strong)",
      borderRadius: 4,
      cursor: "pointer"
    }
  }, "\uC0AD\uC81C")))), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-footer",
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn5, {
    variant: "ghost",
    size: "lg",
    onClick: cancel
  }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement(Btn5, {
    variant: "primary",
    size: "lg",
    full: true,
    onClick: save,
    disabled: busy
  }, busy ? "저장 중…" : /*#__PURE__*/React.createElement(React.Fragment, null, "\uC800\uC7A5 ", Ic5.arrow))))));
};

// 게이트 wrapper — 인증 통과한 경우에만 실제 AdminPageInner 렌더
var AdminPage = function AdminPage() {
  var initial = function () {
    try {
      return sessionStorage.getItem(ADMIN_GATE_KEY) === "1";
    } catch (e) {
      return false;
    }
  }();
  var _uS69 = uS5(initial),
    _uS70 = _slicedToArray(_uS69, 2),
    authed = _uS70[0],
    setAuthed = _uS70[1];
  if (!authed) return /*#__PURE__*/React.createElement(AdminGate, {
    onPass: function onPass() {
      return setAuthed(true);
    }
  });
  return /*#__PURE__*/React.createElement(AdminPageInner, null);
};
window.UB.AdminPage = AdminPage;