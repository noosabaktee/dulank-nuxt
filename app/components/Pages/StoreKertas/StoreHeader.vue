<script setup lang="ts">
defineProps<{
  name?: string;
  city?: string;
  province?: string;
  joinDate?: string;
  followers?: string;
  following?: number;
  groupCount?: number;
  typeCount?: number;
  avatar?: string;
}>();
</script>

<template>
  <div class="d-md-flex justify-content-md-between">
    <div class="d-md-flex text-center text-md-start align-items-center">
      <div class="profile-avatar mx-auto">
        <img
          alt="User Avatar"
          class="rounded-circle"
          :src="avatar || '/images/tab.png'"
        />
      </div>
      <div class="profile-header-info ms-3">
        <h5 class="profile-name fs-6 mb-1">{{ name }}</h5>
        <span class="text-standard text-muted d-block"
          >{{ city }}, {{ province }}</span
        >
        <span v-if="joinDate" class="text-standard text-muted d-block"
          >Join Date: {{ joinDate }}</span
        >
        <div
          class="d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-1 mb-1"
        >
          <span class="text-standard fw-bold">{{ followers }}</span>
          <span class="text-standard text-secondary small">Pengikut</span>
          <span class="text-standard text-secondary mx-1">|</span>
          <span class="text-standard fw-bold">{{ following }}</span>
          <span class="text-standard text-secondary small">Mengikuti</span>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center gap-3 my-2">
      <div class="d-flex flex-column align-items-center">
        <span class="fw-bold fs-6">{{ groupCount }}</span>
        <span class="text-secondary text-center">Group Kertas</span>
      </div>
      <div class="d-flex flex-column align-items-center">
        <span class="fw-bold fs-6">{{ typeCount }}</span>
        <span class="text-secondary text-center">Jenis Kertas</span>
      </div>
    </div>
  </div>
</template>
