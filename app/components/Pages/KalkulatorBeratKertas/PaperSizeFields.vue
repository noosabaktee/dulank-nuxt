<template>
  <div class="row mb-3">
    <div class="col-5">
      <label class="form-label d-flex" for="panjang"> Ukuran Kertas </label>
    </div>
    <div class="col-7">
      <div class="row">
        <div class="col-6">
          <div class="input-group input-group-sm">
            <span class="input-group-text">P</span>
            <input
              class="form-control number-separator"
              id="width"
              inputmode="numeric"
              pattern="[0-9]*"
              type="text"
            />
            <input class="result-input" id="panjang" type="hidden" />
          </div>
        </div>
        <div class="col-6">
          <div class="input-group input-group-sm">
            <span class="input-group-text">L</span>
            <input
              class="form-control number-separator"
              id="height"
              inputmode="numeric"
              pattern="[0-9]*"
              type="text"
            />
            <input class="result-input" id="lebar" type="hidden" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
