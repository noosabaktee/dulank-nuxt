<script setup lang="ts">
useLegacyPage({
  "title": "Mesin Pond",
  "styles": [
    "/css/style.css",
    "/css/pages/mesin-pond-inline.css"
  ],
  "scripts": [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/mesin-pond.js",
    "/js/pages/mesin-pond-events.js"
  ],
  "sweetAlert": true
})
</script>

<template>
<div class="dulank-page dulank-page-mesin-pond">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

<div class="col-lg-9">
<h4 class="fs-5 mb-3">Mesin Pond</h4>
<ul class="nav nav-tabs category-tab" id="myTab" role="tablist">
<li class="nav-item" role="presentation">
<button aria-controls="jenis-tab-pane" aria-selected="true" class="nav-link text-standard active" data-bs-target="#jenis-tab-pane" data-bs-toggle="tab" id="jenis-tab" role="tab" type="button">Jenis Mesin Pond</button>
</li>
<li class="nav-item" role="presentation">
<button aria-controls="pisau-tab-pane" aria-selected="false" class="nav-link text-standard" data-bs-target="#pisau-tab-pane" data-bs-toggle="tab" id="pisau-tab" role="tab" type="button">Harga Pisau</button>
</li>
</ul>
<div class="tab-content" id="myTabContent">

<div aria-labelledby="jenis-tab" class="tab-pane fade show active" id="jenis-tab-pane" role="tabpanel" tabindex="0">
<div class="d-flex justify-content-md-end justify-content-center mt-3">
<button class="btn my-btn-primary col-md-3 col-6 me-3" data-bs-target="#addNewDieCuttingModal" data-bs-toggle="modal" type="button">+Add New Pond</button>
<button class="btn my-btn-outline-primary col-md-3 col-6" data-js-click="mesin-pond-001" type="button">Search Pond</button>
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
<button class="btn my-btn-primary mt-2 col-md-4 col-6" data-bs-target="#modalCariMesinPond" data-bs-toggle="modal" type="button">Tampilkan</button>
</div>
</div>
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-2 small">Nama</div>
<div class="col-md-2 small">Ukuran</div>
<div class="col-md-2 small">Standard</div>
<div class="col-md-2 small">Setengah Putus</div>
<div class="col-md-2 small">Update</div>
<div class="col-md-1 small">Status</div>
<div class="col-md-1 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Nama">
                                    Mesin Pond Kecil
                                </div>
<div class="col-12 col-md-2" data-label="Ukuran">
                                    79x109 <br/>
                                    Centimeter
                                </div>
<div class="col-12 col-md-2" data-label="Pond Standard">
                                    Harga: Rp50 <br/>
                                    Minim: Rp50.000
                                </div>
<div class="col-12 col-md-2" data-label="Setengah Putus">
                                    Harga: Rp100 <br/>
                                    Minim: Rp100.000
                                </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-deactive">Deactive</span>
</div>
<div class="col-12 col-md-1 text-center">
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
<li><a class="text-standard dropdown-item" data-js-click="mesin-pond-002" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Nama">
                                    Mesin Pond Sedang
                                </div>
<div class="col-12 col-md-2" data-label="Ukuran">
                                    79x109 <br/>
                                    Centimeter
                                </div>
<div class="col-12 col-md-2" data-label="Pond Standard">
                                    Harga: Rp50 <br/>
                                    Minim: Rp50.000
                                </div>
<div class="col-12 col-md-2" data-label="Setengah Putus">
                                    Harga: Rp100 <br/>
                                    Minim: Rp100.000
                                </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-active">Active</span>
</div>
<div class="col-12 col-md-1 text-center">
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
<li><a class="text-standard dropdown-item" data-js-click="mesin-pond-003" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Nama">
                                    Mesin Pond Besar
                                </div>
<div class="col-12 col-md-2" data-label="Ukuran">
                                    79x109 <br/>
                                    Centimeter
                                </div>
<div class="col-12 col-md-2" data-label="Pond Standard">
                                    Harga: Rp50 <br/>
                                    Minim: Rp50.000
                                </div>
<div class="col-12 col-md-2" data-label="Setengah Putus">
                                    Harga: Rp100 <br/>
                                    Minim: Rp100.000
                                </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-deactive">Deactive</span>
</div>
<div class="col-12 col-md-1 text-center">
<div class="dropdown">
<a aria-expanded="false" class="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="calculatorDropdown3" role="button">
                                            Aksi
                                        </a>
<ul aria-labelledby="calculatorDropdown3" class="dropdown-menu">
<li><a class="text-standard dropdown-item">Active</a></li>
<li><a class="text-standard dropdown-item">Deactive</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Publish</a></li>
<li><a class="text-standard dropdown-item">Private</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="mesin-pond-004" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="pisau-tab" class="tab-pane fade" id="pisau-tab-pane" role="tabpanel" tabindex="0">
<h4 class="fs-6 mb-3 mt-3">Harga Pisau Pond</h4>
<div class="d-flex justify-content-md-end justify-content-center mt-3">
<button class="btn my-btn-primary col-md-3 col-6 me-3" data-bs-target="#addNewPisauModal" data-bs-toggle="modal" type="button">+Add New Pisau</button>
<button class="btn my-btn-outline-primary col-md-3 col-6" data-js-click="mesin-pond-005" type="button">Search Pisau</button>
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
<div class="d-none" id="formSearchPisau">
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
<div class="d-flex justify-content-end">
<button class="w-50 btn my-btn-primary mt-2" data-bs-target="#modalCariMesinPond" data-bs-toggle="modal" type="button">Tampilkan</button>
</div>
</div>
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-3 small">Nama Barang</div>
<div class="col-md-3 small">Harga per cm</div>
<div class="col-md-2 small">Updated</div>
<div class="col-md-2 small">Status</div>
<div class="col-md-2 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama Barang">
                                    Papan
                                </div>
