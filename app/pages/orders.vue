<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

definePageMeta({ middleware: "auth" });

useLegacyPage({
  title: "Orders",
  styles: ["/css/style.css", "/css/pages/orders-inline.css"],
  scripts: ["/js/component.js", "/js/profile.js"],
  sweetAlert: false,
});

const { orders } = useOrders();
const searchQuery = ref("");
const sortMode = ref<"newest" | "oldest" | "highest">("newest");
const activeTab = ref<
  | "orders"
  | "awaiting-confirmation"
  | "awaiting-payment"
  | "design"
  | "production"
  | "shipped"
  | "cancelled"
>("orders");
const filteredOrders = computed(() => {
  const needle = searchQuery.value.toLowerCase();
  const rows = orders.value.filter((order) =>
    `${order.id} ${order.status} ${order.shippingAddress.name} ${order.items
      .map((item) => item.name)
      .join(" ")}`
      .toLowerCase()
      .includes(needle),
  );

  return rows.sort((a, b) =>
    sortMode.value === "highest"
      ? b.total - a.total
      : sortMode.value === "oldest"
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date),
  );
});

const byStatus = (statuses: string[]) =>
  computed<Order[]>(() =>
    filteredOrders.value.filter((order) => statuses.includes(order.status)),
  );

const awaitingConfirmationOrders = byStatus(["awaiting-confirmation"]);
const awaitingPaymentOrders = byStatus(["awaiting-payment", "pending"]);
const designOrders = byStatus(["design"]);
const productionOrders = byStatus(["production", "proses"]);
const shippedOrders = byStatus(["shipped", "delivered"]);
const cancelledOrders = byStatus(["cancelled"]);
</script>

<template>
  <div class="dulank-page dulank-page-orders">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><ProfileSidebar /></div>

          <div class="col-lg-9">
            <PagesOrdersEmptyOrdersState v-if="!orders.length" />
            <div v-else class="profile-content bg-white p-4 rounded-3 shadow-sm">
              <PagesOrdersHeader
                v-model:search="searchQuery"
                v-model:sort="sortMode"
              />
              <hr />

              <PagesOrdersOrderStatusTabs v-model:active-tab="activeTab" />

              <PagesOrdersAllOrdersPanel
                v-if="activeTab === 'orders'"
                :orders="filteredOrders"
              />

              <PagesOrdersAwaitingConfirmationPanel
                v-else-if="activeTab === 'awaiting-confirmation'"
                :orders="awaitingConfirmationOrders"
              />

              <PagesOrdersAwaitingPaymentPanel
                v-else-if="activeTab === 'awaiting-payment'"
                :orders="awaitingPaymentOrders"
              />

              <PagesOrdersDesignInProgressPanel
                v-else-if="activeTab === 'design'"
                :orders="designOrders"
              />

              <PagesOrdersProductionPanel
                v-else-if="activeTab === 'production'"
                :orders="productionOrders"
              />

              <PagesOrdersShippedOrdersPanel
                v-else-if="activeTab === 'shipped'"
                :orders="shippedOrders"
              />

              <PagesOrdersCancelledOrdersPanel
                v-else-if="activeTab === 'cancelled'"
                :orders="cancelledOrders"
              />
              <PagesOrdersPaginationControls :total="filteredOrders.length" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
