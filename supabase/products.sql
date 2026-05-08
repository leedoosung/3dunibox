-- 3D UniBox — products 테이블 + 관리자 CRUD RPC + 시드
-- Supabase 대시보드 → SQL Editor → New query → 아래 전체 붙여넣기 → Run
--
-- 적용 후 효과:
-- - public.products 테이블 (id, code, name, cat, price, status, desc, w/h/d/weight, image_url, sort_order)
-- - 카탈로그(anon) 는 status='live' 인 행만 SELECT
-- - 관리자(시크릿 일치) 만 INSERT/UPDATE/DELETE 가능 → RPC 경유
-- - 기존 하드코딩 모델 2개 시드

-- ================================================================
-- 1. products 테이블
-- ================================================================
create table if not exists public.products (
  id          text primary key,                    -- 'fsf2', 'bs3' 등 짧은 슬러그 (URL 용)
  code        text not null,                       -- 'UB-FSF2'
  name        text not null,                       -- 'FaceStation F2'
  cat         text not null,                       -- 'face' / 'fp' / 'card' / 'multi'
  price       integer not null default 0,
  status      text not null default 'live',        -- 'live' / 'soon' / 'hidden'
  description text,                                -- 카드/상세에 노출되는 한 줄 설명
  w           integer,                             -- 가로(mm)
  h           integer,                             -- 세로(mm)
  d           integer,                             -- 두께(mm)
  weight      integer,                             -- 무게(g)
  image_url   text,                                -- 사진 URL (없으면 SVG 일러스트)
  sort_order  integer not null default 100,        -- 작을수록 먼저
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

create index if not exists products_status_idx on public.products(status);
create index if not exists products_cat_idx    on public.products(cat);
create index if not exists products_sort_idx   on public.products(sort_order);

alter table public.products enable row level security;

-- 카탈로그/홈 — anon 도 live 행만 조회 가능
drop policy if exists "products_public_read" on public.products;
create policy "products_public_read" on public.products
  for select to anon, authenticated
  using (status = 'live');

-- ================================================================
-- 2. updated_at 자동 갱신 트리거
-- ================================================================
drop trigger if exists products_touch on public.products;
create trigger products_touch
  before update on public.products
  for each row
  execute function public.touch_updated_at();   -- schema.sql 에서 이미 생성됨

-- ================================================================
-- 3. 관리자 CRUD RPC (SECURITY DEFINER → RLS 우회, 시크릿 검증)
-- ================================================================
-- 3-1. 전체 조회 (admin 만 — hidden/soon 포함 모든 행)
create or replace function public.admin_list_products(p_secret text)
returns setof public.products
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_secret is distinct from 'lee91059105*' then
    raise exception 'forbidden';
  end if;
  return query select * from public.products order by sort_order, created_at;
end;
$$;

-- 3-2. 추가 / 수정 (id 기준 upsert)
create or replace function public.admin_upsert_product(
  p_secret      text,
  p_id          text,
  p_code        text,
  p_name        text,
  p_cat         text,
  p_price       integer,
  p_status      text,
  p_description text,
  p_w           integer,
  p_h           integer,
  p_d           integer,
  p_weight      integer,
  p_image_url   text,
  p_sort_order  integer
)
returns public.products
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.products;
begin
  if p_secret is distinct from 'lee91059105*' then
    raise exception 'forbidden';
  end if;

  insert into public.products
    (id, code, name, cat, price, status, description, w, h, d, weight, image_url, sort_order)
  values
    (p_id, p_code, p_name, p_cat, coalesce(p_price, 0), coalesce(p_status, 'live'),
     p_description, p_w, p_h, p_d, p_weight, p_image_url, coalesce(p_sort_order, 100))
  on conflict (id) do update set
    code        = excluded.code,
    name        = excluded.name,
    cat         = excluded.cat,
    price       = excluded.price,
    status      = excluded.status,
    description = excluded.description,
    w           = excluded.w,
    h           = excluded.h,
    d           = excluded.d,
    weight      = excluded.weight,
    image_url   = excluded.image_url,
    sort_order  = excluded.sort_order
  returning * into v_row;

  return v_row;
end;
$$;

-- 3-3. 삭제
create or replace function public.admin_delete_product(p_secret text, p_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_secret is distinct from 'lee91059105*' then
    raise exception 'forbidden';
  end if;
  delete from public.products where id = p_id;
end;
$$;

revoke all on function public.admin_list_products(text)                                                                                            from public;
revoke all on function public.admin_upsert_product(text, text, text, text, text, integer, text, text, integer, integer, integer, integer, text, integer) from public;
revoke all on function public.admin_delete_product(text, text)                                                                                     from public;

grant execute on function public.admin_list_products(text)                                                                                            to anon, authenticated;
grant execute on function public.admin_upsert_product(text, text, text, text, text, integer, text, text, integer, integer, integer, integer, text, integer) to anon, authenticated;
grant execute on function public.admin_delete_product(text, text)                                                                                     to anon, authenticated;

-- ================================================================
-- 4. 시드 — 기존 하드코딩 2개 (이미 있으면 건너뜀)
-- ================================================================
insert into public.products (id, code, name, cat, price, status, description, w, h, d, weight, sort_order)
values
  ('fsf2', 'UB-FSF2', 'FaceStation F2', 'face', 89000, 'live', '안면인식 + 카드 + 지문', 88, 168, 38, 142, 10),
  ('bs3',  'UB-BS3',  'BioStation 3',   'fp',   69000, 'live', '지문 + RFID 카드',       76, 152, 36, 118, 20)
on conflict (id) do nothing;

-- ================================================================
-- 확인:
--   select * from public.products order by sort_order;
--   select * from public.admin_list_products('lee91059105*');
-- ================================================================
