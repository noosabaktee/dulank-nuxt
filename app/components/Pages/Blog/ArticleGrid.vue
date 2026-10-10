<script setup lang="ts">
import type { BlogPost } from "#server/types/blog";

defineProps<{ posts: BlogPost[] }>();
</script>

<template>
  <div class="row g-4 mb-4">
    <a
      v-for="post in posts"
      :key="post.id"
      class="col-md-6 blog-card"
      :href="`/post?slug=${post.slug}`"
    >
      <div class="border-0">
        <img class="blog-img object-fit-cover w-100" :src="post.image" />
        <div class="pb-2">
          <span
            class="my-3 d-inline-block border blog-badge rounded-pill py-1 px-2"
            >{{ post.tags[0]?.toUpperCase() || "UMUM" }}</span
          >
          <h6 class="fw-semibold mb-2">{{ post.title }}</h6>
          <div class="d-flex align-items-center text-muted">
            <span class="fw-semibold text-standard">{{ post.author }}</span>
            <span class="mx-1">-</span>
            <span class="text-standard">{{
              new Date(post.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
