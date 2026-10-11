import type { FAQ } from "#server/types/faq";

export function useFaqs() {
  const { data } = useApi<FAQ[]>("/faqs");
  const faqs = computed<FAQ[]>(() => data.value ?? []);
  return { faqs };
}
