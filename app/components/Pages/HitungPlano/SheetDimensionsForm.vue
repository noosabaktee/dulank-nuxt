<script setup lang="ts">
import type { ManualPaperLayout } from '~/utils/manualPaperLayout';
defineProps<{ dimensions: Pick<ManualPaperLayout, 'canvasX' | 'canvasY' | 'cutX' | 'cutY'> }>();
const emit = defineEmits<{ calculate: [] }>();
</script>
<template>
  <form
    class="d-md-flex d-inline-block align-items-end"
    data-js-submit="hitung-plano-001"
    id="planoForm"
    @submit.prevent="emit('calculate')" @change="emit('calculate')"
  >
    <div class="me-3">
      <label class="mb-2">Ukuran Plano (cm)</label>
      <div class="d-flex align-items-center">
        <input class="form-control" id="plano_x" v-model.number="dimensions.canvasX" min="0.001" step="any" type="number" />
        <span class="mx-1">X</span>
        <input class="form-control" id="plano_y" v-model.number="dimensions.canvasY" min="0.001" step="any" type="number" />
      </div>
    </div>
    <div class="me-3 mt-md-0 mt-3">
      <label class="mb-2">Ukuran Cetak (cm)</label>
      <div class="d-flex align-items-center">
        <input class="form-control" id="ukuran_cetak_x" v-model.number="dimensions.cutX" min="0.001" step="any" type="number" />
        <span class="mx-1">X</span>
        <input class="form-control" id="ukuran_cetak_y" v-model.number="dimensions.cutY" min="0.001" step="any" type="number" />
      </div>
    </div>
  </form>
</template>
