<script setup lang="ts">
useLegacyPage({
  "title": "Quotation View",
  "styles": [
    "/css/style.css",
    "/css/pages/quotation-view.css",
    "/css/pages/quotation-view-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/profile.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-quotation-view">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><ProfileSidebar /></div>

<div class="col-lg-9">
<h4 class="small">Quotation # Q21000220213</h4>
<p class="text-standard">Quotation Request Date: 13 Juni 2025</p>
<p class="text-standard">Proposal Valid Until: 13 Juli 2025</p>

<h4 class="small">Item Requested</h4>

<div class="table-responsive my-3 d-md-block d-none">
<table class="table">
<thead>
<tr>
<th class="text-start" id="inline-style-quotation-view-001">Product</th>
<th id="inline-style-quotation-view-002">Harga</th>
<th id="inline-style-quotation-view-003">Qty</th>
<th id="inline-style-quotation-view-004">Jumlah Harga</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<span class="fw-semibold text-standard">Brosur PPDN SMAN 1 Bandung</span><br/>
<span class="text-standard">Brosur Full Color</span><br/>
<span class="text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</span><br/>
<span class="text-standard">Artwork : Ada file ready to print</span><br/>
<span class="text-standard">Hasil Cetak : Warna Standard CMYK</span><br/>
<span class="text-standard fst-italic">Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
</td>
<td class="text-center">10</td>
<td class="text-center">Rp65.000</td>
<td class="text-center">Rp650.000</td>
</tr>
<tr>
<td>
<span class="fw-semibold text-standard">Yasin Tahlil 40 Hari</span><br/>
<span class="text-standard">Yasin</span><br/>
<span class="text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</span><br/>
<span class="text-standard">Artwork : Ada file ready to print</span><br/>
<span class="text-standard">Hasil Cetak : Warna Standard CMYK</span><br/>
<span class="text-standard fst-italic">Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
</td>
<td class="text-center">10</td>
<td class="text-center">Rp15.000</td>
<td class="text-center">Rp150.000</td>
</tr>
</tbody>
</table>
</div>

<div class="my-2 d-block d-md-none">

<div class="row my-2 border-bottom pb-3">
<div class="mt-2 col-12">
<span class="d-block fw-bold small">Product</span>
<span class="fw-semibold text-standard d-block">Brosur PPDN SMAN 1 Bandung</span>
<span class="text-standard d-block">Brosur Full Color</span>
<span class="text-standard d-block">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</span>
</div>
<div class="mt-2 col-12">
<span class="d-block fw-bold small">Note</span>
<span class="text-standard d-block">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
</div>
<div class="mt-2 col-6">
<span class="d-block fw-bold small">Artwork</span>
<span class="text-standard d-block">Ada file ready to print</span>
</div>
<div class="mt-2 col-6">
<span class="d-block fw-bold small">Hasil Cetak</span>
<span class="text-standard d-block">Warna Standard CMYK</span>
</div>
<div class="mt-2 col-6">
<span class="d-block fw-bold small">Qty</span>
<span class="text-standard d-block">10</span>
</div>
<div class="mt-2 col-6">
<span class="d-block fw-bold small">Harga</span>
<span class="text-standard d-block">Rp65.000</span>
</div>
<div class="mt-2 col-6">
<span class="d-block fw-bold small">Jumlah Harga</span>
<span class="text-standard d-block">Rp650.000</span>
</div>
</div>

<div class="row my-2 border-bottom pb-3">
<div class="mt-2 col-12">
<span class="d-block fw-bold small">Product</span>
<span class="fw-semibold text-standard d-block">Yasin Tahlil 40 Hari</span>
<span class="text-standard d-block">Yasin</span>
<span class="text-standard d-block">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</span>
</div>
<div class="mt-2 col-12">
<span class="d-block fw-bold small">Note</span>
<span class="text-standard d-block">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
</div>
<div class="mt-2 col-6">
<span class="d-block fw-bold small">Artwork</span>
<span class="text-standard d-block">Ada file ready to print</span>
</div>
<div class="mt-2 col-6">
<span class="d-block fw-bold small">Hasil Cetak</span>
<span class="text-standard d-block">Warna Standard CMYK</span>
</div>
<div class="mt-2 col-6">
<span class="d-block fw-bold small">Qty</span>
<span class="text-standard d-block">10</span>
</div>
<div class="mt-2 col-6">
<span class="d-block fw-bold small">Harga</span>
<span class="text-standard d-block">Rp15.000</span>
</div>
<div class="mt-2 col-6">
<span class="d-block fw-bold small">Jumlah Harga</span>
<span class="text-standard d-block">Rp150.000</span>
</div>
</div>
</div>
<div>
<div class="fw-normal d-flex justify-content-md-end justify-content-between my-1">
<span class="text-standard">SUBTOTAL</span><br/>
<span class="text-standard text-end" id="inline-style-quotation-view-005">Rp800.000</span>
</div>
<div class="fw-normal d-flex justify-content-md-end justify-content-between my-1">
<span class="text-standard">PPN (11%)</span><br/>
<span class="text-standard text-end" id="inline-style-quotation-view-006">Rp88.000</span>
</div>
<div class="fw-bold d-flex justify-content-md-end justify-content-between my-1">
<span class="text-standard">TOTAL</span><br/>
<span class="text-standard text-end" id="inline-style-quotation-view-007">Rp888.000</span>
</div>
</div>
<div class="d-flex justify-content-end mt-3">
<a class="btn my-btn-primary" href="/checkout">One Step Checkout</a>
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
