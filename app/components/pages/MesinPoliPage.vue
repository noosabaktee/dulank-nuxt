<script setup lang="ts">
useLegacyPage({
  "title": "Poli",
  "styles": [
    "/css/style.css",
    "/css/pages/mesin-poli-inline.css"
  ],
  "scripts": [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/mesin-poli.js",
    "/js/pages/mesin-poli-events.js"
  ],
  "sweetAlert": true
})
</script>

<template>
<div class="dulank-page dulank-page-mesin-poli">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

<div class="col-lg-9">
<h4 class="fs-5 mb-md-5 mb-3">Mesin Poli</h4>
<div class="d-flex justify-content-md-end justify-content-center mt-3">
<button class="btn my-btn-primary col-md-3 col-6 me-3" data-bs-target="#addNewLaminateModal" data-bs-toggle="modal" type="button">+Add New Poli</button>
<button class="btn my-btn-outline-primary col-md-3 col-6" data-js-click="mesin-poli-001" type="button">Search Poli</button>
</div>
<div class="d-flex mb-3 mt-2 justify-content-between">
<div class="dropdown">
<span role="button"></span>
<span aria-expanded="false" class="fs-6 fw-semibold" data-bs-toggle="dropdown" role="button" type="button">
<i class="bi bi-sliders me-2"></i> Filter
                            </span>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Hanya tampilkan milik sendiri</a></li>
<li><a class="dropdown-item" href="#">Tampilkan dari percetakan lain</a></li>
</ul>
</div>
</div>
<div class="d-none" id="formSearch">
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
<button class="btn my-btn-primary mt-2 col-md-4 col-6" data-bs-target="#modalCariPoli" data-bs-toggle="modal" type="button">Tampilkan</button>
</div>
</div>
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-2 small">Nama</div>
<div class="col-md-2 small">Ukuran Max</div>
<div class="col-md-2 small">Harga (cm)</div>
<div class="col-md-2 small">Harga Minim</div>
<div class="col-md-2 small">Updated</div>
<div class="col-md-1 small">Status</div>
<div class="col-md-1 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Nama">Standard</div>
<div class="col-12 col-md-2" data-label="Ukuran Max">30x15 cm</div>
<div class="col-12 col-md-2" data-label="Harga per cm">Rp20</div>
<div class="col-12 col-md-2" data-label="Harga Minim">
                                Rp200.000 <br/>
                                Hitungan: Rp50
                            </div>
<div class="col-12 col-md-2" data-label="Updated">20/12/12 23:12</div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-deactive">Deactive</span>
</div>
<div class="col-12 col-md-1">
<div class="dropdown">
<a aria-expanded="false" class="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="calculatorDropdown1" role="button">
                                        Aksi
                                    </a>
<ul aria-labelledby="calculatorDropdown1" class="dropdown-menu">
<li><a class="text-standard dropdown-item">Active</a></li>
<li><a class="text-standard dropdown-item">Deactive</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Publish</a></li>
<li><a class="text-standard dropdown-item">Private</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="mesin-poli-002" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Nama">Hologram</div>
<div class="col-12 col-md-2" data-label="Ukuran Max">30x15 cm</div>
<div class="col-12 col-md-2" data-label="Harga per cm">Rp18</div>
<div class="col-12 col-md-2" data-label="Harga Minim">
                                Rp180.000 <br/>
                                Hitungan: Rp50
                            </div>
<div class="col-12 col-md-2" data-label="Updated">20/12/12 23:12</div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge status-private">Private</span>
<span class="badge status-deactive">Deactive</span>
</div>
<div class="col-12 col-md-1">
<div class="dropdown">
<a aria-expanded="false" class="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="calculatorDropdown2" role="button">
                                        Aksi
                                    </a>
<ul aria-labelledby="calculatorDropdown2" class="dropdown-menu">
<li><a class="text-standard dropdown-item">Active</a></li>
<li><a class="text-standard dropdown-item">Deactive</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Publish</a></li>
<li><a class="text-standard dropdown-item">Private</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="mesin-poli-003" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div aria-hidden="true" aria-labelledby="addNewLaminateModalLabel" class="modal fade text-standard" id="addNewLaminateModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="addNewLaminateModalLabel">Add New Hot Foil</h5>
<div class="d-flex align-items-center">
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
</div>
<div class="modal-body">
<div>
<form>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="name">Nama</label>
</div>
<div class="col-7">
<input class="form-control" id="name" type="text"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label">Ukuran Maksimal (cm)</label>
</div>
<div class="col-7">
<div class="row">
<div class="col-6">
<div class="input-group input-group-sm">
<span class="input-group-text">P</span>
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="width-add" type="hidden"/>
</div>
</div>
<div class="col-6">
<div class="input-group input-group-sm">
<span class="input-group-text">L</span>
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="height-add" type="hidden"/>
</div>
</div>
</div>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="price-per-cm">Harga per Centimeter</label>
</div>
<div class="col-7">
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="price-per-cm" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="price-min">Harga Minimal</label>
</div>
<div class="col-7">
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="price-min" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="price-min-count">Harga Minim Hitungan</label>
</div>
<div class="col-7">
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="price-min-count" type="hidden"/>
</div>
</div>
<small class="d-none text-standard text-danger" id="info-selected-all"><i class="fa-solid fa-circle-info"></i> please input your specification<br/></small>
<div class="row mb-3">
<div class="col-5">
<button class="btn w-100" id="cancel-btn-1" type="button">Batal</button>
</div>
<div class="col-7">
<button class="btn my-btn-primary w-100" id="save-btn">Simpan</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="modalCariPoliLabel" class="modal fade" id="modalCariPoli" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content rounded-4 pb-1">
<div class="modal-header">
<h6 class="modal-title" id="modalCariPoliLabel"><i class="fa fa-search"></i> Hasil Pencarian Poli di Percetakan lain</h6>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body" id="inline-style-mesin-poli-001">

<div class="mb-4" id="searchResult">
<div>
<div class="small border-bottom py-2">
<div class="d-flex justify-content-between align-items-center">
<div>
<span class="fw-bold small">Percetakan Grafika 1</span><br/>
<span class="text-secondary text-standard">Karawang Barat, Karawang, Jawa Barat</span>
</div>
<button class="btn my-btn-outline-primary" type="button">Pilih</button>
</div>
<div class="accordion my-1" id="accordionExample">
<div class="accordion-item border-0">
<h2 class="accordion-header">
<button aria-controls="collapseOne" aria-expanded="true" class="accordion-button text-standard p-0 shadow-none bg-white text-dark" data-bs-target="#collapseOne" data-bs-toggle="collapse" type="button">
                                                Tampilkan Poli Tersedia
                                            </button>
</h2>
<div class="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseOne">
<div class="accordion-body p-1">
<div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked1" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked1">
                                                            Standard
                                                        </label>
</div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked2" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked2">
                                                            Hologram
                                                        </label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>









</div>
</template>
