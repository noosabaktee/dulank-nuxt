<script setup lang="ts">
import type { CuttingResult } from '~/composables/usePaperCutting';
defineProps<{ results: CuttingResult[] }>();
const emit = defineEmits<{ preview: [result: CuttingResult] }>();
</script>

<template>
  <div>
    <div class="empty-form align-items-center d-flex h-100" :class="{ 'd-none': results.length > 0 }">
      <div class="text-center w-100">
        <i class="bi bi-journal fs-1 mb-4"></i>
        <h6>Please select the specification</h6>
        <p class="text-muted text-standard mb-4">
          You have not selected product specifications
        </p>
      </div>
    </div>
    <div class="form" :class="{ 'd-none': !results.length }">
      <h3 class="fs-6">Hasil Hitungan Potongan</h3>
      <p>Hasil Perhitungan {{ results.length }} ukuran kertas</p>
      <table class="table">
        <thead class="bg-light">
          <tr>
            <th>Ukuran Plano</th>
            <th>Hasil Potongan</th>
            <th>Area</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in results" :key="row.sizeId ?? `custom-${index}`">
            <td>{{ row.name }}</td>
            <td>{{ row.count }} Lembar</td>
            <td>{{ row.utilization }}%</td>
            <td><span class="text-primary text-standard" role="button" tabindex="0" :aria-disabled="!row.count" @click="row.count && emit('preview', row)" @keydown.enter="row.count && emit('preview', row)" @keydown.space.prevent="row.count && emit('preview', row)">Generate</span></td>
          </tr>
        </tbody>
      </table>
      <p class="text-muted small">
        Klik Generate untuk memilih ukuran plano dengan potongan
      </p>
    </div>
  </div>
</template>
