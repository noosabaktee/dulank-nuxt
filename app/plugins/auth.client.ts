/**
 * Inisialisasi sesi (client-only): baca cookie token → validasi via
 * GET /auth/me. Halaman protected juga memanggil `initialize()` di SSR,
 * sehingga state user sudah terisi saat payload dihydrasi.
 */
export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();
  await auth.initialize();
});