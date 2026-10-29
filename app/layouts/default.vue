<script setup lang="ts">
import { isProtectedRoute, loginRedirectQuery } from "~/utils/auth-routes";

const route = useRoute();
const auth = useAuthStore();

// Route groups are derived from the placeholders used by the original static site.
// Pages with their own dedicated header (login, register, checkout, etc.) keep that header.
const mainNavbarRoutes = new Set([
  "/404",
  "/address",
  "/billing",
  "/blog",
  "/cart",
  "/categories",
  "/cetak-buku",
  "/cetak-full-color",
  "/contact",
  "/faqs",
  "/history",
  "/",
  "/invoice-view",
  "/kalender",
  "/next",
  "/order-view",
  "/orders",
  "/our-client",
  "/post",
  "/product-list",
  "/profile",
  "/daftar-percetakan",
  "/quotation-send",
  "/quotation-success",
  "/quotation-view",
  "/quotation",
  "/result-page",
  "/success",
  "/support-ticket-detail",
  "/support-ticket",
  "/wishlist",
]);
const calculatorNavbarRoutes = new Set([
  "/kalkulator-berat-kertas",
  "/kalkulator-percetakan",
  "/kalkulator-potong-kertas",
  "/mesin-cetak",
  "/mesin-laminasi",
  "/mesin-poli",
  "/mesin-pond",
  "/pengaturan-keuntungan",
  "/profile-merchant",
  "/semua-kertas",
  "/semua-percetakan",
  "/semua-toko-kertas",
  "/store-kertas",
  "/store",
  "/support-ticket-detail-kalkulator",
  "/support-ticket-kalkulator",
]);

const normalizedPath = computed(
  () => route.path.replace(/\.html$/, "").replace(/\/$/, "") || "/",
);
const navbarType = computed(() => {
  if (calculatorNavbarRoutes.has(normalizedPath.value)) return "calculator";
  if (mainNavbarRoutes.has(normalizedPath.value)) return "main";
  return "page";
});
const showFooter = computed(() => normalizedPath.value !== "/print-order");

// Sesi hilang di tengah halaman (401 → auth.reset() dari plugin $api):
// guest yang berada di halaman protected diarahkan ke /login.
watch(
  () => auth.isAuthenticated,
  (isAuthenticated) => {
    if (
      !isAuthenticated &&
      import.meta.client &&
      isProtectedRoute(normalizedPath.value)
    ) {
      navigateTo(`/login${loginRedirectQuery(route.fullPath)}`);
    }
  },
);
</script>

<template>
  <div class="dulank-layout min-h-screen bg-white">
    <header v-if="navbarType !== 'page'" class="dulank-global-header">
      <LayoutCalculatorNavbar v-if="navbarType === 'calculator'" />
      <LayoutMainNavbar v-else />
    </header>
    <div class="dulank-layout-content">
      <slot />
    </div>
    <LayoutAppFooter v-if="showFooter" class="dulank-layout-footer" />
  </div>
</template>

<style scoped>
.dulank-layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.dulank-layout-content {
  flex: 1 0 auto;
}

.dulank-layout-footer {
  flex: 0 0 auto;
}
</style>
