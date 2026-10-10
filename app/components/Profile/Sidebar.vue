<script setup lang="ts">
const route = useRoute()
const path = computed(() => route.path.replace(/\.html$/, '').replace(/\/$/, '') || '/')
const isActive = (target: string) => path.value === target
</script>

<template>
  <div>
    <div class="d-md-none">
      <button class="btn btn-outline-dark rounded-0 w-100" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseSidebarProfile"
        aria-expanded="false" aria-controls="collapseSidebarProfile">
        <i class="fas fa-bars me-2"></i> My Account
      </button>
    </div>
    <div class="profile-sidebar bg-white rounded-3 p-0 shadow-sm collapse" id="collapseSidebarProfile">
      <ul class="profile-nav list-unstyled m-0">
        <li class="profile-nav-item" :class="{ active: isActive('/profile') }">
          <NuxtLink to="/profile" class="profile-nav-link"><i class="fas fa-home me-2"></i> Profile</NuxtLink>
        </li>
        <li class="profile-nav-item" :class="{ active: isActive('/orders') || isActive('/order-view') }">
          <NuxtLink to="/orders" class="profile-nav-link"><i class="fas fa-shopping-bag me-2"></i> Orders</NuxtLink>
        </li>
        <li class="profile-nav-item" :class="{ active: isActive('/history') }">
          <NuxtLink to="/history" class="profile-nav-link"><i class="fas fa-box-archive me-2"></i> Beli Lagi</NuxtLink>
        </li>
        <li class="profile-nav-item" :class="{ active: isActive('/quotation-send') || isActive('/quotation-view') }">
          <NuxtLink to="/quotation-send" class="profile-nav-link"><i class="fas fa-regular fa-file-lines me-2"></i> Quotations</NuxtLink>
        </li>
        <li class="profile-nav-item" :class="{ active: isActive('/billing') }">
          <NuxtLink to="/billing" class="profile-nav-link"><i class="fa-solid fa-tag me-2"></i> Billings</NuxtLink>
        </li>
        <li class="profile-nav-item" :class="{ active: isActive('/address') }">
          <NuxtLink to="/address" class="profile-nav-link"><i class="fas fa-map-marker-alt me-2"></i> Addresses</NuxtLink>
        </li>
        <li class="profile-nav-item" :class="{ active: isActive('/support-ticket') || isActive('/support-ticket-detail') }">
          <NuxtLink to="/support-ticket" class="profile-nav-link"><i class="fa-solid fa-ticket me-2"></i> Support Ticket</NuxtLink>
        </li>
        <li class="profile-nav-item">
          <a href="#" class="profile-nav-link"><i class="fas fa-sign-out-alt me-2"></i> Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>
