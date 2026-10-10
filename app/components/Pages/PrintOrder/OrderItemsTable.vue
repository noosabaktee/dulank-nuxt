<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

interface Billing {
  total: number;
}

const props = defineProps<{ bill: Billing; order: Order }>();
const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
const subtotal = computed(() =>
  props.order.items.reduce((sum, item) => sum + item.total, 0),
);
const shippingCost = computed(() => Math.max(props.order.total - subtotal.value, 0));
const tax = computed(() => Math.round(subtotal.value * 0.11));
const itemAmount = (value: number) => money(value || props.bill.total || props.order.total);
</script>

<template>
  <div class="mb-3">
    <div class="fw-semibold text-standard mb-2">Invoice Items</div>
    <div class="table-responsive">
      <table class="table table-bordered align-middle mb-0 print-order-items">
        <thead>
          <tr>
            <th class="text-standard text-center">Products</th>
            <th class="text-end text-standard">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order.items" :key="item.productId">
            <td class="text-standard">
              <span class="fw-semibold text-standard">{{ item.name }}</span
              ><br /><br />
              <span class="text-standard fst-italic">Description:</span><br />
              <span class="text-standard">{{ item.spec || "-" }}</span
              ><br />
              <span class="text-standard">Artwork : {{ item.artwork || "-" }}</span
              ><br />
              <span class="text-standard">
                Hasil Cetak : {{ item.printResult || "-" }}
              </span>
              <br />
              <span class="text-standard fst-italic">
                Note: {{ item.note || "-" }}
              </span>
              <br />
              <span class="text-standard">
                {{ money(item.price) }} × {{ item.quantity }} Pcs
              </span>
            </td>
            <td class="text-end text-standard">{{ itemAmount(item.total) }}</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              Total Harga
            </td>
            <td class="text-end text-standard">{{ money(subtotal) }}</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              Voucher (DUL4NK12)
            </td>
            <td class="text-end text-standard">Rp0</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              Biaya Pengiriman
            </td>
            <td class="text-end text-standard">{{ money(shippingCost) }}</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              Sub total sebelum PPN
            </td>
            <td class="text-end text-standard">{{ money(subtotal) }}</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              PPN (11%)
            </td>
            <td class="text-end text-standard">{{ money(tax) }}</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              Grand Total
            </td>
            <td class="text-end text-standard fw-semibold">
              {{ money(bill.total || order.total) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-standard mt-1">* Indicates a taxed item.</div>
    </div>
  </div>
</template>

<style scoped>
.print-order-items th:first-child,
.print-order-items td:first-child {
  width: 86%;
}

.print-order-items th:last-child,
.print-order-items td:last-child {
  width: 14%;
  vertical-align: middle;
}

.print-order-items th,
.print-order-items td {
  border-color: #444;
}
</style>
