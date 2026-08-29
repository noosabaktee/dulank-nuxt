<script setup lang="ts">
useLegacyPage({
  "title": "Orders",
  "styles": [
    "/css/style.css",
    "/css/pages/orders-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/profile.js",
    "/js/pages/orders.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-orders">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><ProfileSidebar /></div>

<div class="col-lg-9">

<div class="text-center py-5 d-none">
<img class="mb-4" src="/images/profile-null.svg" width="150"/>
<h4>You've never shopped</h4>
<p class="text-muted mb-4">Happy shopping!</p>
<a class="btn btn-dark my-bg-primary px-4 py-2 rounded-0" href="#">Continue Shopping</a>
</div>
<div class="profile-content bg-white p-4 rounded-3 shadow-sm">
<div class="mt-2 mt-md-0 d-flex justify-content-between">
<h5 class="section-title mb-0">Orders</h5>
<div class="d-flex" id="search-form">
<form action="" class="d-flex">
<input class="form-control" placeholder="Search Job Title" type="text"/>
<button class="ms-2 btn my-btn-primary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
</form>
<div class="dropdown ms-2">
<button aria-expanded="false" class="btn my-btn-primary dropdown-toggle" data-bs-toggle="dropdown" id="dropdownMenuButton1" type="button">
                                        Sorting
                                    </button>
<ul aria-labelledby="dropdownMenuButton1" class="dropdown-menu">
<li><a class="dropdown-item" href="#">Newest</a></li>
<li><a class="dropdown-item" href="#">Oldest</a></li>
<li><a class="dropdown-item" href="#">Highest</a></li>
</ul>
</div>
</div>
</div>
<hr/>

<div class="d-md-flex border-bottom mb-4">
<button class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1 active" id="ordersTab" target-form="ordersForm" type="button">
<span id="inline-style-orders-001">Semua Pesanan</span>
</button>
<button class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1" id="waitConfirmTab" target-form="waitConfirmForm" type="button">
<span id="inline-style-orders-002">Menunggu Konfirmasi</span>
</button>
<button class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1" id="waitPayTab" target-form="waitPayForm" type="button">
<span id="inline-style-orders-003">Menunggu Pembayaran</span>
</button>
<button class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1" id="prosesDesignTab" target-form="prosesDesignForm" type="button">
<span id="inline-style-orders-004">Proses Design</span>
</button>
<button class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1" id="prosesTab" target-form="prosesForm" type="button">
<span id="inline-style-orders-005">Dalam Proses</span>
</button>
<button class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1" id="shippedTab" target-form="shippedForm" type="button">
<span id="inline-style-orders-006">Telah Dikirim</span>
</button>
<button class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1" id="cancelTab" target-form="cancelForm" type="button">
<span id="inline-style-orders-007">Dibatalkan</span>
</button>
</div>

<div class="tab-form" id="ordersForm">
<div>
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-2 small">Orders #</div>
<div class="col-md-1 small">Date</div>
<div class="col-md-2 small">Shipping To</div>
<div class="col-md-2 small text-end">Total Price</div>
<div class="col-md-1 small text-end">Status</div>
<div class="col-md-4 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Orders #">600449168</div>
<div class="col-12 col-md-1" data-label="Date">13/06/25</div>
<div class="col-12 col-md-2" data-label="Shipping To">Cecep Sudirman</div>
<div class="col-12 col-md-2 text-start text-md-end" data-label="Total Price">Rp2.441.889</div>
<div class="col-12 col-md-1 text-start text-md-end" data-label="Status">Menunggu</div>
<div class="col-12 col-md-4 text-start text-md-end actions-mobile-separator">
<a class="btn btn-warning text-white" href="/order-view">Lihat Pesanan</a>
<a class="btn my-btn-primary" href="/cart">Pesan Lagi</a>
</div>
</div>

<div class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Orders #">600449168</div>
<div class="col-12 col-md-1" data-label="Date">13/06/25</div>
<div class="col-12 col-md-2" data-label="Shipping To">Cecep Sudirman</div>
<div class="col-12 col-md-2 text-start text-md-end" data-label="Total Price">Rp2.441.889</div>
<div class="col-12 col-md-1 text-start text-md-end" data-label="Status">Terkirim</div>
<div class="col-12 col-md-4 text-start text-md-end actions-mobile-separator">
<a class="btn btn-warning text-white" href="/order-view">Lihat Pesanan</a>
<a class="btn my-btn-primary" href="/cart">Pesan Lagi</a>
</div>
</div>
</div>
</div>

<div class="tab-form" id="waitConfirmForm">
<p class="text-center"><i class="bi bi-exclamation-triangle-fill me-2 text-warning"></i>Anda belum mempunyai pesanan.</p>
</div>

<div class="tab-form" id="waitPayForm">
<div>
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-2 small">Orders #</div>
<div class="col-md-1 small">Date</div>
<div class="col-md-2 small">Shipping To</div>
<div class="col-md-2 small text-end">Total Price</div>
<div class="col-md-1 small text-end">Status</div>
<div class="col-md-4 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Orders #">600449168</div>
<div class="col-12 col-md-1" data-label="Date">13/06/25</div>
<div class="col-12 col-md-2" data-label="Shipping To">Cecep Sudirman</div>
<div class="col-12 col-md-2 text-start text-md-end" data-label="Total Price">Rp2.441.889</div>
<div class="col-12 col-md-1 text-start text-md-end" data-label="Status">Menunggu</div>
<div class="col-12 col-md-4 text-start text-md-end actions-mobile-separator">
<a class="btn btn-warning text-white" href="/order-view">Lihat Pesanan</a>
<a class="btn my-btn-primary" href="/cart">Pesan Lagi</a>
</div>
</div>
</div>
</div>

<div class="tab-form" id="prosesDesignForm">
<p class="text-center"><i class="bi bi-exclamation-triangle-fill me-2 text-warning"></i>Anda belum mempunyai pesanan.</p>
</div>

<div class="tab-form" id="prosesForm">
<p class="text-center"><i class="bi bi-exclamation-triangle-fill me-2 text-warning"></i>Anda belum mempunyai pesanan.</p>
</div>

<div class="tab-form" id="shippedForm">
<div>
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-2 small">Orders #</div>
<div class="col-md-1 small">Date</div>
<div class="col-md-2 small">Shipping To</div>
<div class="col-md-2 small text-end">Total Price</div>
<div class="col-md-2 small text-end">Status</div>
<div class="col-md-4 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Orders #">600449168</div>
<div class="col-12 col-md-1" data-label="Date">13/06/25</div>
<div class="col-12 col-md-2" data-label="Shipping To">Cecep Sudirman</div>
<div class="col-12 col-md-2 text-start text-md-end" data-label="Total Price">Rp2.441.889</div>
<div class="col-12 col-md-1 text-start text-md-end" data-label="Status">Terkirim</div>
<div class="col-12 col-md-4 text-start text-md-end actions-mobile-separator">
<a class="btn btn-warning text-white" href="/order-view">Lihat Pesanan</a>
<a class="btn my-btn-primary" href="/cart">Pesan Lagi</a>
</div>
</div>
</div>
</div>

<div id="cancelForm">
<p class="text-center"><i class="bi bi-exclamation-triangle-fill me-2 text-warning"></i>Anda belum mempunyai pesanan.</p>
</div>
<div class="text-standard d-flex justify-content-end mt-2">
                            Tampilkan
                            <select aria-label="Default select example" class="text-standard mx-2">
<option value="10">10</option>
<option value="20">20</option>
<option value="50">50</option>
</select>
                            Per Halaman
                        </div>
</div>
</div>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>







</div>
</template>
