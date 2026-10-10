<script setup lang="ts">
defineProps<{ title: string; image?: string; price?: string; href?: string }>()
</script>
<template>
  <a :href="href || '#'" class="block rounded-lg border border-gray-200 bg-white p-3 transition hover:shadow-sm">
    <img v-if="image" :src="image" :alt="title" class="aspect-square w-full rounded-md object-cover">
    <h3 class="mt-3 font-semibold text-gray-900">{{ title }}</h3>
    <p v-if="price" class="mt-1 text-sm text-[#912748]">{{ price }}</p>
  </a>
</template>
