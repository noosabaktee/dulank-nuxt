export function useCatalog<T>(kind: string) {
  const { data, pending, error } = useApi<T[]>(`/catalog/${kind}`);
  const items = computed<T[]>(() => data.value ?? []);
  return { items, pending, error };
}
