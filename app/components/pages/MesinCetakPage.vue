<script setup lang="ts">
useLegacyPage({
  "title": "Mesin Cetak",
  "styles": [
    "/css/style.css",
    "/css/pages/mesin-cetak-inline.css"
  ],
  "scripts": [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/mesin-cetak.js",
    "/js/pages/mesin-cetak-events.js"
  ],
  "sweetAlert": true
})
</script>

<template>
<div class="dulank-page dulank-page-mesin-cetak">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

<div class="col-lg-9">
<div class="mt-3 d-md-flex justify-content-md-between">
<h4 class="fs-5">Mesin Cetak</h4>
</div>
<div class="d-flex justify-content-md-end justify-content-center">
<button class="btn my-btn-primary col-md-3 col-6 me-3" data-bs-target="#addNewMachineModal" data-bs-toggle="modal" type="button">Add New Machine</button>
<button class="btn my-btn-outline-primary col-md-3 col-6" data-js-click="mesin-cetak-001" type="button">Search Machine</button>
</div>
<div class="d-flex mb-3 mt-2 justify-content-between align-items-center">
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
<button class="btn my-btn-primary mt-2 col-md-4 col-6" data-bs-target="#modalCariMesin" data-bs-toggle="modal" type="button">Tampilkan</button>
</div>
</div>
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-3 small">Sumber</div>
<div class="col-md-3 small">Nama</div>
<div class="col-md-2 small">Harga</div>
<div class="col-md-2 small">Update</div>
<div class="col-md-1 small">Status</div>
<div class="col-md-1 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Sumber">
                                Percetakan Grafika <br/>
                                Jakarta Pusat, Jakarta
                            </div>
<div class="col-12 col-md-3" data-label="Nama">
                                Heidelberg GTO52 <br/>
                                4 Warna
                            </div>
<div class="col-12 col-md-2" data-label="Harga">
                                minim: Rp240.000<br/>
                                druck: Rp60
                            </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-active">Active</span>
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
<li><a class="text-standard dropdown-item" data-bs-target="#detailModal" data-bs-toggle="modal" role="button">Detail</a></li>
<li><a class="text-standard dropdown-item" href="/kalkulator-potong-kertas">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="mesin-cetak-002" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Sumber">
                                Milik Sendiri
                            </div>
<div class="col-12 col-md-3" data-label="Nama">
                                Heidelberg GTO52 <br/>
                                4 Warna
                            </div>
<div class="col-12 col-md-2" data-label="Harga">
                                minim: Rp240.000<br/>
                                druck: Rp60
                            </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-active">Active</span>
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
<li><a class="text-standard dropdown-item" data-bs-target="#detailModal" data-bs-toggle="modal" role="button">Detail</a></li>
<li><a class="text-standard dropdown-item" href="/kalkulator-potong-kertas">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="mesin-cetak-003" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Sumber">
                                Percetakan Grafika <br/>
                                Jakarta Pusat, Jakarta
                            </div>
<div class="col-12 col-md-3" data-label="Nama">
                                Heidelberg GTO52 <br/>
                                4 Warna
                            </div>
<div class="col-12 col-md-2" data-label="Harga">
                                minim: Rp240.000<br/>
                                druck: Rp60
                            </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-active">Active</span>
</div>
<div class="col-12 col-md-1">
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
<li><a class="text-standard dropdown-item" data-bs-target="#detailModal" data-bs-toggle="modal" role="button">Detail</a></li>
<li><a class="text-standard dropdown-item" href="/kalkulator-potong-kertas">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="mesin-cetak-004" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Sumber">
                                Milik Sendiri
                            </div>
<div class="col-12 col-md-3" data-label="Nama">
                                Heidelberg GTO52 <br/>
                                4 Warna
                            </div>
<div class="col-12 col-md-2" data-label="Harga">
                                minim: Rp240.000<br/>
                                druck: Rp60
                            </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-active">Active</span>
</div>
<div class="col-12 col-md-1">
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
<li><a class="text-standard dropdown-item" data-bs-target="#detailModal" data-bs-toggle="modal" role="button">Detail</a></li>
<li><a class="text-standard dropdown-item" href="/kalkulator-potong-kertas">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="mesin-cetak-005" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Sumber">
                                Percetakan Grafika <br/>
                                Jakarta Pusat, Jakarta
                            </div>
<div class="col-12 col-md-3" data-label="Nama">
                                Heidelberg GTO52 <br/>
                                4 Warna
                            </div>
<div class="col-12 col-md-2" data-label="Harga">
                                minim: Rp240.000<br/>
                                druck: Rp60
                            </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-active">Active</span>
