<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

definePageMeta({ middleware: "auth" });

useLegacyPage({
  title: "Pesan #600268557",
  styles: ["/css/style.css", "/css/pages/order-view-inline.css"],
  scripts: ["/js/pages/order-view.js", "/js/component.js", "/js/profile.js"],
  sweetAlert: false,
});

const route = useRoute();
const orderId = computed(() => String(route.query.id || ""));
const { data, error } = useApi<Order>(`/orders/${orderId.value}`);
const order = computed(() => data.value ?? null);
</script>

<template>
  <div class="dulank-page dulank-page-order-view">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><ProfileSidebar /></div>

          <div v-if="order" class="col-lg-9">
            <PagesOrderViewOrderHeader :order="order" />

            <PagesOrderViewOrderStatus :order="order" />
            <h5 class="fw-bold mb-4">Produk Yang Dipesan</h5>

            <PagesOrderViewOrderTabs />
            <PagesOrderViewOrderDetails :order="order" />
            <PagesOrderViewShippingDetails :order="order" />
            <div class="d-flex justify-content-center">
              <a class="text-center btn my-btn-primary" href="/cart">
                Pesan Lagi
              </a>
            </div>
            <a class="text-standard mt-2 text-secondary" href="/orders"
              ><i class="bi bi-arrow-left me-2"></i>Kembali ke riwayat
              pesanan</a
            >
          </div>
          <div v-else class="col-lg-9">
            <p class="text-muted py-4">
              {{ error ? "Pesanan tidak ditemukan." : "Memuat data pesanan..." }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
