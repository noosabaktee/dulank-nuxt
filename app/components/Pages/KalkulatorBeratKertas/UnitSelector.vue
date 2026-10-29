<script setup lang="ts">
const calculator = inject<ReturnType<typeof usePaperWeight>>('paper-weight')!;
</script>

<template>
  <div class="mb-4 row">
    <div class="col-5">
      <label class="form-label" for="jumlah">Satuan Panjang</label>
    </div>
    <div class="col-7" id="unit">
      <button
        class="btn btn-spec me-2" :class="{ selected: calculator.form.unit === 'cm' }" @click="calculator.form.unit = 'cm'"
        data-value="Centimeter"
        type="button"
      >
        Centimeter<span class="ribbon" :class="{ 'd-none': calculator.form.unit !== 'cm' }"></span>
      </button>
      <button class="btn btn-spec me-2" :class="{ selected: calculator.form.unit === 'mm' }" @click="calculator.form.unit = 'mm'" data-value="Milimeter" type="button">
        Milimeter<span class="ribbon" :class="{ 'd-none': calculator.form.unit !== 'mm' }"></span>
      </button>
      <div>
        <br />
        <a
          class="text-center text-primary"
          @click="calculator.showSizes.value = !calculator.showSizes.value"
          role="button"
          >Lihat ukuran yang tersedia</a
        >
        <div class="mt-2" :class="{ 'd-none': !calculator.showSizes.value }" id="size">
          <button v-for="size in calculator.sizes.data.value" :key="size.id" class="btn btn-spec me-2" :class="{ selected: calculator.form.sizeId === String(size.id) }" type="button" @click="calculator.form.sizeId = String(size.id)">
            {{ size.name }}, {{ size.width }} x {{ size.length }} {{ size.unit }}<span class="ribbon" :class="{ 'd-none': calculator.form.sizeId !== String(size.id) }"></span>
          </button>
          <a
            class="d-block text-primary mt-2"
            @click="calculator.showModal.value = true"
            role="button"
            >+Tambah ukuran baru</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
