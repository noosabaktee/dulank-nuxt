<template>
  <div>
    <div
      v-for="(service, index) in services"
      :key="service.image"
      class="row mb-4 mb-md-0"
    >
      <div
        class="col-md-6 mb-4 mb-md-0"
        :class="{ 'order-md-2': index % 2 === 1 }"
      >
        <img alt="" class="object-fit-cover w-100" :src="service.image" />
      </div>
      <div
        class="col-md-6 d-flex align-items-center"
        :class="{ 'order-md-1': index % 2 === 1 }"
      >
        <div class="text-center">
          <h1>{{ service.title }}</h1>
          <h3>{{ service.subtitle }}</h3>
          <p>{{ service.description }}</p>
          <button class="btn my-btn-primary" type="button">
            Lihat Price List
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Heading 1",
    subtitle: "Heading 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus omnis cumque quas voluptas amet sunt excepturi.",
    image: "/images/brosur.jpg",
  },
  {
    title: "Heading 1",
    subtitle: "Heading 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus omnis cumque quas voluptas amet sunt excepturi.",
    image: "/images/yasin.jpg",
  },
];
</script>
