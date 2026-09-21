<script setup lang="ts">
useLegacyPage({
  title: "Produk",
  styles: [
    "/css/style-product-list.css"
  ],
  scripts: [
    "/js/pages/product-list-01.js",
    "/js/component.js",
    "/js/profile.js"
  ],
  sweetAlert: false
})

const route = useRoute()
const { data: products } = await useFetch<any[]>(`/api/products?page=1&limit=20${route.query.category ? `&category=${route.query.category}` : ''}`, {
  key: 'product-list'
})
</script>

<template>
  <div class="dulank-page dulank-page-product-list">
    <div class="category-navbar-pl py-3 bg-light" id="navigasi">
      <div class="container mt-5">
        <h1>Products</h1>
        <p>Home > Products</p>
      </div>
    </div>
    <main>
      <PagesProductListHeroSlider :products="products || []" />
      <PagesProductListProductGrid :products="products || []" />
    </main>
    <footer>
      <div><LayoutAppFooter /></div>
    </footer>
  </div>
</template>
