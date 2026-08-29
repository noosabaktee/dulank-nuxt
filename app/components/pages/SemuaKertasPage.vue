<script setup lang="ts">
useLegacyPage({
  "title": "Jenis Kertas",
  "styles": [
    "/css/style.css",
    "/css/pages/semua-kertas-inline.css"
  ],
  "scripts": [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/semua-kertas.js",
    "/js/pages/semua-kertas-events.js"
  ],
  "sweetAlert": true
})
</script>

<template>
<div class="dulank-page dulank-page-semua-kertas">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

<div class="col-lg-9">
<h4 class="fs-5 mb-3">Semua Kertas</h4>
<ul class="nav nav-tabs category-tab justify-content-between" id="myTab" role="tablist">
<li class="nav-item" role="presentation">
<a aria-controls="harga-tab-pane" aria-selected="true" class="nav-link text-standard active" data-bs-target="#harga-tab-pane" data-js-click="semua-kertas-001" href="#harga-tab-pane" id="harga-tab" role="tab" type="button">Harga Kertas Group</a>
</li>
<div class="d-flex">
<li class="nav-item" role="presentation">
<a aria-controls="group-tab-pane" aria-selected="false" class="nav-link text-standard" data-bs-target="#group-tab-pane" data-js-click="semua-kertas-002" href="#group-tab-pane" id="group-tab" role="tab" type="button">Group Kertas</a>
</li>
<li class="nav-item" role="presentation">
<a aria-controls="ukuran-tab-pane" aria-selected="false" class="nav-link text-standard" data-bs-target="#ukuran-tab-pane" data-js-click="semua-kertas-003" href="#ukuran-tab-pane" id="ukuran-tab" role="tab" type="button">Ukuran Kertas</a>
</li>
<li class="nav-item" role="presentation">
<a aria-controls="jenis-tab-pane" aria-selected="false" class="nav-link text-standard" data-bs-target="#jenis-tab-pane" data-js-click="semua-kertas-004" href="#jenis-tab-pane" id="jenis-tab" role="tab" type="button">Jenis Kertas</a>
</li>
</div>
</ul>
<div class="tab-content" id="myTabContent">

<div aria-labelledby="harga-tab" class="tab-pane fade show active" id="harga-tab-pane" role="tabpanel" tabindex="0">
<div class="card mt-4">
<div class="card-header px-4" id="inline-style-semua-kertas-001">
                                    Perhatian
                                </div>
<div class="card-body px-4">
<span class="text-standard fw-bold d-block">Harga kertas dihitung per Group, lalu
                                        dipakai sebagai acuan untuk berat GSM lain dalam Group tersebut</span>
<span class="text-standard">Harga kertas dikelompokkan berdasarkan jenisnya (misal:
                                        HVS, Art Paper, dll). Dalam satu
                                        kelompok, harga untuk satu ketebalan (misal: 70 GSM) bisa dipakai sebagai
                                        patokan untuk
                                        menghitung harga ketebalan lain (misal: 80 GSM, 100 GSM) dalam kelompok yang
                                        sama.
                                        Contoh : Kelompok HVS Misalkan Harga per Rim 70 Gsm = Rp 500.000 , Maka harga
                                        100 Gsm
                                        dihitung dari harga 70 Gsm (misal: ditambah 30%).
                                        Jadi, kita dak perlu cari harga satu per satu, tapi pakai acuan dari ketebalan
                                        yang sudah ada di
                                        kelompok tersebut.
                                        Semudah itu!</span>
</div>
</div>
<div class="d-flex justify-content-md-end justify-content-center mt-3">
<button class="btn my-btn-primary col-md-3 col-6 me-3" data-bs-target="#addNewPaperPriceModal" data-bs-toggle="modal" type="button">+Add New Paper Price</button>
<button class="btn my-btn-outline-primary col-md-3 col-6" data-js-click="semua-kertas-005" type="button">Search Paper</button>
</div>
<div class="d-none" id="formSearch">
<form>
<div class="mb-3">
<label class="form-label text-standard">Cari Nama Toko Kertas</label>
<div class="input-group">
<input class="form-control text-standard" placeholder="Nama Toko Kertas" type="text"/>
<span class="input-group-text"><i class="fa fa-search"></i></span>
</div>
</div>
<div class="row">
<div class="mb-3 col-md-6">
<label class="form-label text-standard">Provinsi</label>
<select class="form-select text-standard">
<option>Jawa Barat (26 Toko Kertas)</option>

