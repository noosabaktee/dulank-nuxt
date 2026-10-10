<script setup lang="ts">
import type { SaleBanner } from "#server/types/sale-banner";

defineProps<{ saleBanners: SaleBanner[] }>();
</script>

<template>
  <div class="row mb-4">
    <div v-for="item in saleBanners" :key="item.id" class="col-md-6 p-2">
      <div class="bg-light rounded-1 h-100 category-sale" role="button">
        <div class="row">
          <div class="col-md-7 my-md-auto my-4 text-md-start text-center">
            <div class="ms-md-4 py-2">
              <p class="fs-6">{{ item.discount }}</p>
              <h4>{{ item.title }}</h4>
              <button class="btn my-btn-primary mt-2" type="button">
                Shop Now
              </button>
            </div>
          </div>
          <div class="col-md-5 overflow-hidden">
            <img
              alt=""
              class="category-sale-image w-100 object-fit-cover"
              height="200"
              :src="item.image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
