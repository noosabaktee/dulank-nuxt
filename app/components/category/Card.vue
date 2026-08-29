<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  count: string
  image: string
  alt?: string
  href?: string
}>(), {
  alt: '',
  href: '#'
})
</script>

<template>
  <a class="category-card col-md-4 mb-1 w-full px-3 md:w-4/12" :href="href">
    <div class="px-2 py-5 bg-light py-12 bg-gray-100">
      <div class="category-image">
        <img :alt="alt || name" class="object-fit-cover object-cover" height="300" loading="lazy" :src="image" />
      </div>
      <div class="category-name">{{ name }}</div>
      <div class="category-count">{{ count }}</div>
    </div>
  </a>
</template>
