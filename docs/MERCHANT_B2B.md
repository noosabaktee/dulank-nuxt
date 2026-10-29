# Integrasi merchant B2B — 28 Oktober 2026

Dokumen ini menjadi acuan terbaru untuk profil usaha, langganan B2B, master kertas dan kalkulator. Catatan 11 Oktober di IMPLEMENTATION.md tetap merupakan riwayat, bukan status implementasi saat ini.

## Alur bisnis dan tahap implementasi

1. Akun storefront terdaftar sebagai `users.type=store`. Akun pelanggan B2C tidak otomatis memperoleh hak merchant.
2. Admin mencatat langganan B2B dengan pemilik, paket, periode, status pembayaran dan daftar hak fitur. Aktivasi saat ini manual, tanpa penagihan, webhook atau jurnal pembayaran.
3. Akses diberikan bila akun Active, langganan Paid, tanggal mulai sudah berlaku, belum melewati tanggal akhir, dan fitur termasuk paket. Tanggal akhir inklusif, mengikuti APP_TIMEZONE backend; sesuaikan timezone deployment dengan kebijakan usaha. Jika ada beberapa langganan aktif, paket dengan tanggal akhir paling jauh menjadi sumber hak; fitur antar paket tidak digabung.
4. Pemilik dengan hak `merchant_profile` membuat satu profil percetakan/toko kertas. `partners.owner_user_id` unik dan berasal dari token, bukan ID pilihan browser. Pengaturan kalkulator disimpan pada `merchant_settings`.
5. Profil baru berstatus Inactive dan menunggu publikasi admin. Publikasi profil berbeda dari hak fitur: profil Inactive tetap dapat dilengkapi pemilik yang berlangganan; Frozen memblokir akses usaha. Berakhirnya langganan tidak otomatis menghapus profil atau menarik publikasi.
6. Admin mengelola ukuran, kelompok, jenis dan harga kertas. Kalkulator potong/berat membaca ukuran global Active dan published dengan unit mm/cm. Harga kertas tidak digunakan sebagai ukuran fisik atau biaya langganan.
7. Potong kertas dihitung backend; Generate membuka preview SVG dari koordinat hasil API, menyediakan kontrol susunan manual dan unduh SVG. Konten judul/pengantar dikelola admin. Seeder dan pengujian melengkapi alur ini.

## Halaman

| Aplikasi | Route | Fungsi |
| --- | --- | --- |
| Admin | `/merchant-settings` | Kelola langganan manual, hak fitur, periode dan publikasi profil |
| Admin | `/merchant-settings#calculator-content` | Judul/pengantar potong kertas serta status publikasi konten; juga ditautkan dari menu Content |
| Admin | `/kertas-group-self` | Kelompok kertas platform atau merchant terpilih |
| Admin | `/kertas-jenis-self` | Jenis kertas, gramatur, relasi ukuran dan mode harga |
| Admin | `/kertas-ukuran-self` | Master ukuran fisik, dimensi dan satuan |
| Admin | `/kertas-harga-self` | Harga dengan relasi kelompok/jenis/ukuran, unit, minimum dan kelipatan |
| Storefront | `/profile-merchant` | Buat/edit nama, jenis usaha, lokasi, alamat, WhatsApp, logo, judul header serta pilihan halaman header |
| Storefront | `/kalkulator-potong-kertas` | Pilihan ukuran database/custom, dimensi potongan, celah, hasil dan Generate |
| Storefront | `/kalkulator-berat-kertas` | Ukuran database/custom, gramatur, jumlah lembar/rim, hasil gram/kg |
| Storefront | `/store?id=<merchantId>` | Profil publik percetakan berdasarkan ID aktual |
| Storefront | `/store-kertas?id=<merchantId>` | Profil/katalog toko kertas berdasarkan ID aktual |

Periksa nama route master di `dulank-admin/app/pages` bila melakukan perubahan menu berikutnya; halaman paper-price/paper-size merchant existing tetap dipertahankan.

## Relasi dan API