</select>
</div>
<div class="mb-3 col-md-6 ps-md-0">
<label class="form-label text-standard">Kabupaten</label>
<select class="form-select text-standard">
<option>Karawang (3 Toko Kertas)</option>

</select>
</div>
</div>
</form>
<div class="d-flex justify-content-end">
<button class="w-50 btn my-btn-primary mt-2" data-bs-target="#modalCariKertas" data-bs-toggle="modal" type="button">Tampilkan</button>
</div>
</div>
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-3 small">Sumber</div>
<div class="col-md-3 small">Nama</div>
<div class="col-md-2 small">Update</div>
<div class="col-md-2 small">Harga</div>
<div class="col-md-1 small">Status</div>
<div class="col-md-1 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Sumber">
                                        Milik Sendiri <br/>
<span class="my-text-primary text-standard">Sync: 360 users</span>
</div>
<div class="col-12 col-md-3" data-label="Nama">
                                        Art Carton - Ika <br/>
                                        79x109 cm 250 GSM
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2" data-label="Harga Druck">
                                        Rp857.000 <br/>
                                        Per rim
                                    </div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-active">Active</span>
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
<li><a class="text-standard dropdown-item" data-js-click="semua-kertas-006" href="#">Hapus</a></li>
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
                                        Art Carton - Ika <br/>
                                        79x109 cm 250 GSM
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2" data-label="Harga Druck">
                                        Rp857.000 <br/>
                                        Per rim
                                    </div>
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
<li><a class="text-standard dropdown-item" data-js-click="semua-kertas-007" href="#">Hapus</a></li>
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
                                        Art Carton - Ika <br/>
                                        79x109 cm 250 GSM
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2" data-label="Harga Druck">
                                        Rp857.000 <br/>
                                        Per rim
                                    </div>
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
<li><a class="text-standard dropdown-item" data-js-click="semua-kertas-008" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Sumber">
                                        Milik Sendiri <br/>
<span class="my-text-primary text-standard">Sync: 360 users</span>
</div>
<div class="col-12 col-md-3" data-label="Nama">
                                        Art Carton - Ika <br/>
                                        79x109 cm 250 GSM
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2" data-label="Harga Druck">
                                        Rp857.000 <br/>
                                        Per rim
                                    </div>
<div class="col-12 col-md-1" data-label="Status">
<span class="badge bg-secondary">Private</span>
<span class="badge status-deactive">Deactive</span>
</div>
<div class="col-12 col-md-1 text-center">
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
<li><a class="text-standard dropdown-item" data-js-click="semua-kertas-009" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="group-tab" class="tab-pane fade" id="group-tab-pane" role="tabpanel" tabindex="0">
<div class="d-flex justify-content-end mt-3">
<button class="btn my-btn-primary col-md-3 col-6" data-bs-target="#addNewPaperGroupModal" data-bs-toggle="modal" type="button">+Add New Papers Group</button>
</div>
<div class="d-flex justify-content-between mt-3">
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
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-3 small">Sumber</div>
<div class="col-md-3 small">Group Kertas</div>
<div class="col-md-2 small">Merk</div>
<div class="col-md-2 small">Updated</div>
<div class="col-md-2 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Sumber">
                                        Percetakan Grafika <br/>
                                        Jakarta Pusat, Jakarta
                                    </div>
