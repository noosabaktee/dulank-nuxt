<script setup lang="ts">
defineProps<{
  product: any
}>()
</script>

<template>
  <div class="card product-card h-100">
    <img :alt="product.name" class="card-img-top object-fit-cover" :src="product.image" style="height: 200px" />
    <div class="card-body">
      <h6 class="card-title fw-semibold">{{ product.name }}</h6>
      <div class="text-primary fw-bold">
        Rp{{ formatRupiah(product.priceFrom) }} - Rp{{ formatRupiah(product.priceTo) }}
      </div>
      <a class="btn btn-sm btn-outline-primary mt-2 w-100" :href="`/product-list?slug=${product.slug}`">Lihat Detail</a>
    </div>
  </div>
</template>
