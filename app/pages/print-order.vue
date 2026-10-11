<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

definePageMeta({ middleware: "auth" });

useLegacyPage({
  title: "Print Order #60404168",
  styles: [
    "/css/style.css",
    "/css/pages/print-order.css",
    "/css/pages/print-order-inline.css",
  ],
  scripts: ["/js/pages/print-order.js"],
  sweetAlert: false,
});

interface Billing {
  id: string;
  userId: number;
  orderId?: string;
  invoiceDate: string;
  dueDate: string;
  total: number;
  status: string;
}

const route = useRoute();
const invoiceId = computed(() => String(route.query.id || ""));
const { data: invoiceData } = useApi<Billing>(`/invoices/${invoiceId.value}`);
const bill = computed(() => invoiceData.value ?? null);
const orderId = computed(() =>
  String(route.query.orderId || bill.value?.orderId || ""),
);
const { data: orderData } = useApi<Order>(`/orders/${orderId.value}`);
const order = computed(() => orderData.value ?? null);
</script>

<template>
  <div class="dulank-page dulank-page-print-order">
    <div class="p-3 p-md-5">
      <div>
        <template v-if="bill && order">
          <PagesPrintOrderInvoiceHeader :bill="bill" :order="order" />
          <PagesPrintOrderCustomerDetails :order="order" />
          <PagesPrintOrderItemsTable :bill="bill" :order="order" />
          <PagesPrintOrderInstructions />
        </template>
        <p v-else class="text-muted py-4">Memuat data invoice...</p>
      </div>
    </div>
  </div>
</template>
