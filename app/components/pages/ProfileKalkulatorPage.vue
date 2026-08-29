<script setup lang="ts">
useLegacyPage({
  "title": "Profile Kalkulator",
  "styles": [
    "/css/style.css",
    "/css/pages/profile-kalkulator-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/address-input.js",
    "/js/pages/profile-kalkulator.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-profile-kalkulator">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

<div class="col-lg-9">

<div class="row justify-content-start">
<h4 class="fs-5 mb-md-5 mb-3">Profile Kalkulator</h4>
<div class="col-md-3 col-6">
<div class="text-center">
<div class="profile-avatar ratio ratio-4x3">
<img alt="User Avatar" class="rounded-circle" id="inline-style-profile-kalkulator-001" src="/images/tab.png"/>
<div class="profile-avatar-badge">
<i class="fas fa-camera"></i>
</div>
</div>
</div>
</div>
<div class="col-md-6 col-6">
<p class="text-standard">ID User 4525745415</p>
<p class="text-standard">Free User <span class="badge bg-primary">Upgrade Member</span></p>
<p class="text-standard">Join 15/06/2025</p>
<p class="text-standard">Active until : 15/06/2026</p>
</div>
</div>

<div class="text-standard mt-5">
<div class="row mb-4">
<div class="col-4">
<label class="form-label" for="lots-print">Judul</label>
</div>
<div class="col-8">
<input class="form-control" id="title" placeholder="your title" type="text" value="Kalkulator Cetak"/>
</div>
</div>
<div class="row mb-4">
<div class="col-4">
<label class="form-label" for="lots-print">Nama Percetakan</label>
</div>
<div class="col-8">
<input class="form-control" id="name" placeholder="your name" type="text" value="Perctekan Grafika-Ku"/>
</div>
</div>
<div class="row mb-4">
<div class="col-4">
<label class="form-label" for="lots-print">Alamat</label>
</div>
<div class="col-8">
<div>
<div class="form-group position-relative">
<div class="input-group position-relative d-inline-flex align-items-center">
<input class="form-control text-standard" id="alamat-lengkap" placeholder="Provinsi, Kota, Kecamatan"/>
<span class="d-none position-absolute bg-secondary text-white rounded-circle d-flex align-items-center" id="clear-address">
<i class="bi bi-x-lg m-auto"></i>
</span>
<span class="position-absolute" id="search-icon">
<i class="bi bi-search"></i>
</span>
</div>
<div id="alamat-dropdown-wrapper">
<ul class="nav nav-tabs" id="alamatTab" role="tablist">
<li class="nav-item" role="presentation">
<button class="btn rounded-0 border-top-0 border-start-0 border-end-0 text-standard active" id="provinsi-tab" role="tab" type="button">Provinsi</button>
</li>
<li class="nav-item" role="presentation">
<button class="btn rounded-0 border-top-0 border-start-0 border-end-0 text-standard" id="kota-tab" role="tab" type="button">Kota</button>
</li>
<li class="nav-item" role="presentation">
<button class="btn rounded-0 border-top-0 border-start-0 border-end-0 text-standard" id="kecamatan-tab" role="tab" type="button">Kecamatan</button>
</li>
</ul>
<div class="tab-content p-2 shadow-sm" id="alamatTabContent">
<div class="tab-pane show active" id="provinsi-pane">
<ul class="list-unstyled mb-0 text-standard" id="provinsi-list"></ul>
</div>
<div class="tab-pane" id="kota-pane">
<ul class="list-unstyled mb-0 text-standard" id="kota-list"></ul>
</div>
<div class="tab-pane" id="kecamatan-pane">
<ul class="list-unstyled mb-0 text-standard" id="kecamatan-list"></ul>
</div>
</div>
<div class="p-2" id="alamat-search-result">
<ul class="list-unstyled mb-0 text-standard fw-light" id="alamat-search-list"></ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="row mb-4">
<div class="col-4">
<label class="form-label" for="lots-print">Whatsapp</label>
</div>
<div class="col-8">
<input class="form-control" id="wa" placeholder="your whatsapp number" type="text" value="0851762762"/>
</div>
</div>
<div class="mb-4 row">
<div class="col-4">
<label class="form-label" for="jumlah">Tampilkan Profile pada</label>
</div>
<div class="col-8 multiple-select" id="display">
<button class="btn btn-spec me-2 selected" type="button">Header Hitung Berat Kertas<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">Header Potong Kertas<span class="ribbon d-none"></span></button>
<button class="btn btn-spec me-2" type="button">Header Kalkulator Percetakan<span class="ribbon d-none"></span></button>
<br/>
<div class="mt-5">
<small class="d-none text-standard text-danger" id="info-selected-all"><i class="fa-solid fa-circle-info"></i> please select your specification<br/></small>
<button class="btn my-btn-primary w-100 mt-2" id="update-btn" type="button">Update Profile</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>








</div>
</template>
