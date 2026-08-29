# Revision 3 — UI & Behaviour Fidelity

Revision based on user review dated 2026-08-28.

## Fixed

### 1. Main navbar
- Rebuilt `MainNavbar.vue` action area with valid markup.
- `Ask For Quote` and `Profile` now use Vue-controlled dropdown state.
- Clicking outside closes dropdowns.
- Calculator dropdown uses the same deterministic state handling.
- Quote/profile icons retain their original navigation destinations.
- Removed nested `<a>` structures that caused inconsistent browser layout and dropdown behaviour.

### 2. Product custom input mode
- Corrected Bootstrap-compatible display utility precedence (`d-none` must beat base `d-flex`).
- Cetak Full Color, Kalender, and Cetak Buku custom fields start hidden.
- Existing `product.js` behaviour now works as intended: preset controls and custom text inputs are mutually exclusive.

### 3. `section-card` tabs
- Added Bootstrap-compatible tab pane layout rules.
- Inactive `.tab-pane` elements are now `display:none` rather than merely transparent.
- FAQ/design/category tab content no longer reserves blank vertical space.

### 4. Kalkulator Potong Kertas result state
- `empty-form` is force-hidden after a successful calculation even though it also has `d-flex`.
- Result `.form` becomes the only visible result state after clicking Hitung with valid input.

### 5. Profile Kalkulator camera badge
- Profile avatar positioning context is now 150×150, matching the actual profile image.
- Camera badge is positioned at the top-right of the profile photo.
- Avatar upload behaviour remains attached to `.profile-avatar-badge`.

## Validation
- Migration coverage: 55 source pages / 55 page components / 56 routes.
- Shared/domain components: 23.
- Legacy JavaScript syntax: 56/56 files pass `node --check`.
- Bootstrap framework runtime: disabled.
- Revision-specific checks: 18/18 pass.
- Nested anchor audit in main navbar: 0.
