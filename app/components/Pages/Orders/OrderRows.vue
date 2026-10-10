<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

defineProps<{ orders: Order[] }>();

const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
const date = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("id-ID");
const statusLabel = (status: string) =>
  status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
</script>

<template>
  <div>
    <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
      <div class="col-md-2 small">Orders #</div>
      <div class="col-md-1 small">Date</div>
      <div class="col-md-2 small">Shipping To</div>
      <div class="col-md-2 small text-end">Total Price</div>
      <div class="col-md-1 small text-end">Status</div>
      <div class="col-md-4 small text-end"></div>
    </div>

    <div
      v-for="order in orders"
      :key="order.id"
      class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0"
    >
      <div class="col-12 col-md-2" data-label="Orders #">{{ order.id }}</div>
      <div class="col-12 col-md-1" data-label="Date">
        {{ date(order.date) }}
      </div>
      <div class="col-12 col-md-2" data-label="Shipping To">
        {{ order.shippingAddress.name }}
      </div>
      <div
        class="col-12 col-md-2 text-start text-md-end"
        data-label="Total Price"
      >
        {{ money(order.total) }}
      </div>
      <div class="col-12 col-md-1 text-start text-md-end" data-label="Status">
        {{ statusLabel(order.status) }}
      </div>
      <div
        class="col-12 col-md-4 text-start text-md-end actions-mobile-separator"
      >
        <NuxtLink class="btn btn-warning text-white" :to="`/order-view?id=${order.id}`">
          Lihat Pesanan
        </NuxtLink>
        <NuxtLink class="btn my-btn-primary" to="/cart">Pesan Lagi</NuxtLink>
      </div>
    </div>

    <p v-if="!orders.length" class="text-center py-3">
      <i class="bi bi-exclamation-triangle-fill me-2 text-warning"></i>Anda
      belum mempunyai pesanan.
    </p>
  </div>
</template>
