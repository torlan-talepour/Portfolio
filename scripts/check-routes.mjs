// Run against `npm start` or `npm run dev`: node scripts/check-routes.mjs [origin]
import assert from "node:assert/strict";
const origin = process.argv[2] || "http://localhost:3000";
let assertions = 0;
function check(value, message) {
  assert.ok(value, message);
  assertions++;
}
const root = await fetch(origin, { redirect: "manual" });
check([307, 308].includes(root.status), "Root must redirect");
check(
  root.headers.get("location") === "/en",
  "Default language must be English",
);
for (const locale of ["en", "fa"]) {
  for (const suffix of ["", "/projects/learnify", "/projects/crm-platform"]) {
    const path = `/${locale}${suffix}`;
    const response = await fetch(origin + path);
    const html = await response.text();
    check(response.status === 200, `${path}: expected HTTP 200`);
    check(html.includes(`lang="${locale}"`), `${path}: incorrect lang`);
    check(
      html.includes(`dir="${locale === "fa" ? "rtl" : "ltr"}"`),
      `${path}: incorrect direction`,
    );
    check(/<h1[\s>]/.test(html), `${path}: missing main heading`);
    check(
      html.includes("mailto:torlan.1994@gmail.com"),
      `${path}: missing correct email`,
    );
    check(html.includes('rel="canonical"'), `${path}: missing canonical`);
    check(
      html.includes('hrefLang="en"') && html.includes('hrefLang="fa"'),
      `${path}: missing alternate languages`,
    );
    check(
      html.includes('property="og:title"'),
      `${path}: missing social metadata`,
    );
    const switchPath = `/${locale === "en" ? "fa" : "en"}${suffix}`;
    check(
      html.includes(`href="${switchPath}"`),
      `${path}: language switch loses route`,
    );
    const imgs = [...html.matchAll(/<img\b[^>]*src="([^\"]+)"/g)].map((m) =>
      m[1].replaceAll("&amp;", "&"),
    );
    for (const src of new Set(imgs)) {
      const img = await fetch(new URL(src, origin));
      check(img.status === 200, `${path}: image failed ${src}`);
      check(
        img.headers.get("content-type")?.startsWith("image/"),
        `${path}: image returned non-image data`,
      );
    }
    console.log(`PASS ${path}`);
  }
}
for (const path of [
  "/de",
  "/fa/projects/missing",
  "/en/projects/missing",
  "/unknown/deep/path",
]) {
  const res = await fetch(origin + path);
  check(res.status === 404, `${path}: must return 404`);
  console.log(`PASS 404 ${path}`);
}
for (const path of [
  "/sitemap.xml",
  "/robots.txt",
  "/opengraph-image",
  "/fonts/inter-latin.woff2",
  "/fonts/vazirmatn-arabic.woff2",
]) {
  const res = await fetch(origin + path);
  check(res.status === 200, `${path}: expected 200`);
}
const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
check(
  (sitemap.match(/<loc>/g) || []).length === 6,
  "Sitemap must list six localized URLs",
);
console.log(`${assertions} checks passed.`);
