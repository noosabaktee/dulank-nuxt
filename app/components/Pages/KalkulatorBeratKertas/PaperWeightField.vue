<script setup lang="ts">
const calculator = inject<ReturnType<typeof usePaperWeight>>('paper-weight')!;
</script>

<template>
  <div class="row mb-3">
    <div class="col-5">
      <label class="form-label" for="gramatur">Gramatur Kertas (Gram)</label>
    </div>
    <div class="col-7">
      <input
        class="form-control number-separator"
        id="gram" v-model.number="calculator.form.gsm" @input="calculator.form.sizeId = ''"
        inputmode="decimal"

        type="text"
      />
      <input class="result-input" id="gramatur" :value="calculator.form.gsm" type="hidden" />
    </div>
  </div>
</template>
