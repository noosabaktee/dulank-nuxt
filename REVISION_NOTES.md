# Revision: Navbar, Sidebar, dan Profile Kalkulator

Revisi ini menindaklanjuti masalah visual/runtime yang ditemukan setelah migrasi awal.

## Perbaikan

1. **Navbar shared dipindahkan ke Nuxt layout**
   - Halaman yang pada source asli memakai `navbar-placeholder` sekarang mendapatkan `LayoutMainNavbar` dari `app/layouts/default.vue`.
   - Halaman yang memakai `navbar-kalkulator-placeholder` mendapatkan `LayoutCalculatorNavbar`.
   - Halaman dengan header khusus seperti Login/Register/Checkout tetap mempertahankan header khusus aslinya, sehingga tidak terjadi navbar ganda.
   - Navbar yang sebelumnya ditanam per-page dihapus untuk mencegah duplikasi.

2. **Sidebar menjadi komponen Vue nyata**
   - `sidebar-kalkulator-placeholder` diganti `<CalculatorSidebar />` di seluruh halaman terkait.
   - `sidebar-profile-placeholder` diganti `<ProfileSidebar />` di seluruh halaman akun.
   - Desktop sidebar selalu terlihat sesuai source asli.
   - Mobile sidebar tetap collapse/toggle.
   - Active menu mengikuti route Nuxt.

3. **Konflik Tailwind `.collapse` diperbaiki**
   - Tailwind memiliki utility bernama `collapse` yang berarti `visibility: collapse`.
   - Source Dulank memakai `.collapse` dengan makna Bootstrap disclosure/navbar/sidebar.
   - Compatibility CSS sekarang mengembalikan semantics Dulank tanpa memuat Bootstrap runtime.

4. **Profile Kalkulator avatar/badge diperbaiki**
   - Urutan CSS dibuat: Tailwind -> compatibility -> custom CSS Dulank.
   - `.ratio` tidak lagi menimpa ukuran `.profile-avatar` dan `.profile-avatar-badge`.
   - Badge kamera kembali 24x24, bukan melebar menjadi oval besar.
   - Ukuran image 150x150 dari source `profile-kalkulator-inline.css` tetap dipertahankan.

5. **Routing lama dibersihkan**
   - Referensi `href/action="*.html"` pada Vue page/component dikonversi menjadi route Nuxt bersih.

## Validation

- Static source pages: 55
- Nuxt page components: 55
- Nuxt route files: 56
- Shared/domain components: 23
- JavaScript checked with `node --check`: 56/56
- CSS source files: 63/63
- Images: 13/13
- JSON: 3/3
- TypeScript/script-setup syntax files checked: 71
- TypeScript syntax errors: 0
- Bootstrap framework runtime: tidak digunakan

> Catatan environment: `npm install` dari environment pembuatan paket mengalami timeout ke package registry, sehingga browser-level Nuxt build tidak dijalankan di sini. Project tetap disiapkan untuk `npm install && npm run dev` di environment lokal.
