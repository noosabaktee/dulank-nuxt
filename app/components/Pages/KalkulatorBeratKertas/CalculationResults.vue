<template>
  <div class="result-container" id="result">
    <p class="fs-6">
      Hasil Perhitungan :
      <button class="btn p-0 float-end" id="clear-form" type="button">
        x Clear Form
      </button>
    </p>
    <p class="text-standard" id="result-list"></p>
    <div class="d-flex justify-content-end">
      <span class="text-standard fw-semibold" id="total-berat"
        >Total Berat</span
      >
      <span class="text-standard fw-semibold ms-2" id="kg-berat">0 kg</span>
    </div>
    <div class="d-flex justify-content-end mt-5">
      <button
        class="btn p-0 mb-3 my-text-primary"
        id="add-calculate"
        type="button"
      >
        +Tambah Perhitungan
      </button>
      <button class="btn p-0 mb-3 ms-3" id="copy-clipboard" type="button">
        Copy to Clipboard
      </button>
    </div>
  </div>
</template>
