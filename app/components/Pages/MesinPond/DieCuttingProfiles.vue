<script setup lang="ts">
const { records } = useMachineCatalog("die-cutting");
const searchOpen = ref(false);
const query = ref("");
const activeQuery = ref("");
const visible = computed(() =>
  records.value.filter((record) =>
    `${record.name} ${record.source}`
      .toLowerCase()
      .includes(activeQuery.value.toLowerCase()),
  ),
);
</script>

<template>
  <div
    id="jenis-tab-pane"
    class="tab-pane fade show active"
    role="tabpanel"
    aria-labelledby="jenis-tab"
  >
    <div class="d-flex justify-content-md-end justify-content-center mt-3">
      <button
        class="btn my-btn-primary col-md-3 col-6 me-3"
        data-bs-target="#addNewDieCuttingModal"
        data-bs-toggle="modal"
        type="button"
      >
        +Add New Pond
      </button>
      <button
        class="btn my-btn-outline-primary col-md-3 col-6"
        type="button"
        @click="searchOpen = !searchOpen"
      >
        Search Pond
      </button>
    </div>
    <form
      v-if="searchOpen"
      class="mt-3"
      @submit.prevent="activeQuery = query.trim()"
    >
      <label class="form-label text-standard" for="die-cutting-query"
        >Cari Mesin Pond atau Percetakan</label
      >
      <div class="input-group">
        <input
          id="die-cutting-query"
          v-model="query"
          class="form-control"
          type="search"
          placeholder="Nama mesin atau percetakan"
        /><button class="btn my-btn-primary" type="submit">Tampilkan</button>
      </div>
    </form>
    <CatalogMachineRecordsTable :records="visible" kind="die-cutting" />
  </div>
</template>
