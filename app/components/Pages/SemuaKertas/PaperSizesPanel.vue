<script setup lang="ts">
interface PaperSize {
  id: number;
  source: string;
  name: string;
  width: number;
  height: number;
  unit: string;
  updatedAt: string;
}
const { items } = useCatalog<PaperSize>("paper-sizes");
</script>

<template>
  <div
    id="ukuran-tab-pane"
    class="tab-pane fade"
    role="tabpanel"
    aria-labelledby="ukuran-tab"
  >
    <div class="d-flex justify-content-end mt-3">
      <button
        class="btn my-btn-primary col-md-3 col-6"
        data-bs-target="#addNewPaperModal"
        data-bs-toggle="modal"
        type="button"
      >
        +Add New Paper Size
      </button>
    </div>
    <div class="row mt-3">
      <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
        <div class="col-md-3">Sumber</div>
        <div class="col-md-3">Nama Kertas</div>
        <div class="col-md-3">Ukuran</div>
        <div class="col-md-3">Updated</div>
      </div>
      <div
        v-for="item in items"
        :key="item.id"
        class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0"
      >
        <div class="col-12 col-md-3" data-label="Sumber">{{ item.source }}</div>
        <div class="col-12 col-md-3" data-label="Nama Kertas">
          {{ item.name }}
        </div>
        <div class="col-12 col-md-3" data-label="Ukuran">
          {{ item.width }}×{{ item.height }} {{ item.unit }}
        </div>
        <div class="col-12 col-md-3" data-label="Updated">
          {{ item.updatedAt }}
        </div>
      </div>
    </div>
  </div>
</template>
