<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

defineProps<{ order: Order }>();
</script>

<template>
  <div class="mt-2 mb-4 mt-md-0 d-flex justify-content-between">
    <h5 class="section-title mb-0">Pesan # {{ order.id }}</h5>
    <div class="d-flex">
      <a class="btn my-btn-primary me-2" href="/cart">Pesan Lagi</a>
      <NuxtLink
        class="btn btn-warning text-white"
        :to="`/print-order?orderId=${order.id}`"
        >Print Order</NuxtLink
      >
    </div>
  </div>
</template>
