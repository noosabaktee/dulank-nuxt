# Route Migration

> **28 Oktober 2026:** route integrasi profil merchant, kalkulator potong/berat dan profil toko publik beserta kontrak admin/backend terdapat di [MERCHANT_B2B.md](MERCHANT_B2B.md). Route tabel di bawah tetap dipertahankan.

| Static source | Nuxt route | Page component |
|---|---|---|
| `404.html` | `/404` | `404Page` |
| `address.html` | `/address` | `AddressPage` |
| `billing.html` | `/billing` | `BillingPage` |
| `blog.html` | `/blog` | `BlogPage` |
| `cart.html` | `/cart` | `CartPage` |
| `categories.html` | `/categories` | `CategoriesPage` |
| `cetak-buku.html` | `/cetak-buku` | `CetakBukuPage` |
| `cetak-full-color.html` | `/cetak-full-color` | `CetakFullColorPage` |
| `checkout.html` | `/checkout` | `CheckoutPage` |
| `contact.html` | `/contact` | `ContactPage` |
| `faqs.html` | `/faqs` | `FaqsPage` |
| `forgot-password.html` | `/forgot-password` | `ForgotPasswordPage` |
| `history.html` | `/history` | `HistoryPage` |
| `hitung-plano.html` | `/hitung-plano` | `HitungPlanoPage` |
| `index.html` | `/` | `IndexPage` |
| `invoice-view.html` | `/invoice-view` | `InvoiceViewPage` |
| `kalender.html` | `/kalender` | `KalenderPage` |
| `kalkulator-berat-kertas.html` | `/kalkulator-berat-kertas` | `KalkulatorBeratKertasPage` |
| `kalkulator-percetakan.html` | `/kalkulator-percetakan` | `KalkulatorPercetakanPage` |
| `kalkulator-potong-kertas.html` | `/kalkulator-potong-kertas` | `KalkulatorPotongKertasPage` |
| `login.html` | `/login` | `LoginPage` |
| `mesin-cetak.html` | `/mesin-cetak` | `MesinCetakPage` |
| `mesin-laminasi.html` | `/mesin-laminasi` | `MesinLaminasiPage` |
| `mesin-poli.html` | `/mesin-poli` | `MesinPoliPage` |
| `mesin-pond.html` | `/mesin-pond` | `MesinPondPage` |
| `modal-percetakan.html` | `/modal-percetakan` | `ModalPercetakanPage` |
| `next.html` | `/next` | `NextPage` |
| `order-view.html` | `/order-view` | `OrderViewPage` |
| `orders.html` | `/orders` | `OrdersPage` |
| `our-client.html` | `/our-client` | `OurClientPage` |
| `pengaturan-keuntungan.html` | `/pengaturan-keuntungan` | `PengaturanKeuntunganPage` |
| `post.html` | `/post` | `PostPage` |
| `print-order.html` | `/print-order` | `PrintOrderPage` |
| `product-list.html` | `/product-list` | `ProductListPage` |
| `profile-kalkulator.html` | `/profile-merchant` | `ProfileMerchantPage` |
| `profile.html` | `/profile` | `ProfilePage` |
| `quotation-add.html` | `/quotation-add` | `QuotationAddPage` |
| `quotation-send.html` | `/quotation-send` | `QuotationSendPage` |
| `quotation-success.html` | `/quotation-success` | `QuotationSuccessPage` |
| `quotation-view.html` | `/quotation-view` | `QuotationViewPage` |
| `quotation.html` | `/quotation` | `QuotationPage` |
| `register.html` | `/register` | `RegisterPage` |
| `result-page.html` | `/result-page` | `ResultPagePage` |
| `semua-kertas.html` | `/semua-kertas` | `SemuaKertasPage` |
| `semua-percetakan.html` | `/semua-percetakan` | `SemuaPercetakanPage` |
| `semua-toko-kertas.html` | `/semua-toko-kertas` | `SemuaTokoKertasPage` |
| `store-kertas.html` | `/store-kertas` | `StoreKertasPage` |
| `store.html` | `/store` | `StorePage` |
| `success.html` | `/success` | `SuccessPage` |
| `support-ticket-detail-kalkulator.html` | `/support-ticket-detail-kalkulator` | `SupportTicketDetailKalkulatorPage` |
| `support-ticket-detail.html` | `/support-ticket-detail` | `SupportTicketDetailPage` |
| `support-ticket-kalkulator.html` | `/support-ticket-kalkulator` | `SupportTicketKalkulatorPage` |
| `support-ticket.html` | `/support-ticket` | `SupportTicketPage` |
| `verify-email.html` | `/verify-email` | `VerifyEmailPage` |
| `wishlist.html` | `/wishlist` | `WishlistPage` |

Compatibility aliases: `/catalog` → product list, `/kontak` → contact, `/kalkulator` → kalkulator percetakan.


## Pendaftaran percetakan - 29 Oktober 2026

| Sumber | Route | Komponen |
|---|---|---|
| Form baru, bukan halaman profil legacy | `/daftar-percetakan` | `Pages/DaftarPercetakan/BusinessRegistrationForm.vue` |

Workspace kalkulator diproteksi oleh `app/middleware/merchant.global.ts` dan daftar di `app/utils/merchant-routes.ts`. Tanpa usaha: redirect ke form pendaftaran; setelah submit berhasil: `/profile-merchant`. Tanpa sesi: login. Form tanpa langganan aktif menampilkan penjelasan dan menonaktifkan submit; pembeli tetap dapat membuka produk/keranjang dan profil toko publik. Detail endpoint dan akun pada [MERCHANT_B2B.md](MERCHANT_B2B.md), bagian 20.
