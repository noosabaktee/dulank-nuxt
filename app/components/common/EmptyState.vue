<script setup lang="ts">
withDefaults(defineProps<{
  iconClass: string
  title: string
  description: string
  actionText?: string
  actionHref?: string
}>(), {
  actionText: 'Continue Shopping',
  actionHref: '#'
})
</script>

<template>
  <div class="empty-save-container d-none text-center py-5 hidden py-12">
    <i :class="[iconClass, 'empty-save-icon fa-4x text-muted mb-4 text-gray-500 mb-6']"></i>
    <h4>{{ title }}</h4>
    <p class="text-muted mb-4 text-gray-500 mb-6">{{ description }}</p>
    <a class="btn btn-danger my-bg-primary px-4 py-2 rounded-0 px-6 inline-flex items-center justify-center rounded-md px-3 text-sm font-medium transition-colors cursor-pointer bg-red-600 text-white hover:opacity-90" :href="actionHref">{{ actionText }}</a>
  </div>
</template>
