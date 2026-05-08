// B안 — 페이지 0: 인증 (Supabase)
// Auth 흐름: 이메일+비밀번호 + (추후) 카카오 OAuth
// 전역 user 상태는 window.UB.useAuth() 로 사용

const { useState: uS0, useEffect: uE0 } = React;

// Supabase 클라이언트는 HTML에서 window.SUPABASE 로 주입됨
const sb = () => window.SUPABASE;

// ─── AuthProvider — 전역 user 상태 ─────────────────────────────────────────
// 단일 진실 공급원: window.__ub_auth (구독자 패턴)
const __auth = {
  user: null,
  ready: false,
  listeners: new Set(),
  notify() { this.listeners.forEach(fn => fn(this.user, this.ready)); },
  setUser(u) { this.user = u || null; this.ready = true; this.notify(); },
};
window.__ub_auth = __auth;

// 시작 시 Supabase 세션 로드
(function bootAuth() {
  const client = sb();
  if (!client) return;
  client.auth.getSession().then(({ data }) => {
    __auth.setUser(data?.session?.user || null);
  }).catch(() => __auth.setUser(null));
  client.auth.onAuthStateChange((_event, session) => {
    __auth.setUser(session?.user || null);
  });
})();

const useAuth = () => {
  const [state, setState] = uS0({ user: __auth.user, ready: __auth.ready });
  uE0(() => {
    const fn = (user, ready) => setState({ user, ready });
    __auth.listeners.add(fn);
    return () => __auth.listeners.delete(fn);
  }, []);
  return state; // { user, ready }
};

const signOut = async () => {
  const client = sb();
  if (!client) return;
  await client.auth.signOut();
};

const signInKakao = async () => {
  const client = sb();
  if (!client) return;
  const { error } = await client.auth.signInWithOAuth({
    provider: "kakao",
    options: { redirectTo: location.origin },
  });
  if (error) alert("카카오 로그인 오류: " + error.message);
};

// ─── 공통 폼 스타일 ──────────────────────────────────────────────────────────
const authPageWrap = {
  minHeight: "calc(100vh - 60px)",
  display: "grid", placeItems: "center",
  padding: "40px 20px", background: "var(--navy-950)",
};
const authCard = {
  width: "min(420px, 100%)",
  background: "var(--navy-800)",
  border: "1px solid var(--line)",
  borderRadius: 16, padding: "32px 28px",
};

