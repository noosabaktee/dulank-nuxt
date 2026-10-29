export interface MerchantProfile {
  id: number; type: 'printing_shop' | 'paper_store'; name: string; avatar: string | null;
  province: string; city: string; district: string; address: string; whatsapp: string;
  introductions?: Partial<Record<'paper_cutting' | 'paper_weight' | 'printing', string>>; calculatorTitle: string; displayOn: string[]; status: string;
}
export interface MerchantAccessState { active: boolean; features: string[]; plan: string | null; expiresOn: string | null; merchantId: number | null }
interface MerchantResponse { viewerId: number; access: MerchantAccessState; merchant: MerchantProfile | null }
export function useMerchantProfile() {
  const auth = useAuthStore()
  const { $api } = useNuxtApp()
  const request = useAsyncData<MerchantResponse | null>('merchant-profile', async () => {
    if (!auth.token) return null
    if (!auth.user) await auth.initialize()
    if (!auth.token) return null
    const response = await $api<{ data: MerchantResponse }>('/merchant-profile')
    return response.data
  }, { watch: [() => auth.token], default: () => null })
  const state = computed(() => auth.token && request.data.value?.viewerId === auth.user?.id ? request.data.value : null)
  const busy = ref(false); const message = ref(''); const mutationError = ref('')
  async function mutate(action: () => Promise<unknown>) {
    busy.value = true; mutationError.value = ''; message.value = ''
    try { await action(); await request.refresh(); message.value = 'Perubahan berhasil disimpan.' }
    catch (error: any) { mutationError.value = error?.data?.message || 'Perubahan belum tersimpan. Coba kembali.'; throw error }
    finally { busy.value = false }
  }
  const register = (form: FormData) => mutate(() => $api('/merchant-profile/onboarding', { method: 'POST', body: form }))
  const save = (form: Partial<MerchantProfile>) => mutate(() => $api('/merchant-profile', { method: 'PUT', body: form }))
  const saveIntroduction = (page: 'paper_cutting' | 'paper_weight' | 'printing', text: string) => mutate(() => $api('/merchant-profile/introduction', { method: 'PATCH', body: { page, text } }))
  const uploadLogo = (file: File) => mutate(() => { const body = new FormData(); body.append('file', file); return $api('/merchant-profile/logo', { method: 'POST', body }) })
  const removeLogo = () => mutate(() => $api('/merchant-profile/logo', { method: 'DELETE' }))
  return { ...request, state, busy, message, mutationError, register, save, saveIntroduction, uploadLogo, removeLogo }
}