- `users -> subscriptions.user_id` untuk entitlement B2B; `subscriptions.customer_id` existing tetap untuk hubungan pelanggan B2C, bukan sumber hak merchant.
- `users -> partners.owner_user_id` satu-ke-satu; `partners -> merchant_settings` satu-ke-satu.
- `paper_groups.partner_id` menunjuk pemilik katalog; null berarti platform. `paper_types.paper_group_id` menunjuk kelompok; `paper_types.paper_size_id` menunjuk ukuran. `paper_prices` menyimpan FK kelompok/jenis/ukuran dan unit. Master yang masih dirujuk tidak dapat dihapus.
- Profil: GET/PUT `/api/v1/merchant-profile`; POST/DELETE `/api/v1/merchant-profile/logo`. Logo JPEG/PNG/WebP maksimum 2 MB; URL media berasal dari backend. Berkas lama tidak langsung dihapus dari storage.
- Kalkulator: GET `/api/v1/calculator/content` publik; GET `/api/v1/calculator/paper-sizes` terlindung; POST `/api/v1/calculator/paper-cutting` dan `/paper-weight` memeriksa hak fitur masing-masing. Query `feature=paper_weight` memilih hak ukuran untuk kalkulator berat.
- Admin: GET `/api/v1/admin/merchant-integration`; POST `/merchant-integration/subscriptions`; PUT `/merchant-integration/merchants/{partner}` dan `/merchant-integration/content`, dengan `settings.manage`. Opsi pemilik katalog GET `/api/v1/admin/paper-merchants` menggunakan `products.manage`; master kertas tetap di endpoint admin existing.
- CRUD mesin/kelompok/harga `/api/v1/calculator/*` sekarang memerlukan `catalog_manage`, langganan aktif dan kepemilikan server. `partnerId` dari browser tidak dapat dipakai mengakses usaha lain. Merchant lama tanpa owner tidak ditebak/dipindahkan otomatis.

Frontend memakai page -> komponen -> composable -> `$api`/Nitro proxy -> Laravel -> Eloquent/service. `useMerchantProfile` memakai state API dengan viewerId agar profil akun sebelumnya tidak tampil pada akun berikutnya. `usePaperCutting` menormalisasi cm ke mm; `usePaperWeight` melakukan permintaan dengan satuan mm. Auth tetap Pinia, data domain bukan salinan seed lokal.

Algoritma potong mencoba strip guillotine dengan orientasi normal/rotasi dan sisa strip; tidak menjanjikan optimum global. Maksimum 5.000 potongan per hasil; dimensi API dalam mm, 1–10.000 mm, celah 0–100 mm. Susunan manual divalidasi batasnya di utilitas frontend dan hanya memengaruhi preview, tidak mengubah tabel hasil hitung backend. Rumus berat: lebar(mm) × tinggi(mm) × gsm × lembar / 1.000.000; satu rim = 500 lembar. Konten pengantar berupa teks biasa, bukan HTML artikel bebas.

## Migration dan seeder

Jalankan dari `dulank-backend` pada database development yang memang dituju:

```powershell
php artisan migrate
php artisan db:seed --class=MerchantSubscriptionSeeder
php artisan storage:link
```

Tidak memerlukan `migrate:fresh`. `storage:link` cukup sekali bila belum tersedia. Backend memakai public storage; kedua Nuxt memproksi `/storage/**`. Untuk storefront, `NUXT_BACKEND_URL` menunjuk URL Laravel saat menjalankan/build Nuxt; default `http://127.0.0.1:8000`.

| Email login | Usaha | Langganan |
| --- | --- | --- |
| `raka@grafikakarawang.test` | Percetakan Grafika Karawang | Aktif |
| `nisa@kertascikampek.test` | Toko Kertas Cikampek | Aktif |
| `yoga@aksaracetak.test` | Aksara Cetak | Kedaluwarsa, untuk uji penolakan akses |

Password ketiganya `DulankB2B!2026`, hanya untuk local/testing. Periode seed dihitung relatif saat pembuatan pertama; rerun mempertahankan data/edit yang sudah tercatat, sehingga tidak otomatis memperpanjang langganan yang kemudian habis.

Halaman `/login` menyediakan tombol **Isi akun percetakan** untuk mengisi email Raka dan password fixture, tanpa otomatis mengirim form. Tombol hanya tampil pada `import.meta.dev` dengan hostname localhost/127.0.0.1/loopback IPv6. Build production tidak menampilkan tombol dan membuang assignment kredensial development. Akun harus sudah dibuat melalui MerchantSubscriptionSeeder sebelum login.

Isi: 3 akun, 3 langganan, 3 profil dan pengaturan merchant, 2 kelompok, 2 jenis, 3 ukuran, 4 harga kertas, serta konten kalkulator. Salah satu katalog dimiliki Nisa agar keterkaitan toko publik dapat diuji. Tidak membuat data Product/order/stok. Tidak menyertakan foto palsu; unggah logo melalui profil. Identitas sintetis memakai nama alami, bukan label Contoh/Tahap. Seeder mandiri, tidak otomatis ditambahkan ke DatabaseSeeder; hanya local/testing. Provenance `merchant-b2b-2026`; rerun tidak menggandakan atau menimpa edit, benturan identitas/provenance hilang menghentikan transaksi untuk diperiksa.

## Evidence dan batas

