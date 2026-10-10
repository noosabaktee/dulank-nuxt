<script setup lang="ts">
import type { UserProfile } from "~/composables/useUserProfile";

defineProps<{ user: UserProfile }>();
const dateTime = (value?: string) =>
  value
    ? new Date(value).toLocaleString("id-ID", {
        dateStyle: "short",
        timeStyle: "short",
      })
    : "-";
</script>

<template>
  <div class="profile-header d-flex align-items-center mb-4">
    <div class="profile-avatar">
      <img
        alt="User Avatar"
        class="rounded-circle"
        :src="user.avatar || '/images/profile.png'"
      />
      <div class="profile-avatar-badge">
        <i class="fas fa-camera"></i>
      </div>
    </div>
    <div class="profile-header-info ms-3">
      <h5 class="profile-name fs-6 mb-1">Hello {{ user.name }}</h5>
      <span class="text-standard text-muted d-block"
        >Join Date: {{ dateTime(user.joinDate) }}</span
      >
      <span class="text-standard text-muted d-block"
        >Last Login: {{ dateTime(user.lastLogin) }}</span
      >
    </div>
  </div>
</template>
