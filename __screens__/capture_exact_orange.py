"""정확한 당근 색상 #FF7E36 적용 검증 — 웹/모바일."""
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = "http://127.0.0.1:8765/3D%20UniBox%20B%20Prototype.html"
OUT = Path(__file__).parent

def settle(page, ms=2000):
    page.wait_for_load_state("domcontentloaded"); page.wait_for_timeout(ms)
    try: page.wait_for_function("document.querySelector('#root') && document.querySelector('#root').children.length > 0", timeout=12000)
    except Exception: pass
    page.wait_for_timeout(400)

PHONE = dict(viewport={"width": 390, "height": 844}, device_scale_factor=2,
             is_mobile=True, has_touch=True,
             user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # 데스크톱 헤더 클로즈업
    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page = ctx.new_page()
    page.goto(URL); settle(page)
    p1 = OUT / "57-exact-orange-desktop.png"
    page.screenshot(path=str(p1), full_page=False, clip={"x": 0, "y": 0, "width": 800, "height": 100})
    print("ok:", p1.name, p1.stat().st_size)
    p1b = OUT / "57b-exact-orange-desktop-full.png"
    page.screenshot(path=str(p1b), full_page=False)
    print("ok:", p1b.name, p1b.stat().st_size)
    ctx.close()

    # 모바일 헤더 클로즈업
    ctx = browser.new_context(**PHONE)
    page = ctx.new_page()
    page.goto(URL); settle(page)
    p2 = OUT / "58-exact-orange-mobile-header.png"
    page.screenshot(path=str(p2), full_page=False, clip={"x": 0, "y": 0, "width": 390, "height": 90})
    print("ok:", p2.name, p2.stat().st_size)
    p2b = OUT / "58b-exact-orange-mobile.png"
    page.screenshot(path=str(p2b), full_page=False)
    print("ok:", p2b.name, p2b.stat().st_size)

    # 색상 픽셀 검증 — JS로 실제 렌더된 logo-mark 배경색 추출
    bg = page.evaluate("""() => {
      const el = document.querySelector('.ub-logo-mark');
      if (!el) return null;
      const cs = getComputedStyle(el);
      return cs.backgroundColor;
    }""")
    print("rendered logo-mark backgroundColor:", bg)
    ctx.close()

    browser.close()