- Backend penuh: 277 tes / 5.138 assertions PASS; setelah guard moderasi terakhir, target merchant + kalkulator 19 tes / 1.915 assertions PASS; Pint PASS.
- Storefront 4 Node tests PASS (layout manual, normalisasi satuan/request, isolasi viewer, SSR hasil/preview); admin 17 Node tests PASS; kedua typecheck dan production build PASS. Validator storefront migration PASS (55 sumber, 56 route, 230 komponen halaman), revision3 18/18; admin structure PASS (hashesChecked=false).
- Migration dan MerchantSubscriptionSeeder berhasil pada SQLite terpisah `storage/app/merchant-uat.sqlite`. Ini bukan database kerja lokal/hosting pengguna. Pengujian HTTP melalui proxy storefront juga dilakukan terpisah; hasil tambahan dicatat pada DONE.md. Akun kedaluwarsa diuji melalui proxy dan ditolak HTTP 403; SSR toko kertas mengembalikan HTTP 200 dengan nama toko dan Art Carton dari database.
- Computer Use dihentikan karena alat tidak dapat menentukan URL Chrome secara meyakinkan. Tidak mengklaim UAT visual desktop/mobile atau pemeriksaan console browser selesai. Admin legacy/static-source tidak tersedia untuk perbandingan visual baru.
- Pembayaran otomatis, pemindahan owner data lama, kebijakan perpanjangan/upgrade, geocoding wilayah, integrasi B2B pembelian/order dan pembersihan media lama tetap pekerjaan lanjutan. Ini bukan klaim seluruh webstore atau seluruh tahap global produk selesai.
- Branch backend/admin `Rama`, storefront `main`; NOT COMMITTED / NOT PUSHED. Perubahan awal package-lock.json storefront milik pengguna dipertahankan.


## Revisi desain storefront - 28 Oktober 2026

Atas instruksi pengguna, desain dikembalikan ke komponen sebelum integrasi (HEAD 8394144), dengan binding data/event API tetap aktif. Form potong kembali satu kolom mengikuti row/wrapper asli, tombol Centimeter/Milimeter, ribbon ukuran/custom, posisi tombol Hitung dan empty state/tabel asli. Input jarak tambahan dari revisi sebelumnya tidak ditampilkan; API tetap mendukung gap, UI asli menggunakan nilai default nol. Form profil kembali Judul, Nama Percetakan, pemilih wilayah bertab dalam satu input, Whatsapp, tombol ribbon display dan Update Profile. Field jenis usaha dan baris provinsi/kota/kecamatan/alamat terpisah hasil redesign dihapus dari UI; jenis usaha existing dipertahankan, profil baru memakai default printing_shop. Wilayah diambil melalui API regions, bukan salinan record lokal.

Header kembali kamera di atas avatar serta posisi informasi user/plan/tanggal semula. Upload menggunakan ikon kamera dan input file tersembunyi; tombol tambahan Ganti/Hapus Logo dari redesign tidak ditampilkan. Endpoint penghapusan logo tetap tersedia di backend. Header kalkulator mempertahankan gambar dan susunan teks asli dengan data merchant; isi dummy tidak dikembalikan.

Modal Generate kembali form plano/cetak di atas dan dua kolom col-lg-6: SVG/download di kiri, Qty/canvas/cetak/orientasi/duplikasi/sisa/Generate di kanan, tanpa accordion baru. SVG mengikuti skala 540 dan margin 30, warna/stroke sumber generate-plano.js, tetapi koordinatnya berasal dari API/manual layout yang divalidasi. Qty adalah jumlah kotak hasil susunan, bukan input otoritatif.

Berat kertas kembali memakai komponen Introduction/Title/UnitSelector/PaperSizeFields/PaperWeightField/QuantityFields/CalculationResults dan AddPaperModal asli. Data ukuran tetap dari API, kalkulasi berat tetap backend; riwayat beberapa hitungan, clear, tambah hitungan, hapus baris dan clipboard memakai state Vue. Ukuran custom pada modal bersifat input perhitungan sesi ini, bukan CRUD master ukuran database. Profil toko publik kembali memakai satu wrapper deskripsi semula. Tombol akun lokal di login tetap dipertahankan sesuai permintaan eksplisit sebelumnya.

Tidak mengubah CSS/font/aset global, backend atau database pada revisi ini. Penyesuaian boolean HTML/type safety existing tidak mengubah tampilan. Dokumentasi DONE/TO-DO disinkronkan. Status implemented/structure-and-API-contract tested, belum klaim visual pixel parity; UAT browser desktop/mobile tetap pending. Branch main; NOT COMMITTED / NOT PUSHED.


