<script setup lang="ts">
useLegacyPage({
  title: "Percetaan Grafika 1",
  styles: ["/css/style.css"],
  scripts: [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/store.js",
    "/js/pages/store-events.js",
  ],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-store">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <PagesStoreHeader />
            <div class="text-standard my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              voluptate soluta excepturi, aperiam velit laudantium hic fugit
              aliquid molestias sit a commodi consequatur natus repudiandae,
              blanditiis expedita iusto. Quaerat, inventore!
            </div>
            <PagesStoreServiceTabs />
            <div class="tab-content" id="myTabContent">
              <PagesStorePaperServicesPanel />

              <PagesStorePrintingServicesPanel />

              <PagesStoreLaminationServicesPanel />

              <PagesStoreDieCuttingServicesPanel />

              <PagesStoreFoilServicesPanel />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
