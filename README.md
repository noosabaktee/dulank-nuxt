# Percetakan Dulank — Nuxt + Tailwind

Migrasi frontend statis Percetakan Dulank ke Nuxt dengan target utama **menjaga tampilan, isi, fitur, dan perilaku source HTML/CSS/JavaScript asli**.

## Stack

- Nuxt 4
- Vue 3
- Tailwind CSS 4 melalui `@tailwindcss/vite`
- Original Dulank custom CSS/JS tetap dipertahankan sebagai source of truth untuk fitur dan styling spesifik halaman
- Bootstrap framework **tidak di-install dan tidak dimuat**

> HTML lama memakai banyak nama class Bootstrap. Nama class tersebut tetap dipertahankan karena juga menjadi DOM hook untuk CSS/JS lama. Implementasi layout dasarnya kini disediakan oleh `app/assets/css/bootstrap-compat.css`, bukan Bootstrap.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build production

```bash
npm run build
npm run preview
```

## Struktur utama

```text
app/
  assets/css/
    main.css
    bootstrap-compat.css
  components/
    layout/
    common/
    calculator/
    cart/
    category/
    product/
    profile/
    quotation/
    support/
    pages/
  composables/
    useLegacyPage.ts
  layouts/
  pages/
  plugins/
    legacy-ui.client.ts
public/
  css/
  images/
  js/
  json/
  templates/
```

## Prinsip migrasi

1. DOM halaman diambil kembali dari HTML asli agar tidak terjadi perubahan ukuran/spacing akibat utility hasil konversi otomatis.
2. Navbar/footer utama menjadi reusable Nuxt components dan langsung dirender saat halaman dibuka.
3. Sidebar/profile/kalkulator yang memang bergantung pada script fragment lama tetap kompatibel dengan lifecycle Nuxt.
4. JavaScript halaman lama dijalankan setelah component mounted sehingga handler `DOMContentLoaded` tetap bekerja.
5. Link `.html` yang berpindah halaman disesuaikan ke route Nuxt tanpa ekstensi.
6. Modal, collapse, tabs, dropdown, carousel, dan toast diberi runtime kecil lokal agar Bootstrap JS tidak diperlukan.

## Catatan penting

Jangan menambahkan Bootstrap kembali. Bila ada style halaman yang perlu diperbaiki, perbaiki custom CSS atau compatibility layer Tailwind yang tersedia agar target visual tetap sama dengan website referensi.
