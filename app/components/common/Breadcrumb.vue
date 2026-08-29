<script setup lang="ts">
const props = withDefaults(defineProps<{
  current: string
  homeLabel?: string
}>(), {
  homeLabel: 'Home'
})
</script>

<template>
  <div class="container mt-3 mx-auto w-full px-3 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mt-4">
    <p class="text-standard"><NuxtLink to="/">{{ props.homeLabel }}</NuxtLink> &gt; {{ current }}</p>
  </div>
</template>