Validasi akhir revisi desain: 6 tes Node PASS (ownership/viewer, inisialisasi akun saat reload, normalisasi API, preview/koordinat, validasi susunan manual dan riwayat kalkulator berat), Nuxt typecheck/build PASS; migration validator PASS, revision3 18/18; diff check PASS. Perbandingan AST pada 12 komponen terhadap HEAD memastikan ID dan kelas CSS asli tetap tersedia, termasuk kontrol modal yang diekstrak ke komponen anak. Tidak ada diff pada app/assets, public/css atau public/images. Smoke HTTP/SSR produksi dengan akun SQLite UAT terpisah: profil/potong/berat HTTP 200 dengan nama merchant database dan kontrol asli tampil; proses ini tidak menulis database kerja. Inisialisasi user sebelum fetch merchant memperbaiki form yang sempat tidak tampil pada SSR reload awal. Pemeriksaan browser visual/interaksi desktop/mobile belum dilakukan karena kanal browser/Computer Use tidak tersedia pada tools sesi revisi ini; hasil HTTP/AST bukan klaim pixel parity. Main; NOT COMMITTED / NOT PUSHED.


## Revisi lanjutan: Revisi Custom, wilayah, toast dan kesatuan data kertas - 28 Oktober 2026

1. `/kalkulator-potong-kertas`: custom dimensions dirender hanya saat Custom aktif, seluruh opsi/disclosure ukuran disembunyikan, tombol menjadi Cancel; Cancel memulihkan pilihan dan menyembunyikan input. Skrip bersama Cetak Buku, Cetak Full Color dan Kalender memakai setter eksplisit untuk ukuran/isi custom, termasuk prioritas display:none agar tidak dikalahkan utilitas flex/responsive. Tidak mengubah desain form.
2. `/profile-merchant`: filter kabupaten/kecamatan sekarang memakai ID pilihan API, bukan nama label. Batas nama query backend menjadi 255 untuk kompatibilitas nama panjang. Dropdown menampilkan status kosong/error dengan jelas. Data kecamatan sebelumnya hanya 118 baris; DistrictReferenceSeeder menambah kecamatan dari referensi kode pos existing dan menghubungkan district_id yang kosong. Sumber legacy village_name pada dataset ini berisi nama kecamatan dan kode BPS 4 digit adalah kabupaten/kota, bukan kode kecamatan. Data existing tidak dihapus/ditimpa. Ini cakupan dataset lokal, bukan klaim master wilayah resmi nasional terbaru.
3. Host toast global front store mengikuti toast hijau/merah admin. Request simpan/hapus dan error aksi memberi feedback; read, login dan sukses perhitungan tidak menimbulkan toast CRUD. Alert hasil simpan profil dihilangkan; validasi foto/manual dan clipboard memakai toast. Status loading/akses/load error tetap menjadi konteks halaman, bukan pesan sukses aksi.
4. Tanda tanya memang berasal dari MerchantSubscriptionSeeder. Seeder baru memakai ASCII x. Command `dulank:repair-merchant-paper-labels` mempratinjau; `--apply` hanya mengubah nilai lama yang cocok persis pada provenance merchant-b2b-2026, mendahulukan backup privat, mempertahankan ID, relasi, edit pengguna, angka dan timestamp; aman direrun.
5. Admin `/kertas-group`, `/kertas-ukuran`, `/kertas-jenis`, `/kertas-harga` sekarang membaca paper_groups/paper_sizes/paper_types/paper_prices melalui PaperMarketplaceService pada endpoint calculator/listings?category=paper_*. Sebelumnya halaman tersebut membaca tabel listings yang terpisah/kosong. Kontrak row disesuaikan ke tabel yang sudah ada; tidak membuat salinan listing. `/kertas-*-self` tetap mengelola master yang sama. Hapus dari halaman marketplace diarahkan ke endpoint master sesuai kategori sehingga proteksi relasi berlaku; manage-source platform dinonaktifkan karena tidak memiliki partner, dan statistik sumber tidak menghitung ID kosong.

**Perubahan database lokal benar-benar dijalankan:** target diverifikasi MySQL 127.0.0.1/dulank. Backup district/postal sebelum perubahan: disk local private `backups/before-district-reference-repair-20261028-134610.json`. DistrictReferenceSeeder menambah 5.927 baris, total menjadi 6.045; Karawang memiliki 31 referensi yang mencakup data existing dan sumber kode pos. Label diperbaiki 6 record (3 ukuran + 3 harga), backup privat `backups/merchant-paper-labels-20261028-134623-d140b9f6-610e-4b74-b46e-c76fd070a796.json`; pratinjau setelah apply 0 perubahan. Tidak menjalankan migrate:fresh, menghapus data, menggandakan master kertas, membuat Product/order atau mengubah database hosting.

Perintah untuk development lain (sesi lokal ini sudah dijalankan):

```powershell
php artisan db:seed --class=DistrictReferenceSeeder
php artisan dulank:repair-merchant-paper-labels
php artisan dulank:repair-merchant-paper-labels --apply
```

