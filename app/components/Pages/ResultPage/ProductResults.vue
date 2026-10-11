<script setup lang="ts">
import type { Product } from "#server/types/product";

defineProps<{ products: Product[] }>();
</script>

<template>
  <div class="row">
    <a
      v-for="product in products"
      :key="product.id"
      class="col-md-2 me-3"
      href=""
      role="button"
    >
      <div>
        <img
          :alt="product.name"
          class="w-100 object-fit-cover"
          :src="product.image"
        />
      </div>
      <div>
        <span class="small fw-bold d-block mt-1">{{ product.name }}</span>
        <span class="text-standard">Rp{{ product.priceFrom?.toLocaleString("id-ID") }}</span>
      </div>
    </a>
  </div>
</template>
