<script setup lang="ts">
import type { BlogPost } from "#server/types/blog";

const props = defineProps<{ articles: BlogPost[] }>();

const latestArticles = computed(() => props.articles.slice(0, 2));
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-4">
      <h5 class="text-center">Contact Us</h5>
      <p class="text-standard" id="inline-style-index-005">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsa
        totam esse neque, asperiores aspernatur animi sed enim.
      </p>
    </div>

    <div class="col-md-4">
      <h5 class="text-center">Article</h5>
      <div>
        <div
          v-for="(article, index) in latestArticles"
          :key="article.id"
          class="d-flex align-items-center my-3"
        >
          <img
            alt="thumb"
            class="me-3 object-fit-cover"
            :id="`inline-style-index-${index + 6}`"
            :src="article.image"
          />
          <div>
            <div class="text-muted text-standard">{{ article.date }}</div>
            <NuxtLink class="fw-semibold text-standard" to="/post">
              {{ article.title }}
            </NuxtLink>
            <p class="text-standard">{{ article.excerpt }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <h5 class="text-center">Download File</h5>
      <div>
        <a class="text-standard" href="/contact">
          <i class="fa-solid fa-file-pdf download-icon"></i>Hubungi kami untuk
          file download<br />
        </a>
      </div>
    </div>
  </div>
</template>
