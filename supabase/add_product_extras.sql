-- 3D UniBox — products 테이블에 material + compat_tags 컬럼 추가
-- Supabase 대시보드 → SQL Editor → New query → 아래 전체 붙여넣기 → Run
--
-- 적용 후 효과:
-- - products.material (text) — 재질 (예: "PETG · 무광 블랙")
-- - products.compat_tags (text) — 설치 환경 호환 태그, 콤마 구분 (예: "유리,콘크리트,석고")
-- - admin_update_product_extras RPC — 재질·호환태그·긴설명 한 번에 저장
--   (기존 admin_update_long_description 은 그대로 두어도 무해 — 호출 안 함)

-- ================================================================
-- 1. 컬럼 추가
-- ================================================================
alter table public.products add column if not exists material    text;
alter table public.products add column if not exists compat_tags text;

-- ================================================================
-- 2. 관리자 전용 RPC — material + compat_tags + long_description 통합 저장
-- ================================================================
create or replace function public.admin_update_product_extras(
  p_secret           text,
  p_id               text,
  p_material         text,
  p_compat_tags      text,
  p_long_description text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_secret is distinct from 'lee91059105*' then
    raise exception 'forbidden';
  end if;
  update public.products
     set material         = p_material,
         compat_tags      = p_compat_tags,
         long_description = p_long_description
   where id = p_id;
end;
$$;

revoke all on function public.admin_update_product_extras(text, text, text, text, text) from public;
grant execute on function public.admin_update_product_extras(text, text, text, text, text) to anon, authenticated;

-- ================================================================
-- 확인:
--   select id, name, material, compat_tags, long_description from public.products;
-- ================================================================
