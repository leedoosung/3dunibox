"""관리자 게이트 + Hero CTA 제거 검증."""
from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path(__file__).parent

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context(viewport={"width": 1280, "height": 900})
    page = ctx.new_page()

    # 홈 — Hero CTA 제거 확인
    page.goto("https://3dunibox.co.kr", wait_until="networkidle", timeout=20000)
    page.wait_for_timeout(3500)
    try: page.wait_for_load_state("networkidle", timeout=8000)
    except: pass
    page.wait_for_timeout(1500)
    p1 = OUT / "60-home-no-cta.png"
    page.screenshot(path=str(p1), full_page=False)
    print("ok:", p1.name)

    # 관리자 게이트
    page.goto("https://3dunibox.co.kr/admin", wait_until="networkidle", timeout=20000)
    page.wait_for_timeout(2500)
    p2 = OUT / "61-admin-gate.png"
    page.screenshot(path=str(p2), full_page=False)
    print("ok:", p2.name)

    # 카탈로그 — soon 제거 확인
    page.goto("https://3dunibox.co.kr/catalog", wait_until="networkidle", timeout=20000)
    page.wait_for_timeout(2500)
    p3 = OUT / "62-catalog-2only.png"
    page.screenshot(path=str(p3), full_page=False)
    print("ok:", p3.name)

    browser.close()