<div class="col-12 col-md-3" data-label="Harga per cm">
                                    Rp500
                                </div>
<div class="col-12 col-md-2" data-label="Updated">20 Januari 2024</div>
<div class="col-12 col-md-2" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-deactive">Deactive</span>
</div>
<div class="col-12 col-md-2 d-flex justify-content-between">
<div class="dropdown">
<a aria-expanded="false" class="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="calculatorDropdown4" role="button">
                                            Aksi
                                        </a>
<ul aria-labelledby="calculatorDropdown4" class="dropdown-menu">
<li><a class="text-standard dropdown-item">Active</a></li>
<li><a class="text-standard dropdown-item">Deactive</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Publish</a></li>
<li><a class="text-standard dropdown-item">Private</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="mesin-pond-006" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama Barang">
                                    Piso/Rel
                                </div>
<div class="col-12 col-md-3" data-label="Harga per cm">
                                    Rp25
                                </div>
<div class="col-12 col-md-2" data-label="Updated">20 Januari 2024</div>
<div class="col-12 col-md-2" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-active">Active</span>
</div>
<div class="col-12 col-md-2 d-flex justify-content-between">
<div class="dropdown">
<a aria-expanded="false" class="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="calculatorDropdown5" role="button">
                                            Aksi
                                        </a>
<ul aria-labelledby="calculatorDropdown5" class="dropdown-menu">
<li><a class="text-standard dropdown-item">Active</a></li>
<li><a class="text-standard dropdown-item">Deactive</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Publish</a></li>
<li><a class="text-standard dropdown-item">Private</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="mesin-pond-007" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div aria-hidden="true" aria-labelledby="addNewDieCuttingModalLabel" class="modal fade text-standard" id="addNewDieCuttingModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="addNewDieCuttingModalLabel">Add New Die Cutting Profile</h5>
<div class="d-flex align-items-center">
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
</div>
<div class="modal-body">
<div>
<form>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="name">Nama (Opsional))</label>
</div>
<div class="col-7">
<input class="form-control" id="name" type="text"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label">Ukuran Mesin Pond</label>
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
<hr/>
<span class="text-standard">Teknik Pond Standard</span>
<div class="row my-3">
<div class="col-5">
<label class="form-label" for="price-jasa-standard">Harga Jasa per pcs</label>
</div>
<div class="col-7">
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="price-jasa-standard" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="price-min-standard">Harga Minimal</label>
</div>
<div class="col-7">
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="price-min-standard" type="hidden"/>
</div>
</div>
<hr/>
<span class="text-standard mb-3">Teknik Pond Setengah Putus</span>
<div class="row my-3">
<div class="col-5">
<label class="form-label" for="price-jasa-setengah">Harga Jasa per pcs</label>
</div>
<div class="col-7">
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="price-jasa-setengah" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="price-min-setengah">Harga Minimal</label>
</div>
<div class="col-7">
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="price-min-setengah" type="hidden"/>
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

<div aria-hidden="true" aria-labelledby="addNewPisauModalLabel" class="modal fade text-standard" id="addNewPisauModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="addNewPisauModalLabel">Update Die Cung Blades</h5>
<div class="d-flex align-items-center">
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
</div>
<div class="modal-body">
<div>
<form>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="knife-name">Nama</label>
</div>
<div class="col-7">
<input class="form-control" id="knife-name" type="text"/>
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
<small class="d-none text-standard text-danger" id="info-selected-all-2"><i class="fa-solid fa-circle-info"></i> please input your specification<br/></small>
<div class="row mb-3">
<div class="col-5">
<button class="btn w-100" id="cancel-btn-2" type="button">Batal</button>
</div>
<div class="col-7">
<button class="btn my-btn-primary w-100" id="update-btn">Update</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="modalCariMesinPondLabel" class="modal fade" id="modalCariMesinPond" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content rounded-4 pb-1">
<div class="modal-header">
<h6 class="modal-title" id="modalCariMesinPondLabel"><i class="fa fa-search"></i> Hasil Pencarian Mesin Pond di Percetakan lain</h6>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body" id="inline-style-mesin-pond-001">

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
                                                Tampilkan Mesin Pond Tersedia
                                            </button>
</h2>
<div class="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseOne">
<div class="accordion-body p-1">
<div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked1" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked1">
                                                            Mesin Pond Kecil
                                                        </label>
</div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked2" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked2">
                                                            Mesin Pond Sedang
                                                        </label>
</div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked3" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked3">
                                                            Mesin Pond Besar
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
