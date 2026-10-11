import type { Category } from "#server/types/category";

export function useCategories() {
  const { data, pending, error } = useApi<Category[]>("/categories");
  const categories = computed<Category[]>(() => data.value ?? []);
  return { categories, pending, error };
}
