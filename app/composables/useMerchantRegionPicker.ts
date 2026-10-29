export interface RegionAddressValue { province?: string; city?: string; district?: string; address?: string }
interface RegionOption { id: number; name: string; code?: string }
export function useMerchantRegionPicker(form: RegionAddressValue) {
  const open = ref(false)
  const tab = ref(0)
  const query = ref('')
  const provinceId = ref<number | null>(null)
  const regencyId = ref<number | null>(null)
  const provinces = useApi<RegionOption[]>('/regions/provinces')
  const cities = useApi<RegionOption[]>(() => `/regions/regencies?province=${encodeURIComponent(String(provinceId.value ?? (form.province || '__none__')))}`)
  const districts = useApi<RegionOption[]>(() => `/regions/districts?regency=${encodeURIComponent(String(regencyId.value ?? (form.city || '__none__')))}`)
  const lists = computed(() => [provinces.data.value ?? [], cities.data.value ?? [], districts.data.value ?? []].map(rows => rows.filter(row => !query.value || row.name.toLowerCase().includes(query.value.toLowerCase()))))
  const pending = computed(() => [provinces, cities, districts][tab.value]?.pending.value)
  const error = computed(() => [provinces, cities, districts][tab.value]?.error.value)
  function choose(row: RegionOption, level: number) {
    if (level === 0) { provinceId.value = row.id; regencyId.value = null; form.province = row.name; form.city = ''; form.district = '' }
    if (level === 1) { regencyId.value = row.id; form.city = row.name; form.district = '' }
    if (level === 2) form.district = row.name
    form.address = [form.province, form.city, form.district].filter(Boolean).join(', ')
    query.value = ''; tab.value = Math.min(level + 1, 2); open.value = level < 2
  }
  function clear() { provinceId.value = null; regencyId.value = null; form.address = ''; form.province = ''; form.city = ''; form.district = ''; query.value = ''; tab.value = 0; open.value = true }
  return { open, tab, query, lists, pending, error, choose, clear }
}
