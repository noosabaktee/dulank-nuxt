<script setup lang="ts">
interface Billing {
  id: string;
  orderId?: string;
  invoiceDate: string;
  dueDate: string;
  total: number;
  status: string;
}
const props = defineProps<{ billings: Billing[] }>();
const query = ref("");
const sort = ref<"newest" | "oldest" | "highest">("newest");
const visible = computed(() => {
  const rows = props.billings.filter((bill) =>
    `${bill.id} ${bill.status}`
      .toLowerCase()
      .includes(query.value.toLowerCase()),
  );
  return rows.sort((a, b) =>
    sort.value === "highest"
      ? b.total - a.total
      : sort.value === "oldest"
        ? a.invoiceDate.localeCompare(b.invoiceDate)
        : b.invoiceDate.localeCompare(a.invoiceDate),
  );
});
const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
const date = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("id-ID");
</script>

<template>
  <div class="recent-orders">
    <div class="mt-2 mt-md-0 d-flex justify-content-between">
      <h5 class="section-title mb-0">Billings</h5>
      <div class="d-flex gap-2">
        <input
          v-model="query"
          class="form-control"
          aria-label="Search billings"
          placeholder="Search"
          type="search"
        />
        <select v-model="sort" class="form-select" aria-label="Sort billings">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
    <hr />
    <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
      <div class="col-md-2 small">Invoice #</div>
      <div class="col-md-1 small text-center">Date</div>
      <div class="col-md-1 small text-center">Due</div>
      <div class="col-md-1 small text-center">Total</div>
      <div class="col-md-1 small text-center">Status</div>
      <div class="col-md-6 small"></div>
    </div>
    <div
      v-for="bill in visible"
      :key="bill.id"
      class="row table-product align-items-md-center py-md-2 px-md-0 py-3 px-3 border-bottom-md-0"
    >
      <div class="col-12 col-md-2" data-label="Invoice #">{{ bill.id }}</div>
      <div class="col-12 col-md-1 text-center" data-label="Invoice Date">
        {{ date(bill.invoiceDate) }}
      </div>
      <div class="col-12 col-md-1 text-center" data-label="Due Date">
        {{ date(bill.dueDate) }}
      </div>
      <div class="col-12 col-md-1 text-center" data-label="Total">
        {{ money(bill.total) }}
      </div>
      <div
        class="col-12 col-md-1 text-center"
        :class="
          bill.status === 'Unpaid'
            ? 'text-danger'
            : bill.status === 'Paid'
              ? 'text-success'
              : 'text-secondary'
        "
        data-label="Status"
      >
        {{ bill.status }}
      </div>
      <div
        class="col-12 col-md-6 d-md-flex text-center justify-content-between gap-3"
      >
        <a
          class="text-primary"
          :href="`/invoice-view?id=${bill.id}&orderId=${bill.orderId || ''}`"
          >Payment Confirm</a
        >
        <a
          class="text-primary"
          :href="`/print-order?id=${bill.id}&orderId=${bill.orderId || ''}`"
          >Download Invoice</a
        >
        <a
          class="text-primary"
          :href="`/print-order?id=${bill.id}&orderId=${bill.orderId || ''}&type=tax`"
          >Download Faktur Pajak</a
        >
      </div>
    </div>
    <p v-if="!visible.length" class="text-muted py-3">
      Tidak ada billing yang cocok.
    </p>
  </div>
</template>
