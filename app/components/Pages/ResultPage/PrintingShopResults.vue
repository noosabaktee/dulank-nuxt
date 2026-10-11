<script setup lang="ts">
import type { BlogPost } from "#server/types/blog";

defineProps<{ posts: BlogPost[] }>();
</script>

<template>
  <div class="row">
    <div v-for="post in posts" :key="post.id" class="col-12">
      <div class="mb-5 shadow row g-0 d-flex align-items-stretch">
        <div class="col-md-5 p-0">
          <a href="/post">
            <img
              :alt="post.title"
              class="img-fluid rounded-start object-fit-cover w-100 h-100"
              id="inline-style-result-page-001"
              :src="post.image"
            />
          </a>
        </div>

        <div
          class="col-md-7 p-md-5 p-3 d-flex flex-column justify-content-between"
        >
          <div>
            <div class="mb-2">
              <span class="badge bg-light text-dark">Blog</span>
              <span class="text-muted text-standard ms-2"
                ><i class="bi bi-calendar"></i> {{ post.date }}</span
              >
            </div>
            <h5 class="card-title mb-2">
              <a class="text-decoration-none" href="/post">{{ post.title }}</a>
            </h5>
            <p class="card-text text-standard mb-3">
              {{ post.excerpt }}
            </p>
          </div>
          <a class="btn my-btn-outline-primary btn-sm mt-auto" href="/post"
            >Baca Selengkapnya</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
