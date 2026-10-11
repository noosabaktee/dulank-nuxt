# AGENTS.md

Nuxt 4 + Vue 3 + Tailwind CSS 4 migration of **Percetakan Dulank**, a static Indonesian printing-shop site (55 HTML pages). The prime directive is **fidelity**: preserve the original DOM structure, styling, content, and legacy JS behavior. Bootstrap is deliberately absent — never add it.

The storefront now consumes the Laravel backend at `/home/bacink/DULANK/2026/dulank-backend` (port 8000) instead of local JSON files. The same backend also serves **dulank-admin** (`/api/v1/admin/*`); storefront endpoints live under `/api/v1/*` (store routes in `routes/api/store.php`). Changes to shared models (Product, Category, User, BlogPost, Faq, Banner) must not break dulank-admin.

- Site content is Indonesian (`<html lang="id">`); page component names are English.
- `docs/ROUTES.md` maps every source `*.html` → Nuxt route → page component; `CLAUDE.md` has a longer architecture write-up.

## Commands

- `npm run dev` — dev server (http://localhost:3000; requires the Laravel backend on 127.0.0.1:8000)
- `npm run build` / `npm run preview` — production build (verified working)
- `npm run validate:migration` — static coverage/syntax/Bootstrap checks
- `npm run validate:revision3` — UI-fidelity invariant checks
- `npm run typecheck` — `nuxi typecheck` (TypeScript 5 + vue-tsc are installed; pre-existing `Booleanish` errors in legacy markup remain)
- No lint, formatter, or test framework exists. The two `validate:*` scripts are the test suite.

## Architecture

- `app/pages/<route>.vue` are thin composers: call `useLegacyPage({ title, styles, scripts })`, fetch API data, then render `Pages*` components.
- `app/components/Pages/<Route>/*.vue` hold page UI, named by English UI responsibility. Components and composables are Nuxt auto-imports (`Pages*`, `use*`).
- Data flow: `app/composables/use*.ts` → `useApi()`/`apiRequest()` in `app/composables/useApi.ts` → `$api` (ofetch instance from `app/plugins/api.client.ts`) → `/api/v1/**` proxied to the Laravel backend via `routeRules` in `nuxt.config.ts` (`NUXT_PUBLIC_API_BASE`, default `http://127.0.0.1:8000`). Responses use the backend envelope `{ success, data, meta? }`; `useApi` unwraps `.data`.
- Auth: Sanctum token stored in cookie `dulank_store_token` (ability `store`). `app/composables/useAuth.ts` handles login/register/logout/me. The `$api` plugin injects `Authorization: Bearer` and clears the token on 401.
- Product-page config (spec options with prices, price lists, design galleries, printing guides) is stored in backend settings (group `product-pages`, seeder `ProductPageSeeder`, endpoint `GET /api/v1/product-pages/{slug}`). Re-run `php artisan db:seed --class=ProductPageSeeder` after editing `dulank-backend/database/data/product-pages.json`.
- Company contact info comes from `GET /api/v1/settings/company` (seeder `SettingSeeder`); shop profiles/services from `GET /api/v1/partners/{id}` and the catalog endpoints.
- Product/brand images are served from the backend's Laravel public storage: seeded paths are normalized `/storage/images/...` (symlink `public/storage` → `storage/app/public`). After changing images or re-importing, run `php artisan dulank:sync-images` in the backend (copies `dulank-store/public/images`, downloads external gallery placeholders, normalizes DB paths and `product-pages` settings). Images with no local source fall back to deterministic `https://picsum.photos/seed/<nama>/<w>/<h>` URLs. The storefront proxies `/storage/**` to the backend via `routeRules`.
- `app/layouts/default.vue` picks the navbar variant from hard-coded `mainNavbarRoutes` / `calculatorNavbarRoutes` sets. A route not listed in either renders with no header (bare "page" layout). Calculator/machine pages use the sidebar layout.
- Legacy bridge `app/composables/useLegacyPage.ts`: fetches `public/js/**` at runtime, evals with `new Function`, and replays `DOMContentLoaded` listeners after the Vue page mounts. It re-exposes only a hard-coded function list on `window` (`loadHTML`, `showEl`, ...). If legacy code adds a new top-level function that another legacy file calls, add its name to that export list.
- Legacy product-page JS (`public/js/product.js`, `public/js/pages/<page>-01.js`, `-02.js`) reads spec-form DOM hooks (`.btn-spec`, `data-price`, `#custom-size`, `#custom-content`, `productPageConfig`). The Vue spec forms are rendered from the API but preserve the exact DOM structure those scripts expect.
- Bootstrap shim `app/plugins/legacy-ui.client.ts` provides `window.bootstrap` (Collapse, Modal, Tab, Toast, Carousel, Tooltip) for `data-bs-*` markup.
- CSS entry `app/assets/css/main.css`: Tailwind → `bootstrap-compat.css` (recreated Bootstrap grid/utilities) → legacy site CSS → `fidelity-fixes.css` (visual drift fixes). Original Bootstrap class names/IDs are DOM hooks for legacy CSS/JS — do not rename or restructure them.
- `legacy/static-source/` is the original static site (reference only). What actually ships and executes are the copies under `public/` (`public/js`, `public/css`, `public/templates`); edit legacy behavior there.
- Shared fragments (navbar/footer/sidebar) are Vue components now; do not re-fetch `public/templates/*` at runtime.

## Verification gotchas

- `scripts/validate-migration.mjs` hard-codes counts: 55 source HTML pages, 55 page component folders, 56 `public/js` files, 63 `public/css` files, 3 `public/json` files (regions). It also rejects `.html` links inside Vue page components and any Bootstrap JS/CSS reference in runtime code. If you add, move, or rename files in those trees, update the expectations deliberately.
- `scripts/validate-revision-3.mjs` asserts exact selectors/strings in `bootstrap-compat.css`, `fidelity-fixes.css`, `app/components/Layout/MainNavbar.vue`, product spec forms (`id="custom-size"` / `id="custom-content"` default `d-none`), `public/js/product.js`, and `public/js/pages/kalkulator-potong-kertas.js`. Run it after touching those areas.
- Root `MIGRATION_*.json`, `REVISION_*.json`, and `VALIDATION_REPORT.*` are historical audit output; do not hand-edit.
- Doc drift: `docs/MIGRATION.md` mentions `@nuxt/ui` and `public/legacy-js`, neither of which exists. `docs/ROUTES.md` lists `/kontak` and `/kalkulator` aliases that are not implemented (`/catalog` is a real page).

## Conventions

- Keep every original class, ID, and DOM hierarchy intact; visual fixes go into `fidelity-fixes.css` or `bootstrap-compat.css`, not into markup.
- No generic `Content.vue`/`SomethingPage.vue` components; one folder per route with responsibility-named components.
- Component folders and files under `app/components/` use PascalCase (e.g. `Pages/CetakBuku/ProductOverview.vue`).
- Convert legacy `*.html` links to extension-less Nuxt routes.
- Adding a route requires: page composer + component folder, an entry in the matching navbar list in `app/layouts/default.vue`, data/API/composable if needed, and legacy assets copied into `public/`.
- New storefront API endpoints go into `dulank-backend/routes/api/store.php` (public `throttle:api` group or the `abilities:store` group), never into `routes/api/admin.php`. Seed product-page/config data via seeders, then re-seed the target table.