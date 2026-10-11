# Implementasi: Store → Backend API + Merchant + Kalkulator

> Dokumentasi baru (opsional, bukan pengganti AGENTS.md/CLAUDE.md).
> Status: cabang `dev` semua repo, di-push.

## 1. Arsitektur & Alur Data

```
dulank-admin (Nuxt 4)          dulank-store (Nuxt 4)
      │  CRUD (create/update/delete)      │  GET/POST/PUT/DELETE
      ▼                                   ▼
      └─────────────►  dulank-backend (Laravel 13, MySQL `dulank`, :8000)
                          ├─ /api/v1/admin/*   → hanya dulank-admin
                          └─ /api/v1/*          → store/shared (kalkulator dsb.)
```

- **Store mengonsumsi data hasil CRUD dulank-admin.** Admin mengubah produk,
  kategori, banner, kertas (size/price/group), mesin, merchant, blog, FAQ,
  order, dll. → perubahan langsung terlihat di store (satu DB, tanpa salinan
  data di frontend).
- **Pengecualian area kalkulator** (halaman kalkulator/mesin/kertas): inilah
  tempat CRUD sisi store — merchant mengelola data miliknya sendiri.
- Proksi Nitro di kedua frontend:
  - `dulank-store`: `/api/v1/**` dan `/storage/**` → `http://127.0.0.1:8000`
  - `dulank-admin`: `/api/v1/**` dan `/storage/**` → `http://127.0.0.1:8000`

## 2. Konvensi Route Backend

- Semua route di bawah prefix `api/v1` (`routes/api.php` → `v1` → `store.php` + `admin.php`).
- `/api/v1/admin/*` → dolanya admin (Sanctum ability `admin` + permission modul).
- `/api/v1/*` non-admin → store/shared (`abilities:store` untuk tulis; GET publik bebas).
- Alias legacy `/api/*` (tanpa `v1`) di `compatibility.php` **sudah dihapus** —
  semua konsumen memakai `/api/v1`. Tests di-update menyesuaikan.
- Route store ditulis di `routes/api/store.php` (grup `throttle:api`,
  `auth:sanctum` + `abilities:store` untuk tulis). Jangan menambah route ke
  `admin.php` dari pekerjaan store.

## 3. Terminologi Merchant (bukan Partner)

- **API publik store & UI memakai `merchant`:** `GET /api/v1/merchants/{id}`
  (profil toko percetakan/toko kertas), CRUD kalkulator memakai payload
  `merchant_id`. Halaman `/store` dan `/store-kertas` memakai
  `/merchants/{id}`.
- **Internal backend tetap `Partner`** (tabel `partners`, model, resources,
  factory, importers) dan **dulank-admin tetap `partners`**
  (`/api/v1/admin/calculator/partners`, dsb.) — tanpa migrasi DB, tanpa
  risiko merusak admin.
- Kepemilikan CRUD kalkulator masih `merchant_id` eksplisit (belum ada
  relasi user→partner). Hardening selanjutnya: tambahkan `partners.user_id`
  lalu validasi kepemilikan dari token.

## 4. CRUD Kalkulator Sisi Store

Endpoint (`abilities:store`), semua response envelope `{ success, data }`:

| Resource | Route | Payload penting |
|---|---|---|
| Mesin | `GET/POST /api/v1/calculator/machines` | `merchant_id`, `kind` (printing/lamination/die-cutting/foil), `name`, `size`, `price`, `unit_price` |
| Mesin | `PUT/DELETE /api/v1/calculator/machines/{id}` | update sebagian; delete → `{id, removed}` |
| Gugus kertas | `GET/POST /api/v1/calculator/paper-groups` | `merchant_id`, `name`, `merk`, `price_type` |
| Gugus kertas | `PUT/DELETE /api/v1/calculator/paper-groups/{id}` | |
| Harga kertas | `GET/POST /api/v1/calculator/paper-prices` | `paper_group_id`, `name`, `price`, `min_order`, `multiple` |
| Harga kertas | `PUT/DELETE /api/v1/calculator/paper-prices/{id}` | kepemilikan via `paper_group.partner_id` |

- `GET ?merchant_id=` memfilter milik merchant; tanpa param = semua.
- Test: `tests/Feature/Store/CalculatorTest.php` (5 test) + suite `Feature` 164 lulus.
- **UI form CRUD di frontend belum dibangun** — endpoints siap, halaman
  kalkulator saat ini read-only via catalog.

## 5. Gambar → Laravel Public Storage

- `php artisan storage:link` sudah aktif (symlink `public/storage` →
  `storage/app/public`).
