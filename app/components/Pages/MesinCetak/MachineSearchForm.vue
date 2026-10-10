<script setup lang="ts">
const emit = defineEmits<{ search: [query: string] }>();
const query = ref("");
</script>

<template>
  <div class="d-none" id="formSearch">
    <form @submit.prevent="emit('search', query.trim())">
      <div class="mb-3">
        <label class="form-label text-standard">Cari Nama Percetakan</label>
        <div class="input-group">
          <input
            v-model="query"
            class="form-control text-standard"
            placeholder="Nama Percetakan"
            type="search"
          />
          <span class="input-group-text"><i class="fa fa-search"></i></span>
        </div>
      </div>
      <div class="row">
        <div class="mb-3 col-md-4">
          <label class="form-label text-standard">Provinsi</label>
          <select class="form-select text-standard">
            <option>Jawa Barat (26 Percetakan)</option>
          </select>
        </div>
        <div class="mb-3 col-md-4">
          <label class="form-label text-standard">Kabupaten</label>
          <select class="form-select text-standard">
            <option>Karawang (10 Percetakan)</option>
          </select>
        </div>
        <div class="mb-3 col-md-4 ps-md-0">
          <label class="form-label text-standard">Kecamatan</label>
          <select class="form-select text-standard">
            <option>Telukjambe Timur (3 Percetakan)</option>
          </select>
        </div>
      </div>
    </form>
    <div class="d-flex justify-content-end ps-md-3">
      <button
        class="btn my-btn-primary mt-2 col-md-4 col-6"
        type="button"
        @click="emit('search', query.trim())"
      >
        Tampilkan
      </button>
    </div>
  </div>
</template>
