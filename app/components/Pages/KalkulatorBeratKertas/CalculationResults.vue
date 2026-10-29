<script setup lang="ts">
const calculator = inject<ReturnType<typeof usePaperWeight>>('paper-weight')!;
</script>

<template>
  <div class="result-container" id="result">
    <p class="fs-6">
      Hasil Perhitungan :
      <button class="btn p-0 float-end" id="clear-form" @click="calculator.clear()" type="button">
        x Clear Form
      </button>
    </p>
    <div class="text-standard" id="result-list"><p v-for="(row, index) in calculator.history.value" :key="index" class="text-standard"><span role="button" tabindex="0" aria-label="Hapus hasil perhitungan" @click="calculator.history.value.splice(index, 1)" @keydown.enter="calculator.history.value.splice(index, 1)"><i class="bi bi-archive"></i></span> {{ row.description }} <span class="float-end text-standard">{{ row.grams / 1000 }} kg</span></p></div>
    <div class="d-flex justify-content-end">
      <span class="text-standard fw-semibold" id="total-berat"
        >Total Berat</span
      >
      <span class="text-standard fw-semibold ms-2" id="kg-berat">{{ calculator.totalGrams.value / 1000 }} kg</span>
    </div>
    <div class="d-flex justify-content-end mt-5">
      <button
        class="btn p-0 mb-3 my-text-primary"
        id="add-calculate" @click="calculator.clear(false)"
        type="button"
      >
        +Tambah Perhitungan
      </button>
      <button class="btn p-0 mb-3 ms-3" id="copy-clipboard" @click="calculator.copy" type="button">
        Copy to Clipboard
      </button>
    </div>
  </div>
</template>
