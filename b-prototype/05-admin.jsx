// B안 — 페이지 4: 관리자 페이지 (UI 윤곽 only)
// 인증/결제/도메인/배송 API 연동은 풀스택 전환 시점에 추가.
// 현재는 인메모리 더미 데이터로 화면·인터랙션만 구현.
const { useState: uS5, useMemo: uM5, useEffect: uE5 } = React;
const { MODELS: MODELS5, Ic: Ic5, Btn: Btn5, calcShip: calcShip5,
        MEMBERS: MEMBERS5, calcGrade: calcGrade5, GRADE_COLORS: GRADE_COLORS5,
        useIsMobile: useIsMobile5 } = window.UB;

// ─── 주문 상태 (카드 선결제 흐름) ────────────────────────────────────────────
// 결제완료 → 제작중 → 배송중 → 완료. 취소는 별도.
const STATUS_FLOW = ["결제완료", "제작중", "배송중", "완료"];
const STATUS_COLORS = {
  "결제완료": { bg: "rgba(0,200,240,0.15)",   fg: "#00C8F0", dot: "#00C8F0" },
  "제작중":   { bg: "rgba(251,191,36,0.15)",  fg: "#FBBF24", dot: "#FBBF24" },
  "배송중":   { bg: "rgba(167,139,250,0.15)", fg: "#A78BFA", dot: "#A78BFA" },
  "완료":     { bg: "rgba(74,222,128,0.15)",  fg: "#4ADE80", dot: "#4ADE80" },
  "취소":     { bg: "rgba(255,255,255,0.05)", fg: "#9CA3AF", dot: "#9CA3AF" },
};

// 실제 주문은 결제 시 Supabase orders 테이블에 저장 (Phase 다음 단계).
// 현재는 빈 상태에서 시작 — 실 주문 들어오면 채워짐.
const SEED_ORDERS = [];

const orderSubtotal = (o) => o.items.reduce((s, it) => {
  const m = MODELS5.find(x => x.id === it.id);
  return s + (m ? m.price * it.qty : 0);
}, 0);
const orderShip = (o) => calcShip5(orderSubtotal(o));
const orderTotal = (o) => orderSubtotal(o) + orderShip(o);

const formatItems = (items) => items.map(it => {
  const m = MODELS5.find(x => x.id === it.id);
  return m ? `${m.name} ×${it.qty}` : `? ×${it.qty}`;
}).join(", ");

