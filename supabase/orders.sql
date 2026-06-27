-- 3D UniBox — orders 테이블 (토스페이먼츠 결제 정보)
-- Supabase 대시보드 → SQL Editor → New query → 아래 전체 붙여넣기 → Run
--
-- 적용 후 효과:
-- - public.orders 테이블 (결제 키 / 주문 정보 / 배송 정보 / 결제 상태)
-- - RLS: 로그인 사용자는 본인 주문만 SELECT, 운영자는 RPC 로 전체 조회
-- - api/toss/confirm 에서 service_role 키로 INSERT (RLS 우회)

-- ================================================================
-- 1. orders 테이블
-- ================================================================
create table if not exists public.orders (
  id              uuid primary key default gen_random_uuid(),
  -- 결제
  payment_key     text unique,                -- 토스 paymentKey (결제 식별자, 환불·조회 시 필요)
  order_id        text unique not null,       -- 우리가 생성한 주문번호 (ub_xxx)
  amount          integer not null,           -- 결제 금액 (원)
  status          text not null default 'paid', -- paid / failed / canceled / refunded
  method          text,                       -- 'CARD' / 'TRANSFER' / 'VIRTUAL_ACCOUNT' 등
  -- 고객 (로그인/비회원 모두 저장)
  user_id         uuid references auth.users(id) on delete set null,  -- 로그인 회원이면 채워짐
  customer_name   text,
  customer_phone  text,
  customer_email  text,
  -- 배송지
  addr_zip        text,
  addr1           text,
  addr2           text,
  memo            text,
  -- 주문 상품 (jsonb 배열: [{id, name, code, qty, price}])
  items           jsonb,
  -- 토스 원본 응답 (감사/디버그용)
  toss_raw        jsonb,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

create index if not exists orders_user_idx     on public.orders(user_id);
create index if not exists orders_status_idx   on public.orders(status);
create index if not exists orders_created_idx  on public.orders(created_at desc);

-- ================================================================
-- 2. RLS — 본인 주문만 SELECT
-- ================================================================
alter table public.orders enable row level security;

drop policy if exists "orders_self_select" on public.orders;
create policy "orders_self_select" on public.orders
  for select using (auth.uid() = user_id);

-- INSERT/UPDATE 는 client 에서 못 함 (service_role 만 가능 — RLS 자동 우회)

-- ================================================================
-- 3. updated_at 자동 갱신 트리거
-- ================================================================
drop trigger if exists orders_touch on public.orders;
create trigger orders_touch before update on public.orders
  for each row execute function public.touch_updated_at();

-- ================================================================
-- 4. 관리자 RPC — 전체 주문 조회 (시크릿 일치 시 RLS 우회)
-- ================================================================
create or replace function public.admin_list_orders(p_secret text, p_limit int default 100)
returns setof public.orders
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_secret is distinct from 'lee91059105*' then
    raise exception 'forbidden';
  end if;
  return query select * from public.orders order by created_at desc limit p_limit;
end;
$$;

revoke all on function public.admin_list_orders(text, int) from public;
grant execute on function public.admin_list_orders(text, int) to anon, authenticated;

-- ================================================================
-- 확인:
--   select count(*) from public.orders;
--   select * from public.admin_list_orders('lee91059105*', 10);
-- ================================================================
