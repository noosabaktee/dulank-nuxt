<script setup lang="ts">
import type { BlogPost } from "#server/types/blog";

defineProps<{ posts: BlogPost[] }>();
</script>

<template>
  <div class="row g-3 mb-4 related-article">
    <div v-for="post in posts" :key="post.id" class="col-4">
      <a class="text-decoration-none" :href="`/post?slug=${post.slug}`">
        <div class="border-0 h-100">
          <img
            :alt="post.title"
            class="card-img-top rounded object-fit-cover"
            :src="post.image"
          />
          <div class="p-2">
            <div class="fw-semibold small mb-1">{{ post.title }}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
