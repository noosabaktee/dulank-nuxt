<script setup lang="ts">
import type { Product } from "#server/types/product";

defineProps<{ products: Product[] }>();
</script>

<template>
  <div class="slider mt-5 mb-5">
    <div class="container">
      <div class="carousel-wrapper">
        <button class="nav-button" id="prev" type="button">&#10094;</button>
        <div class="carousel-container">
          <div class="carousel" id="carousel">
            <div v-for="product in products" :key="product.id" class="itemz">
              <img :alt="product.name" :src="product.image" />
            </div>
          </div>
        </div>
        <button class="nav-button" id="next" type="button">&#10095;</button>
      </div>
    </div>
  </div>
</template>
