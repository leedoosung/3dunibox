// B안 — 페이지 2: Detail / Guide / FAQ / Quote / Cart

const { useState: uS3, useMemo: uM3, useEffect: uE3, Fragment: F3 } = React;
const { MODELS, FAQS, STEPS, Ic, Btn, Badge, Bracket, SHIP, calcShip, useIsMobile: useIsMobile3, useProducts: useProducts3 } = window.UB;

// ─── DETAIL ────────────────────────────────────────────────────────────────
const DetailPage = ({ id, onNav, onAdd, toast }) => {
  useProducts3();
  const isMobile = useIsMobile3(1024);
  const [qty, setQty] = uS3(1);
  const [tab, setTab] = uS3("desc");
  const m = MODELS.find(x => x.id === id) || MODELS[0];
  if (!m) {
    return <div style={{ padding: 60, textAlign: "center", color: "var(--gray-400)" }}>제품을 불러오는 중…</div>;
  }

  return (
    <div>
      <div style={{ padding: isMobile ? "12px 16px" : "16px 80px", borderBottom: "1px solid var(--line)", fontSize: 12, color: "var(--gray-400)" }}>
        <span style={{ cursor: "pointer" }} onClick={() => onNav({ name: "home" })}>홈</span> /
        <span style={{ cursor: "pointer", margin: "0 6px" }} onClick={() => onNav({ name: "catalog" })}>제품</span> /
        <span style={{ color: "var(--white)", marginLeft: 6 }}>{m.name} ({m.code})</span>
      </div>
      <div style={{ padding: isMobile ? "20px 16px 40px" : "32px 80px 60px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr", gap: isMobile ? 24 : 48 }}>
        <div>
          <div style={{ marginBottom: 12 }}>
            <Badge kind={m.status === "live" ? "live" : m.status === "sold_out" ? "soldout" : "soon"}>{m.status === "live" ? "판매중" : m.status === "sold_out" ? "재고없음" : "출시예정"}</Badge>
          </div>
          <div style={{ aspectRatio: "3 / 4", maxHeight: "75vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            {m.image_url ? (
              <img src={m.image_url} alt={m.name} loading="eager"
                   style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", display: "block", borderRadius: 20, filter: "drop-shadow(0 22px 44px rgba(0,0,0,0.6))" }} />
            ) : (
              <span className="ub-mono" style={{ fontSize: 12, color: "var(--gray-500, #6B7280)" }}>{m.code}</span>
            )}
          </div>
        </div>
        <div>
          <div className="ub-mono" style={{ fontSize: 12, color: "var(--cyan-400)", marginBottom: 8 }}>{m.code}</div>
          <h1 className="ub-h2" style={{ fontSize: 30, marginBottom: 20 }}>{m.name}</h1>

          <div className="ub-card" style={{ marginBottom: 20, background: "linear-gradient(160deg, #1f6aff 0%, #0f3c93 100%)", border: "1px solid rgba(255,255,255,0.18)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <div>
                <div className="ub-mono" style={{ fontSize: 28, color: "#fff", fontWeight: 700 }}>₩{(m.price * qty).toLocaleString()}</div>
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", textAlign: "right" }}>VAT 포함<br/>배송비 ₩{SHIP.FEE.toLocaleString()} 별도<br/>제주·도서산간 +₩{SHIP.REMOTE_EXTRA.toLocaleString()}<br/>평균 2~5영업일 출고</div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
              <span className="ub-spec-key" style={{ color: "rgba(255,255,255,0.85)" }}>수량</span>
              <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.32)", borderRadius: 8, overflow: "hidden" }}>
                <div onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: "8px 14px", borderRight: "1px solid rgba(255,255,255,0.32)", cursor: "pointer", userSelect: "none", color: "#fff" }}>−</div>
                <div className="ub-mono" style={{ padding: "8px 18px", color: "#fff", minWidth: 50, textAlign: "center" }}>{qty}</div>
                <div onClick={() => setQty(qty + 1)} style={{ padding: "8px 14px", borderLeft: "1px solid rgba(255,255,255,0.32)", cursor: "pointer", userSelect: "none", color: "#fff" }}>+</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {m.status === "live" ? (
                <>
                  <Btn variant="primary" size="lg" full style={{ background: "#fff", color: "#0f3c93", boxShadow: "0 10px 26px -8px rgba(0,0,0,0.4)" }} onClick={() => {
                    onAdd(m, qty);
                    onNav({ name: "order" });
                  }}>
                    바로 구매 (₩{(m.price * qty).toLocaleString()}) {Ic.arrow}
                  </Btn>
                  <Btn variant="ghost" size="lg" style={{ borderColor: "rgba(255,255,255,0.45)", color: "#fff" }} onClick={() => { onAdd(m, qty); toast(`${m.name} ${qty}개 장바구니에 담김`); }}>장바구니</Btn>
                </>
              ) : m.status === "sold_out" ? (
                <Btn variant="primary" size="lg" full disabled style={{ background: "rgba(255,255,255,0.18)", color: "#fff", cursor: "not-allowed", boxShadow: "none" }}>재고없음 · 구매 불가</Btn>
              ) : (
                <Btn variant="primary" size="lg" full style={{ background: "#fff", color: "#0f3c93" }} onClick={() => alert("출시 알림은 010-2776-9109 또는 leedoo80@gmail.com로 신청해 주세요.")}>출시 알림 신청</Btn>
              )}
            </div>
          </div>

          {(() => {
            const tags = (m.compat_tags || "유리,콘크리트,석고")
              .split(",")
              .map(s => s.trim())
              .filter(Boolean);
            if (tags.length === 0) return null;
            return (
              <div style={{ marginBottom: 20 }}>
                <div className="ub-spec-key" style={{ marginBottom: 10 }}>설치 환경 호환</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {tags.map(c => (
                    <span key={c} style={{ fontSize: 12, fontFamily: "var(--font-mono)", padding: "6px 10px", borderRadius: 6, background: "rgba(74,222,128,0.1)", color: "var(--success)", border: "1px solid rgba(74,222,128,0.25)" }}>{c} ✓</span>
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="ub-tabs">
            {[["desc", "제품 설명"], ["spec", "스펙"], ["return", "배송·교환·반품"]].map(([k, l]) => (
              <div key={k} className={`ub-tab ${tab === k ? "active" : ""}`} onClick={() => setTab(k)}>{l}</div>
            ))}
          </div>
          <div style={{ padding: "20px 0", color: "var(--gray-200)", fontSize: 15, lineHeight: 1.75, minHeight: 120 }}>
            {tab === "desc" && (
              m.long_description ? (
                <div style={{ whiteSpace: "pre-line" }}>{m.long_description}</div>
              ) : (
                <>
                  <strong style={{ color: "var(--white)" }}>전용으로 설계된 브라켓</strong>으로<br/>
                  후면 형상과 정확히 맞아 유격 없이 장착됩니다.<br/>
                  동봉된 <strong style={{ color: "var(--white)" }}>M3 볼트·너트</strong>로<br/>
                  유리·콘크리트·석고벽 등<br/>
                  다양한 환경에 설치할 수 있습니다.
                </>
              )
            )}
            {tab === "spec" && (() => {
              const hasDim = m.w != null && m.h != null && m.d != null;
              const rows = [
                ["모델", m.code],
                ["재질", m.material || "PETG · 무광 블랙"],
                hasDim ? ["치수", `W ${m.w} × H ${m.h} × D ${m.d} mm`] : null,
              ].filter(Boolean);
              return (
                <table style={{ width: "100%", fontFamily: "var(--font-mono)", fontSize: 14 }}>
                  <tbody>
                    {rows.map(([k, v]) => (
                      <tr key={k} style={{ borderTop: "1px solid var(--line)" }}>
                        <td style={{ padding: "12px 0", color: "var(--gray-400)", width: 140 }}>{k.toUpperCase()}</td>
                        <td style={{ padding: "12px 0", color: "var(--white)" }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              );
            })()}
            {tab === "return" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <div style={{ color: "var(--cyan-400)", fontWeight: 700, marginBottom: 4 }}>배송 기간</div>
                  결제 확인 후 <strong style={{ color: "var(--white)" }}>1영업일 이내 제작 착수</strong>에 들어가며, 평균 <strong style={{ color: "var(--white)" }}>2~5영업일 이내 출고</strong>합니다. (도서산간 지역 추가 1~2일)
                </div>
                <div>
                  <div style={{ color: "var(--cyan-400)", fontWeight: 700, marginBottom: 4 }}>단순 변심 반품</div>
                  본 제품은 사용자 주문에 따라 개별 생산되는 <strong style={{ color: "var(--white)" }}>맞춤 제작 제품</strong>으로, 「전자상거래법 제17조 제2항 제5호」에 따라 출고 후 단순 변심에 의한 취소·반품·교환은 제한됩니다.
                </div>
                <div>
                  <div style={{ color: "var(--cyan-400)", fontWeight: 700, marginBottom: 4 }}>제품 하자</div>
                  제품 수령 후 <strong style={{ color: "var(--white)" }}>7일 이내 명백한 제품 하자</strong>(파손·출력 불량·모델 불일치)가 확인된 경우 <strong style={{ color: "var(--white)" }}>100% 무상 교환·환불</strong>해 드립니다.
                </div>
                <div>
                  <div style={{ color: "var(--cyan-400)", fontWeight: 700, marginBottom: 4 }}>모델 선택 오류</div>
                  주문 모델 변경/취소는 <strong style={{ color: "var(--white)" }}>제작 착수 전까지</strong>만 가능합니다. 제작 착수 이후에는 환불·교환이 어려우므로 결제 전 모델 호환 여부를 반드시 확인해 주세요.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── GUIDE — 현장별 설치 사례 (Supabase install_cases fetch) ───────────────
const GuidePage = () => {
  const isMobile = useIsMobile3(1024);
  const [cases, setCases] = uS3([]);
  const [loading, setLoading] = uS3(true);

  uE3(() => {
    const sb = window.SUPABASE;
    if (!sb) { setLoading(false); return; }
    sb.from("install_cases").select("*").order("sort_order")
      .then(({ data, error }) => {
        if (!error && Array.isArray(data)) setCases(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // 상단 BEFORE 강조: caption 이 "BEFORE" 로 시작하는 사례들을 모아 최상단에 가로 그리드(4열)로 표시.
  // 관리자 → 설치 사례에서 제목을 "BEFORE ..." 로 등록하고 사진을 올리면 자동으로 여기 뜸.
  const isBeforeCase = (c) => /^\s*before\b/i.test(c.caption || "");
  const beforeCases = cases.filter(c => isBeforeCase(c) && c.image_url);
  const gridCases = cases.filter(c => !isBeforeCase(c));
  const allHavePhoto = gridCases.length > 0 && gridCases.every(c => c.image_url);

  return (
    <div style={{ padding: isMobile ? "28px 16px 40px" : "48px 80px 60px" }}>
      <div className="ub-eyebrow" style={{ marginBottom: 10 }}>INSTALLATION CASES</div>
      <h2 className="ub-h2" style={{ marginBottom: 8 }}>현장별 설치 사례</h2>
      <div style={{ color: "var(--gray-300)", fontSize: 14, marginBottom: isMobile ? 20 : 32 }}>실제 적용 현장 모음</div>

      {/* ▼ 상단 BEFORE 강조 — "브라켓 없이 시공한 현장" (가로 4열 그리드) */}
      {beforeCases.length > 0 && (
        <div style={{ marginBottom: isMobile ? 28 : 40, border: "1px solid rgba(251,191,36,0.35)", borderRadius: 18, overflow: "hidden", background: "var(--navy-900)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: isMobile ? "14px 16px" : "16px 20px", borderBottom: "1px solid var(--line)" }}>
            <span className="ub-mono" style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, padding: "5px 12px", borderRadius: 100, color: "var(--warning, #FBBF24)", background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.45)" }}>BEFORE</span>
            <div style={{ fontSize: isMobile ? 17 : 22, fontWeight: 800, color: "var(--white)", letterSpacing: "-0.3px" }}>브라켓 없이 시공한 현장</div>
          </div>
          <div style={{ padding: isMobile ? 12 : 16, display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 10 : 14 }}>
            {beforeCases.map((c, i) => {
              const label = (c.caption || "").replace(/^\s*before\s*/i, "").trim();
              return (
                <div key={c.id || i}>
                  <div style={{ position: "relative", aspectRatio: "1 / 1", borderRadius: 10, overflow: "hidden", background: "#0d0d0d", border: "1px solid var(--line)" }}>
                    <img src={c.image_url} alt={label || "브라켓 없이 시공한 현장"} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <span className="ub-mono" style={{ position: "absolute", top: 8, left: 8, fontSize: 9, fontWeight: 800, letterSpacing: 0.5, color: "#111", background: "var(--warning, #FBBF24)", padding: "3px 7px", borderRadius: 5 }}>BEFORE</span>
                  </div>
                  {label && <div style={{ marginTop: 8, fontSize: 13, color: "var(--white)", fontWeight: 700, lineHeight: 1.4, wordBreak: "keep-all" }}>{label}</div>}
                  {c.description && <div style={{ marginTop: 4, fontSize: 12, color: "var(--gray-300)", lineHeight: 1.55, whiteSpace: "pre-wrap", wordBreak: "keep-all" }}>{c.description}</div>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {loading ? (
        <div style={{ padding: 60, textAlign: "center", color: "var(--gray-400)" }}>불러오는 중…</div>
      ) : cases.length === 0 ? (
        <div style={{ padding: 60, textAlign: "center", border: "1px dashed var(--line-strong)", borderRadius: 12, color: "var(--gray-400)" }}>등록된 사례가 없습니다</div>
      ) : gridCases.length === 0 ? null : (
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 18 : 24 }}>
          {gridCases.map((c, i) => (
            <div key={c.id || i}>
              <div style={{ aspectRatio: "1 / 1", background: "#0d0d0d", borderRadius: 16, display: "grid", placeItems: "center", position: "relative", overflow: "hidden" }}>
                {c.image_url ? (
                  <img src={c.image_url} alt={c.caption} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                ) : (
                  <>
                    <div className="ub-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
                    <div style={{ position: "relative", textAlign: "center", color: "var(--gray-500, #6B7280)", fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: 1.2 }}>
                      IMAGE {String(i + 1).padStart(2, "0")}
                    </div>
                  </>
                )}
              </div>
              <div style={{ marginTop: 12, fontSize: 14, color: "var(--white)", fontWeight: 700, lineHeight: 1.4 }}>{c.caption}</div>
              {c.description && (
                <div style={{ marginTop: 6, fontSize: 13, color: "var(--gray-300)", lineHeight: 1.6, whiteSpace: "pre-wrap", wordBreak: "keep-all" }}>{c.description}</div>
              )}
            </div>
          ))}
        </div>
      )}

      {!loading && gridCases.length > 0 && !allHavePhoto && (
        <div style={{ marginTop: 24, fontSize: 11, color: "var(--gray-500, #6B7280)", textAlign: "center" }}>
          실제 현장 사진으로 교체 예정 — 임시 플레이스홀더 사용 중
        </div>
      )}
    </div>
  );
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQPage = () => {
  const isMobile = useIsMobile3(1024);
  const [open, setOpen] = uS3(0);
  const [cat, setCat] = uS3("전체");
  const [q, setQ] = uS3("");
  const cats = ["전체", ...new Set(FAQS.map(f => f.c))];
  const filtered = FAQS.filter(f => (cat === "전체" || f.c === cat) && (!q.trim() || f.q.includes(q) || f.a.includes(q)));
  return (
    <div style={{ padding: isMobile ? "28px 16px 40px" : "48px 80px 60px" }}>
      <div className="ub-eyebrow" style={{ marginBottom: 10 }}>FAQ · 자주 묻는 질문</div>
      <h2 className="ub-h2" style={{ marginBottom: 24 }}>궁금한 점이 있으세요?</h2>
      <div style={{ position: "relative", maxWidth: 480, marginBottom: 24 }}>
        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--gray-400)" }}>{Ic.search}</span>
        <input className="ub-input" placeholder="키워드로 검색 (예: 유리, 케이블, 반품)" value={q} onChange={e => setQ(e.target.value)} style={{ paddingLeft: 40 }} />
      </div>
      {isMobile ? (
        <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto", paddingBottom: 4 }}>
          {cats.map(c => (
            <div key={c} onClick={() => setCat(c)} style={{ flexShrink: 0, padding: "6px 12px", borderRadius: 100, background: cat === c ? "rgba(46,124,246,0.12)" : "transparent", color: cat === c ? "var(--cyan-400)" : "var(--gray-200)", border: `1px solid ${cat === c ? "var(--cyan-400)" : "var(--line)"}`, fontSize: 12, fontWeight: cat === c ? 600 : 400, cursor: "pointer" }}>{c}</div>
          ))}
        </div>
      ) : null}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "200px 1fr", gap: isMobile ? 0 : 32 }}>
        {!isMobile && (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {cats.map(c => (
              <div key={c} onClick={() => setCat(c)} style={{ padding: "10px 14px", borderRadius: 8, background: cat === c ? "rgba(46,124,246,0.1)" : "transparent", color: cat === c ? "var(--cyan-400)" : "var(--gray-200)", fontSize: 13, fontWeight: cat === c ? 600 : 400, cursor: "pointer", borderLeft: cat === c ? "2px solid var(--cyan-400)" : "2px solid transparent" }}>{c}</div>
            ))}
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {filtered.length === 0 ? <div style={{ padding: 40, textAlign: "center", color: "var(--gray-400)", border: "1px dashed var(--line-strong)", borderRadius: 12 }}>검색 결과 없음</div> :
          filtered.map((f, i) => (
            <div key={i} className="ub-card" style={{ padding: "16px 22px", cursor: "pointer" }} onClick={() => setOpen(open === i ? -1 : i)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span className="ub-mono" style={{ color: "var(--cyan-400)", fontSize: 13 }}>Q.</span>
                  <span style={{ fontSize: 14, color: "var(--white)", fontWeight: 600 }}>{f.q}</span>
                  <Badge kind="cyan">{f.c}</Badge>
                </div>
                <span style={{ color: "var(--gray-400)", transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>{Ic.chevron}</span>
              </div>
              {open === i && <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)", color: "var(--gray-200)", fontSize: 14, lineHeight: 1.75, paddingLeft: 28, whiteSpace: "pre-line" }}>{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

window.UB.DetailPage = DetailPage;
window.UB.GuidePage = GuidePage;
window.UB.FAQPage = FAQPage;
