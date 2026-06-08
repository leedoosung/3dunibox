# 3D UniBox — 운영 사이트

**도메인**: https://3dunibox.co.kr
**호스팅**: Vercel (프로젝트명 `3-d-uni-box`, 팀 `3-dunibox`)
**DB/Auth**: Supabase (`cdpigjktddwyajyjhqtw.supabase.co`, Northeast Asia Seoul)
**메일 SMTP**: Resend (`smtp.resend.com:465`, 발신자 `noreply@3dunibox.co.kr`)
**소스 백업**: GitHub private repo `https://github.com/leedoosung/3dunibox` (main 브랜치)
**작성자**: 이두성 (에스디컨버전스, leedoo80@gmail.com)
**상태**: 정식 오픈 단계 (2026-05-03 기준)

---

## ⚠ 다음 세션이 절대 반복하면 안 되는 실수 (이전 세션이 한 어리버리)

### 1. 옵션을 일관성 없이 권유하지 마라
- 이메일 인증 ON/OFF를 사용자 반응에 따라 왔다갔다 권유함 → 사용자 격노.
- **결정 사항은 처음부터 명확한 한 답을 제시하고, 사용자가 다시 물어봐도 일관 유지**.
- "임시", "일단" 같은 표현 금지 — 정식 운영을 원하는 사용자에게 이중 작업을 만든다.

### 2. 같은 텍스트가 여러 곳에 있으면 한 번에 모두 지워라
- "샘플 채우기/비우기" 버튼이 모바일+데스크톱 두 곳에 있는데 한 곳만 지우고 배포 → 사용자 격노 반복.
- "자동 저장" 안내가 사이드바 + 본문 두 곳에 있어서 한 번에 못 지움.
- "전 제품 보기 / 맞춤 제작 문의"도 여러 곳에서 한 번에 못 지움.
- **수정 전 `grep`으로 동일 키워드 전체 위치 확인 후 일괄 제거**.

### 3. 매 변경마다 "시크릿 탭으로 검증하세요" 권유 금지
- 사용자 격노. 정식 운영에서 매번 시크릿 탭은 말이 안 됨.
- **현재 SW 자살 모드 + 모든 자원 `Cache-Control: no-store` 적용**으로 영구 해결됨.
- SW 다시 살리지 마라. 사용자가 PWA 설치 기능을 명시적으로 요구할 때만.

### 4. 외부 서비스 가입 후 막히는 단계 사전 안내
- 카카오 비즈 앱 — 사업자등록증 + 통신판매업신고증 필요(심사 1~3일). Redirect URI 노출도 비즈 앱 후. 처음부터 알려줬어야 했음.
- Resend DKIM 호스트 — `resend._domainkey` (점 포함). 사용자가 점 빠뜨려 입력 → 검증 실패. 명확히 강조했어야.
- **외부 서비스 안내 시 "막힐 가능성 + 사전 준비물" 미리 제시**.

### 5. 결제 PG 미연동 상태로 오픈 진행 위험
- 결제 폼은 카드 정보 받지만 **실제 결제 안 일어남**. 데이터도 어디에도 저장 안 됨.
- 정식 오픈 전 반드시 결제 방식 결정 (토스페이먼츠 / 무통장 / 스마트스토어 외부 링크 / 카카오페이).
- 주문 들어오면 운영자에게 알리는 채널 필수 (Resend로 운영자 메일 발송 또는 Supabase orders 테이블).

### 6. 사용자 격노할 때 변명 금지
- "캐시 문제입니다", "원인은…" 으로 시작하지 말고 **즉시 진단 행동 → 검증 결과로 답**.
- 검증은 Playwright 헤드리스 + curl로 실제 응답 본문 확인.

---

## 사용자 선호 / 톤

- **한국어 존댓말**.
- **짧고 단정적인 답** 선호. 옵션 3개 이상 늘어놓으면 결정 피로 → 격노.
- "정식 운영 / 본격 매출"이라는 표현이 나오면 **임시 해결책 금지**.
- 매번 손대게 만들지 말 것 — 한 번에 끝나는 길로 안내.

---

## 현재 시스템 구성

