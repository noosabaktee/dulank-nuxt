<script setup lang="ts">
useLegacyPage({
  "title": "Toko Kertasindo",
  "styles": [
    "/css/style.css"
  ],
  "scripts": [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/store-kertas.js",
    "/js/pages/store-kertas-events.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-store-kertas">
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
<h5 class="profile-name fs-6 mb-1">Toko Kertasindo</h5>
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
<span class="text-secondary text-center">Group Kertas</span>
</div>
<div class="d-flex flex-column align-items-center">
<span class="fw-bold fs-6">4</span>
<span class="text-secondary text-center">Jenis Kertas</span>
</div>
</div>
</div>
<div class="text-standard my-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate soluta excepturi, aperiam velit laudantium hic fugit aliquid molestias sit a commodi consequatur natus repudiandae, blanditiis expedita iusto. Quaerat, inventore!
                    </div>
<ul class="nav nav-tabs category-tab" id="myTab" role="tablist">
<li class="nav-item" role="presentation">
<a aria-controls="group-tab-pane" aria-selected="true" class="nav-link text-standard active" data-bs-target="#group-tab-pane" data-js-click="store-kertas-001" href="#group-tab-pane" id="group-tab" role="tab" type="button">Group Kertas</a>
</li>
<li class="nav-item" role="presentation">
<a aria-controls="jenis-tab-pane" aria-selected="false" class="nav-link text-standard" data-bs-target="#jenis-tab-pane" data-js-click="store-kertas-002" href="#jenis-tab-pane" id="jenis-tab" role="tab" type="button">Jenis Kertas</a>
</li>
</ul>
<div class="tab-content" id="myTabContent">

<div aria-labelledby="group-tab" class="tab-pane fade show active" id="group-tab-pane" role="tabpanel" tabindex="0">
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-3 small">Group Kertas</div>
<div class="col-md-3 small">Merk</div>
<div class="col-md-2 small">Updated</div>
<div class="col-md-2 small text-end"></div>
</div>

<div class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-3" data-label="Group Kertas">Art Paper</div>
<div class="col-12 col-md-3" data-label="Merk">Ika Paper</div>
<div class="col-12 col-md-2" data-label="Updated">20 Januari 2024</div>
<div class="col-12 col-md-2 text-center">
</div>
</div>
</div>
</div>

<div aria-labelledby="jenis-tab" class="tab-pane fade" id="jenis-tab-pane" role="tabpanel" tabindex="0">
<div class="row mt-3">
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-3 small">Nama</div>
<div class="col-md-3 small">Ukuran</div>
<div class="col-md-3 small">Gramatur</div>
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
<div class="col-12 col-md-3" data-label="Gramatur">
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
<div class="col-12 col-md-3" data-label="Gramatur">
                                        250 GSM
                                    </div>
<div class="col-12 col-md-2" data-label="Update">20/12/12 23:12</div>
<div class="col-12 col-md-2 text-center">
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
