-- 3D UniBox — 관리자 RPC 잠금 (개인정보 보호 강화)
-- Supabase 대시보드 → SQL Editor → New query → 아래 전체 붙여넣기 → Run
--
-- ⚠ 반드시 실행해야 함. 실행 전까지는 공개키(anon)로 관리자 함수를 호출해
--    회원/주문 개인정보를 조회할 수 있는 취약점이 남아 있습니다.
--
-- 효과:
--  - public.admin_* 함수를 anon / authenticated 역할이 호출하지 못하도록 EXECUTE 권한 회수
--  - service_role(서버 /api/admin/rpc 만 사용)에게만 EXECUTE 허용
--  → 공개키만으로는 개인정보를 절대 조회할 수 없게 됨

do $$
declare
  r record;
begin
  for r in
    select p.oid::regprocedure as sig
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and p.proname like 'admin\_%'
  loop
    execute format('revoke execute on function %s from anon', r.sig);
    execute format('revoke execute on function %s from authenticated', r.sig);
    execute format('revoke execute on function %s from public', r.sig);
    execute format('grant  execute on function %s to service_role', r.sig);
    raise notice 'locked: %', r.sig;
  end loop;
end $$;

-- ================================================================
-- 확인 1) anon / authenticated 에 남은 admin_* 실행권한이 없어야 함 (0행이 정상):
--   select p.proname, r.rolname
--   from pg_proc p
--   join pg_namespace n on n.oid = p.pronamespace
--   cross join lateral (values ('anon'),('authenticated')) as r(rolname)
--   where n.nspname='public' and p.proname like 'admin\_%'
--     and has_function_privilege(r.rolname, p.oid, 'execute');
--
-- 확인 2) service_role 은 실행권한이 있어야 함 (여러 행 정상):
--   select p.proname
--   from pg_proc p join pg_namespace n on n.oid = p.pronamespace
--   where n.nspname='public' and p.proname like 'admin\_%'
--     and has_function_privilege('service_role', p.oid, 'execute');
-- ================================================================
