<template>
  <div class="mt-3 produksi-form">
    <button
      class="btn btn-spec me-2 col-12 col-md-6 text-md-start text-center"
      id="select-2"
      type="button"
    >
      Berdasarkan Proses Produksi<span class="ribbon d-none"></span>
    </button>
    <div class="ms-5 input-select d-none">
      <div class="row">
        <div class="col-md-3 col-6 mt-2">
          <label class="text-standard"
            >Penambahan Profit dari Biaya Cetak</label
          >
        </div>
        <div class="col-md-3 col-6 mt-2">
          <div class="input-group input-group-sm">
            <input
              class="form-control number-separator"
              inputmode="numeric"
              pattern="[0-9]*"
              type="text"
            />
            <input class="result-input" type="hidden" />
            <span class="input-group-text">%</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-6 mt-2">
          <label class="text-standard"
            >Penambahan Profit dari Belanja Kertas</label
          >
        </div>
        <div class="col-md-3 col-6 mt-2">
          <div class="input-group input-group-sm">
            <input
              class="form-control number-separator"
              inputmode="numeric"
              pattern="[0-9]*"
              type="text"
            />
            <input class="result-input" type="hidden" />
            <span class="input-group-text">%</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-6 mt-2">
          <label class="text-standard"
            >Penambahan Profit dari Biaya Laminasi</label
          >
        </div>
        <div class="col-md-3 col-6 mt-2">
          <div class="input-group input-group-sm">
            <input
              class="form-control number-separator"
              inputmode="numeric"
              pattern="[0-9]*"
              type="text"
            />
            <input class="result-input" type="hidden" />
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
            <input
              class="form-control number-separator"
              inputmode="numeric"
              pattern="[0-9]*"
              type="text"
            />
            <input class="result-input" type="hidden" />
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
            <input
              class="form-control number-separator"
              inputmode="numeric"
              pattern="[0-9]*"
              type="text"
            />
            <input class="result-input" type="hidden" />
            <span class="input-group-text">%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
