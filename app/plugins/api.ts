import { showActionToast } from '~/utils/actionToast';
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
    onResponse({ request, response, options }) {
      const method = String(options.method || 'GET').toUpperCase();
      if (['GET', 'HEAD', 'OPTIONS'].includes(method) || /\/auth\//.test(String(request)) || /\/calculator\/paper-(cutting|weight)/.test(String(request))) return;
      if (response.ok && response._data?.success !== false) showActionToast(response._data?.message || (method === 'DELETE' ? 'Data berhasil dihapus.' : 'Perubahan berhasil disimpan.'), 'success', 'request');
    },
    onResponseError({ response, request, options }) {
      const method = String(options.method || 'GET').toUpperCase();
      if (!['GET', 'HEAD', 'OPTIONS'].includes(method) && !/\/auth\//.test(String(request))) showActionToast(response._data?.message || 'Aksi belum berhasil. Periksa kembali data Anda.', 'error', 'request');
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