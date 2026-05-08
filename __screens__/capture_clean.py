"""캐시 없는 새 컨텍스트로 진짜 색상 검증."""
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = "http://127.0.0.1:8765/3D%20UniBox%20B%20Prototype.html"
LAN_URL = "http://192.168.1.150:8765/3D%20UniBox%20B%20Prototype.html"
OUT = Path(__file__).parent

def settle(page, ms=2500):
    page.wait_for_load_state("domcontentloaded")
    page.wait_for_timeout(ms)
    try:
        page.wait_for_function("document.querySelector('#root') && document.querySelector('#root').children.length > 0", timeout=15000)
    except Exception:
        pass
    page.wait_for_timeout(500)

PHONE = dict(viewport={"width": 390, "height": 844}, device_scale_factor=2,
             is_mobile=True, has_touch=True,
             user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    # 항상 깨끗한 컨텍스트
    ctx = browser.new_context(**PHONE)
    page = ctx.new_page()

    # 로컬
    page.goto(URL); settle(page)
    p1 = OUT / "50-clean-mobile-local.png"
    page.screenshot(path=str(p1), full_page=False)
    print("ok:", p1.name, p1.stat().st_size)
    ctx.close()

    # LAN
    ctx = browser.new_context(**PHONE)
    page = ctx.new_page()
    page.goto(LAN_URL); settle(page)
    p2 = OUT / "51-clean-mobile-lan.png"
    page.screenshot(path=str(p2), full_page=False)
    print("ok:", p2.name, p2.stat().st_size)

    # 헤더 클로즈업
    p3 = OUT / "52-clean-mobile-header.png"
    page.screenshot(path=str(p3), full_page=False, clip={"x": 0, "y": 0, "width": 390, "height": 100})
    print("ok:", p3.name, p3.stat().st_size)
    ctx.close()

    browser.close()
