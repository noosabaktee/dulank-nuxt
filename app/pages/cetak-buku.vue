<script setup lang="ts">
useLegacyPage({
  title: "Cetak Buku | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/cetak-buku.css",
    "/css/pages/cetak-buku-inline.css"
  ],
  scripts: [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/pages/cetak-buku-01.js",
    "/js/product.js",
    "/js/pages/cetak-buku-02.js",
    "/js/pages/cetak-buku-events.js"
  ],
  sweetAlert: false
})
</script>

<template>
  <div class="dulank-page dulank-page-cetak-buku">
    <div class="container mt-3">
      <p class="text-standard">Home > Products > Cetak Buku</p>
    </div>
    <main>
      <div class="container mt-3">
        <div class="section-card">
          <div class="row flex-lg-row">
            <PagesCetakBukuGallery />
            <PagesCetakBukuSpecForm />
          </div>
          <PagesCetakBukuPriceTable />
        </div>

        <PagesCetakBukuDesignTabs />
        <PagesCetakBukuGuidelinesFaq />
        <PagesCetakBukuBuyTogether />
      </div>
    </main>
    <footer>
      <div><LayoutAppFooter /></div>
    </footer>

    <PagesCetakBukuQtyModal />
  </div>
</template>
