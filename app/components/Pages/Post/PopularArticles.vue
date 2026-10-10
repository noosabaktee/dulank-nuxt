<script setup lang="ts">
import type { BlogPost } from "#server/types/blog";

defineProps<{ posts: BlogPost[] }>();
</script>

<template>
  <div class="mb-4">
    <h6 class="fw-bold mb-3">Artikel Populer</h6>
    <ul class="list-unstyled sidebar-list">
      <li v-for="post in posts" :key="post.id" class="mb-4">
        <a class="d-flex align-items-center" :href="`/post?slug=${post.slug}`">
          <img
            :alt="post.title"
            class="me-3 object-fit-cover"
            height="64"
            :src="post.image"
            width="64"
          />
          <div>
            <span class="fw-semibold small mb-1 text-decoration-none d-block">{{
              post.title
            }}</span>
            <div class="text-muted text-standard">{{ post.date }}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
