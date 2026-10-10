<script setup lang="ts">
import type { Quotation } from "~/composables/useQuotations";

const props = defineProps<{ quotations: Quotation[] }>();

const query = ref("");
const sort = ref<"newest" | "oldest" | "highest">("newest");
const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
const date = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("id-ID");
const statusLabel = (status: string) =>
  status
    .split(",")
    .map((part) =>
      part
        .trim()
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    )
    .join(", ");

const visible = computed(() => {
  const needle = query.value.toLowerCase();
  const rows = props.quotations.filter((quotation) =>
    `${quotation.id} ${quotation.status} ${quotation.customerInfo.name} ${quotation.items
      .map((item) => item.name)
      .join(" ")}`
      .toLowerCase()
      .includes(needle),
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
  <div class="recent-orders">
    <div class="mt-2 mt-md-0 d-flex justify-content-between">
      <h5 class="section-title mb-0">Quotations</h5>
      <div class="d-flex gap-2">
        <input
          v-model="query"
          aria-label="Search quotations"
          class="form-control"
          placeholder="Search"
          type="search"
        />
        <select v-model="sort" aria-label="Sort quotations" class="form-select">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
    <hr />
    <div>
      <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
        <div class="col-md-2 small">Quotation #</div>
        <div class="col-md-2 small">Tanggal</div>
        <div class="col-md-4 small">Quotation Request Status</div>
        <div class="col-md-2 small text-end">Total Price</div>
        <div class="col-md-2 small text-end"></div>
      </div>

      <div
        v-for="quotation in visible"
        :key="quotation.id"
        class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0"
      >
        <div class="col-12 col-md-2" data-label="Quotation #">
          {{ quotation.id }}
        </div>
        <div class="col-12 col-md-2" data-label="Tanggal">
          {{ date(quotation.date) }}
        </div>
        <div class="col-12 col-md-4" data-label="Quotation Request Status">
          {{ statusLabel(quotation.status) }}
        </div>
        <div
          class="col-12 col-md-2 text-start text-md-end"
          data-label="Total Price"
        >
          {{ money(quotation.total) }}
        </div>
        <div
          class="col-12 col-md-2 text-start text-md-end actions-mobile-separator"
        >
          <NuxtLink
            class="btn my-text-primary p-0"
            :to="`/quotation-view?id=${quotation.id}`"
            >View Quotation
          </NuxtLink>
        </div>
      </div>
    </div>
    <p v-if="!visible.length" class="text-muted py-3">
      Tidak ada quotation yang cocok.
    </p>
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
