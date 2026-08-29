<script setup lang="ts">
useLegacyPage({
  "title": "Quotation",
  "styles": [
    "/css/style.css",
    "/css/pages/quotation-send.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/profile.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-quotation-send">
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
<h5 class="section-title mb-0">Quotations</h5>
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
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-2 small">Quotation #</div>
<div class="col-md-2 small">Tanggal</div>
<div class="col-md-4 small">Quotation Request Status</div>
<div class="col-md-2 small text-end">Total Price</div>
<div class="col-md-2 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Quotation #">Q21000221395</div>
<div class="col-12 col-md-2" data-label="Tanggal">13/06/25</div>
<div class="col-12 col-md-4" data-label="Quotation Request Status">Accepted</div>
<div class="col-12 col-md-2 text-start text-md-end" data-label="Total Price">Rp2.441.889</div>
<div class="col-12 col-md-2 text-start text-md-end actions-mobile-separator">
<a class="btn my-text-primary p-0" href="/quotation-view">View Quotation</a>
</div>
</div>

<div class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Quotation #">Q21000221395</div>
<div class="col-12 col-md-2" data-label="Tanggal">13/06/25</div>
<div class="col-12 col-md-4" data-label="Quotation Request Status">Accepted, Ordered</div>
<div class="col-12 col-md-2 text-start text-md-end" data-label="Total Price">Rp2.441.889</div>
<div class="col-12 col-md-2 text-start text-md-end actions-mobile-separator">
<a class="btn my-text-primary p-0" href="/quotation-view">View Quotation</a>
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