// CSV 다운로드 — Excel 한글 호환을 위해 UTF-8 BOM, 줄바꿈 \r\n
const downloadCSV = (filename, headers, rows) => {
  const esc = (v) => {
    const s = v == null ? "" : String(v);
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = [headers.map(esc).join(","), ...rows.map(r => r.map(esc).join(","))];
  const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

// ─── 작은 컴포넌트 ────────────────────────────────────────────────────────────
const KpiCard = ({ label, value, sub, accent }) => (
  <div className="ub-card" style={{ padding: 20, position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 200px 80px at 90% 0%, ${accent || "rgba(0,200,240,0.10)"}, transparent 70%)` }} />
    <div style={{ position: "relative" }}>
      <div className="ub-spec-key" style={{ marginBottom: 10 }}>{label}</div>
      <div className="ub-mono" style={{ fontSize: 26, fontWeight: 700, color: "var(--white)" }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 6 }}>{sub}</div>}
    </div>
  </div>
);

const StatusPill = ({ status }) => {
  const c = STATUS_COLORS[status] || STATUS_COLORS["접수"];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "3px 10px", borderRadius: 100,
      fontSize: 11, fontWeight: 600, color: c.fg, background: c.bg,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.dot }} />
      {status}
    </span>
  );
};

// ─── ADMIN PAGE ───────────────────────────────────────────────────────────────
// ─── 관리자 진입 게이트 ─────────────────────────────────────────────────────
// 클라이언트 측 ID/PW 차단. 우연한 외부인 차단용 — 진짜 보안은 추후 RLS로.
const ADMIN_GATE_KEY = "ub:admin:authed";
const ADMIN_ID = "admin";
const ADMIN_PW = "lee91059105*";

const AdminGate = ({ onPass }) => {
  const [id, setId] = uS5("");
  const [pw, setPw] = uS5("");
  const [err, setErr] = uS5(false);

  const submit = () => {
    if (id === ADMIN_ID && pw === ADMIN_PW) {
      try { sessionStorage.setItem(ADMIN_GATE_KEY, "1"); } catch (e) {}
      onPass();
    } else {
      setErr(true);
      setTimeout(() => setErr(false), 2000);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "40px 20px", background: "var(--navy-950)" }}>
      <div style={{ width: "min(380px, 100%)", background: "var(--navy-800)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px 28px" }}>
        <div className="ub-eyebrow" style={{ marginBottom: 8 }}>ADMIN</div>
        <h2 className="ub-h2" style={{ fontSize: 22, marginBottom: 6 }}>관리자 로그인</h2>
        <p style={{ color: "var(--gray-400)", fontSize: 12, marginBottom: 22 }}>관리자 ID / 비밀번호를 입력하세요.</p>

        <label className="ub-label">ID</label>
        <input className="ub-input" autoComplete="username" value={id} onChange={e => setId(e.target.value)} placeholder="admin" />

        <label className="ub-label" style={{ marginTop: 12 }}>비밀번호</label>
        <input className="ub-input" type="password" autoComplete="current-password" value={pw} onChange={e => setPw(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") submit(); }} placeholder="••••••••" />

        {err && (
          <div style={{ marginTop: 12, padding: "8px 10px", borderRadius: 6, fontSize: 12, color: "var(--warning, #FBBF24)", background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.3)" }}>
            ID 또는 비밀번호가 올바르지 않습니다.
          </div>
        )}

        <button type="button" onClick={submit}
          style={{ width: "100%", padding: "12px 14px", borderRadius: 10, marginTop: 18,
            background: "var(--cyan-400)", color: "var(--navy-950)", border: 0,
            fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          로그인
        </button>
      </div>
    </div>
  );
};

const AdminPageInner = () => {
  const [orders, setOrders] = uS5(SEED_ORDERS);
  const [tab, setTab] = uS5("orders");           // orders | members | stats
  const [q, setQ] = uS5("");
  const [statusFilter, setStatusFilter] = uS5("all");
  const [selected, setSelected] = uS5(null);     // 주문번호 (디테일 드로어)

  // 회원 — Supabase RPC 로 fetch
  const [members, setMembers] = uS5([]);
  const [memLoading, setMemLoading] = uS5(true);
  const [memError, setMemError] = uS5(null);

  const reloadMembers = async () => {
    const sb = window.SUPABASE;
    if (!sb) { setMemLoading(false); setMemError("Supabase 클라이언트 미초기화"); return; }
    setMemLoading(true); setMemError(null);
    try {
      const { data, error } = await sb.rpc("admin_list_members", { p_secret: ADMIN_PW });
      if (error) throw error;
      const rows = (data || []).map(r => ({
        id: r.id,
        email: r.email || "",
        name: r.name || "",
        phone: r.phone || "",
        joinedAt: r.joined_at ? String(r.joined_at).slice(0, 10) : "",
        totalOrders: r.total_orders || 0,
        totalSpent: r.total_spent || 0,
        lastOrderAt: r.last_order_at ? String(r.last_order_at).slice(0, 10) : "",
        addresses: Array.isArray(r.addresses) ? r.addresses : [],
        note: "",
      }));
      setMembers(rows);
    } catch (e) {
      console.warn("[admin] members fetch 실패:", e);
      setMemError(e?.message || String(e));
      setMembers([]);
    } finally {
      setMemLoading(false);
    }
  };

  uE5(() => { reloadMembers(); }, []);

  const filtered = uM5(() => {
    return orders.filter(o => {
      if (statusFilter !== "all" && o.status !== statusFilter) return false;
      if (q.trim()) {
        const k = q.trim().toLowerCase();
        const hay = `${o.no} ${o.customer} ${o.phone} ${formatItems(o.items)}`.toLowerCase();
        if (!hay.includes(k)) return false;
      }
      return true;
    });
  }, [orders, q, statusFilter]);

  const kpis = uM5(() => {
    const today = "2026-04-30";
    const open = orders.filter(o => ["결제완료", "제작중"].includes(o.status));
    const todayOrders = orders.filter(o => o.date.startsWith(today) && o.status !== "취소");
    const shipping = orders.filter(o => o.status === "배송중");
    const lifetime = orders.filter(o => o.status !== "취소").reduce((s, o) => s + orderTotal(o), 0);
    return {
      open: open.length,
      todaySales: todayOrders.reduce((s, o) => s + orderTotal(o), 0),
      shipping: shipping.length,
      lifetime,
    };
  }, [orders]);

  const updateOrder = (no, patch) => setOrders(list => list.map(o => o.no === no ? { ...o, ...patch } : o));
  const advance = (no) => setOrders(list => list.map(o => {
    if (o.no !== no) return o;
    const idx = STATUS_FLOW.indexOf(o.status);
    if (idx < 0 || idx === STATUS_FLOW.length - 1) return o;
    return { ...o, status: STATUS_FLOW[idx + 1] };
  }));

  const sel = orders.find(o => o.no === selected);
  const isMobile = useIsMobile5(1024);

  const TABS = [
    { id: "orders",   label: "주문 관리",   badge: kpis.open },
    { id: "products", label: "제품 관리",   badge: null },
    { id: "cases",    label: "설치 사례",   badge: null },
    { id: "members",  label: "회원",        badge: members.length },
    { id: "stats",    label: "매출 통계",   badge: null },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "220px 1fr", background: "var(--navy-950)" }}>
      {/* 사이드바 (데스크톱) / 상단 가로 탭 (모바일) */}
      {isMobile ? (
        <div style={{ background: "var(--navy-900)", borderBottom: "1px solid var(--line)" }}>
          <nav style={{ display: "flex", gap: 6, padding: "12px 16px", overflowX: "auto", whiteSpace: "nowrap" }}>
            {TABS.map(it => {
              const active = tab === it.id;
              return (
                <button key={it.id} type="button" onClick={() => setTab(it.id)}
                  style={{
                    flexShrink: 0, padding: "8px 14px", borderRadius: 100,
                    background: active ? "rgba(0,200,240,0.12)" : "transparent",
                    color: active ? "var(--cyan-400)" : "var(--gray-200)",
                    border: `1px solid ${active ? "var(--cyan-400)" : "var(--line)"}`,
                    fontSize: 12, fontWeight: active ? 700 : 500, cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                  {it.label}
                  {it.badge ? <span className="ub-mono" style={{ minWidth: 20, padding: "1px 6px", borderRadius: 100, fontSize: 10, fontWeight: 700, background: active ? "var(--cyan-400)" : "rgba(255,255,255,0.08)", color: active ? "var(--navy-950)" : "var(--gray-200)" }}>{it.badge}</span> : null}
                </button>
              );
            })}
          </nav>
          <div style={{ display: "flex", gap: 6, padding: "0 16px 12px" }}>
            <button type="button" onClick={() => { location.href = "/"; }}
              style={{ flex: 1, fontSize: 11, padding: "6px 0", borderRadius: 6, background: "transparent", border: "1px solid var(--line-strong)", color: "var(--gray-200)", cursor: "pointer" }}>
              ← 사이트 메인
            </button>
            <button type="button" onClick={() => { try { sessionStorage.removeItem(ADMIN_GATE_KEY); } catch (e) {} location.reload(); }}
              style={{ flex: 1, fontSize: 11, padding: "6px 0", borderRadius: 6, background: "transparent", border: "1px solid var(--line-strong)", color: "var(--gray-300)", cursor: "pointer" }}>
              관리자 로그아웃
            </button>
          </div>
        </div>
      ) : (
        <aside style={{ borderRight: "1px solid var(--line)", padding: "32px 16px", background: "var(--navy-900)" }}>
          <div className="ub-eyebrow" style={{ marginBottom: 20, paddingLeft: 8 }}>ADMIN CONSOLE</div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {TABS.map(it => {
              const active = tab === it.id;
              return (
                <button key={it.id} type="button" onClick={() => setTab(it.id)}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "10px 12px", borderRadius: 8,
                    background: active ? "rgba(0,200,240,0.10)" : "transparent",
                    color: active ? "var(--cyan-400)" : "var(--gray-200)",
                    border: active ? "1px solid rgba(0,200,240,0.25)" : "1px solid transparent",
                    fontSize: 13, fontWeight: active ? 600 : 500,
                    cursor: "pointer", textAlign: "left",
                  }}>
                  <span>{it.label}</span>
                  {it.badge ? (
                    <span className="ub-mono" style={{
                      minWidth: 22, padding: "1px 7px", borderRadius: 100, fontSize: 10, fontWeight: 700,
                      background: "var(--cyan-400)", color: "var(--navy-950)",
                    }}>{it.badge}</span>
                  ) : null}
                </button>
              );
            })}
          </nav>
          <div style={{ marginTop: 28, padding: 12, border: "1px dashed var(--line-strong)", borderRadius: 8, fontSize: 11, lineHeight: 1.6, color: "var(--gray-400)" }}>
            <div style={{ color: "var(--warning, #FBBF24)", fontWeight: 600, marginBottom: 4 }}>⚠ 프로토타입</div>
            인증·결제·배송 API는 미연동.<br/>
            데이터는 메모리에서만 변동됩니다.
          </div>

          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
            <button type="button" onClick={() => { location.href = "/"; }}
              style={{ width: "100%", fontSize: 12, padding: "8px 0", borderRadius: 6, background: "transparent", border: "1px solid var(--line-strong)", color: "var(--gray-200)", cursor: "pointer" }}>
              ← 사이트 메인으로
            </button>
            <button type="button" onClick={() => { try { sessionStorage.removeItem(ADMIN_GATE_KEY); } catch (e) {} location.reload(); }}
              style={{ width: "100%", fontSize: 12, padding: "8px 0", borderRadius: 6, background: "transparent", border: "1px solid var(--line-strong)", color: "var(--gray-300)", cursor: "pointer" }}>
              관리자 로그아웃
            </button>
          </div>
        </aside>
      )}

      {/* 본문 */}
      <main style={{ padding: isMobile ? "20px 16px" : "32px 40px", overflow: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
          <div>
            <div className="ub-eyebrow">DASHBOARD</div>
            <h2 className="ub-h2" style={{ fontSize: isMobile ? 22 : 28, marginTop: 6 }}>
              {tab === "orders" ? "주문 관리" : tab === "products" ? "제품 관리" : tab === "cases" ? "설치 사례" : tab === "members" ? "회원" : "매출 통계"}
            </h2>
          </div>
          {!isMobile && <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)" }}>UPDATED 2026-04-30 10:30</div>}
        </div>

        {/* KPI */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 8 : 14, marginBottom: 22 }}>
          <KpiCard label="미처리 주문"  value={kpis.open}                                                  sub="결제완료 / 제작중"        accent="rgba(0,200,240,0.12)" />
          <KpiCard label="오늘 매출"    value={`₩${kpis.todaySales.toLocaleString()}`}                     sub="2026-04-30"                accent="rgba(74,222,128,0.12)" />
          <KpiCard label="출고 대기"    value={kpis.shipping}                                              sub="배송중 상태"               accent="rgba(167,139,250,0.12)" />
          <KpiCard label="누적 매출"    value={`₩${kpis.lifetime.toLocaleString()}`}                       sub="취소 제외"                 accent="rgba(251,191,36,0.12)" />
        </div>

        {tab === "orders" && (
          <>
            {/* 검색·필터 */}
            <div className="ub-card" style={{ padding: 14, display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
              <input
                type="text" value={q} onChange={(e) => setQ(e.target.value)}
                placeholder="주문번호 / 고객명 / 전화 / 모델 검색"
                style={{
                  flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid var(--line-strong)",
                  borderRadius: 8, padding: "8px 12px", color: "var(--white)", fontSize: 13,
                  fontFamily: "inherit", outline: "none",
                }}
              />
              <select
                value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid var(--line-strong)",
                  borderRadius: 8, padding: "8px 12px", color: "var(--white)", fontSize: 13,
                }}
              >
                <option value="all">전체 상태</option>
                {Object.keys(STATUS_COLORS).map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <Btn5 variant="ghost" onClick={() => { setQ(""); setStatusFilter("all"); }}>초기화</Btn5>
              <Btn5 variant="primary" onClick={() => {
                const headers = ["주문번호", "일시", "고객", "전화", "모델·수량", "소계", "배송비", "합계", "상태", "송장"];
                const rows = orders.map(o => [
                  o.no, o.date, o.customer, o.phone,
                  formatItems(o.items),
                  orderSubtotal(o), orderShip(o), orderTotal(o),
                  o.status, o.waybill || "",
                ]);
                const today = new Date().toISOString().slice(0, 10);
                downloadCSV(`주문_전체_${today}.csv`, headers, rows);
              }}>CSV 내보내기 {Ic5.arrow}</Btn5>
            </div>

            {/* 테이블 */}
            <div className="ub-card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 980 }}>
                  <thead>
                    <tr style={{ background: "rgba(255,255,255,0.02)", color: "var(--gray-400)", fontFamily: "var(--font-mono)" }}>
                      {["주문번호", "일시", "고객", "모델 · 수량", "금액", "상태", "송장", "액션"].map(h => (
                        <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontWeight: 500, fontSize: 10, letterSpacing: 1.2, borderBottom: "1px solid var(--line)" }}>{h.toUpperCase()}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr><td colSpan={8} style={{ padding: 40, textAlign: "center", color: "var(--gray-400)" }}>일치하는 주문이 없습니다</td></tr>
                    ) : filtered.map((o) => {
                      const total = orderTotal(o);
                      const last = o.status === "완료" || o.status === "취소";
                      return (
                        <tr key={o.no} style={{ borderTop: "1px solid var(--line)" }}>
                          <td style={{ padding: "12px 14px" }}>
                            <button type="button" onClick={() => setSelected(o.no)}
                              className="ub-mono"
                              style={{ background: "transparent", border: 0, color: "var(--cyan-400)", cursor: "pointer", fontSize: 12, padding: 0 }}>
                              {o.no}
                            </button>
                          </td>
                          <td className="ub-mono" style={{ padding: "12px 14px", color: "var(--gray-300)", fontSize: 11 }}>{o.date}</td>
                          <td style={{ padding: "12px 14px", color: "var(--white)" }}>
                            <div style={{ fontWeight: 600 }}>{o.customer}</div>
                            <div className="ub-mono" style={{ fontSize: 10, color: "var(--gray-400)" }}>{o.phone}</div>
                          </td>
                          <td style={{ padding: "12px 14px", color: "var(--gray-200)", maxWidth: 240 }}>{formatItems(o.items)}</td>
                          <td style={{ padding: "12px 14px" }}>
                            <div className="ub-mono" style={{ color: "var(--white)", fontWeight: 600 }}>₩{total.toLocaleString()}</div>
                            <div className="ub-mono" style={{ fontSize: 10, color: "var(--gray-400)", marginTop: 2 }}>
                              {orderShip(o) === 0 ? "배송 무료" : `+ 배송 ₩${orderShip(o).toLocaleString()}`}
                            </div>
                          </td>
                          <td style={{ padding: "12px 14px" }}>
                            <select value={o.status} onChange={(e) => updateOrder(o.no, { status: e.target.value })}
                              style={{
                                background: STATUS_COLORS[o.status].bg,
                                border: `1px solid ${STATUS_COLORS[o.status].fg}33`,
                                color: STATUS_COLORS[o.status].fg,
                                borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, cursor: "pointer",
                              }}>
                              {Object.keys(STATUS_COLORS).map(s => <option key={s} value={s} style={{ background: "var(--navy-900)", color: "var(--white)" }}>{s}</option>)}
                            </select>
                          </td>
                          <td style={{ padding: "12px 14px" }}>
                            <input
                              type="text" value={o.tracking}
                              placeholder="송장번호"
                              onChange={(e) => updateOrder(o.no, { tracking: e.target.value })}
                              className="ub-mono"
                              style={{
                                width: 120, background: "rgba(255,255,255,0.03)", border: "1px solid var(--line-strong)",
                                borderRadius: 6, padding: "5px 8px", color: "var(--white)", fontSize: 11, outline: "none",
                              }}
                            />
                          </td>
                          <td style={{ padding: "12px 14px" }}>
                            <button type="button" onClick={() => advance(o.no)} disabled={last}
                              style={{
                                background: last ? "transparent" : "rgba(0,200,240,0.10)",
                                border: `1px solid ${last ? "var(--line)" : "var(--cyan-400)"}`,
                                color: last ? "var(--gray-500, #6B7280)" : "var(--cyan-400)",
                                padding: "5px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600,
                                cursor: last ? "not-allowed" : "pointer",
                              }}>
                              다음 단계 →
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {tab === "products" && (
          <ProductsTab />
        )}

        {tab === "cases" && (
          <CasesTab />
        )}

        {tab === "members" && (
          <MembersTab orders={orders} members={members} loading={memLoading} error={memError} onReload={reloadMembers} />
        )}

        {tab === "stats" && (
          <div className="ub-card" style={{ padding: 40, textAlign: "center", color: "var(--gray-400)" }}>
            매출 통계 — 결제/주문 데이터 누적 후 차트 추가 예정.
            <div className="ub-mono" style={{ fontSize: 11, marginTop: 8, color: "var(--gray-500, #6B7280)" }}>SOON</div>
          </div>
        )}
      </main>

      {/* 주문 상세 드로어 */}
      {sel && (
        <>
          <div onClick={() => setSelected(null)} className="ub-drawer-overlay is-open" />
          <div className="ub-drawer-panel is-open" role="dialog" aria-modal="true" aria-labelledby="ub-order-title">
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)" }}>ORDER · {sel.no}</div>
                <div id="ub-order-title" style={{ fontSize: 17, fontWeight: 700, color: "var(--white)", marginTop: 2 }}>{sel.customer}</div>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="ub-drawer-iconbtn" aria-label="닫기">{Ic5.x}</button>
            </div>
            <div className="ub-drawer-body" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <div className="ub-spec-key" style={{ marginBottom: 6 }}>주문 일시</div>
                <div className="ub-mono" style={{ color: "var(--white)" }}>{sel.date}</div>
              </div>
              <div>
                <div className="ub-spec-key" style={{ marginBottom: 6 }}>연락처</div>
                <div className="ub-mono" style={{ color: "var(--white)" }}>{sel.phone}</div>
              </div>
              <div>
                <div className="ub-spec-key" style={{ marginBottom: 6 }}>상태</div>
                <StatusPill status={sel.status} />
              </div>
              <div>
                <div className="ub-spec-key" style={{ marginBottom: 6 }}>품목</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {sel.items.map((it, i) => {
                    const m = MODELS5.find(x => x.id === it.id);
                    if (!m) return null;
                    return (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px dashed var(--line)" }}>
                        <div>
                          <div className="ub-mono" style={{ fontSize: 10, color: "var(--gray-400)" }}>{m.code}</div>
                          <div style={{ color: "var(--white)" }}>{m.name} <span className="ub-mono" style={{ color: "var(--gray-300)" }}>×{it.qty}</span></div>
                        </div>
                        <div className="ub-mono" style={{ color: "var(--white)", fontWeight: 600 }}>₩{(m.price * it.qty).toLocaleString()}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ paddingTop: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--gray-300)", marginBottom: 6 }}>
                  <span>상품 금액</span>
                  <span className="ub-mono">₩{orderSubtotal(sel).toLocaleString()}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--gray-300)", marginBottom: 10 }}>
                  <span>배송비</span>
                  <span className="ub-mono" style={{ color: orderShip(sel) === 0 ? "var(--success, #4ADE80)" : "var(--white)" }}>
                    {orderShip(sel) === 0 ? "무료" : `₩${orderShip(sel).toLocaleString()}`}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
                  <div className="ub-spec-key">합계</div>
                  <div className="ub-mono" style={{ fontSize: 22, fontWeight: 700, color: "var(--white)" }}>₩{orderTotal(sel).toLocaleString()}</div>
                </div>
              </div>
              <div>
                <div className="ub-spec-key" style={{ marginBottom: 6 }}>송장번호</div>
                <input type="text" value={sel.tracking} onChange={(e) => updateOrder(sel.no, { tracking: e.target.value })}
                  className="ub-mono" placeholder="입력 후 자동 저장 (프로토타입)"
                  style={{ width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid var(--line-strong)", borderRadius: 8, padding: "8px 12px", color: "var(--white)", fontSize: 13, outline: "none" }} />
              </div>
            </div>
            <div className="ub-drawer-footer">
              <Btn5 variant="primary" size="lg" full onClick={() => { advance(sel.no); }}>
                다음 단계로 진행 {Ic5.arrow}
              </Btn5>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ─── MEMBERS TAB ──────────────────────────────────────────────────────────────
const MembersTab = ({ orders, members = [], loading = false, error = null, onReload }) => {
  const [q, setQ] = uS5("");
  const [gradeFilter, setGradeFilter] = uS5("all");
  const [selected, setSelected] = uS5(null);

  const list = uM5(() => {
    return members
      .map(m => ({ ...m, grade: calcGrade5(m.totalSpent, m.totalOrders, m.joinedAt) }))
      .filter(m => {
        if (gradeFilter !== "all" && m.grade !== gradeFilter) return false;
        if (q.trim()) {
          const k = q.trim().toLowerCase();
          if (!`${m.name} ${m.phone} ${m.email}`.toLowerCase().includes(k)) return false;
        }
        return true;
      });
  }, [q, gradeFilter, members]);

  const sel = list.find(m => m.id === selected) || members.find(m => m.id === selected);
  const memberOrders = sel ? orders.filter(o => o.phone === sel.phone) : [];

  return (
    <>
      {/* 검색·필터 */}
      <div className="ub-card" style={{ padding: 14, display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
        <input
          type="text" value={q} onChange={(e) => setQ(e.target.value)}
          placeholder="이름 / 전화 / 이메일 검색"
          style={{
            flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid var(--line-strong)",
            borderRadius: 8, padding: "8px 12px", color: "var(--white)", fontSize: 13,
            fontFamily: "inherit", outline: "none",
          }}
        />
        <select value={gradeFilter} onChange={(e) => setGradeFilter(e.target.value)}
          style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid var(--line-strong)",
            borderRadius: 8, padding: "8px 12px", color: "var(--white)", fontSize: 13,
          }}>
          <option value="all">전체 등급</option>
          {Object.keys(GRADE_COLORS5).map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <Btn5 variant="ghost" onClick={() => { setQ(""); setGradeFilter("all"); }}>초기화</Btn5>
        <Btn5 variant="ghost" onClick={() => onReload && onReload()}>새로고침</Btn5>
        <Btn5 variant="primary" onClick={() => {
          const headers = ["이름", "연락처", "이메일", "우편번호", "기본 배송지", "상세 주소", "가입일", "주문 수", "누적 구매", "등급"];
          const rows = members.map(m => {
            const def = (m.addresses || []).find(a => a.isDefault) || (m.addresses || [])[0] || {};
            return [
              m.name, m.phone, m.email,
              def.zip || "", def.addr1 || "", def.addr2 || "",
              m.joinedAt,
              `${m.totalOrders}건`,
              m.totalSpent,
              calcGrade5(m.totalSpent, m.totalOrders, m.joinedAt),
            ];
          });
          const today = new Date().toISOString().slice(0, 10);
          downloadCSV(`회원_전체_${today}.csv`, headers, rows);
        }}>CSV {Ic5.arrow}</Btn5>
      </div>

      {error && (
        <div style={{ marginBottom: 14, padding: "10px 14px", borderRadius: 8, background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.3)", color: "var(--warning, #FBBF24)", fontSize: 12 }}>
          회원 목록을 불러오지 못했습니다: {error}
          <div style={{ marginTop: 4, color: "var(--gray-400)", fontSize: 11 }}>Supabase에서 admin_rpc.sql 을 실행했는지 확인해주세요.</div>
        </div>
      )}

      {/* 회원 테이블 */}
      <div className="ub-card" style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 920 }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.02)", color: "var(--gray-400)", fontFamily: "var(--font-mono)" }}>
                {["이름", "연락처", "이메일", "기본 배송지", "가입일", "주문", "누적 구매", "등급"].map(h => (
                  <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontWeight: 500, fontSize: 10, letterSpacing: 1.2, borderBottom: "1px solid var(--line)" }}>{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={8} style={{ padding: 40, textAlign: "center", color: "var(--gray-400)" }}>불러오는 중…</td></tr>
              ) : list.length === 0 ? (
                <tr><td colSpan={8} style={{ padding: 40, textAlign: "center", color: "var(--gray-400)" }}>{members.length === 0 ? "아직 가입한 회원이 없습니다" : "일치하는 회원이 없습니다"}</td></tr>
              ) : list.map(m => {
                const def = (m.addresses || []).find(a => a.isDefault) || (m.addresses || [])[0];
                const gc = GRADE_COLORS5[m.grade];
                return (
                  <tr key={m.id} style={{ borderTop: "1px solid var(--line)", cursor: "pointer" }}
                      onClick={() => setSelected(m.id)}>
                    <td style={{ padding: "12px 14px", color: "var(--white)", fontWeight: 600 }}>{m.name}</td>
                    <td className="ub-mono" style={{ padding: "12px 14px", color: "var(--gray-200)", fontSize: 11 }}>{m.phone}</td>
                    <td className="ub-mono" style={{ padding: "12px 14px", color: "var(--gray-300)", fontSize: 11 }}>{m.email}</td>
                    <td style={{ padding: "12px 14px", color: "var(--gray-200)", maxWidth: 240, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {def ? <span><span className="ub-mono" style={{ fontSize: 10, color: "var(--gray-400)", marginRight: 6 }}>{def.zip}</span>{def.addr1}</span> : <span style={{ color: "var(--gray-500, #6B7280)" }}>미등록</span>}
                    </td>
                    <td className="ub-mono" style={{ padding: "12px 14px", color: "var(--gray-300)", fontSize: 11 }}>{m.joinedAt}</td>
                    <td className="ub-mono" style={{ padding: "12px 14px", color: "var(--white)" }}>{m.totalOrders}건</td>
                    <td className="ub-mono" style={{ padding: "12px 14px", color: "var(--white)", fontWeight: 600 }}>₩{m.totalSpent.toLocaleString()}</td>
                    <td style={{ padding: "12px 14px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, color: gc.fg, background: gc.bg }}>{m.grade}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 회원 디테일 드로어 */}
      {sel && (
        <>
          <div onClick={() => setSelected(null)} className="ub-drawer-overlay is-open" />
          <div className="ub-drawer-panel is-open" role="dialog" aria-modal="true" aria-labelledby="ub-member-title">
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)" }}>MEMBER · {sel.id}</div>
                <div id="ub-member-title" style={{ fontSize: 18, fontWeight: 700, color: "var(--white)", marginTop: 2 }}>
                  {sel.name}
                  <span style={{ marginLeft: 10, padding: "2px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, color: GRADE_COLORS5[calcGrade5(sel.totalSpent, sel.totalOrders, sel.joinedAt)].fg, background: GRADE_COLORS5[calcGrade5(sel.totalSpent, sel.totalOrders, sel.joinedAt)].bg }}>
                    {calcGrade5(sel.totalSpent, sel.totalOrders, sel.joinedAt)}
                  </span>
                </div>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="ub-drawer-iconbtn" aria-label="닫기">{Ic5.x}</button>
            </div>
            <div className="ub-drawer-body" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <div className="ub-spec-key" style={{ marginBottom: 8 }}>기본 정보</div>
                <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", rowGap: 6, fontSize: 13 }}>
                  <span style={{ color: "var(--gray-400)" }}>연락처</span>
                  <span className="ub-mono" style={{ color: "var(--white)" }}>{sel.phone}</span>
                  <span style={{ color: "var(--gray-400)" }}>이메일</span>
                  <span className="ub-mono" style={{ color: "var(--white)" }}>{sel.email}</span>
                  <span style={{ color: "var(--gray-400)" }}>가입일</span>
                  <span className="ub-mono" style={{ color: "var(--gray-200)" }}>{sel.joinedAt}</span>
                  <span style={{ color: "var(--gray-400)" }}>최근 주문</span>
                  <span className="ub-mono" style={{ color: "var(--gray-200)" }}>{sel.lastOrderAt || "—"}</span>
                </div>
              </div>

              <div>
                <div className="ub-spec-key" style={{ marginBottom: 8 }}>주소록 ({sel.addresses.length})</div>
                {sel.addresses.length === 0 ? (
                  <div style={{ padding: 14, fontSize: 12, color: "var(--gray-400)", textAlign: "center", border: "1px dashed var(--line)", borderRadius: 8 }}>등록된 주소가 없습니다</div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {sel.addresses.map(a => (
                      <div key={a.id} style={{ padding: 12, borderRadius: 8, border: "1px solid var(--line)", background: a.isDefault ? "rgba(0,200,240,0.04)" : "transparent" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--white)" }}>{a.label}</span>
                          {a.isDefault && <span style={{ fontSize: 10, color: "var(--cyan-400)", padding: "1px 6px", border: "1px solid var(--cyan-400)", borderRadius: 100 }}>기본</span>}
                        </div>
                        <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)" }}>{a.zip}</div>
                        <div style={{ fontSize: 12, color: "var(--gray-100)", marginTop: 2 }}>{a.addr1} {a.addr2}</div>
                        <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-300)", marginTop: 4 }}>{a.name} · {a.phone}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div className="ub-spec-key" style={{ marginBottom: 8 }}>주문 이력 ({memberOrders.length})</div>
                {memberOrders.length === 0 ? (
                  <div style={{ padding: 14, fontSize: 12, color: "var(--gray-400)", textAlign: "center", border: "1px dashed var(--line)", borderRadius: 8 }}>주문 이력이 없습니다</div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {memberOrders.map(o => (
                      <div key={o.no} style={{ padding: 10, borderRadius: 6, border: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}>
                        <div>
                          <div className="ub-mono" style={{ color: "var(--cyan-400)", fontSize: 11 }}>{o.no}</div>
                          <div style={{ color: "var(--gray-200)", marginTop: 2 }}>{o.items.map(it => { const m = MODELS5.find(x => x.id === it.id); return m ? `${m.name}×${it.qty}` : ""; }).join(", ")}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div className="ub-mono" style={{ color: "var(--white)", fontWeight: 600 }}>₩{(o.items.reduce((s, it) => { const m = MODELS5.find(x => x.id === it.id); return s + (m ? m.price * it.qty : 0); }, 0) + calcShip5(o.items.reduce((s, it) => { const m = MODELS5.find(x => x.id === it.id); return s + (m ? m.price * it.qty : 0); }, 0))).toLocaleString()}</div>
                          <div style={{ fontSize: 10, color: STATUS_COLORS[o.status]?.fg || "var(--gray-400)", marginTop: 2 }}>{o.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div className="ub-spec-key" style={{ marginBottom: 8 }}>관리자 메모</div>
                <textarea
                  defaultValue={sel.note || ""}
                  placeholder="회원 관련 메모 (예: 교환 이력, 특이사항)"
                  rows={3}
                  style={{ width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid var(--line-strong)", borderRadius: 8, padding: 10, color: "var(--white)", fontSize: 13, resize: "vertical", outline: "none" }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

// ─── PRODUCTS TAB ─────────────────────────────────────────────────────────────
// 제품 CRUD — Supabase products 테이블, 관리자 RPC 경유
const PROD_BLANK = {
  id: "", code: "", name: "", cat: "multi",
  price: 0, status: "live", description: "", long_description: "",
  material: "PETG · 무광 블랙", compat_tags: "유리, 콘크리트, 석고",
  w: null, h: null, d: null, weight: null,
  image_url: "", sort_order: 100,
};

const ProductsTab = () => {
  const [rows, setRows] = uS5([]);
  const [loading, setLoading] = uS5(true);
  const [error, setError] = uS5(null);
  const [editing, setEditing] = uS5(null);   // null | PROD_BLANK | row
  const [busy, setBusy] = uS5(false);
  const [q, setQ] = uS5("");
  const [uploadBusy, setUploadBusy] = uS5(false);
  const [uploadErr, setUploadErr] = uS5(null);
  const [dragOver, setDragOver] = uS5(false);

  const reload = async () => {
    const sb = window.SUPABASE;
    if (!sb) { setLoading(false); setError("Supabase 미초기화"); return; }
    setLoading(true); setError(null);
    try {
      const { data, error } = await sb.rpc("admin_list_products", { p_secret: ADMIN_PW });
      if (error) throw error;
      setRows(data || []);
    } catch (e) {
      setError(e?.message || String(e));
      setRows([]);
    } finally { setLoading(false); }
  };

  uE5(() => { reload(); }, []);

  const filtered = rows.filter(r => {
    if (!q.trim()) return true;
    const k = q.trim().toLowerCase();
    return `${r.id} ${r.code} ${r.name} ${r.cat}`.toLowerCase().includes(k);
  });

  const startNew = () => { setUploadErr(null); setEditing({ ...PROD_BLANK }); };
  const startEdit = (r) => { setUploadErr(null); setEditing({
    id: r.id, code: r.code, name: r.name, cat: r.cat || "multi",
    price: r.price, status: r.status, description: r.description || "",
    long_description: r.long_description || "",
    material: r.material || "",
    compat_tags: r.compat_tags || "",
    w: r.w, h: r.h, d: r.d, weight: r.weight,
    image_url: r.image_url || "", sort_order: r.sort_order,
  }); };
  const cancel = () => { setUploadErr(null); setEditing(null); };

  const save = async () => {
    if (!editing) return;
    if (!editing.id || !editing.code || !editing.name) { alert("ID · 코드 · 이름은 필수입니다."); return; }
    const sb = window.SUPABASE;
    if (!sb) return;
    setBusy(true);
    try {
      const { error } = await sb.rpc("admin_upsert_product", {
        p_secret:      ADMIN_PW,
        p_id:          editing.id,
        p_code:        editing.code,
        p_name:        editing.name,
        p_cat:         editing.cat,
        p_price:       Number(editing.price) || 0,
        p_status:      editing.status,
        p_description: editing.description || "",
        p_w:           editing.w === "" || editing.w === null ? null : Number(editing.w),
        p_h:           editing.h === "" || editing.h === null ? null : Number(editing.h),
        p_d:           editing.d === "" || editing.d === null ? null : Number(editing.d),
        p_weight:      editing.weight === "" || editing.weight === null ? null : Number(editing.weight),
        p_image_url:   editing.image_url || null,
        p_sort_order:  Number(editing.sort_order) || 100,
      });
      if (error) throw error;
      // 본문/재질/호환태그는 통합 extras RPC 로 — 기존 upsert 시그니처 변경 없이 추가
      const { error: exErr } = await sb.rpc("admin_update_product_extras", {
        p_secret:           ADMIN_PW,
        p_id:               editing.id,
        p_material:         editing.material || null,
        p_compat_tags:      editing.compat_tags || null,
        p_long_description: editing.long_description || null,
      });
      if (exErr) throw exErr;
      setEditing(null);
      await reload();
      // 고객 카탈로그도 같이 갱신
      if (window.UB && window.UB.loadProducts) window.UB.loadProducts();
    } catch (e) {
      alert("저장 실패: " + (e?.message || e));
    } finally { setBusy(false); }
  };

  const remove = async (id) => {
    if (!confirm(`"${id}" 제품을 삭제할까요? 카탈로그에서 즉시 사라집니다.`)) return;
    const sb = window.SUPABASE;
    if (!sb) return;
    try {
      const { error } = await sb.rpc("admin_delete_product", { p_secret: ADMIN_PW, p_id: id });
      if (error) throw error;
      await reload();
      if (window.UB && window.UB.loadProducts) window.UB.loadProducts();
    } catch (e) {
      alert("삭제 실패: " + (e?.message || e));
    }
  };

  const upd = (k, v) => setEditing(p => ({ ...p, [k]: v }));

  // 사진 업로드 — Supabase Storage 'product-images' 버킷
  const uploadImage = async (file) => {
    if (!file) return;
    if (!file.type || !file.type.startsWith("image/")) { setUploadErr("이미지 파일만 업로드 가능합니다 (JPG / PNG / WebP / SVG / GIF)."); return; }
    if (file.size > 20 * 1024 * 1024) { setUploadErr("20MB 이하 파일만 업로드 가능합니다."); return; }
    const sb = window.SUPABASE;
    if (!sb) { setUploadErr("Supabase 미초기화"); return; }

    setUploadBusy(true); setUploadErr(null);
    try {
      const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
      const slug = (editing && editing.id ? editing.id : "product").replace(/[^a-z0-9_-]/g, "");
      const filename = `${slug}_${Date.now()}.${ext || "jpg"}`;
      const { error: upErr } = await sb.storage
        .from("product-images")
        .upload(filename, file, { upsert: false, cacheControl: "3600", contentType: file.type });
      if (upErr) throw upErr;
      const { data } = sb.storage.from("product-images").getPublicUrl(filename);
      const publicUrl = data && data.publicUrl;
      if (!publicUrl) throw new Error("public URL 발급 실패");
      upd("image_url", publicUrl);
    } catch (e) {
      setUploadErr(e?.message || String(e));
    } finally {
      setUploadBusy(false);
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) uploadImage(f);
  };

  return (
    <>
      {/* 검색·액션 */}
      <div className="ub-card" style={{ padding: 14, display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
        <input
          type="text" value={q} onChange={(e) => setQ(e.target.value)}
          placeholder="ID / 코드 / 이름 검색"
          style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid var(--line-strong)", borderRadius: 8, padding: "8px 12px", color: "var(--white)", fontSize: 13, outline: "none" }}
        />
        <Btn5 variant="ghost" onClick={reload}>새로고침</Btn5>
        <Btn5 variant="primary" onClick={startNew}>+ 새 제품 {Ic5.arrow}</Btn5>
      </div>

      {error && (
        <div style={{ marginBottom: 14, padding: "10px 14px", borderRadius: 8, background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.3)", color: "var(--warning, #FBBF24)", fontSize: 12 }}>
          제품 목록을 불러오지 못했습니다: {error}
          <div style={{ marginTop: 4, color: "var(--gray-400)", fontSize: 11 }}>Supabase에서 products.sql 을 실행했는지 확인해주세요.</div>
        </div>
      )}

      {/* 테이블 */}
      <div className="ub-card" style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 920 }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.02)", color: "var(--gray-400)", fontFamily: "var(--font-mono)" }}>
                {["순서", "ID", "코드", "이름", "가격", "상태", "사진", "액션"].map(h => (
                  <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontWeight: 500, fontSize: 10, letterSpacing: 1.2, borderBottom: "1px solid var(--line)" }}>{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={9} style={{ padding: 40, textAlign: "center", color: "var(--gray-400)" }}>불러오는 중…</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={8} style={{ padding: 40, textAlign: "center", color: "var(--gray-400)" }}>{rows.length === 0 ? "등록된 제품이 없습니다" : "일치하는 제품이 없습니다"}</td></tr>
              ) : filtered.map(r => (
                <tr key={r.id} style={{ borderTop: "1px solid var(--line)" }}>
                  <td className="ub-mono" style={{ padding: "12px 14px", color: "var(--gray-300)" }}>{r.sort_order}</td>
                  <td className="ub-mono" style={{ padding: "12px 14px", color: "var(--cyan-400)" }}>{r.id}</td>
                  <td className="ub-mono" style={{ padding: "12px 14px", color: "var(--gray-200)" }}>{r.code}</td>
                  <td style={{ padding: "12px 14px", color: "var(--white)", fontWeight: 600 }}>{r.name}</td>
                  <td className="ub-mono" style={{ padding: "12px 14px", color: "var(--white)", fontWeight: 600 }}>₩{Number(r.price || 0).toLocaleString()}</td>
                  <td style={{ padding: "12px 14px" }}>
                    <span style={{
                      padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                      color: r.status === "live" ? "#4ADE80" : r.status === "soon" ? "#FBBF24" : "#9CA3AF",
                      background: r.status === "live" ? "rgba(74,222,128,0.12)" : r.status === "soon" ? "rgba(251,191,36,0.12)" : "rgba(255,255,255,0.05)",
                    }}>{r.status === "live" ? "판매중" : r.status === "soon" ? "출시예정" : "숨김"}</span>
                  </td>
                  <td style={{ padding: "12px 14px" }}>
                    {r.image_url ? <img src={r.image_url} alt="" style={{ width: 36, height: 36, objectFit: "cover", borderRadius: 4 }} /> : <span style={{ fontSize: 10, color: "var(--gray-500, #6B7280)" }}>없음</span>}
                  </td>
                  <td style={{ padding: "12px 14px", display: "flex", gap: 6 }}>
                    <button type="button" onClick={() => startEdit(r)}
                      style={{ background: "rgba(0,200,240,0.10)", border: "1px solid var(--cyan-400)", color: "var(--cyan-400)", padding: "5px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer" }}>
                      수정
                    </button>
                    <button type="button" onClick={() => remove(r.id)}
                      style={{ background: "transparent", border: "1px solid var(--line-strong)", color: "var(--gray-300)", padding: "5px 10px", borderRadius: 6, fontSize: 11, cursor: "pointer" }}>
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 편집 드로어 */}
      {editing && (
        <>
          <div className="ub-drawer-overlay is-open" />
          <div className="ub-drawer-panel is-open" role="dialog" aria-modal="true">
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)" }}>PRODUCT</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "var(--white)", marginTop: 2 }}>
                  {rows.some(r => r.id === editing.id) ? "제품 수정" : "새 제품 추가"}
                </div>
              </div>
              <button type="button" onClick={cancel} className="ub-drawer-iconbtn" aria-label="닫기">{Ic5.x}</button>
            </div>
            <div className="ub-drawer-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ gridColumn: "span 2", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label className="ub-label ub-label-req">ID (URL 슬러그)</label>
                  <input className="ub-input ub-mono" value={editing.id} onChange={e => upd("id", e.target.value.toLowerCase())} placeholder="fsf2 / bs3 등 영문·숫자만" />
                </div>
                <div>
                  <label className="ub-label ub-label-req">코드</label>
                  <input className="ub-input ub-mono" value={editing.code} onChange={e => upd("code", e.target.value)} placeholder="UB-FSF2" />
                </div>
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label className="ub-label ub-label-req">이름</label>
                <input className="ub-input" value={editing.name} onChange={e => upd("name", e.target.value)} placeholder="FaceStation F2" />
              </div>
              <div>
                <label className="ub-label ub-label-req">상태</label>
                <select className="ub-input" value={editing.status} onChange={e => upd("status", e.target.value)}>
                  <option value="live">판매중</option>
                  <option value="soon">출시예정</option>
                  <option value="hidden">숨김</option>
                </select>
              </div>
              <div>
                <label className="ub-label ub-label-req">가격 (₩)</label>
                <input className="ub-input ub-mono" type="number" value={editing.price} onChange={e => upd("price", e.target.value)} placeholder="89000" />
              </div>
              <div>
                <label className="ub-label">정렬 순서</label>
                <input className="ub-input ub-mono" type="number" value={editing.sort_order} onChange={e => upd("sort_order", e.target.value)} placeholder="100" />
              </div>
              <div>
                <label className="ub-label">재질 <span style={{ color: "var(--gray-400)", fontWeight: 400 }}>(스펙 표)</span></label>
                <input className="ub-input" value={editing.material} onChange={e => upd("material", e.target.value)} placeholder="PETG · 무광 블랙" />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label className="ub-label">설치 환경 호환 <span style={{ color: "var(--gray-400)", fontWeight: 400 }}>(쉼표로 구분 · 상세 페이지 ✓ 태그로 노출)</span></label>
                <input className="ub-input" value={editing.compat_tags} onChange={e => upd("compat_tags", e.target.value)} placeholder="유리, 콘크리트, 석고" />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label className="ub-label">한 줄 설명</label>
                <input className="ub-input" value={editing.description} onChange={e => upd("description", e.target.value)} placeholder="안면인식 + 카드 + 지문" />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label className="ub-label">제품 설명 본문 <span style={{ color: "var(--gray-400)", fontWeight: 400 }}>(상세 페이지 "제품 설명" 탭에 표시 · 줄바꿈 그대로 노출)</span></label>
                <textarea
                  className="ub-input"
                  rows={8}
                  value={editing.long_description}
                  onChange={e => upd("long_description", e.target.value)}
                  placeholder={"전용으로 설계된 브라켓으로\n후면 형상과 정확히 맞아 유격 없이 장착됩니다.\n동봉된 M3 볼트·너트로\n유리·콘크리트·석고벽 등\n다양한 환경에 설치할 수 있습니다."}
                  style={{ width: "100%", fontFamily: "var(--font-sans)", lineHeight: 1.6, resize: "vertical" }}
                />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label className="ub-label">제품 사진 (없으면 SVG 일러스트로 표시)</label>
                <label
                  htmlFor="prod-image-upload"
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={onDrop}
                  style={{
                    display: "block", cursor: uploadBusy ? "wait" : "pointer",
                    padding: 18, borderRadius: 10, textAlign: "center",
                    border: `2px dashed ${dragOver ? "var(--cyan-400)" : "var(--line-strong)"}`,
                    background: dragOver ? "rgba(0,200,240,0.06)" : "rgba(255,255,255,0.02)",
                    transition: "all 0.15s",
                  }}
                >
                  <input
                    id="prod-image-upload" type="file" accept="image/*"
                    onChange={(e) => { const f = e.target.files && e.target.files[0]; if (f) uploadImage(f); e.target.value = ""; }}
                    style={{ display: "none" }}
                  />
                  {uploadBusy ? (
                    <div style={{ fontSize: 13, color: "var(--cyan-400)" }}>업로드 중…</div>
                  ) : (
                    <>
                      <div style={{ fontSize: 13, color: "var(--gray-200)", fontWeight: 600 }}>클릭하거나 사진을 여기로 드래그</div>
                      <div style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 4 }}>JPG · PNG · WebP · SVG · GIF · 최대 20MB</div>
                    </>
                  )}
                </label>
                {uploadErr && (
                  <div style={{ marginTop: 8, padding: "8px 10px", borderRadius: 6, fontSize: 12, color: "var(--warning, #FBBF24)", background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.3)" }}>
                    업로드 실패: {uploadErr}
                  </div>
                )}
                {editing.image_url && (
                  <div style={{ marginTop: 10, border: "1px solid var(--line)", borderRadius: 8, position: "relative", overflow: "hidden" }}>
                    <div style={{ padding: "4px 10px", fontSize: 10, color: "var(--gray-400)", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)" }}>고객 화면 미리보기</div>
                    <div style={{ background: "#fff", display: "flex", justifyContent: "center", alignItems: "center", aspectRatio: "3 / 4", maxHeight: 320, overflow: "hidden" }}>
                      <img src={editing.image_url} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <button type="button" onClick={() => upd("image_url", "")}
                      style={{ position: "absolute", top: 6, right: 6, padding: "3px 8px", fontSize: 10, background: "rgba(10,22,40,0.85)", color: "var(--gray-200)", border: "1px solid var(--line-strong)", borderRadius: 4, cursor: "pointer" }}>
                      삭제
                    </button>
                  </div>
                )}
                <details style={{ marginTop: 8 }}>
                  <summary style={{ fontSize: 11, color: "var(--gray-400)", cursor: "pointer" }}>외부 URL 직접 입력</summary>
                  <input className="ub-input" value={editing.image_url} onChange={e => upd("image_url", e.target.value)} placeholder="https://..." style={{ marginTop: 6 }} />
                </details>
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <div className="ub-spec-key" style={{ marginBottom: 6 }}>치수 (mm) / 무게 (g)</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                  <input className="ub-input ub-mono" type="number" value={editing.w ?? ""} onChange={e => upd("w", e.target.value)} placeholder="W" />
                  <input className="ub-input ub-mono" type="number" value={editing.h ?? ""} onChange={e => upd("h", e.target.value)} placeholder="H" />
                  <input className="ub-input ub-mono" type="number" value={editing.d ?? ""} onChange={e => upd("d", e.target.value)} placeholder="D" />
                  <input className="ub-input ub-mono" type="number" value={editing.weight ?? ""} onChange={e => upd("weight", e.target.value)} placeholder="g" />
                </div>
              </div>
            </div>
            <div className="ub-drawer-footer" style={{ display: "flex", gap: 8 }}>
              <Btn5 variant="ghost" size="lg" onClick={cancel}>취소</Btn5>
              <Btn5 variant="primary" size="lg" full onClick={save} disabled={busy}>
                {busy ? "저장 중…" : <>저장 {Ic5.arrow}</>}
              </Btn5>
            </div>
          </div>
        </>
      )}
    </>
  );
};

// ─── INSTALL CASES TAB ───────────────────────────────────────────────────────
// 설치 사례 CRUD — install_cases 테이블, 사진은 product-images 버킷 공용 사용
const CASE_BLANK = { id: null, caption: "", description: "", image_url: "", sort_order: 100 };

const CasesTab = () => {
  const [rows, setRows] = uS5([]);
  const [loading, setLoading] = uS5(true);
  const [error, setError] = uS5(null);
  const [editing, setEditing] = uS5(null);
  const [busy, setBusy] = uS5(false);
  const [uploadBusy, setUploadBusy] = uS5(false);
  const [uploadErr, setUploadErr] = uS5(null);
  const [dragOver, setDragOver] = uS5(false);

  const reload = async () => {
    const sb = window.SUPABASE;
    if (!sb) { setLoading(false); setError("Supabase 미초기화"); return; }
    setLoading(true); setError(null);
    try {
      const { data, error } = await sb.rpc("admin_list_install_cases", { p_secret: ADMIN_PW });
      if (error) throw error;
      setRows(data || []);
    } catch (e) {
      setError(e?.message || String(e));
      setRows([]);
    } finally { setLoading(false); }
  };

  uE5(() => { reload(); }, []);

  const filtered = rows;

  const startNew  = () => { setUploadErr(null); setEditing({ ...CASE_BLANK }); };
  const startEdit = (r) => { setUploadErr(null); setEditing({ id: r.id, caption: r.caption, description: r.description || "", image_url: r.image_url || "", sort_order: r.sort_order }); };
  const cancel    = () => { setUploadErr(null); setEditing(null); };
  const upd = (k, v) => setEditing(p => ({ ...p, [k]: v }));

  const uploadImage = async (file) => {
    if (!file) return;
    if (!file.type || !file.type.startsWith("image/")) { setUploadErr("이미지 파일만 업로드 가능합니다."); return; }
    if (file.size > 20 * 1024 * 1024) { setUploadErr("20MB 이하 파일만 업로드 가능합니다."); return; }
    const sb = window.SUPABASE;
    if (!sb) { setUploadErr("Supabase 미초기화"); return; }
    setUploadBusy(true); setUploadErr(null);
    try {
      const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
      const filename = `case_${Date.now()}.${ext || "jpg"}`;
      const { error: upErr } = await sb.storage.from("product-images").upload(filename, file, { upsert: false, cacheControl: "3600", contentType: file.type });
      if (upErr) throw upErr;
      const { data } = sb.storage.from("product-images").getPublicUrl(filename);
      const publicUrl = data && data.publicUrl;
      if (!publicUrl) throw new Error("public URL 발급 실패");
      upd("image_url", publicUrl);
    } catch (e) {
      setUploadErr(e?.message || String(e));
    } finally { setUploadBusy(false); }
  };

  const onDrop = (e) => {
    e.preventDefault(); setDragOver(false);
    const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) uploadImage(f);
  };

  const save = async () => {
    if (!editing) return;
    if (!editing.caption) { alert("제목은 필수입니다."); return; }
    const sb = window.SUPABASE;
    if (!sb) return;
    setBusy(true);
    try {
      const { error } = await sb.rpc("admin_upsert_install_case", {
        p_secret:      ADMIN_PW,
        p_id:          editing.id || null,
        p_wall_type:   null,
        p_caption:     editing.caption,
        p_description: editing.description || null,
        p_image_url:   editing.image_url || null,
        p_sort_order:  Number(editing.sort_order) || 100,
      });
      if (error) throw error;
      setEditing(null);
      await reload();
    } catch (e) {
      alert("저장 실패: " + (e?.message || e));
    } finally { setBusy(false); }
  };

  const remove = async (r) => {
    if (!confirm(`"${r.caption}" 사례를 삭제할까요?`)) return;
    const sb = window.SUPABASE;
    if (!sb) return;
    try {
      const { error } = await sb.rpc("admin_delete_install_case", { p_secret: ADMIN_PW, p_id: r.id });
      if (error) throw error;
      await reload();
    } catch (e) {
      alert("삭제 실패: " + (e?.message || e));
    }
  };

  return (
    <>
      {/* 액션 */}
      <div className="ub-card" style={{ padding: 14, display: "flex", gap: 10, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
        <div style={{ flex: 1, fontSize: 12, color: "var(--gray-400)" }}>총 {rows.length}건의 설치 사례</div>
        <Btn5 variant="ghost" onClick={reload}>새로고침</Btn5>
        <Btn5 variant="primary" onClick={startNew}>+ 새 사례 {Ic5.arrow}</Btn5>
      </div>

      {error && (
        <div style={{ marginBottom: 14, padding: "10px 14px", borderRadius: 8, background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.3)", color: "var(--warning, #FBBF24)", fontSize: 12 }}>
          설치 사례를 불러오지 못했습니다: {error}
          <div style={{ marginTop: 4, color: "var(--gray-400)", fontSize: 11 }}>Supabase에서 install_cases.sql 을 실행했는지 확인해주세요.</div>
        </div>
      )}

      {/* 사례 그리드 */}
      <div className="ub-card" style={{ padding: 14 }}>
        {loading ? (
          <div style={{ padding: 40, textAlign: "center", color: "var(--gray-400)" }}>불러오는 중…</div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: 40, textAlign: "center", color: "var(--gray-400)" }}>{rows.length === 0 ? "등록된 사례가 없습니다" : "필터에 일치하는 사례가 없습니다"}</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 14 }}>
            {filtered.map(r => (
              <div key={r.id} style={{ border: "1px solid var(--line)", borderRadius: 10, padding: 10, background: "rgba(255,255,255,0.02)" }}>
                <div style={{ aspectRatio: "1 / 1", borderRadius: 6, border: "1px solid var(--line)", overflow: "hidden", background: "var(--navy-900)", marginBottom: 8, display: "grid", placeItems: "center" }}>
                  {r.image_url
                    ? <img src={r.image_url} alt={r.caption} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }} />
                    : <span style={{ fontSize: 11, color: "var(--gray-500, #6B7280)", fontFamily: "var(--font-mono)" }}>NO IMAGE</span>}
                </div>
                <div style={{ fontSize: 10, color: "var(--cyan-400)", fontFamily: "var(--font-mono)", marginBottom: 4 }}>#{r.sort_order}</div>
                <div style={{ fontSize: 12, color: "var(--white)", fontWeight: 600, marginBottom: 4, lineHeight: 1.4 }}>{r.caption}</div>
                {r.description && <div style={{ fontSize: 11, color: "var(--gray-300)", marginBottom: 8, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{r.description}</div>}
                <div style={{ display: "flex", gap: 6 }}>
                  <button type="button" onClick={() => startEdit(r)}
                    style={{ flex: 1, background: "rgba(0,200,240,0.10)", border: "1px solid var(--cyan-400)", color: "var(--cyan-400)", padding: "5px 0", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer" }}>
                    수정
                  </button>
                  <button type="button" onClick={() => remove(r)}
                    style={{ flex: 1, background: "transparent", border: "1px solid var(--line-strong)", color: "var(--gray-300)", padding: "5px 0", borderRadius: 6, fontSize: 11, cursor: "pointer" }}>
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 편집 드로어 */}
      {editing && (
        <>
          <div className="ub-drawer-overlay is-open" />
          <div className="ub-drawer-panel is-open" role="dialog" aria-modal="true">
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div className="ub-mono" style={{ fontSize: 11, color: "var(--gray-400)" }}>INSTALL CASE</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "var(--white)", marginTop: 2 }}>
                  {editing.id ? "사례 수정" : "새 사례 추가"}
                </div>
              </div>
              <button type="button" onClick={cancel} className="ub-drawer-iconbtn" aria-label="닫기">{Ic5.x}</button>
            </div>
            <div className="ub-drawer-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ gridColumn: "span 2" }}>
                <label className="ub-label ub-label-req">제목 (한 줄)</label>
                <input className="ub-input" value={editing.caption} onChange={e => upd("caption", e.target.value)} placeholder="예: 강화유리 10mm · FaceStation F2" />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label className="ub-label">설명 (선택, 자유 입력)</label>
                <textarea className="ub-input" rows={4} value={editing.description} onChange={e => upd("description", e.target.value)}
                  placeholder="이 현장에 대한 짧은 설명을 자유롭게 적어주세요. 예: 서울 강남 사무실 출입구. 강화유리 10mm 에 양면테이프 + 케이블 내장 시공. 1인 10분 작업."
                  style={{ resize: "vertical", lineHeight: 1.5 }} />
              </div>
              <div>
                <label className="ub-label">정렬 순서</label>
                <input className="ub-input ub-mono" type="number" value={editing.sort_order} onChange={e => upd("sort_order", e.target.value)} placeholder="100" />
              </div>
              <div />

              <div style={{ gridColumn: "span 2" }}>
                <label className="ub-label">사진</label>
                <label
                  htmlFor="case-image-upload"
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={onDrop}
                  style={{
                    display: "block", cursor: uploadBusy ? "wait" : "pointer",
                    padding: 18, borderRadius: 10, textAlign: "center",
                    border: `2px dashed ${dragOver ? "var(--cyan-400)" : "var(--line-strong)"}`,
                    background: dragOver ? "rgba(0,200,240,0.06)" : "rgba(255,255,255,0.02)",
                    transition: "all 0.15s",
                  }}
                >
                  <input
                    id="case-image-upload" type="file" accept="image/*"
                    onChange={(e) => { const f = e.target.files && e.target.files[0]; if (f) uploadImage(f); e.target.value = ""; }}
                    style={{ display: "none" }}
                  />
                  {uploadBusy ? (
                    <div style={{ fontSize: 13, color: "var(--cyan-400)" }}>업로드 중…</div>
                  ) : (
                    <>
                      <div style={{ fontSize: 13, color: "var(--gray-200)", fontWeight: 600 }}>클릭하거나 사진을 여기로 드래그</div>
                      <div style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 4 }}>JPG · PNG · WebP · SVG · GIF · 최대 20MB</div>
                    </>
                  )}
                </label>
                {uploadErr && (
                  <div style={{ marginTop: 8, padding: "8px 10px", borderRadius: 6, fontSize: 12, color: "var(--warning, #FBBF24)", background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.3)" }}>
                    업로드 실패: {uploadErr}
                  </div>
                )}
                {editing.image_url && (
                  <div style={{ marginTop: 10, border: "1px solid var(--line)", borderRadius: 8, position: "relative", overflow: "hidden" }}>
                    <div style={{ padding: "4px 10px", fontSize: 10, color: "var(--gray-400)", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)" }}>고객 화면 미리보기</div>
                    <div style={{ background: "#fff", display: "flex", justifyContent: "center", alignItems: "center", aspectRatio: "3 / 4", maxHeight: 320, overflow: "hidden" }}>
                      <img src={editing.image_url} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <button type="button" onClick={() => upd("image_url", "")}
                      style={{ position: "absolute", top: 6, right: 6, padding: "3px 8px", fontSize: 10, background: "rgba(10,22,40,0.85)", color: "var(--gray-200)", border: "1px solid var(--line-strong)", borderRadius: 4, cursor: "pointer" }}>
                      삭제
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="ub-drawer-footer" style={{ display: "flex", gap: 8 }}>
              <Btn5 variant="ghost" size="lg" onClick={cancel}>취소</Btn5>
              <Btn5 variant="primary" size="lg" full onClick={save} disabled={busy}>
                {busy ? "저장 중…" : <>저장 {Ic5.arrow}</>}
              </Btn5>
            </div>
          </div>
        </>
      )}
    </>
  );
};

// 게이트 wrapper — 인증 통과한 경우에만 실제 AdminPageInner 렌더
const AdminPage = () => {
  const initial = (() => {
    try { return sessionStorage.getItem(ADMIN_GATE_KEY) === "1"; } catch (e) { return false; }
  })();
  const [authed, setAuthed] = uS5(initial);
  if (!authed) return <AdminGate onPass={() => setAuthed(true)} />;
  return <AdminPageInner />;
};

window.UB.AdminPage = AdminPage;
