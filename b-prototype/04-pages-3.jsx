// B안 — 페이지 3: OrderPage (체크아웃), CartDrawer, ToastHost, AboutPage
const { useState: uS4, useEffect: uE4, useRef: uR4 } = React;
const { MODELS, Ic, Btn, Badge, Bracket, SHIP, calcShip, loadMe, saveMe, upsertAddress, useIsMobile: useIsMobile4, useProducts: useProducts4 } = window.UB;

const Row = ({ k, v }) => <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}><span className="ub-spec-key" style={{ flex: 1 }}>{k}</span><span style={{ fontSize: 13, color: "var(--white)", textAlign: "right" }}>{v}</span></div>;

// ─── ORDER PAGE (체크아웃) ────────────────────────────────────────────────────
// 카드 선결제 B2C 흐름. PG 연동은 추후 — 현재는 placeholder.
const OrderPage = ({ onNav, presetId, cart, onClear, onDone }) => {
  useProducts4();
  const isMobile = useIsMobile4(1024);
  const [data, setData] = uS4({
    items: cart && cart.length ? [...cart] : [{ id: presetId || (MODELS[0] && MODELS[0].id) || "", qty: 1 }],
    name: "", phone: "", email: "",
    zip: "", addr1: "", addr2: "",
    memo: "",
    cardCo: "", cardNo: "", installments: "0",
    agreeTerms: false, agreePay: false,
  });
  const [pickerOpen, setPickerOpen] = uS4(false);
  const [savedAddresses, setSavedAddresses] = uS4([]);
  const upd = (k, v) => setData(d => ({ ...d, [k]: v }));

  // 로그인 사용자의 profiles + addresses 자동 채움
  const auth = (window.UB.useAuth ? window.UB.useAuth() : { user: null });
  const authUser = auth.user;
  uE4(() => {
    if (!authUser) return;
    const sb = window.SUPABASE;
    if (!sb) return;
    (async () => {
      try {
        const [pf, ad] = await Promise.all([
          sb.from("profiles").select("name,phone").eq("id", authUser.id).maybeSingle(),
          sb.from("addresses").select("*").eq("user_id", authUser.id).order("is_default", { ascending: false }),
        ]);
        const profile = pf.data || {};
        const addrs = ad.data || [];
        const def = addrs.find(a => a.is_default) || addrs[0];
        setSavedAddresses(addrs.map(a => ({ id: a.id, label: a.label, name: a.name, phone: a.phone, zip: a.zip, addr1: a.addr1, addr2: a.addr2, isDefault: a.is_default })));
        setData(d => ({
          ...d,
          name: d.name || profile.name || (def && def.name) || "",
          phone: d.phone || profile.phone || (def && def.phone) || "",
          email: d.email || authUser.email || "",
          zip: d.zip || (def && def.zip) || "",
          addr1: d.addr1 || (def && def.addr1) || "",
          addr2: d.addr2 || (def && def.addr2) || "",
        }));
      } catch (e) {
        console.warn("[order] 사용자 정보 fetch 실패:", e);
      }
    })();
  }, [authUser?.id]);

  const applyAddress = (a) => {
    setData(d => ({ ...d, name: a.name || d.name, phone: a.phone || d.phone, zip: a.zip, addr1: a.addr1, addr2: a.addr2 }));
    setPickerOpen(false);
  };

  const subtotal = data.items.reduce((s, it) => {
    const m = MODELS.find(x => x.id === it.id);
    return s + (m ? m.price * it.qty : 0);
  }, 0);
  const ship = calcShip(subtotal);
  const total = subtotal + ship;
  const remainForFree = Math.max(0, SHIP.FREE_OVER - subtotal);

  const valid =
    data.items.length > 0 && data.items.every(i => i.qty > 0) &&
    data.name && data.phone &&
    data.zip && data.addr1 && data.addr2 &&
    data.cardCo && data.cardNo &&
    data.agreeTerms && data.agreePay;

  return (
    <div style={{ padding: isMobile ? "20px 16px 40px" : "32px 80px 60px" }}>
      <div className="ub-eyebrow" style={{ marginBottom: 8 }}>CHECKOUT</div>
      <h2 className="ub-h2" style={{ marginBottom: 20 }}>주문 / 결제</h2>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: isMobile ? 14 : 32 }}>
        {/* 좌측: 입력 폼 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* 주문 상품 */}
          <div className="ub-card">
            <div className="ub-spec-key" style={{ marginBottom: 14 }}>주문 상품</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {data.items.map((it, idx) => {
                const m = MODELS.find(x => x.id === it.id);
                return (
                  <div key={idx} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: idx < data.items.length - 1 ? "1px dashed var(--line)" : "none" }}>
                    <div style={{ width: 48, height: 48, background: "rgba(255,255,255,0.03)", borderRadius: 8, display: "grid", placeItems: "center", flexShrink: 0 }}><Bracket size={42} /></div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="ub-mono" style={{ fontSize: 10, color: "var(--gray-400)" }}>{m && m.code}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--white)" }}>{m && m.name}</div>
                    </div>
                    <div className="ub-qty-group" role="group">
                      <button type="button" className="ub-qty-btn" onClick={() => { const items = [...data.items]; items[idx].qty = Math.max(1, it.qty - 1); upd("items", items); }} disabled={it.qty <= 1}>−</button>
                      <span className="ub-mono ub-qty-divider" style={{ padding: "4px 12px", color: "var(--white)", minWidth: 32, textAlign: "center" }}>{it.qty}</span>
                      <button type="button" className="ub-qty-btn ub-qty-divider" onClick={() => { const items = [...data.items]; items[idx].qty = it.qty + 1; upd("items", items); }}>+</button>
                    </div>
                    <span className="ub-mono" style={{ minWidth: 100, textAlign: "right", color: "var(--white)", fontWeight: 600 }}>₩{m ? (m.price * it.qty).toLocaleString() : 0}</span>
                    {data.items.length > 1 && (
                      <button type="button" onClick={() => upd("items", data.items.filter((_, i) => i !== idx))} className="ub-drawer-iconbtn" aria-label="제거">{Ic.x}</button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 배송지 */}
          <div className="ub-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <div className="ub-spec-key">배송지</div>
              {savedAddresses.length > 0 ? (
                <button type="button" onClick={() => setPickerOpen(true)}
                  style={{ fontSize: 11, color: "var(--cyan-400)", background: "rgba(0,200,240,0.08)", border: "1px solid rgba(0,200,240,0.3)", borderRadius: 100, padding: "4px 12px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  📒 주소록 불러오기 ({savedAddresses.length})
                </button>
              ) : (
                <span style={{ fontSize: 11, color: "var(--gray-400)" }}>마이페이지에서 주소를 저장하면 자동 입력됩니다</span>
              )}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
              <div>
                <label className="ub-label ub-label-req">받는 분</label>
                <input className="ub-input" placeholder="홍길동" value={data.name} onChange={e => upd("name", e.target.value)} />
              </div>
              <div>
                <label className="ub-label ub-label-req">연락처</label>
                <input className="ub-input" placeholder="010-0000-0000" value={data.phone} onChange={e => upd("phone", e.target.value)} />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label className="ub-label">이메일 <span style={{ color: "var(--gray-400)", fontWeight: 400 }}>(선택)</span></label>
                <input className="ub-input" placeholder="name@example.com" value={data.email} onChange={e => upd("email", e.target.value)} />
              </div>
              <div>
                <label className="ub-label ub-label-req">우편번호</label>
                <div style={{ display: "flex", gap: 8 }}>
                  <input className="ub-input" placeholder="00000" value={data.zip} onChange={e => upd("zip", e.target.value)} style={{ flex: 1 }} />
                  <Btn variant="ghost" onClick={() => window.UB.openPostcode(({ zip, addr1 }) => { upd("zip", zip); upd("addr1", addr1); })}>검색</Btn>
                </div>
              </div>
              <div />
              <div style={{ gridColumn: "span 2" }}>
                <label className="ub-label ub-label-req">주소</label>
                <input className="ub-input" placeholder="기본 주소" value={data.addr1} onChange={e => upd("addr1", e.target.value)} style={{ marginBottom: 8 }} />
                <input className="ub-input" placeholder="상세 주소 (동·호수 등)" value={data.addr2} onChange={e => upd("addr2", e.target.value)} />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label className="ub-label">배송 메모</label>
                <textarea className="ub-textarea" rows={2} value={data.memo} onChange={e => upd("memo", e.target.value)} placeholder="(선택) 부재 시 경비실 보관 등" style={{ resize: "vertical" }} />
              </div>
            </div>
          </div>

          {/* 결제 수단 */}
          <div className="ub-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
              <div className="ub-spec-key">결제 수단</div>
              <span style={{ fontSize: 11, color: "var(--cyan-400)" }}>토스페이먼츠</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--gray-200)", lineHeight: 1.7 }}>
              결제하기 버튼을 누르면 <strong style={{ color: "var(--white)" }}>토스페이먼츠 결제창</strong>이 열립니다.<br/>
              카드 · 계좌이체 · 간편결제 모두 지원합니다.
            </div>
          </div>

          {/* 주문 시 유의사항 */}
          <div className="ub-card" style={{ borderColor: "rgba(251,191,36,0.35)", background: "rgba(251,191,36,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ color: "var(--warning, #FBBF24)", fontSize: 16 }}>⚠</span>
              <div className="ub-spec-key" style={{ color: "var(--warning, #FBBF24)", margin: 0 }}>주문 시 유의사항 (필독)</div>
            </div>
            <div style={{ fontSize: 13, color: "var(--gray-100)", lineHeight: 1.75 }}>
              본 제품은 슈프리마 단말기 모델별로 정밀 매칭되는 <strong style={{ color: "var(--white)" }}>3D 프린팅 맞춤 출력 제품</strong>입니다. 결제 전 아래 사항을 반드시 확인해 주세요.
              <ul style={{ margin: "10px 0 0", paddingLeft: 20, color: "var(--gray-200)", fontSize: 12.5, lineHeight: 1.8 }}>
                <li><strong style={{ color: "var(--white)" }}>주문 확정(결제 완료) 후에는 단순 변심에 의한 취소·반품·교환이 불가</strong>합니다.</li>
                <li>모델 선택 오류로 인한 취소는 <strong style={{ color: "var(--white)" }}>제작 착수 전</strong>까지만 가능하며, 제작 착수 이후에는 환불·교환이 어렵습니다.</li>
                <li>제품 수령 후 7일 이내 <strong style={{ color: "var(--white)" }}>명백한 제품 하자</strong>(파손·출력 불량·모델 불일치)가 확인된 경우 100% 무상 교환·환불해 드립니다.</li>
                <li>「전자상거래법 제17조 제2항 제5호」에 따라 사용자 주문에 따라 개별 생산되는 제품으로 청약철회가 제한될 수 있습니다.</li>
              </ul>
              <div style={{ marginTop: 10, fontSize: 12, color: "var(--gray-400)" }}>※ 결제 진행은 위 유의사항에 동의함을 의미합니다.</div>
            </div>
          </div>

          {/* 약관 */}
          <div className="ub-card" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "var(--gray-100)", cursor: "pointer" }}>
              <input type="checkbox" checked={data.agreeTerms} onChange={e => upd("agreeTerms", e.target.checked)} />
              <span>개인정보 수집·이용에 동의합니다 (필수) · <span style={{ color: "var(--cyan-400)", textDecoration: "underline" }}>전문</span></span>
            </label>
            <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "var(--gray-100)", cursor: "pointer" }}>
              <input type="checkbox" checked={data.agreePay} onChange={e => upd("agreePay", e.target.checked)} />
              <span>주문 확정 후 단순 변심 반품 불가 등 <strong style={{ color: "var(--white)" }}>주문 시 유의사항</strong>을 확인하였으며 결제 진행에 동의합니다 (필수)</span>
            </label>
          </div>

          <Btn variant="primary" size="lg" full disabled={!valid} onClick={async () => {
            // 결제 시 입력한 새 주소가 있으면 사용자 주소록에 자동 추가 (DB)
            const sb = window.SUPABASE;
            if (sb && authUser && data.zip && data.addr1) {
              const exists = savedAddresses.some(a =>
                a.zip === data.zip && a.addr1 === data.addr1 && a.addr2 === data.addr2);
              if (!exists) {
                try {
                  await sb.from("addresses").insert({
                    user_id: authUser.id,
                    label: "주문 시 입력",
                    name: data.name, phone: data.phone,
                    zip: data.zip, addr1: data.addr1, addr2: data.addr2,
                    is_default: savedAddresses.length === 0,
                  });
                } catch (e) { console.warn("[order] 주소 자동 저장 실패:", e); }
              }
            }
            // 토스페이먼츠 결제창 호출 (성공시 successUrl 로 리다이렉트, 실패/취소시 false)
            const cart0 = cart[0] || {};
            const m0 = window.UB.MODELS.find(x => x.id === cart0.id);
            const orderName = (m0 && cart.length > 1)
              ? `${m0.name} 외 ${cart.length - 1}건`
              : (m0 ? `${m0.name} ${cart0.qty}개` : "3D UniBox 주문");
            await window.UB.payWithToss({
              amount: total,
              orderName,
              customerEmail: data.email,
              customerName:  data.name,
            });
            // 결제창이 뜨면 사용자는 토스 페이지로 리다이렉트됨.
            // 실제 결제 완료/실패 처리는 successUrl/failUrl 페이지에서 (백엔드 confirm 필요 — TODO).
          }}>
            ₩{total.toLocaleString()} 결제하기 {Ic.arrow}
          </Btn>
        </div>

        {/* 우측: 주문 요약 (sticky) */}
        <aside>
          <div className="ub-card" style={{ position: "sticky", top: 100 }}>
            <div className="ub-spec-key" style={{ marginBottom: 14 }}>주문 요약</div>
            <div style={{ display: "grid", gap: 8, paddingBottom: 14, borderBottom: "1px solid var(--line)", marginBottom: 14 }}>
              {data.items.map((it, i) => {
                const m = MODELS.find(x => x.id === it.id);
                return m && <Row key={i} k={`${m.code} × ${it.qty}`} v={`₩${(m.price * it.qty).toLocaleString()}`} />;
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12, color: "var(--gray-300)" }}>
              <span>상품 금액</span><span className="ub-mono">₩{subtotal.toLocaleString()}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 12, color: "var(--gray-300)" }}>
              <span>배송비</span>
              <span className="ub-mono" style={{ color: ship === 0 ? "var(--success, #4ADE80)" : "var(--white)" }}>
                {ship === 0 ? "무료" : `₩${ship.toLocaleString()}`}
              </span>
            </div>
            {remainForFree > 0 && (
              <div style={{ fontSize: 11, color: "var(--cyan-400)", marginBottom: 12, textAlign: "right" }}>
                ₩{remainForFree.toLocaleString()} 더 담으면 무료배송
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
              <div className="ub-spec-key">총 결제 금액</div>
              <div className="ub-mono" style={{ fontSize: 24, fontWeight: 700, color: "var(--cyan-400)" }}>₩{total.toLocaleString()}</div>
            </div>
            <div style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 6, textAlign: "right" }}>VAT 포함</div>
          </div>
        </aside>
      </div>

      {/* 주소록 모달 */}
      {pickerOpen && (
        <>
          <div onClick={() => setPickerOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", zIndex: 200 }} />
          <div role="dialog" aria-modal="true" aria-labelledby="ub-picker-title"
            style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 201, width: "min(560px, 90vw)", maxHeight: "80vh", display: "flex", flexDirection: "column", background: "var(--navy-950)", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div id="ub-picker-title" style={{ fontSize: 17, fontWeight: 700, color: "var(--white)" }}>저장된 주소록</div>
                <div style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 2 }}>배송지로 사용할 주소를 선택하세요</div>
              </div>
              <button type="button" onClick={() => setPickerOpen(false)} className="ub-drawer-iconbtn" aria-label="닫기">{Ic.x}</button>
            </div>
            <div style={{ flex: 1, overflow: "auto", padding: 18, display: "flex", flexDirection: "column", gap: 8 }}>
              {savedAddresses.map(a => (
                <button type="button" key={a.id} onClick={() => applyAddress(a)}
                  style={{ textAlign: "left", padding: 14, borderRadius: 10, border: "1px solid var(--line)", background: a.isDefault ? "rgba(0,200,240,0.04)" : "transparent", cursor: "pointer", color: "inherit", transition: "all 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "var(--cyan-400)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--line)"}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--white)" }}>{a.label}</span>
                    {a.isDefault && <span style={{ fontSize: 10, color: "var(--cyan-400)", padding: "1px 6px", border: "1px solid var(--cyan-400)", borderRadius: 100 }}>기본</span>}
                  </div>
                  <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)" }}>{a.zip}</div>
                  <div style={{ fontSize: 12, color: "var(--gray-100)", marginTop: 2 }}>{a.addr1} {a.addr2}</div>
                  <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-300)", marginTop: 4 }}>{a.name} · {a.phone}</div>
                </button>
              ))}
            </div>
            <div style={{ padding: "14px 18px", borderTop: "1px solid var(--line)", textAlign: "right" }}>
              <Btn variant="ghost" onClick={() => onNav && onNav({ name: "me" })}>마이페이지에서 관리 →</Btn>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ─── CART DRAWER ──────────────────────────────────────────────────────────────
