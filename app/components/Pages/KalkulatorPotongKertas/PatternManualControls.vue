<script setup lang="ts">
import { showActionToast } from '~/utils/actionToast';
import type { CuttingResult } from '~/composables/usePaperCutting';
import { buildManualPaperLayout, type ManualPaperLayout } from '~/utils/manualPaperLayout';
const props = defineProps<{ result: CuttingResult; form: ManualPaperLayout; dimensions: Pick<ManualPaperLayout, 'canvasX' | 'canvasY' | 'cutX' | 'cutY'>; unit: 'cm' | 'mm'; count: number }>();
const emit = defineEmits<{ layout: [result: CuttingResult] }>();
const error = ref('');
function generate() {
  try {
    error.value = '';
    const layout = buildManualPaperLayout(props.form, props.result);
    emit('layout', layout);
  }
  catch (cause: any) { error.value = cause.message; showActionToast(error.value, 'error'); }
}
defineExpose({ generate });
</script>

<template>
                <div id="mainForm">
                  <span class="text-standard my-2 d-block"
                    ><b>Qty PCS</b>
                    <input
                      class="form-control number-separator"
                      id="qty" :value="count" readonly inputmode="numeric"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Panjang Canvas X ({{ unit }})</b>
                    <input
                      class="form-control number-separator"
                      id="canvas_x" v-model.number="dimensions.canvasX"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Panjang Canvas Y ({{ unit }})</b>
                    <input
                      class="form-control number-separator"
                      id="canvas_y" v-model.number="dimensions.canvasY"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Panjang Cetak X ({{ unit }})</b>
                    <input
                      class="form-control number-separator"
                      id="cetak_x" v-model.number="dimensions.cutX"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Panjang Cetak Y ({{ unit }})</b>
                    <input
                      class="form-control number-separator"
                      id="cetak_y" v-model.number="dimensions.cutY"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Posisi Kotak awal</b>
                    <select class="form-select text-standard" id="posisi_awal" v-model="form.position">
                      <option value="Portrait">Portrait</option>
                      <option value="Landscape">Landscape</option>
                    </select>
                  </span>
                  <span class="text-standard my-2 d-block"
                    ><b>Duplikat Kotak center X</b>
                    <input
                      class="form-control number-separator"
                      id="dup_x" v-model.number="form.columns"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Duplikat Kotak center Y</b>
                    <input
                      class="form-control number-separator"
                      id="dup_y" v-model.number="form.rows"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Penempatan Arah Sisa</b>
                    <select class="form-select text-standard" id="arah_sisa" v-model="form.remainderDirection">
                      <option value="-">-</option>
                      <option value="Kanan">Kanan</option>
                      <option value="Bawah">Bawah</option>
                    </select>
                  </span>
                  <span class="text-standard my-2 d-block"
                    ><b>Posisi Kotak Sisa</b>
                    <select class="form-select text-standard" id="posisi_sisa" v-model="form.remainderPosition">
                      <option value="-">-</option>
                      <option value="Portrait">Portrait</option>
                      <option value="Landscape">Landscape</option>
                    </select>
                  </span>
                  <span class="text-standard my-2 d-block"
                    ><b>kotak sisa X</b>
                    <input class="form-control" id="sisa_x" v-model.number="form.remainderColumns" type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>kotak sisa Y</b>
                    <input class="form-control" id="sisa_y" v-model.number="form.remainderRows" type="text"
                  /></span>
                </div>
                <div class="mt-md-0 mt-3">
                  <button
                    class="my-btn-primary btn"
                    id="generateBtn" @click="generate"
                    type="button"
                  >
                    Generate
                  </button>
                </div>
</template>