### 호스팅 / 소스 관리
- **Vercel**: `3-d-uni-box` 프로젝트
- 배포: `cd "C:\3D UniBox _p\3D UniBox" && vercel --prod --yes`
- 도메인: apex `3dunibox.co.kr` + www → apex 301 redirect
- **GitHub**: `https://github.com/leedoosung/3dunibox` (private)
  - git repo 루트는 `C:\3D UniBox _p\3D UniBox\` (CLAUDE.md는 부모 폴더라 repo 외부)
  - 백업 흐름: `git add . && git commit -m "…" && git push`
- **PC 이전 시 복구**: `git clone https://github.com/leedoosung/3dunibox.git` → `npm i -g vercel` → `vercel login` → `vercel --prod --yes` (`.vercel/project.json`은 .gitignore라 첫 배포 시 자동 재링크)

### Auth / DB
- **Supabase Project URL**: `https://cdpigjktddwyajyjhqtw.supabase.co`
- **Publishable key (코드에 박힘)**: `sb_publishable_p9cs6d7mr5iGXFmE8oeRWQ_N1YebGWy`
- **Email Confirmations**: **OFF** 유지 (한국 B2C 표준 — 본인 확인은 추후 SMS로)
- **DB 테이블 (schema.sql 실행 필요)**: `profiles`, `addresses` (RLS + 트리거)
  - `supabase/schema.sql` 파일 → Supabase SQL Editor 실행

### 이메일 (Resend)
- 도메인 인증 완료 (DKIM/SPF/DMARC 가비아 DNS에 등록)
- Supabase SMTP 설정 완료 — 비밀번호 재설정 등에 사용
- 가입 인증 메일은 OFF라 발송 안 함

### 결제 (토스페이먼츠 v2) — 🟡 스캐폴드만 (실결제 불가)
- **SDK**: `https://js.tosspayments.com/v2/standard` HTML head 로드
- **헬퍼**: `window.UB.payWithToss({amount, orderName, customerEmail, customerName})` — [01-core.jsx](b-prototype/01-core.jsx) 하단
- **연결 위치**: DetailPage 즉시 구매 버튼 + OrderPage 결제 버튼
- **현재 키**: `test_ck_docs_Ovk5rk1EwkEbP0W43n07xlzm` (토스 공식 테스트 키 — 결제창은 뜨지만 실 결제 불가)
- **라이브 전환 절차 (TODO)**:
  1. https://www.tosspayments.com 가맹점 가입 (사업자등록증 필요)
  2. 콘솔에서 라이브 클라이언트 키 발급 → `TOSS_CLIENT_KEY` 교체
  3. **백엔드 결제 승인 엔드포인트 구축** — `successUrl` (`/?toss=success`) 에 도달한 paymentKey/orderId/amount 를 받아서 `/v1/payments/confirm` 호출 (Supabase Edge Function 또는 Vercel Serverless)
  4. `orders` 테이블 신설 + 결제 정보·상태 저장 (orderId / paymentKey / 금액 / 상태)
  5. 운영자 알림 메일 (Resend) — 결제 성공시

### 캐시 정책 — 절대 변경하지 마라
- `service-worker.js`: 자살 모드 (옛 SW 제거 후 재등록 안 함)
- `vercel.json`: 모든 정적 자원 (HTML/CSS/JSX/manifest) `Cache-Control: no-cache, no-store, must-revalidate`
- HTML에 SW 등록 코드 없음 — 옛 SW 자동 정리만

### 관리자 진입
- URL: `https://3dunibox.co.kr/admin`
- ID: `admin`, PW: `lee91059105*` (sessionStorage 게이트)
- ⚠ 클라이언트 측 차단 — 진짜 보안은 Supabase RLS + role 도입 시점에 추가
- 데이터: 빈 상태에서 시작 (SEED_ORDERS = [], MEMBERS = [])

---

## 프로젝트 구조

