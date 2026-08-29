<script setup lang="ts">
useLegacyPage({
  "title": "Semua Percetakan",
  "styles": [
    "/css/style.css",
    "/css/pages/semua-percetakan-inline.css"
  ],
  "scripts": [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-semua-percetakan">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

<div class="col-lg-9">
<h4 class="fs-5 mb-3">Semua Percetakan</h4>
<div class="mb-2">
<span class="text-standard"><i class="bi bi-geo-alt-fill me-2"></i>Dilokasi anda terdaftar
                            beberapa percetakan!</span>
</div>
<div id="formSearch">
<form>
<div class="mb-3">
<label class="form-label text-standard">Cari Nama Percetakan</label>
<div class="input-group">
<input class="form-control text-standard" placeholder="Nama Percetakan" type="text"/>
<span class="input-group-text"><i class="fa fa-search"></i></span>
</div>
</div>
<div class="row">
<div class="mb-3 col-md-4">
<label class="form-label text-standard">Provinsi</label>
<select class="form-select text-standard">
<option>Jawa Barat (26 Percetakan)</option>

</select>
</div>
<div class="mb-3 col-md-4">
<label class="form-label text-standard">Kabupaten</label>
<select class="form-select text-standard">
<option>Karawang (10 Percetakan)</option>

</select>
</div>
<div class="mb-3 col-md-4 ps-md-0">
<label class="form-label text-standard">Kecamatan</label>
<select class="form-select text-standard">
<option>Telukjambe Timur (3 Percetakan)</option>

</select>
</div>
</div>
</form>
<div class="d-flex justify-content-end ps-md-3">
<button class="btn my-btn-primary mt-2 col-md-4 col-6" type="button">Search</button>
</div>
</div>
<div>
<div class="card border-0 shadow-sm mb-3">
<div class="d-md-flex align-items-center p-3 justify-content-between">

<div class="d-flex">
<img alt="Foto Toko" class="rounded-circle me-3" id="inline-style-semua-percetakan-001" src="/images/tab.png"/>
<div class="flex-grow-1">
<div class="fw-bold fs-6 mb-1">Percetakan Grafika</div>
<div class="text-secondary text-standard mb-1">Jakarta, Jakarta Pusat, Kemayoran</div>
<div class="d-flex flex-wrap align-items-center gap-2 mb-1">
<span class="text-standard fw-bold">5,3RB</span>
<span class="text-standard text-secondary small">Pengikut</span>
<span class="text-standard text-secondary mx-1">|</span>
<span class="text-standard fw-bold">195</span>
<span class="text-standard text-secondary small">Mengikuti</span>
</div>
</div>
</div>
<div class="d-md-flex">
<div class="d-flex flex-row justify-content-between align-items-center ms-md-4 gap-3 mt-3 mt-md-0">
<div class="d-flex flex-column align-items-center">
<span class="fw-bold small">117</span>
<span class="text-secondary text-standard">Kertas</span>
</div>
<div class="d-flex flex-column align-items-center">
<span class="fw-bold small">4</span>
<span class="text-secondary text-standard text-center">Mesin Cetak</span>
</div>
<div class="d-flex flex-column align-items-center">
<span class="fw-bold small">2</span>
<span class="text-secondary text-standard text-center">Mesin Laminasi</span>
</div>
<div class="d-flex flex-column align-items-center">
<span class="fw-bold small">4</span>
<span class="text-secondary text-standard text-center">Mesin Pond</span>
</div>
<div class="d-flex flex-column align-items-center">
<span class="fw-bold small">8</span>
<span class="text-secondary text-standard text-center">Mesin Poli</span>
</div>
</div>
<div class="d-flex flex-md-column ms-md-4 mt-3 mt-md-0">
<a class="btn my-btn-outline-primary col-6 col-md-12 me-2 me-md-0 mb-md-2 px-3 py-1" href="/store">VISIT</a>
<button class="btn my-btn-outline-primary col-6 col-md-12 px-3 py-1" type="button">IKUTI</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" id="exampleModal" tabindex="-1">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body">
            ...
        </div>
<div class="modal-footer">
<button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
<button class="btn btn-primary" type="button">Save changes</button>
</div>
</div>
</div>
</div>







</div>
</template>
