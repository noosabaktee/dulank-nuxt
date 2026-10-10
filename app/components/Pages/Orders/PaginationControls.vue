<script setup lang="ts">
defineProps<{ total: number }>();
</script>

<template>
  <div class="text-standard d-flex justify-content-end mt-2">
    Tampilkan {{ total }}
    <select aria-label="Default select example" class="text-standard mx-2">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
    </select>
    Per Halaman
  </div>
</template>
