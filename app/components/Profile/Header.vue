<script setup lang="ts">
withDefaults(defineProps<{
  name?: string
  avatar?: string
  joinDate?: string
  lastLogin?: string
}>(), {
  name: 'Ahmad Dhani',
  avatar: '/images/profile.png',
  joinDate: '19.30 15/12/2025',
  lastLogin: '15.25 25/12/2025'
})
</script>

<template>
  <div class="profile-header d-flex align-items-center mb-4 flex items-center mb-6">
    <div class="profile-avatar">
      <img alt="User Avatar" class="rounded-circle rounded-full" :src="avatar" />
      <div class="profile-avatar-badge"><i class="fas fa-camera"></i></div>
    </div>
    <div class="profile-header-info ms-3 ml-4">
      <h5 class="profile-name fs-6 mb-1 text-base">Hello {{ name }}</h5>
      <span class="text-standard text-muted d-block text-gray-500 block">Join Date: {{ joinDate }}</span>
      <span class="text-standard text-muted d-block text-gray-500 block">Last Login: {{ lastLogin }}</span>
    </div>
  </div>
</template>
