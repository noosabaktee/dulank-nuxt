<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

const props = defineProps<{ order: Order }>();

const date = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("id-ID");
const statusLabel = (status: string) =>
  status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
const shippingAddress = computed(() => props.order.shippingAddress);
</script>

<template>
  <div class="card border-0 mb-4">
    <div class="card-body p-0">
      <table
        class="table table-bordered mb-0 text-standard"
        id="inline-style-order-view-001"
      >
        <tbody>
          <tr>
            <td id="inline-style-order-view-002"><b>Status order</b></td>
            <td><span class="fw-semibold">{{ statusLabel(order.status) }}</span></td>
          </tr>
          <tr>
            <td><b>Tanggal Pesanan:</b></td>
            <td>{{ date(order.date) }}</td>
          </tr>
          <tr>
            <td><b>Lama Proses Produksi (PO):</b></td>
            <td>5 - 10 Hari</td>
          </tr>
          <tr>
            <td><b>Alamat Pengiriman</b></td>
            <td>
              {{ shippingAddress.name }}<br />
              {{ shippingAddress.street }}<br />
              {{ shippingAddress.province }}, {{ shippingAddress.city }},
              {{ shippingAddress.district }} {{ shippingAddress.postalCode
              }}<br />
              {{ shippingAddress.country }}<br />
              T: {{ shippingAddress.phone }}
            </td>
          </tr>
          <tr>
            <td><b>Metode Pengiriman</b></td>
            <td>Dulank Express - Pengiriman Reguler</td>
          </tr>
          <tr>
            <td><b>Metode Pembayaran</b></td>
            <td>
              <span class="fw-semibold">Transfer Bank</span><br />
              No VA: 100960100259372
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
