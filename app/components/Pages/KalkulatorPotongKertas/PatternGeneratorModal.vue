<script setup lang="ts">
import type { CuttingResult } from '~/composables/usePaperCutting';
import { manualFormFromResult, paperDimensionFields, type ManualPaperLayout } from '~/utils/manualPaperLayout';
import { buildPlanoSvg, downloadPlanoSvg } from '~/utils/planoSvg';
const props = defineProps<{
    result: CuttingResult | null;
}>();
const emit = defineEmits<{
    close: [
    ];
}>();
const manual = ref<CuttingResult | null>(null);
const displayed = computed(() => manual.value ?? props.result);
const unit = computed(() => props.result?.displayUnit ?? 'mm');
const exportMode = ref<'CorelDRAW' | 'Universal'>('CorelDRAW');
const documentSvg = computed(() => displayed.value ? buildPlanoSvg(displayed.value, { mode: exportMode.value }) : null);
const manualControls = ref<{ generate: () => void } | null>(null);
const manualForm = reactive<ManualPaperLayout>({ canvasX: 1, canvasY: 1, cutX: 1, cutY: 1, position: 'Portrait', columns: 1, rows: 1, remainderDirection: '-', remainderPosition: '-', remainderColumns: 0, remainderRows: 0 });
const dimensions = paperDimensionFields(manualForm, () => unit.value);
watch(() => props.result, result => {
  manual.value = null;
  if (result) {
    Object.assign(manualForm, manualFormFromResult(result));
  }
}, { immediate: true });
function download() {
    if (displayed.value) downloadPlanoSvg(displayed.value, { mode: exportMode.value });
}
let previousFocus: HTMLElement | null = null;
let previousOverflow = '';
function restore() { document.body.style.overflow = previousOverflow; previousFocus?.focus(); previousFocus = null; }
function onKey(event: KeyboardEvent) {
    if (!props.result)
        return;
    if (event.key === 'Escape')
        emit('close');
    if (event.key === 'Tab') {
        const controls = Array.from(document.querySelectorAll<HTMLElement>('#generatePatternModal button:not(:disabled), #generatePatternModal input, #generatePatternModal select, #generatePatternModal summary')).filter(element => element.getClientRects().length);
        const first = controls[0];
        const last = controls.at(-1);
        if (first && last && ((!event.shiftKey && document.activeElement === last) || (event.shiftKey && document.activeElement === first))) {
            event.preventDefault();
            (event.shiftKey ? last : first).focus();
        }
    }
}
onMounted(() => {
    window.addEventListener('keydown', onKey);
    watch(() => props.result, async (result) => {
        if (result) {
            previousFocus = document.activeElement as HTMLElement;
            previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            await nextTick();
            document.querySelector<HTMLElement>('#generatePatternModal .btn-close')?.focus();
        }
        else
            restore();
    }, { immediate: true });
});
onBeforeUnmount(() => { window.removeEventListener('keydown', onKey); if (props.result)
    restore(); });
</script>

<template>
  <Teleport to="body">
  <div
    v-if="result"
    aria-modal="true" role="dialog"
    aria-labelledby="generatePatternModalLabel"
    class="modal fade show d-block" @click.self="emit('close')"
    id="generatePatternModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 class="modal-title" id="generatePatternModalLabel">
            Generate Pattern Potongan
          </h5>
          <button
            aria-label="Close"
            class="btn-close"
            @click="emit('close')"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <h2 id="inline-style-kalkulator-potong-kertas-001">{{ displayed!.name }}</h2>
            <form
              class="d-md-flex d-inline-block align-items-end"
              @submit.prevent="manualControls?.generate()"
              id="planoForm"
            >
              <div class="me-3">
                <label class="mb-2">Ukuran Plano ({{ unit }})</label>
                <div class="d-flex align-items-center">
                  <input
                    class="form-control"
                    id="plano_x" v-model.number="dimensions.canvasX"
                    min="0.001" step="any"
                    type="number"
                  />
                  <span class="mx-1">X</span>
                  <input
                    class="form-control"
                    id="plano_y" v-model.number="dimensions.canvasY"
                    min="0.001" step="any"
                    type="number"
                  />
                </div>
              </div>
              <div class="me-3 mt-md-0 mt-3">
                <label class="mb-2">Ukuran Cetak ({{ unit }})</label>
                <div class="d-flex align-items-center">
                  <input
                    class="form-control"
                    id="ukuran_cetak_x" v-model.number="dimensions.cutX"
                    min="0.001" step="any"
                    type="number"
                  />
                  <span class="mx-1">X</span>
                  <input
                    class="form-control"
                    id="ukuran_cetak_y" v-model.number="dimensions.cutY"
                    min="0.001" step="any"
                    type="number"
                  />
                </div>
              </div>
            </form>
            <div class="row p-2 mt-3">
              <p>Layout Potong Kertas</p>
              <div class="col-lg-6">
                <div
                  class="svg-wrap p-2"
                  id="inline-style-kalkulator-potong-kertas-002"
                >
                  <svg id="planoSVG" xmlns="http://www.w3.org/2000/svg" width="100%" :viewBox="documentSvg!.viewBox" role="img" :aria-label="`Layout ${displayed!.count} potongan`" v-html="documentSvg!.body"></svg>
                  <br />
                  <div class="d-flex justify-content-end">
                    <select v-model="exportMode" class="form-select w-auto mt-2 me-2" aria-label="Format SVG">
                      <option value="CorelDRAW">CorelDRAW</option>
                      <option value="Universal">Universal</option>
                    </select>
                    <button
                      class="btn my-btn-primary mt-2 me-2"
                      id="downloadSVG" @click="download"
                      type="button"
                    >
                      Download SVG
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <PagesKalkulatorPotongKertasPatternManualControls ref="manualControls" :result="result" :form="manualForm" :dimensions="dimensions" :unit="unit" :count="displayed!.count" @layout="manual = $event" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div v-if="result" class="modal-backdrop fade show"></div>
  </Teleport>
</template>
