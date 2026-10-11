/**
 * Satu klien `$fetch` untuk seluruh aksi store & data komponen.
 *
 * - baseURL: `runtimeConfig.public.apiBase` → default proxy Nitro `/api/v1`.
 * - onRequest: sisipkan `Authorization: Bearer <token>` dari useAuthStore.
 * - onResponseError: 401 → reset sesi (guard halaman / watcher layout yang
 *   mengarahkan ke /login; request ke /auth/* tidak memicu redirect).
 */
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      const auth = useAuthStore();
      if (auth.token) {
        const headers = new Headers(options.headers);
        headers.set("Authorization", `Bearer ${auth.token}`);
        options.headers = headers;
      }
    },
    onResponseError({ response, request }) {
      if (response.status === 401) {
        const auth = useAuthStore();
        auth.reset();
      }
    },
  });

  return {
    provide: {
      api,
    },
  };
});