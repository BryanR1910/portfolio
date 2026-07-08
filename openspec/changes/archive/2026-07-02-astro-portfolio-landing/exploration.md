## Exploration: astro-portfolio-landing

### Current State
The repository currently contains only SDD/ATL metadata: `openspec/config.yaml`, an empty `openspec/specs/` area, `.atl/skill-registry.md`, and `.gitignore`. No application stack is installed yet: there is no `package.json`, Astro config, `src/`, `public/`, styles, tests, formatter, linter, or build command. The requested change is a new static Astro landing page based on a supplied Google Stitch HTML/Tailwind mockup and screenshot, with Spanish-facing portfolio copy.

### Affected Areas
- `package.json` — would introduce the Astro project scripts and dependencies.
- `astro.config.mjs` — would define Astro static site configuration; explicit `output: 'static'` is appropriate for static hosting clarity.
- `tsconfig.json` — would add Astro/TypeScript project configuration.
- `src/pages/index.astro` — would become the main landing page route.
- `src/layouts/` — would hold shared HTML shell, metadata, and global page structure if the implementation is split for maintainability.
- `src/components/` — would hold reusable sections/cards such as navigation, hero, experience, projects, stack, and contact.
- `src/styles/global.css` — would define global theme styles; if Tailwind is added, this would also host Tailwind imports/configured utilities.
- `public/` — would contain static assets such as CV file, project imagery, favicon, and social preview image when available.
- `openspec/config.yaml` — should later be updated during proposal/design if test/build commands become available after adding the Astro stack.

### Approaches
1. **Astro with plain CSS** — Build the landing page with `.astro` components and custom CSS matching the dark minimalist mockup.
   - Pros: lowest dependency surface, simple static output, easy Hostinger `dist/` upload, fewer setup decisions.
   - Cons: more manual styling work, Google Stitch Tailwind classes must be translated, brand-logo tech chips later require extra asset/style work.
   - Effort: Medium

2. **Astro with Tailwind** — Create an Astro project and configure Tailwind to adapt the Google Stitch Tailwind mockup more directly.
   - Pros: fastest fidelity to the supplied mockup, easier responsive utility styling, easier future brand-colored chips.
   - Cons: adds Tailwind setup/dependency decisions, slightly more project scaffolding for a small static page.
   - Effort: Medium

3. **Single-page static HTML without Astro** — Keep the mockup as a simple static HTML/CSS page.
   - Pros: smallest possible runtime/tooling footprint.
   - Cons: conflicts with the stated Astro goal, weaker component structure, less useful for future portfolio iteration.
   - Effort: Low

### Recommendation
Proceed with Astro as a static site and use Tailwind only if the proposal accepts the added tooling. Because the source mockup is Tailwind-based and the user wants an Astro landing page, the best first scope is an Astro static landing with componentized sections and neutral/professional Spanish UI copy. Keep the first implementation focused on page fidelity, responsive behavior, and deployable `dist/` output; defer brand-colored technology chips with logos as a later enhancement, as requested.

### Risks
- No stack exists yet, so the proposal must explicitly include scaffolding Astro, package scripts, build output, and verification commands.
- Review budget risk is medium: initial scaffolding plus a polished landing page may approach or exceed 400 changed lines if over-componentized or if generated CSS is large.
- Tailwind choice affects project setup, styling conventions, and changed-line volume; it should be decided in proposal/design before implementation.
- User-provided image/assets are not currently in the repository; implementation may need placeholder abstract imagery unless assets are supplied.
- Hosting readiness depends on keeping the site fully static and documenting that only `dist/` contents should be uploaded to Hostinger/static hosting.

### Ready for Proposal
Yes — the next phase should create a proposal for `astro-portfolio-landing` covering Astro static scaffolding, landing-page sections from the mockup, Spanish content, responsive/deployment expectations, verification via build command, and explicit exclusion of brand-logo technology chips from the first scope.