- `php artisan dulank:sync-images` (`app/Console/Commands/SyncImagesCommand.php`):
  1. Menyalin `dulank-store/public/images` (+ `clients/`) ke storage.
  2. Mengunduh galeri desain eksternal (skala.or.id) ke `images/gallery/`.
  3. Menormalkan semua path data → `/storage/images/...` (products,
     categories, banners, partners, clients, blogs, avatar, cart/wishlist,
     settings `appearance.featuredServices`, group `product-pages`).
  4. Menulis ulang `database/data/product-pages.json` agar re-seed konsisten.
- **Gambar tanpa sumber lokal → fallback picsum.photos deterministik:**
  `https://picsum.photos/seed/<nama>/<w>/<h>` (mis. `promo-akhir.jpg`,
  `banner.jpg`). File storage ter-ignore git (bisa di-sync ulang).

## 6. Konten Halaman Produk (settings, bukan CRUD admin)

- `product-pages` (spec options + harga, price list, galeri desain, panduan)
  tersimpan sebagai `settings` group `product-pages` (seeder
  `ProductPageSeeder`, sumber `database/data/product-pages.json`).
  Endpoint `GET /api/v1/product-pages/{slug}`.
- `appearance.featuredServices` (layanan unggulan homepage) via
  `SettingSeeder`. `settings/company` → kontak & alamat;
  `settings/appearance` → tema + featured services.
- Kapan pun admin tooling dibutuhkan untuk data ini, arahkan ke settings
  tersebut (belum ada UI admin).

## 7. Halaman Store yang Sudah Data-Driven (backend)

`/` (banner, produk terlaris, artikel, layanan unggulan, offer modal),
`/contact`, `/store`, `/store-kertas`, `/result-page`, `/cetak-buku`,
`/cetak-full-color`, `/kalender` (spec+price list+galeri+panduan+related),
orders/quotations/tickets/cart/wishlist/profile/addresses/billing, blog,
faqs, categories, semua halaman mesin/kertas (catalog).

Sisa konten statis yang sengaja dipertahankan: `AboutSection` (teks
editorial situs), `FeaturedServices` (kini dari settings), empty-state
panel layanan saat merchant belum punya data.

## 8. Operasional & Recovery

- Dev servers: backend `127.0.0.1:8000`; store & admin `:3000` (gunakan port bebas
  bila bertabrakan, mis. store `:3001`); sesuaikan `NUXT_PUBLIC_API_BASE` / `LARAVEL_API_URL` bila backend beda host.
- Seeder utama: `RolePermissionSeeder`, `AdminUserSeeder`, `SettingSeeder`,
  `ProductPageSeeder`, `TaxRateSeeder`, `RegionSeeder`.
- **Jika DB dev kosong (mis. `migrate:fresh` dijalankan):** data dummy store
  hanya ada di riwayat git (commit `8ce547e`, folder `server/data`).
  Recovery: `git checkout 8ce547e -- server/data` di dulank-store →
  `php artisan dulank:import store` → hapus `server/data` & `git reset` →
  jalankan seeders di atas → `php artisan dulank:sync-images`.
  Data admin (customers/suppliers/dll.) di-restore via
  `php artisan dulank:import admin` dari `dulank-admin/data`.
- Test backend memakai SQLite `:memory:` (phpunit.xml) — aman untuk DB dev.

## 9. Arah Refactor (Nuxt 4 / Vue murni)

- `legacy/static-source/` dan `@legacy/` **hanya referensi** — tidak dipakai
  di development maupun production.
- `public/js`, `public/css`, `public/templates` dipakai saat ini lewat bridge
  `useLegacyPage` (eval + replay DOMContentLoaded) dan CSS chain
  (`bootstrap-compat.css` → legacy CSS → fidelity-fixes). Target akhir:
  menghilangkan ketergantungan vanilla JS secara bertahap (komponen Vue
  murni), tanpa mengubah tampilan (`fidelity` tetap prime directive).

## 10. Status Git (per 2026-10-11, malam)

| Repo | Branch | Commit terakhir | Isi |
|---|---|---|---|
| dulank-store | `dev` | `8eb166e` | merchant rename, proxy storage, data-driven pages, docs |
| dulank-backend | `dev` | `9203f50` | route cleanup, CRUD kalkulator merchant, sync-images, seeders |
| dulank-admin | `dev` | `02f8bc2` | proxy `/storage/**` |

`main` di dulank-store menyimpan snapshot migrasi awal (`89e9916`); branch
`dev` adalah tempat kerja aktif.