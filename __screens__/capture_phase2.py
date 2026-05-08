"""Phase 2 검증: 마이페이지 + 관리자 회원 탭 + 주소록 모달."""
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

    # === 마이페이지 시리즈 ===
    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page = ctx.new_page()
    page.goto(URL + "#me"); settle(page)

    # 15) 마이페이지 - 게스트 (비어있는 상태) — 내 정보 탭
    p15 = OUT / "15-mypage-empty.png"
    page.screenshot(path=str(p15), full_page=False)
    print("ok:", p15.name, p15.stat().st_size)

    # 샘플 채우기 클릭
    page.get_by_text("샘플 채우기").first.click()
    page.wait_for_timeout(500)

    # 16) 마이페이지 - 내 정보 (샘플 적용)
    p16 = OUT / "16-mypage-info.png"
    page.screenshot(path=str(p16), full_page=False)
    print("ok:", p16.name, p16.stat().st_size)

    # 주소록 탭 이동
    page.get_by_role("button", name="주소록").click()
    page.wait_for_timeout(400)
    p17 = OUT / "17-mypage-addresses.png"
    page.screenshot(path=str(p17), full_page=False)
    print("ok:", p17.name, p17.stat().st_size)

    # 주문 이력 탭
    page.get_by_role("button", name="주문 이력").click()
    page.wait_for_timeout(400)
    p18 = OUT / "18-mypage-history.png"
    page.screenshot(path=str(p18), full_page=False)
    print("ok:", p18.name, p18.stat().st_size)

    # === OrderPage: 주소록 자동 채워진 상태 + 주소록 모달 ===
    # 카탈로그 → 담기 → 결제하기
    page.goto(URL + "#catalog"); settle(page)
    plus = page.get_by_text("+ 장바구니")
    if plus.count() > 0: plus.first.click(); page.wait_for_timeout(400)
    page.locator("button", has_text="장바구니").first.click()
    page.wait_for_timeout(500)
    page.locator("button", has_text="결제하기").first.click()
    page.wait_for_timeout(800)

    # 19) OrderPage — 마이페이지 주소가 자동 채워진 상태
    p19 = OUT / "19-order-prefilled.png"
    page.screenshot(path=str(p19), full_page=False)
    print("ok:", p19.name, p19.stat().st_size)

    # 주소록 불러오기 모달
    page.get_by_text("📒 주소록 불러오기", exact=False).first.click()
    page.wait_for_timeout(450)
    p20 = OUT / "20-order-address-picker.png"
    page.screenshot(path=str(p20), full_page=False)
    print("ok:", p20.name, p20.stat().st_size)
    ctx.close()

    # === 관리자 회원 탭 ===
    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page = ctx.new_page()
    page.goto(URL + "#admin"); settle(page)
    page.get_by_role("button", name="회원").first.click()
    page.wait_for_timeout(500)
    p21 = OUT / "21-admin-members.png"
    page.screenshot(path=str(p21), full_page=False)
    print("ok:", p21.name, p21.stat().st_size)

    # 첫 회원 행 클릭 → 디테일 드로어
    page.locator("table tbody tr").first.click()
    page.wait_for_timeout(550)
    p22 = OUT / "22-admin-member-detail.png"
    page.screenshot(path=str(p22), full_page=False)
    print("ok:", p22.name, p22.stat().st_size)
    ctx.close()

    # === 관리자 주문 — STATUS_FLOW가 결제완료/제작중/배송중/완료로 변경됐는지 ===
    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page = ctx.new_page()
    page.goto(URL + "#admin"); settle(page)
    p23 = OUT / "23-admin-orders-newflow.png"
    page.screenshot(path=str(p23), full_page=False)
    print("ok:", p23.name, p23.stat().st_size)
    ctx.close()

    browser.close()
