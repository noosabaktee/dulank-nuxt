# State Management — Pinia + Composables + useFetch

Status: **rancangan, belum diimplementasikan** (disusun 2026-10-11).
Kontrak API diverifikasi langsung dari `dulank-backend` (routes, controller, resource) pada tanggal yang sama.

Prinsip: gunakan Pinia hanya ketika aplikasi membutuhkan **state bersama yang memiliki tanggung jawab jelas**. Jangan memakainya hanya karena aplikasi memakai Nuxt. Untuk Nuxt 4 yang terhubung Laravel API, pembagiannya:

| Lapisan | Dipakai untuk | Kriteria |
|---|---|---|
| **Pinia** | State klien yang dibagi antar route/komponen | Jawab "ya" untuk: *kalau komponen yang memakainya unmount, apakah state ini harus tetap hidup dan dipakai komponen lain?* |
| **Composable** | Logika reusable, pembungkus akses data | Bukan singleton; tiap pemanggil boleh punya instance sendiri |
| **`useFetch`/`useAsyncData`** | Server state per halaman | Data dari API yang cukup hidup selama halaman aktif; manfaatkan SSR + key cache |

Pinia **bukan** lapisan data default. Mayoritas composable yang ada tetap seperti sekarang.

## Peta composable saat ini

| Composable | Keputusan | Alasan |
|---|---|---|
| `useLegacyPage` | tetap | Jembatan runtime legacy, tidak terkait data |
| `useCartItems` | → `useCartStore` | Dipakai navbar badge, `/cart`, `/checkout`, `/next`; ada mutasi (tambah/ubah/hapus/clear) |
| `useWishlistItems` | → `useWishlistStore` | Navbar badge, `/wishlist`, tombol `add-wishlist-btn` di 3 halaman PriceList + CartItems |
| `useUserProfile` | sebagian → `useAuthStore` | Profil "diri sendiri" ikut sesi auth. Fetch user by id (`/users/{id}`) tetap composable |
| `useUserAddresses` | tetap composable | Data user-scoped per halaman; cukup `refresh()` setelah CRUD, tidak perlu singleton |
| `useOrders`, `useQuotations` | tetap | Daftar per halaman; setelah auth, filter `userId` diganti endpoint milik token |
| `useProductList`, `useCategories`, `useCatalog`, `useMachineCatalog`, `useBlogPosts`, `useFaqs`, `useSaleBanners` | tetap | Murni server state publik, tidak ada mutasi lintas halaman |

## Store yang dibuat

### 1. `useAuthStore` — sesi & identitas

Saat ini belum ada auth di frontend: `Pages/Login/LoginForm.vue` masih statis (`action="/profile"`), semua data user-scoped hard-code `userId = 1`.

| Aksi | Endpoint | Body | Respons `data` |
|---|---|---|---|
| `login` | `POST /auth/login` | `email`, `password`, `device_name?` | `{ token, user }` |
| `register` | `POST /auth/register` | `name`, `email`, `phone?`, `password`, `password_confirmation`, `device_name?` | `{ token, user }` (201) |
| `fetchMe` | `GET /auth/me` | — | `user` |
| `logout` | `POST /auth/logout` | — | `{ revoked: true }` |

- State: `token`, `user`, `initialized`. Getter: `isAuthenticated`.
- Persistensi token: **cookie** via `useCookie` (bukan localStorage) agar bisa dibaca saat SSR dan saat inisialisasi pertama.
- Token abilities: `['store']` (dari `AccountType::Store`). Semua endpoint store di balik `auth:sanctum` + `abilities:store`.
- ⚠️ `AuthController::login` hanya menerima `AccountType::Store` (`isStore()`). Akun admin seeder (`admin@dulank.test`) akan **401 di login store** meski password benar. Untuk uji: daftar lewat `POST /auth/register`, atau siapkan seeder user store dev.

### 2. `useCartStore` — keranjang

| Aksi | Endpoint | Catatan respons |
|---|---|---|
| `fetch` | `GET /cart` | `CartItem[]` |
| `add` | `POST /cart` | Mengembalikan **seluruh koleksi** → langsung replace state |
| `updateQuantity` | `PUT /cart/{itemId}` | Mengembalikan item tunggal |
| `remove` | `DELETE /cart/{itemId}` | `{ id, removed }` → hapus lokal |
| `clear` | `POST /cart/clear` | `{ cleared }` → kosongkan state |

- Getters: `itemCount` (badge navbar), `subtotal`, `tax`, `total`.
- `app/pages/cart.vue` dan `app/pages/next.vue` saat ini menduplikasi perhitungan `subtotal/tax/total` — pindahkan ke getter store agar satu sumber.
- Tipe resource sudah cocok dengan `server/types/cart.ts` (`id` string, `productId` number, `quantity` number).

### 3. `useWishlistStore` — wishlist

| Aksi | Endpoint | Catatan |
|---|---|---|
| `fetch` | `GET /wishlist` | `WishlistEntry[]` |
| `add` | `POST /wishlist` | `productId`, `spec?`, `expireDate?`; 201 jika entri baru |
| `remove` | `DELETE /wishlist/{itemId}` | `{ id, removed }` |

- Getters: `count`, `has(productId, spec)` untuk status tombol hati.
- Tipe `WishlistResource` sudah cocok dengan `server/types/wishlist.ts` (`id` number, `expired`, `expireDate` format `j/n/Y`).

