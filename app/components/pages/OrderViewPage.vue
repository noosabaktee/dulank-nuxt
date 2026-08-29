<script setup lang="ts">
useLegacyPage({
  "title": "Pesan #600268557",
  "styles": [
    "/css/style.css",
    "/css/pages/order-view-inline.css"
  ],
  "scripts": [
    "/js/pages/order-view.js",
    "/js/component.js",
    "/js/profile.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-order-view">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><ProfileSidebar /></div>

<div class="col-lg-9">
<div class="mt-2 mb-4 mt-md-0 d-flex justify-content-between">
<h5 class="section-title mb-0">Pesan # 600268557</h5>
<div class="d-flex">
<a class="btn my-btn-primary me-2" href="/cart">Pesan Lagi</a>
<a class="btn btn-warning text-white" href="/print-order">Print Order</a>
</div>
</div>

<div class="card border-0 mb-4">
<div class="card-body p-0">
<table class="table table-bordered mb-0 text-standard" id="inline-style-order-view-001">
<tbody>
<tr>
<td id="inline-style-order-view-002"><b>Status order</b></td>
<td><span class="fw-semibold">Terkirim</span></td>
</tr>
<tr>
<td><b>Tanggal Pesanan:</b></td>
<td>7 September 2022</td>
</tr>
<tr>
<td><b>Lama Proses Produksi (PO):</b></td>
<td>5 - 10 Hari</td>
</tr>
<tr>
<td><b>Alamat Pengiriman</b></td>
<td>
                                    Cecep Sudirman<br/>
                                    CV Dulank Sejahtera Cida<br/>
                                    Percetakan Dulank Jl. Arif Rahman Hakim / Niaga (depan stasiun karawang)<br/>
                                    Jawa Barat, Kab. Karawang, Karawang Barat 41316<br/>
                                    Indonesia<br/>
                                    T: 081906855554
                                </td>
</tr>
<tr>
<td><b>Metode Pengiriman</b></td>
<td>Dulank Express - Pengiriman Reguler</td>
</tr>
<tr>
<td><b>Metode Pembayaran</b></td>
<td>
<span class="fw-semibold">Transfer Bank</span><br/>
                                    No VA: 100960100259372
                                </td>
</tr>
</tbody>
</table>
</div>
</div>
<h5 class="fw-bold mb-4">Produk Yang Dipesan</h5>

<div class="d-md-flex border-bottom mb-4">
<button class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1 active" id="orderTab" target-form="orderForm" type="button">
<h5 class="fs-6 mb-0">Pesanan yang dibuat</h5>
</button>
<button class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1" id="productTab" target-form="productForm" type="button">
<h5 class="fs-6 mb-0">Pesanan dikirimkan</h5>
</button>
</div>
<div class="tab-form" id="orderForm">
<div class="row align-items-center py-2 d-none d-md-flex fw-bold">
<div class="col-md-8 small text-center">Product</div>
<div class="col-md-1 small">Price</div>
<div class="col-md-1 small">Qty</div>
<div class="col-md-2 small text-end">Total Price</div>
</div>

<div class="row table-product align-items-md-center py-3 border-bottom-md-0">
<div class="col-12 col-md-8" data-label="Product">
<div class="d-flex">
<img alt="" class="object-fit-cover" height="50" src="/images/brosur.jpg" width="50"/>
<div class="ms-4">
<span class="fw-semibold text-standard">Brosur PPDN SMAN 1 Bandung</span><br/>
<span class="text-standard">Brosur Full Color</span><br/>
<span class="text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</span><br/>
<span class="text-standard">Artwork : Ada file ready to print</span><br/>
<span class="text-standard">Hasil Cetak : Warna Standard CMYK</span><br/>
<span class="text-standard fst-italic">Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
</div>
</div>
</div>
<div class="col-12 col-md-1" data-label="Pirce">Rp65.000</div>
<div class="col-12 col-md-1" data-label="Qty">2</div>
<div class="col-12 col-md-2 text-end" data-label="Total Price">Rp130.000</div>
</div>
<div>
<div class="fw-bold d-flex justify-content-between my-1">
<span class="text-standard">Total Harga</span><br/>
<span class="text-standard text-end fw-normal" id="inline-style-order-view-003">Rp130.000</span>
</div>
<div class="fw-bold d-flex justify-content-between my-1">
<span class="text-standard">Voucher (DUL4NK12)</span><br/>
<span class="text-standard text-end fw-normal" id="inline-style-order-view-004">Rp10.000</span>
</div>
<div class="fw-bold d-flex justify-content-between my-1">
<span class="text-standard">Biaya Pengiriman</span><br/>
<span class="text-standard text-end fw-normal" id="inline-style-order-view-005">Rp15.000</span>
</div>
<div class="fw-bold d-flex justify-content-between my-1">
<span class="text-standard">Subtotal Sebelum PPN</span><br/>
<span class="text-standard text-end fw-normal" id="inline-style-order-view-006">Rp888.000</span>
</div>
<div class="fw-bold d-flex justify-content-between my-1">
<span class="text-standard">PPN (11%)</span><br/>
<span class="text-standard text-end fw-normal" id="inline-style-order-view-007">Rp88.000</span>
</div>
<div class="fw-bold d-flex justify-content-between my-1">
<span class="text-standard">Grand Total</span><br/>
<span class="text-standard text-end fw-normal" id="inline-style-order-view-008">Rp888.000</span>
</div>
</div>
</div>
<div class="tab-form" id="productForm">

<div class="card border-0 mb-4">
<div class="card-body p-0">
<table class="table table-bordered mb-0 text-standard" id="inline-style-order-view-010">
<tbody>
<tr>
<td id="inline-style-order-view-011"><b>Tanggal pengiriman</b></td>
<td><span class="fw-semibold">15 September 2022</span></td>
</tr>
<tr>
<td><b>Kurir Pengiriman</b></td>
<td>MONOTARO EXPRESS</td>
</tr>
<tr>
<td><b>Nomor AWB</b></td>
<td>600268557-1</td>
</tr>
</tbody>
</table>
</div>
</div>

<div class="card border-0 mb-4">
<div class="card-body p-0">
<table class="table mb-0 text-standard" id="inline-style-order-view-012">
<thead>
<tr>
<th class="border-0" id="inline-style-order-view-013">Produk</th>
<th class="border-0 text-end" id="inline-style-order-view-014">Jumlah</th>
</tr>
</thead>
<tbody>
<tr>
<td class="align-middle">
<div class="d-flex">
<div class="ms-2">
<span class="fw-semibold text-standard">Brosur PPDN SMAN 1 Bandung</span><br/>
<span class="text-standard">Brosur Full Color</span><br/>
<span class="text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</span><br/>
<span class="text-standard">Artwork : Ada file ready to print</span><br/>
<span class="text-standard">Hasil Cetak : Warna Standard CMYK</span><br/>
<span class="text-standard fst-italic">Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
</div>
</div>
</td>
<td class="align-middle text-end">10</td>
</tr>
</tbody>
</table>
<div class="p-0">
<button class="btn w-100 fw-semibold text-white mt-3" id="toggleProductBtn" type="button">Hide Product</button>
</div>
</div>
</div>

</div>
<div class="d-flex justify-content-center">
<a class="text-center btn my-btn-primary" href="/cart">
                            Pesan Lagi
                        </a>
</div>
<a class="text-standard mt-2 text-secondary" href="/orders"><i class="bi bi-arrow-left me-2"></i>Kembali ke riwayat pesanan</a>
</div>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>






</div>
</template>
