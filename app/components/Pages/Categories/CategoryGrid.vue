<script setup lang="ts">
import type { Category } from "#server/types/category";

defineProps<{ categories: Category[] }>();
</script>

<template>
  <div class="row" id="categories-grid">
    <CategoryCard
      v-for="category in categories"
      :key="category.id"
      :name="category.name"
      :count="`${category.productCount} products`"
      :image="category.image"
      :alt="category.name"
      :href="`/product-list?category=${category.slug}`"
    />
  </div>
</template>
