<script setup lang="ts">
useLegacyPage({
  title: "Cetak Full Color | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/cetak-full-color.css",
    "/css/pages/cetak-full-color-inline.css"
  ],
  scripts: [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/product.js",
    "/js/pages/cetak-full-color-events.js"
  ],
  sweetAlert: false
})
</script>

<template>
  <div class="dulank-page dulank-page-cetak-full-color">
    <div class="container mt-3">
      <p class="text-standard">Home > Products > Brosur</p>
    </div>
    <main>
      <div class="container mt-3">
        <div class="section-card">
          <div class="row flex-lg-row">
            <PagesCetakFullColorGallery />
            <PagesCetakFullColorSpecForm />
          </div>
          <PagesCetakFullColorPriceTable />
        </div>

        <PagesCetakFullColorDesignTabs />
        <PagesCetakFullColorGuidelinesFaq />
        <PagesCetakFullColorBuyTogether />
      </div>
    </main>
    <footer>
      <div><LayoutAppFooter /></div>
    </footer>

    <PagesCetakFullColorQtyModal />
  </div>
</template>
