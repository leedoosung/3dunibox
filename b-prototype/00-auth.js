"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// B안 — 페이지 0: 인증 (Supabase)
// Auth 흐름: 이메일+비밀번호 + (추후) 카카오 OAuth
// 전역 user 상태는 window.UB.useAuth() 로 사용

var _React = React,
  uS0 = _React.useState,
  uE0 = _React.useEffect;

// Supabase 클라이언트는 HTML에서 window.SUPABASE 로 주입됨
var sb = function sb() {
  return window.SUPABASE;
};

// ─── AuthProvider — 전역 user 상태 ─────────────────────────────────────────
// 단일 진실 공급원: window.__ub_auth (구독자 패턴)
var __auth = {
  user: null,
  ready: false,
  listeners: new Set(),
  notify: function notify() {
    var _this = this;
    this.listeners.forEach(function (fn) {
      return fn(_this.user, _this.ready);
    });
  },
  setUser: function setUser(u) {
    this.user = u || null;
    this.ready = true;
    this.notify();
  }
};
window.__ub_auth = __auth;

// 시작 시 Supabase 세션 로드
(function bootAuth() {
  var client = sb();
  if (!client) return;
  client.auth.getSession().then(function (_ref) {
    var _data$session;
    var data = _ref.data;
    __auth.setUser((data === null || data === void 0 || (_data$session = data.session) === null || _data$session === void 0 ? void 0 : _data$session.user) || null);
  })["catch"](function () {
    return __auth.setUser(null);
  });
  client.auth.onAuthStateChange(function (_event, session) {
    __auth.setUser((session === null || session === void 0 ? void 0 : session.user) || null);
  });
})();
var useAuth = function useAuth() {
  var _uS = uS0({
      user: __auth.user,
      ready: __auth.ready
    }),
    _uS2 = _slicedToArray(_uS, 2),
    state = _uS2[0],
    setState = _uS2[1];
  uE0(function () {
    var fn = function fn(user, ready) {
      return setState({
        user: user,
        ready: ready
      });
    };
    __auth.listeners.add(fn);
    return function () {
      return __auth.listeners["delete"](fn);
    };
  }, []);
  return state; // { user, ready }
};
var signOut = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var client;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          client = sb();
          if (client) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          _context.n = 2;
          return client.auth.signOut();
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function signOut() {
    return _ref2.apply(this, arguments);
  };
}();
var signInKakao = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var client, _yield$client$auth$si, error;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          client = sb();
          if (client) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2);
        case 1:
          _context2.n = 2;
          return client.auth.signInWithOAuth({
            provider: "kakao",
            options: {
              redirectTo: location.origin
            }
          });
        case 2:
          _yield$client$auth$si = _context2.v;
          error = _yield$client$auth$si.error;
          if (error) alert("카카오 로그인 오류: " + error.message);
        case 3:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return function signInKakao() {
    return _ref3.apply(this, arguments);
  };
}();

// ─── 공통 폼 스타일 ──────────────────────────────────────────────────────────
var authPageWrap = {
  minHeight: "calc(100vh - 60px)",
  display: "grid",
  placeItems: "center",
  padding: "40px 20px",
  background: "var(--navy-950)"
};
var authCard = {
  width: "min(420px, 100%)",
  background: "var(--navy-800)",
  border: "1px solid var(--line)",
  borderRadius: 16,
  padding: "32px 28px"
};

