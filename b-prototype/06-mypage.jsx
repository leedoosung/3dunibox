// B안 — 페이지 5: 마이페이지 (#me)
// 인증 도입 전 — localStorage 기반 임시 저장. 추후 회원 API 연동.
const { useState: uS6, useEffect: uE6 } = React;
const {
  MODELS: MODELS6, Ic: Ic6, Btn: Btn6, calcShip: calcShip6,
  loadMe, saveMe, useIsMobile: useIsMobile6,
} = window.UB;

// 빈 게스트 셸
const EMPTY_ME = { name: "", phone: "", email: "", addresses: [] };

// 정식 오픈 전 데이터 — 첫 주문 시 마이페이지에 자동 누적됨
// 주문 이력은 추후 Supabase orders 테이블에서 fetch (Phase 다음)

const STATUS_TINT = {
  "결제완료": "#2E7CF6", "제작중": "#FBBF24", "배송중": "#A78BFA", "완료": "#4ADE80", "취소": "#9CA3AF",
};

const MyPage = () => {
  const isMobile = useIsMobile6(1024);
  const [tab, setTab] = uS6("info");
  const [me, setMe] = uS6(EMPTY_ME);
  const [editing, setEditing] = uS6(null);
  const [draft, setDraft] = uS6(null);
  const [loaded, setLoaded] = uS6(false);
  const auth = (window.UB.useAuth ? window.UB.useAuth() : { user: null });
  const authUser = auth.user;

  // 로그인 사용자가 바뀌면 Supabase에서 profiles + addresses 다시 fetch
  uE6(() => {
    let cancelled = false;
    setLoaded(false);
    if (!authUser) {
      setMe(EMPTY_ME);
      setLoaded(true);
      return;
    }
    const sb = window.SUPABASE;
    if (!sb) { setLoaded(true); return; }
    (async () => {
      try {
        const [pf, ad] = await Promise.all([
          sb.from("profiles").select("name,phone").eq("id", authUser.id).maybeSingle(),
          sb.from("addresses").select("*").eq("user_id", authUser.id).order("created_at", { ascending: true }),
        ]);
        if (cancelled) return;
        const profile = pf.data || {};
        const addresses = (ad.data || []).map(a => ({
          id: a.id, label: a.label, name: a.name, phone: a.phone,
          zip: a.zip, addr1: a.addr1, addr2: a.addr2, isDefault: a.is_default,
        }));
        setMe({
          name: profile.name || "",
          phone: profile.phone || "",
          email: authUser.email || "",
          addresses,
        });
      } catch (e) {
        console.warn("[mypage] fetch 실패:", e);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => { cancelled = true; };
  }, [authUser?.id]);

  // 명시적 저장 버튼으로만 저장 — 자동 저장 없음
  const [saving, setSaving] = uS6(false);
  const [savedToast, setSavedToast] = uS6(false);
  const saveProfile = async () => {
    if (!authUser) return;
    const sb = window.SUPABASE;
    if (!sb) return;
    setSaving(true);
    try {
      await sb.from("profiles").upsert({ id: authUser.id, name: me.name || null, phone: me.phone || null });
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 1800);
    } catch (e) {
      alert("저장 실패: " + (e.message || e));
    } finally {
      setSaving(false);
    }
  };

  const clear = () => { if (confirm("내 정보를 모두 비우시겠어요?")) setMe(EMPTY_ME); };

  const updMe = (k, v) => setMe(m => ({ ...m, [k]: v }));

  const startNew = () => {
    setDraft({ id: `a_${Date.now()}`, label: "", name: me.name, phone: me.phone, zip: "", addr1: "", addr2: "", isDefault: (me.addresses || []).length === 0 });
    setEditing("new");
  };
  const startEdit = (a) => { setDraft({ ...a }); setEditing(a.id); };
  const cancelEdit = () => { setDraft(null); setEditing(null); };
  const saveDraft = async () => {
    if (!draft || !draft.label || !draft.name || !draft.phone || !draft.zip || !draft.addr1) return;
    const sb = window.SUPABASE;
    if (!authUser || !sb) { cancelEdit(); return; }
    const isNew = String(draft.id).startsWith("a_");
    const payload = {
      user_id: authUser.id,
      label: draft.label, name: draft.name, phone: draft.phone,
      zip: draft.zip, addr1: draft.addr1, addr2: draft.addr2 || "",
      is_default: !!draft.isDefault,
    };
    try {
      let saved;
      if (isNew) {
        const { data, error } = await sb.from("addresses").insert(payload).select().single();
        if (error) throw error;
        saved = data;
      } else {
        const { data, error } = await sb.from("addresses").update(payload).eq("id", draft.id).select().single();
        if (error) throw error;
        saved = data;
      }
      // 로컬 state 갱신
      setMe(m => {
        const addresses = [...(m.addresses || [])];
        if (saved.is_default) addresses.forEach(a => { a.isDefault = false; });
        const next = { id: saved.id, label: saved.label, name: saved.name, phone: saved.phone, zip: saved.zip, addr1: saved.addr1, addr2: saved.addr2, isDefault: saved.is_default };
        const idx = addresses.findIndex(a => a.id === saved.id);
        if (idx >= 0) addresses[idx] = next; else addresses.push(next);
        return { ...m, addresses };
      });
    } catch (e) {
      alert("주소 저장 실패: " + (e.message || e));
    }
    cancelEdit();
  };
  const removeAddr = async (id) => {
    if (!confirm("이 주소를 삭제할까요?")) return;
    const sb = window.SUPABASE;
    if (sb && authUser) {
      try { await sb.from("addresses").delete().eq("id", id); }
      catch (e) { alert("삭제 실패: " + (e.message || e)); return; }
    }
    setMe(m => ({ ...m, addresses: m.addresses.filter(a => a.id !== id) }));
  };
  const setDefault = async (id) => {
    const sb = window.SUPABASE;
    if (sb && authUser) {
      try { await sb.from("addresses").update({ is_default: true }).eq("id", id); }
      catch (e) { alert("기본 설정 실패: " + (e.message || e)); return; }
    }
    setMe(m => ({ ...m, addresses: m.addresses.map(a => ({ ...a, isDefault: a.id === id })) }));
  };

  const hasInfo = me.name || me.phone || me.email;
  const orders = me.history || [];

  const TABS = [
    { id: "info",    label: "내 정보" },
    { id: "history", label: "주문 이력" },
  ];

  return (
    <div style={{ minHeight: "calc(100vh - 60px)", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "220px 1fr", background: "var(--navy-950)" }}>
      {isMobile ? (
        <div style={{ borderBottom: "1px solid var(--line)", background: "var(--navy-900)", padding: "14px 16px" }}>
          <div className="ub-eyebrow" style={{ marginBottom: 6 }}>MY PAGE</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "var(--white)", marginBottom: 12 }}>
            {hasInfo ? me.name || "이름 없음" : "게스트"}
            {hasInfo && <span className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)", marginLeft: 10, fontWeight: 400 }}>{me.email || me.phone}</span>}
          </div>
          <nav style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 }}>
            {TABS.map(it => {
              const active = tab === it.id;
              return (
                <button key={it.id} type="button" onClick={() => setTab(it.id)}
                  style={{ flexShrink: 0, padding: "8px 14px", borderRadius: 100,
                    background: active ? "rgba(46,124,246,0.12)" : "transparent",
                    color: active ? "var(--cyan-400)" : "var(--gray-200)",
                    border: `1px solid ${active ? "var(--cyan-400)" : "var(--line)"}`,
                    fontSize: 12, fontWeight: active ? 700 : 500, cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 6 }}>
                  {it.label}
                  {it.badge ? <span className="ub-mono" style={{ minWidth: 20, padding: "1px 6px", borderRadius: 100, fontSize: 10, fontWeight: 700, background: active ? "var(--cyan-400)" : "rgba(255,255,255,0.08)", color: active ? "var(--navy-950)" : "var(--gray-200)" }}>{it.badge}</span> : null}
                </button>
              );
            })}
          </nav>
        </div>
      ) : (
        <aside style={{ borderRight: "1px solid var(--line)", padding: "32px 16px", background: "var(--navy-900)" }}>
          <div className="ub-eyebrow" style={{ marginBottom: 8, paddingLeft: 8 }}>MY PAGE</div>
          <div style={{ paddingLeft: 8, marginBottom: 24 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: "var(--white)" }}>
              {hasInfo ? me.name || "이름 없음" : "게스트"}
            </div>
            {hasInfo && <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 2 }}>{me.email || me.phone}</div>}
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {TABS.map(it => {
              const active = tab === it.id;
              return (
                <button key={it.id} type="button" onClick={() => setTab(it.id)}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "10px 12px", borderRadius: 8,
                    background: active ? "rgba(46,124,246,0.10)" : "transparent",
                    color: active ? "var(--cyan-400)" : "var(--gray-200)",
                    border: active ? "1px solid rgba(46,124,246,0.25)" : "1px solid transparent",
                    fontSize: 13, fontWeight: active ? 600 : 500,
                    cursor: "pointer", textAlign: "left",
                  }}>
                  <span>{it.label}</span>
                  {it.badge ? (
                    <span className="ub-mono" style={{ minWidth: 22, padding: "1px 7px", borderRadius: 100, fontSize: 10, fontWeight: 700, background: "var(--cyan-400)", color: "var(--navy-950)" }}>{it.badge}</span>
                  ) : null}
                </button>
              );
            })}
          </nav>
          {authUser && (
            <button type="button" onClick={() => window.UB.signOut().then(() => location.reload())}
              style={{ marginTop: 24, width: "100%", fontSize: 12, padding: "10px 0", borderRadius: 6, background: "transparent", border: "1px solid var(--line-strong)", color: "var(--gray-200)", cursor: "pointer" }}>
              로그아웃
            </button>
          )}
        </aside>
      )}

      {/* 본문 */}
      <main style={{ padding: isMobile ? "20px 16px" : "32px 40px", overflow: "auto" }}>
        <div style={{ marginBottom: 22 }}>
          <div className="ub-eyebrow">{tab === "info" ? "PROFILE" : tab === "addresses" ? "ADDRESS BOOK" : "ORDER HISTORY"}</div>
          <h2 className="ub-h2" style={{ fontSize: 28, marginTop: 6 }}>
            {tab === "info" ? "내 정보" : "주문 이력"}
          </h2>
        </div>

        {tab === "info" && (
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 18 }}>
            {/* 기본 정보 */}
            <div className="ub-card">
              <div className="ub-spec-key" style={{ marginBottom: 14 }}>기본 정보</div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
                <div>
                  <label className="ub-label ub-label-req">이름</label>
                  <input className="ub-input" value={me.name} onChange={e => updMe("name", e.target.value)} placeholder="홍길동" />
                </div>
                <div>
                  <label className="ub-label ub-label-req">전화번호</label>
                  <input className="ub-input ub-mono" value={me.phone} onChange={e => updMe("phone", e.target.value)} placeholder="010-0000-0000" />
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <label className="ub-label">이메일 <span style={{ color: "var(--gray-400)", fontWeight: 400 }}>(선택)</span></label>
                  <input className="ub-input ub-mono" value={me.email} onChange={e => updMe("email", e.target.value)} placeholder="name@example.com" />
                </div>
              </div>
              <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end", gap: 10, alignItems: "center" }}>
                {savedToast && <span style={{ fontSize: 12, color: "var(--success, #4ADE80)" }}>✓ 저장되었습니다</span>}
                <Btn6 variant="primary" onClick={saveProfile} disabled={saving}>
                  {saving ? "저장 중…" : "저장"}
                </Btn6>
              </div>
            </div>

            {/* 주소록 통합 */}
            <div className="ub-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <div className="ub-spec-key" style={{ margin: 0 }}>주소록 ({(me.addresses || []).length})</div>
                <Btn6 variant="ghost" onClick={startNew}>{Ic6.plus} 새 주소 추가</Btn6>
              </div>

              {(me.addresses || []).length === 0 && editing !== "new" ? (
                <div style={{ padding: 24, textAlign: "center", color: "var(--gray-400)", fontSize: 13, border: "1px dashed var(--line)", borderRadius: 8 }}>
                  저장된 주소가 없습니다 — 새 주소를 추가하면 결제 시 자동 입력됩니다.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {(me.addresses || []).map(a => (
                    editing === a.id ? <AddressEditor key={a.id} draft={draft} setDraft={setDraft} onSave={saveDraft} onCancel={cancelEdit} />
                                     : <AddressRow   key={a.id} a={a} onEdit={() => startEdit(a)} onRemove={() => removeAddr(a.id)} onDefault={() => setDefault(a.id)} />
                  ))}
                  {editing === "new" && <AddressEditor draft={draft} setDraft={setDraft} onSave={saveDraft} onCancel={cancelEdit} />}
                </div>
              )}
            </div>
          </div>
        )}

        {tab === "history" && (
          <div style={{ maxWidth: 880 }}>
            {orders.length === 0 ? (
              <div className="ub-card" style={{ padding: 40, textAlign: "center", color: "var(--gray-400)" }}>
                주문 이력이 없습니다 — 첫 주문 후 여기에 표시됩니다.
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {orders.map(o => {
                  const subtotal = o.items.reduce((s, it) => { const m = MODELS6.find(x => x.id === it.id); return s + (m ? m.price * it.qty : 0); }, 0);
                  const total = subtotal + calcShip6(subtotal);
                  return (
                    <div key={o.no} className="ub-card" style={{ padding: 16, display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ flex: 1 }}>
                        <div className="ub-mono" style={{ fontSize: 11, color: "var(--cyan-400)" }}>{o.no}</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--white)", marginTop: 2 }}>
                          {o.items.map(it => { const m = MODELS6.find(x => x.id === it.id); return m ? `${m.name} ×${it.qty}` : ""; }).join(", ")}
                        </div>
                        <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 4 }}>{o.date}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div className="ub-mono" style={{ fontSize: 16, fontWeight: 700, color: "var(--white)" }}>₩{total.toLocaleString()}</div>
                        <div style={{ fontSize: 11, color: STATUS_TINT[o.status] || "var(--gray-400)", fontWeight: 600, marginTop: 4 }}>● {o.status}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

const AddressRow = ({ a, onEdit, onRemove, onDefault }) => (
  <div className="ub-card" style={{ padding: 16, display: "flex", gap: 14, background: a.isDefault ? "rgba(46,124,246,0.04)" : undefined }}>
    <div style={{ flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--white)" }}>{a.label}</span>
        {a.isDefault && <span style={{ fontSize: 10, color: "var(--cyan-400)", padding: "1px 8px", border: "1px solid var(--cyan-400)", borderRadius: 100 }}>기본</span>}
      </div>
      <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)" }}>{a.zip}</div>
      <div style={{ fontSize: 13, color: "var(--gray-100)", marginTop: 2 }}>{a.addr1}</div>
      <div style={{ fontSize: 13, color: "var(--gray-200)" }}>{a.addr2}</div>
      <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-300)", marginTop: 6 }}>{a.name} · {a.phone}</div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
      {!a.isDefault && (
        <button type="button" onClick={onDefault} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, background: "transparent", border: "1px solid var(--line-strong)", color: "var(--gray-200)", cursor: "pointer" }}>기본으로</button>
      )}
      <div style={{ display: "flex", gap: 6 }}>
        <button type="button" onClick={onEdit} className="ub-drawer-iconbtn" aria-label="편집">{Ic6.pencil}</button>
        <button type="button" onClick={onRemove} className="ub-drawer-iconbtn" aria-label="삭제">{Ic6.trash}</button>
      </div>
    </div>
  </div>
);

const AddressEditor = ({ draft, setDraft, onSave, onCancel }) => {
  if (!draft) return null;
  const upd = (k, v) => setDraft(d => ({ ...d, [k]: v }));
  const isMobile = useIsMobile6(1024);
  return (
    <div className="ub-card" style={{ padding: 16, border: "1px solid var(--cyan-400)", boxShadow: "0 0 0 4px rgba(46,124,246,0.08)" }}>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
        <div>
          <label className="ub-label ub-label-req">주소 라벨</label>
          <input className="ub-input" placeholder="예: 자택 / 사무실" value={draft.label} onChange={e => upd("label", e.target.value)} />
        </div>
        <div>
          <label className="ub-label">받는 분</label>
          <input className="ub-input" placeholder="홍길동" value={draft.name} onChange={e => upd("name", e.target.value)} />
        </div>
        <div>
          <label className="ub-label ub-label-req">연락처</label>
          <input className="ub-input ub-mono" placeholder="010-0000-0000" value={draft.phone} onChange={e => upd("phone", e.target.value)} />
        </div>
        <div>
          <label className="ub-label ub-label-req">우편번호</label>
          <div style={{ display: "flex", gap: 8 }}>
            <input className="ub-input ub-mono" placeholder="00000" value={draft.zip} onChange={e => upd("zip", e.target.value)} style={{ flex: 1 }} />
            <Btn6 variant="ghost" onClick={() => window.UB.openPostcode(({ zip, addr1 }) => { upd("zip", zip); upd("addr1", addr1); })}>검색</Btn6>
          </div>
        </div>
        <div style={{ gridColumn: "span 2" }}>
          <label className="ub-label ub-label-req">주소</label>
          <input className="ub-input" placeholder="기본 주소" value={draft.addr1} onChange={e => upd("addr1", e.target.value)} style={{ marginBottom: 8 }} />
          <input className="ub-input" placeholder="상세 주소 (동·호수 등)" value={draft.addr2} onChange={e => upd("addr2", e.target.value)} />
        </div>
        <label style={{ gridColumn: "span 2", display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--gray-200)", cursor: "pointer" }}>
          <input type="checkbox" checked={!!draft.isDefault} onChange={e => upd("isDefault", e.target.checked)} />
          <span>기본 배송지로 설정</span>
        </label>
      </div>
      <div style={{ marginTop: 14, display: "flex", justifyContent: "flex-end", gap: 8 }}>
        <Btn6 variant="ghost" onClick={onCancel}>취소</Btn6>
        <Btn6 variant="primary" onClick={onSave}>저장</Btn6>
      </div>
    </div>
  );
};

window.UB.MyPage = MyPage;
