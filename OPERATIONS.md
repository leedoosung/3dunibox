# 3D UniBox — 운영 매뉴얼

> 사업자: **에스디컨버전스** (대표 허희경 · 사업자등록번호 449-56-00430)
> 도메인: **https://3dunibox.co.kr**
> 작성일: 2026-05-03

이 문서 하나로 사이트가 어떻게 굴러가고, 매일 무엇을 해야 하고,
변경하려면 어디를 손대야 하는지 전부 파악할 수 있도록 작성했습니다.

---

## 1. 한눈에 보는 구성도

```
[고객]                                               [운영자(허희경)]
   │                                                      │
   │  https://3dunibox.co.kr                              │ /admin (게이트: admin / lee91059105*)
   ▼                                                      ▼
┌──────────────────────────────────────────────────────────────┐
│            Vercel  (정적 호스팅 · CDN · HTTPS)                │
│  ─ 가비아 DNS A 레코드로 3dunibox.co.kr → Vercel             │
│  ─ vercel.json 의 rewrites 로 /admin /me /catalog … 라우팅   │
└──────────────────────────────────────────────────────────────┘
   │ HTML/JS/CSS                                           │ RPC
   ▼                                                      ▼
┌──────────────────────────────────────┐    ┌──────────────────────────────────┐
│  React 18 UMD + Babel Standalone     │    │  Supabase (cdpigjktddwyajyjhqtw) │
│   · 단일 HTML(B Prototype.html)      │◀──▶│  ─ Auth (이메일/비번)            │
│   · b-prototype/00~07 jsx 스크립트   │    │  ─ Postgres + RLS                │
│   · Daum 우편번호 (지연 로딩)        │    │     · profiles (id,name,phone)   │
└──────────────────────────────────────┘    │     · addresses (배송지 N개)     │
                                            │  ─ RPC admin_list_members()      │
                                            │  ─ SMTP via Resend (도메인 인증) │
                                            └──────────────────────────────────┘
                                                       │
                                                       ▼
                                            ┌──────────────────────────────────┐
                                            │  Resend (smtp.resend.com)        │
                                            │  3dunibox.co.kr DKIM/SPF/DMARC   │
                                            │  → Supabase 인증/알림 메일 발송  │
                                            └──────────────────────────────────┘
```

---

## 2. 외부 서비스 계정·키 한 곳에

| 항목 | 값 / 위치 | 용도 |
|---|---|---|
| 도메인 | `3dunibox.co.kr` (가비아) | DNS A 레코드 → Vercel |
| 호스팅 | Vercel 프로젝트 (현재 계정에 연결) | 정적 호스팅 + CDN |
| Supabase URL | `https://cdpigjktddwyajyjhqtw.supabase.co` | DB + Auth |
| Supabase anon key | `sb_publishable_p9cs6d7mr5iGXFmE8oeRWQ_N1YebGWy` | 클라이언트용 (HTML에 박힘 — 공개 OK) |
| 관리자 ID/PW | `admin` / `lee91059105*` | `/admin` 게이트 + RPC 시크릿 |
| 메일 발송 | Resend SMTP (`smtp.resend.com:465`) | Supabase Auth 메일 |
| 메일 도메인 인증 | DKIM `resend._domainkey` / SPF `send` / DMARC `_dmarc` (가비아 DNS) | 스팸 방지 |

> ⚠️ Service role key, Resend API key 같이 **클라이언트에 노출되면 안 되는 것**은 아무 데도 박혀있지 않습니다. SMTP 패스워드는 Supabase 대시보드 안에만 저장.

---

## 3. 파일 구조

