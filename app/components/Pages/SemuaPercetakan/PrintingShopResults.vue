<script setup lang="ts">
interface Shop {
  id: number;
  name: string;
  province: string;
  city: string;
  district: string;
  followers: string;
  following: number;
  paperCount: number;
  printingCount: number;
  laminationCount: number;
  dieCuttingCount: number;
  foilCount: number;
  image: string;
}
defineProps<{ shops: Shop[] }>();
</script>

<template>
  <div>
    <p v-if="!shops.length" class="text-muted mt-3">
      Percetakan tidak ditemukan.
    </p>
    <div
      v-for="shop in shops"
      :key="shop.id"
      class="card border-0 shadow-sm mb-3"
    >
      <div class="d-md-flex align-items-center p-3 justify-content-between">
        <div class="d-flex">
          <img
            :src="shop.image"
            :alt="shop.name"
            class="rounded-circle me-3"
            id="inline-style-semua-percetakan-001"
          />
          <div class="flex-grow-1">
            <div class="fw-bold fs-6 mb-1">{{ shop.name }}</div>
            <div class="text-secondary text-standard mb-1">
              {{ shop.province }}, {{ shop.city }}, {{ shop.district }}
            </div>
            <div
              class="d-flex flex-wrap align-items-center gap-2 mb-1 text-standard"
            >
              <span class="fw-bold">{{ shop.followers }}</span
              ><span class="text-secondary small">Pengikut</span>
              <span class="text-secondary mx-1">|</span
              ><span class="fw-bold">{{ shop.following }}</span
              ><span class="text-secondary small">Mengikuti</span>
            </div>
          </div>
        </div>
        <div class="d-md-flex">
          <div
            class="d-flex flex-row justify-content-between align-items-center ms-md-4 gap-3 mt-3 mt-md-0"
          >
            <div
              v-for="stat in [
                { label: 'Kertas', value: shop.paperCount },
                { label: 'Mesin Cetak', value: shop.printingCount },
                { label: 'Mesin Laminasi', value: shop.laminationCount },
                { label: 'Mesin Pond', value: shop.dieCuttingCount },
                { label: 'Mesin Poli', value: shop.foilCount },
              ]"
              :key="stat.label"
              class="d-flex flex-column align-items-center"
            >
              <span class="fw-bold small">{{ stat.value }}</span
              ><span class="text-secondary text-standard text-center">{{
                stat.label
              }}</span>
            </div>
          </div>
          <div class="d-flex flex-md-column ms-md-4 mt-3 mt-md-0">
            <a
              class="btn my-btn-outline-primary col-6 col-md-12 me-2 me-md-0 mb-md-2 px-3 py-1"
              href="/store"
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
