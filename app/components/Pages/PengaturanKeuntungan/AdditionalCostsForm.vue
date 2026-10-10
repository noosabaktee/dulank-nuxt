<template>
  <div class="tambahan-form">
    <div class="d-md-flex justify-content-between">
      <p class="fs-6 mt-3">Biaya Tambahan</p>
      <button class="btn border-0" id="addOther" type="button">
        +Tambahkan Biaya Lainnya
      </button>
    </div>
    <div class="row align-items-center">
      <div class="col-md-3 mt-3">
        <label class="text-standard label-biaya">Biaya Transport</label>
      </div>
      <div class="d-flex col-md-5 align-items-center mt-3">
        <input
          class="form-control me-2 w-50 number-separator price-input"
          inputmode="numeric"
          pattern="[0-9]*"
          type="text"
        />
        <input class="result-input" type="hidden" />
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
        <input
          class="form-control me-2 w-50 number-separator price-input"
          inputmode="numeric"
          pattern="[0-9]*"
          type="text"
        />
        <input class="result-input" type="hidden" />
        <span class="text-standard satuan-biaya">Per Lembar</span>
      </div>
      <div class="d-flex mt-3 col-md-3">
        <button class="btn" type="button">Ubah</button>
        <button class="btn" type="button">Hapus</button>
      </div>
    </div>
  </div>
</template>