```
C:\3D UniBox _p\
├── CLAUDE.md                       ← Claude(나)에게 주는 지침 + 과거 실수 기록
├── 당근마켓 UI                     ← 디자인 레퍼런스 (안 건드림)
└── 3D UniBox\                      ← ★ 실제 배포되는 디렉터리
    ├── 3D UniBox B Prototype.html  ← ★ 메인 진입점 (라우팅·상태·App)
    ├── 3D UniBox Prototype.html    ← A안 (사용 안 함)
    ├── styles.css                  ← 전역 스타일·디자인 토큰
    ├── manifest.webmanifest        ← PWA 매니페스트 (현재 SW 비활성)
    ├── service-worker.js           ← 자기소멸 모드 (캐시 문제 방지)
    ├── vercel.json                 ← 라우팅 rewrites + 캐시 헤더
    ├── icons/                      ← favicon / PWA 아이콘
    ├── tweaks-panel.jsx            ← 개발용 우측 트윅 패널
    │
    ├── b-prototype/                ← ★ 실제 화면을 그리는 React 컴포넌트들
    │   ├── 00-auth.jsx             ← 로그인 / 회원가입 / 약관 동의
    │   ├── 01-core.jsx             ← 데이터(MODELS), 공용 컴포넌트(TopNav, BottomTabs, Btn, Logo, Bracket), 우편번호 헬퍼
    │   ├── 02-pages-1.jsx          ← Home, Catalog, Detail
    │   ├── 03-pages-2.jsx          ← Guide, FAQ, About
    │   ├── 04-pages-3.jsx          ← Order(결제폼), CartDrawer, DoneModal, Footer
    │   ├── 05-admin.jsx            ← 관리자 페이지 (주문/회원/통계)
    │   ├── 06-mypage.jsx           ← 마이페이지 (내정보 + 주소록)
    │   └── 07-policy.jsx           ← 이용약관 + 개인정보처리방침
    │
    └── supabase\
        ├── schema.sql              ← profiles + addresses 테이블 + RLS + 트리거
        └── admin_rpc.sql           ← admin_list_members RPC (관리자용)
```

---

## 4. 라우팅 — URL 별로 무엇이 보이는가

| 경로 | 페이지 | 비고 |
|---|---|---|
| `/` | Home | 메인 |
| `/catalog` | 전체 제품 보기 | |
| `/guide` | 시공사례 | |
| `/faq` | 자주 묻는 질문 | |
| `/about` | 회사 소개 + 사업자 정보 | |
| `/order` | 결제 폼 | 비로그인 시 LoginPage로 fallback |
| `/login` | 로그인 / 회원가입 | |
| `/me` | 마이페이지 | 비로그인 시 LoginPage로 fallback |
| `/admin` | 관리자 페이지 | 게이트 통과 후 진입 |
| `/terms` | 이용약관 | |
| `/privacy` | 개인정보처리방침 | |

라우팅은 **두 단계로 매칭**됨:
1. 먼저 hash (`#admin`)
2. 그 다음 path 첫 세그먼트 (`/admin`)

vercel.json 의 rewrites 가 path 들을 모두 `3D UniBox B Prototype.html` 로 보내고, App.jsx 가 그 path 를 보고 화면을 결정.

---

## 5. 데이터 모델 (Supabase Postgres)

### 테이블

```
auth.users                       ← Supabase 내장. id, email, encrypted_password 등
  │
  └─ public.profiles             ← 회원 추가 정보
      · id (PK, FK to auth.users)
      · name
      · phone
      · created_at
      └─ public.addresses        ← 회원당 N개 배송지
          · id (PK)
          · user_id (FK to profiles)
          · label  (예: "기본", "회사")
          · name, phone, zip, addr1, addr2
          · is_default (한 회원당 1개만 — 트리거로 보장)
```

### RLS (Row Level Security)

- `profiles` / `addresses` 모두 **본인 데이터만** SELECT/UPDATE/INSERT 가능
- 관리자는 RLS 를 우회하려고 별도 RPC 사용 (다음 절)

### 트리거

- `on_auth_user_created`: 회원가입(auth.users insert) 시 profiles 자동 생성
- `addresses_single_default`: is_default=true 인 주소가 들어오면 다른 주소들 false 로 변경
- `profiles_touch` / `addresses_touch`: 갱신 시 `updated_at` 자동 갱신

### 관리자 RPC

`public.admin_list_members(p_secret text)`
- SECURITY DEFINER 로 RLS 우회
- 시크릿(`lee91059105*`) 일치할 때만 전체 회원 + 주소 + 이메일 반환
- 관리자 페이지 회원 탭이 이걸 호출

---

## 6. 매일·매주 운영 흐름 (사장님이 할 일)

### 매일

1. **새 주문 확인**
   - https://3dunibox.co.kr/admin → 로그인
   - 주문 관리 탭 → 미처리 주문(결제완료/제작중) 처리
   - 🚨 *현재 결제 PG 미연동 상태* — 결제 폼 제출 시 DB 저장 안 됨. 다음 단계에서 연동 예정.

2. **회원 가입자 확인**
   - 관리자 → 회원 탭
   - 신규 가입자 이름·연락처·주소 확인
   - 이상 가입자 발견 시 Supabase Auth → Users 메뉴에서 직접 삭제

