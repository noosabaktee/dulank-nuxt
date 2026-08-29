<script setup lang="ts">
const props = defineProps<{ modelValue?: string; options: Array<{ label: string; value: string }> }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <button v-for="option in options" :key="option.value" type="button" class="rounded-md border px-3 py-2 text-sm" :class="props.modelValue === option.value ? 'border-[#912748] text-[#912748]' : 'border-gray-300'" @click="emit('update:modelValue', option.value)">{{ option.label }}</button>
  </div>
</template>