DistrictReferenceSeeder membutuhkan tabel postal_codes/regencies yang sudah terisi dari referensi legacy; RegionSeeder memanggilnya untuk seed berikutnya. Jangan menjalankan ulang RegionSeeder pada database kerja hanya untuk perbaikan ini karena alur lamanya men-truncate postal_codes. Command label hanya local/testing; tidak menjalankan ulang seeder merchant untuk menimpa edit.

Validasi PASS: backend penuh 281 tes / 5.177 assertions; target 23 / 1.954; Pint. Storefront 10 Node tests (Custom/Cancel kedua arah, ID wilayah, toast, dan regresi integrasi); admin 18 Node tests termasuk pemilihan endpoint hapus canonical. Kedua Nuxt typecheck/build PASS; storefront migration/revision3 18/18 dan admin structure PASS (1.220 original files, hashesChecked=false); diff check PASS. Proxy front store live mengembalikan 31 kecamatan Karawang termasuk Cikampek, 3 nama ukuran tanpa ?, SSR potong HTTP 200 dengan custom input tidak ada dan preset tampil.

Browser desktop admin `/kertas-harga` setelah reload memperlihatkan 4 record dan nama ukuran dengan x. Computer Use kemudian berhenti ketika membuka tab baru karena URL browser tidak dapat dipastikan; tidak melanjutkan input UI. UAT browser front-store interaksi/mobile dan toast visual masih pending; AST/Node/HTTP bukan klaim pixel parity. Desain form/CSS/font/aset tetap dipertahankan, penambahan visual hanya host toast yang diminta pengguna. Architecture: page -> komponen/composable -> proxy/API -> controller/service -> master Eloquent. Partial BRVS / implemented/API-tested; backend/admin Rama, storefront main; NOT COMMITTED / NOT PUSHED.


## 17. Ukuran preview dan Qty PCS potong kertas - 28 Oktober 2026

**Catatan revisi:** aturan Qty membatasi/memotong preview dan penambahan gap pada Generate di bagian ini sudah dibatalkan atas permintaan pengguna; lihat bagian 18 untuk perilaku terkini.

Route `/kalkulator-potong-kertas`: angka 500 x 1000 berasal dari geometri API dalam mm (setara 50 x 100 cm), bukan ukuran cetak yang membesar. Hasil kalkulasi sekarang menyimpan satuan pilihan dan dimensi potong asli; seluruh input modal menampilkan satuan tersebut dan mengonversi edit kembali ke mm. Orientasi susunan tidak lagi menukar dimensi potong yang dimasukkan pengguna. Kontrol manual diisi dari susunan hasil API, termasuk strip sisa, orientasi dan gap, sehingga Generate tanpa perubahan mempertahankan susunan.

Sesuai klarifikasi pengguna, **Qty PCS adalah jumlah potongan dalam satu plano**, bukan total kebutuhan beberapa plano. Input tidak lagi readonly. Preview dan SVG mengikuti jumlah valid yang diisi, dengan kapasitas susunan tetap terpisah. Generate/download menolak nol, pecahan dan jumlah di atas kapasitas melalui toast; pengguna dapat mengubah ukuran/susunan jika memerlukan kapasitas lain. Kebutuhan Potongan optional diteruskan sebagai nilai awal Qty di modal (maksimal 5.000 sesuai batas preview API). Tidak membuat perhitungan jumlah plano atau mengubah data backend/database/seeder.

Wrapper, grid, ID, kelas, CSS/font/aset tetap; penjelasan satuan dan kapasitas ditambahkan pada label/teks yang sudah ada. Validasi: 13 tes Node PASS, Nuxt typecheck/build PASS, migration validator PASS, revision3 18/18, git diff --check PASS. Tes mencakup konversi 500 x 1000 mm ke 50 x 100 cm, edit dua kelompok input, orientasi asli vs susunan diputar, roundtrip gap/strip sisa dan Qty/batas/preview parsial. UAT interaksi browser desktop/mobile tetap pending; tes SSR bukan klaim pixel parity. Storefront main; NOT COMMITTED / NOT PUSHED.


## 18. Kembalikan formula Generate asli pengguna - 28 Oktober 2026

`/kalkulator-potong-kertas`: formula manual dikembalikan berdasarkan sumber asli `public/js/generate-plano.js`, yang juga tersedia di `legacy/static-source/js/generate-plano.js`. Kotak utama = duplikat X ? duplikat Y; sisa = sisa X ? sisa Y; Qty PCS = jumlah seluruh kotak yang digambar. Orientasi Portrait/Landscape serta offset Kanan/Bawah mengikuti sumber asli. Generate tidak lagi menambahkan gap atau memakai Qty sebagai pembatas jumlah kotak. Qty tetap input seperti desain awal, tetapi nilainya ditimpa hasil jumlah kotak setiap Generate. Aturan Qty per kapasitas dan pemotongan preview dari revisi 17 dihapus. Sesuai sumber asli, arah sisa '-' memakai titik awal; susunan manual tidak dipaksa muat plano. Batas pengaman eksekusi 5.000 kotak dan validasi angka tetap ada.