3. **메일 도착 확인**
   - leedoo80@gmail.com 으로 가입 알림이 자동 발송되도록 운영자 알림은 **현재 미구현**.
   - 일단은 관리자 페이지에서 직접 회원 탭 새로고침하는 방식.

### 주 1회

- Vercel 사용량 확인 (free plan 한도 100GB BW/월)
- Supabase 사용량 확인 (free plan: 500MB DB, 50,000 MAU)
- Resend 사용량 확인 (free plan: 3,000 메일/월)

### 월 1회 / 분기

- 도메인 만료일 확인 (가비아)
- 사업자등록증 세무 신고
- 통신판매업 신고증 갱신 (해당 시)

---

## 7. 변경 작업 — 어디를 손대면 무엇이 바뀌나

| 바꾸고 싶은 것 | 손댈 파일 | 비고 |
|---|---|---|
| 제품 추가/수정/가격 변경 | [b-prototype/01-core.jsx:7](b-prototype/01-core.jsx) `MODELS = [...]` | 하드코딩. 추후 products 테이블로 이전 예정 |
| 사업자 정보 (대표·사업자번호·주소·전화) | [b-prototype/04-pages-3.jsx](b-prototype/04-pages-3.jsx) Footer + [b-prototype/03-pages-2.jsx](b-prototype/03-pages-2.jsx) AboutPage | 두 곳 모두 동일 값 유지 |
| 통신판매업신고 번호 | Footer / AboutPage / [07-policy.jsx](b-prototype/07-policy.jsx) 약관·개인정보처리방침 | 4곳에 `[번호 발급 후 기재]` 자리 채워넣기 |
| 배송비 정책 | [01-core.jsx:14](b-prototype/01-core.jsx) `SHIP = {...}` | FREE_OVER, FEE 두 값 |
| 관리자 비밀번호 | [05-admin.jsx](b-prototype/05-admin.jsx) `ADMIN_PW` + [supabase/admin_rpc.sql](supabase/admin_rpc.sql) `p_secret` 비교문 + Supabase에서 RPC 재실행 | 두 곳 모두 같은 값으로 |
| 약관 / 개인정보처리방침 | [b-prototype/07-policy.jsx](b-prototype/07-policy.jsx) | 10조씩 |
| 색상 / 폰트 / 디자인 토큰 | [styles.css](styles.css) | `--cyan-400`, `--navy-950` 등 |
| 라우트 추가 | [3D UniBox B Prototype.html](3D%20UniBox%20B%20Prototype.html) `VALID = [...]` + 라우트 분기 + [vercel.json](vercel.json) rewrites | 3곳 모두 추가 |

---

## 8. 배포 — 코드 바꾼 뒤 사이트 반영하기

1. PowerShell 열기
2.
   ```
   cd "C:\3D UniBox _p\3D UniBox"
   vercel --prod
   ```
3. URL 출력되면 https://3dunibox.co.kr 에서 확인
4. 캐시 안 잡히면:
   - 브라우저 강력 새로고침 (Ctrl+Shift+R)
   - 또는 시크릿 창에서 열기

> Vercel은 자동으로 CDN 캐시 무효화. service-worker 가 자기소멸 모드라 PWA 캐시 문제 없음.

---

## 9. 회원·인증 흐름

### 회원가입

1. 이메일 + 비밀번호 + 이름 + 전화 + 우편번호 + 주소(2줄) + **약관·개인정보 필수 동의 2개**
2. Supabase Auth 에 가입 → `on_auth_user_created` 트리거가 profiles 행 자동 생성
3. 클라이언트가 `profiles.upsert({name, phone})` + `addresses.insert({...})`
4. **이메일 인증 OFF** 상태 → 즉시 로그인됨
5. `/order` 또는 `/me` 진입

### 로그인

- 이메일 + 비밀번호
- Supabase Auth 가 세션 토큰 발급, localStorage 에 저장 (autoRefresh)
- `useAuth()` 훅이 전역 user 상태 제공

### 로그아웃

- TopNav 우측 또는 마이페이지 → 로그아웃 → `signOut()` → `location.reload()`

### 비밀번호 분실

- 현재 미구현. Supabase Auth 의 `resetPasswordForEmail()` 추가 필요.

---

## 10. 관리자 — 회원 데이터 어떻게 보는가

