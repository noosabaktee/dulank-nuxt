<script setup lang="ts">
useLegacyPage({
  "title": "Checkout",
  "styles": [
    "/css/style.css",
    "/css/checkout.css",
    "/css/pages/quotation-add-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/checkout.js",
    "/js/pages/quotation-add-events.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-quotation-add">

<header>
<nav class="navbar bg-warning">
<div class="container d-flex justify-content-between">
<a class="navbar-brand text-white fw-bold" href="/">Dulank.</a>
<span class="navbar-brand text-white fw-bold">Request for Quotation</span>
<a class="navbar-brand btn my-btn-primary text-white fw-bold" href="/checkout">Lanjut ke Checkout</a>
</div>
</nav>
</header>
<main class="container py-4">
<div class="row">
<div class="col-md-8">

<div class="pb-2 border-bottom border-2 mb-4" id="shipping-section">
<div class="row">
<div class="col-md-6">
<h4 class="fs-5 ms-3">Checkout</h4>
<div class="mt-1 ms-4">
<h4 class="fs-6 text-dark mt-2">Bill To:</h4>
<div class="bill-to-address">
<div class="align-items-center">
<span class="fw-semibold text-dark">Ahmad Dhani</span>
<span class="text-secondary ms-2">(+62) 852053769 </span>
<span class="badge my-bg-primary text-white align-middle ms-2">Office</span>

</div>
<div class="text-standard text-dark small mt-1">
                    Toko Kelontong Depan Desa Teluk Jambe, <br/>
                    515 Sarah Shore Suite 828, Port Kennethstad (Depan Stasiun) <br/>
                    KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                  </div>
</div>
<button class="btn my-btn-outline-primary float-end mb-2" data-bs-target="#addressSelectBillModal" data-bs-toggle="modal" type="button">Pilih Alamat Lainnya</button>
</div>
</div>
<div class="col-md-6">
<div class="mt-1 ms-4">
<div>
<div class="d-flex mt-3 align-items-center">
<h4 class="fs-6 text-dark mt-2">Shiping Method:</h4>
<div class="form-check ms-3 align-items-center">
<input checked="" class="form-check-input" data-js-click="quotation-add-001" id="radioShipping1" name="radioShipping" type="radio"/>
<label class="form-check-label text-standard" for="radioShipping1">
                              Shipping
                            </label>
</div>
<div class="form-check ms-3 align-items-center">
<input class="form-check-input" data-js-click="quotation-add-002" id="radioShipping2" name="radioShipping" type="radio"/>
<label class="form-check-label text-standard" for="radioShipping2">
                              Pickup
                            </label>
</div>
</div>
</div>
<div id="shipping-method">
<div class="shipping-address">
<div class="align-items-center">
<span class="fw-semibold text-dark">Ahmad Dhani</span>
<span class="text-secondary ms-2">(+62) 852053769 </span>
<span class="badge my-bg-primary text-white align-middle ms-2">Office</span>

</div>
<div class="text-standard text-dark small mt-1">
                      Toko Kelontong Depan Desa Teluk Jambe, <br/>
                      515 Sarah Shore Suite 828, Port Kennethstad (Depan Stasiun) <br/>
                      KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                    </div>
</div>
<button class="btn my-btn-outline-primary float-end mb-2" data-bs-target="#addressSelectShippingModal" data-bs-toggle="modal" type="button">Ubah Alamat</button>
</div>
<div class="d-none" id="pickup-method">
<div id="pickup-method-address">
<span class="fw-semibold text-dark">Dulank Pickup 2 <span class="text-dark">(081906855554)</span></span>
<div class="mt-1 mb-2 text-color text-standard pickup-list-value">
                      Toko Kelontong Depan Desa Teluk Jambe<br>
                      515 Sarah Shore Suite 828, Port Kennethstad, Iowa, TH,<br>
                      KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                    </br></br></div>
</div>
<button class="btn my-btn-outline-primary float-end mb-2" id="pickup-btn-select" type="button">Pilih Alamat Pickup</button>
</div>
</div>
</div>
</div>
</div>

<div class="bg-light p-3 d-none" id="pickup-list">
<div class="d-flex justify-content-between align-items-center mb-2">
<span class="fw-semibold fs-6">Pilih Alamat Pengiriman</span>
</div>
<div class="mb-3">
<div class="border-bottom pb-2 mb-2">
<div class="pickup-list-value">
<span class="fw-semibold text-dark">Dulank Pickup 1 <span class="text-dark">(081906855554)</span></span>
<div class="mt-1 mb-2 text-color text-standard">
                  Toko Kelontong Depan Desa Teluk Jambe<br>
                  515 Sarah Shore Suite 828, Port Kennethstad, Iowa, TH,<br>
                  KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                </br></br></div>
</div>
<div class="text-end">
<button class="btn my-btn-outline-primary btn-sm px-4 select-pickup-btn" type="button">Pilih</button>
</div>
</div>
</div>
<div class="mb-3">
<div class="border-bottom pb-2 mb-2">
<div class="pickup-list-value">
<span class="fw-semibold text-dark">Dulank Pickup 2 <span class="text-dark">(081906855554)</span></span>
<div class="mt-1 mb-2 text-color text-standard">
                  Toko Kelontong Depan Desa Teluk Jambe<br/>
                  515 Sarah Shore Suite 828, Port Kennethstad, Iowa, TH,<br/>
                  KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                </div>
</div>
<div class="text-end">
<button class="btn my-btn-primary btn-sm px-4 select-pickup-btn" type="button">Dipilih</button>
</div>
</div>
</div>
</div>
<div class="mb-4" id="product-section">

<div class="bg-white rounded-2 border border-custom p-0">

<div class="px-4 py-3 rounded-bottom">
<div class="row mb-2">
<div class="col-md-4 mb-2 mb-md-0">
<span class="text-standard fw-semibold">Informasi Faktur Pajak</span>
</div>
<div class="col-md-8 mb-2 mb-md-0">
<span class="text-standard">
                    85.836.002.7-408.000 <br/>
                    CV. DULANK SEJAHTERA CIDA <br/>
                    JL. ARIF RAHMAN HAKIM, NAGASARI, KARAWANG BARAT, KAB. KARAWANG, JAWA BARAT
                  </span>
</div>
</div>
<div class="row mb-2">
<div class="col-md-4 mb-2 mb-md-0">
<span class="text-standard fw-semibold">Preferensi Pengiriman</span>
</div>
<div class="col-md-8 mb-2 mb-md-0 d-flex">
<div class="form-check align-items-center">
<input checked="" class="form-check-input" id="lengkap" name="radioPengiriman" type="radio"/>
<label class="form-check-label text-standard" for="lengkap">
                      Pengiriman Lengkap
                    </label>
</div>
<div class="form-check ms-3 align-items-center">
<input class="form-check-input" id="sebagian" name="radioPengiriman" type="radio"/>
<label class="form-check-label text-standard" for="sebagian">
                      Pengiriman Sebagian
                    </label>
</div>
</div>
</div>
</div>
</div>
<div class="px-4 mt-3 pt-3 pb-2 border-bottom border-custom bg-white">
<div class="align-items-center">
<div class="d-flex">
<img alt="Kaos" class="object-fit-cover rounded-2" height="64" src="/images/brosur.jpg" width="64"/>
<div class="ps-2">
<div class="fw-semibold text-color small">Brosur PPDB SMAN 1 Bandung</div>
<div class="fw-semibold text-color text-standard">Brosur Full Color</div>
<div class="text-secondary text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</div>
<div class="text-color text-standard">Art Work : Ada file ready to print</div>
<div class="text-color text-standard">Hasil Cetak : Warna standard CMYK</div>
<div class="text-color text-standard">Note : </div>
<span class="text-color text-standard">Lama Proses Produki (PO)</span>
<span class="text-standard border border-2 p-1 my-text-primary d-inline-block" id="inline-style-quotation-add-001">5-10 Hari</span><br/>
<span class="fw-semibold text-dark text-standard">Rp65.000</span>
<span class="text-color text-standard">x2</span><br/>
</div>
</div>
<div class="text-end">
<span class="fw-semibold text-dark" id="inline-style-quotation-add-002">Rp130.000</span>
</div>
</div>
<div class="align-items-center">
<div class="d-flex">
<img alt="Kaos" class="object-fit-cover rounded-2" height="64" src="/images/yasin.jpg" width="64"/>
<div class="ps-2">
<div class="fw-semibold text-color small">Yasin Tahlil 100 Hari</div>
<div class="fw-semibold text-color text-standard">Yasin</div>
<div class="text-secondary text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</div>
<div class="text-color text-standard">Art Work : Belum ada designs</div>
<div class="text-color text-standard">Hasil Cetak : Warna standard CMYK</div>
<div class="text-color text-standard">Note : </div>
<span class="text-color text-standard">Lama Proses Produki (PO)</span>
<span class="text-standard border border-2 p-1 my-text-primary d-inline-block" id="inline-style-quotation-add-003">5-10 Hari</span><br/>
<span class="fw-semibold text-dark text-standard">Rp65.000</span>
<span class="text-color text-standard">x1</span>
</div>
</div>
<div class="text-end">
<span class="fw-semibold text-dark" id="inline-style-quotation-add-004">Rp65.000</span>
</div>
</div>
</div>
</div>
</div>
<div class="col-md-4 h-100 position-sticky top-0">
<div class="mb-2" id="payment-section">
<div class="bg-white rounded-2 border border-custom">
<div class="px-4 pt-3">
<span class="fw-semibold text-color">Punya kode voucher?</span>
<div class="input-group mt-1">
<input aria-describedby="voucher-apply" aria-label="Recipient’s username" class="form-control" id="voucher-input" placeholder="Enter your voucher" type="text"/>
<button class="text-standard input-group-text my-text-primary" id="voucher-apply" type="button">Apply</button>
</div>
<div class="alert alert-warning text-standard text-center mt-2 d-none" id="voucher-info" role="alert">
                  Kode Promo Sukses!
                </div>
<span class="text-standard text-primary" data-bs-target="#voucherModal" data-bs-toggle="modal" role="button">Kupon promo yang tersedia</span>
</div>
<div class="row align-items-center px-4 pt-3 pb-2">
<div class="col">
<span class="fw-semibold text-color">Metode Pembayaran</span>
</div>
<div class="col-auto">
<span class="text-secondary small me-2">Transfer Bank</span><br/>
<span class="text-secondary small me-2">Bank BCA 109-2993242</span><br/>
<span class="text-secondary small me-2">A/n PT. Dulank Semesta Cida</span>
</div>
</div>
<div class="px-4 pt-3 pb-2">
<div class="row">
<span class="fw-semibold text-color">Rangkuman Pesanan</span>
<div class="col">
<table class="table table-borderless mb-0 w-100 text-color" id="inline-style-quotation-add-005">
<tbody class="text-standard">
<tr>
<td class="ps-0 pe-3">Subtotal sebelum PPN</td>
<td class="text-end">Rp195.000</td>
</tr>
<tr>
<td class="ps-0 pe-3">Biaya Pengiriman</td>
<td class="text-end">Rp20.000</td>
</tr>
<tr>
<td class="ps-0 pe-3">PPN (11%)</td>
<td class="text-end">Rp9.750</td>
</tr>
<tr>
<td class="ps-0 pe-3">Diskon Voucher</td>
<td class="text-end">-Rp10.000</td>
</tr>
<tr class="border-top">
<td class="ps-0 pe-3 fw-semibold my-text-primary fs-6">Total Pesanan</td>
<td class="text-end fw-bold my-text-primary fs-6">Rp205.000</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="bg-light px-4 py-3 rounded-bottom">
<label class="text-standard">Remarks</label>
<input class="form-control my-2" placeholder="add your note" type="text"/>
<div class="mb-2">
<input class="form-check-input border-3 fs-5 me-1" type="checkbox"/>
<span class="text-standard">I have read and agree to the Terms of Service</span>
</div>
<button class="btn btn-warning w-100 px-4" type="button">Save & Email Quotation</button>
</div>
</div>
</div>

<div class="bg-light border">
<p class="text-standard p-2" id="inline-style-quotation-add-006">Promo GRATIS ONGKIR kirim ke Jakarta, Bogor, Bekasi, Karawang, Purwakarta dengan minimum pembelian Rp500.000</p>
</div>
<div>
<p class="text-standard text-center p-2">Dengan melakukan pemesanan ini, Anda setuju dengan <a class="text-primary" data-bs-target="#privacyPolicyModal" data-bs-toggle="modal" href="#">kebijakan privasi</a> dan <a class="text-primary" data-bs-target="#termsModal" data-bs-toggle="modal" href="#">syarat dan ketentuan</a> dulank.com</p>
</div>
</div>
</div>
</main>
<footer>
<div class="container">
<div class="text-center mb-5">

<span class="fs-5">Got Questions? Call us</span>
<span class="contact-phone fs-5"><a href="tel:+67041390762">+62877 8813 1400 </a></span>
</div>
</div>
</footer>

<div aria-hidden="true" aria-labelledby="addressSelectBillModalLabel" class="modal fade text-standard" id="addressSelectBillModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="addressSelectBillModalLabel">Alamat Saya</h5>
<div class="d-flex align-items-center">
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
</div>
<div class="modal-body">

<div class="address-bill-to-list">
<div class="d-flex align-items-start py-3 border-bottom">
<input checked="" class="form-check-input mt-1 me-2 p-2" id="addressBill1" name="addressBill" type="radio"/>
<div class="flex-grow-1 address-bill-to-list-value" role="button">
<div class="align-items-center">
<span class="fw-semibold text-dark">Ahmad Dhani</span>
<span class="text-secondary ms-2">(+62) 852053769 </span>
<span class="badge my-bg-primary text-white align-middle ms-2">Office</span>

</div>
<div class="text-standard text-dark small mt-1">
                        Toko Kelontong Depan Desa Teluk Jambe, <br/>
                        515 Sarah Shore Suite 828, Port Kennethstad (Depan Stasiun) <br/>
                        KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                      </div>
</div>
</div>
<div class="d-flex align-items-start py-3">
<input class="form-check-input mt-1 me-2 p-2" id="addressBill2" name="addressBill" type="radio"/>
<div class="flex-grow-1 address-bill-to-list-value" role="button">
<div class="d-flex align-items-center">
<span class="fw-semibold text-dark">Once Mekel</span>
<span class="text-secondary ms-2">(+62) 852053769 </span>
<span class="badge my-bg-primary text-white align-middle ms-2">Home</span>
</div>
<div class="text-standard text-dark small mt-1">
                        Toko Kelontong Depan Desa Teluk Jambe, <br/>
                        515 Sarah Shore Suite 828, Port Kennethstad (Depan Stasiun) <br/>
                        KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                      </div>
</div>
</div>
</div>
<div class="text-end mt-2">
<button aria-label="Close" class="btn my-btn-primary w-50" data-bs-dismiss="modal" id="save-bill-to-address" type="button">Simpan</button>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="addressSelectShippingModalLabel" class="modal fade text-standard" id="addressSelectShippingModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="addressSelectShippingModalLabel">Alamat Saya</h5>
<div class="d-flex align-items-center">
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
</div>
<div class="modal-body">

<div class="address-shipping-list">
<div class="d-flex align-items-start py-3 border-bottom">
<input checked="" class="form-check-input mt-1 me-2 p-2" id="addressShipping1" name="addressShipping" type="radio"/>
<div class="flex-grow-1 address-shipping-list-value" role="button">
<div class="align-items-center">
<span class="fw-semibold text-dark">Ahmad Dhani</span>
<span class="text-secondary ms-2">(+62) 852053769 </span>
<span class="badge my-bg-primary text-white align-middle ms-2">Office</span>

</div>
<div class="text-standard text-dark small mt-1">
                        Toko Kelontong Depan Desa Teluk Jambe, <br/>
                        515 Sarah Shore Suite 828, Port Kennethstad (Depan Stasiun) <br/>
                        KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                      </div>
</div>
</div>
<div class="d-flex align-items-start py-3">
<input class="form-check-input mt-1 me-2 p-2" id="addressShipping2" name="addressShipping" type="radio"/>
<div class="flex-grow-1 address-shipping-list-value" role="button">
<div class="d-flex align-items-center">
<span class="fw-semibold text-dark">Once Mekel</span>
<span class="text-secondary ms-2">(+62) 852053769 </span>
<span class="badge my-bg-primary text-white align-middle ms-2">Home</span>
</div>
<div class="text-standard text-dark small mt-1">
                        Toko Kelontong Depan Desa Teluk Jambe, <br/>
                        515 Sarah Shore Suite 828, Port Kennethstad (Depan Stasiun) <br/>
                        KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                      </div>
</div>
</div>
</div>
<div class="text-end mt-2">
<button aria-label="Close" class="btn my-btn-primary w-50" data-bs-dismiss="modal" id="save-shipping-address" type="button">Simpan</button>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="voucherModalLabel" class="modal fade" id="voucherModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header border-0 pb-0">
<h5 class="modal-title fw-semibold" id="voucherModalLabel">Promo yang sedang berlangsung</h5>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body" id="inline-style-quotation-add-007">
<div class="card-header bg-transparent border-0 px-0 pt-0 pb-2">
<a aria-controls="promoBrandCollapse" aria-expanded="true" class="fw-semibold d-block text-dark text-decoration-none" data-bs-toggle="collapse" href="#promoBrandCollapse" role="button">
              Promo Brand
              <span class="float-end"><i class="bi bi-chevron-up"></i></span>
</a>
</div>
<div class="collapse" id="promoBrandCollapse">
<div class="card-body px-0 py-0" id="inline-style-quotation-add-008">

<div class="border-bottom py-2 d-flex justify-content-between align-items-center">
<div>
<div class="fw-semibold" id="inline-style-quotation-add-009">Diskon 10% Brand Homedoki</div>
<div class="text-secondary small">Kode Voucher: <span class="fw-semibold voucher-value">HOMEDOKI10</span></div>
</div>
<button class="btn btn-outline-danger btn-sm fw-semibold px-3 py-1 ms-2 copy-voucher" type="button">SALIN</button>
</div>
<div class="border-bottom py-2 d-flex justify-content-between align-items-center">
<div>
<div class="fw-semibold" id="inline-style-quotation-add-010">Diskon 10% Brand Homedoki</div>
<div class="text-secondary small">Kode Voucher: <span class="fw-semibold voucher-value">HOMEDOKI10</span></div>
</div>
<button class="btn btn-outline-danger btn-sm fw-semibold px-3 py-1 ms-2 copy-voucher" type="button">SALIN</button>
</div>
<div class="border-bottom py-2 d-flex justify-content-between align-items-center">
<div>
<div class="fw-semibold" id="inline-style-quotation-add-011">Diskon 10% Brand Homedoki</div>
<div class="text-secondary small">Kode Voucher: <span class="fw-semibold voucher-value">HOMEDOKI10</span></div>
</div>
<button class="btn btn-outline-danger btn-sm fw-semibold px-3 py-1 ms-2 copy-voucher" type="button">SALIN</button>
</div>
<div class="border-bottom py-2 d-flex justify-content-between align-items-center">
<div>
<div class="fw-semibold" id="inline-style-quotation-add-012">Diskon 10% Brand Homedoki</div>
<div class="text-secondary small">Kode Voucher: <span class="fw-semibold voucher-value">HOMEDOKI10</span></div>
</div>
<button class="btn btn-outline-danger btn-sm fw-semibold px-3 py-1 ms-2 copy-voucher" type="button">SALIN</button>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
<div id="privacy-terms-placeholder"></div>







</div>
</template>
