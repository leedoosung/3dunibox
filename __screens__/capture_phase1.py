"""Phase 1 검증: 견적 → 주문 흐름 + 동봉품 + 유의사항 확인."""
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
    ctx = browser.new_context(viewport={"width": 1280, "height": 900}, device_scale_factor=1)
    page = ctx.new_page()

    # 11) 카탈로그에서 장바구니 명칭 + + 장바구니 버튼 확인
    page.goto(URL + "#catalog"); settle(page)
    p_cat = OUT / "11-catalog-renamed.png"
    page.screenshot(path=str(p_cat), full_page=False)
    print("ok:", p_cat.name, p_cat.stat().st_size)

    # 12) 장바구니에 1+1 담아두기 (FSF2 + BS3) → drawer 열기 → 결제하기 버튼
    plus = page.get_by_text("+ 장바구니")
    print("add candidates:", plus.count())
    if plus.count() > 0:
        plus.first.click(); page.wait_for_timeout(400)
        if plus.count() > 1:
            plus.nth(1).click(); page.wait_for_timeout(400)
    page.locator("button", has_text="장바구니").first.click()
    page.wait_for_timeout(550)
    p_cart = OUT / "12-cart-renamed.png"
    page.screenshot(path=str(p_cart), full_page=False)
    print("ok:", p_cart.name, p_cart.stat().st_size)

    # 13) 결제 페이지로 이동 (CartDrawer 결제하기 클릭)
    page.locator("button", has_text="결제하기").first.click()
    page.wait_for_timeout(800)
    p_order = OUT / "13-order-checkout.png"
    page.screenshot(path=str(p_order), full_page=True)
    print("ok:", p_order.name, p_order.stat().st_size)

    # 14) 제품 상세에서 동봉품 (스펙 탭)
    page.goto(URL + "#catalog"); settle(page)
    page.locator(".ub-card-product").first.click()
    page.wait_for_timeout(700)
    # 스펙 탭 클릭
    try:
        page.get_by_text("스펙", exact=True).first.click()
        page.wait_for_timeout(400)
    except Exception:
        pass
    p_detail = OUT / "14-detail-spec.png"
    page.screenshot(path=str(p_detail), full_page=False)
    print("ok:", p_detail.name, p_detail.stat().st_size)

    browser.close()
