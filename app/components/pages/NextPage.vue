<script setup lang="ts">
useLegacyPage({
  "title": "Cart | Dulank",
  "styles": [
    "/css/style.css",
    "/css/pages/next.css",
    "/css/pages/next-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/pages/next.js",
    "/js/pages/next-events.js"
  ],
  "sweetAlert": true
})
</script>

<template>
<div class="dulank-page dulank-page-next">
<div class="container mt-3">
<p class="text-standard">Home > Cart > Next</p>
</div>
<main>

<div class="container my-5">
<div class="row save">
<ol class="step">
<li class="steps">Select Product</li>
<li class="steps current">Input File</li>
<li class="steps">Checkout</li>
</ol>
<div class="col-lg-8">
<h1 class="fs-5">Your Cart</h1>


<div class="card-product-list save-item">

<div class="align-items-center my-3">
<div class="d-flex">
<div class="me-2">
<img alt="Kaos" class="object-fit-cover rounded-2" height="64" src="/images/yasin.jpg" width="64"/>
</div>
<div class="ms-md-1 w-100">
<div class="desc">
<div class="text-secondary text-standard">Brosur Full Color A4 (210x297
                                            Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</div>
<div class="title row mt-1">
<div class="col-3">
<span class="text-standard">Job Name</span>
</div>
<div class="col">
<input class="input-edit p-0 fw-semibold d-none" type="text"/>
<span class="job-name fw-semibold">Yasin Tahlil </span>
<span class="text-standard fst-italic text-primary job-name-btn" role="button">Job Title
                                                    <i class="fa-solid fa-pen-to-square ms-1"></i></span>
</div>
</div>
</div>
<div class="row align-items-center">
<div>

<div class="row my-2">
<div class="col-3">
<label class="custom-label text-standard">Art Work</label>
</div>
<div class="col">
<div class="d-inline">
<button class="btn btn-spec me-2 selected" data-js-click="next-001" type="button">Belum
                                                            ada design<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" data-js-click="next-002" type="button">Ada
                                                            file ready to print<span class="ribbon d-none"></span></button>
</div>
<input class="form-control mt-2 d-none design-link-input" placeholder="link design" type="text"/>
</div>
</div>

<div class="row my-2">
<div class="col-3">
<label class="custom-label text-standard">Hasil Cetak</label>
</div>
<div class="col">
<div class="d-inline">
<button class="btn btn-spec me-2 selected" type="button">Warna
                                                            Standard CMYK<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">Warna sesuai
                                                            sampel<span class="ribbon d-none"></span></button>
</div>
</div>
</div>

<div class="row my-2">
<div class="col-3">
<label class="custom-label text-standard">Note</label>
</div>
<div class="col">
<input class="form-control text-standard mt-2" name="" placeholder="Note (opsional)" type="text"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="card-product-list save-item">

<div class="align-items-center my-3">
<div class="d-flex">
<div class="me-2">
<img alt="Kaos" class="object-fit-cover rounded-2" height="64" src="/images/brosur.jpg" width="64"/>
</div>
<div class="ms-md-1 w-100">
<div class="desc">
<div class="text-secondary text-standard">Brosur Full Color A4 (210x297
                                            Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</div>
<div class="title row mt-1">
<div class="col-3">
<span class="text-standard">Job Name</span>
</div>
<div class="col">
<input class="input-edit p-0 fw-semibold d-none" type="text"/>
<span class="job-name fw-semibold">Brosur Full Color </span>
<span class="text-standard fst-italic text-primary job-name-btn" role="button">Job Title
                                                    <i class="fa-solid fa-pen-to-square ms-1"></i></span>
</div>
</div>
</div>
<div class="row align-items-center">
<div>

<div class="row my-2">
<div class="col-3">
<label class="custom-label text-standard">Art Work</label>
</div>
<div class="col">
<div class="d-inline">
<button class="btn btn-spec me-2 selected" data-js-click="next-003" type="button">Belum
                                                            ada design<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" data-js-click="next-004" type="button">Ada
                                                            file ready to print<span class="ribbon d-none"></span></button>
</div>
<input class="form-control mt-2 d-none design-link-input" placeholder="link design" type="text"/>
</div>
</div>

<div class="row my-2">
<div class="col-3">
<label class="custom-label text-standard">Hasil Cetak</label>
</div>
<div class="col">
<div class="d-inline">
<button class="btn btn-spec me-2 selected" type="button">Warna
                                                            Standard CMYK<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">Warna sesuai
                                                            sampel<span class="ribbon d-none"></span></button>
</div>
</div>
</div>

<div class="row my-2">
<div class="col-3">
<label class="custom-label text-standard">Note</label>
</div>
<div class="col">
<input class="form-control text-standard mt-2" name="" placeholder="Note (opsional)" type="text"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="col-lg-4 px-3 h-100 position-sticky top-0">
<h1 class="fs-5 bg-light p-2" id="inline-style-next-001">Order Summary</h1>
<div class="mb-3"><span class="text-standard">PPN (11%)</span> <span class="float-end text-standard text-primary">Rp0</span></div>
<div class="mb-3 mt-2">
<div class="text-standard text-start">Jumlah Total</div>
<h4 class="text-primary text-end" id="grandTotal">Rp1.300.000</h4>
</div>
<div class="alert alert-warning text-standard text-center d-none" id="update-info" role="alert">
                        Silakan klik update keranjang belanja untuk memperbarui rangkuman belanja Anda!
                    </div>
<div class="alert alert-danger text-standard text-center d-none" id="job-name-info" role="alert">
                        Silakan isi semua Job Name pada product yang dipilih!
                    </div>
<div class="text-end">
<a class="btn me-2 my-btn-primary w-100 disabled" href="/checkout" id="checkout-btn">Lanjutkan ke Checkout</a>
<a class="btn me-2 btn-warning w-100 my-2 disabled" href="/quotation-add" id="quotation-btn">Buat Surat Penawaran (Quotation)</a>
</div>
<div class="text-start my-2">
<span class="text-standard">*) Belum termasuk biaya pengiriman berikut PPN pengiriman</span><br/>
<span class="text-standard">*) Kode voucher dapat digunakan di halaman checkout</span>
</div>

<div class="bg-light border">
<p class="text-standard p-2" id="inline-style-next-002">Promo GRATIS ONGKIR kirim ke Jakarta,
                            Bogor, Bekasi, Karawang, Purwakarta dengan minimum pembelian Rp500.000</p>
</div>
</div>
</div>

<div class="empty-save-container d-none text-center py-5">
<i class="fa-solid fa-cart-plus empty-save-icon fa-4x text-muted mb-4"></i>
<h4>Your Cart is empty</h4>
<p class="text-muted mb-4">You don't have any products added to cart yet.</p>
<a class="btn btn-danger my-bg-primary px-4 py-2 rounded-0" href="#">Continue Shopping</a>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>








</div>
</template>
