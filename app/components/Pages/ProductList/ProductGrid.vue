<script setup lang="ts">
import type { Product } from "#server/types/product";

defineProps<{ products: Product[] }>();
</script>

<template>
  <div class="container my-5" v-if="products.length">
    <div class="row g-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-md-4 col-lg-3"
      >
        <div class="card product-card h-100">
          <img
            :alt="product.name"
            class="card-img-top object-fit-cover"
            :src="product.image"
            style="height: 200px"
          />
          <div class="card-body">
            <h6 class="card-title fw-semibold">{{ product.name }}</h6>
            <div class="text-primary fw-bold">
              Rp{{ formatRupiah(product.priceFrom) }} - Rp{{
                formatRupiah(product.priceTo)
              }}
            </div>
            <a
              class="btn btn-sm btn-outline-primary mt-2 w-100"
              :href="`/product-list?slug=${product.slug}`"
              >Lihat Detail</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