Data ukuran master/API dan akses langganan tetap terintegrasi. Tampilan satuan cm/mm dan dimensi potong asli tetap dipertahankan; ini konversi tampilan, bukan formula baru. Kebutuhan Potongan optional tidak lagi menentukan Qty preview. Formula backend hasil Hitung tidak diubah dalam revisi ini: sumber statis awal memakai hasil tabel placeholder, sementara formula asli yang ditemukan dan dipulihkan adalah pembentukan pola manual Generate.

Validasi: 13 tes Node PASS, termasuk perbandingan langsung jumlah dan seluruh koordinat dengan eksekusi skrip asli untuk kedua orientasi dan tiga pilihan arah sisa. Tidak mengubah backend/database, desain/CSS, atau menjalankan seeder. UAT browser belum dilakukan. Storefront main; NOT COMMITTED / NOT PUSHED.


### Revisi Qty readonly dan warna kotak sisa - 28 Oktober 2026

`/kalkulator-potong-kertas`: Qty PCS sekarang readonly dan selalu menampilkan jumlah hasil formula Generate asli. Setiap kotak manual menyimpan penanda utama/sisa; warna tidak lagi ditebak dari perbedaan lebar/orientasi. Kotak sisa selalu berisi krem `#fff7e6` dengan garis oranye `#e67e22`, termasuk saat orientasi kotak utama dan sisa sama. SVG download memakai warna yang sama dengan preview. Formula, posisi, jumlah kotak dan desain form tidak diubah. Validasi 14 tes Node PASS termasuk kedua orientasi dengan sisa seorientasi dan pembandingan formula asli. UAT browser masih pending.


## 19. Identitas kalkulator, pengantar inline, media dan dua akun lokal - 29 Oktober 2026

Halaman: `/kalkulator-potong-kertas`, `/kalkulator-berat-kertas`, `/kalkulator-percetakan`, `/profile-merchant` dan `/login` (helper hanya development localhost).

- Header ketiga kalkulator memakai nama, judul, alamat, WhatsApp dan avatar percetakan milik akun aktif yang sama. Pilihan displayOn tidak lagi menyembunyikan identitas pada header pribadi pemilik; pengaturan publik tetap disimpan. Jika belum ada logo/usaha, tampil inisial dan nama petunjuk, bukan gambar/nama percetakan dummy. Halaman percetakan memakai middleware auth seperti dua kalkulator lainnya; perhitungan percetakan selain identitas/pengantar tetap cakupan lama.
- Teks pengantar dapat diubah melalui ikon pensil tepat di bawah judul/spesifikasi, lalu Simpan/Batal. Override per halaman tersimpan di `merchant_settings.calculator_introductions` (JSON nullable), bukan menimpa artikel platform milik admin. Endpoint `PATCH /api/v1/merchant-profile/introduction` memvalidasi page/text dan mengharuskan pemilik berlangganan aktif dengan merchant_profile; ID merchant dari browser tidak dipakai. Halaman tanpa override memakai pengantar default yang relevan; lorem ipsum berat kertas diganti. Draft dipertahankan saat request gagal, reset saat pemilik berubah, dan ditampilkan sebagai teks escaped.
- Penyebab foto 404 lokal: junction `public/storage` menunjuk ke `C:/Users/Lenovo/Documents/dulank-backend/storage/app/public`, folder project lama. Junction diganti hanya tautannya ke `C:/Users/Lenovo/Documents/dulank/dulank-backend/storage/app/public`; file asli dipertahankan. storage:link --force Laravel tidak mengenali junction Windows lama, sehingga perbaikan menggunakan penghapusan junction nonrekursif setelah pengecekan path/reparse point, lalu membuat junction baru. URL upload logo disk public dikembalikan relatif `/storage/...` agar memakai proxy front store, bukan APP_URL/origin lama. Foto existing terverifikasi HTTP 200 image/jpeg lewat backend dan storefront.
- Login helper menjadi **Akun 1** (Raka, `raka@grafikakarawang.test`, sudah punya percetakan) dan **Akun 2** (Dimas, `dimas@ruangcetak.test`, berlangganan aktif tanpa percetakan). Password fixture sama: `DulankB2B!2026`. Tombol hanya mengisi form, tidak auto-login; tidak tampil di production/host nonlokal. MerchantOnboardingSeeder membuat akun kedua dan subscription saja, tidak membuat Partner/Product/order, memproteksi konflik identitas/provenance dan tidak menimpa edit/password/usaha yang kemudian dibuat. Seeder utama merchant memanggilnya untuk fresh seed berikutnya. Akun lain yang sudah ada dipertahankan.
- Toast dirombak menjadi kartu ringkas kanan bawah, hijau untuk sukses/merah untuk error, judul/pesan jelas, tombol tutup, jarak/font eksplisit agar tidak terpengaruh style paragraf legacy. Ikon memakai SVG sehingga tidak bergantung font icon. Durasi/deduplikasi, aria-live, mode reduced motion dan hide saat print dipertahankan.

