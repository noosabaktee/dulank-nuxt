<script setup lang="ts">
useLegacyPage({
  "title": "Cetak Buku | Dulank",
  "styles": [
    "/css/style.css",
    "/css/pages/cetak-buku.css",
    "/css/pages/cetak-buku-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/pages/cetak-buku-01.js",
    "/js/product.js",
    "/js/pages/cetak-buku-02.js",
    "/js/pages/cetak-buku-events.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-cetak-buku">
<div class="container mt-3">
<p class="text-standard">Home > Products > Cetak Buku</p>
</div>
<main>

<div class="container mt-3">

<div class="section-card">

<div class="row flex-lg-row">

<div class="col-lg-5">
<h1 class="fs-4 mb-4 bg-light p-3 title">Cetak Buku</h1>
<p class="text-muted text-standard">Cetak buku untuk kebutuhan buku bacaan, buku paket, modul, company profile tebal, sampai buku tulis custom. Pilih spesifikasi ukuran, cover, isi, jilid, dan tipe cetak sesuai kebutuhan produksi.</p>
<div class="row justify-content-center align-items-center">
<div class="col-md-9 px-3 order-md-2">
<div class="my-3 ratio ratio-1x1">
<img class="object-fit-cover img-product" src="/images/yasin.jpg"/>
</div>
</div>
<div class="col-md-3 text-center order-md-1 list-img-variant">
<img class="object-fit-cover border border-2 my-2 img-variant border-primary" role="button" src="/images/yasin.jpg" width="80"/>
<img class="object-fit-cover border border-2 my-2 img-variant" role="button" src="/images/yasin.jpg" width="80"/>
<img class="object-fit-cover border border-2 my-2 img-variant" role="button" src="/images/yasin.jpg" width="80"/>
<img class="object-fit-cover border border-2 my-2 img-variant" role="button" src="/images/yasin.jpg" width="80"/>
<img class="object-fit-cover border border-2 my-2 img-variant" role="button" src="/images/yasin.jpg" width="80"/>
</div>
</div>
</div>

<div class="col-lg-7 mb-4 mb-md-0 ps-md-4 mt-5 mt-md-0">
<h1 class="fs-4 mb-md-4 bg-light p-3 title">Tentukan Spesifikasi</h1>

<div class="sorting-nav">
<p class="nav-product fw-bold" role="button">Buku Bacaan / Buku Paket</p>
<p class="nav-product fw-light" role="button">Buku Tulis Custom</p>
</div>
<p class="text-standard" id="spec-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, harum repudiandae nihil sint obcaecati consequuntur veniam dignissimos saepe nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore consectetur!</p>
<form id="specForm">
<div class="mb-3">
<div class="row spec">
<div class="col-3">
<label class="custom-label text-standard">Orientasi</label>
</div>
<div class="col-9 list-spec" id="orientation">
<label class="btn text-standard btn-spec me-2 mb-2 selected"><input checked="" class="visually-hidden spec-input" name="cetak-buku-orientation" type="radio" value="Portrait (Berdiri)"/>Portrait (Berdiri)<span class="ribbon"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-orientation" type="radio" value="Landscape (Tidur)"/>Landscape (Tidur)<span class="ribbon d-none"></span></label>
</div>
</div>
</div>
<div class="mb-3">
<div class="row spec">
<div class="col-3">
<label class="custom-label text-standard">Ukuran</label>
</div>
<div class="col-9">
<div class="d-inline list-spec" id="size">
<label class="btn btn-spec me-2 mb-2 selected" data-price="50000"><input checked="" class="visually-hidden spec-input" name="cetak-buku-size" type="radio" value="A4 (210x297mm)"/>A4 (210x297mm)<span class="ribbon"></span></label>
<label class="btn btn-spec me-2 mb-2" data-price="35000"><input class="visually-hidden spec-input" name="cetak-buku-size" type="radio" value="A5 (148x210mm)"/>A5 (148x210mm)<span class="ribbon d-none"></span></label>
<label class="btn btn-spec me-2 mb-2" data-price="90000"><input class="visually-hidden spec-input" name="cetak-buku-size" type="radio" value="B4 (250x353mm)"/>B4 (250x353mm)<span class="ribbon d-none"></span></label>
<label class="btn btn-spec me-2 mb-2" data-price="90000"><input class="visually-hidden spec-input" name="cetak-buku-size" type="radio" value="B5 (250x176mm)"/>B5 (250x176mm)<span class="ribbon d-none"></span></label>
</div>
<div class="d-flex d-none mb-2" id="custom-size">
<div class="flex-fill me-2">
<input class="text-standard form-control rounded-0 number-separator" data-js-input="cetak-buku-001" id="widthSize" inputmode="numeric" min="0" pattern="[0-9]*" placeholder="Width" type="text"/>
<input class="result-input" id="widthSizeValue" type="hidden"/>
</div>
<div class="flex-fill me-2">
<input class="text-standard form-control rounded-0 number-separator" data-js-input="cetak-buku-002" id="heightSize" inputmode="numeric" min="0" pattern="[0-9]*" placeholder="Height" type="text"/>
<input class="result-input" id="heightSizeValue" type="hidden"/>
</div>
<select aria-label="Default select example" class="form-select w-auto rounded-0 text-standard" data-js-change="cetak-buku-003" id="unit">
<option value="cm">centimeter</option>
<option value="mm">milimeter</option>
</select>
</div>
<small class="d-none text-standard text-danger" id="info-custom"><i class="fa-solid fa-circle-info"></i> Min Max</small>
<button class="btn btn-spec custom-size-btn d-md-inline d-block" type="button">Custom</button><br/>
</div>
</div>
</div>
<div class="mb-3">
<div class="row spec">
<div class="col-3">
<label class="custom-label text-standard">Binding/Jilid</label>
</div>
<div class="col-9 list-spec" id="binding">
<label class="btn text-standard btn-spec me-2 mb-2 selected"><input checked="" class="visually-hidden spec-input" name="cetak-buku-binding" type="radio" value="Lem Panas"/>Lem Panas<span class="ribbon"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-binding" type="radio" value="Spiral"/>Spiral<span class="ribbon d-none"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-binding" type="radio" value="Steples"/>Steples<span class="ribbon d-none"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-binding" type="radio" value="Perfect Binding"/>Perfect Binding<span class="ribbon d-none"></span></label>
</div>
</div>
</div>
<div class="mb-3">
<div class="row spec">
<div class="col-3">
<label class="custom-label text-standard">Jenis Kertas Isi Buku</label>
</div>
<div class="col-9 list-spec" id="type">
<label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="12000"><input checked="" class="visually-hidden spec-input" name="cetak-buku-type" type="radio" value="HVS 70gr"/>HVS 70gr<span class="ribbon"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-buku-type" type="radio" value="Bookpaper 70gr"/>Bookpaper 70gr<span class="ribbon d-none"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="cetak-buku-type" type="radio" value="Art Paper 100gr"/>Art Paper 100gr<span class="ribbon d-none"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2 d-none" data-price="5000"><input class="visually-hidden spec-input" name="cetak-buku-type" type="radio" value="HVS 80gr"/>HVS 80gr<span class="ribbon d-none"></span></label>
</div>
</div>
</div>
<div class="mb-3">
<div class="row spec">
<div class="col-3">
<label class="custom-label text-standard">Laminasi Cover</label>
</div>
<div class="col-9 list-spec" id="lamination">
<label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="0"><input checked="" class="visually-hidden spec-input" name="cetak-buku-lamination" type="radio" value="Tanpa Laminasi"/>Tanpa Laminasi<span class="ribbon"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-buku-lamination" type="radio" value="Glossy"/>Glossy<span class="ribbon d-none"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-buku-lamination" type="radio" value="Doff"/>Doff<span class="ribbon d-none"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-buku-lamination" type="radio" value="UV Vernish"/>UV Vernish<span class="ribbon d-none"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-buku-lamination" type="radio" value="Spot UV"/>Spot UV<span class="ribbon d-none"></span></label>
</div>
</div>
</div>
<div class="mb-3">
<div class="row spec">
<div class="col-3">
<label class="custom-label text-standard">Tipe Cetak</label>
</div>
<div class="col-9 list-spec" id="side">
<label class="btn text-standard btn-spec me-2 mb-2 selected"><input checked="" class="visually-hidden spec-input" name="cetak-buku-side" type="radio" value="1 Warna"/>1 Warna<span class="ribbon"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-side" type="radio" value="Full Color"/>Full Color<span class="ribbon d-none"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-side" type="radio" value="1 Warna & Full Color"/>1 Warna & Full Color<span class="ribbon d-none"></span></label>
</div>
</div>
</div>
<div class="mb-3">
<div class="row spec">
<div class="col-3">
<label class="custom-label text-standard">Jenis Cover</label>
</div>
<div class="col-9 list-spec" id="cover">
<label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="3000"><input checked="" class="visually-hidden spec-input" name="cetak-buku-cover" type="radio" value="Softcover"/>Softcover<span class="ribbon"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="cetak-buku-cover" type="radio" value="HardCover"/>HardCover<span class="ribbon d-none"></span></label>
</div>
</div>
</div>
<div class="mb-3">
<div class="row spec">
<div class="col-3">
<label class="custom-label text-standard">Finishing Cover</label>
</div>
<div class="col-9 list-spec" id="position">
<label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="3000"><input checked="" class="visually-hidden spec-input" name="cetak-buku-position" type="radio" value="Glossy"/>Glossy<span class="ribbon"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="cetak-buku-position" type="radio" value="Doff"/>Doff<span class="ribbon d-none"></span></label>
<label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="cetak-buku-position" type="radio" value="Spot UV"/>Spot UV<span class="ribbon d-none"></span></label>
</div>
</div>
</div>
<div class="mb-3 page-row page-bw-row">
<div class="row">
<div class="col-3">
<label class="custom-label text-standard" id="pageBwLabel">Jumlah Halaman 1 Warna</label>
</div>
<div class="col-9">
<div class="input-group" id="inline-style-cetak-buku-001">
<input class="form-control rounded-0 text-standard number-separator" data-js-input="cetak-buku-004" id="pageBw" inputmode="numeric" min="1" pattern="[0-9]*" type="text"/>
<input class="result-input" id="pageBwValue" type="hidden"/>
<span class="input-group-text rounded-0 text-standard">Page</span>
</div>
</div>
</div>
</div>
<div class="mb-3 page-row page-color-row">
<div class="row">
<div class="col-3">
<label class="custom-label text-standard">Jumlah Halaman Full Color</label>
</div>
<div class="col-9">
<div class="input-group" id="inline-style-cetak-buku-002">
<input class="form-control rounded-0 text-standard number-separator" data-js-input="cetak-buku-005" id="pageColor" inputmode="numeric" min="1" pattern="[0-9]*" type="text"/>
<input class="result-input" id="pageColorValue" type="hidden"/>
<span class="input-group-text rounded-0 text-standard">Page</span>
</div>
</div>
</div>
</div>
<small class="d-none text-standard text-danger" id="info-selected-all"><i class="fa-solid fa-circle-info"></i> please select your specification<br/></small>
<button class="btn my-btn-primary rounded-0 w-100" id="btnHitung" type="button">Hitung Harga</button>
</form>
</div>
</div>


<div class="row mt-md-3" id="scrollTo">

<div class="col-md-12">
<div class="mb-2 mt-4">
<h1 class="fs-4 bg-light p-3 title">List Harga Cetak Buku</h1>
</div>
<div class="d-md-flex justify-content-between mt-4">
<p>Silahkan Pilih Harga Yang Terbaik</p>

<div class="text-md-end share-disabled" id="share-section">
<span class="me-2">Share:</span>
<a class="social-share-icon me-2" href="#" id="inline-style-cetak-buku-003"><i class="fab fa-facebook-f"></i></a>
<a class="social-share-icon me-2" href="#" id="inline-style-cetak-buku-004"><i class="fab fa-whatsapp"></i></a>
<a class="social-share-icon" href="#" id="inline-style-cetak-buku-005"><i class="fa-solid fa-link"></i></a>
</div>
</div>
<div class="mb-3 mt-4">
<p class="text-standard fw-bold" id="result">Tentukan pilihan produk yang anda inginkan pada Spesifikasi</p>
</div>
<button class="btn my-btn-primary" data-bs-target="#qtyModal" data-bs-toggle="modal" type="button">Ubah Quantity</button>
<div class="text-center empty-spec d-none py-5">
<i class="bi bi-journal fs-1 mb-4"></i>
<h6>Please select the specification</h6>
<p class="text-muted text-standard mb-4">You have not selected product specifications</p>
</div>
<div class="table-responsive table-spec my-3">
<table class="table table-hover align-middle text-center mb-0" id="hargaTable">
<thead class="bg-light">
<tr>
<th class="fw-normal">Qty</th>
<th class="fw-normal">Harga Satuan</th>
<th class="fw-normal">Sub Total</th>
<th class="fw-normal">Berat</th>
<th class="fw-normal">Pengerjaan</th>
<th class="fw-normal" id="inline-style-cetak-buku-006"></th>
</tr>
</thead>
<tbody>
<tr class="table-list">
<td><span class="qty-value">10</span> Rim</td><td class="my-text-primary">Rp<span class="price-value">65.000</span></td><td>Rp<span class="sub-total">650.000</span></td><td>30 Kg</td><td>3 Hari</td>
<td>
<button class="align-items-center me-5 add-wishlist-btn btn" type="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></button>
<a class="btn my-btn-primary px-5 buy-btn" href="/checkout">Beli</a>
</td>
</tr>
<tr class="table-list">
<td><span class="qty-value">13</span> Rim</td><td class="my-text-primary">Rp<span class="price-value">64.000</span></td><td>Rp<span class="sub-total">832.000</span><br/><span class="table-disc">Hemat Rp130.000</span></td><td>38 Kg</td><td>3 Hari</td>
<td>
<button class="align-items-center me-5 add-wishlist-btn btn" type="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></button>
<a class="btn my-btn-primary px-5 buy-btn" href="/checkout">Beli</a>
</td>
</tr>
<tr class="table-list">
<td><span class="qty-value">17</span> Rim</td><td class="my-text-primary">Rp<span class="price-value">64.000</span></td><td>Rp<span class="sub-total">1.088.000</span><br/><span class="table-disc">Hemat Rp170.000</span></td><td>42 Kg</td><td>3 Hari</td>
<td>
<button class="align-items-center me-5 add-wishlist-btn btn" type="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></button>
<a class="btn my-btn-primary px-5 buy-btn" href="/checkout">Beli</a>
</td>
</tr>
<tr class="table-list">
<td><span class="qty-value">20</span> Rim</td><td class="my-text-primary">Rp<span class="price-value">62.000</span></td><td>Rp<span class="sub-total">1.240.000</span><br/><span class="table-disc">Hemat Rp600.000</span></td><td>49 Kg</td><td>3 Hari</td>
<td>
<button class="align-items-center me-5 add-wishlist-btn btn" type="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></button>
<a class="btn my-btn-primary px-5 buy-btn" href="/checkout">Beli</a>
</td>
</tr>
<tr class="table-list">
<td><span class="qty-value">25</span> Rim</td><td class="my-text-primary">Rp<span class="price-value">60.000</span></td><td>Rp<span class="sub-total">1.500.000</span><br/><span class="table-disc">Hemat Rp1.250.000</span></td><td>55 Kg</td><td>4 Hari</td>
<td>
<button class="align-items-center me-5 add-wishlist-btn btn" type="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></button>
<a class="btn my-btn-primary px-5 buy-btn" href="/checkout">Beli</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>


<p class="fs-5 mb-4">Design Cetak Buku</p>
<div class="section-card">

<ul class="nav nav-tabs category-tab mb-3" id="kategoriTab">
<li class="nav-item"><a class="nav-link fw-normal text-standard active" data-bs-toggle="tab" href="#kat-all">Semua</a></li>
<li class="nav-item"><a class="nav-link fw-normal text-standard" data-bs-toggle="tab" href="#kat-kuliner">Kuliner</a></li>
<li class="nav-item"><a class="nav-link fw-normal text-standard" data-bs-toggle="tab" href="#kat-laundry">Laundry</a></li>
<li class="nav-item"><a class="nav-link fw-normal text-standard" data-bs-toggle="tab" href="#kat-kursus">Kursus</a></li>
<li class="nav-item"><a class="nav-link fw-normal text-standard" data-bs-toggle="tab" href="#kat-otomotif">Otomotif</a></li>
</ul>

<div class="tab-content">
<div class="tab-pane fade show active" id="kat-all">
<div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
<div class="col"><div class="design-card text-standard"><img class="design-img" src="https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"><div>Buku Paket</div><button class="btn my-btn-outline-primary my-2 rounded-0 text-standard" type="button">Customize</button></img></div></div>
<div class="col"><div class="design-card text-standard"><img class="design-img" src="https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"><div>Buku Bacaan</div><button class="btn my-btn-outline-primary my-2 rounded-0 text-standard" type="button">Customize</button></img></div></div>
<div class="col"><div class="design-card text-standard"><img class="design-img" src="https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"><div>Modul Belajar</div><button class="btn my-btn-outline-primary my-2 rounded-0 text-standard" type="button">Customize</button></img></div></div>
<div class="col"><div class="design-card text-standard"><img class="design-img" src="https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"><div>Buku Tulis</div><button class="btn my-btn-outline-primary my-2 rounded-0 text-standard" type="button">Customize</button></img></div></div>
<div class="col"><div class="design-card text-standard"><img class="design-img" src="https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"><div>Notebook Custom</div><button class="btn my-btn-outline-primary my-2 rounded-0 text-standard" type="button">Customize</button></img></div></div>
<div class="col"><div class="design-card text-standard"><img class="design-img" src="https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"><div>Agenda</div><button class="btn my-btn-outline-primary my-2 rounded-0 text-standard" type="button">Customize</button></img></div></div>
</div>
<div class="text-end mt-2"><a class="text-decoration-none text-standard" href="#">Tampilkan Semua</a></div>
</div>

<div class="tab-pane fade" id="kat-kuliner">
<div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
<div class="col"><div class="design-card text-standard"><img class="design-img" src="https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"/><div>Buku Resep</div><button class="btn my-btn-outline-primary my-2 rounded-0 text-standard" type="button">Customize</button></div></div>
</div>
</div>
<div class="tab-pane fade" id="kat-laundry">
<div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
<div class="col"><div class="design-card text-standard"><img class="design-img" src="https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"/><div>Buku Nota</div><button class="btn my-btn-outline-primary my-2 rounded-0 text-standard" type="button">Customize</button></div></div>
</div>
</div>
<div class="tab-pane fade" id="kat-kursus">
<div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
<div class="col"><div class="design-card text-standard"><img class="design-img" src="https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"/><div>Modul Kursus</div><button class="btn my-btn-outline-primary my-2 rounded-0 text-standard" type="button">Customize</button></div></div>
</div>
</div>
<div class="tab-pane fade" id="kat-otomotif">
<div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
<div class="col"><div class="design-card text-standard"><img class="design-img" src="https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"/><div>Katalog Sparepart</div><button class="btn my-btn-outline-primary my-2 rounded-0 text-standard" type="button">Customize</button></div></div>
</div>
</div>
</div>
</div>

<div class="section-card pt-2 pb-1">
<ul class="nav nav-tabs mb-4" id="panduanTab" role="tablist">
<li class="nav-item" role="presentation">
<button aria-controls="panduan" aria-selected="true" class="nav-link text-standard fw-normal active" data-bs-target="#panduan" data-bs-toggle="tab" id="panduan-tab" role="tab" type="button">Panduan Design</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="faq" aria-selected="false" class="nav-link text-standard fw-normal" data-bs-target="#faq" data-bs-toggle="tab" id="faq-tab" role="tab" type="button">FAQ</button>
</li>
</ul>
<div class="tab-content" id="myTabContent">
<div aria-labelledby="panduan-tab" class="tab-pane fade show active" id="panduan" role="tabpanel">
<div class="table-responsive">
<table class="table align-middle mb-0">
<thead>
<tr><th class="text-standard">Download Panduan Design Pdf</th></tr>
</thead>
<tbody>
<tr><td class="text-standard"><i class="fa-solid fa-file-pdf download-icon"></i>Buku A4 Portrait</td></tr>
<tr><td class="text-standard"><i class="fa-solid fa-file-pdf download-icon"></i>Buku A5 Portrait</td></tr>
<tr><td class="text-standard"><i class="fa-solid fa-file-pdf download-icon"></i>Buku B5 Landscape</td></tr>
<tr><td class="text-standard"><i class="fa-solid fa-file-pdf download-icon"></i>Buku Tulis Custom</td></tr>
</tbody>
</table>
</div>
</div>
<div aria-labelledby="faq-tab" class="tab-pane fade" id="faq" role="tabpanel">
<div class="faq-section">
<span class="text-standard">
<strong>Q: Apakah bisa request ukuran khusus?</strong><br/>
                  A: Bisa, silakan konsultasikan dengan tim kami.
                  <br/><br/>
<strong>Q: Berapa lama proses pengerjaan?</strong><br/>
                  A: Estimasi sesuai tabel dan variasi pesanan.
                </span>
</div>
</div>
</div>
</div>

<p class="text-center my-3 fs-5">Buy Together</p>
<div class="row mb-5 g-3">
<div class="col-md-3 col-6">
<div class="card card-product h-100">
<span class="badge badge-new position-absolute m-2">New</span>
<img class="card-img-top p-3 object-fit-contain" src="https://percetakan-dulank.com/wp-content/uploads/2023/04/140630376_4088b1f6-664b-4ace-92ae-1b90ca464988_1200_968.jpg"/>
<div class="card-body">
<div class="card-product-title text-standard">Kop Surat letter head</div>
<div class="product-price text-standard fs-6">Rp75.000</div>
<button class="btn my-btn-outline-primary w-100 btn-sm text-standard mt-2" type="button">Buy now at Rp75.000</button>
</div>
</div>
</div>
<div class="col-md-3 col-6">
<div class="card card-product h-100">
<span class="badge badge-sale position-absolute m-2">Sale</span>
<img class="card-img-top p-3 object-fit-contain" src="https://percetakan-dulank.com/wp-content/uploads/2023/04/Kalender-Plakat-Acrilyc-570x570.jpg"/>
<div class="card-body">
<div class="card-product-title text-standard">Kalender Plakat Acrilyc</div>
<div class="product-price text-standard fs-6">Rp262.500</div>
<button class="btn my-btn-outline-primary w-100 btn-sm text-standard mt-2" type="button">Select Options</button>
</div>
</div>
</div>
<div class="col-md-3 col-6">
<div class="card card-product h-100">
<span class="badge badge-new position-absolute m-2">New</span>
<img class="card-img-top p-3 object-fit-contain" src="https://percetakan-dulank.com/wp-content/uploads/2023/08/kn_48.jpg"/>
<div class="card-body">
<div class="card-product-title text-standard">Kartu Nama</div>
<div class="product-price text-standard fs-6">Rp50.000</div>
<button class="btn my-btn-outline-primary w-100 btn-sm text-standard mt-2" type="button">Select Options</button>
</div>
</div>
</div>
<div class="col-md-3 col-6">
<div class="card card-product h-100">
<span class="badge badge-discount position-absolute m-2">-37%</span>
<img class="card-img-top p-3 object-fit-contain" src="https://percetakan-dulank.com/wp-content/uploads/2023/04/Bendera-1-570x570.jpg"/>
<div class="card-body">
<div class="card-product-title text-standard">Bendera</div>
<div class="product-old-price small">Rp80.000</div>
<div class="product-price text-standard fs-6">Rp50.400</div>
<button class="btn my-btn-outline-primary w-100 btn-sm text-standard mt-2" type="button">Buy now at Rp50.400</button>
</div>
</div>
</div>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>

<div aria-hidden="true" aria-labelledby="qtyModalLabel" class="modal fade text-standard" id="qtyModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="qtyModalLabel">Input Your Quantity</h5>
<div class="d-flex align-items-center">
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
</div>
<div class="modal-body">
<div class="row align-items-center">
<div class="col-5">
<label class="custom-label text-standard">Qty Pesanan (Pcs)</label>
</div>
<div class="col-7 pe-4 d-flex list-spec align-items-center" id="qty">
<button class="btn quantity-btn" id="minQty" type="button">-</button>
<input class="form-control rounded-0 bg-white mx-2 number-separator" id="qtyInput" inputmode="numeric" pattern="[0-9]*" placeholder="0" required="" type="text"/>
<input class="result-input" type="hidden" value="0"/>
<button class="btn quantity-btn" id="plusQty" type="button">+</button>
</div>
</div>
<div class="text-end mt-3">
<button aria-label="Close" class="btn my-btn-primary w-50" data-bs-dismiss="modal" type="button">Simpan</button>
</div>
</div>
</div>
</div>
</div>










</div>
</template>
