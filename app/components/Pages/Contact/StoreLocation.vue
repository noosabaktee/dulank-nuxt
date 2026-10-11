<script setup lang="ts">
defineProps<{
  address?: string;
  mapEmbedUrl?: string;
}>();
</script>

<template>
  <div class="col-md-6">
    <p class="fs-6">Our Shop Location</p>
    <p>Alamat kami : {{ address }}</p>
    <div>
      <iframe
        v-if="mapEmbedUrl"
        allowfullscreen
        class="w-100"
        height="400"
        id="inline-style-contact-001"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        :src="mapEmbedUrl"
      ></iframe>
    </div>
  </div>
</template>
