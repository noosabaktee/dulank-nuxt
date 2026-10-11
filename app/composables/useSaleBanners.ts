import type { SaleBanner } from "#server/types/sale-banner";

export function useSaleBanners() {
  const { data } = useApi<SaleBanner[]>("/sale-banners");
  const saleBanners = computed<SaleBanner[]>(() => data.value ?? []);
  return { saleBanners };
}
