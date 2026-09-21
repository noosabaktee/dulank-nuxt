<script setup lang="ts">
defineProps<{
  products: any[]
}>()
</script>

<template>
  <div class="container my-5" v-if="products?.length">
    <div class="row g-4">
      <div v-for="product in products" :key="product.id" class="col-md-4 col-lg-3">
        <PagesProductListProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
