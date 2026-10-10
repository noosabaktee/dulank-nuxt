<script setup lang="ts">
import type { QuotationItem } from "~/composables/useQuotations";

defineProps<{ items: QuotationItem[] }>();
const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
</script>

<template>
  <div class="my-2 d-block d-md-none">
    <div
      v-for="item in items"
      :key="`${item.productId}-${item.name}`"
      class="row my-2 border-bottom pb-3"
    >
      <div class="mt-2 col-12">
        <span class="d-block fw-bold small">Product</span>
        <span class="fw-semibold text-standard d-block">{{ item.name }}</span>
        <span v-if="item.category" class="text-standard d-block">{{
          item.category
        }}</span>
        <span class="text-standard d-block">{{ item.spec }}</span>
      </div>
      <div class="mt-2 col-12">
        <span class="d-block fw-bold small">Note</span>
        <span class="text-standard d-block">{{ item.note || "-" }}</span>
      </div>
      <div class="mt-2 col-6">
        <span class="d-block fw-bold small">Artwork</span>
        <span class="text-standard d-block">{{ item.artwork || "-" }}</span>
      </div>
      <div class="mt-2 col-6">
        <span class="d-block fw-bold small">Hasil Cetak</span>
        <span class="text-standard d-block">{{ item.printResult || "-" }}</span>
      </div>
      <div class="mt-2 col-6">
        <span class="d-block fw-bold small">Qty</span>
        <span class="text-standard d-block">{{ item.quantity }}</span>
      </div>
      <div class="mt-2 col-6">
        <span class="d-block fw-bold small">Harga</span>
        <span class="text-standard d-block">{{ money(item.unitPrice) }}</span>
      </div>
      <div class="mt-2 col-6">
        <span class="d-block fw-bold small">Jumlah Harga</span>
        <span class="text-standard d-block">{{ money(item.total) }}</span>
      </div>
    </div>
  </div>
</template>
