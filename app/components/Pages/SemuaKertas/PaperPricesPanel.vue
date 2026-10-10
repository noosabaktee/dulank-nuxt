<script setup lang="ts">
interface PaperPrice {
  id: number;
  source: string;
  name: string;
  group: string;
  price: number;
  updatedAt: string;
  published: boolean;
  active: boolean;
}
const { items } = useCatalog<PaperPrice>("paper-prices");
const searchOpen = ref(false);
const query = ref("");
const activeQuery = ref("");
const visible = computed(() =>
  items.value.filter((item) =>
    `${item.name} ${item.group} ${item.source}`
      .toLowerCase()
      .includes(activeQuery.value.toLowerCase()),
  ),
);
</script>

<template>
  <div
    id="harga-tab-pane"
    class="tab-pane fade show active"
    role="tabpanel"
    aria-labelledby="harga-tab"
  >
    <div class="card mt-4">
      <div class="card-header px-4" id="inline-style-semua-kertas-001">
        Perhatian
      </div>
      <div class="card-body px-4">
        <span class="text-standard fw-bold d-block"
          >Harga kertas dihitung per Group, lalu dipakai sebagai acuan untuk
          berat GSM lain dalam Group tersebut.</span
        ><span class="text-standard"
          >Harga untuk satu ketebalan dapat menjadi patokan harga ketebalan lain
          dalam kelompok yang sama.</span
        >
      </div>
    </div>
    <div class="d-flex justify-content-md-end justify-content-center mt-3">
      <button
        class="btn my-btn-primary col-md-3 col-6 me-3"
        data-bs-target="#addNewPaperPriceModal"
        data-bs-toggle="modal"
        type="button"
      >
        +Add New Paper Price
      </button>
      <button
        class="btn my-btn-outline-primary col-md-3 col-6"
        type="button"
        @click="searchOpen = !searchOpen"
      >
        Search Paper
      </button>
    </div>
    <form
      v-if="searchOpen"
      class="mt-3"
      @submit.prevent="activeQuery = query.trim()"
    >
      <label class="form-label text-standard" for="paper-price-query"
        >Cari nama kertas, group, atau sumber</label
      >
      <div class="input-group">
        <input
          id="paper-price-query"
          v-model="query"
          class="form-control"
          type="search"
          placeholder="Nama kertas"
        /><button class="btn my-btn-primary" type="submit">Tampilkan</button>
      </div>
    </form>
    <div class="row mt-3">
      <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
        <div class="col-md-3">Sumber</div>
        <div class="col-md-3">Nama</div>
        <div class="col-md-2">Update</div>
        <div class="col-md-2">Harga</div>
        <div class="col-md-2">Status</div>
      </div>
      <div
        v-for="item in visible"
        :key="item.id"
        class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0"
      >
        <div class="col-12 col-md-3" data-label="Sumber">{{ item.source }}</div>
        <div class="col-12 col-md-3" data-label="Nama">{{ item.name }}</div>
        <div class="col-12 col-md-2" data-label="Update">
          {{ item.updatedAt }}
        </div>
        <div class="col-12 col-md-2" data-label="Harga">
          Rp{{ item.price.toLocaleString("id-ID") }}
        </div>
        <div class="col-12 col-md-2" data-label="Status">
          <span
            class="badge"
            :class="item.published ? 'status-publish' : 'status-private'"
            >{{ item.published ? "Publish" : "Private" }}</span
          ><span
            class="badge"
            :class="item.active ? 'status-active' : 'status-deactive'"
            >{{ item.active ? "Active" : "Deactive" }}</span
          >
        </div>
      </div>
      <p v-if="!visible.length" class="text-muted py-3">
        Kertas tidak ditemukan.
      </p>
    </div>
  </div>
</template>
