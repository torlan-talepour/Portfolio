# Torlan Talepour — bilingual portfolio

An interactive design-studio portfolio built on Next.js App Router, with English and Persian routes, a spatial composition board, a live component playground, genuine Learnify screen exploration, and editorial project pages. Built with React, strict TypeScript, Tailwind CSS 4, and ESLint. No backend, account, CMS, or paid service is required.

## Develop

Install Node.js 22 LTS or newer, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. `/` redirects to `/en`. Persian is at `/fa`. The temporary Node runtime used during implementation lives outside this project and is not required on Vercel.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Use `npm ci` for reproducible dependency installs; commit `package-lock.json`. The build includes localized pages and generates static project routes. Unsupported locales and unknown project slugs return 404.

## Structure

- `src/app/[locale]`: localized root layout, homepage, and project routes
- `src/app/(entry)`: default English redirect
- `src/components`: shared UI, with focused client components for navigation, copying email, the composition board, screen exploration, the lab, and motion observation
- `src/data/portfolio.ts`: designer facts, project definitions, images, optional content blocks, and skills
- `src/data/messages.ts`: English and Persian interface copy
- `src/data/studio.ts`: localized redesign and playground text
- `src/components/design-lab.tsx`: native-control component playground
- `src/components/studio-board.tsx`: lightweight CSS perspective composition
- `src/components/screen-explorer.tsx`: shared interactive project-image viewer
- `src/lib/seo.ts`: localized canonical, language alternates, social metadata, and production origin
- `public/projects`: genuine Figma exports, served locally and optimized with `next/image`
- `public/fonts`: self-hosted fonts; no runtime requests to Google Fonts
- `docs`: content provenance and verification notes

## Edit content or add a project

1. Edit personal details in `src/data/portfolio.ts`; interface copy belongs in `src/data/messages.ts`.
2. Add an object to `projects` with a unique URL-safe `slug` and both `en` and `fa` values for every localized field.
3. Put genuine exports in `public/projects/`. Add their root-relative paths, true pixel dimensions, translated alt text, and captions to the project's `images` array. The first image is the cover. All images appear in a responsive case-study gallery and link to their full-size originals.
4. Add only confirmed `sections` (localized title/body). Empty sections are omitted. Use `images: []` when exports are unavailable: the site shows an explicit missing-preview treatment.
5. An optional `embedUrl` supports a trusted public prototype iframe. Only use an actual embed URL. External Figma links always remain available, since embedding can require sign-in or be blocked by the provider.
6. The detail pages, other-project navigation, sitemap, and alternate language URLs derive from the project data automatically. Rebuild after editing.

Project screens remain in their original language to preserve the actual work; surrounding portfolio content is fully localized. Abstract portfolio artwork is decorative and is never labeled as a project screenshot.

## GitHub setup

This project is connected to `git@github.com:torlan-talepour/Portfolio.git`. To connect a fresh copy to a different repository, create an empty GitHub repository and use the following commands:

```sh
git init
git add .
git commit -m "Build bilingual designer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote with your real repository URL. Never commit `.env.local`, credentials, `.next`, or `node_modules`; `.gitignore` covers them.

## Deploy on Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository and authorize access to that repository.
3. Keep the detected **Next.js** framework preset, root directory `.`, build command `npm run build`, and default output directory. Choose Node.js 22 or newer.
4. Optional but recommended: set `SITE_URL` to the full final HTTPS origin, such as `https://your-portfolio.vercel.app` (no trailing slash). It controls canonical URLs, Open Graph URLs, sitemap, and robots. If omitted on Vercel, its automatic `VERCEL_PROJECT_PRODUCTION_URL` is used. Locally the fallback is `http://localhost:3000`.
5. Click **Deploy**. If the final domain is assigned after the first deploy, update `SITE_URL` and redeploy.
6. Check `/en`, `/fa`, both projects in each language, `/sitemap.xml`, and `/robots.txt`. Open the social image at `/opengraph-image`.
7. Future pushes to `main` trigger production deployments; pull requests receive Vercel preview deployments. No custom backend or manual output upload is required.
8. When adding a custom domain, set `SITE_URL` to that domain and redeploy to update canonical links.

No secret environment variables are needed. A `.env.example` documents the optional public origin setting.

## Content still needed

- Genuine CRM Platform screenshot exports. The original link is wired, but a visual render was not accessible during implementation; the site explicitly labels the missing media.
- Your role/responsibilities, context, design reasoning, and lessons for either project, if you want fuller narrative case studies. No research, performance metrics, clients, dates, or outcomes have been invented.
- Optional only: a personal photograph, resume PDF, and verified social URLs. These have not been substituted with fake assets or links.

See `docs/content-provenance.md` for details.

Verification results, build notes, and the development-only dependency advisory are recorded in [docs/verification.md](docs/verification.md). To run the route smoke check against a running server, use `npm run check:routes`.

## Redesign interactions

The composition board responds to mouse movement and has a keyboard-operable rearrange control. The Design Lab changes component appearance, density, button variant, width, selection, and saved state. These are explicitly labeled portfolio demonstrations, not client projects. Learnify's screen explorer switches among the original exports; the full-resolution gallery remains available. All interactive copy is localized, and motion respects reduced-motion settings. No additional dependencies or WebGL runtime were introduced.

The creative audit and reference-access limits are documented in [docs/redesign-direction.md](docs/redesign-direction.md).
