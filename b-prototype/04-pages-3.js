"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
// B안 — 페이지 3: OrderPage (체크아웃), CartDrawer, ToastHost, AboutPage
var _React = React,
  uS4 = _React.useState,
  uE4 = _React.useEffect,
  uR4 = _React.useRef;
var _window$UB = window.UB,
  MODELS = _window$UB.MODELS,
  Ic = _window$UB.Ic,
  Btn = _window$UB.Btn,
  Badge = _window$UB.Badge,
  Bracket = _window$UB.Bracket,
  SHIP = _window$UB.SHIP,
  calcShip = _window$UB.calcShip,
  loadMe = _window$UB.loadMe,
  saveMe = _window$UB.saveMe,
  upsertAddress = _window$UB.upsertAddress,
  useIsMobile4 = _window$UB.useIsMobile,
  useProducts4 = _window$UB.useProducts;
var Row = function Row(_ref) {
  var k = _ref.k,
    v = _ref.v;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ub-spec-key",
    style: {
      flex: 1
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--white)",
      textAlign: "right"
    }
  }, v));
};

// ─── ORDER PAGE (체크아웃) ────────────────────────────────────────────────────
// 카드 선결제 B2C 흐름. PG 연동은 추후 — 현재는 placeholder.
var OrderPage = function OrderPage(_ref2) {
  var onNav = _ref2.onNav,
    presetId = _ref2.presetId,
    cart = _ref2.cart,
    onClear = _ref2.onClear,
    onDone = _ref2.onDone;
  useProducts4();
  var isMobile = useIsMobile4(1024);
  // cart 비었으면 카탈로그로 자동 이동 (엉뚱한 더미 제품 표시 방지)
  uE4(function () {
    if ((!cart || cart.length === 0) && !presetId) {
      onNav({
        name: "catalog"
      });
    }
  }, []);
  var _uS = uS4({
      items: cart && cart.length ? _toConsumableArray(cart) : presetId ? [{
        id: presetId,
        qty: 1
      }] : [],
      name: "",
      phone: "",
      email: "",
      zip: "",
      addr1: "",
      addr2: "",
      memo: "",
      deliveryMethod: "delivery",
      // "delivery" | "pickup"
      cardCo: "",
      cardNo: "",
      installments: "0",
      agreeTerms: false,
      agreePay: false
    }),
    _uS2 = _slicedToArray(_uS, 2),
    data = _uS2[0],
    setData = _uS2[1];
  var _uS3 = uS4(false),
    _uS4 = _slicedToArray(_uS3, 2),
    pickerOpen = _uS4[0],
    setPickerOpen = _uS4[1];
  var _uS5 = uS4([]),
    _uS6 = _slicedToArray(_uS5, 2),
    savedAddresses = _uS6[0],
    setSavedAddresses = _uS6[1];
  var upd = function upd(k, v) {
    return setData(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, _defineProperty({}, k, v));
    });
  };

  // 로그인 사용자의 profiles + addresses 자동 채움
  var auth = window.UB.useAuth ? window.UB.useAuth() : {
    user: null
  };
  var authUser = auth.user;
  uE4(function () {
    if (!authUser) return;
    var sb = window.SUPABASE;
    if (!sb) return;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, pf, ad, profile, addrs, def, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return Promise.all([sb.from("profiles").select("name,phone").eq("id", authUser.id).maybeSingle(), sb.from("addresses").select("*").eq("user_id", authUser.id).order("is_default", {
              ascending: false
            })]);
          case 1:
            _yield$Promise$all = _context.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            pf = _yield$Promise$all2[0];
            ad = _yield$Promise$all2[1];
            profile = pf.data || {};
            addrs = ad.data || [];
            def = addrs.find(function (a) {
              return a.is_default;
            }) || addrs[0];
            setSavedAddresses(addrs.map(function (a) {
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
            }));
            setData(function (d) {
              return _objectSpread(_objectSpread({}, d), {}, {
                name: d.name || profile.name || def && def.name || "",
                phone: d.phone || profile.phone || def && def.phone || "",
                email: d.email || authUser.email || "",
                zip: d.zip || def && def.zip || "",
                addr1: d.addr1 || def && def.addr1 || "",
                addr2: d.addr2 || def && def.addr2 || ""
              });
            });
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.warn("[order] 사용자 정보 fetch 실패:", _t);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }))();
  }, [authUser === null || authUser === void 0 ? void 0 : authUser.id]);
  var applyAddress = function applyAddress(a) {
    setData(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, {
        name: a.name || d.name,
        phone: a.phone || d.phone,
        zip: a.zip,
        addr1: a.addr1,
        addr2: a.addr2
      });
    });
    setPickerOpen(false);
  };
  var subtotal = data.items.reduce(function (s, it) {
    var m = MODELS.find(function (x) {
      return x.id === it.id;
    });
    return s + (m ? m.price * it.qty : 0);
  }, 0);
  var isPickup = data.deliveryMethod === "pickup";
  var ship = calcShip(subtotal, {
    zip: data.zip,
    method: data.deliveryMethod
  });
  var total = subtotal + ship;
  var isRemote = (window.UB.isRemoteArea || function () {
    return false;
  })(data.zip);

  // 카드 정보는 토스페이먼츠 결제창에서 직접 입력 — valid 조건에서 제거
  // 직접 수령 시 주소 필드 필수 아님 (사업장 방문)
  var valid = data.items.length > 0 && data.items.every(function (i) {
    return i.qty > 0;
  }) && data.name && data.phone && (isPickup || data.zip && data.addr1 && data.addr2) && data.agreeTerms && data.agreePay;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMobile ? "20px 16px 40px" : "32px 80px 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "CHECKOUT"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2",
    style: {
      marginBottom: 20
    }
  }, "\uC8FC\uBB38 / \uACB0\uC81C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr",
      gap: isMobile ? 14 : 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 14
    }
  }, "\uC8FC\uBB38 \uC0C1\uD488"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, data.items.map(function (it, idx) {
    var m = MODELS.find(function (x) {
      return x.id === it.id;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        display: "flex",
        gap: 12,
        alignItems: "center",
        padding: "10px 0",
        borderBottom: idx < data.items.length - 1 ? "1px dashed var(--line)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        background: "rgba(255,255,255,0.03)",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
        border: "1px solid var(--line)"
      }
    }, m && m.image_url ? /*#__PURE__*/React.createElement("img", {
      src: imgCDN(m.image_url, 240),
      alt: m.name,
      loading: "lazy",
      decoding: "async",
      style: {
        maxWidth: "100%",
        maxHeight: "100%",
        width: "auto",
        height: "auto",
        display: "block"
      }
    }) : /*#__PURE__*/React.createElement(Bracket, {
      size: 36
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        fontSize: 10,
        color: "var(--gray-400)"
      }
    }, m && m.code), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--white)"
      }
    }, m && m.name)), /*#__PURE__*/React.createElement("div", {
      className: "ub-qty-group",
      role: "group"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "ub-qty-btn",
      onClick: function onClick() {
        var items = _toConsumableArray(data.items);
        items[idx].qty = Math.max(1, it.qty - 1);
        upd("items", items);
      },
      disabled: it.qty <= 1
    }, "\u2212"), /*#__PURE__*/React.createElement("span", {
      className: "ub-mono ub-qty-divider",
      style: {
        padding: "4px 12px",
        color: "var(--white)",
        minWidth: 32,
        textAlign: "center"
      }
    }, it.qty), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "ub-qty-btn ub-qty-divider",
      onClick: function onClick() {
        var items = _toConsumableArray(data.items);
        items[idx].qty = it.qty + 1;
        upd("items", items);
      }
    }, "+")), /*#__PURE__*/React.createElement("span", {
      className: "ub-mono",
      style: {
        minWidth: 100,
        textAlign: "right",
        color: "var(--white)",
        fontWeight: 600
      }
    }, "\u20A9", m ? (m.price * it.qty).toLocaleString() : 0), data.items.length > 1 && /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return upd("items", data.items.filter(function (_, i) {
          return i !== idx;
        }));
      },
      className: "ub-drawer-iconbtn",
      "aria-label": "\uC81C\uAC70"
    }, Ic.x));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ub-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 12
    }
  }, "\uBC30\uC1A1 \uBC29\uBC95"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 10
    }
  }, [{
    v: "delivery",
    t: "일반 배송",
    d: "\uAE30\uBCF8 \u20A9".concat(SHIP.FEE.toLocaleString(), " \xB7 \uC81C\uC8FC\xB7\uB3C4\uC11C\uC0B0\uAC04 \uC790\uB3D9 +\u20A9").concat(SHIP.REMOTE_EXTRA.toLocaleString()),
    s: "택배 배송 (평균 2~5영업일)"
  }, {
    v: "pickup",
    t: "직접 수령",
    d: "무료 · 사업장 방문 수령",
    s: "경기 용인시 기흥구 기흥역로58번길 78 103동 1303호 (전화 후 방문)"
  }].map(function (o) {
    return /*#__PURE__*/React.createElement("label", {
      key: o.v,
      style: {
        display: "block",
        padding: 14,
        borderRadius: 8,
        cursor: "pointer",
        border: "1px solid ".concat(data.deliveryMethod === o.v ? "var(--cyan-400)" : "var(--line-strong)"),
        background: data.deliveryMethod === o.v ? "rgba(46,124,246,0.06)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "ub-delivery",
      value: o.v,
      checked: data.deliveryMethod === o.v,
      onChange: function onChange(e) {
        return upd("deliveryMethod", e.target.value);
      },
      style: {
        marginRight: 8
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "var(--white)",
        fontWeight: 600
      }
    }, o.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--cyan-400)",
        marginTop: 4,
        marginLeft: 20
      }
    }, o.d), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--gray-400)",
        marginTop: 2,
        marginLeft: 20
      }
    }, o.s));
  }))), isPickup ? /*#__PURE__*/React.createElement("div", {
    className: "ub-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 12
    }
  }, "\uC5F0\uB77D\uCC98"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uBC1B\uB294 \uBD84"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "\uD64D\uAE38\uB3D9",
    value: data.name,
    onChange: function onChange(e) {
      return upd("name", e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC5F0\uB77D\uCC98"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "010-0000-0000",
    value: data.phone,
    onChange: function onChange(e) {
      return upd("phone", e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uC774\uBA54\uC77C ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)",
      fontWeight: 400
    }
  }, "(\uC120\uD0DD)")), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "name@example.com",
    value: data.email,
    onChange: function onChange(e) {
      return upd("email", e.target.value);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: 10,
      borderRadius: 6,
      background: "rgba(46,124,246,0.06)",
      fontSize: 12,
      color: "var(--gray-200)",
      lineHeight: 1.6
    }
  }, "\uD83D\uDCCD ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uC218\uB839 \uC7A5\uC18C"), ": \uACBD\uAE30 \uC6A9\uC778\uC2DC \uAE30\uD765\uAD6C \uAE30\uD765\uC5ED\uB85C58\uBC88\uAE38 78 103\uB3D9 1303\uD638", /*#__PURE__*/React.createElement("br", null), "\uD83D\uDCDE \uBC29\uBB38 \uC804 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cyan-400)"
    }
  }, "010-2776-9109"), " \uB85C \uC5F0\uB77D \uD6C4 \uBC29\uBB38 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.")) : /*#__PURE__*/React.createElement("div", {
    className: "ub-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key"
  }, "\uBC30\uC1A1\uC9C0"), savedAddresses.length > 0 ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPickerOpen(true);
    },
    style: {
      fontSize: 11,
      color: "var(--cyan-400)",
      background: "rgba(46,124,246,0.08)",
      border: "1px solid rgba(46,124,246,0.3)",
      borderRadius: 100,
      padding: "4px 12px",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, "\uD83D\uDCD2 \uC8FC\uC18C\uB85D \uBD88\uB7EC\uC624\uAE30 (", savedAddresses.length, ")") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--gray-400)"
    }
  }, "\uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C \uC8FC\uC18C\uB97C \uC800\uC7A5\uD558\uBA74 \uC790\uB3D9 \uC785\uB825\uB429\uB2C8\uB2E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uBC1B\uB294 \uBD84"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "\uD64D\uAE38\uB3D9",
    value: data.name,
    onChange: function onChange(e) {
      return upd("name", e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC5F0\uB77D\uCC98"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "010-0000-0000",
    value: data.phone,
    onChange: function onChange(e) {
      return upd("phone", e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uC774\uBA54\uC77C ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-400)",
      fontWeight: 400
    }
  }, "(\uC120\uD0DD)")), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "name@example.com",
    value: data.email,
    onChange: function onChange(e) {
      return upd("email", e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC6B0\uD3B8\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "00000",
    value: data.zip,
    onChange: function onChange(e) {
      return upd("zip", e.target.value);
    },
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: function onClick() {
      return window.UB.openPostcode(function (_ref4) {
        var zip = _ref4.zip,
          addr1 = _ref4.addr1;
        upd("zip", zip);
        upd("addr1", addr1);
      });
    }
  }, "\uAC80\uC0C9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label ub-label-req"
  }, "\uC8FC\uC18C"), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "\uAE30\uBCF8 \uC8FC\uC18C",
    value: data.addr1,
    onChange: function onChange(e) {
      return upd("addr1", e.target.value);
    },
    style: {
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "ub-input",
    placeholder: "\uC0C1\uC138 \uC8FC\uC18C (\uB3D9\xB7\uD638\uC218 \uB4F1)",
    value: data.addr2,
    onChange: function onChange(e) {
      return upd("addr2", e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ub-label"
  }, "\uBC30\uC1A1 \uBA54\uBAA8"), /*#__PURE__*/React.createElement("textarea", {
    className: "ub-textarea",
    rows: 2,
    value: data.memo,
    onChange: function onChange(e) {
      return upd("memo", e.target.value);
    },
    placeholder: "(\uC120\uD0DD) \uBD80\uC7AC \uC2DC \uACBD\uBE44\uC2E4 \uBCF4\uAD00 \uB4F1",
    style: {
      resize: "vertical"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: 10,
      borderRadius: 6,
      background: isRemote ? "rgba(251,191,36,0.08)" : "rgba(46,124,246,0.06)",
      fontSize: 12,
      color: "var(--gray-200)",
      lineHeight: 1.6
    }
  }, isRemote ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--warning, #FBBF24)",
      fontWeight: 700
    }
  }, "\u26A0 \uC81C\uC8FC\xB7\uB3C4\uC11C\uC0B0\uAC04 \uC9C0\uC5ED"), " \u2014 \uBC30\uC1A1\uBE44 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\u20A9", ship.toLocaleString()), " (\uAE30\uBCF8 \u20A9", SHIP.FEE.toLocaleString(), " + \uCD94\uAC00 \u20A9", SHIP.REMOTE_EXTRA.toLocaleString(), ") \uC790\uB3D9 \uC801\uC6A9\uB429\uB2C8\uB2E4.") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u203B \uBC30\uC1A1\uBE44 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\u20A9", SHIP.FEE.toLocaleString()), ". \uC6B0\uD3B8\uBC88\uD638 \uC790\uB3D9 \uD310\uBCC4\uB85C ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cyan-400)"
    }
  }, "\uC81C\uC8FC\xB7\uB3C4\uC11C\uC0B0\uAC04"), "\uC740 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "+\u20A9", SHIP.REMOTE_EXTRA.toLocaleString()), " \uC790\uB3D9 \uC801\uC6A9\uB429\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement("div", {
    className: "ub-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key"
  }, "\uACB0\uC81C \uC218\uB2E8"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--cyan-400)"
    }
  }, "\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gray-200)",
      lineHeight: 1.7
    }
  }, "\uACB0\uC81C\uD558\uAE30 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20 \uACB0\uC81C\uCC3D"), "\uC774 \uC5F4\uB9BD\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "\uCE74\uB4DC \xB7 \uACC4\uC88C\uC774\uCCB4 \xB7 \uAC04\uD3B8\uACB0\uC81C \uBAA8\uB450 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      borderColor: "rgba(251,191,36,0.35)",
      background: "rgba(251,191,36,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--warning, #FBBF24)",
      fontSize: 16
    }
  }, "\u26A0"), /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      color: "var(--warning, #FBBF24)",
      margin: 0
    }
  }, "\uC8FC\uBB38 \uC2DC \uC720\uC758\uC0AC\uD56D (\uD544\uB3C5)")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gray-100)",
      lineHeight: 1.75
    }
  }, "\uBCF8 \uC81C\uD488\uC740 \uBAA8\uB378\uBCC4\uB85C \uC815\uBC00 \uB9E4\uCE6D\uB418\uB294 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "3D \uD504\uB9B0\uD305 \uB9DE\uCDA4 \uCD9C\uB825 \uC81C\uD488"), "\uC785\uB2C8\uB2E4. \uACB0\uC81C \uC804 \uC544\uB798 \uC0AC\uD56D\uC744 \uBC18\uB4DC\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.", /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "10px 0 0",
      paddingLeft: 20,
      color: "var(--gray-200)",
      fontSize: 12.5,
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uC8FC\uBB38 \uD655\uC815(\uACB0\uC81C \uC644\uB8CC) \uD6C4\uC5D0\uB294 \uB2E8\uC21C \uBCC0\uC2EC\uC5D0 \uC758\uD55C \uCDE8\uC18C\xB7\uBC18\uD488\xB7\uAD50\uD658\uC774 \uBD88\uAC00"), "\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, "\uBAA8\uB378 \uC120\uD0DD \uC624\uB958\uB85C \uC778\uD55C \uCDE8\uC18C\uB294 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uC81C\uC791 \uCC29\uC218 \uC804"), "\uAE4C\uC9C0\uB9CC \uAC00\uB2A5\uD558\uBA70, \uC81C\uC791 \uCC29\uC218 \uC774\uD6C4\uC5D0\uB294 \uD658\uBD88\xB7\uAD50\uD658\uC774 \uC5B4\uB835\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, "\uC81C\uD488 \uC218\uB839 \uD6C4 7\uC77C \uC774\uB0B4 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uBA85\uBC31\uD55C \uC81C\uD488 \uD558\uC790"), "(\uD30C\uC190\xB7\uCD9C\uB825 \uBD88\uB7C9\xB7\uBAA8\uB378 \uBD88\uC77C\uCE58)\uAC00 \uD655\uC778\uB41C \uACBD\uC6B0 100% \uBB34\uC0C1 \uAD50\uD658\xB7\uD658\uBD88\uD574 \uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, "\u300C\uC804\uC790\uC0C1\uAC70\uB798\uBC95 \uC81C17\uC870 \uC81C2\uD56D \uC81C5\uD638\u300D\uC5D0 \uB530\uB77C \uC0AC\uC6A9\uC790 \uC8FC\uBB38\uC5D0 \uB530\uB77C \uAC1C\uBCC4 \uC0DD\uC0B0\uB418\uB294 \uC81C\uD488\uC73C\uB85C \uCCAD\uC57D\uCCA0\uD68C\uAC00 \uC81C\uD55C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 14,
      borderTop: "1px dashed rgba(251,191,36,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--warning, #FBBF24)",
      fontWeight: 600,
      marginBottom: 8
    }
  }, "\uC81C\uD488 \uD2B9\uC131 \uC548\uB0B4"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      color: "var(--gray-200)",
      fontSize: 12.5,
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uD45C\uBA74 \uC9C8\uAC10"), " \u2014 FDM \uBC29\uC2DD \uD2B9\uC131\uC0C1 \uB808\uC774\uC5B4 \uC801\uCE35 \uD328\uD134\uC774 \uC721\uC548\uC73C\uB85C \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uCD9C \uC131\uD615 \uC81C\uD488\uACFC \uB3D9\uC77C\uD55C \uB9E4\uB044\uB7EC\uC6B4 \uD45C\uBA74\uC744 \uAE30\uB300\uD558\uC2DC\uBA74 \uC548 \uB429\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uC0C9\uC0C1 \uBC0F \uB9C8\uAC10"), " \u2014 \uBB34\uAD11 \uBE14\uB799 PETG \uC18C\uC7AC \uD2B9\uC131\uC0C1 \uCD2C\uC601 \uD658\uACBD\uC5D0 \uB530\uB77C \uC2E4\uC81C \uC81C\uD488\uACFC \uC0C9\uC0C1\uC774 \uB2E4\uC18C \uB2E4\uB974\uAC8C \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uC628\uB3C4\xB7\uD658\uACBD \uBCC0\uD615"), " \u2014 \uC7A5\uC2DC\uAC04 \uC9C1\uC0AC\uAD11\uC120\uC774\uB098 \uACE0\uC628 \uD658\uACBD(60\u2103 \uC774\uC0C1)\uC5D0 \uB178\uCD9C \uC2DC \uBBF8\uC138\uD55C \uBCC0\uD615\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 12,
      color: "var(--gray-400)"
    }
  }, "\u203B \uACB0\uC81C \uC9C4\uD589\uC740 \uC704 \uC720\uC758\uC0AC\uD56D\uC5D0 \uB3D9\uC758\uD568\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      fontSize: 13,
      color: "var(--gray-100)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: data.agreeTerms,
    onChange: function onChange(e) {
      return upd("agreeTerms", e.target.checked);
    }
  }), /*#__PURE__*/React.createElement("span", null, "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\xB7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4 (\uD544\uC218) \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cyan-400)",
      textDecoration: "underline"
    }
  }, "\uC804\uBB38"))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      fontSize: 13,
      color: "var(--gray-100)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: data.agreePay,
    onChange: function onChange(e) {
      return upd("agreePay", e.target.checked);
    }
  }), /*#__PURE__*/React.createElement("span", null, "\uC8FC\uBB38 \uD655\uC815 \uD6C4 \uB2E8\uC21C \uBCC0\uC2EC \uBC18\uD488 \uBD88\uAC00 \uB4F1 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uC8FC\uBB38 \uC2DC \uC720\uC758\uC0AC\uD56D"), "\uC744 \uD655\uC778\uD558\uC600\uC73C\uBA70 \uACB0\uC81C \uC9C4\uD589\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4 (\uD544\uC218)"))), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    full: true,
    disabled: !valid,
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var sb, exists, cart0, m0, orderName, itemsCtx, addrCtx, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            // 직접 수령이면 주소록 저장 스킵
            sb = window.SUPABASE;
            if (!(!isPickup && sb && authUser && data.zip && data.addr1)) {
              _context2.n = 4;
              break;
            }
            exists = savedAddresses.some(function (a) {
              return a.zip === data.zip && a.addr1 === data.addr1 && a.addr2 === data.addr2;
            });
            if (exists) {
              _context2.n = 4;
              break;
            }
            _context2.p = 1;
            _context2.n = 2;
            return sb.from("addresses").insert({
              user_id: authUser.id,
              label: "주문 시 입력",
              name: data.name,
              phone: data.phone,
              zip: data.zip,
              addr1: data.addr1,
              addr2: data.addr2,
              is_default: savedAddresses.length === 0
            });
          case 2:
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.warn("[order] 주소 자동 저장 실패:", _t2);
          case 4:
            // 토스페이먼츠 결제창 호출 (성공시 successUrl 로 리다이렉트, 실패/취소시 false)
            cart0 = cart[0] || {};
            m0 = window.UB.MODELS.find(function (x) {
              return x.id === cart0.id;
            });
            orderName = m0 && cart.length > 1 ? "".concat(m0.name, " \uC678 ").concat(cart.length - 1, "\uAC74") : m0 ? "".concat(m0.name, " ").concat(cart0.qty, "\uAC1C") : "3D UniBox 주문"; // 결제창은 페이지를 떠나므로 successUrl 복귀 시 필요한 정보를 localStorage 에 임시 저장
            try {
              itemsCtx = data.items.map(function (it) {
                var m = window.UB.MODELS.find(function (x) {
                  return x.id === it.id;
                });
                return {
                  id: it.id,
                  name: m ? m.name : it.id,
                  code: m ? m.code : "",
                  qty: it.qty,
                  price: m ? m.price : 0
                };
              });
              addrCtx = isPickup ? {
                zip: "17095",
                addr1: "경기 용인시 기흥구 기흥역로58번길 78",
                addr2: "103동 1303호",
                memo: "직접 수령 (사업장 방문)"
              } : {
                zip: data.zip,
                addr1: data.addr1,
                addr2: data.addr2,
                memo: data.memo || null
              };
              localStorage.setItem("ub:pending-order", JSON.stringify({
                user_id: authUser ? authUser.id : null,
                customer: {
                  name: data.name,
                  phone: data.phone,
                  email: data.email || null
                },
                address: addrCtx,
                items: itemsCtx,
                amount: total,
                delivery_method: data.deliveryMethod
              }));
            } catch (e) {
              console.warn("[order] pending-order localStorage 저장 실패:", e);
            }
            _context2.n = 5;
            return window.UB.payWithToss({
              amount: total,
              orderName: orderName,
              customerEmail: data.email,
              customerName: data.name
            });
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }))
  }, "\u20A9", total.toLocaleString(), " \uACB0\uC81C\uD558\uAE30 ", Ic.arrow)), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      position: "sticky",
      top: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 14
    }
  }, "\uC8FC\uBB38 \uC694\uC57D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8,
      paddingBottom: 14,
      borderBottom: "1px solid var(--line)",
      marginBottom: 14
    }
  }, data.items.map(function (it, i) {
    var m = MODELS.find(function (x) {
      return x.id === it.id;
    });
    return m && /*#__PURE__*/React.createElement(Row, {
      key: i,
      k: "".concat(m.code, " \xD7 ").concat(it.qty),
      v: "\u20A9".concat((m.price * it.qty).toLocaleString())
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6,
      fontSize: 12,
      color: "var(--gray-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uC0C1\uD488 \uAE08\uC561"), /*#__PURE__*/React.createElement("span", {
    className: "ub-mono"
  }, "\u20A9", subtotal.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10,
      fontSize: 12,
      color: "var(--gray-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uBC30\uC1A1\uBE44 ", isPickup ? "(직접 수령)" : isRemote ? "(제주·도서산간)" : ""), /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      color: isPickup ? "var(--success, #4ADE80)" : isRemote ? "var(--warning, #FBBF24)" : "var(--white)"
    }
  }, isPickup ? "무료" : "\u20A9".concat(ship.toLocaleString()))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      paddingTop: 12,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key"
  }, "\uCD1D \uACB0\uC81C \uAE08\uC561"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: "var(--cyan-400)"
    }
  }, "\u20A9", total.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginTop: 6,
      textAlign: "right"
    }
  }, "VAT \uD3EC\uD568")))), pickerOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setPickerOpen(false);
    },
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(4px)",
      zIndex: 200
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "ub-picker-title",
    style: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 201,
      width: "min(560px, 90vw)",
      maxHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--navy-950)",
      border: "1px solid var(--line)",
      borderRadius: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    id: "ub-picker-title",
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "var(--white)"
    }
  }, "\uC800\uC7A5\uB41C \uC8FC\uC18C\uB85D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginTop: 2
    }
  }, "\uBC30\uC1A1\uC9C0\uB85C \uC0AC\uC6A9\uD560 \uC8FC\uC18C\uB97C \uC120\uD0DD\uD558\uC138\uC694")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPickerOpen(false);
    },
    className: "ub-drawer-iconbtn",
    "aria-label": "\uB2EB\uAE30"
  }, Ic.x)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, savedAddresses.map(function (a) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: a.id,
      onClick: function onClick() {
        return applyAddress(a);
      },
      style: {
        textAlign: "left",
        padding: 14,
        borderRadius: 10,
        border: "1px solid var(--line)",
        background: a.isDefault ? "rgba(46,124,246,0.04)" : "transparent",
        cursor: "pointer",
        color: "inherit",
        transition: "all 0.15s"
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.borderColor = "var(--cyan-400)";
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.borderColor = "var(--line)";
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
        fontSize: 13,
        fontWeight: 700,
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px",
      borderTop: "1px solid var(--line)",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: function onClick() {
      return onNav && onNav({
        name: "me"
      });
    }
  }, "\uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C \uAD00\uB9AC \u2192")))));
};

