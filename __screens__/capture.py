"""3D UniBox B Prototype 화면 캡처. 서버는 외부에서 미리 떠 있어야 함."""
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = "http://127.0.0.1:8765/3D%20UniBox%20B%20Prototype.html"
OUT = Path(__file__).parent

def shoot(page, name):
    path = OUT / f"{name}.png"
    page.screenshot(path=str(path), full_page=False)
    print(f"  -> {path.name} ({path.stat().st_size} bytes)")

def settle(page, ms=1500):
    """React UMD + Babel 트랜스파일이 끝날 때까지 대기."""
    page.wait_for_load_state("domcontentloaded")
    page.wait_for_timeout(ms)
    # #root 안에 자식이 생길 때까지 대기 (React 마운트 확인)
    page.wait_for_function("document.querySelector('#root') && document.querySelector('#root').children.length > 0",
                           timeout=10000)
    page.wait_for_timeout(400)

def hide_tweaks(page):
    """TweaksPanel(디자인 조정 패널)이 보이면 캡처에서 가린다."""
    page.add_style_tag(content=("[class*='tweaks'], [data-tweaks], aside { }\n"
                                 "/* TweaksPanel 후보 위치 우측 상/하단 fixed 박스 — 데이터 속성 추정 */\n"))

def open_cart(page):
    page.get_by_role("button", name="견적함").first.click()
    page.wait_for_timeout(450)  # 슬라이드 인 280ms + 여유

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        try:
            # 1) Desktop home
            ctx = browser.new_context(viewport={"width": 1280, "height": 800}, device_scale_factor=1)
            page = ctx.new_page()
            page.goto(URL); settle(page); hide_tweaks(page)
            shoot(page, "01-home-desktop")

            # 2) Desktop home with EMPTY cart drawer open
            open_cart(page)
            shoot(page, "02-cart-empty-desktop")
            # close
            page.keyboard.press("Escape")
            page.wait_for_timeout(400)

            # 3) Desktop catalog
            page.get_by_text("제품", exact=True).first.click()
            page.wait_for_timeout(700)
            shoot(page, "03-catalog-desktop")

            # 4) Add an item: 카탈로그 카드의 "담기" 버튼 후보 텍스트 시도
            added = False
            for label in ["담기", "견적함에 담기", "담기 +", "+ 담기", "Add"]:
                try:
                    btn = page.get_by_role("button", name=label).first
                    if btn.count() > 0 and btn.is_visible():
                        btn.click(); added = True; break
                except Exception:
                    continue
            if not added:
                # 카드 클릭 → 상세 페이지에서 담기
                try:
                    page.locator(".ub-card").first.click()
                    page.wait_for_timeout(700)
                    for label in ["견적함에 담기", "담기"]:
                        try:
                            btn = page.get_by_role("button", name=label).first
                            if btn.count() > 0 and btn.is_visible():
                                btn.click(); added = True; break
                        except Exception:
                            continue
                except Exception:
                    pass

            page.wait_for_timeout(500)
            # 카트 열고 캡처
            try:
                open_cart(page)
                shoot(page, "04-cart-with-item-desktop")
            except Exception as e:
                print("cart open after add failed:", e)
            ctx.close()

            # 5) Mobile home
            ctx = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2,
                                       is_mobile=True, has_touch=True,
                                       user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) "
                                                  "AppleWebKit/605.1.15 (KHTML, like Gecko) "
                                                  "Version/17.0 Mobile/15E148 Safari/604.1")
            page = ctx.new_page()
            page.goto(URL); settle(page)
            shoot(page, "05-home-mobile")

            # 6) Mobile cart drawer (full-width 확인)
            try:
                open_cart(page)
                shoot(page, "06-cart-empty-mobile")
            except Exception as e:
                print("mobile cart open failed:", e)
            ctx.close()
        finally:
            browser.close()

if __name__ == "__main__":
    main()
