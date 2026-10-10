<script setup lang="ts">
interface Client {
  id: number;
  name: string;
  logo: string;
}
defineProps<{ clients: Client[] }>();
</script>

<template>
  <div class="container overflow-hidden">
    <div class="row gy-4">
      <div
        v-for="client in clients"
        :key="client.id"
        class="col-6 col-md-2 text-center"
      >
        <div class="text-secondary p-3 px-md-6 py-md-4 px-lg-8 py-lg-5">
          <img
            :src="client.logo"
            :alt="client.name"
            class="w-100"
            height="65"
          />
        </div>
      </div>
    </div>
  </div>
</template>
