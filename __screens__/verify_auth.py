"""실제 사이트에서 로그인 화면 정상 동작 확인."""
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = "https://3dunibox.co.kr/login"
OUT = Path(__file__).parent

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context(viewport={"width": 1280, "height": 900})
    page = ctx.new_page()
    logs = []
    page.on("console", lambda m: logs.append(f"[{m.type}] {m.text}"))
    page.on("pageerror", lambda e: logs.append(f"[pageerror] {e}"))
    page.goto(URL, wait_until="networkidle", timeout=20000)
    page.wait_for_timeout(3500)
    # nuke 코드 reload 대비 한 번 더 안정화
    try:
        page.wait_for_load_state("networkidle", timeout=8000)
    except Exception:
        pass
    page.wait_for_timeout(1500)

    # supabase 클라이언트 확인
    sb = page.evaluate("() => !!(window.SUPABASE && window.SUPABASE.auth)")
    auth_state = page.evaluate("() => window.__ub_auth ? { ready: window.__ub_auth.ready, hasUser: !!window.__ub_auth.user } : null")
    has_form = page.evaluate("() => !!document.querySelector('input[type=email]')")
    has_kakao_btn = page.evaluate("() => Array.from(document.querySelectorAll('button')).some(b => b.textContent.includes('카카오'))")

    print(f"SUPABASE 클라이언트:        {sb}")
    print(f"AuthProvider 상태:         {auth_state}")
    print(f"이메일 입력란 존재:         {has_form}")
    print(f"카카오 로그인 버튼 존재:    {has_kakao_btn}")

    # 캡처
    p1 = OUT / "59-live-login.png"
    page.screenshot(path=str(p1), full_page=False)
    print(f"\n스크린샷: {p1.name}")

    if logs:
        print("\n=== 콘솔 로그 ===")
        for line in logs[-15:]:
            print(line)

    browser.close()
