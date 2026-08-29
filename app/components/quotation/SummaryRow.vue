<script setup lang="ts">
defineProps<{ label: string; value: string }>()
</script>

<template>
  <div class="d-flex flex">
    <p class="text-standard w-50">{{ label }}</p>
    <p class="text-standard text-end w-50 text-right">{{ value }}</p>
  </div>
</template>
