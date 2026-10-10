<script setup lang="ts">
import type { MachineRecord } from "~/composables/useMachineCatalog";

defineProps<{ records: MachineRecord[]; kind: MachineRecord["kind"] }>();
const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
</script>

<template>
  <div class="row mt-3">
    <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
      <div class="col-md-3 small">Nama</div>
      <div class="col-md-2 small">
        {{ kind === "printing" ? "Sumber" : "Ukuran Max" }}
      </div>
      <div class="col-md-2 small">Harga</div>
      <div class="col-md-2 small">Update</div>
      <div class="col-md-2 small">Status</div>
      <div class="col-md-1 small"></div>
    </div>
    <div
      v-for="record in records"
      :key="record.id"
      class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0"
    >
      <div class="col-12 col-md-3" data-label="Nama">{{ record.name }}</div>
      <div
        class="col-12 col-md-2"
        :data-label="kind === 'printing' ? 'Sumber' : 'Ukuran Max'"
      >
        {{ kind === "printing" ? record.source : record.size }}
      </div>
      <div class="col-12 col-md-2" data-label="Harga">
        {{ money(record.price) }}<br /><span class="text-muted"
          >{{ money(record.unitPrice) }} /
          {{ kind === "printing" ? "druck" : "cm" }}</span
        >
      </div>
      <div class="col-12 col-md-2" data-label="Update">
        {{ record.updatedAt }}
      </div>
      <div class="col-12 col-md-2" data-label="Status">
        <span
          class="badge"
          :class="record.published ? 'status-publish' : 'status-private'"
          >{{ record.published ? "Publish" : "Private" }}</span
        >
        <span
          class="badge"
          :class="record.active ? 'status-active' : 'status-deactive'"
          >{{ record.active ? "Active" : "Deactive" }}</span
        >
      </div>
      <div class="col-12 col-md-1">
        <a
          v-if="kind === 'printing'"
          class="text-primary"
          data-bs-target="#detailModal"
          data-bs-toggle="modal"
          href="#detailModal"
          >Detail</a
        >
      </div>
    </div>
    <p v-if="!records.length" class="text-muted py-3">
      Tidak ada mesin yang cocok.
    </p>
  </div>
</template>