<div class="col-12 col-md-3" data-label="Group Kertas">Art Paper</div>
<div class="col-12 col-md-2" data-label="Merk">Ika Paper</div>
<div class="col-12 col-md-2" data-label="Updated">20 Januari 2024</div>
<div class="col-12 col-md-2 text-center">
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
<li><a class="text-standard dropdown-item" data-js-click="semua-kertas-010" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="ukuran-tab" class="tab-pane fade" id="ukuran-tab-pane" role="tabpanel" tabindex="0">
<div class="d-flex justify-content-end mt-3">
<button class="btn my-btn-primary col-md-3 col-6" data-bs-target="#addNewPaperModal" data-bs-toggle="modal" type="button">+Add New Paper Size</button>
</div>
<div class="d-flex justify-content-between mt-3">
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
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-3 small">Sumber</div>
<div class="col-md-3 small">Nama Kertas</div>
<div class="col-md-3 small">Ukuran</div>
<div class="col-md-2 small">Updated</div>
<div class="col-md-1 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Sumber">
                                        Percetakan Grafika <br/>
                                        Jakarta Pusat, Jakarta
                                    </div>
<div class="col-12 col-md-3" data-label="Nama Kertas">Plano Kecil</div>
<div class="col-12 col-md-3" data-label="Ukuran">76x107 Centimeter</div>
<div class="col-12 col-md-2" data-label="Updated">20 Januari 2024</div>
<div class="col-12 col-md-1 text-center">
<div class="dropdown">
<a aria-expanded="false" class="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="calculatorDropdown6" role="button">
                                                Aksi
                                            </a>
<ul aria-labelledby="calculatorDropdown6" class="dropdown-menu">
<li><a class="text-standard dropdown-item">Active</a></li>
<li><a class="text-standard dropdown-item">Deactive</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Publish</a></li>
<li><a class="text-standard dropdown-item">Private</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="semua-kertas-011" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="jenis-tab" class="tab-pane fade" id="jenis-tab-pane" role="tabpanel" tabindex="0">
<div class="d-flex justify-content-end mt-3">
<button class="btn my-btn-primary col-md-3 col-6" data-bs-target="#addNewPaperItemModal" data-bs-toggle="modal" type="button">+Add New Paper Item</button>
</div>
<div class="d-flex justify-content-between mt-3">
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
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-3 small">Sumber</div>
<div class="col-md-3 small">Nama</div>
<div class="col-md-2 small">Update</div>
<div class="col-md-2 small">Status</div>
<div class="col-md-2 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Sumber">
                                        Percetakan Grafika <br/>
                                        Jakarta Pusat, Jakarta
                                    </div>
<div class="col-12 col-md-3" data-label="Nama">
                                        Art Carton - Ika <br/>
                                        79x109 cm 250 GSM
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2" data-label="Status">
<span class="badge status-private">Private</span>
<span class="badge status-deactive">Deactive</span>
</div>
<div class="col-12 col-md-2 text-center">
<div class="dropdown">
<a aria-expanded="false" class="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="calculatorDropdown7" role="button">
                                                Aksi
                                            </a>
<ul aria-labelledby="calculatorDropdown7" class="dropdown-menu">
<li><a class="text-standard dropdown-item">Active</a></li>
<li><a class="text-standard dropdown-item">Deactive</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Publish</a></li>
<li><a class="text-standard dropdown-item">Private</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="semua-kertas-012" href="#">Hapus</a></li>
</ul>
</div>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Sumber">
                                        Milik Sendiri <br/>
</div>
<div class="col-12 col-md-3" data-label="Nama">
                                        Art Carton - Ika <br/>
                                        79x109 cm 250 GSM
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2" data-label="Status">
<span class="badge status-publish">Publish</span>
<span class="badge status-deactive">Deactive</span>
</div>
<div class="col-12 col-md-2 text-center">
<div class="dropdown">
<a aria-expanded="false" class="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="calculatorDropdown8" role="button">
                                                Aksi
                                            </a>
<ul aria-labelledby="calculatorDropdown8" class="dropdown-menu">
<li><a class="text-standard dropdown-item">Active</a></li>
<li><a class="text-standard dropdown-item">Deactive</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Publish</a></li>
<li><a class="text-standard dropdown-item">Private</a></li>
<hr/>
<li><a class="text-standard dropdown-item">Ubah</a></li>
<li><a class="text-standard dropdown-item" data-js-click="semua-kertas-013" href="#">Hapus</a></li>
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

