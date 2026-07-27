"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
var _window$UB = window.UB,
  TopNav = _window$UB.TopNav,
  BottomTabs = _window$UB.BottomTabs,
  HomePage = _window$UB.HomePage,
  CatalogPage = _window$UB.CatalogPage,
  DetailPage = _window$UB.DetailPage,
  GuidePage = _window$UB.GuidePage,
  FAQPage = _window$UB.FAQPage,
  OrderPage = _window$UB.OrderPage,
  CartDrawer = _window$UB.CartDrawer,
  DoneModal = _window$UB.DoneModal,
  AboutPage = _window$UB.AboutPage,
  AdminPage = _window$UB.AdminPage,
  MyPage = _window$UB.MyPage,
  Footer = _window$UB.Footer,
  MODELS = _window$UB.MODELS,
  LoginPage = _window$UB.LoginPage,
  useAuth = _window$UB.useAuth,
  TermsPage = _window$UB.TermsPage,
  PrivacyPage = _window$UB.PrivacyPage;
var TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#00C8F0",
  "density": "regular",
  "showBadges": true
} /*EDITMODE-END*/;
function App() {
  var _useTweaks = useTweaks(TWEAK_DEFAULTS),
    _useTweaks2 = _slicedToArray(_useTweaks, 2),
    t = _useTweaks2[0],
    setTweak = _useTweaks2[1];
  var _useState = useState({
      name: "home"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    route = _useState2[0],
    setRoute = _useState2[1];
  // cart — 새로고침해도 유지되도록 localStorage 영속화
  var CART_KEY = "ub:cart:v1";
  var _useState3 = useState(function () {
      try {
        var raw = localStorage.getItem(CART_KEY);
        var parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed.filter(function (x) {
          return x && x.id && x.qty > 0;
        }) : [];
      } catch (e) {
        return [];
      }
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    cart = _useState4[0],
    setCart = _useState4[1];
  useEffect(function () {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    cartOpen = _useState6[0],
    setCartOpen = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    toastMsg = _useState8[0],
    setToastMsg = _useState8[1];
  var _useState9 = useState(null),
    _useState0 = _slicedToArray(_useState9, 2),
    doneData = _useState0[0],
    setDoneData = _useState0[1];
  var _useAuth = useAuth(),
    user = _useAuth.user,
    authReady = _useAuth.ready;
  useEffect(function () {
    document.documentElement.style.setProperty("--cyan-400", t.accent);
  }, [t.accent]);
  useEffect(function () {
    window.scrollTo(0, 0);
  }, [route]);

  // 라우터 — 해시(#admin, #detail/<id>) + 짧은 path(/admin) 둘 다 인식
  var VALID_ROUTES = ["home", "catalog", "guide", "faq", "about", "order", "admin", "me", "login", "terms", "privacy"];
  var routeToHash = function routeToHash(r) {
    if (!r || !r.name || r.name === "home") return "";
    if (r.name === "detail" && r.id) return "#detail/".concat(r.id);
    return "#".concat(r.name);
  };
  useEffect(function () {
    var apply = function apply() {
      // 1순위: 토스 결제 결과 (?toss=success | ?toss=fail) — query string 으로 도착
      var qs = new URLSearchParams(location.search);
      if (qs.get("toss")) {
        setRoute({
          name: "order-result"
        });
        return;
      }
      var h = (location.hash || "").replace(/^#/, "").trim();
      if (h.startsWith("detail/")) {
        var id = h.slice(7);
        if (id) {
          setRoute({
            name: "detail",
            id: id
          });
          return;
        }
      }
      if (VALID_ROUTES.includes(h)) {
        setRoute({
          name: h
        });
        return;
      }
      var seg = (location.pathname || "/").split("/").filter(Boolean)[0] || "";
      if (VALID_ROUTES.includes(seg)) {
        setRoute({
          name: seg
        });
        return;
      }
      setRoute({
        name: "home"
      });
    };
    apply();
    window.addEventListener("hashchange", apply);
    window.addEventListener("popstate", apply);
    return function () {
      window.removeEventListener("hashchange", apply);
      window.removeEventListener("popstate", apply);
    };
  }, []);
  var showToast = function showToast(msg) {
    setToastMsg(msg);
    setTimeout(function () {
      return setToastMsg(null);
    }, 2400);
  };
  var addToCart = function addToCart(m) {
    var qty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    setCart(function (c) {
      var i = c.findIndex(function (x) {
        return x.id === m.id;
      });
      if (i >= 0) {
        var next = _toConsumableArray(c);
        next[i] = _objectSpread(_objectSpread({}, next[i]), {}, {
          qty: next[i].qty + qty
        });
        return next;
      }
      return [].concat(_toConsumableArray(c), [{
        id: m.id,
        qty: qty
      }]);
    });
    showToast("".concat(m.name, " ").concat(qty, "\uAC1C \uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE40"));
  };
  var updateCart = function updateCart(i, qty) {
    return setCart(function (c) {
      return c.map(function (x, j) {
        return j === i ? _objectSpread(_objectSpread({}, x), {}, {
          qty: qty
        }) : x;
      });
    });
  };
  var removeCart = function removeCart(i) {
    return setCart(function (c) {
      return c.filter(function (_, j) {
        return j !== i;
      });
    });
  };

  // navTo — 브라우저 history 에 push 해서 뒤로가기 시 이전 라우트로 복귀 (사이트 내 이동 보존)
  var navTo = function navTo(r) {
    var newHash = routeToHash(r);
    if ((location.hash || "") !== newHash) {
      var targetUrl = newHash || location.pathname + location.search;
      try {
        history.pushState(null, "", targetUrl);
      } catch (e) {}
    }
    setRoute(r);
    setCartOpen(false);
  };
  var isAdmin = route.name === "admin";
  return /*#__PURE__*/React.createElement("div", null, !isAdmin && /*#__PURE__*/React.createElement(TopNav, {
    route: route,
    onNav: navTo,
    cartCount: cart.length,
    onOpenCart: function onOpenCart() {
      return setCartOpen(true);
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: isAdmin ? "100%" : 1240,
      margin: "0 auto",
      width: "100%"
    }
  }, route.name === "home" && /*#__PURE__*/React.createElement(HomePage, {
    onNav: navTo
  }), route.name === "catalog" && /*#__PURE__*/React.createElement(CatalogPage, {
    onNav: navTo,
    onAdd: addToCart
  }), route.name === "detail" && /*#__PURE__*/React.createElement(DetailPage, {
    id: route.id,
    onNav: navTo,
    onAdd: addToCart,
    toast: showToast
  }), route.name === "guide" && /*#__PURE__*/React.createElement(GuidePage, null), route.name === "faq" && /*#__PURE__*/React.createElement(FAQPage, null), route.name === "about" && /*#__PURE__*/React.createElement(AboutPage, null), route.name === "admin" && /*#__PURE__*/React.createElement(AdminPage, null), route.name === "me" && (user ? /*#__PURE__*/React.createElement(MyPage, null) : /*#__PURE__*/React.createElement(LoginPage, {
    onAfter: function onAfter() {
      return navTo({
        name: "me"
      });
    }
  })), route.name === "login" && /*#__PURE__*/React.createElement(LoginPage, {
    onAfter: function onAfter() {
      return navTo({
        name: "me"
      });
    }
  }), route.name === "terms" && /*#__PURE__*/React.createElement(TermsPage, null), route.name === "privacy" && /*#__PURE__*/React.createElement(PrivacyPage, null), route.name === "order" && /*#__PURE__*/React.createElement(OrderPage, {
    onNav: navTo,
    presetId: route.presetId,
    cart: cart,
    onClear: function onClear() {
      setCart([]);
      try {
        localStorage.removeItem("ub:cart:v1");
      } catch (e) {}
    },
    onDone: function onDone(data) {
      return setDoneData(data);
    }
  }), route.name === "order-result" && /*#__PURE__*/React.createElement(OrderResultPage, {
    onNav: navTo,
    onClearCart: function onClearCart() {
      setCart([]);
      try {
        localStorage.removeItem("ub:cart:v1");
      } catch (e) {}
    }
  })), !isAdmin && /*#__PURE__*/React.createElement(Footer, {
    onNav: navTo
  }), !isAdmin && /*#__PURE__*/React.createElement(BottomTabs, {
    route: route,
    onNav: navTo,
    cartCount: cart.length,
    onOpenCart: function onOpenCart() {
      return setCartOpen(true);
    }
  }), /*#__PURE__*/React.createElement(CartDrawer, {
    open: cartOpen,
    onClose: function onClose() {
      return setCartOpen(false);
    },
    cart: cart,
    onUpdate: updateCart,
    onRemove: removeCart,
    onCheckout: function onCheckout() {
      setCartOpen(false);
      navTo({
        name: "order"
      });
    },
    onBrowse: function onBrowse() {
      setCartOpen(false);
      navTo({
        name: "catalog"
      });
    }
  }), doneData && /*#__PURE__*/React.createElement(DoneModal, {
    data: doneData,
    onClose: function onClose() {
      setDoneData(null);
      navTo({
        name: "guide"
      });
    },
    onHome: function onHome() {
      setDoneData(null);
      navTo({
        name: "home"
      });
    }
  }), toastMsg && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 300,
      padding: "12px 20px",
      borderRadius: 100,
      background: "rgba(10,22,40,0.95)",
      border: "1px solid var(--cyan-400)",
      color: "var(--white)",
      fontSize: 13,
      fontWeight: 500,
      backdropFilter: "blur(8px)",
      boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cyan-400)"
    }
  }, "\u2713"), toastMsg), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "\uD14C\uB9C8"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "\uC561\uC13C\uD2B8 \uCEEC\uB7EC",
    value: t.accent,
    onChange: function onChange(v) {
      return setTweak("accent", v);
    }
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "\uC81C\uD488"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "\uC0C1\uD0DC \uBC30\uC9C0 \uD45C\uC2DC",
    value: t.showBadges,
    onChange: function onChange(v) {
      return setTweak("showBadges", v);
    }
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "\uBC00\uB3C4",
    value: t.density,
    options: ["compact", "regular", "comfy"],
    onChange: function onChange(v) {
      return setTweak("density", v);
    }
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "\uBE60\uB978 \uC774\uB3D9"
  }), /*#__PURE__*/React.createElement(TweakButton, {
    onClick: function onClick() {
      return navTo({
        name: "home"
      });
    }
  }, "\uD648"), /*#__PURE__*/React.createElement(TweakButton, {
    onClick: function onClick() {
      return navTo({
        name: "catalog"
      });
    }
  }, "\uCE74\uD0C8\uB85C\uADF8"), /*#__PURE__*/React.createElement(TweakButton, {
    onClick: function onClick() {
      return navTo({
        name: "detail",
        id: "fsf2"
      });
    }
  }, "\uC81C\uD488 \uC0C1\uC138 (FSF2)"), /*#__PURE__*/React.createElement(TweakButton, {
    onClick: function onClick() {
      return navTo({
        name: "guide"
      });
    }
  }, "\uC2DC\uACF5\uC0AC\uB840"), /*#__PURE__*/React.createElement(TweakButton, {
    onClick: function onClick() {
      return navTo({
        name: "faq"
      });
    }
  }, "FAQ"), /*#__PURE__*/React.createElement(TweakButton, {
    onClick: function onClick() {
      return navTo({
        name: "order"
      });
    }
  }, "\uACB0\uC81C \uD3FC"), /*#__PURE__*/React.createElement(TweakButton, {
    onClick: function onClick() {
      return navTo({
        name: "admin"
      });
    }
  }, "\uAD00\uB9AC\uC790 (\uC724\uACFD)"), /*#__PURE__*/React.createElement(TweakButton, {
    onClick: function onClick() {
      return navTo({
        name: "me"
      });
    }
  }, "\uB9C8\uC774\uD398\uC774\uC9C0")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));