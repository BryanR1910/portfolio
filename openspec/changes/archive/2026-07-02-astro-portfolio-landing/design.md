# Design: Astro Portfolio Landing

## Technical Approach

Create a static Astro site from the currently SDD-only repository. The first implementation should scaffold only the files needed for a deployable landing page, then render a componentized Spanish portfolio matching the supplied dark Google Stitch/Tailwind direction. No runtime backend, CMS, API routes, analytics, or live contact form are introduced.

## Architecture Decisions

| Decision | Choice | Alternatives considered | Rationale |
|---|---|---|---|
| Site stack | Astro static site with explicit `output: 'static'` | Plain static HTML; SSR/hybrid Astro | Astro matches the requested stack, produces `dist/`, and remains simple for Hostinger/static hosting. SSR adds unused runtime complexity. |
| Styling | Tailwind utilities plus a small `src/styles/global.css` theme layer | Plain CSS only; component-scoped CSS only | The source mockup is Tailwind-based, so Tailwind reduces translation friction. Global CSS should only hold base tokens, typography, and accessibility defaults to avoid overbuilding. |
| Component structure | Section components composed by `src/pages/index.astro` through `BaseLayout.astro` | One large page file; deeply nested component tree | A shallow component split preserves reviewability and future edits without inflating boilerplate. |
| Content organization | Local typed data module for repeatable sections | CMS; inline all content in components | Static arrays keep projects, experience, and stack easy to update while avoiding out-of-scope CMS/API work. |
| Assets | Use `public/` for CV and static deploy assets; defer final imagery/logos unless supplied | Remote asset dependency; generated heavy imagery | Public assets survive static upload predictably. Missing CV/images should be represented by stable placeholders or disabled links with clear replacement paths. |

## Data Flow

```text
src/content/portfolio.ts ──→ section components ──→ src/pages/index.astro
                                 ▲                         │
BaseLayout.astro + global.css ───┴─────────────────────────┘
                                   npm run build → dist/
```

## File Changes

| File | Action | Description |
|---|---|---|
| `package.json` | Create | Astro scripts: `dev`, `build`, `preview`; dependencies for Astro and Tailwind integration. |
| `astro.config.mjs` | Create | Astro config with static output and Tailwind integration if required by installed Astro/Tailwind versions. |
| `tsconfig.json` | Create | Extend Astro TypeScript defaults. |
| `src/layouts/BaseLayout.astro` | Create | HTML shell, metadata, skip link, global style import. |
| `src/pages/index.astro` | Create | Main route composing all landing sections. |
| `src/components/*.astro` | Create | `Navigation`, `Hero`, `Experience`, `Projects`, `TechStack`, `Contact`, `Footer`, and small reusable card/chip components where they reduce duplication. |
| `src/content/portfolio.ts` | Create | Static typed data for profile, links, experience, projects, and technologies. |
| `src/styles/global.css` | Create | Tailwind imports/base plus dark theme tokens, focus styles, smooth layout primitives. |
| `public/` | Create/Populate | CV, favicon, social preview, and static placeholders when available. |
| `openspec/config.yaml` | Modify later | After implementation, verification can record `npm run build` as build command if the workflow updates testing capabilities. |

## Interfaces / Contracts

Static content should use simple exported arrays/objects: `profile`, `experienceItems`, `projects`, `techGroups`, and `contactLinks`. UI copy may remain neutral/professional Spanish. Contact actions are links only: email, GitHub/LinkedIn, and CV download when `public/cv.pdf` exists.

## Accessibility and Performance

- Use semantic landmarks: `header`, `main`, `section`, `footer`, real headings, and descriptive link text.
- Preserve keyboard navigation with visible focus states and a skip link.
- Keep the page static with minimal JavaScript; prefer CSS for responsive behavior and effects.
- Avoid layout shift by sizing images/placeholders; defer heavy imagery and logos.
- Include useful metadata: title, description, viewport, favicon/social image when available.

## Testing Strategy

| Layer | What to Test | Approach |
|---|---|---|
| Static build | Astro compiles and emits `dist/` | `npm run build` |
| Local preview | Built output is navigable | `npm run preview` after build |
| Manual QA | Responsive sections, links, accessibility basics | Browser check at mobile/desktop widths; keyboard tab pass |

## Build / Deploy

Run `npm install`, `npm run build`, then upload the contents of `dist/` to Hostinger/static hosting. Astro is static by default, but explicit static output documents the deployment intent.

## Review Size Guard

Budget risk is medium. Keep the first implementation shallow and avoid generated assets or excessive component splitting. If task planning forecasts more than 400 changed lines, ask before applying chained PRs and split into scaffold/config first, then landing sections/content.

## Migration / Rollout

No data migration required. Rollback removes the Astro scaffold and generated landing files, returning the repository to SDD-only metadata.

## Open Questions

- [ ] Final CV file/path and external profile URLs may need confirmation during implementation.
