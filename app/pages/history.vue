<script setup lang="ts">
definePageMeta({ middleware: "auth" });
useLegacyPage({
  title: "Beli Lagi",
  styles: ["/css/style.css", "/css/pages/history-inline.css"],
  scripts: ["/js/component.js", "/js/profile.js"],
  sweetAlert: false,
});

const { orders } = useOrders();
</script>

<template>
  <div class="dulank-page dulank-page-history">
    <PagesHistoryOrderTrackingModal />
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><ProfileSidebar /></div>

          <div class="col-lg-9">
            <PagesHistoryEmptyHistoryState v-if="!orders.length" />
            <PagesHistoryOrderHistory v-else :orders="orders" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