```
[관리자 게이트: sessionStorage]
       │  admin / lee91059105*
       ▼
[AdminPageInner]
       │  useEffect → reloadMembers()
       ▼
[Supabase Client]
       │  rpc("admin_list_members", { p_secret: "lee91059105*" })
       ▼
[Postgres RPC: SECURITY DEFINER]
       │  if p_secret <> 'lee91059105*' then raise exception 'forbidden';
       │  select profiles + addresses + auth.users.email
       ▼
[클라이언트로 jsonb 배열 반환]
       │
       ▼
[MembersTab 표 렌더]
```

**보안 한계 (앞으로 고쳐야 함)**
- 시크릿이 클라이언트 코드에 노출됨. anon key + 시크릿이면 누구나 회원 PII 조회 가능.
- 정식 운영 안정 후엔 `admins` 테이블 + `auth.uid()` 기반 RLS 로 교체.

---

## 11. 자주 발생하는 문제 — 해결법

| 증상 | 원인 | 해결 |
|---|---|---|
| 관리자 회원 탭에 "Could not find the function" 에러 | Supabase 에 `admin_list_members` RPC 미생성 | [supabase/admin_rpc.sql](supabase/admin_rpc.sql) 을 SQL Editor 에서 Run |
| 회원가입 후 "이메일 인증 안왔어요" | Supabase Auth → Email confirm OFF 라 인증메일 안 보냄 (의도된 동작) | 사용자에게 "바로 로그인됩니다"라고 안내. 메일 안 보내는 게 정상 |
| 사이트가 옛날 화면 그대로 보임 (모바일) | 브라우저/PWA 캐시 | 강력 새로고침 / 시크릿 창. SW는 이미 자기소멸 모드라 문제 줄어듦 |
| `/admin` 진입 시 상단 메뉴까지 같이 보임 | `route.name === "admin"` 분기 누락 | [3D UniBox B Prototype.html](3D%20UniBox%20B%20Prototype.html) `isAdmin` 변수 확인 — 이미 적용됨 |
| 결제 폼에서 주소 검색 버튼 alert만 뜸 | 다음 우편번호 스크립트 로드 실패 | 인터넷 연결 확인. CDN(t1.daumcdn.net) 차단되어 있는지 |
| 관리자 페이지에 가입자 0명인데 가입은 됐다고 함 | (1) RPC 미생성 또는 (2) auth.users엔 있는데 profiles 자동 생성 트리거 미작동 | (1)은 SQL 재실행, (2)는 schema.sql 의 `on_auth_user_created` 트리거 확인 |

---

## 12. 보안·법적 준수 체크리스트

- [x] **HTTPS** (Vercel 자동)
- [x] **이용약관** (/terms)
- [x] **개인정보처리방침** (/privacy)
- [x] **회원가입 필수 동의 체크박스 2개**
- [x] **사업자 실명·등록번호 푸터 노출** (전자상거래법)
- [ ] **통신판매업 신고번호** ← 사장님이 정부24에서 신고 후 알려주시면 채워넣음
- [x] **개인정보 RLS** (본인 데이터만 접근)
- [x] **메일 도메인 인증** (DKIM/SPF/DMARC — 스팸 점수 낮춤)
- [ ] **결제 PG 연동** ← 다음 단계
- [ ] **주문 DB 저장** ← 다음 단계
- [ ] **운영자 주문 알림 메일** ← 다음 단계

---

## 13. 다음 작업 순서 (제안)

1. **결제 흐름 결정**: 토스페이먼츠 직접 연동 / 무통장입금 / 스마트스토어 외부링크 중 택1
2. **orders 테이블 추가** + 결제 폼 제출 시 INSERT
3. **운영자 알림 메일** (Resend API 또는 Supabase Edge Function)
4. **products 테이블 + 관리자에서 제품 등록/수정** (현재 하드코딩)
5. **실제 제품 사진 교체** (현재 SVG 일러스트)
6. **통신판매업 신고번호 4곳 채우기**

---

## 14. 비상 연락 / 백업

- **코드 백업**: 현재 git 미사용. 권장 — `git init` + GitHub private repo
- **DB 백업**: Supabase 대시보드 → Database → Backups (자동, 7일 보존)
- **도메인**: 가비아 (만료일 알람 설정)
- **운영자 메일**: leedoo80@gmail.com

---

> 이 문서는 사이트가 진화할 때마다 같이 업데이트해야 합니다.
> 새 기능 추가 / 비밀번호 변경 / 외부 서비스 교체 시 해당 절 갱신.
