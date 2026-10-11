<script setup lang="ts">
import type { Product } from "#server/types/product";
import type { BlogPost } from "#server/types/blog";

useLegacyPage({
  title: "Result Page",
  styles: ["/css/style.css", "/css/pages/result-page-inline.css"],
  scripts: ["/js/component.js", "/js/profile.js"],
  sweetAlert: false,
});

const route = useRoute();
const search = computed(() => String(route.query.q || ""));

const { data: products } = useApi<Product[]>(
  `/products?search=${encodeURIComponent(search.value)}&limit=10`,
);
const { data: posts } = useApi<BlogPost[]>(
  `/blog?search=${encodeURIComponent(search.value)}&limit=10`,
);
</script>

<template>
  <div class="dulank-page dulank-page-result-page">
    <main>
      <div class="container my-5">
        <h5 class="fw-semibold mb-3">pencarian "{{ search }}" untuk product</h5>
        <PagesResultPageProductResults :products="products ?? []" />

        <h5 class="fw-semibold mt-5 mb-3">pencarian "{{ search }}" untuk blog</h5>
        <PagesResultPagePrintingShopResults :posts="posts ?? []" />
      </div>
    </main>
  </div>
</template>