<div aria-hidden="true" aria-labelledby="addNewPaperGroupModalLabel" class="modal fade text-standard" id="addNewPaperGroupModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="addNewPaperGroupModalLabel">Add New Paper Group</h5>
<div class="d-flex align-items-center">
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
</div>
<div class="modal-body">
<div>
<form>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="name-group">Nama Group Kertas</label>
</div>
<div class="col-7">
<input class="form-control" id="name-group" type="text"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<span class="form-label" for="merk">Merk</span>
<span class="text-standard d-block fst-italic">(optional)</span>
</div>
<div class="col-7">
<input class="form-control" id="merk" type="text"/>
</div>
</div>
<small class="d-none text-standard text-danger" id="info-selected-all-1"><i class="fa-solid fa-circle-info"></i> please input your specification<br/></small>
<div class="row mb-3">
<div class="col-5">
<button class="btn w-100" id="cancel-btn-1" type="button">Batal</button>
</div>
<div class="col-7">
<button class="btn my-btn-primary w-100" id="save-btn-1">Simpan</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="addNewPaperModalLabel" class="modal fade text-standard" id="addNewPaperModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="addNewPaperModalLabel">Add New Paper Group</h5>
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
<label class="form-label" for="name-paper">Nama Kertas</label>
</div>
<div class="col-7">
<input class="form-control" id="name-paper" type="text"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label">Ukuran Area Kertas</label>
</div>
<div class="col-7">
<div class="row">
<div class="col-6">
<div class="input-group input-group-sm">
<span class="input-group-text">P</span>
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="width-plano" type="hidden"/>
</div>
</div>
<div class="col-6">
<div class="input-group input-group-sm">
<span class="input-group-text">L</span>
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="height-plano" type="hidden"/>
</div>
</div>
</div>
</div>
</div>
<small class="d-none text-standard text-danger" id="info-selected-all-2"><i class="fa-solid fa-circle-info"></i> please input your specification<br/></small>
<div class="row mb-3">
<div class="col-5">
<button class="btn w-100" id="cancel-btn-2" type="button">Batal</button>
</div>
<div class="col-7">
<button class="btn my-btn-primary w-100" id="save-btn-2">Simpan</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="addNewPaperItemModalLabel" class="modal fade text-standard" id="addNewPaperItemModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="addNewPaperItemModalLabel">Add New Paper Item</h5>
<div class="d-flex align-items-center">
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
</div>
<div class="modal-body">
<div>
<form>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="name-paper-item">Nama Kertas (Opsional)</label>
</div>
<div class="col-7">
<input class="form-control" id="name-paper-item" type="text"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="pilihSatuan">Group Kertas tersedia</label>
</div>
<div class="col-7">
<button class="btn btn-spec me-2 selected" type="button">Art Carton<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">Art Paper<span class="ribbon d-none"></span></button>
<button class="btn btn-spec me-2" type="button">HVS<span class="ribbon d-none"></span></button>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="gramatur-paper-item">Masukan Gramatur</label>
</div>
<div class="col-7">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="gramatur-paper-item" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="pilihSatuan">Ukuran Plano Tersedia</label>
</div>
<div class="col-7">
<button class="btn btn-spec me-2 selected" type="button">90 x 120<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">97 x 109<span class="ribbon d-none"></span></button>
<button class="btn btn-spec me-2" type="button">65 x 100<span class="ribbon d-none"></span></button>
<button class="btn btn-spec me-2" type="button">65 x 90<span class="ribbon d-none"></span></button>
<button class="btn btn-spec me-2" type="button">61 x 92<span class="ribbon d-none"></span></button>
<button class="btn btn-spec me-2" type="button">61 x 68<span class="ribbon d-none"></span></button>
</div>
</div>
<small class="d-none text-standard text-danger" id="info-selected-all-3"><i class="fa-solid fa-circle-info"></i> please input your specification<br/></small>
<div class="row mb-3">
<div class="col-5">
<button class="btn w-100" id="cancel-btn-3" type="button">Batal</button>
</div>
<div class="col-7">
<button class="btn my-btn-primary w-100" id="save-btn-3">Simpan</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="addNewPaperPriceModalLabel" class="modal fade text-standard" id="addNewPaperPriceModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="addNewPaperPriceModalLabel">Add New Paper Price Item</h5>
<div class="d-flex align-items-center">
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
</div>
<div class="modal-body">
<div>
<form>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="name-paper-price">Nama Kertas (Opsional)</label>
</div>
<div class="col-7">
<input class="form-control" id="name-paper-price" type="text"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="pilihSatuan">Group Kertas tersedia</label>
</div>
<div class="col-7">
<button class="btn btn-spec me-2 selected" type="button">Art Carton<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">Art Paper<span class="ribbon d-none"></span></button>
<button class="btn btn-spec me-2" type="button">HVS<span class="ribbon d-none"></span></button>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label">Ukuran Area Kertas</label>
</div>
<div class="col-7">
<div class="row">
<div class="col-6">
<div class="input-group input-group-sm">
<span class="input-group-text">P</span>
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="width-plano-paper-price" type="hidden"/>
</div>
</div>
<div class="col-6">
<div class="input-group input-group-sm">
<span class="input-group-text">L</span>
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="height-plano-paper-price" type="hidden"/>
</div>
</div>
</div>
</div>
</div>
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
<label class="form-label" for="gramatur-paper-price">Masukan Gramatur</label>
</div>
<div class="col-7">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="gramatur-paper-price" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="min-order">Minimal Order</label>
</div>
<div class="col-7 d-flex align-items-center">
<div>
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="min-order" type="hidden"/>
</div>
<div class="d-flex ms-1">
<button class="btn btn-spec me-2 selected" type="button">Lembar<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">Rim<span class="ribbon d-none"></span></button>
</div>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="multiple-order">Order Kelipatan</label>
</div>
<div class="col-7 d-flex align-items-center">
<div>
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="multiple-order" type="hidden"/>
</div>
<div class="d-flex ms-1">
<button class="btn btn-spec me-2 selected" type="button">Lembar<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">Rim<span class="ribbon d-none"></span></button>
</div>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="paper-price">Harga Kertas</label>
</div>
<div class="col-7 d-flex align-items-center">
<div>
<input class="form-control number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="paper-price" type="hidden"/>
</div>
<div class="d-flex ms-1">
<button class="btn btn-spec me-2 selected" type="button">Lembar<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">Rim<span class="ribbon d-none"></span></button>
</div>
</div>
</div>
<small class="d-none text-standard text-danger" id="info-selected-all-4"><i class="fa-solid fa-circle-info"></i> please input your specification<br/></small>
<div class="row mb-3">
<div class="col-5">
<button class="btn w-100" id="cancel-btn-4" type="button">Batal</button>
</div>
<div class="col-7">
<button class="btn my-btn-primary w-100" id="save-btn-4">Simpan</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-labelledby="modalCariKertasLabel" class="modal fade" id="modalCariKertas" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content rounded-4 pb-1">
<div class="modal-header">
<h6 class="modal-title" id="modalCariKertasLabel"><i class="fa fa-search"></i> Hasil Pencarian
                        Kertas di Percetakan lain</h6>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body" id="inline-style-semua-kertas-002">

<div class="mb-4" id="searchResult">
<div>
<div class="small border-bottom py-2">
<div class="d-flex justify-content-between align-items-center">
<div>
<span class="fw-bold small">Percetakan Grafika 1</span><br/>
<span class="text-secondary text-standard">Karawang Barat, Karawang, Jawa
                                            Barat</span>
</div>
<button class="btn my-btn-outline-primary" type="button">Pilih</button>
</div>
<div class="accordion my-1" id="accordionExample">
<div class="accordion-item border-0">
<h2 class="accordion-header">
<button aria-controls="collapseOne" aria-expanded="true" class="accordion-button text-standard p-0 shadow-none bg-white text-dark" data-bs-target="#collapseOne" data-bs-toggle="collapse" type="button">
                                                Tampilkan Kertas Tersedia
                                            </button>
</h2>
<div class="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseOne">
<div class="accordion-body p-1">
<div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked1" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked1">
                                                            Art Carton
                                                        </label>
</div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked2" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked2">
                                                            Art Paper
                                                        </label>
</div>
<div class="form-check">
<input checked="" class="form-check-input" id="flexCheckChecked3" type="checkbox" value=""/>
<label class="form-check-label text-standard" for="flexCheckChecked3">
                                                            HVS
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
