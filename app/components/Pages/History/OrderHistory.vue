<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

const props = defineProps<{ orders: Order[] }>();

const query = ref("");
const sort = ref<"newest" | "oldest" | "highest">("newest");
const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
const date = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("id-ID");

const historyRows = computed(() =>
  props.orders.flatMap((order) =>
    order.items.map((item) => ({
      id: `${order.id}-${item.productId}`,
      orderId: order.id,
      date: order.date,
      status: order.status,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      total: item.total,
    })),
  ),
);

const visible = computed(() => {
  const needle = query.value.toLowerCase();
  const rows = historyRows.value.filter((row) =>
    `${row.orderId} ${row.name} ${row.status}`.toLowerCase().includes(needle),
  );

  return rows.sort((a, b) =>
    sort.value === "highest"
      ? b.total - a.total
      : sort.value === "oldest"
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date),
  );
});
</script>

<template>
  <div class="profile-content bg-white p-4 rounded-3">
    <div class="recent-orders">
      <div class="d-md-flex justify-content-between align-items-center mb-3">
        <h5 class="section-title mb-0">History</h5>
        <div class="mt-2 mt-md-0 d-flex gap-2">
          <input
            v-model="query"
            aria-label="Search history"
            class="form-control"
            placeholder="Search"
            type="search"
          />
          <select v-model="sort" aria-label="Sort history" class="form-select">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
      </div>
      <hr />
      <div>
        <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
          <div class="col-md-3 small">Product</div>
          <div class="col-md-2 small">Date</div>
          <div class="col-md-1 small">Qty</div>
          <div class="col-md-2 small">Price</div>
          <div class="col-md-2 small">Period Time</div>
          <div class="col-md-2 small text-end">Total</div>
        </div>

        <NuxtLink
          v-for="row in visible"
          :key="row.id"
          class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0"
          :to="`/order-view?id=${row.orderId}`"
        >
          <div class="col-12 col-md-3" data-label="Product">
            <div class="d-flex">
              <img alt="" height="50" src="/images/brosur.jpg" width="50" />
              <span class="text-standard ms-2 object-fit-cover">{{
                row.name
              }}</span>
            </div>
          </div>
          <div class="col-12 col-md-2" data-label="Date">
            {{ date(row.date) }}
          </div>
          <div class="col-12 col-md-1" data-label="Qty">
            {{ row.quantity }}
          </div>
          <div class="col-12 col-md-2" data-label="Price">
            {{ money(row.price) }}
          </div>
          <div class="col-12 col-md-2" data-label="Period Time">
            {{ row.status }}
          </div>
          <div class="col-12 col-md-2 text-end" data-label="Total">
            {{ money(row.total) }}
          </div>
        </NuxtLink>
      </div>
      <p v-if="!visible.length" class="text-muted py-3">
        Tidak ada history yang cocok.
      </p>
    </div>
    <div class="text-standard d-flex justify-content-end mt-2">
      Tampilkan
      <select aria-label="Default select example" class="text-standard mx-2">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      Per Halaman
    </div>
  </div>
</template>
