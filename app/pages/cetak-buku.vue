<script setup lang="ts">
import type { Product } from "#server/types/product";
import type { ProductPage } from "#server/types/product-page";

useLegacyPage({
  title: "Cetak Buku | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/cetak-buku.css",
    "/css/pages/cetak-buku-inline.css",
  ],
  scripts: [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/pages/cetak-buku-01.js",
    "/js/product.js",
    "/js/pages/cetak-buku-02.js",
    "/js/pages/cetak-buku-events.js",
  ],
  sweetAlert: false,
});

const { data: page } = useApi<ProductPage>("/product-pages/cetak-buku");
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
  <div class="dulank-page dulank-page-cetak-buku">
    <div class="container mt-3">
      <p class="text-standard">Home > Products > Cetak Buku</p>
    </div>
    <main>
      <div class="container mt-3">
        <div class="section-card">
          <div class="row flex-lg-row">
            <PagesCetakBukuProductOverview />

            <PagesCetakBukuSpecificationForm :specs="specs" />
          </div>

          <PagesCetakBukuPriceList :price-list="priceList" />
        </div>

        <p class="fs-5 mb-4">Design Cetak Buku</p>
        <PagesCetakBukuDesignGallery :gallery="gallery" />

        <PagesCetakBukuPrintingGuide :guide="guide" />

        <p class="text-center my-3 fs-5">Buy Together</p>
        <PagesCetakBukuRelatedProducts :products="relatedProducts" />
      </div>
    </main>

    <PagesCetakBukuQuantityModal />
  </div>
</template>