// ─── CART DRAWER ──────────────────────────────────────────────────────────────
var CartDrawer = function CartDrawer(_ref6) {
  var open = _ref6.open,
    onClose = _ref6.onClose,
    cart = _ref6.cart,
    onUpdate = _ref6.onUpdate,
    onRemove = _ref6.onRemove,
    onCheckout = _ref6.onCheckout,
    onBrowse = _ref6.onBrowse;
  useProducts4();
  var _uS7 = uS4(open),
    _uS8 = _slicedToArray(_uS7, 2),
    mounted = _uS8[0],
    setMounted = _uS8[1];
  var _uS9 = uS4(false),
    _uS0 = _slicedToArray(_uS9, 2),
    shown = _uS0[0],
    setShown = _uS0[1];
  var panelRef = uR4(null);
  var prevFocusRef = uR4(null);
  uE4(function () {
    if (open) {
      prevFocusRef.current = document.activeElement;
      setMounted(true);
      var r2;
      var r1 = requestAnimationFrame(function () {
        r2 = requestAnimationFrame(function () {
          return setShown(true);
        });
      });
      return function () {
        cancelAnimationFrame(r1);
        if (r2) cancelAnimationFrame(r2);
      };
    }
    if (mounted) {
      setShown(false);
      var t = setTimeout(function () {
        return setMounted(false);
      }, 280);
      return function () {
        return clearTimeout(t);
      };
    }
  }, [open]);
  uE4(function () {
    if (!mounted) return;
    var prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return function () {
      document.body.style.overflow = prevOverflow;
    };
  }, [mounted]);
  uE4(function () {
    if (!shown) return;
    var focusables = function focusables() {
      return Array.from(panelRef.current ? panelRef.current.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input, select, textarea') : []);
    };
    var first = focusables()[0];
    first && first.focus();
    var onKey = function onKey(e) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      var list = focusables();
      if (list.length === 0) {
        e.preventDefault();
        return;
      }
      var f = list[0],
        l = list[list.length - 1];
      if (e.shiftKey && document.activeElement === f) {
        e.preventDefault();
        l.focus();
      } else if (!e.shiftKey && document.activeElement === l) {
        e.preventDefault();
        f.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return function () {
      return document.removeEventListener("keydown", onKey);
    };
  }, [shown]);
  uE4(function () {
    if (!mounted && prevFocusRef.current && typeof prevFocusRef.current.focus === "function") {
      prevFocusRef.current.focus();
      prevFocusRef.current = null;
    }
  }, [mounted]);
  if (!mounted) return null;
  var subtotal = cart.reduce(function (s, it) {
    var m = MODELS.find(function (x) {
      return x.id === it.id;
    });
    return s + (m ? m.price * it.qty : 0);
  }, 0);
  var ship = calcShip(subtotal);
  var total = subtotal + ship;
  var openClass = shown ? " is-open" : "";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    className: "ub-drawer-overlay" + openClass,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    ref: panelRef,
    className: "ub-drawer-panel" + openClass,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "ub-cart-title",
    tabIndex: -1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    id: "ub-cart-title",
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "var(--white)"
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 11,
      color: "var(--gray-400)",
      marginTop: 2
    }
  }, cart.length, " ITEM", cart.length !== 1 ? "S" : "")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "ub-drawer-iconbtn",
    "aria-label": "\uC7A5\uBC14\uAD6C\uB2C8 \uB2EB\uAE30"
  }, Ic.x)), /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-body"
  }, cart.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 40,
      color: "var(--gray-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      marginBottom: 14,
      opacity: 0.4
    }
  }, Ic.cart), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginBottom: 20
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4"), onBrowse && /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: onBrowse
  }, "\uCE74\uD0C8\uB85C\uADF8 \uBCF4\uB7EC \uAC00\uAE30 ", Ic.arrow)) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, cart.map(function (it, i) {
    var m = MODELS.find(function (x) {
      return x.id === it.id;
    });
    if (!m) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "ub-card",
      style: {
        padding: 14,
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        background: "rgba(255,255,255,0.03)",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
        border: "1px solid var(--line)"
      }
    }, m.image_url ? /*#__PURE__*/React.createElement("img", {
      src: imgCDN(m.image_url, 240),
      alt: m.name,
      loading: "lazy",
      decoding: "async",
      style: {
        maxWidth: "100%",
        maxHeight: "100%",
        width: "auto",
        height: "auto",
        display: "block"
      }
    }) : /*#__PURE__*/React.createElement(Bracket, {
      size: 42
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        fontSize: 10,
        color: "var(--gray-400)"
      }
    }, m.code), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--white)",
        margin: "2px 0"
      }
    }, m.name)), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return onRemove(i);
      },
      className: "ub-drawer-iconbtn",
      "aria-label": "".concat(m.name, " \uC81C\uAC70"),
      style: {
        fontSize: 11
      }
    }, Ic.x)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ub-qty-group",
      role: "group",
      "aria-label": "".concat(m.name, " \uC218\uB7C9")
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "ub-qty-btn",
      onClick: function onClick() {
        return onUpdate(i, Math.max(1, it.qty - 1));
      },
      disabled: it.qty <= 1,
      "aria-label": "\uC218\uB7C9 \uAC10\uC18C"
    }, "\u2212"), /*#__PURE__*/React.createElement("span", {
      className: "ub-mono ub-qty-divider",
      style: {
        padding: "4px 10px",
        color: "var(--white)",
        minWidth: 32,
        textAlign: "center"
      },
      "aria-live": "polite"
    }, it.qty), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "ub-qty-btn ub-qty-divider",
      onClick: function onClick() {
        return onUpdate(i, it.qty + 1);
      },
      "aria-label": "\uC218\uB7C9 \uC99D\uAC00"
    }, "+")), /*#__PURE__*/React.createElement("span", {
      className: "ub-mono",
      style: {
        fontSize: 13,
        color: "var(--white)",
        fontWeight: 600
      }
    }, "\u20A9", (m.price * it.qty).toLocaleString()))));
  }))), cart.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ub-drawer-footer"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 6,
      fontSize: 12,
      color: "var(--gray-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uC0C1\uD488 \uAE08\uC561"), /*#__PURE__*/React.createElement("span", {
    className: "ub-mono"
  }, "\u20A9", subtotal.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 4,
      fontSize: 12,
      color: "var(--gray-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uBC30\uC1A1\uBE44"), /*#__PURE__*/React.createElement("span", {
    className: "ub-mono",
    style: {
      color: "var(--white)"
    }
  }, "\u20A9", SHIP.FEE.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--gray-400)",
      marginBottom: 10,
      lineHeight: 1.5
    }
  }, "\u203B \uC81C\uC8FC\xB7\uB3C4\uC11C\uC0B0\uAC04 +\u20A9", SHIP.REMOTE_EXTRA.toLocaleString(), " \xB7 \uC9C1\uC811 \uC218\uB839 \uC2DC \uBB34\uB8CC (\uACB0\uC81C \uD398\uC774\uC9C0\uC5D0\uC11C \uC120\uD0DD)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 14,
      paddingTop: 12,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key"
  }, "\uD569\uACC4"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: "var(--white)"
    }
  }, "\u20A9", total.toLocaleString())), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    full: true,
    onClick: onCheckout
  }, "\uACB0\uC81C\uD558\uAE30 ", Ic.arrow))));
};

