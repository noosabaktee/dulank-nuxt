<template>
  <div class="row mb-3">
    <div class="col-5">
      <label class="form-label" for="gramatur">Gramatur Kertas (Gram)</label>
    </div>
    <div class="col-7">
      <input
        class="form-control number-separator"
        id="gram"
        inputmode="numeric"
        pattern="[0-9]*"
        type="text"
      />
      <input class="result-input" id="gramatur" type="hidden" />
    </div>
  </div>
</template>
