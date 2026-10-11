<script setup lang="ts">
interface HeroSlide {
  badge: string;
  title: string;
  description: string;
  image: string;
  imageId: string;
}

const props = defineProps<{ banners: Array<{ id: number; title: string; discount: string; image: string }> }>();

const slides = computed<HeroSlide[]>(() =>
  props.banners.map((banner, index) => ({
    badge: "Best Sale 2025",
    title: banner.title,
    description: banner.discount,
    image: banner.image,
    imageId: `inline-style-index-${String(index + 1).padStart(3, "0")}`,
  })),
);
</script>

<template>
  <div class="carousel slide bg-light" id="myCarousel">
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="`indicator-${slide.imageId}`"
        :aria-label="`Slide ${index + 1}`"
        :class="{ active: index === 0 }"
        :data-bs-slide-to="index"
        data-bs-target="#myCarousel"
        type="button"
      ></button>
    </div>

    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="slide.image"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <div class="row">
          <div class="col-md-6 align-items-center d-flex">
            <div
              class="text-center text-md-start w-100 mb-3 mb-md-0 ms-md-5 mt-md-0 mt-3"
            >
              <h4>{{ slide.badge }}</h4>
              <h1>{{ slide.title }}</h1>
              <p>{{ slide.description }}</p>
              <button class="btn my-btn-outline-primary" type="button">
                Shop Collection
              </button>
            </div>
          </div>
          <div class="col-md-6 text-end">
            <img
              alt=""
              class="object-fit-cover w-100"
              :id="slide.imageId"
              :src="slide.image"
            />
          </div>
        </div>
      </div>
    </div>

    <button
      class="carousel-control-prev"
      data-bs-slide="prev"
      data-bs-target="#myCarousel"
      type="button"
    >
      <span aria-hidden="true" class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      data-bs-slide="next"
      data-bs-target="#myCarousel"
      type="button"
    >
      <span aria-hidden="true" class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
