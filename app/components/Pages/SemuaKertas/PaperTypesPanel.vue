<script setup lang="ts">
interface PaperType {
  id: number;
  source: string;
  name: string;
  group: string;
  gsm: number;
  updatedAt: string;
}
const { items } = useCatalog<PaperType>("paper-types");
</script>

<template>
  <div
    id="jenis-tab-pane"
    class="tab-pane fade"
    role="tabpanel"
    aria-labelledby="jenis-tab"
  >
    <div class="d-flex justify-content-end mt-3">
      <button
        class="btn my-btn-primary col-md-3 col-6"
        data-bs-target="#addNewPaperItemModal"
        data-bs-toggle="modal"
        type="button"
      >
        +Add New Paper Type
      </button>
    </div>
    <div class="row mt-3">
      <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
        <div class="col-md-3">Sumber</div>
        <div class="col-md-3">Nama</div>
        <div class="col-md-2">Group</div>
        <div class="col-md-2">GSM</div>
        <div class="col-md-2">Update</div>
      </div>
      <div
        v-for="item in items"
        :key="item.id"
        class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0"
      >
        <div class="col-12 col-md-3" data-label="Sumber">{{ item.source }}</div>
        <div class="col-12 col-md-3" data-label="Nama">{{ item.name }}</div>
        <div class="col-12 col-md-2" data-label="Group">{{ item.group }}</div>
        <div class="col-12 col-md-2" data-label="GSM">{{ item.gsm }}</div>
        <div class="col-12 col-md-2" data-label="Update">
          {{ item.updatedAt }}
        </div>
      </div>
    </div>
  </div>
</template>
