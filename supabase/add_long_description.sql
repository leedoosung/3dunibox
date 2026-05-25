-- 3D UniBox — products 테이블에 long_description (긴 제품 설명 본문) 추가
-- Supabase 대시보드 → SQL Editor → New query → 아래 전체 붙여넣기 → Run
--
-- 적용 후 효과:
-- - products.long_description (text) 컬럼 신설 — 제품 상세 페이지 "제품 설명" 탭에 표시
-- - admin_update_long_description RPC 신설 — 관리자에서 본문 텍스트 저장
-- - 기존 admin_upsert_product RPC 는 그대로 (시그니처 변경 없음 → 운영 안정성 유지)

-- ================================================================
-- 1. 컬럼 추가
-- ================================================================
alter table public.products add column if not exists long_description text;

-- ================================================================
-- 2. 관리자 전용 RPC — long_description 만 업데이트
-- ================================================================
create or replace function public.admin_update_long_description(
  p_secret           text,
  p_id               text,
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
     set long_description = p_long_description
   where id = p_id;
end;
$$;

revoke all on function public.admin_update_long_description(text, text, text) from public;
grant execute on function public.admin_update_long_description(text, text, text) to anon, authenticated;

-- ================================================================
-- 확인:
--   select id, name, long_description from public.products order by sort_order;
-- ================================================================
