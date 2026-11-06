<script setup lang="ts">
import type { CuttingResult } from '~/composables/usePaperCutting';
import { buildPlanoSvg, downloadPlanoSvg } from '~/utils/planoSvg';
const props = defineProps<{ result: CuttingResult | null }>();
const exportMode = ref<'CorelDRAW' | 'Universal'>('CorelDRAW');
const documentSvg = computed(() => props.result ? buildPlanoSvg(props.result, { mode: exportMode.value }) : null);
</script>
<template>
  <div class="col-lg-6">
    <div class="svg-wrap p-2" :class="{ 'd-none': !result }" id="inline-style-hitung-plano-002">
      <svg v-if="documentSvg" id="planoSVG" xmlns="http://www.w3.org/2000/svg" width="100%" :viewBox="documentSvg.viewBox" role="img" :aria-label="`Layout ${result!.count} potongan`" v-html="documentSvg.body"></svg>
      <br />
      <div class="d-flex justify-content-end">
        <select v-model="exportMode" class="form-select w-auto mt-2 me-2" aria-label="Format SVG">
          <option value="CorelDRAW">CorelDRAW</option><option value="Universal">Universal</option>
        </select>
        <button
          class="btn my-btn-primary mt-2 me-2"
          id="downloadSVG"
          type="button"
          @click="result && downloadPlanoSvg(result, { mode: exportMode })"
        >
          Download SVG
        </button>
      </div>
    </div>
  </div>
</template>
