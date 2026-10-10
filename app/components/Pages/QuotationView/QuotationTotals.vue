<script setup lang="ts">
defineProps<{
  subtotal: number;
  tax: number;
  shippingCost: number;
  total: number;
}>();

const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
</script>

<template>
  <div>
    <div
      class="fw-normal d-flex justify-content-md-end justify-content-between my-1"
    >
      <span class="text-standard">SUBTOTAL</span><br />
      <span class="text-standard text-end" id="inline-style-quotation-view-005"
        >{{ money(subtotal) }}</span
      >
    </div>
    <div
      class="fw-normal d-flex justify-content-md-end justify-content-between my-1"
    >
      <span class="text-standard">PPN (11%)</span><br />
      <span class="text-standard text-end" id="inline-style-quotation-view-006"
        >{{ money(tax) }}</span
      >
    </div>
    <div
      v-if="shippingCost"
      class="fw-normal d-flex justify-content-md-end justify-content-between my-1"
    >
      <span class="text-standard">BIAYA PENGIRIMAN</span><br />
      <span class="text-standard text-end" id="inline-style-quotation-view-006"
        >{{ money(shippingCost) }}</span
      >
    </div>
    <div
      class="fw-bold d-flex justify-content-md-end justify-content-between my-1"
    >
      <span class="text-standard">TOTAL</span><br />
      <span class="text-standard text-end" id="inline-style-quotation-view-007"
        >{{ money(total) }}</span
      >
    </div>
  </div>
</template>
