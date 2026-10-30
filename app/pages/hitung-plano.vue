<script setup lang="ts">
import { calculatePlano } from '~/utils/planoCalculator';
import { manualFormFromResult, paperDimensionFields, type ManualPaperLayout } from '~/utils/manualPaperLayout';
import { showActionToast } from '~/utils/actionToast';
import type { CuttingResult } from '~/composables/usePaperCutting';
const result = ref<CuttingResult | null>(null);
const form = reactive<ManualPaperLayout>({ canvasX: 0, canvasY: 0, cutX: 0, cutY: 0, position: 'Portrait', columns: 0, rows: 0, remainderDirection: '-', remainderPosition: '-', remainderColumns: 0, remainderRows: 0, secondDirection: '-', secondPosition: '-', secondColumns: 0, secondRows: 0 });
const dimensions = paperDimensionFields(form, () => 'cm');
function calculate() {
  if (![form.canvasX, form.canvasY, form.cutX, form.cutY].every(n => n > 0)) { result.value = null; return; }
  try {
    const { candidates, ...layout } = calculatePlano({ width: form.canvasX, height: form.canvasY, cutWidth: form.cutX, cutHeight: form.cutY, displayUnit: 'cm' });
    result.value = { ...layout, sizeId: null, name: 'Plano', displayUnit: 'cm' };
    Object.assign(form, manualFormFromResult(result.value));
  } catch (cause: any) { result.value = null; showActionToast(cause.message, 'error'); }
}
useLegacyPage({
  title: "Hitung Plano",
  styles: [
    "/css/style.css",
    "/css/pages/hitung-plano.css",
    "/css/pages/hitung-plano-inline.css",
  ],
  scripts: ["/js/component.js"],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-hitung-plano">
    <div class="container py-5">
      <h2 id="inline-style-hitung-plano-001">Plano</h2>
      <PagesHitungPlanoSheetDimensionsForm :dimensions="dimensions" @calculate="calculate" />
      <div class="row p-2 mt-3">
        <p>Layout Potong Kertas</p>
        <PagesHitungPlanoSheetLayoutPreview :result="result" />
        <PagesHitungPlanoPrintLayoutForm :result="result" :form="form" :dimensions="dimensions" @calculate="calculate" @layout="result = $event" />
      </div>
    </div>
  </div>
</template>
