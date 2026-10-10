<template>
  <div class="persentase-form">
    <button
      class="btn btn-spec me-2 col-12 col-md-6 text-md-start text-center selected"
      id="select-1"
      type="button"
    >
      Berdasarkan Persentase<span class="ribbon"></span>
    </button>
    <div class="ms-5 input-select">
      <div class="row">
        <div class="col-md-3 col-6 my-3">
          <label class="text-standard"
            >Penambahan Profit dari total biaya produksi</label
          >
        </div>
        <div class="col-md-3 col-6 my-3">
          <div class="input-group input-group-sm">
            <input
              class="form-control number-separator"
              inputmode="numeric"
              pattern="[0-9]*"
              type="text"
            />
            <input class="form-control" type="hidden" />
            <span class="input-group-text">%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
