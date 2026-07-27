"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
// B안 — 페이지 5: 마이페이지 (#me)
// 인증 도입 전 — localStorage 기반 임시 저장. 추후 회원 API 연동.
var _React = React,
  uS6 = _React.useState,
  uE6 = _React.useEffect;
var _window$UB = window.UB,
  MODELS6 = _window$UB.MODELS,
  Ic6 = _window$UB.Ic,
  Btn6 = _window$UB.Btn,
  calcShip6 = _window$UB.calcShip,
  loadMe = _window$UB.loadMe,
  saveMe = _window$UB.saveMe,
  useIsMobile6 = _window$UB.useIsMobile;

// 빈 게스트 셸
var EMPTY_ME = {
  name: "",
  phone: "",
  email: "",
  addresses: []
};

// 정식 오픈 전 데이터 — 첫 주문 시 마이페이지에 자동 누적됨
// 주문 이력은 추후 Supabase orders 테이블에서 fetch (Phase 다음)

var STATUS_TINT = {
  "결제완료": "#2E7CF6",
  "제작중": "#FBBF24",
  "배송중": "#A78BFA",
  "완료": "#4ADE80",
  "취소": "#9CA3AF"
};
var MyPage = function MyPage() {
  var isMobile = useIsMobile6(1024);
  var _uS = uS6("info"),
    _uS2 = _slicedToArray(_uS, 2),
    tab = _uS2[0],
    setTab = _uS2[1];
  var _uS3 = uS6(EMPTY_ME),
    _uS4 = _slicedToArray(_uS3, 2),
    me = _uS4[0],
    setMe = _uS4[1];
  var _uS5 = uS6(null),
    _uS6 = _slicedToArray(_uS5, 2),
    editing = _uS6[0],
    setEditing = _uS6[1];
  var _uS7 = uS6(null),
    _uS8 = _slicedToArray(_uS7, 2),
    draft = _uS8[0],
    setDraft = _uS8[1];
  var _uS9 = uS6(false),
    _uS0 = _slicedToArray(_uS9, 2),
    loaded = _uS0[0],
    setLoaded = _uS0[1];
  var auth = window.UB.useAuth ? window.UB.useAuth() : {
    user: null
  };
  var authUser = auth.user;

  // 로그인 사용자가 바뀌면 Supabase에서 profiles + addresses 다시 fetch
  uE6(function () {
    var cancelled = false;
    setLoaded(false);
    if (!authUser) {
      setMe(EMPTY_ME);
      setLoaded(true);
      return;
    }
    var sb = window.SUPABASE;
    if (!sb) {
      setLoaded(true);
      return;
    }
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, pf, ad, profile, addresses, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return Promise.all([sb.from("profiles").select("name,phone").eq("id", authUser.id).maybeSingle(), sb.from("addresses").select("*").eq("user_id", authUser.id).order("created_at", {
              ascending: true
            })]);
          case 1:
            _yield$Promise$all = _context.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            pf = _yield$Promise$all2[0];
            ad = _yield$Promise$all2[1];
            if (!cancelled) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            profile = pf.data || {};
            addresses = (ad.data || []).map(function (a) {
              return {
                id: a.id,
                label: a.label,
                name: a.name,
                phone: a.phone,
                zip: a.zip,
                addr1: a.addr1,
                addr2: a.addr2,
                isDefault: a.is_default
              };
            });
            setMe({
              name: profile.name || "",
              phone: profile.phone || "",
              email: authUser.email || "",
              addresses: addresses
            });
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.warn("[mypage] fetch 실패:", _t);
          case 4:
            _context.p = 4;
            if (!cancelled) setLoaded(true);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3, 4, 5]]);
    }))();
    return function () {
      cancelled = true;
    };
  }, [authUser === null || authUser === void 0 ? void 0 : authUser.id]);

  // 명시적 저장 버튼으로만 저장 — 자동 저장 없음
  var _uS1 = uS6(false),
    _uS10 = _slicedToArray(_uS1, 2),
    saving = _uS10[0],
    setSaving = _uS10[1];
  var _uS11 = uS6(false),
    _uS12 = _slicedToArray(_uS11, 2),
    savedToast = _uS12[0],
    setSavedToast = _uS12[1];
  var saveProfile = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var sb, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (authUser) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            sb = window.SUPABASE;
            if (sb) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2);
          case 2:
            setSaving(true);
            _context2.p = 3;
            _context2.n = 4;
            return sb.from("profiles").upsert({
              id: authUser.id,
              name: me.name || null,
              phone: me.phone || null
            });
          case 4:
            setSavedToast(true);
            setTimeout(function () {
              return setSavedToast(false);
            }, 1800);
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
            alert("저장 실패: " + (_t2.message || _t2));
          case 6:
            _context2.p = 6;
            setSaving(false);
            return _context2.f(6);
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 5, 6, 7]]);
    }));
    return function saveProfile() {
      return _ref2.apply(this, arguments);
    };
  }();
  var clear = function clear() {
    if (confirm("내 정보를 모두 비우시겠어요?")) setMe(EMPTY_ME);
  };
  var updMe = function updMe(k, v) {
    return setMe(function (m) {
      return _objectSpread(_objectSpread({}, m), {}, _defineProperty({}, k, v));
    });
  };
  var startNew = function startNew() {
    setDraft({
      id: "a_".concat(Date.now()),
      label: "",
      name: me.name,
      phone: me.phone,
      zip: "",
      addr1: "",
      addr2: "",
      isDefault: (me.addresses || []).length === 0
    });
    setEditing("new");
  };
  var startEdit = function startEdit(a) {
    setDraft(_objectSpread({}, a));
    setEditing(a.id);
  };
  var cancelEdit = function cancelEdit() {
    setDraft(null);
    setEditing(null);
  };
  var saveDraft = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var sb, isNew, payload, saved, _yield$sb$from$insert, data, error, _yield$sb$from$update, _data, _error, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(!draft || !draft.label || !draft.name || !draft.phone || !draft.zip || !draft.addr1)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            sb = window.SUPABASE;
            if (!(!authUser || !sb)) {
              _context3.n = 2;
              break;
            }
            cancelEdit();
            return _context3.a(2);
          case 2:
            isNew = String(draft.id).startsWith("a_");
            payload = {
              user_id: authUser.id,
              label: draft.label,
              name: draft.name,
              phone: draft.phone,
              zip: draft.zip,
              addr1: draft.addr1,
              addr2: draft.addr2 || "",
              is_default: !!draft.isDefault
            };
            _context3.p = 3;
            if (!isNew) {
              _context3.n = 6;
              break;
            }
            _context3.n = 4;
            return sb.from("addresses").insert(payload).select().single();
          case 4:
            _yield$sb$from$insert = _context3.v;
            data = _yield$sb$from$insert.data;
            error = _yield$sb$from$insert.error;
            if (!error) {
              _context3.n = 5;
              break;
            }
            throw error;
          case 5:
            saved = data;
            _context3.n = 9;
            break;
          case 6:
            _context3.n = 7;
            return sb.from("addresses").update(payload).eq("id", draft.id).select().single();
          case 7:
            _yield$sb$from$update = _context3.v;
            _data = _yield$sb$from$update.data;
            _error = _yield$sb$from$update.error;
            if (!_error) {
              _context3.n = 8;
              break;
            }
            throw _error;
          case 8:
            saved = _data;
          case 9:
            // 로컬 state 갱신
            setMe(function (m) {
              var addresses = _toConsumableArray(m.addresses || []);
              if (saved.is_default) addresses.forEach(function (a) {
                a.isDefault = false;
              });
              var next = {
                id: saved.id,
                label: saved.label,
                name: saved.name,
                phone: saved.phone,
                zip: saved.zip,
                addr1: saved.addr1,
                addr2: saved.addr2,
                isDefault: saved.is_default
              };
              var idx = addresses.findIndex(function (a) {
                return a.id === saved.id;
              });
              if (idx >= 0) addresses[idx] = next;else addresses.push(next);
              return _objectSpread(_objectSpread({}, m), {}, {
                addresses: addresses
              });
            });
            _context3.n = 11;
            break;
          case 10:
            _context3.p = 10;
            _t3 = _context3.v;
            alert("주소 저장 실패: " + (_t3.message || _t3));
          case 11:
            cancelEdit();
          case 12:
            return _context3.a(2);
        }
      }, _callee3, null, [[3, 10]]);
    }));
    return function saveDraft() {
      return _ref3.apply(this, arguments);
    };
  }();
  var removeAddr = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id) {
      var sb, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (confirm("이 주소를 삭제할까요?")) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            sb = window.SUPABASE;
            if (!(sb && authUser)) {
              _context4.n = 5;
              break;
            }
            _context4.p = 2;
            _context4.n = 3;
            return sb.from("addresses")["delete"]().eq("id", id);
          case 3:
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            alert("삭제 실패: " + (_t4.message || _t4));
            return _context4.a(2);
          case 5:
            setMe(function (m) {
              return _objectSpread(_objectSpread({}, m), {}, {
                addresses: m.addresses.filter(function (a) {
                  return a.id !== id;
                })
              });
            });
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4]]);
    }));
    return function removeAddr(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var setDefault = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id) {
      var sb, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            sb = window.SUPABASE;
            if (!(sb && authUser)) {
              _context5.n = 4;
              break;
            }
            _context5.p = 1;
            _context5.n = 2;
            return sb.from("addresses").update({
              is_default: true
            }).eq("id", id);
          case 2:
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t5 = _context5.v;
            alert("기본 설정 실패: " + (_t5.message || _t5));
            return _context5.a(2);
          case 4:
            setMe(function (m) {
              return _objectSpread(_objectSpread({}, m), {}, {
                addresses: m.addresses.map(function (a) {
                  return _objectSpread(_objectSpread({}, a), {}, {
                    isDefault: a.id === id
                  });
                })
              });
            });
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return function setDefault(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  var hasInfo = me.name || me.phone || me.email;
  var orders = me.history || [];
  var TABS = [{
    id: "info",
    label: "내 정보"
  }, {
    id: "history",
    label: "주문 이력"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "calc(100vh - 60px)",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
      background: "var(--navy-950)"
    }
  }, isMobile ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--line)",
      background: "var(--navy-900)",
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 6
    }
  }, "MY PAGE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: "var(--white)",
      marginBottom: 12
    }
  }, hasInfo ? me.name || "이름 없음" : "게스트", hasInfo && /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginLeft: 10,
      fontWeight: 400
    }
  }, me.email || me.phone)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 6,
      overflowX: "auto",
      paddingBottom: 4
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
  }))) : /*#__PURE__*/React.createElement("aside", {
    style: {
      borderRight: "1px solid var(--line)",
      padding: "32px 16px",
      background: "var(--navy-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 8,
      paddingLeft: 8
    }
  }, "MY PAGE"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 8,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "var(--white)"
    }
  }, hasInfo ? me.name || "이름 없음" : "게스트"), hasInfo && /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginTop: 2
    }
  }, me.email || me.phone)), /*#__PURE__*/React.createElement("nav", {
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
  })), authUser && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return window.UB.signOut().then(function () {
        return location.reload();
      });
    },
    style: {
      marginTop: 24,
      width: "100%",
      fontSize: 12,
      padding: "10px 0",
      borderRadius: 6,
      background: "transparent",
      border: "1px solid var(--line-strong)",
      color: "var(--gray-200)",
      cursor: "pointer"
    }
  }, "\uB85C\uADF8\uC544\uC6C3")), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: isMobile ? "20px 16px" : "32px 40px",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow"
  }, tab === "info" ? "PROFILE" : tab === "addresses" ? "ADDRESS BOOK" : "ORDER HISTORY"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2",
    style: {
      fontSize: 28,
      marginTop: 6
    }
  }, tab === "info" ? "내 정보" : "주문 이력")), tab === "info" && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 14
    }
  }, "\uAE30\uBCF8 \uC815\uBCF4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC774\uB984"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    value: me.name,
    onChange: function onChange(e) {
      return updMe("name", e.target.value);
    },
    placeholder: "\uD64D\uAE38\uB3D9"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC804\uD654\uBC88\uD638"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    value: me.phone,
    onChange: function onChange(e) {
      return updMe("phone", e.target.value);
    },
    placeholder: "010-0000-0000"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uC774\uBA54\uC77C ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)",
      fontWeight: 400
    }
  }, "(\uC120\uD0DD)")), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    value: me.email,
    onChange: function onChange(e) {
      return updMe("email", e.target.value);
    },
    placeholder: "name@example.com"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      alignItems: "center"
    }
  }, savedToast && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--success, #4ADE80)"
    }
  }, "\u2713 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4"), /*#__PURE__*/React.createElement(Btn6, {
    variant: "primary",
    onClick: saveProfile,
    disabled: saving
  }, saving ? "저장 중…" : "저장"))), /*#__PURE__*/React.createElement("div", {
    className: "ub-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      margin: 0
    }
  }, "\uC8FC\uC18C\uB85D (", (me.addresses || []).length, ")"), /*#__PURE__*/React.createElement(Btn6, {
    variant: "ghost",
    onClick: startNew
  }, Ic6.plus, " \uC0C8 \uC8FC\uC18C \uCD94\uAC00")), (me.addresses || []).length === 0 && editing !== "new" ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      textAlign: "center",
      color: "var(--gray-400)",
      fontSize: 13,
      border: "1px dashed var(--line)",
      borderRadius: 8
    }
  }, "\uC800\uC7A5\uB41C \uC8FC\uC18C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4 \u2014 \uC0C8 \uC8FC\uC18C\uB97C \uCD94\uAC00\uD558\uBA74 \uACB0\uC81C \uC2DC \uC790\uB3D9 \uC785\uB825\uB429\uB2C8\uB2E4.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, (me.addresses || []).map(function (a) {
    return editing === a.id ? /*#__PURE__*/React.createElement(AddressEditor, {
      key: a.id,
      draft: draft,
      setDraft: setDraft,
      onSave: saveDraft,
      onCancel: cancelEdit
    }) : /*#__PURE__*/React.createElement(AddressRow, {
      key: a.id,
      a: a,
      onEdit: function onEdit() {
        return startEdit(a);
      },
      onRemove: function onRemove() {
        return removeAddr(a.id);
      },
      onDefault: function onDefault() {
        return setDefault(a.id);
      }
    });
  }), editing === "new" && /*#__PURE__*/React.createElement(AddressEditor, {
    draft: draft,
    setDraft: setDraft,
    onSave: saveDraft,
    onCancel: cancelEdit
  })))), tab === "history" && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880
    }
  }, orders.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 40,
      textAlign: "center",
      color: "var(--gray-400)"
    }
  }, "\uC8FC\uBB38 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4 \u2014 \uCCAB \uC8FC\uBB38 \uD6C4 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, orders.map(function (o) {
    var subtotal = o.items.reduce(function (s, it) {
      var m = MODELS6.find(function (x) {
        return x.id === it.id;
      });
      return s + (m ? m.price * it.qty : 0);
    }, 0);
    var total = subtotal + calcShip6(subtotal);
    return /*#__PURE__*/React.createElement("div", {
      key: o.no,
      className: "ub-card",
      style: {
        padding: 16,
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        fontSize: 11,
        color: "var(--cyan-400)"
      }
    }, o.no), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: "var(--white)",
        marginTop: 2
      }
    }, o.items.map(function (it) {
      var m = MODELS6.find(function (x) {
        return x.id === it.id;
      });
      return m ? "".concat(m.name, " \xD7").concat(it.qty) : "";
    }).join(", ")), /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        fontSize: 11,
        color: "var(--gray-400)",
        marginTop: 4
      }
    }, o.date)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        fontSize: 16,
        fontWeight: 700,
        color: "var(--white)"
      }
    }, "\u20A9", total.toLocaleString()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: STATUS_TINT[o.status] || "var(--gray-400)",
        fontWeight: 600,
        marginTop: 4
      }
    }, "\u25CF ", o.status)));
  })))));
};
var AddressRow = function AddressRow(_ref6) {
  var a = _ref6.a,
    onEdit = _ref6.onEdit,
    onRemove = _ref6.onRemove,
    onDefault = _ref6.onDefault;
  return /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 16,
      display: "flex",
      gap: 14,
      background: a.isDefault ? "rgba(46,124,246,0.04)" : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--white)"
    }
  }, a.label), a.isDefault && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--cyan-400)",
      padding: "1px 8px",
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
      fontSize: 13,
      color: "var(--gray-100)",
      marginTop: 2
    }
  }, a.addr1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gray-200)"
    }
  }, a.addr2), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-300)",
      marginTop: 6
    }
  }, a.name, " \xB7 ", a.phone)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-end"
    }
  }, !a.isDefault && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDefault,
    style: {
      fontSize: 11,
      padding: "4px 10px",
      borderRadius: 6,
      background: "transparent",
      border: "1px solid var(--line-strong)",
      color: "var(--gray-200)",
      cursor: "pointer"
    }
  }, "\uAE30\uBCF8\uC73C\uB85C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onEdit,
    className: "ub-drawer-iconbtn",
    "aria-label": "\uD3B8\uC9D1"
  }, Ic6.pencil), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    className: "ub-drawer-iconbtn",
    "aria-label": "\uC0AD\uC81C"
  }, Ic6.trash))));
};
var AddressEditor = function AddressEditor(_ref7) {
  var draft = _ref7.draft,
    setDraft = _ref7.setDraft,
    onSave = _ref7.onSave,
    onCancel = _ref7.onCancel;
  if (!draft) return null;
  var upd = function upd(k, v) {
    return setDraft(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, _defineProperty({}, k, v));
    });
  };
  var isMobile = useIsMobile6(1024);
  return /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 16,
      border: "1px solid var(--cyan-400)",
      boxShadow: "0 0 0 4px rgba(46,124,246,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC8FC\uC18C \uB77C\uBCA8"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "\uC608: \uC790\uD0DD / \uC0AC\uBB34\uC2E4",
    value: draft.label,
    onChange: function onChange(e) {
      return upd("label", e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uBC1B\uB294 \uBD84"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "\uD64D\uAE38\uB3D9",
    value: draft.name,
    onChange: function onChange(e) {
      return upd("name", e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC5F0\uB77D\uCC98"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    placeholder: "010-0000-0000",
    value: draft.phone,
    onChange: function onChange(e) {
      return upd("phone", e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC6B0\uD3B8\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "ub-input ub-mono",
    placeholder: "00000",
    value: draft.zip,
    onChange: function onChange(e) {
      return upd("zip", e.target.value);
    },
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn6, {
    variant: "ghost",
    onClick: function onClick() {
      return window.UB.openPostcode(function (_ref8) {
        var zip = _ref8.zip,
          addr1 = _ref8.addr1;
        upd("zip", zip);
        upd("addr1", addr1);
      });
    }
  }, "\uAC80\uC0C9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC8FC\uC18C"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "\uAE30\uBCF8 \uC8FC\uC18C",
    value: draft.addr1,
    onChange: function onChange(e) {
      return upd("addr1", e.target.value);
    },
    style: {
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "\uC0C1\uC138 \uC8FC\uC18C (\uB3D9\xB7\uD638\uC218 \uB4F1)",
    value: draft.addr2,
    onChange: function onChange(e) {
      return upd("addr2", e.target.value);
    }
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      gridColumn: "span 2",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12,
      color: "var(--gray-200)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!draft.isDefault,
    onChange: function onChange(e) {
      return upd("isDefault", e.target.checked);
    }
  }), /*#__PURE__*/React.createElement("span", null, "\uAE30\uBCF8 \uBC30\uC1A1\uC9C0\uB85C \uC124\uC815"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      justifyContent: "flex-end",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn6, {
    variant: "ghost",
    onClick: onCancel
  }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement(Btn6, {
    variant: "primary",
    onClick: onSave
  }, "\uC800\uC7A5")));
};
window.UB.MyPage = MyPage;