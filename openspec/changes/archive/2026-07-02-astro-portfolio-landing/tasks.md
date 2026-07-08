# Tasks: Astro Portfolio Landing

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 550-800 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 scaffold/build shell → PR 2 landing sections/content → PR 3 verification/polish |
| Delivery strategy | ask-always |
| Chain strategy | stacked-to-main |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Astro static scaffold builds to `dist/` | PR 1 | Base foundation; include config and minimal route verification. |
| 2 | Portfolio landing content and sections | PR 2 | Depends on PR 1; include responsive/accessibility checks. |
| 3 | Final verification and deployment polish | PR 3 | Depends on PR 2; confirm build output and static exclusions. |

## Phase 1: Foundation

- [x] 1.1 Create `package.json` with Astro scripts (`dev`, `build`, `preview`) and required Astro/Tailwind dependencies.
- [x] 1.2 Create `astro.config.mjs` with explicit static output and Tailwind integration appropriate to installed versions.
- [x] 1.3 Create `tsconfig.json`, `src/pages/index.astro`, `src/layouts/BaseLayout.astro`, `src/styles/global.css`, and `public/` placeholders.
- [x] 1.4 Verify `npm install` and a minimal `npm run build` emits `dist/`.

## Phase 2: Content and Sections

- [x] 2.1 Create `src/content/portfolio.ts` exporting typed `profile`, `experienceItems`, `projects`, `techGroups`, and `contactLinks` static data.
- [x] 2.2 Create `src/components/Navigation.astro` with section anchors for Experiencia, Proyectos, Stack, and Contacto plus CV behavior.
- [x] 2.3 Create `src/components/Hero.astro`, `Experience.astro`, `Projects.astro`, `TechStack.astro`, `Contact.astro`, and `Footer.astro` using neutral/professional Spanish copy.
- [x] 2.4 Compose all sections in `src/pages/index.astro` through `BaseLayout.astro` with semantic `header`, `main`, `section`, and `footer` landmarks.

## Phase 3: Styling and Accessibility

- [x] 3.1 Implement `src/styles/global.css` dark theme tokens, Tailwind base imports, focus states, and overflow-safe responsive primitives.
- [x] 3.2 Apply responsive Tailwind layout classes so mobile stacks vertically and desktop preserves the mockup hierarchy.
- [x] 3.3 Ensure contact and CV actions are static links or clearly replaceable placeholders; add no forms, APIs, CMS, analytics, auth, or database behavior.

## Phase 4: Verification

- [x] 4.1 Run `npm run build` and confirm `dist/` exists for Hostinger/static upload.
- [x] 4.2 Run `npm run preview` after build and manually check home route, section navigation, contact links, and missing-asset behavior.
- [x] 4.3 Perform mobile/desktop and keyboard-tab QA for readability, visible focus, semantic sections, and no horizontal overflow.
- [x] 4.4 Update verification notes/config only if the workflow records `npm run build` as the available build command.
