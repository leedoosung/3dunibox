"""모바일 반응형 검증."""
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

MOBILE = dict(viewport={"width": 390, "height": 844}, device_scale_factor=2,
              is_mobile=True, has_touch=True,
              user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) "
                         "AppleWebKit/605.1.15 (KHTML, like Gecko) "
                         "Version/17.0 Mobile/15E148 Safari/604.1")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # 24) 모바일 홈
    ctx = browser.new_context(**MOBILE)
    page = ctx.new_page()
    page.goto(URL); settle(page)
    p24 = OUT / "24-mobile-home.png"
    page.screenshot(path=str(p24), full_page=False)
    print("ok:", p24.name, p24.stat().st_size)

    # 25) 모바일 햄버거 메뉴 열림
    page.get_by_label("메뉴 열기").first.click()
    page.wait_for_timeout(300)
    p25 = OUT / "25-mobile-menu-open.png"
    page.screenshot(path=str(p25), full_page=False)
    print("ok:", p25.name, p25.stat().st_size)
    page.get_by_label("메뉴 닫기").first.click()
    page.wait_for_timeout(300)

    # 26) 모바일 카탈로그
    page.goto(URL + "#catalog"); settle(page)
    p26 = OUT / "26-mobile-catalog.png"
    page.screenshot(path=str(p26), full_page=False)
    print("ok:", p26.name, p26.stat().st_size)

    # 27) 모바일 카트 (2개 담기)
    plus = page.get_by_text("+ 장바구니")
    if plus.count() > 0:
        plus.first.click(); page.wait_for_timeout(400)
        if plus.count() > 1: plus.nth(1).click(); page.wait_for_timeout(400)
    page.locator("button[aria-label='장바구니']").first.click()
    page.wait_for_timeout(550)
    p27 = OUT / "27-mobile-cart.png"
    page.screenshot(path=str(p27), full_page=False)
    print("ok:", p27.name, p27.stat().st_size)

    # 28) 모바일 결제 페이지 (스크롤 위쪽)
    page.locator("button", has_text="결제하기").first.click()
    page.wait_for_timeout(800)
    p28 = OUT / "28-mobile-order-top.png"
    page.screenshot(path=str(p28), full_page=False)
    print("ok:", p28.name, p28.stat().st_size)

    # 29) 모바일 결제 페이지 전체 (스크롤 풀샷)
    p29 = OUT / "29-mobile-order-full.png"
    page.screenshot(path=str(p29), full_page=True)
    print("ok:", p29.name, p29.stat().st_size)
    ctx.close()

    # 30) 모바일 마이페이지 — 게스트
    ctx = browser.new_context(**MOBILE)
    page = ctx.new_page()
    page.goto(URL + "#me"); settle(page)
    p30 = OUT / "30-mobile-mypage-empty.png"
    page.screenshot(path=str(p30), full_page=False)
    print("ok:", p30.name, p30.stat().st_size)

    # 샘플 채우기 → 주소록 탭
    page.get_by_text("샘플 채우기").first.click(); page.wait_for_timeout(400)
    page.get_by_role("button", name="주소록").click(); page.wait_for_timeout(400)
    p31 = OUT / "31-mobile-mypage-addresses.png"
    page.screenshot(path=str(p31), full_page=False)
    print("ok:", p31.name, p31.stat().st_size)
    ctx.close()

    # 32) 모바일 관리자
    ctx = browser.new_context(**MOBILE)
    page = ctx.new_page()
    page.goto(URL + "#admin"); settle(page)
    p32 = OUT / "32-mobile-admin-orders.png"
    page.screenshot(path=str(p32), full_page=False)
    print("ok:", p32.name, p32.stat().st_size)

    # 회원 탭
    page.get_by_role("button", name="회원").first.click(); page.wait_for_timeout(400)
    p33 = OUT / "33-mobile-admin-members.png"
    page.screenshot(path=str(p33), full_page=False)
    print("ok:", p33.name, p33.stat().st_size)
    ctx.close()

    browser.close()
