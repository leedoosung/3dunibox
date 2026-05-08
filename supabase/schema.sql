-- 3D UniBox — Supabase 초기 스키마
-- Supabase 대시보드 → SQL Editor → New query → 아래 전체 붙여넣기 → Run
--
-- 적용 후 효과:
-- - profiles 테이블: 회원의 추가 정보(이름·전화) 저장 (auth.users와 1:1)
-- - addresses 테이블: 회원당 N개 배송지 저장
-- - 회원가입 시 profiles 행 자동 생성 트리거
-- - RLS 정책: 본인 데이터만 접근 가능

-- ================================================================
-- 1. profiles — auth.users 의 추가 정보
-- ================================================================
create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  name         text,
  phone        text,
  created_at   timestamptz default now(),
  updated_at   timestamptz default now()
);

alter table public.profiles enable row level security;

-- 본인 프로필만 SELECT/UPDATE/INSERT
drop policy if exists "profiles_self_select" on public.profiles;
create policy "profiles_self_select" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_self_update" on public.profiles;
create policy "profiles_self_update" on public.profiles
  for update using (auth.uid() = id);

drop policy if exists "profiles_self_insert" on public.profiles;
create policy "profiles_self_insert" on public.profiles
  for insert with check (auth.uid() = id);

-- 회원가입 시 profiles 자동 생성 트리거
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ================================================================
-- 2. addresses — 회원당 N개 배송지
-- ================================================================
create table if not exists public.addresses (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references public.profiles(id) on delete cascade,
  label        text not null default '기본',
  name         text,
  phone        text,
  zip          text,
  addr1        text,
  addr2        text,
  is_default   boolean not null default false,
  created_at   timestamptz default now(),
  updated_at   timestamptz default now()
);

create index if not exists addresses_user_idx on public.addresses(user_id);

alter table public.addresses enable row level security;

drop policy if exists "addresses_self_all" on public.addresses;
create policy "addresses_self_all" on public.addresses
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 한 회원당 기본 배송지는 1개만 유지 — 새 기본 지정 시 다른 것 해제
create or replace function public.ensure_single_default_address()
returns trigger
language plpgsql
as $$
begin
  if new.is_default then
    update public.addresses
       set is_default = false
     where user_id = new.user_id
       and id <> new.id
       and is_default = true;
  end if;
  return new;
end;
$$;

drop trigger if exists addresses_single_default on public.addresses;
create trigger addresses_single_default
  after insert or update of is_default on public.addresses
  for each row when (new.is_default = true)
  execute function public.ensure_single_default_address();

-- ================================================================
-- 3. updated_at 자동 갱신 트리거 (공용)
-- ================================================================
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch before update on public.profiles
  for each row execute function public.touch_updated_at();

drop trigger if exists addresses_touch on public.addresses;
create trigger addresses_touch before update on public.addresses
  for each row execute function public.touch_updated_at();

-- ================================================================
-- 끝 — 확인:
--   select * from public.profiles;
--   select * from public.addresses;
-- ================================================================
