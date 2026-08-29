<script setup lang="ts">
const route = useRoute()

// Route groups are derived from the placeholders used by the original static site.
// Pages with their own dedicated header (login, register, checkout, etc.) keep that header.
const mainNavbarRoutes = new Set(["/404", "/address", "/billing", "/blog", "/cart", "/categories", "/cetak-buku", "/cetak-full-color", "/contact", "/faqs", "/history", "/", "/invoice-view", "/kalender", "/next", "/order-view", "/orders", "/our-client", "/post", "/product-list", "/profile", "/quotation-send", "/quotation-success", "/quotation-view", "/quotation", "/result-page", "/success", "/support-ticket-detail", "/support-ticket", "/wishlist"])
const calculatorNavbarRoutes = new Set(["/kalkulator-berat-kertas", "/kalkulator-percetakan", "/kalkulator-potong-kertas", "/mesin-cetak", "/mesin-laminasi", "/mesin-poli", "/mesin-pond", "/pengaturan-keuntungan", "/profile-kalkulator", "/semua-kertas", "/semua-percetakan", "/semua-toko-kertas", "/store-kertas", "/store", "/support-ticket-detail-kalkulator", "/support-ticket-kalkulator"])

const normalizedPath = computed(() => route.path.replace(/\.html$/, '').replace(/\/$/, '') || '/')
const navbarType = computed(() => {
  if (calculatorNavbarRoutes.has(normalizedPath.value)) return 'calculator'
  if (mainNavbarRoutes.has(normalizedPath.value)) return 'main'
  return 'page'
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <header v-if="navbarType !== 'page'" class="dulank-global-header">
      <LayoutCalculatorNavbar v-if="navbarType === 'calculator'" />
      <LayoutMainNavbar v-else />
    </header>
    <slot />
  </div>
</template>
