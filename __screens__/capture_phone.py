"""실제 갤럭시 폰 시뮬레이션 (390 / 720 두 해상도)."""
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = "http://127.0.0.1:8765/3D%20UniBox%20B%20Prototype.html"
OUT = Path(__file__).parent

def settle(page, ms=1500):
    page.wait_for_load_state("domcontentloaded")
    page.wait_for_timeout(ms)
    page.wait_for_function("document.querySelector('#root') && document.querySelector('#root').children.length > 0",
                           timeout=10000)
    page.wait_for_timeout(400)

PHONE = dict(viewport={"width": 390, "height": 844}, device_scale_factor=2,
             is_mobile=True, has_touch=True,
             user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1")
TABLET720 = dict(viewport={"width": 720, "height": 1612}, device_scale_factor=2,
                 is_mobile=True, has_touch=True,
                 user_agent="Mozilla/5.0 (Linux; Android 14; SM-S928N) AppleWebKit/537.36 Mobile Safari/537.36")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # 34) 일반 폰 (390) — Hero 압축 + 하단 탭바
    ctx = browser.new_context(**PHONE)
    page = ctx.new_page()
    page.goto(URL); settle(page)
    p34 = OUT / "34-phone390-home.png"
    page.screenshot(path=str(p34), full_page=False)
    print("ok:", p34.name, p34.stat().st_size)
    ctx.close()

    # 35) 사용자 환경 추정 (720) — 데스크톱 모드 또는 폴드
    ctx = browser.new_context(**TABLET720)
    page = ctx.new_page()
    page.goto(URL); settle(page)
    p35 = OUT / "35-phone720-home.png"
    page.screenshot(path=str(p35), full_page=False)
    print("ok:", p35.name, p35.stat().st_size)

    # 36) 720 카탈로그 (카드 압축 + 하단 탭바)
    page.goto(URL + "#catalog"); settle(page)
    p36 = OUT / "36-phone720-catalog.png"
    page.screenshot(path=str(p36), full_page=False)
    print("ok:", p36.name, p36.stat().st_size)
    ctx.close()

    browser.close()