// ─── LOGIN PAGE ───────────────────────────────────────────────────────────────
const LoginPage = ({ onNav, onAfter }) => {
  const [mode, setMode] = uS0("login"); // login | signup
  const [email, setEmail] = uS0("");
  const [pw, setPw] = uS0("");
  // 회원가입 추가 필드
  const [name, setName] = uS0("");
  const [phone, setPhone] = uS0("");
  const [zip, setZip] = uS0("");
  const [addr1, setAddr1] = uS0("");
  const [addr2, setAddr2] = uS0("");
  const [agreePrivacy, setAgreePrivacy] = uS0(false);
  const [agreeTerms, setAgreeTerms] = uS0(false);
  const [busy, setBusy] = uS0(false);
  const [msg, setMsg] = uS0(null);

  const submit = async () => {
    if (!email || !pw) { setMsg({ type: "err", text: "이메일과 비밀번호를 입력해주세요." }); return; }
    if (pw.length < 6) { setMsg({ type: "err", text: "비밀번호는 6자 이상이어야 합니다." }); return; }
    if (mode === "signup") {
      if (!name || !phone || !zip || !addr1 || !addr2) {
        setMsg({ type: "err", text: "이름·전화·주소를 모두 입력해주세요." });
        return;
      }
      if (!agreePrivacy || !agreeTerms) {
        setMsg({ type: "err", text: "필수 약관에 모두 동의해주세요." });
        return;
      }
    }
    setBusy(true); setMsg(null);
    try {
      const client = sb();
      if (mode === "signup") {
        const { data, error } = await client.auth.signUp({
          email, password: pw,
          options: { emailRedirectTo: location.origin, data: { name, phone } },
        });
        if (error) throw error;

        // session 확보 — 가입 즉시 발급 또는 즉시 로그인 시도
        let session = data?.session;
        let user = data?.user;
        if (!session) {
          const { data: d2, error: e2 } = await client.auth.signInWithPassword({ email, password: pw });
          if (e2) throw e2;
          session = d2?.session;
          user = d2?.user;
        }
        if (!session || !user) {
          setMsg({ type: "ok", text: "확인 메일을 보냈어요. 메일의 링크를 눌러 인증을 완료해주세요." });
          return;
        }

        // profiles + addresses INSERT
        try {
          await client.from("profiles").upsert({ id: user.id, name, phone });
          await client.from("addresses").insert({
            user_id: user.id, label: "기본",
            name, phone, zip, addr1, addr2, is_default: true,
          });
        } catch (dbErr) {
          console.warn("[signup] DB insert 실패:", dbErr);
          // DB 실패해도 가입 자체는 됐으니 진입은 허용
        }

        setMsg({ type: "ok", text: "회원가입 완료! 잠시만요…" });
        setTimeout(() => onAfter && onAfter(), 400);
      } else {
        const { error } = await client.auth.signInWithPassword({ email, password: pw });
        if (error) throw error;
        setMsg({ type: "ok", text: "로그인 성공! 잠시만요…" });
        setTimeout(() => onAfter && onAfter(), 300);
      }
    } catch (e) {
      const m = e?.message || String(e);
      const ko = m.includes("Invalid login") ? "이메일 또는 비밀번호가 올바르지 않습니다."
              : m.includes("already registered") ? "이미 가입된 이메일입니다. 로그인해주세요."
              : m.includes("Email not confirmed") ? "이메일 인증이 완료되지 않았습니다. 받은 메일을 확인해주세요."
              : m;
      setMsg({ type: "err", text: ko });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={authPageWrap}>
      <div style={authCard}>
        <div className="ub-eyebrow" style={{ marginBottom: 8 }}>{mode === "login" ? "LOGIN" : "SIGN UP"}</div>
        <h2 className="ub-h2" style={{ fontSize: 24, marginBottom: 6 }}>
          {mode === "login" ? "로그인" : "회원가입"}
        </h2>
        <p style={{ color: "var(--gray-400)", fontSize: 12, marginBottom: 20 }}>
          {mode === "login" ? "주문하시려면 로그인이 필요합니다." : "한 번 입력하면 다음 주문부터 자동으로 채워집니다."}
        </p>

        <label className="ub-label ub-label-req">이메일</label>
        <input className="ub-input" type="email" autoComplete="email"
          value={email} onChange={e => setEmail(e.target.value)}
          placeholder="name@example.com" />

        <label className="ub-label ub-label-req" style={{ marginTop: 12 }}>비밀번호</label>
        <input className="ub-input" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"}
          value={pw} onChange={e => setPw(e.target.value)}
          placeholder="6자 이상"
          onKeyDown={e => { if (e.key === "Enter" && mode === "login") submit(); }} />

        {mode === "signup" && (
          <>
            <label className="ub-label ub-label-req" style={{ marginTop: 12 }}>이름</label>
            <input className="ub-input" autoComplete="name"
              value={name} onChange={e => setName(e.target.value)} placeholder="홍길동" />

            <label className="ub-label ub-label-req" style={{ marginTop: 12 }}>전화번호</label>
            <input className="ub-input ub-mono" autoComplete="tel"
              value={phone} onChange={e => setPhone(e.target.value)} placeholder="010-0000-0000" />

            <label className="ub-label ub-label-req" style={{ marginTop: 12 }}>우편번호</label>
            <div style={{ display: "flex", gap: 8 }}>
              <input className="ub-input ub-mono" autoComplete="postal-code"
                value={zip} onChange={e => setZip(e.target.value)} placeholder="00000" style={{ flex: 1 }} />
              <button type="button" onClick={() => window.UB.openPostcode(({ zip: z, addr1: a1 }) => { setZip(z); setAddr1(a1); setTimeout(() => { const el = document.querySelector('input[autocomplete="address-line2"]'); if (el) el.focus(); }, 0); })}
                style={{ padding: "0 14px", background: "transparent", border: "1px solid var(--line-strong)", borderRadius: 8, color: "var(--gray-200)", fontSize: 12, cursor: "pointer" }}>검색</button>
            </div>

            <label className="ub-label ub-label-req" style={{ marginTop: 12 }}>주소</label>
            <input className="ub-input" autoComplete="address-line1"
              value={addr1} onChange={e => setAddr1(e.target.value)}
              placeholder="기본 주소" style={{ marginBottom: 8 }} />
            <input className="ub-input" autoComplete="address-line2"
              value={addr2} onChange={e => setAddr2(e.target.value)}
              placeholder="상세 주소 (동·호수 등)" />

            <div style={{ marginTop: 18, padding: 12, border: "1px solid var(--line-strong)", borderRadius: 8, display: "flex", flexDirection: "column", gap: 10 }}>
              <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 12.5, color: "var(--gray-100)", cursor: "pointer", lineHeight: 1.5 }}>
                <input type="checkbox" checked={agreePrivacy} onChange={e => setAgreePrivacy(e.target.checked)} style={{ marginTop: 3 }} />
                <span>
                  <strong style={{ color: "var(--white)" }}>[필수]</strong> 개인정보 수집·이용에 동의합니다.{" "}
                  <a href="/privacy" target="_blank" rel="noopener" style={{ color: "var(--cyan-400)", textDecoration: "underline" }} onClick={e => e.stopPropagation()}>전문보기</a>
                </span>
              </label>
              <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 12.5, color: "var(--gray-100)", cursor: "pointer", lineHeight: 1.5 }}>
                <input type="checkbox" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} style={{ marginTop: 3 }} />
                <span>
                  <strong style={{ color: "var(--white)" }}>[필수]</strong> 이용약관에 동의합니다.{" "}
                  <a href="/terms" target="_blank" rel="noopener" style={{ color: "var(--cyan-400)", textDecoration: "underline" }} onClick={e => e.stopPropagation()}>전문보기</a>
                </span>
              </label>
            </div>
          </>
        )}

        {msg && (
          <div style={{ marginTop: 14, padding: "10px 12px", borderRadius: 8, fontSize: 12, lineHeight: 1.5,
            color: msg.type === "ok" ? "var(--success)" : "var(--warning, #FBBF24)",
            background: msg.type === "ok" ? "rgba(74,222,128,0.08)" : "rgba(251,191,36,0.08)",
            border: `1px solid ${msg.type === "ok" ? "rgba(74,222,128,0.3)" : "rgba(251,191,36,0.3)"}` }}>
            {msg.text}
          </div>
        )}

        <button type="button" onClick={submit} disabled={busy}
          style={{ width: "100%", padding: "12px 14px", borderRadius: 10, marginTop: 18,
            background: "var(--cyan-400)", color: "var(--navy-950)", border: 0,
            fontSize: 14, fontWeight: 700, cursor: busy ? "wait" : "pointer", opacity: busy ? 0.6 : 1 }}>
          {busy ? "처리 중…" : (mode === "login" ? "로그인" : "회원가입")}
        </button>

        <div style={{ marginTop: 16, textAlign: "center", fontSize: 12, color: "var(--gray-300)" }}>
          {mode === "login" ? (
            <>아직 회원이 아니신가요? <button type="button" onClick={() => { setMode("signup"); setMsg(null); }}
              style={{ background: "transparent", border: 0, color: "var(--cyan-400)", cursor: "pointer", fontWeight: 600, padding: 0 }}>회원가입</button></>
          ) : (
            <>이미 회원이신가요? <button type="button" onClick={() => { setMode("login"); setMsg(null); }}
              style={{ background: "transparent", border: 0, color: "var(--cyan-400)", cursor: "pointer", fontWeight: 600, padding: 0 }}>로그인</button></>
          )}
        </div>

        <div style={{ marginTop: 22, fontSize: 11, color: "var(--gray-500)", textAlign: "center", lineHeight: 1.6 }}>
          가입 시 <span style={{ textDecoration: "underline" }}>이용약관</span> 및 <span style={{ textDecoration: "underline" }}>개인정보처리방침</span>에 동의한 것으로 간주됩니다.
        </div>
      </div>
    </div>
  );
};

window.UB = window.UB || {};
window.UB.useAuth = useAuth;
window.UB.signOut = signOut;
window.UB.signInKakao = signInKakao;
window.UB.LoginPage = LoginPage;
