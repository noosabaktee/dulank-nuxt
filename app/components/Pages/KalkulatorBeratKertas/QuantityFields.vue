<template>
  <div class="row mb-3">
    <div class="col-5">
      <label class="form-label" for="jumlah">Banyaknya kertas</label>
    </div>
    <div class="col-7">
      <div class="row">
        <div class="col-md-5">
          <input
            class="form-control number-separator"
            id="amount"
            inputmode="numeric"
            pattern="[0-9]*"
            type="text"
          />
          <input class="result-input" id="jumlah" type="hidden" />
        </div>
        <div class="col-md-7" id="qty">
          <button class="btn btn-spec me-2 selected" data-value="Lembar" type="button">
            Lembar<span class="ribbon"></span>
          </button>
          <button class="btn btn-spec me-2" data-value="Rim" type="button">
            Rim<span class="ribbon d-none"></span>
          </button>
        </div>
        <div class="mt-2">
          <small class="d-none text-standard text-danger" id="info-selected-all"
            ><i class="fa-solid fa-circle-info"></i> please select your
            specification<br
          /></small>
        </div>
        <div>
          <button
            class="btn my-btn-primary w-100 mt-3"
            id="calculate"
            type="button"
          >
            Hitung
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
