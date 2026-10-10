<template>
  <div class="pajak-form">
    <div class="d-md-flex justify-content-between">
      <p class="fs-6 mt-3">Pajak</p>
      <button class="btn border-0" id="addTax" type="button">
        +Tambahkan Pajak Baru
      </button>
    </div>
    <div class="row align-items-center mt-3">
      <div class="col-3">
        <label class="text-standard label-pajak">Ppn</label>
      </div>
      <div class="col-5 input-group input-group-sm w-25 me-3">
        <input
          class="form-control number-separator"
          inputmode="numeric"
          pattern="[0-9]*"
          type="text"
        />
        <input class="result-input" type="hidden" />
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
        <input
          class="form-control number-separator"
          inputmode="numeric"
          pattern="[0-9]*"
          type="text"
        />
        <input class="result-input" type="hidden" />
        <span class="input-group-text">%</span>
      </div>
      <div class="d-flex col-3">
        <button class="btn" type="button">Ubah</button>
        <button class="btn" type="button">Hapus</button>
      </div>
    </div>
  </div>
</template>
