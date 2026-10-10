<script setup lang="ts">
interface Blade {
  id: number;
  name: string;
  pricePerCm: number;
  updatedAt: string;
  published: boolean;
  active: boolean;
}
const { items } = useCatalog<Blade>("die-cutting-blades");
const searchOpen = ref(false);
const query = ref("");
const activeQuery = ref("");
const visible = computed(() =>
  items.value.filter((blade) =>
    blade.name.toLowerCase().includes(activeQuery.value.toLowerCase()),
  ),
);
</script>

<template>
  <div
    id="pisau-tab-pane"
    class="tab-pane fade"
    role="tabpanel"
    aria-labelledby="pisau-tab"
  >
    <h4 class="fs-6 mb-3 mt-3">Harga Pisau Pond</h4>
    <div class="d-flex justify-content-md-end justify-content-center mt-3">
      <button
        class="btn my-btn-primary col-md-3 col-6 me-3"
        data-bs-target="#addNewPisauModal"
        data-bs-toggle="modal"
        type="button"
      >
        +Add New Pisau
      </button>
      <button
        class="btn my-btn-outline-primary col-md-3 col-6"
        type="button"
        @click="searchOpen = !searchOpen"
      >
        Search Pisau
      </button>
    </div>
    <form
      v-if="searchOpen"
      class="mt-3"
      @submit.prevent="activeQuery = query.trim()"
    >
      <label class="form-label text-standard" for="blade-query"
        >Cari Pisau Pond</label
      >
      <div class="input-group">
        <input
          id="blade-query"
          v-model="query"
          class="form-control"
          type="search"
          placeholder="Nama pisau"
        /><button class="btn my-btn-primary" type="submit">Tampilkan</button>
      </div>
    </form>
    <div class="row mt-3">
      <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
        <div class="col-md-3">Nama Barang</div>
        <div class="col-md-3">Harga per cm</div>
        <div class="col-md-2">Updated</div>
        <div class="col-md-2">Status</div>
      </div>
      <div
        v-for="blade in visible"
        :key="blade.id"
        class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0"
      >
        <div class="col-12 col-md-3" data-label="Nama Barang">
          {{ blade.name }}
        </div>
        <div class="col-12 col-md-3" data-label="Harga per cm">
          Rp{{ blade.pricePerCm.toLocaleString("id-ID") }}
        </div>
        <div class="col-12 col-md-2" data-label="Updated">
          {{ blade.updatedAt }}
        </div>
        <div class="col-12 col-md-2" data-label="Status">
          <span
            class="badge"
            :class="blade.published ? 'status-publish' : 'status-private'"
            >{{ blade.published ? "Publish" : "Private" }}</span
          ><span
            class="badge"
            :class="blade.active ? 'status-active' : 'status-deactive'"
            >{{ blade.active ? "Active" : "Deactive" }}</span
          >
        </div>
      </div>
      <p v-if="!visible.length" class="text-muted py-3">
        Pisau tidak ditemukan.
      </p>
    </div>
  </div>
</template>
