# Torlan Talepour — bilingual portfolio

A bilingual UI/UX designer portfolio with Home, About, Portfolio, and Contact pages, navy and emerald styling, genuine project galleries, and internal visual case studies. Built on Next.js App Router, React, strict TypeScript, Tailwind CSS 4, and ESLint. No backend, CMS, or paid service is required.

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

- `src/app/[locale]`: localized root layout, Home, About, Portfolio, Contact, and project routes
- `src/app/(entry)`: default English redirect
- `src/components`: shared UI, with focused client components for navigation, copying email, the composition board, screen exploration, image dialogs, and motion observation
- `src/data/portfolio.ts`: designer facts, project definitions, images, optional content blocks, and skills
- `src/data/messages.ts`: English and Persian interface copy
- `src/data/refinement.ts`: localized page and gallery interface text
- `src/data/studio.ts`: retained composition-board copy
- `src/components/studio-board.tsx`: lightweight abstract composition
- `src/components/screen-explorer.tsx`: shared interactive project-image viewer
- `src/lib/seo.ts`: localized canonical, language alternates, social metadata, and production origin
- `public/projects`: genuine Figma exports, served locally and optimized with `next/image`
- `public/fonts`: self-hosted fonts; no runtime requests to Google Fonts
- `docs`: content provenance and verification notes

## Edit content or add a project

1. Edit personal details in `src/data/portfolio.ts`; interface copy belongs in `src/data/messages.ts`.
2. Add an object to `projects` with a unique URL-safe `slug` and both `en` and `fa` values for every localized field.
3. Put genuine exports in `public/projects/`. Add their root-relative paths, true pixel dimensions, translated alt text, and captions to the project's `images` array. Set optional `cover` to an image path in that array; otherwise the first image opens by default. Use localized `label` values for concise screen-selection controls. Every image appears in the case-study sequence and opens an internal viewer with a scrollable fit-to-width view.
4. Add only verified `role` and `goal` fields, and confirmed `sections` (localized title/body). Empty sections are omitted. Use `images: []` when exports are unavailable: the site shows an explicit missing-preview treatment.
5. Keep the real source URL in `link` for provenance. The current case studies work independently of Figma; external source navigation and live embeds are not the primary viewing experience.
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
4. Optional but recommended: set `SITE_URL` to the full final HTTPS origin, currently `https://www.torlantalepour.xyz` (no trailing slash). It controls canonical URLs, Open Graph URLs, sitemap, and robots. If omitted on Vercel, its automatic `VERCEL_PROJECT_PRODUCTION_URL` is used. Locally the fallback is `http://localhost:3000`.
5. Click **Deploy**. If the final domain is assigned after the first deploy, update `SITE_URL` and redeploy.
6. Check all four primary pages and both projects in each language, `/sitemap.xml`, and `/robots.txt`. Open the social image at `/opengraph-image`.
7. Future pushes to `main` trigger production deployments; pull requests receive Vercel preview deployments. No custom backend or manual output upload is required.
8. When adding a custom domain, set `SITE_URL` to that domain and redeploy to update canonical links.

No secret environment variables are needed. A `.env.example` documents the optional public origin setting.

## Current content and remaining inputs

The designer confirmed the roles and goals for both projects. Learnify includes six selected Desktop–HiFi screens from the original Figma file: Landing, Courses, Course Details, Checkout, Confirmation, and Watch Course. CRM now includes four genuine desktop viewport captures from the actual Figma Make prototype: Dashboard, Leads, Sales Pipeline, and Reports. They were captured from the original prototype at a 1440px desktop viewport, excluding Figma editor chrome. Prototype values are sample data.

The two hero/grid reference screenshots were not supplied; the owner has reviewed the local result favorably. Exact matching to unseen references is not claimed. A portrait is optional: the hero uses an abstract composition, never an unrelated person's photograph. No research, metrics, clients, or outcomes have been invented.

See [docs/refinement-audit.md](docs/refinement-audit.md) for the current audit and source limits, and [docs/content-provenance.md](docs/content-provenance.md) for earlier evidence.

## Galleries and accessibility

Home and Portfolio use the same card grid. Learnify has a horizontally scrollable screen selector, previous/next controls, and a focusable image scroll area. All six selected screens are available in the shared preview and the case-study sequence. Gallery previews support horizontal touch gestures without intercepting vertical scrolling. A separate project link avoids card/gallery interaction conflicts. Both case studies provide a switchable preview and a vertical screen sequence. Images open a native modal dialog with focus containment, Escape/close controls, direction-aware previous/next keys, and scrollable image inspection. Screenshots retain their original orientation in Persian.

Both languages have route-preserving switching, localized metadata, canonical/hreflang alternates, and sitemap entries. Motion uses CSS and respects reduced-motion preferences. The previous Design Lab is no longer mounted on any page. No new runtime dependencies were added.

Run `npm run check:routes` against a running server, or `node scripts/check-routes.mjs https://YOUR-ORIGIN` for a deployed site. The latest QA notes are in [docs/refinement-verification.md](docs/refinement-verification.md); earlier build/dependency notes remain in [docs/verification.md](docs/verification.md).

This refinement stays local until explicitly authorized for GitHub/Vercel publication.
