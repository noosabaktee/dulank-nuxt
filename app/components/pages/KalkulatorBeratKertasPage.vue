<script setup lang="ts">
useLegacyPage({
  "title": "Berat Kertas",
  "styles": [
    "/css/style.css",
    "/css/pages/kalkulator-berat-kertas.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/easy-number-separator.js",
    "/js/pages/kalkulator-berat-kertas.js",
    "/js/pages/kalkulator-berat-kertas-events.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-kalkulator-berat-kertas">
<main>

<div class="container text-standard">
<div class="calculator-container" id="calculator">
<div><LayoutCalculatorHeader /></div>
<div class="mt-5">
<h1 class="fs-4">Hitung Total Berat Kertas</h1>
<p class="text-muted text-standard">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc mauris, mattis eget libero ut, finibus pellentesque lectus. Etiam pulvinar ipsum vel sagittis facilisis. Suspendisse non porta justo. Proin eu consectetur sapien, in efficitur erat. Donec lectus mauris, dignissim sed facilisis id, fringilla eu ante. Fusce congue felis eu ullamcorper, et auctor nulla rutrum. Vestibulum et amet felis quis orci scelerisque facilisis quis id leo.
                    </p>
</div>
<div class="row mt-5">
<div class="col-12">
<h3 class="fs-6">Hitung Total Berat Kertas</h3>
</div>
</div>
<div class="mb-4 row">
<div class="col-5">
<label class="form-label" for="jumlah">Satuan Panjang</label>
</div>
<div class="col-7" id="unit">
<button class="btn btn-spec me-2 selected" type="button">Centimeter<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">Milimeter<span class="ribbon d-none"></span></button>
<div>
<br/>
<a class="text-center text-primary" data-js-click="kalkulator-berat-kertas-001" role="button">Lihat ukuran yang tersedia</a>
<div class="d-none mt-2" id="size">
<button class="btn btn-spec me-2" data-gram="260" data-height="79" data-js-click="kalkulator-berat-kertas-002" data-unit="cm" data-width="109" type="button">Art Carton Pindo, 109 x 79 cm, 260 gram<span class="ribbon d-none"></span></button>
<button class="btn btn-spec me-2" data-gram="275" data-height="85" data-js-click="kalkulator-berat-kertas-003" data-unit="mm" data-width="112" type="button">Art Carton Ika, Neuva, 112 x 85 mm, 275 gram<span class="ribbon d-none"></span></button>
<a class="d-block text-primary mt-2" data-bs-target="#addNewPaperModal" data-bs-toggle="modal" role="button">+Tambah ukuran baru</a>
</div>
</div>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label d-flex" for="panjang">
                            Ukuran Kertas
                        </label>
</div>
<div class="col-7">
<div class="row">
<div class="col-6">
<div class="input-group input-group-sm">
<span class="input-group-text">P</span>
<input class="form-control number-separator" id="width" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="panjang" type="hidden"/>
</div>
</div>
<div class="col-6">
<div class="input-group input-group-sm">
<span class="input-group-text">L</span>
<input class="form-control number-separator" id="height" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="lebar" type="hidden"/>
</div>
</div>
</div>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="gramatur">Gramatur Kertas (Gram)</label>
</div>
<div class="col-7">
<input class="form-control number-separator" id="gram" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="gramatur" type="hidden"/>
</div>
</div>
<div class="row mb-3">
<div class="col-5">
<label class="form-label" for="jumlah">Banyaknya kertas</label>
</div>
<div class="col-7">
<div class="row">
<div class="col-md-5">
<input class="form-control number-separator" id="amount" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" id="jumlah" type="hidden"/>
</div>
<div class="col-md-7" id="qty">
<button class="btn btn-spec me-2 selected" type="button">Lembar<span class="ribbon"></span></button>
<button class="btn btn-spec me-2" type="button">Rim<span class="ribbon d-none"></span></button>
</div>
<div class="mt-2">
<small class="d-none text-standard text-danger" id="info-selected-all"><i class="fa-solid fa-circle-info"></i> please select your specification<br/></small>
</div>
<div>
<button class="btn my-btn-primary w-100 mt-3" id="calculate" type="button">Hitung</button>
</div>
</div>
</div>
</div>
<div class="result-container" id="result">
<p class="fs-6">Hasil Perhitungan : <button class="btn p-0 float-end" id="clear-form" type="button">x Clear Form</button></p>
<p class="text-standard" id="result-list"></p>
<div class="d-flex justify-content-end">
<span class="text-standard fw-semibold" id="total-berat">Total Berat</span>
<span class="text-standard fw-semibold ms-2" id="kg-berat">0 kg</span>
</div>
<div class="d-flex justify-content-end mt-5">
<button class="btn p-0 mb-3 my-text-primary" id="add-calculate" type="button">+Tambah Perhitungan</button>
<button class="btn p-0 mb-3 ms-3" id="copy-clipboard" type="button">Copy to Clipboard</button>
</div>
</div>
</div>
</div>
</main>

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
<label class="form-label" for="name-machine">Nama Kertas</label>
</div>
<div class="col-7">
<input class="form-control" id="name-machine" type="text"/>
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
<button class="btn w-100" id="cancel-btn-1" type="button">Batal</button>
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









</div>
</template>
