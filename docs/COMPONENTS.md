# Component Structure

Struktur `app/components` dipisahkan berdasarkan domain agar komponen tidak menumpuk hanya di folder `product`.

```text
app/components/
├── auth/
│   └── Header.vue
├── calculator/
│   ├── Header.vue
│   ├── Navbar.vue
│   └── Sidebar.vue
├── cart/
│   └── OrderSummary.vue
├── category/
│   └── Card.vue
├── common/
│   ├── Breadcrumb.vue
│   ├── EmptyState.vue
│   └── QuantityControl.vue
├── layout/
│   ├── AppFooter.vue
│   ├── AppHeader.vue
│   └── MainNavbar.vue
├── legal/
│   └── PrivacyTermsContent.vue
├── pages/
│   └── ... page-level components
├── product/
│   ├── DesignCard.vue
│   ├── PriceTable.vue
│   ├── ProductCard.vue
│   └── SpecSelector.vue
├── profile/
│   ├── Header.vue
│   └── Sidebar.vue
├── quotation/
│   └── SummaryRow.vue
└── support/
    └── TicketRow.vue
```

## Prinsip

- `pages/` berisi komponen utama per halaman.
- Komponen yang digunakan lintas halaman dipindahkan ke folder domain masing-masing.
- `common/` hanya untuk elemen generik yang dapat digunakan banyak domain.
- Komponen kalkulator dan profil tidak lagi ditempatkan di `layout/`.
- Struktur DOM/class penting untuk JavaScript legacy tetap dipertahankan agar fitur tidak berubah.
