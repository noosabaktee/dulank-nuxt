<template>
  <div class="col-md-6 order-md-2">
    <h5 class="mb-3">Produk Terlaris</h5>
    <div class="row mb-5">
      <div v-for="image in bestSellerImages" :key="image" class="col-4">
        <img alt="" class="object-fit-cover w-100" :src="image" />
      </div>
    </div>

    <h5 class="mb-3">Produk Paket</h5>
    <div class="row mb-5">
      <div v-for="image in packageImages" :key="image" class="col-4">
        <img alt="" class="object-fit-cover w-100" :src="image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bestSellerImages = ["/images/brosur.jpg", "/images/yasin.jpg", "/images/kaos.jpg"];
const packageImages = ["/images/brosur.jpg", "/images/yasin.jpg", "/images/kaos.jpg"];
</script>
