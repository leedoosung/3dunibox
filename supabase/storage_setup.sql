-- 3D UniBox — Storage 버킷 + 정책
-- Supabase 대시보드 → SQL Editor → New query → 아래 전체 붙여넣기 → Run
--
-- 적용 후 효과:
-- - public 'product-images' 버킷 생성 (이미 있으면 갱신)
-- - 5MB 제한, JPEG/PNG/WebP/SVG/GIF 만 허용
-- - 누구나 읽기 가능 (Public CDN URL)
-- - 관리자 페이지에서 업로드/수정/삭제 가능 (anon key 로 호출)

-- ================================================================
-- 1. 버킷 생성 / 갱신
-- ================================================================
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'product-images',
  'product-images',
  true,
  20971520,                                                       -- 20MB (휴대폰/DSLR 원본 사진 OK)
  array['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif']
)
on conflict (id) do update set
  public             = true,
  file_size_limit    = 20971520,
  allowed_mime_types = excluded.allowed_mime_types;

-- ================================================================
-- 2. 정책 — Public 버킷이라 SELECT 는 자동 허용. INSERT/UPDATE/DELETE 는 명시 필요.
--    프로토타입 단계이므로 anon 에게도 허용 (관리자 게이트는 클라이언트 honor system).
--    정식 운영 시점엔 'admins' 테이블 + auth.uid() 기반으로 좁힐 것.
-- ================================================================
drop policy if exists "product_images_read"   on storage.objects;
drop policy if exists "product_images_insert" on storage.objects;
drop policy if exists "product_images_update" on storage.objects;
drop policy if exists "product_images_delete" on storage.objects;

create policy "product_images_read"   on storage.objects for select to anon, authenticated using      (bucket_id = 'product-images');
create policy "product_images_insert" on storage.objects for insert to anon, authenticated with check (bucket_id = 'product-images');
create policy "product_images_update" on storage.objects for update to anon, authenticated using      (bucket_id = 'product-images');
create policy "product_images_delete" on storage.objects for delete to anon, authenticated using      (bucket_id = 'product-images');

-- ================================================================
-- 확인:
--   select id, public, file_size_limit, allowed_mime_types from storage.buckets where id = 'product-images';
-- ================================================================
