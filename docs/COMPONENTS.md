# Component Structure

Setiap route memiliki folder komponen sendiri di `app/components/Pages`. Page hanya mengatur metadata, mengambil data, dan menyusun komponen berdasarkan tanggung jawab UI.

```text
app/components/
├── Layout/
├── Common/
├── Product/
├── Profile/
└── Pages/
    ├── Index/
    │   ├── AboutSection.vue
    │   ├── HeroCarousel.vue
    │   └── ProductGroups.vue
    ├── Cart/
    │   ├── CartItems.vue
    │   ├── CheckoutSteps.vue
    │   ├── EmptyCartState.vue
    │   └── OrderSummary.vue
    └── ... one folder per route
```

## Rules

- Component files use English names that describe their UI responsibility.
- Route folders keep Indonesian names in PascalCase because they correspond to existing URLs (e.g. `Pages/CetakBuku`).
- Generic page components such as `Content.vue` or `SomethingPage.vue` are not used.
- Data lives in `server/data`, is exposed through `server/api`, and is read by composables.
- Pages pass data into presentational components through typed props.
- Important DOM IDs and classes remain unchanged for compatibility with legacy scripts.
- Shared components stay in their domain folders instead of being duplicated per page.

## Catalog data

`server/data` menyimpan billing, alamat, klien, percetakan, toko kertas,
mesin (`printing-machines.json`), pisau pond, harga/group/ukuran/jenis kertas,
serta cart, wishlist, dan support ticket. Katalog dibaca melalui
`/api/catalog/:kind`; billing dan alamat menggunakan endpoint per pengguna.
Pencarian memfilter data tersebut, bukan daftar statis di template.
