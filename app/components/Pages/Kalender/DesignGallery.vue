<script setup lang="ts">
import type { ProductPageGallery } from "#server/types/product-page";

const props = defineProps<{ gallery: ProductPageGallery }>();

const categories = computed(() => props.gallery.categories ?? []);
const itemsFor = (categoryId: string) =>
  (props.gallery.items ?? []).filter(
    (item) => item.category === categoryId,
  );
</script>

<template>
  <div class="section-card">
    <ul class="nav nav-tabs category-tab mb-3" id="kategoriTab">
      <li
        v-for="(category, index) in categories"
        :key="category.id"
        class="nav-item"
      >
        <a
          class="nav-link fw-normal text-standard"
          :class="{ active: index === 0 }"
          data-bs-toggle="tab"
          :href="`#${category.id}`"
          >{{ category.label }}</a
        >
      </li>
    </ul>

    <div class="tab-content">
      <div
        v-for="(category, index) in categories"
        :key="category.id"
        class="tab-pane fade"
        :class="{ 'show active': index === 0 }"
        :id="category.id"
      >
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
          <div
            v-for="item in itemsFor(category.id)"
            :key="item.name"
            class="col"
          >
            <div class="design-card text-standard">
              <img class="design-img" :src="item.image" />
              <div>{{ item.name }}</div>
              <button
                class="btn my-btn-outline-primary my-2 rounded-0 text-standard"
                type="button"
              >
                Customize
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>