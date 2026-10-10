<script setup lang="ts">
import type { BlogPost } from "#server/types/blog";

defineProps<{ post: BlogPost }>();
</script>

<template>
  <div>
    <img
      :alt="post.title"
      class="rounded mb-4 img-post mx-auto w-100 object-fit-cover"
      :src="post.image"
    />
    <div id="inline-style-post-006" class="blog-content">
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>
