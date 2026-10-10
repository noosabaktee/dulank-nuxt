<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

interface Billing {
  id: string;
  orderId?: string;
  invoiceDate: string;
  dueDate: string;
  total: number;
  status: string;
}

const props = defineProps<{ bill: Billing; order: Order }>();
const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
const date = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("id-ID");
const subtotal = computed(() =>
  props.order.items.reduce((sum, item) => sum + item.total, 0),
);
const shippingCost = computed(() => Math.max(props.order.total - subtotal.value, 0));
const tax = computed(() => Math.round(subtotal.value * 0.11));
</script>

<template>
  <div class="col-lg-9">
    <div class="mb-4">
      <div class="shadow p-5">
        <div class="row mb-3">
          <div
            class="col-md-6 mb-2 d-flex justify-content-between align-items-center"
          >
            <div>
              <h2
                class="fw-normal fs-4 mb-0"
                id="inline-style-invoice-view-001"
              >
                Proforma Invoice
              </h2>
              <div class="fs-4 fw-light mb-2">#{{ bill.id }}</div>
            </div>
            <div><span class="badge text-bg-danger">{{ bill.status }}</span></div>
          </div>
          <div class="col-md-4">
            <div class="d-flex justify-content-between text-standard">
              <span class="fw-semibold text-standard">Invoice Date :</span
              >{{ date(bill.invoiceDate) }}
            </div>
            <div class="d-flex justify-content-between text-standard">
              <span class="fw-semibold text-standard">Due Date :</span
              >{{ date(bill.dueDate) }}
            </div>
            <div class="d-flex justify-content-between text-standard">
              <span class="fw-semibold text-standard">Nomor PO :</span>{{ order.id }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 mb-3">
            <div class="mb-2 fw-semibold text-standard">Pay To:</div>
            <div class="text-standard">
              PT. DULANK SEMESTA CIDA<br />
              Cecep Sudirman<br />
              gading elok 2 blok e1 no.1,<br />
              Karawang, Jawa Barat, 41371<br />
              Indonesia
            </div>
          </div>
          <div class="col-6">
            <div class="mb-2 fw-semibold text-standard">Invoiced To:</div>
            <div class="text-standard">
              {{ order.shippingAddress.name }}<br />
              {{ order.shippingAddress.street }}<br />
              {{ order.shippingAddress.city }}, {{ order.shippingAddress.province
              }} {{ order.shippingAddress.postalCode }}
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-6 offset-6">
            <div class="mb-2 fw-semibold text-standard">Shipping To:</div>
            <div class="text-standard">
              {{ order.shippingAddress.name }}<br />
              {{ order.shippingAddress.street }}<br />
              {{ order.shippingAddress.district }}, {{ order.shippingAddress.city
              }}<br />
              {{ order.shippingAddress.province }} {{ order.shippingAddress.postalCode
              }}<br />
              T: {{ order.shippingAddress.phone }}
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="fw-semibold text-standard mb-2">Invoice Items</div>
          <div class="table-responsive">
            <table class="table table-bordered align-middle mb-0">
              <thead>
                <tr>
                  <th class="text-standard">Products</th>
                  <th class="text-end text-standard">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in order.items" :key="item.productId">
                  <td class="text-standard">
                    <span class="fw-semibold text-standard">{{ item.name }}</span
                    ><br /><br />
                    <span class="text-standard fst-italic">Description:</span
                    ><br />
                    <span class="text-standard">Product ID: {{ item.productId }}</span>
                    <div class="d-flex justify-content-between">
                      <span class="text-standard"
                        >{{ money(item.price) }} x {{ item.quantity }} Pcs</span
                      >
                    </div>
                  </td>
                  <td class="text-end text-standard">{{ money(item.total) }}</td>
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
      </div>
    </div>
  </div>
</template>
