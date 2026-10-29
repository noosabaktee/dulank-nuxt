import { requiresMerchant, calculatorFeature, normalizeMerchantPath } from '~/utils/merchant-routes';
import { loginRedirectQuery } from '~/utils/auth-routes';
import type { MerchantProfile, MerchantAccessState } from '~/composables/useMerchantProfile';

export default defineNuxtRouteMiddleware(async (to) => {
  const path = normalizeMerchantPath(to.path);
  const onboarding = path === '/daftar-percetakan';
  if (!onboarding && !requiresMerchant(path)) return;
  const auth = useAuthStore();
  const login = () => navigateTo(`/login${loginRedirectQuery(to.fullPath)}`);
  if (!auth.isAuthenticated) return login();
  try {
    if (!auth.user) await auth.initialize();
    if (!auth.isAuthenticated) return login();
    const { $api } = useNuxtApp();
    const response = await $api<{ data: { viewerId: number; merchant: MerchantProfile | null; access: MerchantAccessState } }>('/merchant-profile');
    const state = response.data;
    if (state.viewerId !== auth.user?.id) throw new Error('Profil akun tidak sesuai.');
    if (onboarding) {
      if (state.merchant) return navigateTo('/profile-merchant');
      return;
    }
    if (!state.merchant) return navigateTo('/daftar-percetakan');
    if (path !== '/profile-merchant' && (!state.access.active || !state.access.features.includes(calculatorFeature(path)))) {
      return navigateTo('/profile-merchant?access=restricted');
    }
  } catch (cause: any) {
    if (cause?.statusCode === 401 || cause?.status === 401 || !auth.isAuthenticated) return login();
    throw createError({ statusCode: 503, statusMessage: 'Akses percetakan belum dapat diperiksa. Silakan coba lagi.' });
  }
});
