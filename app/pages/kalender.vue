<script setup lang="ts">
useLegacyPage({
  title: "Kalender 2027 | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/kalender.css",
    "/css/pages/kalender-inline.css"
  ],
  scripts: [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/pages/kalender.js",
    "/js/product.js",
    "/js/pages/kalender-events.js"
  ],
  sweetAlert: false
})
</script>

<template>
  <div class="dulank-page dulank-page-kalender">
    <div class="container mt-3">
      <p class="text-standard">Home > Products > Kalender 2027</p>
    </div>
    <main>
      <div class="container mt-3">
        <div class="section-card">
          <div class="row flex-lg-row">
            <PagesKalenderGallery />
            <PagesKalenderSpecForm />
          </div>
          <PagesKalenderPriceTable />
        </div>

        <PagesKalenderDesignTabs />
        <PagesKalenderGuidelinesFaq />
        <PagesKalenderBuyTogether />
      </div>
    </main>
    <footer>
      <div><LayoutAppFooter /></div>
    </footer>

    <PagesKalenderQtyModal />
  </div>
</template>
