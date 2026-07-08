# Proposal: Astro Portfolio Landing

## Intent

Create Bryan Rodríguez's backend developer portfolio landing page as a deployable Astro static site. The page must translate the supplied Google Stitch HTML/Tailwind mockup into a responsive, dark, minimalist portfolio that can build to `dist/` for Hostinger or any static host.

## Scope

### In Scope
- Scaffold the Astro app stack (`package.json`, Astro config, TypeScript config, `src/`, `public/`).
- Build sections: nav/CV link, hero, experience, projects, technical stack, contact, and footer.
- Match the mockup's dark responsive visual direction using neutral/professional Spanish UI copy.
- Provide `npm run build` producing static `dist/` output suitable for upload.

### Out of Scope
- Backend services, API routes, CMS, authentication, analytics, or database work.
- Live contact forms; contact uses static links unless explicitly decided later.
- Brand-colored technology chips, logos, project imagery beyond supplied/placeholder assets.

## Capabilities

### New Capabilities
- `portfolio-landing`: Portfolio landing page structure, content sections, responsiveness, and visual fidelity.
- `static-deployment`: Static build behavior and deployment-ready `dist/` output.

### Modified Capabilities
- None.

## Approach

Use Astro with static output and componentized sections. Prefer Tailwind because the source mockup is Tailwind-based and fidelity matters; keep styling constrained to avoid overbuilding. If review size rises above budget, design/tasks should split scaffolding from page implementation.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `package.json` | New | Astro scripts/dependencies, including `build`. |
| `astro.config.mjs`, `tsconfig.json` | New | Static Astro project configuration. |
| `src/pages/index.astro` | New | Main landing route. |
| `src/layouts/`, `src/components/`, `src/styles/` | New | Page shell, sections/cards, global theme styles. |
| `public/` | New | CV/assets/favicons when available. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Tailwind adds setup overhead. | Med | Use it only for mockup fidelity; avoid custom plugin complexity. |
| 400-line review budget may be exceeded. | Med | Keep components lean; recommend chained slices before apply if forecast is high. |
| Missing final assets/CV. | Med | Use placeholders or static links, clearly replaceable later. |

## Rollback Plan

Remove the Astro scaffold and landing files; repository returns to SDD-only metadata. If applied in chained PRs, revert the latest slice first.

## Dependencies

- Node/npm environment for Astro install and `npm run build`.
- Supplied Stitch mockup/screenshot and any final CV or contact URLs.

## Success Criteria

- [ ] `npm run build` completes and emits `dist/`.
- [ ] Landing includes all scoped sections and is responsive.
- [ ] First iteration excludes backend, CMS, live forms, and branded tech chips/logos.
