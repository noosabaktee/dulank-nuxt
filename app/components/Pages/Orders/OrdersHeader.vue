<script setup lang="ts">
defineProps<{
  search: string;
  sort: "newest" | "oldest" | "highest";
}>();

defineEmits<{
  "update:search": [value: string];
  "update:sort": [value: "newest" | "oldest" | "highest"];
}>();
</script>

<template>
  <div class="mt-2 mt-md-0 d-flex justify-content-between">
    <h5 class="section-title mb-0">Orders</h5>
    <div class="d-flex" id="search-form">
      <form class="d-flex" @submit.prevent>
        <input
          :value="search"
          class="form-control"
          aria-label="Search orders"
          placeholder="Search Job Title"
          type="search"
          @input="
            $emit('update:search', ($event.target as HTMLInputElement).value)
          "
        />
        <button class="ms-2 btn my-btn-primary" type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <select
        :value="sort"
        aria-label="Sort orders"
        class="form-select ms-2"
        @change="
          $emit(
            'update:sort',
            ($event.target as HTMLSelectElement).value as
              | 'newest'
              | 'oldest'
              | 'highest',
          )
        "
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="highest">Highest</option>
      </select>
    </div>
  </div>
</template>
