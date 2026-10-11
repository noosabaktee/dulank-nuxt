<script setup lang="ts">
import type { Product } from "#server/types/product";
import type { ProductPage } from "#server/types/product-page";

useLegacyPage({
  title: "Cetak Brosur Full Color | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/cetak-full-color.css",
    "/css/pages/cetak-full-color-inline.css",
  ],
  scripts: [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/pages/cetak-full-color-01.js",
    "/js/product.js",
    "/js/pages/cetak-full-color-02.js",
    "/js/pages/cetak-full-color-events.js",
  ],
  sweetAlert: false,
});

const { data: page } = useApi<ProductPage>("/product-pages/cetak-full-color");
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
  <div class="dulank-page dulank-page-cetak-full-color">
    <div class="container mt-3">
      <p class="text-standard">Home > Products > Brosur</p>
    </div>
    <main>
      <div class="container mt-3">
        <div class="section-card">
          <div class="row flex-lg-row">
            <PagesCetakFullColorProductOverview />

            <PagesCetakFullColorSpecificationForm :specs="specs" />
          </div>

          <PagesCetakFullColorPriceList :price-list="priceList" />
        </div>

        <p class="fs-5 mb-4">Design Brosur Full Color</p>
        <PagesCetakFullColorDesignGallery :gallery="gallery" />

        <PagesCetakFullColorPrintingGuide :guide="guide" />

        <p class="text-center my-3 fs-5">Buy Together</p>
        <PagesCetakFullColorRelatedProducts :products="relatedProducts" />
      </div>
    </main>

    <PagesCetakFullColorQuantityModal />
  </div>
</template>