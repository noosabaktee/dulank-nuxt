import type { Product } from "#server/types/product";

export function useProductList() {
  const route = useRoute();
  const category = computed(() => String(route.query.category ?? ""));
  const { data } = useApi<Product[]>(
    `/products?page=1&limit=20${category.value ? `&category=${encodeURIComponent(category.value)}` : ""}`,
  );
  const products = computed<Product[]>(() => data.value ?? []);
  return { products };
}
