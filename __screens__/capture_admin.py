"""관리자 페이지 + 배송비가 반영된 견적함 재캡처."""
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

    # === 1) 관리자 화면 (데스크톱 1440x900) ===
    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page = ctx.new_page()
    page.goto(URL + "#admin"); settle(page)
    page.wait_for_timeout(400)
    p1 = OUT / "07-admin-orders.png"
    page.screenshot(path=str(p1), full_page=False)
    print("ok:", p1.name, p1.stat().st_size)

    # 첫 주문 행의 주문번호 버튼 (테이블 첫 컬럼 button)
    try:
        page.locator("table tbody tr").first.locator("button.ub-mono, button").first.click(timeout=5000)
        page.wait_for_timeout(550)
        p2 = OUT / "08-admin-order-detail.png"
        page.screenshot(path=str(p2), full_page=False)
        print("ok:", p2.name, p2.stat().st_size)
    except Exception as e:
        print("detail open failed:", e)
    ctx.close()

    # === 2) 배송비 적용 견적함 (적은 금액 — 배송비 발생) ===
    ctx = browser.new_context(viewport={"width": 1280, "height": 800}, device_scale_factor=1)
    page = ctx.new_page()
    page.goto(URL); settle(page)
    page.get_by_text("제품", exact=True).first.click()
    page.wait_for_timeout(600)
    # BS3(69,000원) 1개만 → 100,000 미만 → 배송비 발생
    plus = page.get_by_text("+ 견적함")
    if plus.count() > 1:
        plus.nth(1).click()  # 두 번째 카드의 +
        page.wait_for_timeout(500)
    nav_cart = page.locator("button", has_text="견적함").first
    nav_cart.click()
    page.wait_for_timeout(500)
    p3 = OUT / "09-cart-with-shipfee.png"
    page.screenshot(path=str(p3), full_page=False)
    print("ok:", p3.name, p3.stat().st_size)

    # === 3) 무료배송 도달 견적함 ===
    page.keyboard.press("Escape"); page.wait_for_timeout(500)
    if plus.count() > 0:
        plus.first.click()  # FSF2 89,000 추가 → 158,000 → 무료
        page.wait_for_timeout(500)
    nav_cart.click()
    page.wait_for_timeout(500)
    p4 = OUT / "10-cart-free-ship.png"
    page.screenshot(path=str(p4), full_page=False)
    print("ok:", p4.name, p4.stat().st_size)
    ctx.close()
    browser.close()
