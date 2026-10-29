<script setup lang="ts">
definePageMeta({ middleware: 'auth' });
useLegacyPage({ title: 'Profile Merchant', styles: ['/css/style.css', '/css/pages/profile-merchant-inline.css'], scripts: [], sweetAlert: false });
const profile = useMerchantProfile();
const route = useRoute();
async function save(form: any) { try {
    await profile.save(form);
}
catch { } }
async function upload(file: File) { try {
    await profile.uploadLogo(file);
}
catch { } }
async function remove() { try {
    await profile.removeLogo();
}
catch { } }
</script>

<template>
  <div class="dulank-page dulank-page-profile-merchant">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4">
            <CalculatorSidebar />
          </div>
          <div class="col-lg-9">
            <p v-if="profile.pending.value">Memuat profil...</p>
            <div v-else-if="profile.error.value" role="alert">
              Profil belum dapat dimuat.
              <button type="button" class="btn" @click="profile.refresh()">Coba lagi</button>
            </div>
            <template v-else>
              <p v-if="route.query.access === 'restricted'" class="alert alert-warning">Fitur kalkulator memerlukan langganan aktif dengan akses yang sesuai. Hubungi administrator untuk aktivasi atau perpanjangan.</p>
              <PagesProfileMerchantCalculatorProfileHeader :merchant="profile.state.value?.merchant ?? null" :access="profile.state.value?.access" :busy="profile.busy.value" @upload="upload" @remove="remove" />
              <p v-if="!profile.state.value?.access.active" class="alert alert-warning">Langganan Anda belum aktif atau sudah berakhir. Hubungi administrator untuk aktivasi/perpanjangan. Profil yang tersimpan tetap aman.</p>
              <PagesProfileMerchantCalculatorProfileForm v-if="profile.state.value?.access.features.includes('merchant_profile')" :merchant="profile.state.value?.merchant ?? null" :busy="profile.busy.value" @save="save" />
            </template>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
