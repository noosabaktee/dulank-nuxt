<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

useLegacyPage({
  title: "Invoice",
  styles: ["/css/style.css", "/css/pages/invoice-view-inline.css"],
  scripts: ["/js/component.js"],
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
  <div class="dulank-page dulank-page-invoice-view">
    <main>
      <section class="py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-center">
            <h2 class="fw-bold">Invoice view</h2>
            <span class="text-standard mb-md-4"
              >Profile > Billing > Payment Confirm</span
            >

            <PagesInvoiceViewInvoiceDetails
              v-if="bill && order"
              :bill="bill"
              :order="order"
            />
            <p v-else class="text-muted py-4">Memuat data invoice...</p>

            <PagesInvoiceViewInvoiceActions />
          </div>
        </div>
      </section>

      <PagesInvoiceViewUploadReceiptModal />
    </main>
  </div>
</template>
