"""상단/하단 가이드라인 제거 검증."""
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
    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page = ctx.new_page()
    page.goto(URL); settle(page)
    p1 = OUT / "46-no-lines-desktop.png"
    page.screenshot(path=str(p1), full_page=False)
    print("ok:", p1.name, p1.stat().st_size)
    ctx.close()

    ctx = browser.new_context(**PHONE)
    page = ctx.new_page()
    page.goto(URL); settle(page)
    p2 = OUT / "47-no-lines-mobile.png"
    page.screenshot(path=str(p2), full_page=False)
    print("ok:", p2.name, p2.stat().st_size)
    ctx.close()

    browser.close()