**Sudah dijalankan di database lokal MySQL 127.0.0.1/dulank:** migration nullable khusus pengantar dan MerchantOnboardingSeeder. Tidak menjalankan migrate:fresh, seed ulang master/product, atau mengubah hosting. Untuk environment development lain:

```powershell
cd dulank-backend
php artisan migrate --no-interaction
php artisan db:seed --class=MerchantOnboardingSeeder --no-interaction
```

Validasi PASS: backend penuh **285 tes / 5.217 assertions**; target 22 / 1.960; frontend **17 tes Node**, Nuxt typecheck/build; migration validator, revision3 18/18, Pint dan diff check. Tes baru mencakup isolation pengantar/halaman, batas input, pemilik belum punya usaha/frozen/expired, URL upload relatif, rerun akun onboarding setelah punya usaha, header dan tombol login hanya localhost/dev. Smoke HTTP SSR ketiga kalkulator 200 dengan nama/avatar/pensil dari merchant; login API Akun 2 active=true dan merchant=null. Token smoke dibuat sementara lalu dicabut.

UAT browser desktop memperlihatkan dua tombol login, akun 1 dapat masuk, logo unggahan asli dan nama usaha muncul di kalkulator potong, editor pensil terbuka. Saat menargetkan Batal, otomasi justru memicu Simpan teks default yang sama; override yang tidak disengaja dikembalikan persis ke null setelah verifikasi nilai cocok dan backup privat `backups/calculator-introduction-ui-check-20261029-195845.json`. Interaksi berikutnya dihentikan ketika terdeteksi input pengguna/jendela diminimalkan. Tidak mengklaim UAT Save/Batal, toast visual dan mobile lengkap; skenario persist/isolation sudah diuji otomatis. Backend Rama, storefront main; NOT COMMITTED / NOT PUSHED.


## 20. Pendaftaran percetakan sebelum akses kalkulator dan Akun 3 - 29 Oktober 2026

**Alur:** buka workspace kalkulator -> login jika belum masuk -> jika belum punya usaha, redirect ke `/daftar-percetakan` (halaman baru, bukan profile-merchant). Form hanya meminta foto profil opsional (JPG/PNG/WebP maksimal 2 MB), nama percetakan, alamat lengkap dan WhatsApp wajib. Setelah submit sukses, langsung ke `/profile-merchant`. Pembeli biasa tetap dapat berbelanja; membuat percetakan/menggunakan kalkulator memerlukan langganan aktif sesuai aturan B2B semula. Form menampilkan informasi tersebut dan menonaktifkan submit bagi akun tanpa hak merchant_profile.

**Route terproteksi:** `/kalkulator-potong-kertas`, `/kalkulator-berat-kertas`, `/kalkulator-percetakan`, `/hitung-plano`, `/mesin-cetak`, `/mesin-laminasi`, `/mesin-pond`, `/mesin-poli`, `/pengaturan-keuntungan`, `/semua-percetakan`, `/semua-toko-kertas`, `/semua-kertas`, `/support-ticket-kalkulator`, `/support-ticket-detail-kalkulator` dan `/profile-merchant`. Guard global memeriksa viewer/owner dari API sebelum render; akses URL langsung, pergantian akun dan variasi huruf besar/trailing slash juga dilindungi. Gagal memeriksa akses menutup halaman dengan 503, tidak meloloskan fitur. Profil usaha existing tetap dapat dibaca saat subscription expired; fitur operasional dialihkan ke profil dengan informasi aktivasi/perpanjangan. Storefront produk/cart/support biasa dan profil publik `/store`/`/store-kertas` tetap terpisah; endpoint katalog dan konten umum bukan kalkulasi berbayar.

**Backend:** `POST /api/v1/merchant-profile/onboarding` memakai owner dari token, validasi nama/alamat/WhatsApp/file dan lock user dalam transaksi. Pendaftaran ganda 409 tanpa menimpa usaha lama; type printing_shop, owner, status Inactive dan pengaturan default ditetapkan server. Foto gagal/transaksi gagal tidak meninggalkan data setengah jadi. Status Inactive mengatur publikasi, bukan memblokir kalkulator pemilik yang berlangganan. Save profil berikutnya menerima alamat teks tanpa mewajibkan provinsi/kota terstruktur yang belum dipilih. Kalkulasi/ukuran/CRUD `/api/v1/calculator/*` terkait sekarang membutuhkan Partner milik akun, bukan subscription saja: pelanggan aktif tanpa usaha menerima 409, tanpa hak/langganan 403. Formula potong/berat dan desain halaman existing tidak diubah.

