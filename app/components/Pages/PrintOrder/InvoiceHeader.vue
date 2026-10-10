<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

interface Billing {
  id: string;
  invoiceDate: string;
  dueDate: string;
  status: string;
}

defineProps<{ bill: Billing; order: Order }>();
const date = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("id-ID");
</script>

<template>
  <div class="row mb-3">
    <div
      class="col-md-6 mb-2 d-flex justify-content-between align-items-center"
    >
      <div>
        <h2 class="fw-normal fs-4 mb-0" id="inline-style-print-order-001">
          Proforma Invoice
        </h2>
        <div class="fs-4 fw-light mb-2">#{{ bill.id }}</div>
      </div>
      <div><span class="badge text-bg-danger">{{ bill.status }}</span></div>
    </div>
    <div class="col-md-6">
      <div
        class="d-flex justify-content-md-between justify-content-end text-standard"
      >
        <span class="fw-semibold text-standard">Invoice Date :</span>{{ date(bill.invoiceDate) }}
      </div>
      <div
        class="d-flex justify-content-md-between justify-content-end text-standard"
      >
        <span class="fw-semibold text-standard">Due Date :</span>{{ date(bill.dueDate) }}
      </div>
      <div
        class="d-flex justify-content-md-between justify-content-end text-standard"
      >
        <span class="fw-semibold text-standard">Nomor PO :</span>{{ order.id }}
      </div>
    </div>
  </div>
</template>
