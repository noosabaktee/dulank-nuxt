# Dulank Static → Nuxt 4 Migration

## Guarantees
- All 55 source HTML pages are represented as Nuxt file-based routes.
- Original page-specific JavaScript is retained under `public/legacy-js` and initialized after the Vue page mounts.
- Shared fragments are Vue components under `app/components/layout` and are no longer fetched at runtime.
- Bootstrap CSS and Bootstrap JS are not loaded by the active Nuxt application.
- Tailwind CSS 4 is the active utility system through `@nuxt/ui` / `tailwindcss`.
- Original custom CSS is retained page-by-page to minimize visual drift.
- A small Bootstrap-API compatibility shim exists only so legacy calculator/modal/tab/dropdown scripts continue working while Bootstrap itself is absent.

## Structure
Matches the reference repository style: `app/assets`, `app/components`, `app/layouts`, `app/pages`, `public`, `docs`, and `legacy`.

## Shared components
- `LayoutMainNavbar`
- `LayoutAppFooter`
- `LayoutProfileSidebar`
- `LayoutCalculatorSidebar`
- `LayoutCalculatorHeader`
- `LayoutCalculatorNavbar`
- `LayoutPrivacyTermsContent`

Each original HTML page also has a page component under `app/components/pages` and a thin route under `app/pages`.

## Run
```bash
npm install
npm run dev
```
Production:
```bash
npm run build
npm run preview
```

## Validation status
Static migration validation confirms 55/55 source pages are represented, no visible source text was dropped, all discovered internal HTML routes were mapped, page styles are present, Bootstrap framework CDN/runtime references are absent, and all 56 migrated JavaScript files pass `node --check`. TypeScript migration bridge files also pass a parser-level check.

The conversion environment could not reach the npm registry (`EAI_AGAIN`), therefore `npm install`, Nuxt typecheck, and production build must be run in a network-enabled development environment.
