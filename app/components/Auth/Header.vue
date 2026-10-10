<script setup lang="ts">
defineProps<{
  title: string
  actionText: string
  actionHref: string
}>()
</script>

<template>
  <header>
    <nav class="navbar relative flex flex-wrap items-center justify-between">
      <div class="container d-flex justify-content-between mx-auto w-full px-3 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] flex justify-between">
        <NuxtLink class="navbar-brand fw-bold font-bold" to="/">Dulank.</NuxtLink>
        <span class="navbar-brand fw-light font-light">{{ title }}</span>
        <NuxtLink class="navbar-brand text-standard" :to="actionHref">{{ actionText }}</NuxtLink>
      </div>
    </nav>
  </header>
</template>
