<script setup lang="ts">
import type { FAQ } from "#server/types/faq";

defineProps<{ faqs: FAQ[] }>();
</script>

<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="(faq, index) in faqs" :key="faq.id">
      <h2 class="accordion-header">
        <button
          :aria-controls="`collapse-${index}`"
          :aria-expanded="index === 0"
          class="accordion-button text-standard"
          :class="{ collapsed: index !== 0 }"
          :data-bs-target="`#collapse-${index}`"
          data-bs-toggle="collapse"
          type="button"
        >
          {{ faq.question }}
        </button>
      </h2>
      <div
        class="accordion-collapse collapse"
        :class="{ show: index === 0 }"
        data-bs-parent="#accordionExample"
        :id="`collapse-${index}`"
      >
        <div class="accordion-body text-standard">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>
