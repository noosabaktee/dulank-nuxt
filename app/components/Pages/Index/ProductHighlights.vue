<script setup lang="ts">
import type { Product } from "#server/types/product";

const props = defineProps<{ products: Product[] }>();

const bestSellers = computed(() => props.products.slice(0, 3));
const packages = computed(() => props.products.slice(3, 6));
</script>

<template>
  <div class="col-md-6 order-md-2">
    <h5 class="mb-3">Produk Terlaris</h5>
    <div class="row mb-5">
      <div v-for="product in bestSellers" :key="product.id" class="col-4">
        <img
          alt=""
          class="object-fit-cover w-100"
          :src="product.image"
        />
      </div>
    </div>

    <h5 class="mb-3">Produk Paket</h5>
    <div class="row mb-5">
      <div v-for="product in packages" :key="product.id" class="col-4">
        <img
          alt=""
          class="object-fit-cover w-100"
          :src="product.image"
        />
      </div>
    </div>
  </div>
</template>
