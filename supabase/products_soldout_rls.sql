-- 3D UniBox — 재고없음(sold_out) 상품을 고객 카탈로그에 노출
-- Supabase 대시보드 → SQL Editor → New query → 아래 붙여넣기 → Run
--
-- 효과: 고객(anon)이 status='live' 뿐 아니라 'sold_out'(재고없음) 상품도 볼 수 있게 됨.
--       (재고없음 상품은 "재고없음" 빨강 배지로 표시되고 결제는 차단됨 — 프론트에서 처리)
-- 실행 안 하면: 재고없음으로 바꾼 상품이 고객 화면에서 사라짐(안 보임). 관리자에는 영향 없음.

drop policy if exists "products_public_read" on public.products;
create policy "products_public_read" on public.products
  for select using (status in ('live', 'sold_out'));

-- 확인:
--   select code, status from public.products order by sort_order;