// ─── DONE MODAL ───────────────────────────────────────────────────────────────
var DoneModal = function DoneModal(_ref7) {
  var data = _ref7.data,
    onClose = _ref7.onClose,
    onHome = _ref7.onHome;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.7)",
      zIndex: 200,
      backdropFilter: "blur(8px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 201,
      display: "grid",
      placeItems: "center",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      maxWidth: 500,
      width: "100%",
      textAlign: "center",
      padding: 40,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse 400px 200px at 50% 0%, rgba(46,124,246,0.15), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      margin: "0 auto 20px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, var(--cyan-400), var(--cyan-500))",
      display: "grid",
      placeItems: "center",
      color: "var(--navy-950)",
      boxShadow: "0 20px 60px -10px var(--cyan-glow)"
    }
  }, Ic.check), /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "ORDER \xB7 #2026-04-30-", Math.floor(Math.random() * 9000 + 1000)), /*#__PURE__*/React.createElement("div", {
    className: "ub-h2",
    style: {
      fontSize: 26,
      marginBottom: 12
    }
  }, "\uC8FC\uBB38\uC774 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gray-200)",
      fontSize: 14,
      marginBottom: 24,
      lineHeight: 1.6
    }
  }, "\uACB0\uC81C \uD655\uC778 \uD6C4 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cyan-400)",
      fontWeight: 600
    }
  }, "1\uC601\uC5C5\uC77C \uC774\uB0B4 \uC81C\uC791"), "\uC5D0 \uCC29\uC218\uD569\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), data.email ? /*#__PURE__*/React.createElement(React.Fragment, null, "\uC8FC\uBB38\uBC88\uD638\uC640 \uC601\uC218\uC99D\uC740 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--white)"
    }
  }, data.email), "\uB85C \uBC1C\uC1A1\uB429\uB2C8\uB2E4.") : /*#__PURE__*/React.createElement(React.Fragment, null, "\uC8FC\uBB38 \uC9C4\uD589 \uC548\uB0B4\uB294 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--white)"
    }
  }, data.phone), "\uB85C \uBB38\uC790 \uC804\uC1A1\uB429\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: onHome
  }, "\uBA54\uC778\uC73C\uB85C"), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: onClose
  }, "\uC2DC\uACF5\uC0AC\uB840 \uBCF4\uAE30"))))));
};

