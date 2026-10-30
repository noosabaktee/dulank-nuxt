<script setup lang="ts">
import type { CuttingResult } from '~/composables/usePaperCutting';
import type { ManualPaperLayout } from '~/utils/manualPaperLayout';
defineProps<{ result: CuttingResult | null; form: ManualPaperLayout; dimensions: Pick<ManualPaperLayout, 'canvasX' | 'canvasY' | 'cutX' | 'cutY'> }>();
const emit = defineEmits<{ layout: [result: CuttingResult]; calculate: [] }>();
</script>

<template>
  <div class="col-lg-6">
    <PagesKalkulatorPotongKertasPatternManualControls :result="result" :form="form" :dimensions="dimensions" unit="cm" :count="result?.count ?? 0" @layout="emit('layout', $event)" @calculate="emit('calculate')" />
  </div>
</template>
