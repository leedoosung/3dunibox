// 3D UniBox 빌드 스크립트 — JSX 원본(.jsx)을 브라우저용 JS(.js)로 사전 컴파일한다.
//
// 왜? 예전엔 브라우저가 접속할 때마다 Babel Standalone(약 3MB)을 내려받아 JSX를
// 실시간 컴파일했다(첫 화면 ~3초). 이제 배포 전에 미리 컴파일해 Babel을 제거했다.
//
// ※ 반드시 Babel(env+react) 프리셋을 써야 한다. 이 파일들은 각각 클래식 <script>로
//   로드되며 여러 파일이 같은 최상위 이름(MODELS 등)을 선언한다. env 프리셋이
//   const/let → var 로 낮춰줘야 재선언 충돌이 없다(원래 브라우저 런타임과 동일 동작).
//   esbuild(const 유지)로 바꾸면 "Identifier already declared" 로 앱이 죽는다.
//
// 준비:   npm i @babel/standalone@7.29.0
// 사용법: node build.mjs
// 순서:   .jsx 코드 수정  →  node build.mjs  →  vercel --prod --yes
//
// 제품/가격/재고/시공사례/주문은 DB(관리자 페이지)라서 빌드와 무관하다.
// 빌드가 필요한 경우는 사이트 "코드(.jsx)"를 고칠 때뿐이다.

import babel from "@babel/standalone";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));

const FILES = [
  "tweaks-panel.jsx",
  "b-prototype/01-core.jsx",
  "b-prototype/00-auth.jsx",
  "b-prototype/02-pages-1.jsx",
  "b-prototype/03-pages-2.jsx",
  "b-prototype/04-pages-3.jsx",
  "b-prototype/05-admin.jsx",
  "b-prototype/06-mypage.jsx",
  "b-prototype/07-policy.jsx",
  "b-prototype/08-app.jsx", // 앱 부트스트랩(원래 index.html 인라인, EDITMODE 마커 포함)
];

for (const f of FILES) {
  const src = readFileSync(resolve(ROOT, f), "utf8");
  const { code } = babel.transform(src, { presets: ["env", "react"], filename: f, compact: false });
  const out = resolve(ROOT, f.replace(/\.jsx$/, ".js"));
  writeFileSync(out, code, "utf8");
  console.log(`  ${f} -> ${f.replace(/\.jsx$/, ".js")} (${code.length} bytes)`);
}
console.log("빌드 완료. 이어서: vercel --prod --yes");
