<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

defineProps<{ orders: Order[] }>();
</script>

<template>
  <div class="tab-form" id="shippedForm">
    <PagesOrdersOrderRows :orders="orders" />
  </div>
</template>
