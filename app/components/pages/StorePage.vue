<script setup lang="ts">
useLegacyPage({
  "title": "Percetaan Grafika 1",
  "styles": [
    "/css/style.css"
  ],
  "scripts": [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/store.js",
    "/js/pages/store-events.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-store">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

<div class="col-lg-9">
<div class="d-md-flex justify-content-md-between">
<div class="d-md-flex text-center text-md-start align-items-center">
<div class="profile-avatar mx-auto">
<img alt="User Avatar" class="rounded-circle" src="/images/tab.png"/>
</div>
<div class="profile-header-info ms-3">
<h5 class="profile-name fs-6 mb-1">Percetakan Grafika 1</h5>
<span class="text-standard text-muted d-block">Jakarta Pusat, Jakarta</span>
<span class="text-standard text-muted d-block">Join Date: 19.30 15/12/2025</span>
<div class="d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-1 mb-1">
<span class="text-standard fw-bold">5,3RB</span>
<span class="text-standard text-secondary small">Pengikut</span>
<span class="text-standard text-secondary mx-1">|</span>
<span class="text-standard fw-bold">195</span>
<span class="text-standard text-secondary small">Mengikuti</span>
</div>
</div>
</div>
<div class="d-flex justify-content-center align-items-center gap-3 my-2">
<div class="d-flex flex-column align-items-center">
<span class="fw-bold fs-6">12</span>
<span class="text-secondary text-center">Kertas</span>
</div>
<div class="d-flex flex-column align-items-center">
<span class="fw-bold fs-6">4</span>
<span class="text-secondary text-center">Mesin Cetak</span>
</div>
<div class="d-flex flex-column align-items-center">
<span class="fw-bold fs-6">12</span>
<span class="text-secondary text-center">Mesin Laminasi</span>
</div>
<div class="d-flex flex-column align-items-center">
<span class="fw-bold fs-6">12</span>
<span class="text-secondary text-center">Mesin Pond</span>
</div>
<div class="d-flex flex-column align-items-center">
<span class="fw-bold fs-6">12</span>
<span class="text-secondary text-center">Mesin Poli</span>
</div>
</div>
</div>
<div class="text-standard my-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate soluta excepturi, aperiam velit laudantium hic fugit aliquid molestias sit a commodi consequatur natus repudiandae, blanditiis expedita iusto. Quaerat, inventore!
                    </div>
<ul class="nav nav-tabs category-tab" id="myTab" role="tablist">
<li class="nav-item" role="presentation">
<a aria-controls="kertas-tab-pane" aria-selected="true" class="nav-link text-standard active" data-bs-target="#kertas-tab-pane" data-js-click="store-001" href="#kertas-tab-pane" id="kertas-tab" role="tab" type="button">Kertas</a>
</li>
<li class="nav-item" role="presentation">
<a aria-controls="cetak-tab-pane" aria-selected="false" class="nav-link text-standard" data-bs-target="#cetak-tab-pane" data-js-click="store-002" href="#cetak-tab-pane" id="cetak-tab" role="tab" type="button">Mesin Cetak</a>
</li>
<li class="nav-item" role="presentation">
<a aria-controls="laminasi-tab-pane" aria-selected="false" class="nav-link text-standard" data-bs-target="#laminasi-tab-pane" data-js-click="store-003" href="#laminasi-tab-pane" id="laminasi-tab" role="tab" type="button">Mesin Laminasi</a>
</li>
<li class="nav-item" role="presentation">
<a aria-controls="pond-tab-pane" aria-selected="false" class="nav-link text-standard" data-bs-target="#pond-tab-pane" data-js-click="store-004" href="#pond-tab-pane" id="pond-tab" role="tab" type="button">Mesin Pond</a>
</li>
<li class="nav-item" role="presentation">
<a aria-controls="poli-tab-pane" aria-selected="false" class="nav-link text-standard" data-bs-target="#poli-tab-pane" data-js-click="store-005" href="#poli-tab-pane" id="poli-tab" role="tab" type="button">Mesin Poli</a>
</li>
</ul>
<div class="tab-content" id="myTabContent">

<div aria-labelledby="kertas-tab" class="tab-pane fade show active" id="kertas-tab-pane" role="tabpanel" tabindex="0">
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-3 small">Nama</div>
<div class="col-md-3 small">Ukuran</div>
<div class="col-md-2 small">Gramatur</div>
<div class="col-md-2 small">Update</div>
<div class="col-md-2 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama">
                                        Art Carton - Ika
                                    </div>
<div class="col-12 col-md-3" data-label="Ukuran">
                                        79x109 Centimeter
                                    </div>
<div class="col-12 col-md-2" data-label="Gramatur">
                                        250 GSM
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2 text-center">
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama">
                                        Art Carton - Ika
                                    </div>
<div class="col-12 col-md-3" data-label="Ukuran">
                                        79x109 Centimeter
                                    </div>
<div class="col-12 col-md-2" data-label="Gramatur">
                                        250 GSM
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2 text-center">
</div>
</div>
</div>
</div>

<div aria-labelledby="cetak-tab" class="tab-pane fade" id="cetak-tab-pane" role="tabpanel" tabindex="0">
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-3 small">Nama</div>
<div class="col-md-2 small">Harga Minim</div>
<div class="col-md-2 small">Harga Druck</div>
<div class="col-md-2 small">Update</div>
<div class="col-md-2 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama">
                                        Heidelberg GTO52
                                        4 Warna
                                    </div>
<div class="col-12 col-md-2" data-label="Harga Minim">
                                        Rp240.000
                                    </div>
<div class="col-12 col-md-2" data-label="Harga Druck">
                                        Rp60
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2">
<a class="text-standard dropdown-item" data-bs-target="#detailModal" data-bs-toggle="modal" role="button">Detail</a>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama">
                                        Heidelberg GTO52
                                        4 Warna
                                    </div>
<div class="col-12 col-md-2" data-label="Harga Minim">
                                        Rp240.000
                                    </div>
<div class="col-12 col-md-2" data-label="Harga Druck">
                                        Rp60
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2">
<a class="text-standard dropdown-item" data-bs-target="#detailModal" data-bs-toggle="modal" role="button">Detail</a>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama">
                                        Heidelberg GTO52
                                        4 Warna
                                    </div>
<div class="col-12 col-md-2" data-label="Harga Minim">
                                        Rp240.000
                                    </div>
<div class="col-12 col-md-2" data-label="Harga Druck">
                                        Rp60
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2">
<a class="text-standard dropdown-item" data-bs-target="#detailModal" data-bs-toggle="modal" role="button">Detail</a>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama">
                                        Heidelberg GTO52
                                        4 Warna
                                    </div>
<div class="col-12 col-md-2" data-label="Harga Minim">
                                        Rp240.000
                                    </div>
<div class="col-12 col-md-2" data-label="Harga Druck">
                                        Rp60
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2">
<a class="text-standard dropdown-item" data-bs-target="#detailModal" data-bs-toggle="modal" role="button">Detail</a>
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama">
                                        Heidelberg GTO52
                                        4 Warna
                                    </div>
<div class="col-12 col-md-2" data-label="Harga Minim">
                                        Rp240.000
                                    </div>
<div class="col-12 col-md-2" data-label="Harga Druck">
                                        Rp60
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2">
<a class="text-standard dropdown-item" data-bs-target="#detailModal" data-bs-toggle="modal" role="button">Detail</a>
</div>
</div>
</div>
</div>

<div aria-labelledby="laminasi-tab" class="tab-pane fade" id="laminasi-tab-pane" role="tabpanel" tabindex="0">
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-2 small">Nama</div>
<div class="col-md-2 small">Ukuran Max</div>
<div class="col-md-2 small">Harga (cm)</div>
<div class="col-md-2 small">Harga Min</div>
<div class="col-md-2 small">Update</div>
<div class="col-md-1 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Nama">Laminasi Doff</div>
<div class="col-12 col-md-2" data-label="Ukuran Max">12x30 Centimeter</div>
<div class="col-12 col-md-2" data-label="Harga per cm">Rp20</div>
<div class="col-12 col-md-2" data-label="Harga Minim">Rp200.000</div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1">
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Nama">Laminasi Glossy</div>
<div class="col-12 col-md-2" data-label="Ukuran Max">12x30 Centimeter</div>
<div class="col-12 col-md-2" data-label="Harga per cm">Rp18</div>
<div class="col-12 col-md-2" data-label="Harga Minim">Rp180.000</div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1">
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-2" data-label="Nama">UV Vernish</div>
<div class="col-12 col-md-2" data-label="Ukuran Max">12x30 Centimeter</div>
<div class="col-12 col-md-2" data-label="Harga per cm">Rp10</div>
<div class="col-12 col-md-2" data-label="Harga Minim">Rp100.000</div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1">
</div>
</div>
</div>
</div>

<div aria-labelledby="pond-tab" class="tab-pane fade" id="pond-tab-pane" role="tabpanel" tabindex="0">
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-3 small">Nama</div>
<div class="col-md-2 small">Ukuran</div>
<div class="col-md-2 small">Standard</div>
<div class="col-md-2 small">Setengah Putus</div>
<div class="col-md-2 small">Update</div>
<div class="col-md-1 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama">
                                        Mesin Pond Kecil
                                    </div>
<div class="col-12 col-md-2" data-label="Ukuran">
                                        79x109
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
<div class="col-12 col-md-1 text-center">
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama">
                                        Mesin Pond Sedang
                                    </div>
<div class="col-12 col-md-2" data-label="Ukuran">
                                        79x109
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
<div class="col-12 col-md-1 text-center">
</div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Nama">
                                        Mesin Pond Besar
                                    </div>
<div class="col-12 col-md-2" data-label="Ukuran">
                                        79x109
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
<div class="col-12 col-md-1 text-center">
</div>
</div>
</div>
</div>

<div aria-labelledby="poli-tab" class="tab-pane fade" id="poli-tab-pane" role="tabpanel" tabindex="0">
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-2 small">Nama</div>
<div class="col-md-2 small">Ukuran Max</div>
<div class="col-md-2 small">Harga (cm)</div>
<div class="col-md-2 small">Harga Minim</div>
<div class="col-md-2 small">Update</div>
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
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1">
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
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-1">
</div>
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