```
3D UniBox/
├── index.html                       — 도메인 루트 진입 (메인 HTML로 redirect)
├── 3D UniBox B Prototype.html       — B안 메인 (운영 중)
├── 3D UniBox Prototype.html         — A안 (참조용)
├── styles.css                       — 디자인 토큰
├── manifest.webmanifest             — PWA manifest
├── service-worker.js                — 자살 모드 (옛 SW 정리용)
├── robots.txt + sitemap.xml         — SEO
├── vercel.json                      — Vercel 라우팅 + no-cache 헤더
├── b-prototype/
│   ├── 00-auth.jsx                  — Supabase Auth (LoginPage, useAuth)
│   ├── 01-core.jsx                  — MODELS, useIsMobile, TopNav, BottomTabs
│   ├── 02-pages-1.jsx               — HomePage, CatalogPage
│   ├── 03-pages-2.jsx               — DetailPage, GuidePage, FAQPage
│   ├── 04-pages-3.jsx               — OrderPage, CartDrawer, DoneModal, AboutPage, Footer
│   ├── 05-admin.jsx                 — AdminPage (게이트 + KPI + 주문/회원 탭)
│   └── 06-mypage.jsx                — MyPage (내 정보 / 주소록 / 주문 이력)
├── icons/                           — 단색 #FF7E36 오렌지 (당근 시그니처)
├── supabase/schema.sql              — DB 스키마 (사용자가 SQL Editor에 실행 필요)
└── nocache_server.py                — 로컬 개발용 (배포 X)
```

---

## 디자인 시스템

### 브랜드 컬러 (styles.css)
```
--navy-950: #000000   ← body 배경 (순수 블랙, 당근 스타일)
--navy-900: #000000   ← 사이드바/푸터 (검정 통일)
--navy-800: #000000   ← 카드 배경 (보더로만 구분)
--navy-700: #0F0F0F   ← hover 상태
--cyan-400: #00C8F0   ← 포인트 (CTA, 강조)
--orange-500: #FF7E36 ← 로고 마크 색 (당근 시그니처)
```
**검정 일관 유지** — 사용자가 명시적으로 "완전 블랙"으로 만들라고 했음.

### 카피 (변경 금지 — 사용자 직접 결정)
- **메인 헤드라인** (홈 hero h1):
  - "정밀하게 설계했습니다"
  - "**PETG 소재로 더 가볍게**" (cyan 강조)
- **서브** (h1 아래 p 태그): "3D 프린팅으로 현장의 불편함을 해결합니다."
- **title**: "3D UniBox — 정밀하게 설계한 PETG 브라켓"
- **meta description / OG**: "3D 프린팅으로 현장의 불편함을 해결합니다." (서브 카피와 일치)
- 2026-05-08 업데이트:
  - "없으면 만들고, 있으면 더 낫게" 폐기
  - "현장에서 / 욕이 나왔습니다 / 그래서 만들었습니다" 폐기 (사용자 직접 제거 지시)
- **WHY 4개 카드** (왜 3D인가):
  1. 설치업체가 만든 제품입니다 — 현장을 아니까 더 실용적으로 만듭니다.
  2. 쓰는 사람이 직접 만듭니다 — 설치 전문가가 설계하고 검증한 제품입니다.
  3. 불편하면 말씀해 주세요 — 현장 피드백으로 제품을 계속 개선합니다.
  4. 계속 새로운 제품이 나옵니다 — 현장 수요에 맞춰 라인업을 꾸준히 늘려갑니다.

### 동봉품 (변경 사항)
- ❌ VHB 양면테이프 (옛 안내 — 모두 제거됨)
- ❌ 와셔 / "4ea" 수량 표기 (2026-05-08 단순화)
- ❌ 케이블 채널 ⌀8mm (2026-05-08 스펙·FAQ·시공단계 전부 제거)
- ❌ 보증 1년 (2026-05-08 스펙에서 제거)
- ✅ **M3 볼트·너트** (모든 노출 카피 일관)
- ✅ 시공 단계는 3단계 — 01 위치 표시 / 02 브라켓 고정 / 03 단말기 결합 (이전 02 "케이블 정리" 삭제)

---

## 핵심 데이터 (01-core.jsx)

### MODELS (현재 판매중 2개만, soon 모두 제거됨)
| 모델 | 코드 | 가격 | status |
|---|---|---|---|
| FaceStation F2 | UB-FSF2 | 89,000원 | live |
| BioStation 3 | UB-BS3 | 69,000원 | live |

### 배송비 정책 (SHIP)
- 100,000원 이상 → 무료
- 미만 → 3,500원

### 주문 상태 (STATUS_FLOW, 카드 선결제 흐름)
`결제완료 → 제작중 → 배송중 → 완료` (취소 별도)

---

