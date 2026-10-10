# AGENTS.md

Nuxt 4 + Vue 3 + Tailwind CSS 4 migration of **Percetakan Dulank**, a static Indonesian printing-shop site (55 HTML pages). The prime directive is **fidelity**: preserve the original DOM structure, styling, content, and legacy JS behavior. Bootstrap is deliberately absent — never add it.

- Site content is Indonesian (`<html lang="id">`); page component names are English.
- `docs/ROUTES.md` maps every source `*.html` → Nuxt route → page component; `CLAUDE.md` has a longer architecture write-up.

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` / `npm run preview` — production build (verified working)
- `npm run validate:migration` — static coverage/syntax/Bootstrap checks
- `npm run validate:revision3` — UI-fidelity invariant checks
- `npm run typecheck` — currently broken: `typescript`/`vue-tsc` are not installed, so `nuxt typecheck` exits with "A type checker is required". Add both devDependencies if you need it; otherwise rely on the validators.
- No lint, formatter, or test framework exists. The two `validate:*` scripts are the test suite.
- Run commands from the repo root: `server/utils/data.ts` resolves `server/data` from `process.cwd()`.

## Architecture

- `app/pages/<route>.vue` are thin composers: call `useLegacyPage({ title, styles, scripts })`, then render `Pages*` components.
- `app/components/pages/<kebab-route>/*.vue` hold page UI, named by English UI responsibility. Components and composables are Nuxt auto-imports (`Pages*`, `use*`).
- Data flow: `app/composables/use*.ts` → `useFetch('/api/...')` → H3 handlers in `server/api/` → JSON in `server/data/` via `readJSON`/`writeJSON`. Cart and ticket writes persist to those JSON files on disk; `DELETE /api/wishlist/:id` is a stub that reports success without persisting.
- `app/layouts/default.vue` picks the navbar variant from hard-coded `mainNavbarRoutes` / `calculatorNavbarRoutes` sets. A route not listed in either renders with no header (bare "page" layout). Calculator/machine pages use the sidebar layout.
- Legacy bridge `app/composables/useLegacyPage.ts`: fetches `public/js/**` at runtime, evals with `new Function`, and replays `DOMContentLoaded` listeners after the Vue page mounts. It re-exposes only a hard-coded function list on `window` (`loadHTML`, `showEl`, ...). If legacy code adds a new top-level function that another legacy file calls, add its name to that export list.
- Bootstrap shim `app/plugins/legacy-ui.client.ts` provides `window.bootstrap` (Collapse, Modal, Tab, Toast, Carousel, Tooltip) for `data-bs-*` markup.
- CSS entry `app/assets/css/main.css`: Tailwind → `bootstrap-compat.css` (recreated Bootstrap grid/utilities) → legacy site CSS → `fidelity-fixes.css` (visual drift fixes). Original Bootstrap class names/IDs are DOM hooks for legacy CSS/JS — do not rename or restructure them.
- `legacy/static-source/` is the original static site (reference only). What actually ships and executes are the copies under `public/` (`public/js`, `public/css`, `public/templates`); edit legacy behavior there.
- Shared fragments (navbar/footer/sidebar) are Vue components now; do not re-fetch `public/templates/*` at runtime.

## Verification gotchas

- `scripts/validate-migration.mjs` hard-codes counts: 55 source HTML pages, 55 page component folders, 56 `public/js` files, 63 `public/css` files, 3 `public/json` files. It also rejects `.html` links inside Vue page components and any Bootstrap JS/CSS reference in runtime code. If you add, move, or rename files in those trees, update the expectations deliberately.
- `scripts/validate-revision-3.mjs` asserts exact selectors/strings in `bootstrap-compat.css`, `fidelity-fixes.css`, `app/components/layout/MainNavbar.vue`, product spec forms, `public/js/product.js`, and `public/js/pages/kalkulator-potong-kertas.js`. Run it after touching those areas.
- Root `MIGRATION_*.json`, `REVISION_*.json`, and `VALIDATION_REPORT.*` are historical audit output; do not hand-edit.
- Doc drift: `docs/MIGRATION.md` mentions `@nuxt/ui` and `public/legacy-js`, neither of which exists. `docs/ROUTES.md` lists `/kontak` and `/kalkulator` aliases that are not implemented (`/catalog` is a real page).

## Conventions

- Keep every original class, ID, and DOM hierarchy intact; visual fixes go into `fidelity-fixes.css` or `bootstrap-compat.css`, not into markup.
- No generic `Content.vue`/`SomethingPage.vue` components; one folder per route with responsibility-named components.
- Convert legacy `*.html` links to extension-less Nuxt routes.
- Adding a route requires: page composer + component folder, an entry in the matching navbar list in `app/layouts/default.vue`, data/API/composable if needed, and legacy assets copied into `public/`.
