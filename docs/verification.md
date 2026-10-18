# Verification and engineering notes

## Re-run locally

```sh
npm ci
npm run lint
npm run typecheck
npm run build
npm start
# In a second terminal:
npm run check:routes
```

The route smoke check covers all six localized pages, English default redirect, HTML language/direction, main heading, exact contact email, canonical/alternate/social metadata, route-preserving language links, all rendered project images, invalid locales/slugs, sitemap, robots, fonts, and social-image response.

Browser checks should cover English/Persian desktop and narrow mobile views, horizontal overflow, mobile menu open/close/Escape, language switching from project pages, same-page section navigation, and the email copy status. Respect system reduced-motion preferences; CSS disables smooth scrolling and transitions when requested.

## Build choice

This project explicitly uses Next.js's supported Webpack bundler for development and production. On the implementation computer, Turbopack's CSS workers could not bind their internal local port, including after an escalated build attempt. This is an environment limitation rather than an application compile failure. Webpack keeps the build independent of that worker-port requirement and is supported on Vercel.

The `globalNotFound` option enables the built-in global 404 for the two root layouts (default-language entry and localized document). The global 404 provides links to both supported languages. Invalid locales are not silently rendered as English content.

## Dependency audit

The current Next.js ESLint plugin pulls `fast-glob` → `micromatch` → `braces` 3.0.3. npm reports a high-severity brace-pattern stack-exhaustion advisory affecting this development-only dependency chain. The registry's latest braces version is still 3.0.3; there is no patched compatible release available at implementation time. The plugin uses locally configured root directory patterns, not website visitor input. These packages are not deployed runtime dependencies. Do not apply `npm audit fix --force`: its suggested fix downgrades the Next.js lint configuration across major versions. Review upstream updates when available.

No claim of a formal WCAG audit, real-device testing, or user research is made. Keyboard-friendly controls, semantic landmarks, visible focus, deliberate contrast, reduced motion, and explicit LTR/RTL composition are implemented.

## Recorded results — 19 October 2026

- `npm run build`: passed on Next.js 16.4.2; all six localized portfolio routes prerendered.
- `npm run lint`: passed with no errors or warnings.
- `npm run typecheck`: passed; the production build also completes its TypeScript check.
- `npm run check:routes`: 82 assertions passed on development and production servers.
- Runtime-only npm audit: zero reported vulnerabilities. The development-only advisory is described above.
- Browser: English and Persian desktop; English at 320px and Persian at 375px; Persian Learnify at 320px. No horizontal overflow in checked views. Verified menu open/close/Escape, project navigation, language switching retaining the project slug, and successful Persian email-copy status.
- Narrow-phone decorative art overlap was corrected and the final Persian mobile production render was rechecked.
- Genuine Learnify cover loads in the browser; all gallery images return valid image responses in the route checks.
- Saved production screenshots: `portfolio-preview.png` and `portfolio-preview-fa-mobile.png`.

The build emits Next.js's metadataBase fallback warning while generating its shared metadata. The six public pages explicitly set metadataBase, canonical URLs, language alternates, and social metadata; the origin is controlled by SITE_URL / Vercel's production URL. Set the final origin before launching. A browser extension added `cz-shortcut-listen` to the body during development and caused an extension-originated hydration attribute warning; the application does not add that attribute or suppress hydration diagnostics.

The source Figma Make project currently reports a broken code layer and an empty preview. The external link is preserved exactly, but working upstream prototype behavior cannot be guaranteed from the supplied resource.
