<script setup lang="ts">
import type { BlogPost } from "#server/types/blog";

defineProps<{ post: BlogPost }>();
</script>

<template>
  <header>
    <h3 id="inline-style-post-001" class="fw-bold mb-2">{{ post.title }}</h3>
    <span class="mb-3 d-inline-block border blog-badge rounded-pill py-1 px-2">
      {{ post.tags[0]?.toUpperCase() || "GENERAL" }}
    </span>
    <div class="d-flex align-items-center mb-3 text-muted">
      <span class="fw-semibold text-standard">{{ post.author }}</span>
      <span class="mx-1">-</span>
      <span class="text-standard">{{ post.date }}</span>
    </div>
  </header>
</template>