// ─── LOGIN PAGE ───────────────────────────────────────────────────────────────
var LoginPage = function LoginPage(_ref4) {
  var onNav = _ref4.onNav,
    onAfter = _ref4.onAfter;
  var _uS3 = uS0("login"),
    _uS4 = _slicedToArray(_uS3, 2),
    mode = _uS4[0],
    setMode = _uS4[1]; // login | signup
  var _uS5 = uS0(""),
    _uS6 = _slicedToArray(_uS5, 2),
    email = _uS6[0],
    setEmail = _uS6[1];
  var _uS7 = uS0(""),
    _uS8 = _slicedToArray(_uS7, 2),
    pw = _uS8[0],
    setPw = _uS8[1];
  // 회원가입 추가 필드
  var _uS9 = uS0(""),
    _uS0 = _slicedToArray(_uS9, 2),
    name = _uS0[0],
    setName = _uS0[1];
  var _uS1 = uS0(""),
    _uS10 = _slicedToArray(_uS1, 2),
    phone = _uS10[0],
    setPhone = _uS10[1];
  var _uS11 = uS0(""),
    _uS12 = _slicedToArray(_uS11, 2),
    zip = _uS12[0],
    setZip = _uS12[1];
  var _uS13 = uS0(""),
    _uS14 = _slicedToArray(_uS13, 2),
    addr1 = _uS14[0],
    setAddr1 = _uS14[1];
  var _uS15 = uS0(""),
    _uS16 = _slicedToArray(_uS15, 2),
    addr2 = _uS16[0],
    setAddr2 = _uS16[1];
  var _uS17 = uS0(false),
    _uS18 = _slicedToArray(_uS17, 2),
    agreePrivacy = _uS18[0],
    setAgreePrivacy = _uS18[1];
  var _uS19 = uS0(false),
    _uS20 = _slicedToArray(_uS19, 2),
    agreeTerms = _uS20[0],
    setAgreeTerms = _uS20[1];
  var _uS21 = uS0(false),
    _uS22 = _slicedToArray(_uS21, 2),
    busy = _uS22[0],
    setBusy = _uS22[1];
  var _uS23 = uS0(null),
    _uS24 = _slicedToArray(_uS23, 2),
    msg = _uS24[0],
    setMsg = _uS24[1];
  var submit = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var client, _yield$client$auth$si2, data, error, session, user, _yield$client$auth$si3, d2, e2, _yield$client$auth$si4, _error, m, ko, _t, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(!email || !pw)) {
              _context3.n = 1;
              break;
            }
            setMsg({
              type: "err",
              text: "이메일과 비밀번호를 입력해주세요."
            });
            return _context3.a(2);
          case 1:
            if (!(pw.length < 6)) {
              _context3.n = 2;
              break;
            }
            setMsg({
              type: "err",
              text: "비밀번호는 6자 이상이어야 합니다."
            });
            return _context3.a(2);
          case 2:
            if (!(mode === "signup")) {
              _context3.n = 4;
              break;
            }
            if (!(!name || !phone || !zip || !addr1 || !addr2)) {
              _context3.n = 3;
              break;
            }
            setMsg({
              type: "err",
              text: "이름·전화·주소를 모두 입력해주세요."
            });
            return _context3.a(2);
          case 3:
            if (!(!agreePrivacy || !agreeTerms)) {
              _context3.n = 4;
              break;
            }
            setMsg({
              type: "err",
              text: "필수 약관에 모두 동의해주세요."
            });
            return _context3.a(2);
          case 4:
            setBusy(true);
            setMsg(null);
            _context3.p = 5;
            client = sb();
            if (!(mode === "signup")) {
              _context3.n = 16;
              break;
            }
            _context3.n = 6;
            return client.auth.signUp({
              email: email,
              password: pw,
              options: {
                emailRedirectTo: location.origin,
                data: {
                  name: name,
                  phone: phone
                }
              }
            });
          case 6:
            _yield$client$auth$si2 = _context3.v;
            data = _yield$client$auth$si2.data;
            error = _yield$client$auth$si2.error;
            if (!error) {
              _context3.n = 7;
              break;
            }
            throw error;
          case 7:
            // session 확보 — 가입 즉시 발급 또는 즉시 로그인 시도
            session = data === null || data === void 0 ? void 0 : data.session;
            user = data === null || data === void 0 ? void 0 : data.user;
            if (session) {
              _context3.n = 10;
              break;
            }
            _context3.n = 8;
            return client.auth.signInWithPassword({
              email: email,
              password: pw
            });
          case 8:
            _yield$client$auth$si3 = _context3.v;
            d2 = _yield$client$auth$si3.data;
            e2 = _yield$client$auth$si3.error;
            if (!e2) {
              _context3.n = 9;
              break;
            }
            throw e2;
          case 9:
            session = d2 === null || d2 === void 0 ? void 0 : d2.session;
            user = d2 === null || d2 === void 0 ? void 0 : d2.user;
          case 10:
            if (!(!session || !user)) {
              _context3.n = 11;
              break;
            }
            setMsg({
              type: "ok",
              text: "확인 메일을 보냈어요. 메일의 링크를 눌러 인증을 완료해주세요."
            });
            return _context3.a(2);
          case 11:
            _context3.p = 11;
            _context3.n = 12;
            return client.from("profiles").upsert({
              id: user.id,
              name: name,
              phone: phone
            });
          case 12:
            _context3.n = 13;
            return client.from("addresses").insert({
              user_id: user.id,
              label: "기본",
              name: name,
              phone: phone,
              zip: zip,
              addr1: addr1,
              addr2: addr2,
              is_default: true
            });
          case 13:
            _context3.n = 15;
            break;
          case 14:
            _context3.p = 14;
            _t = _context3.v;
            console.warn("[signup] DB insert 실패:", _t);
            // DB 실패해도 가입 자체는 됐으니 진입은 허용
          case 15:
            setMsg({
              type: "ok",
              text: "회원가입 완료! 잠시만요…"
            });
            setTimeout(function () {
              return onAfter && onAfter();
            }, 400);
            _context3.n = 19;
            break;
          case 16:
            _context3.n = 17;
            return client.auth.signInWithPassword({
              email: email,
              password: pw
            });
          case 17:
            _yield$client$auth$si4 = _context3.v;
            _error = _yield$client$auth$si4.error;
            if (!_error) {
              _context3.n = 18;
              break;
            }
            throw _error;
          case 18:
            setMsg({
              type: "ok",
              text: "로그인 성공! 잠시만요…"
            });
            setTimeout(function () {
              return onAfter && onAfter();
            }, 300);
          case 19:
            _context3.n = 21;
            break;
          case 20:
            _context3.p = 20;
            _t2 = _context3.v;
            m = (_t2 === null || _t2 === void 0 ? void 0 : _t2.message) || String(_t2);
            ko = m.includes("Invalid login") ? "이메일 또는 비밀번호가 올바르지 않습니다." : m.includes("already registered") ? "이미 가입된 이메일입니다. 로그인해주세요." : m.includes("Email not confirmed") ? "이메일 인증이 완료되지 않았습니다. 받은 메일을 확인해주세요." : m;
            setMsg({
              type: "err",
              text: ko
            });
          case 21:
            _context3.p = 21;
            setBusy(false);
            return _context3.f(21);
          case 22:
            return _context3.a(2);
        }
      }, _callee3, null, [[11, 14], [5, 20, 21, 22]]);
    }));
    return function submit() {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    style: authPageWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: authCard
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 8
    }
  }, mode === "login" ? "LOGIN" : "SIGN UP"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2",
    style: {
      fontSize: 24,
      marginBottom: 6
    }
  }, mode === "login" ? "로그인" : "회원가입"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gray-400)",
      fontSize: 12,
      marginBottom: 20
    }
  }, mode === "login" ? "주문하시려면 로그인이 필요합니다." : "한 번 입력하면 다음 주문부터 자동으로 채워집니다."), /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC774\uBA54\uC77C"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    type: "email",
    autoComplete: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "name@example.com"
  }), /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req",
    style: {
      marginTop: 12
    }
  }, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    type: "password",
    autoComplete: mode === "login" ? "current-password" : "new-password",
    value: pw,
    onChange: function onChange(e) {
      return setPw(e.target.value);
    },
    placeholder: "6\uC790 \uC774\uC0C1",
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter" && mode === "login") submit();
    }
  }), mode === "signup" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req",
    style: {
      marginTop: 12
    }
  }, "\uC774\uB984"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    autoComplete: "name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "\uD64D\uAE38\uB3D9"
  }), /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req",
    style: {
      marginTop: 12
    }
  }, "\uC804\uD654\uBC88\uD638"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    autoComplete: "tel",
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    },
    placeholder: "010-0000-0000"
  }), /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req",
    style: {
      marginTop: 12
    }
  }, "\uC6B0\uD3B8\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    autoComplete: "postal-code",
    value: zip,
    onChange: function onChange(e) {
      return setZip(e.target.value);
    },
    placeholder: "00000",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return window.UB.openPostcode(function (_ref6) {
        var z = _ref6.zip,
          a1 = _ref6.addr1;
        setZip(z);
        setAddr1(a1);
        setTimeout(function () {
          var el = document.querySelector('input[autocomplete="address-line2"]');
          if (el) el.focus();
        }, 0);
      });
    },
    style: {
      padding: "0 14px",
      background: "transparent",
      border: "1px solid var(--line-strong)",
      borderRadius: 8,
      color: "var(--gray-200)",
      fontSize: 12,
      cursor: "pointer"
    }
  }, "\uAC80\uC0C9")), /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req",
    style: {
      marginTop: 12
    }
  }, "\uC8FC\uC18C"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    autoComplete: "address-line1",
    value: addr1,
    onChange: function onChange(e) {
      return setAddr1(e.target.value);
    },
    placeholder: "\uAE30\uBCF8 \uC8FC\uC18C",
    style: {
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    autoComplete: "address-line2",
    value: addr2,
    onChange: function onChange(e) {
      return setAddr2(e.target.value);
    },
    placeholder: "\uC0C1\uC138 \uC8FC\uC18C (\uB3D9\xB7\uD638\uC218 \uB4F1)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: 12,
      border: "1px solid var(--line-strong)",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      fontSize: 12.5,
      color: "var(--gray-100)",
      cursor: "pointer",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: agreePrivacy,
    onChange: function onChange(e) {
      return setAgreePrivacy(e.target.checked);
    },
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "[\uD544\uC218]"), " \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.", " ", /*#__PURE__*/React.createElement("a", {
    href: "/privacy",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--cyan-400)",
      textDecoration: "underline"
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, "\uC804\uBB38\uBCF4\uAE30"))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      fontSize: 12.5,
      color: "var(--gray-100)",
      cursor: "pointer",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: agreeTerms,
    onChange: function onChange(e) {
      return setAgreeTerms(e.target.checked);
    },
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "[\uD544\uC218]"), " \uC774\uC6A9\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.", " ", /*#__PURE__*/React.createElement("a", {
    href: "/terms",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--cyan-400)",
      textDecoration: "underline"
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, "\uC804\uBB38\uBCF4\uAE30"))))), msg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: "10px 12px",
      borderRadius: 8,
      fontSize: 12,
      lineHeight: 1.5,
      color: msg.type === "ok" ? "var(--success)" : "var(--warning, #FBBF24)",
      background: msg.type === "ok" ? "rgba(74,222,128,0.08)" : "rgba(251,191,36,0.08)",
      border: "1px solid ".concat(msg.type === "ok" ? "rgba(74,222,128,0.3)" : "rgba(251,191,36,0.3)")
    }
  }, msg.text), /*#__PURE__*/React.createElement("button", {
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
      opacity: busy ? 0.6 : 1
    }
  }, busy ? "처리 중…" : mode === "login" ? "로그인" : "회원가입"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      textAlign: "center",
      fontSize: 12,
      color: "var(--gray-300)"
    }
  }, mode === "login" ? /*#__PURE__*/React.createElement(React.Fragment, null, "\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694? ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      setMode("signup");
      setMsg(null);
    },
    style: {
      background: "transparent",
      border: 0,
      color: "var(--cyan-400)",
      cursor: "pointer",
      fontWeight: 600,
      padding: 0
    }
  }, "\uD68C\uC6D0\uAC00\uC785")) : /*#__PURE__*/React.createElement(React.Fragment, null, "\uC774\uBBF8 \uD68C\uC6D0\uC774\uC2E0\uAC00\uC694? ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      setMode("login");
      setMsg(null);
    },
    style: {
      background: "transparent",
      border: 0,
      color: "var(--cyan-400)",
      cursor: "pointer",
      fontWeight: 600,
      padding: 0
    }
  }, "\uB85C\uADF8\uC778"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      fontSize: 11,
      color: "var(--gray-500)",
      textAlign: "center",
      lineHeight: 1.6
    }
  }, "\uAC00\uC785 \uC2DC ", /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "underline"
    }
  }, "\uC774\uC6A9\uC57D\uAD00"), " \uBC0F ", /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "underline"
    }
  }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"), "\uC5D0 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uB429\uB2C8\uB2E4.")));
};
window.UB = window.UB || {};
window.UB.useAuth = useAuth;
window.UB.signOut = signOut;
window.UB.signInKakao = signInKakao;
window.UB.LoginPage = LoginPage;