"""캐시 비활성 정적 서버 — 모든 응답에 no-store 헤더.
새 포트(8766)로 띄워 SW/브라우저 캐시 영향을 완전히 분리.

실행:
  python nocache_server.py [PORT] [BIND]
  기본: 0.0.0.0:8766
"""
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        # SW 등록 자체를 막아 옛 SW가 못 다시 잡도록 안전장치
        self.send_header("Service-Worker-Allowed", "/")
        super().end_headers()

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8766
    bind = sys.argv[2] if len(sys.argv) > 2 else "0.0.0.0"
    print(f"NoCache static server → http://{bind}:{port}/")
    ThreadingHTTPServer((bind, port), NoCacheHandler).serve_forever()
