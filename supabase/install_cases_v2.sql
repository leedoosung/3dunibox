-- 3D UniBox — install_cases v2 마이그레이션
-- 변경사항:
--   1) description 컬럼 추가 (운영자가 사례마다 짧은 설명 작성)
--   2) wall_type 옵션화 (NOT NULL → nullable + default)
--   3) admin_upsert_install_case RPC 시그니처에 p_description 추가
--   4) 공개 페이지에서 환경 분리 없이 전체 노출하므로 wall_type 은 사실상 미사용

-- ================================================================
-- 1. 컬럼 추가
-- ================================================================
alter table public.install_cases add column if not exists description text;

alter table public.install_cases alter column wall_type set default 'glass';
alter table public.install_cases alter column wall_type drop not null;

-- ================================================================
-- 2. upsert RPC 재정의 (기존 6-param 시그니처 제거 후 7-param 으로 교체)
-- ================================================================
drop function if exists public.admin_upsert_install_case(text, uuid, text, text, text, integer);

create or replace function public.admin_upsert_install_case(
  p_secret      text,
  p_id          uuid,
  p_wall_type   text,
  p_caption     text,
  p_description text,
  p_image_url   text,
  p_sort_order  integer
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
    insert into public.install_cases (wall_type, caption, description, image_url, sort_order)
    values (coalesce(p_wall_type, 'glass'), p_caption, p_description, p_image_url, coalesce(p_sort_order, 100))
    returning * into v_row;
  else
    update public.install_cases set
      wall_type   = coalesce(p_wall_type, wall_type),
      caption     = p_caption,
      description = p_description,
      image_url   = p_image_url,
      sort_order  = coalesce(p_sort_order, 100)
    where id = p_id
    returning * into v_row;
  end if;
  return v_row;
end;
$$;

revoke all on function public.admin_upsert_install_case(text, uuid, text, text, text, text, integer) from public;
grant execute on function public.admin_upsert_install_case(text, uuid, text, text, text, text, integer) to anon, authenticated;

-- ================================================================
-- 확인:
--   select id, caption, description, sort_order from public.install_cases order by sort_order;
-- ================================================================