**Tiga tombol login khusus development localhost:**

| Tombol | Akun | Kondisi awal |
|---|---|---|
| Akun 1 | `raka@grafikakarawang.test` | Berlangganan, sudah punya percetakan |
| Akun 2 | `dimas@ruangcetak.test` | Berlangganan, belum punya percetakan |
| Akun 3 | `sinta@belanjacetak.test` | Pembeli biasa, tanpa subscription/percetakan |

Password fixture ketiganya `DulankB2B!2026`; tombol hanya mengisi form. MerchantOnboardingSeeder menambahkan pembeli Sinta, tetap mempertahankan data/password/percetakan yang kemudian dibuat untuk Dimas. MerchantSubscriptionSeeder memanggil seeder ini untuk fresh berikutnya. Nisa/Yoga atau akun lain existing tidak dihapus hanya karena helper login berjumlah tiga.

Seeder **sudah dijalankan** setelah memverifikasi target MySQL 127.0.0.1/dulank. Akun 1 aktif+punya usaha, Akun 2 aktif+belum punya usaha, Akun 3 tidak aktif subscription+belum punya usaha terverifikasi. Tidak ada migration baru, migrate:fresh, pengisian Product/order atau perubahan hosting. Untuk development lain cukup:

```powershell
cd dulank-backend
php artisan db:seed --class=MerchantOnboardingSeeder --no-interaction
```

Validasi: backend penuh **290 tes / 5.286 assertions PASS**, termasuk 5 tes onboarding baru dan fixture tes kalkulator lama disesuaikan agar memiliki usaha sebelum menguji 404/numeric result. Frontend **20 tes Node PASS**, typecheck/build, migration/revision3 18/18 PASS; validator folder sengaja menjadi 56 (55 legacy + form baru), route 57. Smoke HTTP SSR login ketiga akun: akun 1 keenam route workspace sampel 200; akun 2/3 route yang sama 302 ke form; form user baru 200 dan akun 1 diarahkan ke profil. API ukuran masing-masing 200/409/403; akun pembeli product-list/cart 200. Token smoke sementara dicabut. Registrasi dengan/tanpa foto diuji pada database tes terisolasi; Akun 2 lokal tetap tanpa usaha agar pengguna dapat mencoba alur sendiri. UAT browser/mobile form baru, upload dan navigasi submit tetap pending; tidak mengklaim pixel parity. Backend Rama, storefront main; NOT COMMITTED / NOT PUSHED.


## 21. Samakan input alamat pendaftaran dan profil merchant - 29 Oktober 2026

Route `/daftar-percetakan` sekarang memakai pemilih alamat yang sama dengan `/profile-merchant`: pencarian, tab Provinsi -> Kota -> Kecamatan, pilihan API bertingkat, tombol hapus dan reset kota/kecamatan saat induk diganti. UI profil diekstrak ke `CommonRegionAddressInput.vue`, bukan menyalin dua implementasi; tipe model alamat dibuat generik agar dapat dipakai form lain. ID legacy profil tetap, instance pendaftaran memakai prefix registration agar tidak bentrok. Style lokal komponen mengikuti aturan lama sehingga form pendaftaran tidak bergantung stylesheet khusus profil. Form alamat baru/yang dikerjakan berikutnya mengikuti pola ini sesuai arahan pengguna; form checkout/billing/admin existing tidak diklaim sudah dimigrasikan seluruhnya pada revisi ini.

Pendaftaran mengirim dan backend menyimpan province/city/district terpilih bersama address. Field wilayah ditambahkan sebagai nullable untuk kompatibilitas record/request alamat lama; tidak membuat migration, seeder atau mengubah data existing. Alamat lama tetap aman dan dapat diubah melalui pemilih yang sama. Hapus field mengosongkan pilihan wilayah; kontrol tidak mengubah data ketika disabled, dan Enter memilih wilayah tanpa mengirim form pendaftaran.

Validasi: 21 tes frontend Node PASS; backend target 23 tes / 1.993 assertions PASS termasuk roundtrip wilayah pendaftaran; typecheck/build, migration/revision3 18/18, Pint dan diff check PASS. Smoke HTTP profil lokal menunjukkan field dan tab pemilih shared ter-render. Saat memeriksa Akun 2, akun tersebut sudah memiliki usaha dan diarahkan ke profil oleh guard; usaha pengguna dipertahankan, tidak dikosongkan untuk tes. UAT klik/search/save pada browser/mobile masih pending; tes Node/SSR bukan klaim pixel parity. Backend Rama, storefront main; NOT COMMITTED / NOT PUSHED.
