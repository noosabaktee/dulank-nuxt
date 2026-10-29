<script setup lang="ts">
const calculator = inject<ReturnType<typeof usePaperWeight>>('paper-weight')!;
</script>

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
              id="width" v-model.number="calculator.form.width" @input="calculator.form.sizeId = ''"
              inputmode="decimal"

              type="text"
            />
            <input class="result-input" id="panjang" :value="calculator.form.width" type="hidden" />
          </div>
        </div>
        <div class="col-6">
          <div class="input-group input-group-sm">
            <span class="input-group-text">L</span>
            <input
              class="form-control number-separator"
              id="height" v-model.number="calculator.form.height" @input="calculator.form.sizeId = ''"
              inputmode="decimal"

              type="text"
            />
            <input class="result-input" id="lebar" :value="calculator.form.height" type="hidden" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
