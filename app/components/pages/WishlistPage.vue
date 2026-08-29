<script setup lang="ts">
useLegacyPage({
  "title": "Wishlist | Dulank",
  "styles": [
    "/css/style.css",
    "/css/save.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/save.js"
  ],
  "sweetAlert": true
})
</script>

<template>
<div class="dulank-page dulank-page-wishlist">
<div class="container mt-3">
<p class="text-standard">Home > Wishlist</p>
</div>
<main>

<div class="container my-5">
<div class="row save justify-content-md-center">
<div class="col-md-8">
<h1 class="fs-5">Your Wishlist</h1>

<div class="card-product-list">

<div class="justify-content-between">
<div class="align-items-start">
<div class="align-items-center my-3">
<div class="d-flex">
<div class="me-2">
<img alt="Kaos" class="object-fit-cover rounded-2" height="64" src="/images/yasin.jpg" width="64"/>
</div>
<div class="d-md-flex align-items-center">
<div class="me-md-5">
<div class="fw-light text-standard float-end">Expire until 25/6/2025</div>
<div class="fw-semibold text-color small">Yasin Tahlil</div>
<div class="text-secondary text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</div>
</div>
<div class="me-md-5 mt-2 mt-md-0 text-md-center d-flex d-md-inline-block justify-content-between">
<span class="fw-semibold text-dark total-item">Rp65.000</span>
</div>
</div>
</div>
<div class="d-flex justify-content-between mt-2 mt-md-4">
<h5 class="mx-2 align-items-center add-cart-btn" role="button"><i class="bi bi-cart3 me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to cart</span></h5>
<h5 class="mx-2 align-items-center btn-remove-save" role="button"><i class="bi bi-trash me-2 my-text-primary"></i><span class="text-standard my-text-primary">Remove</span></h5>
</div>
</div>
</div>
</div>
</div>

<div class="card-product-list">

<div class="justify-content-between">
<div class="align-items-start">
<div class="align-items-center my-3">
<span class="text-standard text-muted mb-3 d-block"><i class="bi bi-info-circle-fill me-2"></i>Produk yang anda simpan sudah terlalu lama, silahkan update harga dengan mengirimkan produk ini ke dalam cart-keranjang</span>
<div class="d-flex">
<div class="me-2">
<img alt="Kaos" class="object-fit-cover rounded-2" height="64" src="/images/brosur.jpg" width="64"/>
</div>
<div class="d-md-flex align-items-center">
<div class="me-md-5">
<div class="fw-light text-standard float-end">Expired</div>
<div class="fw-semibold text-color small">Brosur Full Color</div>
<div class="text-secondary text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</div>
</div>
<div class="me-md-5 mt-2 mt-md-0 text-md-center d-flex d-md-inline-block justify-content-between">
<span class="fw-semibold text-dark total-item">Rp65.000</span>
</div>
</div>
</div>
<div class="d-flex justify-content-between mt-2 mt-md-4">
<h5 class="mx-2 align-items-center add-cart-btn" role="button"><i class="bi bi-cart3 me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to cart</span></h5>
<h5 class="mx-2 align-items-center btn-remove-save" role="button"><i class="bi bi-trash me-2 my-text-primary"></i><span class="text-standard my-text-primary">Remove</span></h5>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="empty-save-container d-none text-center py-5">
<i class="far fa-heart empty-save-icon fa-4x text-muted mb-4"></i>
<h4>Your Wishlist is Empty</h4>
<p class="text-muted mb-4">You don't have any products added to save yet.</p>
<a class="btn btn-danger my-bg-primary px-4 py-2 rounded-0" href="#">Continue Shopping</a>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>






</div>
</template>
