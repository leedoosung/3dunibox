/* 3D UniBox — 자살 모드 SW
 * 옛 SW가 사용자 브라우저에 박혀있어 캐시가 풀리지 않는 문제 해결.
 * 활성화되면 모든 cache 삭제 + 자기 자신 unregister.
 * 이후 우리 사이트는 SW 없이 정상 운영 — 모든 자원은 항상 네트워크에서 최신.
 */
self.addEventListener("install", (e) => { e.waitUntil(self.skipWaiting()); });

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
    } catch (e) {}
    try {
      await self.registration.unregister();
    } catch (e) {}
    try {
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach(c => c.navigate(c.url).catch(() => {}));
    } catch (e) {}
  })());
});

// fetch는 가로채지 않음 — 항상 네트워크
self.addEventListener("fetch", () => {});
