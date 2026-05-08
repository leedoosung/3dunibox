"""4번 화면 재촬영 — 카탈로그 카드의 '+ 견적함' 버튼을 정확히 클릭해서 한 개 담은 뒤 견적함을 연다."""
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

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context(viewport={"width": 1280, "height": 800}, device_scale_factor=1)
    page = ctx.new_page()
    page.goto(URL); settle(page)

    # 카탈로그 이동
    page.get_by_text("제품", exact=True).first.click()
    page.wait_for_timeout(700)

    # 카탈로그 카드의 '+ 견적함'은 <span>. 텍스트 셀렉터로 직접 첫 번째 클릭
    plus = page.get_by_text("+ 견적함")
    n = plus.count()
    print("add candidates:", n)
    if n > 0:
        plus.first.click()
        page.wait_for_timeout(700)
        # 두 번째도 담아 합계가 두 줄로 나오도록 (선택)
        if n > 1:
            plus.nth(1).click()
            page.wait_for_timeout(500)

    # TopNav 우상단 '견적함' 버튼
    nav_cart = page.locator("button", has_text="견적함").first
    nav_cart.click()
    page.wait_for_timeout(550)

    out = OUT / "04-cart-with-item-desktop.png"
    page.screenshot(path=str(out), full_page=False)
    print("ok:", out.name, out.stat().st_size)
    browser.close()
