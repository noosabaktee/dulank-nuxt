<script setup lang="ts">
interface Store {
  id: number;
  name: string;
  province: string;
  city: string;
  district: string;
  followers: string;
  following: number;
  groupCount: number;
  typeCount: number;
  image: string;
}
defineProps<{ stores: Store[] }>();
</script>

<template>
  <div>
    <p v-if="!stores.length" class="text-muted mt-3">
      Toko kertas tidak ditemukan.
    </p>
    <div
      v-for="store in stores"
      :key="store.id"
      class="card border-0 shadow-sm mb-3"
    >
      <div class="d-md-flex align-items-center p-3 justify-content-between">
        <div class="d-flex">
          <img
            :src="store.image"
            :alt="store.name"
            class="rounded-circle me-3"
            id="inline-style-semua-toko-kertas-001"
          />
          <div class="flex-grow-1">
            <div class="fw-bold fs-6 mb-1">{{ store.name }}</div>
            <div class="text-secondary text-standard mb-1">
              {{ store.province }}, {{ store.city }}, {{ store.district }}
            </div>
            <div
              class="d-flex flex-wrap align-items-center gap-2 mb-1 text-standard"
            >
              <span class="fw-bold">{{ store.followers }}</span
              ><span class="text-secondary small">Pengikut</span>
              <span class="text-secondary mx-1">|</span
              ><span class="fw-bold">{{ store.following }}</span
              ><span class="text-secondary small">Mengikuti</span>
            </div>
          </div>
        </div>
        <div class="d-md-flex">
          <div
            class="d-flex flex-row justify-content-between align-items-center ms-md-4 gap-3 mt-3 mt-md-0"
          >
            <div class="d-flex flex-column align-items-center">
              <span class="fw-bold small">{{ store.groupCount }}</span
              ><span class="text-secondary text-standard">Group Kertas</span>
            </div>
            <div class="d-flex flex-column align-items-center">
              <span class="fw-bold small">{{ store.typeCount }}</span
              ><span class="text-secondary text-standard">Jenis Kertas</span>
            </div>
          </div>
          <div class="d-flex flex-md-column ms-md-4 mt-3 mt-md-0">
            <a
              class="btn my-btn-outline-primary col-6 col-md-12 me-2 me-md-0 mb-md-2 px-3 py-1"
              href="/store-kertas"
              >VISIT</a
            >
            <button
              class="btn my-btn-outline-primary col-6 col-md-12 px-3 py-1"
              type="button"
            >
              IKUTI
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
