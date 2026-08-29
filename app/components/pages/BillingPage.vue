<script setup lang="ts">
useLegacyPage({
  "title": "Billing",
  "styles": [
    "/css/style.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/profile.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-billing">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><ProfileSidebar /></div>

<div class="col-lg-9">

<div class="text-center py-5 d-none">
<img class="mb-4" src="/images/profile-null.svg" width="150"/>
<h4>There is no history here</h4>
<p class="text-muted mb-4">Happy shopping!</p>
<a class="btn btn-dark my-bg-primary px-4 py-2 rounded-0" href="#">Continue Shopping</a>
</div>
<div class="recent-orders">
<div class="mt-2 mt-md-0 d-flex justify-content-between">
<h5 class="section-title mb-0">Billings</h5>
<div class="d-flex">
<form action="" class="d-flex">
<input class="form-control" placeholder="search" type="text"/>
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
<div>
<div class="row align-items-center py-md-2 px-md-0 py-3 px-3 d-none d-md-flex fw-bold">
<div class="col-md-2 small">Invoice #</div>
<div class="col-md-1 small text-center">Date</div>
<div class="col-md-1 small text-center">Due</div>
<div class="col-md-2 small text-center">Total</div>
<div class="col-md-1 small text-center">Status</div>
<div class="col-md-5 small text-center"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 px-md-0 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Invoice #">600449168</div>
<div class="col-12 col-md-1 text-center" data-label="Invoice Date">13/06/25</div>
<div class="col-12 col-md-1 text-center" data-label="Due Date">13/07/25</div>
<div class="col-12 col-md-2 text-center" data-label="Total">Rp175.000</div>
<div class="col-12 col-md-1 text-center text-danger" data-label="Status">Unpaid</div>
<div class="col-12 col-md-5 d-md-flex text-center justify-content-between">
<a class="text-primary mt-md-0 mt-2 d-block me-1" href="/invoice-view">Payment Confirm</a>
<a class="text-primary mt-md-0 mt-2 d-block me-1" href="/print-order">Download Invoice</a>
<a class="text-primary mt-md-0 mt-2 d-block" href="">Download Fakur Pajak</a>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 px-md-0 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Invoice #">600449168</div>
<div class="col-12 col-md-1 text-center" data-label="Invoice Date">13/06/25</div>
<div class="col-12 col-md-1 text-center" data-label="Due Date">13/07/25</div>
<div class="col-12 col-md-2 text-center" data-label="Total">Rp175.000</div>
<div class="col-12 col-md-1 text-center text-success" data-label="Status">Paid</div>
<div class="col-12 col-md-5 d-md-flex text-center justify-content-between">
<a class="text-primary mt-md-0 mt-2 d-block me-1" href="/invoice-view">Payment Confirm</a>
<a class="text-primary mt-md-0 mt-2 d-block me-1" href="/print-order">Download Invoice</a>
<a class="text-primary mt-md-0 mt-2 d-block" href="">Download Fakur Pajak</a>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 px-md-0 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Invoice #">600449168</div>
<div class="col-12 col-md-1 text-center" data-label="Invoice Date">13/06/25</div>
<div class="col-12 col-md-1 text-center" data-label="Due Date">13/07/25</div>
<div class="col-12 col-md-2 text-center" data-label="Total">Rp175.000</div>
<div class="col-12 col-md-1 text-center text-secondary" data-label="Status">Cancelled</div>
<div class="col-12 col-md-5 d-md-flex text-center justify-content-between">
<a class="text-primary mt-md-0 mt-2 d-block me-1" href="/invoice-view">Payment Confirm</a>
<a class="text-primary mt-md-0 mt-2 d-block me-1" href="/print-order">Download Invoice</a>
<a class="text-primary mt-md-0 mt-2 d-block" href="">Download Fakur Pajak</a>
</div>
</div>
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