// ─── ABOUT (간단) ─────────────────────────────────────────────────────────────
var AboutPage = function AboutPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "clamp(28px, 6vw, 60px) clamp(16px, 5vw, 80px)",
      maxWidth: 800
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "ABOUT US"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2",
    style: {
      marginBottom: 20
    }
  }, "\uC5D0\uC2A4\uB514\uCEE8\uBC84\uC804\uC2A4"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gray-200)",
      fontSize: 15,
      lineHeight: 1.9,
      wordBreak: "keep-all"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 18px"
    }
  }, "\uC5D0\uC2A4\uB514\uCEE8\uBC84\uC804\uC2A4(SD Convergence)\uB294", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "\uD604\uC7A5\uC744 \uC9C1\uC811 \uACAA\uC740 \uCD9C\uC785\uD1B5\uC81C \uC804\uBB38\uAC00"), "\uAC00", /*#__PURE__*/React.createElement("br", null), "3D \uD504\uB9B0\uD305\uC73C\uB85C \uB9CC\uB4E0 \uBE0C\uB79C\uB4DC\uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\uC288\uD504\uB9AC\uB9C8 \uB2E8\uB9D0\uAE30 \uC804\uC6A9 \uBE0C\uB77C\uCF13\uC744 \uC2DC\uC791\uC73C\uB85C", /*#__PURE__*/React.createElement("br", null), "\uC2DC\uC7A5\uC5D0 \uC5C6\uB294 \uBD80\uD488\uC744 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--white)"
    }
  }, "1\uAC1C \uB2E8\uC704"), "\uB85C \uC81C\uC791\uD558\uACE0", /*#__PURE__*/React.createElement("br", null), "\uC788\uB294 \uC81C\uD488\uB3C4 \uD604\uC7A5\uC5D0 \uAF2D \uB9DE\uAC8C \uB2E4\uC2DC \uC124\uACC4\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-spec-key",
    style: {
      marginBottom: 14
    }
  }, "\uD68C\uC0AC \uC815\uBCF4"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("tbody", null, [["대표", "허희경"], ["사업자등록번호", "449-56-00430"], ["통신판매업", "제 2026-용인기흥-01256 호"], ["사업장 주소", "경기도 용인시 기흥구 기흥역로58번길 78 103동 1303호"], ["연락처", "010-2776-9109 / leedoo80@gmail.com"]].map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
      k = _ref9[0],
      v = _ref9[1];
    return /*#__PURE__*/React.createElement("tr", {
      key: k,
      style: {
        borderTop: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 0",
        color: "var(--gray-400)",
        width: 160,
        fontFamily: "var(--font-mono)",
        fontSize: 11
      }
    }, k.toUpperCase()), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 0",
        color: "var(--white)"
      }
    }, v));
  })))));
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
var Footer = function Footer(_ref0) {
  var onNav = _ref0.onNav;
  var isMobile = useIsMobile4(1024);
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--line)",
      padding: isMobile ? "28px 16px" : "32px max(24px, calc((100% - 1240px) / 2))",
      background: "var(--navy-950)",
      marginTop: isMobile ? 40 : 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "1.4fr 1fr 1fr 1fr",
      gap: isMobile ? 20 : 48,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: isMobile ? "span 2" : "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-logo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-logo-mark"
  }, "3D"), /*#__PURE__*/React.createElement("span", null, "UNIBOX")), /*#__PURE__*/React.createElement("img", {
    src: "/sd_white.png",
    alt: "\uC5D0\uC2A4\uB514\uCEE8\uBC84\uC804\uC2A4 (SD Convergence)",
    style: {
      height: 26,
      width: "auto",
      display: "block",
      marginTop: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 12,
      color: "var(--gray-300)",
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--gray-100)"
    }
  }, "\uC5D0\uC2A4\uB514\uCEE8\uBC84\uC804\uC2A4 (SD Convergence)"), /*#__PURE__*/React.createElement("br", null), "\uB300\uD45C \uD5C8\uD76C\uACBD \xB7 \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 449-56-00430", /*#__PURE__*/React.createElement("br", null), "\uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0 \uC81C 2026-\uC6A9\uC778\uAE30\uD765-01256 \uD638", /*#__PURE__*/React.createElement("br", null), "\uACBD\uAE30\uB3C4 \uC6A9\uC778\uC2DC \uAE30\uD765\uAD6C \uAE30\uD765\uC5ED\uB85C58\uBC88\uAE38 78 103\uB3D9 1303\uD638", /*#__PURE__*/React.createElement("br", null), "\uB300\uD45C\uC804\uD654 010-2776-9109")), [{
    t: "제품",
    items: [["전체보기", function () {
      return onNav({
        name: "catalog"
      });
    }], ["장바구니", function () {
      return onNav({
        name: "catalog"
      });
    }]]
  }, {
    t: "고객지원",
    items: [["시공사례", function () {
      return onNav({
        name: "guide"
      });
    }], ["FAQ", function () {
      return onNav({
        name: "faq"
      });
    }]]
  }, {
    t: "문의",
    items: [["010-2776-9109", null], ["leedoo80@gmail.com", null], ["평일 09–18시", null]]
  }].map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.t
    }, /*#__PURE__*/React.createElement("div", {
      className: "ub-spec-key",
      style: {
        marginBottom: 12
      }
    }, c.t), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, c.items.map(function (_ref1) {
      var _ref10 = _slicedToArray(_ref1, 2),
        l = _ref10[0],
        fn = _ref10[1];
      return /*#__PURE__*/React.createElement("span", {
        key: l,
        onClick: fn || undefined,
        style: {
          fontSize: 12,
          color: "var(--gray-200)",
          cursor: fn ? "pointer" : "default"
        }
      }, l);
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 20,
      borderTop: "1px solid var(--line)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      gap: isMobile ? 8 : 0,
      fontSize: 11,
      color: "var(--gray-400)"
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 SD Convergence. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return onNav({
        name: "terms"
      });
    }
  }, "\uC774\uC6A9\uC57D\uAD00"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer",
      fontWeight: 600,
      color: "var(--gray-200)"
    },
    onClick: function onClick() {
      return onNav({
        name: "privacy"
      });
    }
  }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"))));
};

