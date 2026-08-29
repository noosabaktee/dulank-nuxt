# Percetakan Dulank — Refactored Frontend

Frontend ini tetap menggunakan **HTML, CSS, dan JavaScript murni**. Struktur telah dirapikan agar lebih mudah dipelihara sekarang dan lebih mudah dipindahkan ke Nuxt atau Next.js nanti.

## Struktur utama

```text
percetakan-dulank/
├── css/
│   ├── style.css                 # gaya global dan komponen bersama
│   ├── checkout.css              # stylesheet bersama halaman checkout/quotation
│   ├── save.css                  # stylesheet cart/wishlist/quotation
│   └── pages/                    # CSS khusus halaman hasil ekstraksi
├── js/
│   ├── component.js              # initializer UI bersama dan template loader
│   ├── product.js                # logika pilihan produk
│   ├── checkout.js               # logika checkout
│   ├── kalkulator.js             # komponen kalkulator bersama
│   └── pages/                    # JavaScript khusus setiap halaman
├── templates/                    # navbar, footer, sidebar, dan fragmen reusable
├── images/
├── json/
└── *.html
```

## Perubahan utama

- Seluruh tag `<style>`, script JavaScript inline, atribut `style`, dan atribut event seperti `onclick` telah dipindahkan ke file CSS/JS.
- CSS dan JavaScript khusus halaman berada di folder `css/pages` dan `js/pages`.
- Sebanyak **74 tombol spesifikasi produk** diubah menjadi kontrol radio semantik. Tampilan tombol lama tetap dipertahankan melalui label dan class yang sama.
- Semua radio memiliki `name`, `value`, dan status `checked`, sehingga siap dibaca melalui `FormData` atau request backend.
- Tombol non-submit diberi `type="button"` agar tidak melakukan submit tidak sengaja ketika dipindahkan ke dalam form/component.
- ID HTML yang berulang telah dibuat unik dan referensi `for`/`aria-labelledby` disesuaikan.
- Event handler yang sebelumnya dibentuk melalui string `onclick` diganti dengan `addEventListener` atau event delegation.
- `component.js` dipecah menjadi fungsi initializer kecil untuk template, Bootstrap, input, format angka, spesifikasi, dan navigasi Enter.
- Loader template sekarang mengeksekusi file script milik fragment secara aman setelah fragment dimuat.
- Referensi script lama yang tidak tersedia (`loadComponent.js` dan `wishlist.js` pada halaman yang tidak menggunakannya) telah dibersihkan.

## Menjalankan project

Jangan membuka file langsung melalui `file://`, karena navbar/footer/sidebar dimuat menggunakan `fetch`.

```bash
python -m http.server 8000
```

Kemudian buka:

```text
http://localhost:8000/index.html
```

## Arah migrasi Nuxt/Next

- Pindahkan `templates/navbar.html` dan `templates/footer.html` menjadi komponen layout.
- Pindahkan setiap `js/pages/<halaman>.js` ke lifecycle `onMounted` atau React effect pada halaman terkait.
- Ubah kontrol `.spec-input` menjadi state form framework tanpa mengubah markup visual label `.btn-spec`.
- CSS global dapat tetap berasal dari `css/style.css`; CSS di `css/pages` dapat diimpor hanya oleh halaman terkait.

## Aset sumber yang belum tersedia

Dua file berikut direferensikan oleh source awal tetapi tidak terdapat di ZIP yang diberikan, sehingga referensinya dipertahankan dan tidak diganti dengan gambar tebakan:

- `images/brandit.png`
- `images/breadcrumb.jpg`
