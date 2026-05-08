"""완전 블랙 통일 검증 — 상단/카드/하단."""
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = "http://127.0.0.1:8765/3D%20UniBox%20B%20Prototype.html"
OUT = Path(__file__).parent

def settle(page, ms=1500):
    page.wait_for_load_state("domcontentloaded")
    page.wait_for_timeout(ms)
    page.wait_for_function("document.querySelector('#root') && document.querySelector('#root').children.length > 0", timeout=10000)
    page.wait_for_timeout(400)

PHONE = dict(viewport={"width": 390, "height": 844}, device_scale_factor=2,
             is_mobile=True, has_touch=True,
             user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # 데스크톱 홈
    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page = ctx.new_page()
    page.goto(URL); settle(page)
    p1 = OUT / "43-fullblack-desktop-home.png"
    page.screenshot(path=str(p1), full_page=False)
    print("ok:", p1.name, p1.stat().st_size)

    # 카탈로그
    page.goto(URL + "#catalog"); settle(page)
    p2 = OUT / "44-fullblack-desktop-catalog.png"
    page.screenshot(path=str(p2), full_page=False)
    print("ok:", p2.name, p2.stat().st_size)
    ctx.close()

    # 모바일 홈 (하단 탭바 검정 확인)
    ctx = browser.new_context(**PHONE)
    page = ctx.new_page()
    page.goto(URL); settle(page)
    p3 = OUT / "45-fullblack-mobile-home.png"
    page.screenshot(path=str(p3), full_page=False)
    print("ok:", p3.name, p3.stat().st_size)
    ctx.close()

    browser.close()