</div>
<div class="col-12 col-md-1">
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
<li><a class="text-standard dropdown-item" data-bs-target="#detailModal" data-bs-toggle="modal" role="button">Detail</a></li>
<li><a class="text-standard dropdown-item" href="/kalkulator-potong-kertas">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="mesin-cetak-006" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div aria-hidden="true" aria-labelledby="addNewMachineModalLabel" class="modal fade text-standard" id="addNewMachineModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="addNewMachineModalLabel">Add New Machine Profile</h5>
<div class="d-flex align-items-center">
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
</div>
<div class="modal-body">
<div>
<form>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="pilihSatuan">Pilih Satuan Ukuran</label>
</div>
<div class="col-7">
<button class="btn btn-spec me-2 selected" type="button">Centimeter<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">Milimeter<span class="ribbon d-none"></span></button>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="name">Nama Mesin</label>
</div>
<div class="col-7">
<input class="form-control" id="name" type="text"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="warna-unit">Warna Unit</label>
</div>
<div class="col-7">
<input class="form-control number-separator" id="warna-unit" type="text"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label">Area Kertas</label>
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
<label class="form-label" for="width-jepitan">Lebar Jepitan</label>
</div>
<div class="col-7">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="width-jepitan" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="max-gms">Maksimal GSM</label>
</div>
<div class="col-7">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="max-gms" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="price-plat">Harga Plat</label>
</div>
<div class="col-7">
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="price-plat" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="endurance-plat">Ketahanan Plat (Lbr)</label>
</div>
<div class="col-7">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="endurance-plat" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="insit">Insit Setelan</label>
</div>
<div class="col-7">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="insit" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="min-qty">Minimum Qty</label>
</div>
<div class="col-7">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="min-qty" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="min-price">Harga Minimum</label>
</div>
<div class="col-7">
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="min-price" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="price-duck">Harga Druck</label>
</div>
<div class="col-7">
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="price-duck" type="hidden"/>
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

<div aria-hidden="true" aria-labelledby="modalCariMesinLabel" class="modal fade" id="modalCariMesin" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content rounded-4 pb-1">
<div class="modal-header">
<h6 class="modal-title" id="modalCariMesinLabel"><i class="fa fa-search"></i> Hasil Pencarian Mesin di Percetakan lain</h6>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body" id="inline-style-mesin-cetak-001">

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
                                                Tampilkan Mesin Tersedia
                                            </button>
</h2>
<div class="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseOne">
<div class="accordion-body p-1">
<div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked1" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked1">
                                                            Mesin GTO 52 2 Warna
                                                        </label>
</div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked2" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked2">
                                                            Mesin Oliver 52 1 Warna
                                                        </label>
</div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked3" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked3">
                                                            Mesin SM 52 4 Warna
                                                        </label>
</div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked4" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked4">
                                                            Mesin Heidelberg MOV 66 4 Warna
                                                        </label>
</div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked5" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked5">
                                                            Mesin Oliver 66 2 Warna
                                                        </label>
</div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked6" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked6">
                                                            Mesin Heidelberg Sm74 4 Warna
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

<div aria-hidden="true" aria-labelledby="detailModalLabel" class="modal modal-sm fade" id="detailModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content rounded-4 pb-1">
<div class="modal-header">
<h5 class="modal-title" id="detailModalLabel">Detail</h5>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body" id="inline-style-mesin-cetak-002">
<div>
<div class="mb-4">
<span class="text-standard fw-semibold">Sumber : Percetakan Warna Grafika</span><br/>
<span class="text-secondary text-standard">Jakarta Pusat, Jakarta</span><br/>
<span class="text-secondary text-standard">Update : 20 Januari 2024</span>
</div>
<div class="mb-2 d-flex justify-content-between">
<span class="text-standard">Nama Mesin</span>
<span class="text-standard fw-semibold text-end">Heidelberg GTO52</span>
</div>
<div class="mb-2 d-flex justify-content-between">
<span class="text-standard">Warna Unit</span>
<span class="text-standard fw-semibold text-end">4 Warna</span>
</div>
<div class="mb-2 d-flex justify-content-between">
<span class="text-standard">Area Kertas</span>
<span class="text-standard fw-semibold text-end">520 x 430 Milimeter</span>
</div>
<div class="mb-2 d-flex justify-content-between">
<span class="text-standard">Lebar Jepitan</span>
<span class="text-standard fw-semibold text-end">15 Milimeter</span>
</div>
<div class="mb-2 d-flex justify-content-between">
<span class="text-standard">Maksimal GSM</span>
<span class="text-standard fw-semibold text-end">310 gsm</span>
</div>
<div class="mb-2 d-flex justify-content-between">
<span class="text-standard">Harga Plat</span>
<span class="text-standard fw-semibold text-end">Rp60.000</span>
</div>
<div class="mb-2 d-flex justify-content-between">
<span class="text-standard">Ketahanan Plat</span>
<span class="text-standard fw-semibold text-end">20.000 Lembar</span>
</div>
<div class="mb-2 d-flex justify-content-between">
<span class="text-standard">Insit Setelan</span>
<span class="text-standard fw-semibold text-end">100 Lembar</span>
</div>
<div class="mb-2 d-flex justify-content-between">
<span class="text-standard">Minimum QTY</span>
<span class="text-standard fw-semibold text-end">1.000 Lembar</span>
</div>
<div class="mb-2 d-flex justify-content-between">
<span class="text-standard">Harga Minimum</span>
<span class="text-standard fw-semibold text-end">Rp240.000</span>
</div>
<div class="mb-2 d-flex justify-content-between">
<span class="text-standard">Harga Druck</span>
<span class="text-standard fw-semibold text-end">Rp60</span>
</div>
<div class="mt-3 mb-2">
<button class="btn btn-outline-info w-100 py-1" id="inline-style-mesin-cetak-003" type="button">
<i class="bi bi-arrow-repeat me-1"></i> synchronize
                        </button>
</div>
<div class="text-center mt-2">
<button class="btn text-danger" type="button"><i class="bi bi-trash"></i> Hapus</button>
</div>
</div>
</div>
</div>
</div>
</div>









</div>
</template>
