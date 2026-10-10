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
          v-for="article in articles"
          :key="article.title"
          class="d-flex align-items-center my-3"
        >
          <img
            alt="thumb"
            class="me-3 object-fit-cover"
            :id="article.imageId"
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
        <a
          v-for="file in files"
          :key="file"
          class="text-standard"
          href=""
        >
          <i class="fa-solid fa-file-pdf download-icon"></i>{{ file }}<br />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const articles = [
  {
    title: "Brosur Full Color",
    date: "Mei 9, 2025",
    excerpt: "Lorem ipsum dolor sit amet",
    image: "/images/brosur.jpg",
    imageId: "inline-style-index-006",
  },
  {
    title: "Stiker",
    date: "Mei 8, 2025",
    excerpt: "Lorem ipsum dolor sit amet",
    image: "/images/sticker.jpg",
    imageId: "inline-style-index-007",
  },
];

const files = [
  "Brosur Ukuran A4 (210x297mm)",
  "Brosur Ukuran A4 (210x297mm)",
  "Brosur Ukuran A4 (210x297mm)",
  "Brosur Ukuran A4 (210x297mm)",
];
</script>