## Lapisan API bersama (bukan store)

Satu klien `$fetch` di plugin, dipakai store via `useNuxtApp()`:

```ts
// app/plugins/api.ts (bentuk, bukan implementasi final)
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const auth = useAuthStore()
  const api = $fetch.create({
    baseURL: config.public.apiBase,          // NUXT_PUBLIC_API_BASE
    onRequest({ options }) {
      if (auth.token) options.headers.set('Authorization', `Bearer ${auth.token}`)
    },
    onResponseError({ response }) {
      if (response.status === 401) auth.reset()   // token invalid → paksa login ulang
    },
  })
  return { provide: { api } }
})
```

- Komponen yang tidak butuh state bersama tetap memakai `useFetch`/`useAsyncData` seperti sekarang.
- **Base URL — rekomendasi: langsung ke Laravel** (`http://localhost:8000/api/v1`), bukan proxy Nitro:
  - CORS sudah siap: `dulank-backend/config/cors.php` mengizinkan `http://localhost:3000` (`FRONTEND_URLS`); `supports_credentials: false` tidak masalah karena memakai Bearer token, bukan cookie-based Sanctum SPA.
  - Path `/api/*` di Nuxt sudah dipakai mock Nitro — proxy akan tabrakan atau butuh path baru. Lebih bersih: `NUXT_PUBLIC_API_BASE` menunjuk Laravel, mock Nitro pensiun bertahap.
- Error mapping: `401` → reset sesi + arahkan `/login`; `422` → `errors` per field; `429` → throttle (`throttle:api`/`throttle:auth`); lainnya → `message` dari envelope `{ success: false, message }`.
- Envelope sukses: `{ success: true, data, meta? }` (sama dengan mock Nitro sekarang).

## Yang sengaja tidak dibuat store

- Daftar orders, quotations, invoices, tickets → server state per halaman.
- Draft checkout → masih satu halaman; composable/local state cukup sampai ada kebutuhan lintas halaman.
- Modal/toast/tab → domain legacy JS + shim Bootstrap, jangan dipindah.
- Produk/kategori/blog/faqs → publik, tanpa mutasi.

## Urutan migrasi

| Fase | Isi | Verifikasi |
|---|---|---|
| **0** | Infra: install `@pinia/nuxt@1.0.2` + `pinia@4.0.3` (auto-discovery `app/stores`), registrasi module, `runtimeConfig.public.apiBase`, plugin `$api` | `npm run dev` bersih, validators tetap lulus |
| **1** | `useAuthStore` + wiring `LoginForm`/`RegisterForm` + logout + middleware `auth` + init plugin (baca cookie → `fetchMe`) | Login user store hasil register, guard halaman protected |
| **2** | `useCartStore`; ganti `useCartItems` di `/cart`, `/next`, `/checkout`, badge navbar; pindahkan `subtotal/tax/total` | Badge dinamis, CRUD keranjang, validators |
| **3** | `useWishlistStore`; ganti `useWishlistItems`; sambungkan `add-wishlist-btn` (CetakBuku, CetakFullColor, Kalender, CartItems) | Tambah/hapus, badge, `has()` pada tombol hati |
| **4** | Composable lain pindah ke `apiBase`; hapus `userId = 1`; pensiunkan mock Nitro per modul; perbarui docs | Seluruh halaman data-driven lewat Laravel |

## Gotcha khusus repo ini

1. **Fidelity DOM** — class/ID/hierarki tidak boleh berubah; interaksi baru lewat event Vue, bukan restrukturisasi markup.
2. **Legacy JS tidak memanggil API** (sesuai PRD). Tombol quantity/remove di halaman cart sekarang dipegang `public/js/pages/cart.js` — saat Fase 2 wajib audit agar tidak terjadi double-handling antara handler legacy dan action store.
3. **Jangan pakai `useFetch` di dalam store** — gunakan `$api` di actions agar tidak terikat lifecycle komponen; hindari double fetch dengan flag `fetched`.
4. **SSR** — Pinia aman SSR; simpan token di cookie, jangan module-scope global.
5. **Navbar di semua halaman main** — badge cart/wishlist harus `0` saat guest dan tidak memicu request 401; fetch hanya jika `isAuthenticated`.
6. **Badge saat ini hard-code `"2"`** di `app/components/Layout/MainNavbar.vue` (baris ~81, ~89) — ganti dengan `itemCount`, pertahankan markup.
7. **Typecheck belum jalan** (`typescript`/`vue-tsc` belum terpasang) — sebelum Fase 1 sebaiknya ditambahkan, kalau tidak store TypeScript hanya terverifikasi oleh validators.
8. **Validators** — Pinia/store tidak menyentuh `public/**` counts atau aturan `.html`/Bootstrap, jadi `validate:*` harusnya tetap hijau; jalankan setelah tiap fase.

## Keputusan yang perlu diambil sebelum Fase 0

1. Base URL: **langsung Laravel** (rekomendasi) vs proxy Nitro.
2. Token: **cookie** (rekomendasi, SSR-friendly) vs localStorage.
3. Akun uji store: register lewat API/form vs seeder dev baru (di repo backend, butuh persetujuan terpisah).
4. Cakupan Fase 1: login saja, atau login + register + logout + guard sekaligus.
5. Nasib mock Nitro: pensiun per modul atau sekali besar di Fase 4.
