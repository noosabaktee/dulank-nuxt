<script setup lang="ts">
import type { QuotationItem } from "~/composables/useQuotations";

defineProps<{ items: QuotationItem[] }>();
const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
</script>

<template>
  <div class="table-responsive my-3 d-md-block d-none">
    <table class="table">
      <thead>
        <tr>
          <th class="text-start" id="inline-style-quotation-view-001">
            Product
          </th>
          <th id="inline-style-quotation-view-002">Harga</th>
          <th id="inline-style-quotation-view-003">Qty</th>
          <th id="inline-style-quotation-view-004">Jumlah Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="`${item.productId}-${item.name}`">
          <td>
            <span class="fw-semibold text-standard">{{ item.name }}</span
            ><br />
            <span v-if="item.category" class="text-standard">{{
              item.category
            }}</span
            ><br v-if="item.category" />
            <span class="text-standard">{{ item.spec }}</span
            ><br />
            <span v-if="item.artwork" class="text-standard"
              >Artwork : {{ item.artwork }}</span
            ><br v-if="item.artwork" />
            <span v-if="item.printResult" class="text-standard"
              >Hasil Cetak : {{ item.printResult }}</span
            ><br v-if="item.printResult" />
            <span v-if="item.note" class="text-standard fst-italic"
              >Note: {{ item.note }}</span
            >
          </td>
          <td class="text-center">{{ money(item.unitPrice) }}</td>
          <td class="text-center">{{ item.quantity }}</td>
          <td class="text-center">{{ money(item.total) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
