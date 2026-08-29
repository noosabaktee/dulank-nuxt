<script setup lang="ts">
const route = useRoute()
const path = computed(() => route.path.replace(/\.html$/, '').replace(/\/$/, '') || '/')
const isActive = (target: string) => path.value === target
const percetakanRoutes = ['/semua-percetakan', '/mesin-cetak', '/mesin-laminasi', '/mesin-pond', '/mesin-poli']
const tokoRoutes = ['/semua-toko-kertas', '/semua-kertas', '/store', '/store-kertas']
const openPercetakan = ref(percetakanRoutes.includes(path.value))
const openToko = ref(tokoRoutes.includes(path.value))
watch(path, value => {
  if (percetakanRoutes.includes(value)) openPercetakan.value = true
  if (tokoRoutes.includes(value)) openToko.value = true
})
</script>

<template>
  <div>
    <div class="d-md-none">
      <button class="btn btn-outline-dark text-start rounded-0 w-100" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseSidebarProfile"
        aria-expanded="false" aria-controls="collapseSidebarProfile">
        <h5 class="fw-normal align-items-center"><i class="fas fa-bars me-2"></i> Menu Pengaturan </h5>
      </button>
    </div>
    <div class="profile-sidebar bg-white rounded-3 p-0 shadow-sm collapse" id="collapseSidebarProfile">
      <ul class="profile-nav list-unstyled m-0">
        <li class="profile-nav-item" :class="{ active: isActive('/profile-kalkulator') }">
          <NuxtLink to="/profile-kalkulator" class="profile-nav-link">Profile Kalkulator</NuxtLink>
        </li>

        <li class="profile-nav-item">
          <div class="profile-nav-link d-flex justify-content-between">
            <NuxtLink to="/semua-percetakan" class="w-100"><span class="text-standard">Semua Percetakan</span></NuxtLink>
            <button type="button" class="btn p-0 border-0 bg-transparent" :class="{ 'flip-vertical': !openPercetakan }" aria-label="Toggle Semua Percetakan" @click="openPercetakan = !openPercetakan"><i class="bi bi-chevron-up"></i></button>
          </div>
        </li>
        <li v-show="openPercetakan" class="p-0 m-0 list-unstyled">
          <ul class="list-unstyled m-0 p-0">
            <li class="profile-nav-item" :class="{ active: isActive('/mesin-cetak') }"><NuxtLink to="/mesin-cetak" class="profile-nav-link ps-5">Mesin Cetak</NuxtLink></li>
            <li class="profile-nav-item" :class="{ active: isActive('/mesin-laminasi') }"><NuxtLink to="/mesin-laminasi" class="profile-nav-link ps-5">Mesin Laminasi</NuxtLink></li>
            <li class="profile-nav-item" :class="{ active: isActive('/mesin-pond') }"><NuxtLink to="/mesin-pond" class="profile-nav-link ps-5">Mesin Pond</NuxtLink></li>
            <li class="profile-nav-item" :class="{ active: isActive('/mesin-poli') }"><NuxtLink to="/mesin-poli" class="profile-nav-link ps-5">Mesin Poli</NuxtLink></li>
          </ul>
        </li>

        <li class="profile-nav-item">
          <div class="profile-nav-link d-flex justify-content-between">
            <NuxtLink to="/semua-toko-kertas" class="w-100"><span class="text-standard">Semua Toko Kertas</span></NuxtLink>
            <button type="button" class="btn p-0 border-0 bg-transparent" :class="{ 'flip-vertical': !openToko }" aria-label="Toggle Semua Toko Kertas" @click="openToko = !openToko"><i class="bi bi-chevron-up"></i></button>
          </div>
        </li>
        <li v-show="openToko" class="p-0 m-0 list-unstyled">
          <ul class="list-unstyled m-0 p-0">
            <li class="profile-nav-item"><NuxtLink to="/semua-kertas#harga-tab-pane" class="profile-nav-link ps-5">Harga Kertas Group</NuxtLink></li>
            <li class="profile-nav-item"><NuxtLink to="/semua-kertas#group-tab-pane" class="profile-nav-link ps-5">Group Kertas</NuxtLink></li>
            <li class="profile-nav-item"><NuxtLink to="/semua-kertas#ukuran-tab-pane" class="profile-nav-link ps-5">Ukuran Kertas</NuxtLink></li>
            <li class="profile-nav-item"><NuxtLink to="/semua-kertas#jenis-tab-pane" class="profile-nav-link ps-5">Jenis Kertas</NuxtLink></li>
          </ul>
        </li>

        <li class="profile-nav-item" :class="{ active: isActive('/pengaturan-keuntungan') }">
          <NuxtLink to="/pengaturan-keuntungan" class="profile-nav-link">Pengaturan Keuntungan</NuxtLink>
        </li>
        <li class="profile-nav-item" :class="{ active: isActive('/support-ticket-kalkulator') || isActive('/support-ticket-detail-kalkulator') }">
          <NuxtLink to="/support-ticket-kalkulator" class="profile-nav-link">Support Ticket</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
