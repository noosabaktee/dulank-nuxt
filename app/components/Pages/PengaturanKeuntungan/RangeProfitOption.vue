<template>
  <div class="mt-3 range-form">
    <button
      class="btn btn-spec me-2 col-12 col-md-6 text-md-start text-center"
      id="select-3"
      type="button"
    >
      Berdasarkan Range Total Biaya Produksi<span class="ribbon d-none"></span>
    </button>
    <div class="ms-5 input-select d-none">
      <div class="row mt-3 first">
        <div class="col-4 col-md-3 d-flex align-items-center">
          <label class="text-standard me-2">Dari</label>
          <input
            class="form-control number-separator input-dari"
            inputmode="numeric"
            pattern="[0-9]*"
            type="text"
          />
          <input class="result-input" type="hidden" />
        </div>
        <div class="col-4 col-md-3 d-flex align-items-center">
          <label class="text-standard me-2">Ke</label>
          <input
            class="form-control number-separator input-ke"
            inputmode="numeric"
            pattern="[0-9]*"
            type="text"
          />
          <input class="result-input" type="hidden" />
        </div>
        <div class="col-md-2 col-4 d-flex align-items-center">
          <label class="text-standard me-2">Profit</label>
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
        <div class="col-12 col-md-4 d-flex mt-2 mt-md-0">
          <button class="btn add-range" type="button">+Tambahkan Range</button>
          <button class="btn delete-range d-none" type="button">Hapus</button>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4 col-md-3 d-flex align-items-center">
          <label class="text-standard me-2">Dari</label>
          <input
            class="form-control number-separator input-dari"
            inputmode="numeric"
            pattern="[0-9]*"
            type="text"
          />
          <input class="result-input" type="hidden" />
        </div>
        <div class="col-4 col-md-3 d-flex align-items-center">
          <label class="text-standard me-2">Ke</label>
          <input
            class="form-control number-separator input-ke"
            inputmode="numeric"
            pattern="[0-9]*"
            type="text"
          />
          <input class="result-input" type="hidden" />
        </div>
        <div class="col-md-2 col-4 d-flex align-items-center">
          <label class="text-standard me-2">Profit</label>
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
        <div class="col-12 col-md-4 d-flex mt-2 mt-md-0">
          <button class="btn add-range" type="button">+Tambahkan Range</button>
          <button class="btn delete-range" type="button">Hapus</button>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4 col-md-3 d-flex align-items-center">
          <label class="text-standard me-2">Dari</label>
          <input
            class="form-control number-separator input-dari"
            inputmode="numeric"
            pattern="[0-9]*"
            type="text"
          />
          <input class="result-input" type="hidden" />
        </div>
        <div class="col-4 col-md-3 d-flex align-items-center">
          <label class="text-standard me-2">Ke</label>
          <input
            class="form-control number-separator input-ke"
            inputmode="numeric"
            pattern="[0-9]*"
            type="text"
          />
          <input class="result-input" type="hidden" />
        </div>
        <div class="col-md-2 col-4 d-flex align-items-center">
          <label class="text-standard me-2">Profit</label>
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
        <div class="col-12 col-md-4 d-flex mt-2 mt-md-0">
          <button class="btn add-range" type="button">+Tambahkan Range</button>
          <button class="btn delete-range" type="button">Hapus</button>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-4 col-md-3 d-flex align-items-center">
          <label class="text-standard me-2">Dari</label>
          <input
            class="form-control number-separator input-dari"
            inputmode="numeric"
            pattern="[0-9]*"
            type="text"
          />
          <input class="result-input" type="hidden" />
        </div>
        <div class="col-4 col-md-3 d-flex align-items-center">
          <label class="text-standard me-2">Ke</label>
          <input
            class="form-control number-separator"
            readonly=""
            type="text"
            value="Dan seterusnya"
          />
          <input class="result-input" type="hidden" />
        </div>
        <div class="col-md-2 col-4 d-flex align-items-center">
          <label class="text-standard me-2">Profit</label>
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