const CartDrawer = ({ open, onClose, cart, onUpdate, onRemove, onCheckout, onBrowse }) => {
  useProducts4();
  const [mounted, setMounted] = uS4(open);
  const [shown, setShown] = uS4(false);
  const panelRef = uR4(null);
  const prevFocusRef = uR4(null);

  uE4(() => {
    if (open) {
      prevFocusRef.current = document.activeElement;
      setMounted(true);
      let r2;
      const r1 = requestAnimationFrame(() => { r2 = requestAnimationFrame(() => setShown(true)); });
      return () => { cancelAnimationFrame(r1); if (r2) cancelAnimationFrame(r2); };
    }
    if (mounted) {
      setShown(false);
      const t = setTimeout(() => setMounted(false), 280);
      return () => clearTimeout(t);
    }
  }, [open]);

  uE4(() => {
    if (!mounted) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [mounted]);

  uE4(() => {
    if (!shown) return;
    const focusables = () => Array.from(
      panelRef.current ? panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input, select, textarea'
      ) : []
    );
    const first = focusables()[0];
    first && first.focus();

    const onKey = (e) => {
      if (e.key === "Escape") { e.stopPropagation(); onClose(); return; }
      if (e.key !== "Tab") return;
      const list = focusables();
      if (list.length === 0) { e.preventDefault(); return; }
      const f = list[0], l = list[list.length - 1];
      if (e.shiftKey && document.activeElement === f) { e.preventDefault(); l.focus(); }
      else if (!e.shiftKey && document.activeElement === l) { e.preventDefault(); f.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [shown]);

  uE4(() => {
    if (!mounted && prevFocusRef.current && typeof prevFocusRef.current.focus === "function") {
      prevFocusRef.current.focus();
      prevFocusRef.current = null;
    }
  }, [mounted]);

  if (!mounted) return null;

  const subtotal = cart.reduce((s, it) => { const m = MODELS.find(x => x.id === it.id); return s + (m ? m.price * it.qty : 0); }, 0);
  const ship = calcShip(subtotal);
  const total = subtotal + ship;
  const remainForFree = Math.max(0, SHIP.FREE_OVER - subtotal);
  const openClass = shown ? " is-open" : "";

  return (
    <>
      <div onClick={onClose} className={"ub-drawer-overlay" + openClass} aria-hidden="true" />
      <div
        ref={panelRef}
        className={"ub-drawer-panel" + openClass}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ub-cart-title"
        tabIndex={-1}
      >
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div id="ub-cart-title" style={{ fontSize: 17, fontWeight: 700, color: "var(--white)" }}>장바구니</div>
            <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 2 }}>{cart.length} ITEM{cart.length !== 1 ? "S" : ""}</div>
          </div>
          <button type="button" onClick={onClose} className="ub-drawer-iconbtn" aria-label="장바구니 닫기">{Ic.x}</button>
        </div>
        <div className="ub-drawer-body">
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: 40, color: "var(--gray-400)" }}>
              <div style={{ fontSize: 32, marginBottom: 14, opacity: 0.4 }}>{Ic.cart}</div>
              <div style={{ fontSize: 13, marginBottom: 20 }}>장바구니가 비어있습니다</div>
              {onBrowse && (
                <Btn variant="primary" onClick={onBrowse}>카탈로그 보러 가기 {Ic.arrow}</Btn>
              )}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {cart.map((it, i) => {
                const m = MODELS.find(x => x.id === it.id);
                if (!m) return null;
                return (
                  <div key={i} className="ub-card" style={{ padding: 14, display: "flex", gap: 12 }}>
                    <div style={{ width: 56, height: 56, background: "rgba(255,255,255,0.03)", borderRadius: 8, display: "grid", placeItems: "center", flexShrink: 0 }}><Bracket size={48} /></div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                          <div className="ub-mono" style={{ fontSize: 10, color: "var(--gray-400)" }}>{m.code}</div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--white)", margin: "2px 0" }}>{m.name}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(i)}
                          className="ub-drawer-iconbtn"
                          aria-label={`${m.name} 제거`}
                          style={{ fontSize: 11 }}
                        >{Ic.x}</button>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                        <div className="ub-qty-group" role="group" aria-label={`${m.name} 수량`}>
                          <button
                            type="button"
                            className="ub-qty-btn"
                            onClick={() => onUpdate(i, Math.max(1, it.qty - 1))}
                            disabled={it.qty <= 1}
                            aria-label="수량 감소"
                          >−</button>
                          <span className="ub-mono ub-qty-divider" style={{ padding: "4px 10px", color: "var(--white)", minWidth: 32, textAlign: "center" }} aria-live="polite">{it.qty}</span>
                          <button
                            type="button"
                            className="ub-qty-btn ub-qty-divider"
                            onClick={() => onUpdate(i, it.qty + 1)}
                            aria-label="수량 증가"
                          >+</button>
                        </div>
                        <span className="ub-mono" style={{ fontSize: 13, color: "var(--white)", fontWeight: 600 }}>₩{(m.price * it.qty).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="ub-drawer-footer">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6, fontSize: 12, color: "var(--gray-300)" }}>
              <span>상품 금액</span>
              <span className="ub-mono">₩{subtotal.toLocaleString()}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10, fontSize: 12, color: "var(--gray-300)" }}>
              <span>배송비</span>
              <span className="ub-mono" style={{ color: ship === 0 ? "var(--success, #4ADE80)" : "var(--white)" }}>
                {ship === 0 ? "무료" : `₩${ship.toLocaleString()}`}
              </span>
            </div>
            {remainForFree > 0 && (
              <div style={{ fontSize: 11, color: "var(--cyan-400)", marginBottom: 12, textAlign: "right" }}>
                ₩{remainForFree.toLocaleString()} 더 담으면 무료배송
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14, paddingTop: 12, borderTop: "1px solid var(--line)" }}>
              <div className="ub-spec-key">합계</div>
              <div className="ub-mono" style={{ fontSize: 24, fontWeight: 700, color: "var(--white)" }}>₩{total.toLocaleString()}</div>
            </div>
            <Btn variant="primary" size="lg" full onClick={onCheckout}>결제하기 {Ic.arrow}</Btn>
          </div>
        )}
      </div>
    </>
  );
};

