<script setup lang="ts">
import type { Product } from "#server/types/product";
import type { BlogPost } from "#server/types/blog";
import type { SaleBanner } from "#server/types/sale-banner";

useLegacyPage({
  title: "Percetakan Dulank - Online Printing Shop",
  styles: ["/css/style.css", "/css/pages/index-inline.css"],
  scripts: ["/js/component.js", "/js/pages/index.js"],
  sweetAlert: false,
});

const { data: banners } = useApi<SaleBanner[]>("/sale-banners");
const { data: products } = useApi<Product[]>("/products?page=1&limit=6");
const { data: posts } = useApi<BlogPost[]>("/blog?page=1&limit=2");

const heroBanners = computed(() => banners.value ?? []);
const highlightProducts = computed(() => products.value ?? []);
const latestPosts = computed(() => posts.value ?? []);
const offerBanner = computed(() => banners.value?.[0] ?? null);
</script>

<template>
  <div class="dulank-page dulank-page-index">
    <main>
      <div class="mb-5">
        <PagesIndexHeroCarousel :banners="heroBanners" />
        <section class="container my-5">
          <div class="row">
            <PagesIndexProductHighlights :products="highlightProducts" />
            <PagesIndexAboutSection />
          </div>
          <PagesIndexFeaturedServices />
          <PagesIndexInformationColumns :articles="latestPosts" />
        </section>
      </div>
    </main>

    <PagesIndexOfferModal :banner="offerBanner" />
    <PagesIndexProductToast />
  </div>
</template>
