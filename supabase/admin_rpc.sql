-- 3D UniBox — 관리자 RPC
-- Supabase 대시보드 → SQL Editor → New query → 아래 전체 붙여넣기 → Run
--
-- 적용 후 효과:
-- - 관리자 페이지가 회원 목록(profiles + addresses + email)을 한 번에 받아갈 수 있음
-- - SECURITY DEFINER 로 RLS 우회. 시크릿 불일치 시 forbidden.

create or replace function public.admin_list_members(p_secret text)
returns table (
  id            uuid,
  email         text,
  name          text,
  phone         text,
  joined_at     timestamptz,
  total_orders  integer,
  total_spent   bigint,
  last_order_at timestamptz,
  addresses     jsonb
)
language plpgsql
security definer
set search_path = public
as $$
begin
  -- 관리자 시크릿. 05-admin.jsx 의 ADMIN_PW 와 동일해야 함.
  if p_secret is distinct from 'lee91059105*' then
    raise exception 'forbidden';
  end if;

  return query
    select
      p.id,
      u.email::text                                                 as email,
      coalesce(p.name, '')                                          as name,
      coalesce(p.phone, '')                                         as phone,
      p.created_at                                                  as joined_at,
      0::integer                                                    as total_orders,    -- orders 테이블 연동 시 채움
      0::bigint                                                     as total_spent,
      null::timestamptz                                             as last_order_at,
      coalesce((
        select jsonb_agg(
                 jsonb_build_object(
                   'id',        a.id,
                   'label',     a.label,
                   'name',      a.name,
                   'phone',     a.phone,
                   'zip',       a.zip,
                   'addr1',     a.addr1,
                   'addr2',     a.addr2,
                   'isDefault', a.is_default
                 )
                 order by a.is_default desc, a.created_at
               )
        from public.addresses a where a.user_id = p.id
      ), '[]'::jsonb)                                               as addresses
    from public.profiles p
    join auth.users u on u.id = p.id
    order by p.created_at desc;
end;
$$;

revoke all on function public.admin_list_members(text) from public;
grant execute on function public.admin_list_members(text) to anon, authenticated;

-- ================================================================
-- 확인:
--   select * from public.admin_list_members('lee91059105*');
-- ================================================================