// ─── ORDER RESULT PAGE (토스 successUrl / failUrl 처리) ──────────────────
// URL 예:
//   성공: /?toss=success&paymentKey=xxx&orderId=ub_xxx&amount=22500
//   실패: /?toss=fail&code=PAY_PROCESS_CANCELED&message=...&orderId=ub_xxx
var OrderResultPage = function OrderResultPage(_ref11) {
  var onNav = _ref11.onNav,
    onClearCart = _ref11.onClearCart;
  var isMobile = useIsMobile4(1024);
  var _uS1 = uS4({
      phase: "loading",
      data: null,
      error: null
    }),
    _uS10 = _slicedToArray(_uS1, 2),
    state = _uS10[0],
    setState = _uS10[1];
  uE4(function () {
    var params = new URLSearchParams(location.search);
    var mode = params.get("toss");
    if (mode === "fail") {
      setState({
        phase: "failed",
        data: {
          code: params.get("code") || "UNKNOWN",
          message: params.get("message") || "결제가 실패했거나 취소되었습니다.",
          orderId: params.get("orderId") || ""
        },
        error: null
      });
      return;
    }

    // success — 백엔드 confirm 호출
    var paymentKey = params.get("paymentKey");
    var orderId = params.get("orderId");
    var amount = params.get("amount");
    if (!paymentKey || !orderId || !amount) {
      setState({
        phase: "failed",
        data: {
          code: "INVALID_RETURN",
          message: "결제 응답이 불완전합니다.",
          orderId: orderId || ""
        },
        error: null
      });
      return;
    }
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var ctx, r, j, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            // localStorage 에 저장해둔 주문 컨텍스트 (customer/address/items) 불러오기
            ctx = {};
            try {
              ctx = JSON.parse(localStorage.getItem("ub:pending-order") || "{}");
            } catch (e) {}
            _context3.n = 1;
            return fetch("/api/toss/confirm", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                paymentKey: paymentKey,
                orderId: orderId,
                amount: Number(amount),
                user_id: ctx.user_id || null,
                customer: ctx.customer || null,
                address: ctx.address || null,
                items: ctx.items || null
              })
            });
          case 1:
            r = _context3.v;
            _context3.n = 2;
            return r.json();
          case 2:
            j = _context3.v;
            if (!(!r.ok || !j.ok)) {
              _context3.n = 3;
              break;
            }
            setState({
              phase: "failed",
              data: {
                code: j.code || "CONFIRM_FAILED",
                message: j.message || "결제 승인 실패",
                orderId: orderId
              },
              error: j
            });
            return _context3.a(2);
          case 3:
            // 성공 — 장바구니 + 보류 주문 컨텍스트 정리
            try {
              localStorage.removeItem("ub:pending-order");
            } catch (e) {}
            if (onClearCart) onClearCart();
            setState({
              phase: "succeeded",
              data: j,
              error: null
            });
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t3 = _context3.v;
            console.error("[order-result] confirm exception:", _t3);
            setState({
              phase: "failed",
              data: {
                code: "NETWORK",
                message: "네트워크 오류 — 잠시 후 다시 확인해주세요.",
                orderId: orderId
              },
              error: _t3
            });
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 4]]);
    }))();
  }, []);
  var wrap = {
    padding: isMobile ? "40px 16px 60px" : "60px 80px 80px",
    maxWidth: 720,
    margin: "0 auto"
  };
  if (state.phase === "loading") {
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      className: "ub-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "PAYMENT"), /*#__PURE__*/React.createElement("h2", {
      className: "ub-h2"
    }, "\uACB0\uC81C \uD655\uC778 \uC911\u2026"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--gray-300)",
        marginTop: 14
      }
    }, "\uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20\uC5D0\uC11C \uACB0\uC81C \uACB0\uACFC\uB97C \uD655\uC778\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uD398\uC774\uC9C0\uB97C \uB2EB\uC9C0 \uB9D0\uACE0 \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694."));
  }
  if (state.phase === "succeeded") {
    var d = state.data || {};
    return /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      className: "ub-eyebrow",
      style: {
        color: "var(--success, #4ADE80)",
        marginBottom: 10
      }
    }, "PAYMENT SUCCESS"), /*#__PURE__*/React.createElement("h2", {
      className: "ub-h2",
      style: {
        marginBottom: 6
      }
    }, "\uC8FC\uBB38\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4 \uD83C\uDF89"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--gray-300)",
        marginBottom: 24
      }
    }, "\uACB0\uC81C \uD655\uC778 \uD6C4 ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cyan-400)"
      }
    }, "1\uC601\uC5C5\uC77C \uC774\uB0B4 \uC81C\uC791"), "\uC5D0 \uCC29\uC218\uD558\uBA70, \uD3C9\uADE0 ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cyan-400)"
      }
    }, "2~5\uC601\uC5C5\uC77C \uC774\uB0B4 \uCD9C\uACE0"), "\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
      className: "ub-card",
      style: {
        padding: 20,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "100px 1fr",
        gap: 10,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--gray-400)"
      }
    }, "\uC8FC\uBB38\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        color: "var(--white)"
      }
    }, d.orderId), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--gray-400)"
      }
    }, "\uACB0\uC81C\uAE08\uC561"), /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        color: "var(--white)",
        fontWeight: 700
      }
    }, "\u20A9", Number(d.amount || 0).toLocaleString()), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--gray-400)"
      }
    }, "\uACB0\uC81C\uC218\uB2E8"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--white)"
      }
    }, d.method || "-"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--gray-400)"
      }
    }, "\uC2B9\uC778\uC77C\uC2DC"), /*#__PURE__*/React.createElement("div", {
      className: "ub-mono",
      style: {
        color: "var(--gray-200)"
      }
    }, d.approvedAt ? new Date(d.approvedAt).toLocaleString("ko-KR") : "-"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexDirection: isMobile ? "column" : "row"
      }
    }, /*#__PURE__*/React.createElement(Btn, {
      variant: "primary",
      size: "lg",
      full: isMobile,
      onClick: function onClick() {
        return onNav({
          name: "home"
        });
      }
    }, "\uD648\uC73C\uB85C"), /*#__PURE__*/React.createElement(Btn, {
      variant: "ghost",
      size: "lg",
      full: isMobile,
      onClick: function onClick() {
        return onNav({
          name: "catalog"
        });
      }
    }, "\uB354 \uB458\uB7EC\uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        fontSize: 12,
        color: "var(--gray-400)"
      }
    }, "\u203B \uACB0\uC81C \uC601\uC218\uC99D\uC740 \uD1A0\uC2A4\uD398\uC774\uBA3C\uCE20\uC5D0\uC11C SMS\xB7\uC774\uBA54\uC77C\uB85C \uBC1C\uC1A1\uB429\uB2C8\uB2E4. \uBB38\uC758: 010-2776-9109 / leedoo80@gmail.com"));
  }

  // failed
  var f = state.data || {};
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    className: "ub-eyebrow",
    style: {
      color: "var(--warning, #FBBF24)",
      marginBottom: 10
    }
  }, "PAYMENT FAILED"), /*#__PURE__*/React.createElement("h2", {
    className: "ub-h2",
    style: {
      marginBottom: 6
    }
  }, "\uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--gray-300)",
      marginBottom: 24
    }
  }, "\uC544\uB798 \uC0AC\uC720\uB85C \uACB0\uC81C\uAC00 \uCC98\uB9AC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uCE74\uB4DC \uC815\uBCF4\uB97C \uD655\uC778\uD558\uC2DC\uAC70\uB098 \uB2E4\uB978 \uACB0\uC81C \uC218\uB2E8\uC73C\uB85C \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    className: "ub-card",
    style: {
      padding: 20,
      marginBottom: 20,
      borderColor: "rgba(251,191,36,0.35)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      gap: 10,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gray-400)"
    }
  }, "\uC8FC\uBB38\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      color: "var(--white)"
    }
  }, f.orderId || "-"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gray-400)"
    }
  }, "\uC5D0\uB7EC \uCF54\uB4DC"), /*#__PURE__*/React.createElement("div", {
    className: "ub-mono",
    style: {
      color: "var(--warning, #FBBF24)"
    }
  }, f.code), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gray-400)"
    }
  }, "\uC0AC\uC720"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--white)"
    }
  }, f.message))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexDirection: isMobile ? "column" : "row"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    full: isMobile,
    onClick: function onClick() {
      return onNav({
        name: "order"
      });
    }
  }, "\uB2E4\uC2DC \uACB0\uC81C\uD558\uAE30"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    size: "lg",
    full: isMobile,
    onClick: function onClick() {
      return onNav({
        name: "home"
      });
    }
  }, "\uD648\uC73C\uB85C")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontSize: 12,
      color: "var(--gray-400)"
    }
  }, "\u203B \uCE74\uB4DC\uC0AC \uD55C\uB3C4\xB7\uC2B9\uC778 \uAC70\uC808 \uB4F1 \uC0AC\uC720\uAC00 \uBC18\uBCF5\uB418\uBA74 \uACE0\uAC1D\uC13C\uD130 010-2776-9109 \uB85C \uBB38\uC758\uC8FC\uC138\uC694."));
};
window.UB.OrderPage = OrderPage;
window.UB.OrderResultPage = OrderResultPage;
window.UB.CartDrawer = CartDrawer;
window.UB.DoneModal = DoneModal;
window.UB.AboutPage = AboutPage;
window.UB.Footer = Footer;