"""실제 사이트(캐시 없는 깨끗 컨텍스트)에서 버튼 없는지 확인."""
from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path(__file__).parent

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context(viewport={"width": 1280, "height": 900})
    page = ctx.new_page()

    # 홈
    page.goto("https://3dunibox.co.kr", wait_until="networkidle", timeout=20000)
    page.wait_for_timeout(3500)
    try: page.wait_for_load_state("networkidle", timeout=8000)
    except: pass
    page.wait_for_timeout(2500)
    p1 = OUT / "65-live-home.png"
    page.screenshot(path=str(p1), full_page=True)
    print("ok:", p1.name)

    # 카탈로그
    page.goto("https://3dunibox.co.kr/catalog", wait_until="networkidle", timeout=20000)
    page.wait_for_timeout(3500)
    p2 = OUT / "66-live-catalog.png"
    page.screenshot(path=str(p2), full_page=True)
    print("ok:", p2.name)

    # 관리자 (게이트)
    page.goto("https://3dunibox.co.kr/admin", wait_until="networkidle", timeout=20000)
    page.wait_for_timeout(3500)
    p3 = OUT / "67-live-admin.png"
    page.screenshot(path=str(p3), full_page=False)
    print("ok:", p3.name)

    # 텍스트 검색
    home_text = page.evaluate("""() => document.body.textContent""")
    has_buy_all = "전 제품 보기" in home_text
    has_custom = "맞춤 제작 문의" in home_text
    has_view_all = "전체 보기" in home_text
    print(f"\n홈/관리자 텍스트 검사:")
    print(f"  '전 제품 보기' 포함: {has_buy_all}")
    print(f"  '맞춤 제작 문의' 포함: {has_custom}")
    print(f"  '전체 보기' 포함: {has_view_all}")

    browser.close()
