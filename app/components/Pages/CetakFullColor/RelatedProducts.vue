<script setup lang="ts">
import type { Product } from "#server/types/product";

const props = defineProps<{ products: Product[] }>();

const related = computed(() => props.products.slice(0, 4));

function badgeFor(index: number) {
  if (index === 1) return { class: "badge badge-sale", label: "Sale" };
  if (index === 3) return { class: "badge badge-discount", label: "Promo" };
  return { class: "badge badge-new", label: "New" };
}
</script>

<template>
  <div class="row mb-5 g-3">
    <div v-for="(product, index) in related" :key="product.id" class="col-md-3 col-6">
      <div class="card card-product h-100">
        <span
          class="badge position-absolute m-2"
          :class="badgeFor(index).class"
          >{{ badgeFor(index).label }}</span
        >
        <img
          class="card-img-top p-3 object-fit-contain"
          :src="product.image"
        />
        <div class="card-body">
          <div class="card-product-title text-standard">
            {{ product.name }}
          </div>
          <div class="product-price text-standard fs-6">
            Rp{{ product.priceFrom?.toLocaleString("id-ID") }}
          </div>
          <button
            class="btn my-btn-outline-primary w-100 btn-sm text-standard mt-2"
            type="button"
          >
            Buy now at Rp{{ product.priceFrom?.toLocaleString("id-ID") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
