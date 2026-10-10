<script setup lang="ts">
const props = withDefaults(defineProps<{
  mode?: 'text' | 'number'
  value?: string | number
  inputClass?: string
  includeHiddenResult?: boolean
}>(), {
  mode: 'number',
  value: 1,
  inputClass: 'w-50',
  includeHiddenResult: false
})
</script>

<template>
  <button class="quantity-btn quantity-minus" type="button">−</button>
  <input
    v-if="props.mode === 'text'"
    :class="['quantity-input', props.inputClass]"
    inputmode="numeric"
    pattern="[0-9]*"
    type="text"
    :value="props.value"
  />
  <input
    v-else
    :class="['quantity-input', props.inputClass]"
    min="1"
    type="number"
    :value="props.value"
  />
  <input v-if="props.includeHiddenResult" class="quantity result-input" type="hidden" :value="props.value" />
  <button class="quantity-btn quantity-plus" type="button">+</button>
</template>
