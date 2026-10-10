<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

const props = defineProps<{ order: Order }>();
const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
const subtotal = computed(() =>
  props.order.items.reduce((sum, item) => sum + item.total, 0),
);
const shippingCost = computed(() => Math.max(props.order.total - subtotal.value, 0));
const tax = computed(() => Math.round(subtotal.value * 0.11));
</script>

<template>
  <div class="tab-form" id="orderForm">
    <div class="row align-items-center py-2 d-none d-md-flex fw-bold">
      <div class="col-md-8 small text-center">Product</div>
      <div class="col-md-1 small">Price</div>
      <div class="col-md-1 small">Qty</div>
      <div class="col-md-2 small text-end">Total Price</div>
    </div>

    <div
      v-for="item in order.items"
      :key="item.productId"
      class="row table-product align-items-md-center py-3 border-bottom-md-0"
    >
      <div class="col-12 col-md-8" data-label="Product">
        <div class="d-flex">
          <img
            alt=""
            class="object-fit-cover"
            height="50"
            src="/images/brosur.jpg"
            width="50"
          />
          <div class="ms-4">
            <span class="fw-semibold text-standard">{{ item.name }}</span
            ><br />
            <span class="text-standard">{{ item.category || item.name }}</span
            ><br />
            <span class="text-standard">{{ item.spec || "-" }}</span
            ><br />
            <span class="text-standard"
              >Artwork : {{ item.artwork || "-" }}</span
            ><br />
            <span class="text-standard"
              >Hasil Cetak : {{ item.printResult || "-" }}</span
            ><br />
            <span class="text-standard fst-italic"
              >Note: {{ item.note || "-" }}</span
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-md-1" data-label="Pirce">{{ money(item.price) }}</div>
      <div class="col-12 col-md-1" data-label="Qty">{{ item.quantity }}</div>
      <div class="col-12 col-md-2 text-end" data-label="Total Price">
        {{ money(item.total) }}
      </div>
    </div>
    <div>
      <div class="fw-bold d-flex justify-content-between my-1">
        <span class="text-standard">Total Harga</span><br />
        <span
          class="text-standard text-end fw-normal"
          id="inline-style-order-view-003"
          >{{ money(subtotal) }}</span
        >
      </div>
      <div class="fw-bold d-flex justify-content-between my-1">
        <span class="text-standard">Voucher (DUL4NK12)</span><br />
        <span
          class="text-standard text-end fw-normal"
          id="inline-style-order-view-004"
          >Rp0</span
        >
      </div>
      <div class="fw-bold d-flex justify-content-between my-1">
        <span class="text-standard">Biaya Pengiriman</span><br />
        <span
          class="text-standard text-end fw-normal"
          id="inline-style-order-view-005"
          >{{ money(shippingCost) }}</span
        >
      </div>
      <div class="fw-bold d-flex justify-content-between my-1">
        <span class="text-standard">Subtotal Sebelum PPN</span><br />
        <span
          class="text-standard text-end fw-normal"
          id="inline-style-order-view-006"
          >{{ money(subtotal) }}</span
        >
      </div>
      <div class="fw-bold d-flex justify-content-between my-1">
        <span class="text-standard">PPN (11%)</span><br />
        <span
          class="text-standard text-end fw-normal"
          id="inline-style-order-view-007"
          >{{ money(tax) }}</span
        >
      </div>
      <div class="fw-bold d-flex justify-content-between my-1">
        <span class="text-standard">Grand Total</span><br />
        <span
          class="text-standard text-end fw-normal"
          id="inline-style-order-view-008"
          >{{ money(order.total) }}</span
        >
      </div>
    </div>
  </div>
</template>
