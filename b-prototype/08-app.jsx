const { useState, useEffect } = React;
const { TopNav, BottomTabs, HomePage, CatalogPage, DetailPage, GuidePage, FAQPage, OrderPage, CartDrawer, DoneModal, AboutPage, AdminPage, MyPage, Footer, MODELS, LoginPage, useAuth, TermsPage, PrivacyPage } = window.UB;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#00C8F0",
  "density": "regular",
  "showBadges": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useState({ name: "home" });
  // cart — 새로고침해도 유지되도록 localStorage 영속화
  const CART_KEY = "ub:cart:v1";
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter(x => x && x.id && x.qty > 0) : [];
    } catch (e) { return []; }
  });
  useEffect(() => {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  }, [cart]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);
  const [doneData, setDoneData] = useState(null);
  const { user, ready: authReady } = useAuth();

  useEffect(() => { document.documentElement.style.setProperty("--cyan-400", t.accent); }, [t.accent]);
  useEffect(() => { window.scrollTo(0, 0); }, [route]);

  // 라우터 — 해시(#admin, #detail/<id>) + 짧은 path(/admin) 둘 다 인식
  const VALID_ROUTES = ["home", "catalog", "guide", "faq", "about", "order", "admin", "me", "login", "terms", "privacy"];
  const routeToHash = (r) => {
    if (!r || !r.name || r.name === "home") return "";
    if (r.name === "detail" && r.id) return `#detail/${r.id}`;
    return `#${r.name}`;
  };

  useEffect(() => {
    const apply = () => {
      // 1순위: 토스 결제 결과 (?toss=success | ?toss=fail) — query string 으로 도착
      const qs = new URLSearchParams(location.search);
      if (qs.get("toss")) { setRoute({ name: "order-result" }); return; }
      const h = (location.hash || "").replace(/^#/, "").trim();
      if (h.startsWith("detail/")) {
        const id = h.slice(7);
        if (id) { setRoute({ name: "detail", id }); return; }
      }
      if (VALID_ROUTES.includes(h)) { setRoute({ name: h }); return; }
      const seg = (location.pathname || "/").split("/").filter(Boolean)[0] || "";
      if (VALID_ROUTES.includes(seg)) { setRoute({ name: seg }); return; }
      setRoute({ name: "home" });
    };
    apply();
    window.addEventListener("hashchange", apply);
    window.addEventListener("popstate", apply);
    return () => {
      window.removeEventListener("hashchange", apply);
      window.removeEventListener("popstate", apply);
    };
  }, []);

  const showToast = (msg) => { setToastMsg(msg); setTimeout(() => setToastMsg(null), 2400); };
  const addToCart = (m, qty = 1) => {
    setCart(c => {
      const i = c.findIndex(x => x.id === m.id);
      if (i >= 0) { const next = [...c]; next[i] = { ...next[i], qty: next[i].qty + qty }; return next; }
      return [...c, { id: m.id, qty }];
    });
    showToast(`${m.name} ${qty}개 장바구니에 담김`);
  };
  const updateCart = (i, qty) => setCart(c => c.map((x, j) => j === i ? { ...x, qty } : x));
  const removeCart = (i) => setCart(c => c.filter((_, j) => j !== i));

  // navTo — 브라우저 history 에 push 해서 뒤로가기 시 이전 라우트로 복귀 (사이트 내 이동 보존)
  const navTo = (r) => {
    const newHash = routeToHash(r);
    if ((location.hash || "") !== newHash) {
      const targetUrl = newHash || (location.pathname + location.search);
      try { history.pushState(null, "", targetUrl); } catch (e) {}
    }
    setRoute(r);
    setCartOpen(false);
  };

  const isAdmin = route.name === "admin";

  return (
    <div>
      {!isAdmin && <TopNav route={route} onNav={navTo} cartCount={cart.length} onOpenCart={() => setCartOpen(true)} />}
      <main style={{ maxWidth: isAdmin ? "100%" : 1240, margin: "0 auto", width: "100%" }}>
      {route.name === "home" && <HomePage onNav={navTo} />}
      {route.name === "catalog" && <CatalogPage onNav={navTo} onAdd={addToCart} />}
      {route.name === "detail" && <DetailPage id={route.id} onNav={navTo} onAdd={addToCart} toast={showToast} />}
      {route.name === "guide" && <GuidePage />}
      {route.name === "faq" && <FAQPage />}
      {route.name === "about" && <AboutPage />}
      {route.name === "admin" && <AdminPage />}
      {route.name === "me" && (user ? <MyPage /> : <LoginPage onAfter={() => navTo({ name: "me" })} />)}
      {route.name === "login" && <LoginPage onAfter={() => navTo({ name: "me" })} />}
      {route.name === "terms" && <TermsPage />}
      {route.name === "privacy" && <PrivacyPage />}
      {route.name === "order" && (
        <OrderPage
          onNav={navTo}
          presetId={route.presetId}
          cart={cart}
          onClear={() => { setCart([]); try { localStorage.removeItem("ub:cart:v1"); } catch (e) {} }}
          onDone={(data) => setDoneData(data)}
        />
      )}
      {route.name === "order-result" && (
        <OrderResultPage
          onNav={navTo}
          onClearCart={() => { setCart([]); try { localStorage.removeItem("ub:cart:v1"); } catch (e) {} }}
        />
      )}
      </main>
      {!isAdmin && <Footer onNav={navTo} />}
      {!isAdmin && <BottomTabs route={route} onNav={navTo} cartCount={cart.length} onOpenCart={() => setCartOpen(true)} />}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdate={updateCart}
        onRemove={removeCart}
        onCheckout={() => { setCartOpen(false); navTo({ name: "order" }); }}
        onBrowse={() => { setCartOpen(false); navTo({ name: "catalog" }); }}
      />

      {doneData && <DoneModal data={doneData} onClose={() => { setDoneData(null); navTo({ name: "guide" }); }} onHome={() => { setDoneData(null); navTo({ name: "home" }); }} />}

      {toastMsg && (
        <div style={{
          position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 300,
          padding: "12px 20px", borderRadius: 100, background: "rgba(10,22,40,0.95)",
          border: "1px solid var(--cyan-400)", color: "var(--white)", fontSize: 13, fontWeight: 500,
          backdropFilter: "blur(8px)", boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ color: "var(--cyan-400)" }}>✓</span>
          {toastMsg}
        </div>
      )}

      <TweaksPanel>
        <TweakSection label="테마" />
        <TweakColor label="액센트 컬러" value={t.accent} onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="제품" />
        <TweakToggle label="상태 배지 표시" value={t.showBadges} onChange={(v) => setTweak("showBadges", v)} />
        <TweakRadio label="밀도" value={t.density} options={["compact", "regular", "comfy"]} onChange={(v) => setTweak("density", v)} />
        <TweakSection label="빠른 이동" />
        <TweakButton onClick={() => navTo({ name: "home" })}>홈</TweakButton>
        <TweakButton onClick={() => navTo({ name: "catalog" })}>카탈로그</TweakButton>
        <TweakButton onClick={() => navTo({ name: "detail", id: "fsf2" })}>제품 상세 (FSF2)</TweakButton>
        <TweakButton onClick={() => navTo({ name: "guide" })}>시공사례</TweakButton>
        <TweakButton onClick={() => navTo({ name: "faq" })}>FAQ</TweakButton>
        <TweakButton onClick={() => navTo({ name: "order" })}>결제 폼</TweakButton>
        <TweakButton onClick={() => navTo({ name: "admin" })}>관리자 (윤곽)</TweakButton>
        <TweakButton onClick={() => navTo({ name: "me" })}>마이페이지</TweakButton>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
