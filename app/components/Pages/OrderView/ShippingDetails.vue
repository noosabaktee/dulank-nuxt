<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

defineProps<{ order: Order }>();
const date = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("id-ID");
</script>

<template>
  <div class="tab-form" id="productForm">
    <div class="card border-0 mb-4">
      <div class="card-body p-0">
        <table
          class="table table-bordered mb-0 text-standard"
          id="inline-style-order-view-010"
        >
          <tbody>
            <tr>
              <td id="inline-style-order-view-011">
                <b>Tanggal pengiriman</b>
              </td>
              <td><span class="fw-semibold">{{ date(order.date) }}</span></td>
            </tr>
            <tr>
              <td><b>Kurir Pengiriman</b></td>
              <td>MONOTARO EXPRESS</td>
            </tr>
            <tr>
              <td><b>Nomor AWB</b></td>
              <td>{{ order.id }}-1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card border-0 mb-4">
      <div class="card-body p-0">
        <table
          class="table mb-0 text-standard"
          id="inline-style-order-view-012"
        >
          <thead>
            <tr>
              <th class="border-0" id="inline-style-order-view-013">Produk</th>
              <th class="border-0 text-end" id="inline-style-order-view-014">
                Jumlah
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order.items" :key="item.productId">
              <td class="align-middle">
                <div class="d-flex">
                  <div class="ms-2">
                    <span class="fw-semibold text-standard">{{ item.name }}</span
                    ><br />
                    <span class="text-standard">Product ID: {{ item.productId }}</span>
                  </div>
                </div>
              </td>
              <td class="align-middle text-end">{{ item.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <div class="p-0">
          <button
            class="btn w-100 fw-semibold text-white mt-3"
            id="toggleProductBtn"
            type="button"
          >
            Hide Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