## 작업 원칙 (이전 세션 + 이번 세션 통합)

- 파일 수정 전 해당 파일 전체를 먼저 읽을 것 (Read 필수).
- 같은 텍스트/요소가 여러 곳에 있을 때는 **`Grep`으로 일괄 확인 후 한 번에 제거**.
- 코드 변경 후 **반드시 Playwright + curl로 실제 응답 검증**. 사용자에게 "되는지 확인해보세요" 떠넘기지 말 것.
- 외부 서비스 (Supabase, Resend, 카카오, 가비아) UI는 자주 바뀜 — 추측으로 메뉴 위치 짚지 말고 **직접 URL 또는 사용자 화면 캡처 보고 1:1 매칭**.
- 답변에서 **이중 작업 만드는 표현("나중에", "임시", "추후") 금지** — 처음부터 정식 답으로.
- 결제·인증 같은 큰 결정은 옵션 3개 이상 나열 금지 — 추천 1순위만 명확히.

---

## 미완성 / 다음 세션이 처리할 작업

### 정식 오픈 전 결정 사항 (사용자 결정 대기)
- [ ] **결제 방식**: 토스페이먼츠 / 무통장입금 안내 / 스마트스토어 외부 링크 중 택1
- [ ] **주문 알림**: Resend로 운영자 이메일 발송 vs Supabase orders 테이블
- [ ] **Supabase schema.sql 실행 여부 확인** (사용자가 SQL Editor에서 직접 실행해야 회원가입 시 profiles 트리거 작동)

### 코드 측 미완성
- [ ] **결제 → DB 저장**: OrderPage에서 결제 시 Supabase orders 테이블에 insert (현재 어디에도 저장 안 됨)
- [ ] **마이페이지 → DB 연동**: 현재 localStorage. 회원가입 사용자는 Supabase profiles + addresses에 저장
- [ ] **관리자 페이지 → DB fetch**: 현재 빈 배열. orders/members를 Supabase에서 read
- [ ] **제품 정보 DB**: products 테이블 + 관리자 화면에서 등록/수정 (현재 01-core.jsx 하드코딩)
- [ ] **제품 사진**: 현재 Bracket SVG 일러스트. 실제 사진으로 교체

### 추후 단계
- [ ] **카카오 OAuth**: 비즈 앱 전환 후 (사업자 서류 심사 1~3일)
- [ ] **SMS 본인 인증**: NHN Cloud / 솔라피, 가입 시 SMS OTP
- [ ] **알림톡**: 카카오 비즈 — 주문 진행 안내
- [ ] **송장 자동 발급**: 굿스플로 API (월 100건+ 시점)

---

## 사용자 정보

- **이메일**: leedoo80@gmail.com (또는 leedoo80@naver.com)
- **회사**: 에스디컨버전스 (대표 이두성)
- **전화**: 010-9109-8277 (실제 운영자 번호, 2026-05-08 확정)
- **메일**: leedoo80@gmail.com (사이트 내 표시 메일, 2026-05-08 확정 — 이전 info@sdconv.kr 폐기)
- **2026-05-08**: 제품 상세 페이지 "리뷰" 영역(별점 줄 + 탭 항목 + 탭 본문) 전체 삭제 — 실제 리뷰 데이터 없는 상태에서 가짜 카피("4.9 / 27건") 노출 방지
- **카카오 디벨로퍼 앱 ID**: 1446402 (3D UniBox)
- **카카오 REST API key**: `8a05f2038348f27284b785c4a372681f`
- **응답 언어**: 한국어 존댓말

---

## 참고 — 이번 세션에 한 일 요약

- 견적 흐름 → 주문/장바구니 명칭 일괄 변경 + QuotePage → OrderPage 교체
- PWA 설치 가능 → SW 자살 모드로 비활성화 (캐시 문제 방지)
- 검정 톤 + 오렌지 로고 (#FF7E36) 적용
- 모바일 반응형 + 하단 탭바
- 관리자 페이지 + 게이트
- Supabase Auth (이메일/비번, OFF 모드) + Resend SMTP 인프라 구축
- Vercel + 가비아 도메인 + 자동 SSL
- 더미 데이터 모두 비움 (SEED_ORDERS=[], MEMBERS=[], SAMPLE_ME 제거)
