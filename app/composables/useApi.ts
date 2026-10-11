import type { ApiResponse } from '#server/types/api';

export function useApi<T>(url: string, options?: Record<string, unknown>) {
  const { $api } = useNuxtApp();

  const { data, pending, error, refresh } = useAsyncData(
    `api-${url}`,
    async () => {
      const res = await $api<ApiResponse<T>>(url, options);
      return res.data;
    },
  );

  return { data, pending, error, refresh };
}

export async function apiRequest<T>(
  url: string,
  options?: Record<string, unknown>,
): Promise<T> {
  const { $api } = useNuxtApp();
  const res = await $api<ApiResponse<T>>(url, options);
  return res.data;
}
