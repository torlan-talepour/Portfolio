# Controlled portfolio refinement

## Audit

- Retained Next.js App Router, strict TypeScript, Tailwind, self-hosted Inter/Vazirmatn, locale root layouts, metadata helpers, and the existing project URLs.
- Previous homepage: oversized name, layered composition board, full-width Learnify showcase, CRM abstract folio, Design Lab, About, expertise, and a large contact footer.
- Previous palette was porcelain, ink, cobalt, lime, and Learnify yellow. The shared tokens now use navy, emerald, off-white, and muted gray.
- Learnify had exactly three local exports: landing (1440×3249), courses (1440×2965), checkout (1440×1416). All retained unchanged.
- CRM's `images` array was empty. No CRM screenshots existed under public/. The missing-image message was deliberate content fallback, not a rendering or Next Image configuration error.
- The original signed-in Figma Make tab now renders Dashboard, Leads, Pipeline, Activities, and Reports. Fresh tabs can still report code-layer/network problems; the portfolio does not depend on the live iframe.
- Genuine mobile viewport captures were saved from the actual original preview. These are partial viewport screenshots, not full-page or desktop exports. No invented UI was added. Prototype demo data is identified as such.
- No portrait is in the repository. The existing abstract board is retained as a lightweight hero visual, with an emerald shape behind it. No stock portrait or generated project screen is used.

## Content evidence

The designer confirmed UI/UX design roles for both projects and supplied their goals in this chat. Learnify connects course discovery, details, checkout, payment confirmation and learning access, alongside supporting pages. CRM is an AI-assisted concept prototype for leads, sales pipeline, and performance monitoring. No research or business-result claims were inferred from Figma Make's generated chat.

## Reference status

The hero and portfolio reference screenshots named in the brief were not attached. They were requested before visual finalization. The implementation currently follows the written composition and palette; exact reference matching is not claimed. The owner subsequently reviewed the local appearance favorably.

Gabriel Valdivia's Daylight page was read at https://www.gabrielvaldivia.com/work/daylight. Its title/introduction, compact metadata, long screenshot sequence, and short visual explanations informed the case-study hierarchy. Its assets, claims, branding, and project text were not copied.

## Structure

Home, About, Portfolio, Contact in both locales; existing Learnify/CRM routes preserved. Active navigation treats project details as Portfolio. The homepage and Portfolio page share one card grid. The existing screen explorer is reused with scroll regions, screen controls, touch switching, and an internal native-dialog image viewer. Full-screen sequences use the same viewer. About retains the verified background and toolkit. Contact uses the exact email and existing copy control. The footer is compact.

## Still useful to supply

- The two named visual-reference screenshots, if closer matching is requested later.
- Optional genuine portrait.
- CRM desktop imagery is now available: four genuine 1440×1051 captures replace the earlier mobile images.

No GitHub push or Vercel deployment is authorized for this revision.

Current CRM imagery has superseded the initial mobile capture approach: the actual Figma Make prototype was rendered and captured at desktop width. The image viewer no longer has an Actual size control.
