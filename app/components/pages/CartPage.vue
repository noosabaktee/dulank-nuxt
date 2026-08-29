<script setup lang="ts">
useLegacyPage({
  "title": "Cart | Dulank",
  "styles": [
    "/css/style.css",
    "/css/pages/cart.css",
    "/css/pages/cart-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/save.js",
    "/js/easy-number-separator.js",
    "/js/pages/cart.js"
  ],
  "sweetAlert": true
})
</script>

<template>
<div class="dulank-page dulank-page-cart">
<div class="container mt-3">
<p class="text-standard">Home > Cart</p>
</div>
<main>

<div class="container my-5">
<div class="row save">
<ol class="step">
<li class="steps current">Select Product</li>
<li class="steps">Input File</li>
<li class="steps">Checkout</li>
</ol>
<div class="col-lg-8">
<h1 class="fs-5">Your Cart</h1>

<div class="card-product-list save-item">

<div class="align-items-center my-3">
<div class="d-flex">
<div class="me-3">
<input class="fs-4 form-check-input border-3" type="checkbox"/>
</div>
<div class="me-2">
<img alt="Kaos" class="object-fit-cover rounded-2" height="64" src="/images/yasin.jpg" width="64"/>
</div>
<div class="ms-md-1 w-100">
<div class="desc">
<span class="fw-semibold">Yasin Tahlil</span>
<div class="text-secondary text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan </div>
<div class="text-standard">Rp<span class="price">65.000</span></div>
</div>
<div class="d-flex justify-content-end">
<div class="mt-2 mt-md-0 text-center d-inline-block justify-content-between">
<div class="d-flex mb-2 justify-md-content-center justify-content-end">
<button class="quantity-btn quantity-minus" type="button">−</button>
<input class="quantity-input number-separator form-control" inputmode="numeric" pattern="[0-9]*" type="text" value="10"/>
<input class="quantity result-input" type="hidden" value="10"/>
<button class="quantity-btn quantity-plus" type="button">+</button>
</div>
<span class="fw-semibold text-dark total-item">Rp65.000</span>
</div>
</div>
</div>
</div>
<div class="d-flex justify-content-end mt-4">
<div class="d-flex">
<h5 class="mx-2 d-flex align-items-center add-wishlist-btn" role="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></h5>
</div>
<h5 class="mx-2 d-flex align-items-center btn-remove-save" role="button"><i class="bi bi-trash me-2 my-text-primary"></i><span class="text-standard my-text-primary">Remove</span></h5>
</div>
</div>
</div>

<div class="card-product-list save-item">

<div class="align-items-center my-3">
<div class="d-flex">
<div class="me-3">
<input class="fs-4 form-check-input border-3" type="checkbox"/>
</div>
<div class="me-2">
<img alt="Kaos" class="object-fit-cover rounded-2" height="64" src="/images/brosur.jpg" width="64"/>
</div>
<div class="ms-md-1 w-100">
<div class="desc">
<span class="fw-semibold">Brosur Full Color</span>
<div class="text-secondary text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan </div>
<div class="text-standard">Rp<span class="price">65.000</span></div>
</div>
<div class="d-flex justify-content-end">
<div class="mt-2 mt-md-0 text-center d-inline-block justify-content-between">
<div class="d-flex mb-2 justify-md-content-center justify-content-end">
<button class="quantity-btn quantity-minus" type="button">−</button>
<input class="quantity-input number-separator form-control" inputmode="numeric" pattern="[0-9]*" type="text" value="10"/>
<input class="quantity result-input" type="hidden" value="10"/>
<button class="quantity-btn quantity-plus" type="button">+</button>
</div>
<span class="fw-semibold text-dark total-item">Rp65.000</span>
</div>
</div>
</div>
</div>
<div class="d-flex justify-content-end mt-4">
<div class="d-flex">
<h5 class="mx-2 d-flex align-items-center add-wishlist-btn" role="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></h5>
</div>
<h5 class="mx-2 d-flex align-items-center btn-remove-save" role="button"><i class="bi bi-trash me-2 my-text-primary"></i><span class="text-standard my-text-primary">Remove</span></h5>
</div>
</div>
</div>
</div>

<div class="col-lg-4 px-3 h-100 position-sticky top-0">
<h1 class="fs-5 bg-light p-2" id="inline-style-cart-001">Order Summary</h1>
<div class="mb-3"><span class="text-standard">PPN (11%)</span> <span class="float-end text-standard text-primary">Rp0</span></div>
<div class="mb-3 mt-2">
<div class="text-standard text-start">Jumlah Total</div>
<h4 class="text-primary text-end" id="grandTotal">Rp0</h4>
</div>
<div class="alert alert-warning text-standard text-center d-none" id="update-info" role="alert">
                        Silakan klik update keranjang belanja untuk memperbarui rangkuman belanja Anda!
                    </div>
<div class="alert alert-danger text-standard text-center d-none" id="job-name-info" role="alert">
                        Silakan isi semua Job Name pada product yang dipilih!
                    </div>
<div class="text-end">
<a class="btn me-2 my-btn-primary w-100" href="/next">Lanjutkan ke Checkout</a>
<a class="btn me-2 btn-warning w-100 my-2" href="/next">Buat Surat Penawaran (Quotation)</a>
</div>
<div class="text-start my-2">
<span class="text-standard">*) Belum termasuk biaya pengiriman berikut PPN pengiriman</span><br/>
<span class="text-standard">*) Kode voucher dapat digunakan di halaman checkout</span>
</div>

<div class="bg-light border">
<p class="text-standard p-2" id="inline-style-cart-002">Promo GRATIS ONGKIR kirim ke Jakarta, Bogor, Bekasi, Karawang, Purwakarta dengan minimum pembelian Rp500.000</p>
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
