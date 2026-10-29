import { showActionToast } from '~/utils/actionToast'
export interface PaperSizeOption { id: number; name: string; length: number; width: number; unit: string }
export interface CuttingResult { displayUnit?: 'mm' | 'cm'; cutWidth?: number; cutHeight?: number; gap?: number; sizeId: number | null; name: string; width: number; height: number; count: number; utilization: number; placements: { isRemainder?: boolean; x: number; y: number; width: number; height: number }[] }
export interface CuttingForm { unit: 'mm' | 'cm'; cutWidth: number; cutHeight: number; gap: number; selected: number[]; custom: boolean; width: number; height: number }
export function usePaperCutting() {
  const { $api } = useNuxtApp()
  const sizesRequest = useApi<PaperSizeOption[]>('/calculator/paper-sizes')
  const content = useApi<{ title: string; introduction: string }>('/calculator/content')
  const form = reactive<CuttingForm>({ unit: 'cm', cutWidth: 0, cutHeight: 0, gap: 0, selected: [], custom: false, width: 0, height: 0 })
  const results = ref<CuttingResult[]>([]); const preview = ref<CuttingResult | null>(null); const busy = ref(false); const error = ref('')
  watch(() => sizesRequest.data.value, sizes => { if (!form.selected.length) form.selected = sizes?.[0] ? [sizes[0].id] : [] }, { immediate: true })
  watch(form, () => { results.value = []; preview.value = null; error.value = '' }, { deep: true })
  async function calculate() {
    if (busy.value) return
    error.value = ''; busy.value = true; results.value = []; preview.value = null
    try {
      const displayUnit = form.unit
      const scale = displayUnit === 'cm' ? 10 : 1
      const body = { sizeIds: form.custom ? [] : form.selected, cutWidth: form.cutWidth * scale, cutHeight: form.cutHeight * scale, gap: form.gap * scale, ...(form.custom ? { custom: { width: form.width * scale, height: form.height * scale } } : {}) }
      const response = await $api<{ data: CuttingResult[] }>('/calculator/paper-cutting', { method: 'POST', body })
      results.value = response.data.map(row => ({ ...row, displayUnit, cutWidth: body.cutWidth, cutHeight: body.cutHeight, gap: body.gap }))
    } catch (cause: any) { error.value = cause?.data?.message || cause?.message || 'Perhitungan belum berhasil. Periksa ukuran dan akses langganan.'; showActionToast(error.value, 'error') }
    finally { busy.value = false }
  }
  return { sizesRequest, content, form, results, preview, busy, error, calculate }
}
