<script setup lang="ts">
import type { Product } from "#server/types/product";
import type { ProductPage } from "#server/types/product-page";

useLegacyPage({
  title: "Cetak Kalender 2027 | Dulank",
  styles: ["/css/style.css", "/css/pages/kalender.css"],
  scripts: [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/pages/kalender-01.js",
    "/js/product.js",
    "/js/pages/kalender-02.js",
    "/js/pages/kalender-events.js",
  ],
  sweetAlert: false,
});

const { data: page } = useApi<ProductPage>("/product-pages/kalender");
const { data: products } = useApi<Product[]>("/products?page=1&limit=20");

const specs = computed(() => page.value?.specs ?? []);
const priceList = computed(
  () =>
    page.value?.priceList ?? { title: null, rows: [] },
);
const gallery = computed(
  () =>
    page.value?.gallery ?? { categories: [], items: [] },
);
const guide = computed(() => page.value?.guide ?? { files: [], faqs: [] });
const relatedProducts = computed(() => products.value?.slice(0, 4) ?? []);
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
            <PagesKalenderProductOverview />

            <PagesKalenderSpecificationForm :specs="specs" />
          </div>

          <PagesKalenderPriceList :price-list="priceList" />
        </div>

        <p class="fs-5 mb-4">Design Kalender 2027</p>
        <PagesKalenderDesignGallery :gallery="gallery" />

        <PagesKalenderPrintingGuide :guide="guide" />

        <p class="text-center my-3 fs-5">Buy Together</p>
        <PagesKalenderRelatedProducts :products="relatedProducts" />
      </div>
    </main>

    <PagesKalenderQuantityModal />
  </div>
</template>