// ─── DONE MODAL ───────────────────────────────────────────────────────────────
const DoneModal = ({ data, onClose, onHome }) => (
  <>
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200, backdropFilter: "blur(8px)" }} />
    <div style={{ position: "fixed", inset: 0, zIndex: 201, display: "grid", placeItems: "center", padding: 40 }}>
      <div className="ub-card" style={{ maxWidth: 500, width: "100%", textAlign: "center", padding: 40, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 400px 200px at 50% 0%, rgba(0,200,240,0.15), transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ width: 72, height: 72, margin: "0 auto 20px", borderRadius: "50%", background: "linear-gradient(135deg, var(--cyan-400), var(--cyan-500))", display: "grid", placeItems: "center", color: "var(--navy-950)", boxShadow: "0 20px 60px -10px var(--cyan-glow)" }}>{Ic.check}</div>
          <div className="ub-eyebrow" style={{ marginBottom: 8 }}>ORDER · #2026-04-30-{Math.floor(Math.random()*9000+1000)}</div>
          <div className="ub-h2" style={{ fontSize: 26, marginBottom: 12 }}>주문이 접수되었습니다</div>
          <div style={{ color: "var(--gray-200)", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
            결제 확인 후 <span style={{ color: "var(--cyan-400)", fontWeight: 600 }}>1영업일 이내 제작</span>에 착수합니다.<br/>
            {data.email
              ? <>주문번호와 영수증은 <span style={{ color: "var(--white)" }}>{data.email}</span>로 발송됩니다.</>
              : <>주문 진행 안내는 <span style={{ color: "var(--white)" }}>{data.phone}</span>로 문자 전송됩니다.</>}
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <Btn variant="ghost" onClick={onHome}>메인으로</Btn>
            <Btn variant="primary" onClick={onClose}>시공사례 보기</Btn>
          </div>
        </div>
      </div>
    </div>
  </>
);

// ─── ABOUT (간단) ─────────────────────────────────────────────────────────────
const AboutPage = () => (
  <div style={{ padding: "clamp(28px, 6vw, 60px) clamp(16px, 5vw, 80px)", maxWidth: 800 }}>
    <div className="ub-eyebrow" style={{ marginBottom: 10 }}>ABOUT US</div>
    <h2 className="ub-h2" style={{ marginBottom: 20 }}>에스디컨버전스</h2>
    <div style={{ color: "var(--gray-200)", fontSize: 15, lineHeight: 1.9, wordBreak: "keep-all" }}>
      <p style={{ margin: "0 0 18px" }}>
        에스디컨버전스(SD Convergence)는<br/>
        <strong style={{ color: "var(--white)" }}>현장을 직접 겪은 출입통제 전문가</strong>가<br/>
        3D 프린팅으로 만든 브랜드입니다.
      </p>
      <p style={{ margin: 0 }}>
        슈프리마 단말기 전용 브라켓을 시작으로<br/>
        시장에 없는 부품을 <strong style={{ color: "var(--white)" }}>1개 단위</strong>로 제작하고<br/>
        있는 제품도 현장에 꼭 맞게 다시 설계합니다.
      </p>
    </div>
    <div className="ub-card" style={{ marginTop: 40 }}>
      <div className="ub-spec-key" style={{ marginBottom: 14 }}>회사 정보</div>
      <table style={{ width: "100%", fontSize: 13 }}>
        <tbody>
          {[["대표", "허희경"], ["사업자등록번호", "449-56-00430"], ["통신판매업", "[번호 발급 후 기재]"], ["사업장 주소", "경기도 용인시 기흥구 기흥역로58번길 78 103동 1303호"], ["연락처", "010-9090-9029 / leedoo80@gmail.com"]].map(([k, v]) => (
            <tr key={k} style={{ borderTop: "1px solid var(--line)" }}>
              <td style={{ padding: "12px 0", color: "var(--gray-400)", width: 160, fontFamily: "var(--font-mono)", fontSize: 11 }}>{k.toUpperCase()}</td>
              <td style={{ padding: "12px 0", color: "var(--white)" }}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ─── FOOTER ──────────────────────────────────────────────────────────────────
const Footer = ({ onNav }) => {
  const isMobile = useIsMobile4(1024);
  return (
  <footer style={{ borderTop: "1px solid var(--line)", padding: isMobile ? "28px 16px" : "32px 80px", background: "var(--navy-900)", marginTop: isMobile ? 40 : 60 }}>
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1.4fr 1fr 1fr 1fr", gap: isMobile ? 20 : 48, marginBottom: 24 }}>
      <div style={{ gridColumn: isMobile ? "span 2" : "auto" }}>
        <div className="ub-logo"><div className="ub-logo-mark">3D</div><span>UNIBOX</span></div>
        <img src="/sd_white.png" alt="에스디컨버전스 (SD Convergence)"
             style={{ height: 26, width: "auto", display: "block", marginTop: 14 }} />
        <div style={{ marginTop: 10, fontSize: 12, color: "var(--gray-300)", lineHeight: 1.7 }}>
          대표 허희경 · 사업자등록번호 449-56-00430<br/>통신판매업신고 [번호 발급 후 기재]<br/>경기도 용인시 기흥구 기흥역로58번길 78 103동 1303호
        </div>
      </div>
      {[
        { t: "제품", items: [["전체보기", () => onNav({ name: "catalog" })], ["장바구니", () => onNav({ name: "catalog" })]] },
        { t: "고객지원", items: [["시공사례", () => onNav({ name: "guide" })], ["FAQ", () => onNav({ name: "faq" })]] },
        { t: "문의", items: [["010-9090-9029", null], ["leedoo80@gmail.com", null], ["평일 09–18시", null]] },
      ].map(c => (
        <div key={c.t}>
          <div className="ub-spec-key" style={{ marginBottom: 12 }}>{c.t}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {c.items.map(([l, fn]) => <span key={l} onClick={fn || undefined} style={{ fontSize: 12, color: "var(--gray-200)", cursor: fn ? "pointer" : "default" }}>{l}</span>)}
          </div>
        </div>
      ))}
    </div>
    <div style={{ paddingTop: 20, borderTop: "1px solid var(--line)", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: isMobile ? 8 : 0, fontSize: 11, color: "var(--gray-400)" }}>
      <div>© 2026 SD Convergence. All rights reserved.</div>
      <div style={{ display: "flex", gap: 16 }}>
        <span style={{ cursor: "pointer" }} onClick={() => onNav({ name: "terms" })}>이용약관</span>
        <span style={{ cursor: "pointer", fontWeight: 600, color: "var(--gray-200)" }} onClick={() => onNav({ name: "privacy" })}>개인정보처리방침</span>
      </div>
    </div>
  </footer>
  );
};

window.UB.OrderPage = OrderPage;
window.UB.CartDrawer = CartDrawer;
window.UB.DoneModal = DoneModal;
window.UB.AboutPage = AboutPage;
window.UB.Footer = Footer;
