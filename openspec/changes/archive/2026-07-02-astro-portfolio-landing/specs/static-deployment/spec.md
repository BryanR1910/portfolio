# Static Deployment Specification

## Purpose

Define the static Astro site behavior required to build and deploy the portfolio landing page to Hostinger or any static host.

## Requirements

### Requirement: Astro Static Site

The project MUST be an Astro static site with a home route for the portfolio landing page. It MUST NOT introduce backend services, API routes, authentication, analytics, CMS, database dependencies, or server-only runtime behavior in first scope.

#### Scenario: Developer opens the site locally

- GIVEN the Astro project is installed
- WHEN the developer starts the local site
- THEN the home route serves the portfolio landing page
- AND no backend server feature is required for page content

#### Scenario: First-scope exclusions are checked

- GIVEN the implementation is reviewed
- WHEN reviewers inspect the project behavior
- THEN no API route, CMS, auth, analytics, database, or live form behavior is required

### Requirement: Static Contact Links

The contact section MUST use static links only, such as email, LinkedIn, GitHub, or CV links. The system MUST NOT include a live contact form or submit visitor data in first scope.

#### Scenario: Visitor chooses a contact action

- GIVEN the visitor is in the contact section
- WHEN they activate a contact link
- THEN the browser opens the configured static destination
- AND no form submission or API request is required

#### Scenario: Contact destination is missing

- GIVEN a final contact URL is not available
- WHEN the page is implemented
- THEN the link target is a clearly replaceable static placeholder or omitted safely

### Requirement: Build Output

The project MUST provide an npm build command that completes successfully and emits deployable static files to `dist/`. The `dist/` output MUST be suitable for upload to Hostinger or equivalent static hosting.

#### Scenario: Developer builds the portfolio

- GIVEN dependencies are installed
- WHEN the developer runs `npm run build`
- THEN the build completes successfully
- AND static output exists in `dist/`

#### Scenario: Static host serves the output

- GIVEN the contents of `dist/` are uploaded to a static host
- WHEN a visitor requests the site
- THEN the landing page assets load without server-side rendering support
