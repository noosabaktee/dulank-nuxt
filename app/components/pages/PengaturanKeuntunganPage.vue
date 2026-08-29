<script setup lang="ts">
useLegacyPage({
  "title": "Pengaturan Keuntungan",
  "styles": [
    "/css/style.css",
    "/css/pages/pengaturan-keuntungan.css"
  ],
  "scripts": [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pengaturan-keuntungan.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-pengaturan-keuntungan">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

<div class="col-lg-9">
<div class="d-md-flex justify-content-between">
<h4 class="fs-5 mb-3">Profile Pengaturan Keuntungan / Profit</h4>
<div class="fst-italic text-end text-standard">Update : 19:30 - 20 Januari 2024</div>
</div>
<hr/>
<p class="fs-6">Pilihan Penambahan Harga Keuntungan :</p>

<div class="persentase-form">
<button class="btn btn-spec me-2 col-12 col-md-6 text-md-start text-center selected" id="select-1" type="button">Berdasarkan Persentase<span class="ribbon"></span></button>
<div class="ms-5 input-select">
<div class="row">
<div class="col-md-3 col-6 my-3">
<label class="text-standard">Penambahan Profit dari total biaya produksi</label>
</div>
<div class="col-md-3 col-6 my-3">
<div class="input-group input-group-sm">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="form-control" type="hidden"/>
<span class="input-group-text">%</span>
</div>
</div>
</div>
</div>
</div>

<div class="mt-3 produksi-form">
<button class="btn btn-spec me-2 col-12 col-md-6 text-md-start text-center" id="select-2" type="button">Berdasarkan Proses Produksi<span class="ribbon d-none"></span></button>
<div class="ms-5 input-select d-none">
<div class="row">
<div class="col-md-3 col-6 mt-2">
<label class="text-standard">Penambahan Profit dari Biaya Cetak</label>
</div>
<div class="col-md-3 col-6 mt-2">
<div class="input-group input-group-sm">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="input-group-text">%</span>
</div>
</div>
</div>
<div class="row">
<div class="col-md-3 col-6 mt-2">
<label class="text-standard">Penambahan Profit dari Belanja Kertas</label>
</div>
<div class="col-md-3 col-6 mt-2">
<div class="input-group input-group-sm">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="input-group-text">%</span>
</div>
</div>
</div>
<div class="row">
<div class="col-md-3 col-6 mt-2">
<label class="text-standard">Penambahan Profit dari Biaya Laminasi</label>
</div>
<div class="col-md-3 col-6 mt-2">
<div class="input-group input-group-sm">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="input-group-text">%</span>
</div>
</div>
</div>
<div class="row">
<div class="col-md-3 col-6 mt-2">
<label class="text-standard">Penambahan Profit dari Biaya Pond</label>
</div>
<div class="col-md-3 col-6 mt-2">
<div class="input-group input-group-sm">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="input-group-text">%</span>
</div>
</div>
</div>
<div class="row">
<div class="col-md-3 col-6 mt-2">
<label class="text-standard">Penambahan Profit dari Biaya Poli</label>
</div>
<div class="col-md-3 col-6 mt-2">
<div class="input-group input-group-sm">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="input-group-text">%</span>
</div>
</div>
</div>
</div>
</div>

<div class="mt-3 range-form">
<button class="btn btn-spec me-2 col-12 col-md-6 text-md-start text-center" id="select-3" type="button">Berdasarkan Range Total Biaya Produksi<span class="ribbon d-none"></span></button>
<div class="ms-5 input-select d-none">
<div class="row mt-3 first">
<div class="col-4 col-md-3 d-flex align-items-center">
<label class="text-standard me-2">Dari</label>
<input class="form-control number-separator input-dari" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
</div>
<div class="col-4 col-md-3 d-flex align-items-center">
<label class="text-standard me-2">Ke</label>
<input class="form-control number-separator input-ke" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
</div>
<div class="col-md-2 col-4 d-flex align-items-center">
<label class="text-standard me-2">Profit</label>
<div class="input-group input-group-sm">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="input-group-text">%</span>
</div>
</div>
<div class="col-12 col-md-4 d-flex mt-2 mt-md-0">
<button class="btn add-range" type="button">+Tambahkan Range</button>
<button class="btn delete-range d-none" type="button">Hapus</button>
</div>
</div>
<div class="row mt-3">
<div class="col-4 col-md-3 d-flex align-items-center">
<label class="text-standard me-2">Dari</label>
<input class="form-control number-separator input-dari" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
</div>
<div class="col-4 col-md-3 d-flex align-items-center">
<label class="text-standard me-2">Ke</label>
<input class="form-control number-separator input-ke" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
</div>
<div class="col-md-2 col-4 d-flex align-items-center">
<label class="text-standard me-2">Profit</label>
<div class="input-group input-group-sm">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="input-group-text">%</span>
</div>
</div>
<div class="col-12 col-md-4 d-flex mt-2 mt-md-0">
<button class="btn add-range" type="button">+Tambahkan Range</button>
<button class="btn delete-range" type="button">Hapus</button>
</div>
</div>
<div class="row mt-3">
<div class="col-4 col-md-3 d-flex align-items-center">
<label class="text-standard me-2">Dari</label>
<input class="form-control number-separator input-dari" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
</div>
<div class="col-4 col-md-3 d-flex align-items-center">
<label class="text-standard me-2">Ke</label>
<input class="form-control number-separator input-ke" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
</div>
<div class="col-md-2 col-4 d-flex align-items-center">
<label class="text-standard me-2">Profit</label>
<div class="input-group input-group-sm">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="input-group-text">%</span>
</div>
</div>
<div class="col-12 col-md-4 d-flex mt-2 mt-md-0">
<button class="btn add-range" type="button">+Tambahkan Range</button>
<button class="btn delete-range" type="button">Hapus</button>
</div>
</div>
<div class="row mt-3">
<div class="col-4 col-md-3 d-flex align-items-center">
<label class="text-standard me-2">Dari</label>
<input class="form-control number-separator input-dari" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
</div>
<div class="col-4 col-md-3 d-flex align-items-center">
<label class="text-standard me-2">Ke</label>
<input class="form-control number-separator" readonly="" type="text" value="Dan seterusnya"/>
<input class="result-input" type="hidden"/>
</div>
<div class="col-md-2 col-4 d-flex align-items-center">
<label class="text-standard me-2">Profit</label>
<div class="input-group input-group-sm">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="input-group-text">%</span>
</div>
</div>
</div>
</div>
</div>
<hr/>

<div class="tambahan-form">
<div class="d-md-flex justify-content-between">
<p class="fs-6 mt-3">Biaya Tambahan</p>
<button class="btn border-0" id="addOther" type="button">+Tambahkan Biaya Lainnya</button>
</div>
<div class="row align-items-center">
<div class="col-md-3 mt-3">
<label class="text-standard label-biaya">Biaya Transport</label>
</div>
<div class="d-flex col-md-5 align-items-center mt-3">
<input class="form-control me-2 w-50 number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="text-standard satuan-biaya">Per Pekerjaan/Job</span>
</div>
<div class="d-flex mt-3 col-md-3">
<button class="btn" type="button">Ubah</button>
<button class="btn" type="button">Hapus</button>
</div>
</div>
<div class="row align-items-center">
<div class="col-md-3 mt-3">
<label class="text-standard label-biaya">Biaya Packing</label>
</div>
<div class="d-flex col-md-5 align-items-center mt-3">
<input class="form-control me-2 w-50 number-separator price-input" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="text-standard satuan-biaya">Per Lembar</span>
</div>
<div class="d-flex mt-3 col-md-3">
<button class="btn" type="button">Ubah</button>
<button class="btn" type="button">Hapus</button>
</div>
</div>
</div>

<hr/>
<div class="pajak-form">
<div class="d-md-flex justify-content-between">
<p class="fs-6 mt-3">Pajak</p>
<button class="btn border-0" id="addTax" type="button">+Tambahkan Pajak Baru</button>
</div>
<div class="row align-items-center mt-3">
<div class="col-3">
<label class="text-standard label-pajak">Ppn</label>
</div>
<div class="col-5 input-group input-group-sm w-25 me-3">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="input-group-text">%</span>
</div>
<div class="d-flex col-3">
<button class="btn" type="button">Ubah</button>
<button class="btn" type="button">Hapus</button>
</div>
</div>
<div class="row align-items-center mt-3">
<div class="col-3">
<label class="text-standard label-pajak">Pph</label>
</div>
<div class="col-5 input-group input-group-sm w-25 me-3">
<input class="form-control number-separator" inputmode="numeric" pattern="[0-9]*" type="text"/>
<input class="result-input" type="hidden"/>
<span class="input-group-text">%</span>
</div>
<div class="d-flex col-3">
<button class="btn" type="button">Ubah</button>
<button class="btn" type="button">Hapus</button>
</div>
</div>
</div>
<small class="d-none text-standard text-danger" id="info-selected-all"><i class="fa-solid fa-circle-info"></i> please input your specification<br/></small>
<div class="d-flex justify-content-end">
<button class="btn my-btn-primary mt-4 col-md-3 col-6" id="update-btn" type="button">Update Profile</button>
</div>
</div>
</div>
</div>
</main>








</div>
</template>
