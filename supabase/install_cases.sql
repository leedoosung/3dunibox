-- 3D UniBox — 설치 사례(install_cases) 테이블 + 관리자 CRUD RPC + 시드
-- Supabase 대시보드 → SQL Editor → New query → 아래 전체 붙여넣기 → Run
--
-- 적용 후 효과:
-- - public.install_cases 테이블 (id, wall_type, caption, image_url, sort_order)
-- - 설치가이드 페이지(anon) 는 모든 행 SELECT
-- - 관리자(시크릿 일치) 만 INSERT/UPDATE/DELETE → RPC 경유
-- - 6개 시드 (유리문 3 + 콘크리트 3)

-- ================================================================
-- 1. install_cases 테이블
-- ================================================================
create table if not exists public.install_cases (
  id          uuid primary key default gen_random_uuid(),
  wall_type   text not null,                          -- 'glass' / 'concrete'
  caption     text not null,                          -- '강화유리 10mm · FaceStation F2'
  image_url   text,                                   -- 사진 URL (없으면 회색 플레이스홀더)
  sort_order  integer not null default 100,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

create index if not exists install_cases_wall_idx on public.install_cases(wall_type);
create index if not exists install_cases_sort_idx on public.install_cases(sort_order);

alter table public.install_cases enable row level security;

drop policy if exists "install_cases_public_read" on public.install_cases;
create policy "install_cases_public_read" on public.install_cases
  for select to anon, authenticated using (true);

-- ================================================================
-- 2. updated_at 자동 갱신 트리거
-- ================================================================
drop trigger if exists install_cases_touch on public.install_cases;
create trigger install_cases_touch
  before update on public.install_cases
  for each row
  execute function public.touch_updated_at();

-- ================================================================
-- 3. 관리자 CRUD RPC (SECURITY DEFINER → RLS 우회, 시크릿 검증)
-- ================================================================
create or replace function public.admin_list_install_cases(p_secret text)
returns setof public.install_cases
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_secret is distinct from 'lee91059105*' then raise exception 'forbidden'; end if;
  return query select * from public.install_cases order by wall_type, sort_order, created_at;
end;
$$;

create or replace function public.admin_upsert_install_case(
  p_secret     text,
  p_id         uuid,
  p_wall_type  text,
  p_caption    text,
  p_image_url  text,
  p_sort_order integer
)
returns public.install_cases
language plpgsql
security definer
set search_path = public
as $$
declare v_row public.install_cases;
begin
  if p_secret is distinct from 'lee91059105*' then raise exception 'forbidden'; end if;
  if p_id is null then
    insert into public.install_cases (wall_type, caption, image_url, sort_order)
    values (p_wall_type, p_caption, p_image_url, coalesce(p_sort_order, 100))
    returning * into v_row;
  else
    update public.install_cases set
      wall_type  = p_wall_type,
      caption    = p_caption,
      image_url  = p_image_url,
      sort_order = coalesce(p_sort_order, 100)
    where id = p_id
    returning * into v_row;
  end if;
  return v_row;
end;
$$;

create or replace function public.admin_delete_install_case(p_secret text, p_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_secret is distinct from 'lee91059105*' then raise exception 'forbidden'; end if;
  delete from public.install_cases where id = p_id;
end;
$$;

revoke all on function public.admin_list_install_cases(text)                       from public;
revoke all on function public.admin_upsert_install_case(text, uuid, text, text, text, integer) from public;
revoke all on function public.admin_delete_install_case(text, uuid)                from public;

grant execute on function public.admin_list_install_cases(text)                       to anon, authenticated;
grant execute on function public.admin_upsert_install_case(text, uuid, text, text, text, integer) to anon, authenticated;
grant execute on function public.admin_delete_install_case(text, uuid)                to anon, authenticated;

-- ================================================================
-- 4. 시드 — 6개 (유리문 3 + 콘크리트 3). 이미 있으면 건너뜀.
-- ================================================================
insert into public.install_cases (wall_type, caption, sort_order)
select * from (values
  ('glass',    '강화유리 10mm · FaceStation F2', 10),
  ('glass',    '강화유리 12mm · BioStation 3',   20),
  ('glass',    '복층유리 · BioEntry W3',          30),
  ('concrete', '콘크리트벽 · FaceStation F2',     10),
  ('concrete', '조적벽 · BioStation 3',           20),
  ('concrete', 'ALC벽체 · BioEntry W3',           30)
) as t(wall_type, caption, sort_order)
where not exists (select 1 from public.install_cases);

-- ================================================================
-- 확인:
--   select * from public.install_cases order by wall_type, sort_order;
--   select * from public.admin_list_install_cases('lee91059105*');
-- ================================================================
