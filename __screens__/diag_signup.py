"""실제 회원가입 흉내내며 어디서 막히는지 진단."""
import time
from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path(__file__).parent
LOGIN = "https://3dunibox.co.kr/login"
TEST_EMAIL = f"diag-{int(time.time())}@example.com"
TEST_PW = "test123456"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context(viewport={"width": 1280, "height": 900})
    page = ctx.new_page()
    logs = []
    page.on("console", lambda m: logs.append(f"[{m.type}] {m.text[:200]}"))
    page.on("pageerror", lambda e: logs.append(f"[pageerror] {str(e)[:200]}"))
    page.on("requestfailed", lambda r: logs.append(f"[reqfail] {r.url[:120]} — {r.failure}"))

    # 응답 후크 — Supabase signup endpoint
    sb_responses = []
    def on_response(resp):
        if "supabase.co" in resp.url and "auth" in resp.url:
            sb_responses.append({"url": resp.url, "status": resp.status})
    page.on("response", on_response)

    page.goto(LOGIN, wait_until="networkidle", timeout=20000)
    page.wait_for_timeout(3500)
    try: page.wait_for_load_state("networkidle", timeout=8000)
    except: pass
    page.wait_for_timeout(1500)

    # "회원가입" 모드로 전환
    print(f"테스트 이메일: {TEST_EMAIL}")
    try:
        page.get_by_text("회원가입").last.click()
        page.wait_for_timeout(500)
    except Exception as e:
        print(f"회원가입 전환 실패: {e}")

    # 이메일/비번 입력
    page.locator("input[type=email]").fill(TEST_EMAIL)
    page.locator("input[type=password]").fill(TEST_PW)

    # 회원가입 버튼 클릭
    page.get_by_role("button", name="회원가입").click()
    page.wait_for_timeout(4000)

    # 결과 캡처
    p1 = OUT / "70-signup-result.png"
    page.screenshot(path=str(p1), full_page=False)
    print(f"\n캡처: {p1.name}")

    # 메시지 추출
    body = page.evaluate("() => document.body.textContent")
    # 핵심 단서
    print("\n=== Supabase 응답 ===")
    for r in sb_responses[-10:]:
        print(f"  {r['status']}  {r['url']}")

    print("\n=== 페이지 텍스트 단서 ===")
    for kw in ["오류", "에러", "error", "실패", "메일", "확인 메일", "잠시만요", "completed"]:
        if kw in body:
            # 주변 텍스트
            i = body.find(kw)
            ctx_text = body[max(0, i-50):i+80].replace("\n", " ").strip()
            print(f"  '{kw}' 발견: ...{ctx_text}...")

    print("\n=== 콘솔 로그 (최근 15) ===")
    for line in logs[-15:]:
        print(line)

    browser.close()
