<script setup lang="ts">
export interface PaperServiceRow {
  name: string;
  size: string;
  gsm: string;
  updatedAt?: string;
}

defineProps<{ rows: PaperServiceRow[] }>();
</script>

<template>
  <div
    aria-labelledby="kertas-tab"
    class="tab-pane fade show active"
    id="kertas-tab-pane"
    role="tabpanel"
    tabindex="0"
  >
    <div class="row mt-3">
      <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
        <div class="col-md-3 small">Nama</div>
        <div class="col-md-3 small">Ukuran</div>
        <div class="col-md-2 small">Gramatur</div>
        <div class="col-md-2 small">Update</div>
        <div class="col-md-2 small text-end"></div>
      </div>

      <div
        v-for="row in rows"
        :key="row.name"
        class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0"
      >
        <div class="col-12 col-md-3" data-label="Nama">{{ row.name }}</div>
        <div class="col-12 col-md-3" data-label="Ukuran">{{ row.size }}</div>
        <div class="col-12 col-md-2" data-label="Gramatur">{{ row.gsm }}</div>
        <div class="col-12 col-md-2" data-label="Update">{{ row.updatedAt }}</div>
        <div class="col-12 col-md-2 text-center"></div>
      </div>
    </div>
  </div>
</template>