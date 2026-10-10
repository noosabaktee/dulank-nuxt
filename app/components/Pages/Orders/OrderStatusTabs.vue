<script setup lang="ts">
type OrderTab =
  | "orders"
  | "awaiting-confirmation"
  | "awaiting-payment"
  | "design"
  | "production"
  | "shipped"
  | "cancelled";

defineProps<{ activeTab: OrderTab }>();
defineEmits<{ "update:activeTab": [value: OrderTab] }>();
</script>

<template>
  <div class="d-md-flex border-bottom mb-4">
    <button
      class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1"
      :class="{ active: activeTab === 'orders' }"
      id="ordersTab"
      target-form="ordersForm"
      type="button"
      @click="$emit('update:activeTab', 'orders')"
    >
      <span id="inline-style-orders-001">Semua Pesanan</span>
    </button>
    <button
      class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1"
      :class="{ active: activeTab === 'awaiting-confirmation' }"
      id="waitConfirmTab"
      target-form="waitConfirmForm"
      type="button"
      @click="$emit('update:activeTab', 'awaiting-confirmation')"
    >
      <span id="inline-style-orders-002">Menunggu Konfirmasi</span>
    </button>
    <button
      class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1"
      :class="{ active: activeTab === 'awaiting-payment' }"
      id="waitPayTab"
      target-form="waitPayForm"
      type="button"
      @click="$emit('update:activeTab', 'awaiting-payment')"
    >
      <span id="inline-style-orders-003">Menunggu Pembayaran</span>
    </button>
    <button
      class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1"
      :class="{ active: activeTab === 'design' }"
      id="prosesDesignTab"
      target-form="prosesDesignForm"
      type="button"
      @click="$emit('update:activeTab', 'design')"
    >
      <span id="inline-style-orders-004">Proses Design</span>
    </button>
    <button
      class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1"
      :class="{ active: activeTab === 'production' }"
      id="prosesTab"
      target-form="prosesForm"
      type="button"
      @click="$emit('update:activeTab', 'production')"
    >
      <span id="inline-style-orders-005">Dalam Proses</span>
    </button>
    <button
      class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1"
      :class="{ active: activeTab === 'shipped' }"
      id="shippedTab"
      target-form="shippedForm"
      type="button"
      @click="$emit('update:activeTab', 'shipped')"
    >
      <span id="inline-style-orders-006">Telah Dikirim</span>
    </button>
    <button
      class="tab-btn btn p-0 me-4 d-block mt-md-0 mt-1"
      :class="{ active: activeTab === 'cancelled' }"
      id="cancelTab"
      target-form="cancelForm"
      type="button"
      @click="$emit('update:activeTab', 'cancelled')"
    >
      <span id="inline-style-orders-007">Dibatalkan</span>
    </button>
  </div>
</template>
