import { showActionToast } from '~/utils/actionToast'
import type { PaperSizeOption } from './usePaperCutting'
export function usePaperWeight() {
 const { $api } = useNuxtApp()
 const sizes = useApi<PaperSizeOption[]>('/calculator/paper-sizes?feature=paper_weight')
 const form = reactive({ sizeId: '', width: '' as number | string, height: '' as number | string, unit: 'cm', gsm: '' as number | string, quantity: '' as number | string, quantityUnit: 'lembar' })
 const history = ref<{ grams: number; description: string }[]>([])
 const totalGrams = computed(() => history.value.reduce((total, row) => total + row.grams, 0))
 const showSizes = ref(false)
 const showModal = ref(false)
 const draft = reactive({ name: '', width: 0, height: 0, unit: 'cm' })
 function clear(resetHistory = true) { Object.assign(form, { sizeId: '', width: '', height: '', gsm: '', quantity: '' }); if (resetHistory) history.value = [] }
 function applyCustom() { if (draft.width <= 0 || draft.height <= 0) { error.value = 'Isi ukuran kertas yang valid.'; showActionToast(error.value, 'error'); return }; Object.assign(form, { sizeId: '', width: draft.width, height: draft.height, unit: draft.unit }); showModal.value = false }
 async function copy() { try { await navigator.clipboard.writeText(history.value.map(row => row.description + ' ' + row.grams / 1000 + ' kg').join('\n') + '\nTotal Berat: ' + totalGrams.value / 1000 + ' kg') } catch { error.value = 'Clipboard tidak dapat diakses.'; showActionToast(error.value, 'error') } }
 const result = ref<number | null>(null); const busy = ref(false); const error = ref('')
 watch(() => form.sizeId, id => { const size = sizes.data.value?.find(row => String(row.id) === id); if (size) { form.unit = size.unit; form.width = size.width; form.height = size.length } })
 watch(form, () => { result.value = null; error.value = '' }, { deep: true })
 async function calculate() {
  if (busy.value) return
  busy.value = true; error.value = ''; result.value = null
  try { const scale = form.unit === 'cm' ? 10 : 1; const response = await $api<{ data: { grams: number } }>('/calculator/paper-weight', { method: 'POST', body: { width: Number(form.width) * scale, height: Number(form.height) * scale, gsm: Number(form.gsm), quantity: Number(form.quantity) * (form.quantityUnit === 'rim' ? 500 : 1) } }); result.value = response.data.grams; history.value.push({ grams: response.data.grams, description: `Ukuran kertas ${form.width}x${form.height} ${form.unit} ${form.gsm} gsm sebanyak ${form.quantity} ${form.quantityUnit}` }) }
  catch (cause: any) { error.value = cause?.data?.message || 'Periksa ukuran dan akses langganan Anda.' }
  finally { busy.value = false }
 }
 return { sizes, form, result, busy, error, calculate, history, totalGrams, clear, copy, showSizes, showModal, draft, applyCustom }
}
