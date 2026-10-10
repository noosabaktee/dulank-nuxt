<script setup lang="ts">
interface PaperGroup {
  id: number;
  source: string;
  name: string;
  brand: string;
  updatedAt: string;
}
const { items } = useCatalog<PaperGroup>("paper-groups");
</script>

<template>
  <div
    id="group-tab-pane"
    class="tab-pane fade"
    role="tabpanel"
    aria-labelledby="group-tab"
  >
    <div class="d-flex justify-content-end mt-3">
      <button
        class="btn my-btn-primary col-md-3 col-6"
        data-bs-target="#addNewPaperGroupModal"
        data-bs-toggle="modal"
        type="button"
      >
        +Add New Papers Group
      </button>
    </div>
    <div class="row mt-3">
      <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
        <div class="col-md-3">Sumber</div>
        <div class="col-md-3">Group Kertas</div>
        <div class="col-md-3">Merk</div>
        <div class="col-md-3">Updated</div>
      </div>
      <div
        v-for="item in items"
        :key="item.id"
        class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0"
      >
        <div class="col-12 col-md-3" data-label="Sumber">{{ item.source }}</div>
        <div class="col-12 col-md-3" data-label="Group Kertas">
          {{ item.name }}
        </div>
        <div class="col-12 col-md-3" data-label="Merk">{{ item.brand }}</div>
        <div class="col-12 col-md-3" data-label="Updated">
          {{ item.updatedAt }}
        </div>
      </div>
    </div>
  </div>
</template>
