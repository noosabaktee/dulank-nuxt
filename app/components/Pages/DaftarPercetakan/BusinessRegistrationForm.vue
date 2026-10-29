<script setup lang="ts">
import { showActionToast } from '~/utils/actionToast';
const profile = useMerchantProfile();
const form = reactive({ name: '', address: '', whatsapp: '', province: '', city: '', district: '' });
const photo = ref<File | null>(null);
const preview = ref('');
const fileInput = ref<HTMLInputElement | null>(null);
const errorMessage = ref('');
const allowed = computed(() => profile.state.value?.access.active && profile.state.value.access.features.includes('merchant_profile'));
function clearPhoto() {
  if (preview.value) URL.revokeObjectURL(preview.value);
  preview.value = ''; photo.value = null;
}
function choose(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0]; input.value = '';
  if (!file) return;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 2 * 1024 * 1024) {
    showActionToast('Gunakan JPG, PNG atau WebP, maksimal 2 MB.', 'error'); return;
  }
  clearPhoto(); photo.value = file; preview.value = URL.createObjectURL(file);
}
onBeforeUnmount(clearPhoto);
async function submit() {
  if (profile.busy.value || !allowed.value) return;
  errorMessage.value = '';
  const body = new FormData();
  body.append('name', form.name.trim()); body.append('address', form.address.trim()); body.append('whatsapp', form.whatsapp.trim());
  body.append('province', form.province); body.append('city', form.city); body.append('district', form.district);
  if (photo.value) body.append('file', photo.value);
  try {
    await profile.register(body);
    showActionToast('Percetakan berhasil didaftarkan.');
    await navigateTo('/profile-merchant');
  } catch (cause: any) {
    if (cause?.statusCode === 409 || cause?.status === 409) { await navigateTo('/profile-merchant'); return; }
    const errors = cause?.data?.errors;
    errorMessage.value = (errors ? Object.values(errors).flat()[0] : null) as string || cause?.data?.message || 'Data belum tersimpan. Silakan coba lagi.';
  }
}
</script>

<template>
  <section class="text-standard">
    <h1 class="fs-4 mb-2">Daftarkan Percetakan Anda</h1>
    <p class="text-muted mb-4">Lengkapi data percetakan terlebih dahulu untuk mulai menggunakan fitur kalkulator.</p>
    <p v-if="profile.pending.value" role="status">Memuat akun...</p>
    <div v-else-if="profile.error.value" class="alert alert-warning" role="alert">Data akun belum dapat dimuat. <button class="btn" type="button" @click="profile.refresh()">Coba lagi</button></div>
    <template v-else>
      <p v-if="!allowed" class="alert alert-warning" role="status">Anda tetap dapat berbelanja sebagai pembeli. Untuk mendaftarkan percetakan dan memakai kalkulator, aktifkan langganan terlebih dahulu melalui administrator.</p>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <label class="form-label" for="merchant-photo">Foto Profil Percetakan <span class="text-muted">(opsional)</span></label>
          <div class="d-flex align-items-center gap-3">
            <img v-if="preview" :src="preview" alt="Preview foto percetakan" class="rounded-circle registration-photo" />
            <div v-else class="rounded-circle registration-placeholder" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 4 7 7H3v13h18V7h-4l-2-3Z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <div>
              <input ref="fileInput" id="merchant-photo" type="file" class="d-none" accept="image/jpeg,image/png,image/webp" :disabled="profile.busy.value || !allowed" @change="choose" />
              <button type="button" class="btn btn-outline-secondary" :disabled="profile.busy.value || !allowed" @click="fileInput?.click()">Pilih Foto</button>
              <button v-if="photo" type="button" class="btn text-danger" :disabled="profile.busy.value" @click="clearPhoto">Hapus</button>
              <small class="d-block text-muted mt-2">JPG, PNG atau WebP, maksimal 2 MB.</small>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="merchant-name" class="form-label">Nama Percetakan</label>
          <input id="merchant-name" v-model="form.name" class="form-control" type="text" maxlength="255" required :disabled="profile.busy.value || !allowed" autocomplete="organization" />
        </div>
        <div class="mb-3">
          <label for="merchant-address" class="form-label">Alamat Percetakan</label>
          <CommonRegionAddressInput :form="form" input-id="merchant-address" id-prefix="registration" required :disabled="profile.busy.value || !allowed" />
        </div>
        <div class="mb-4">
          <label for="merchant-whatsapp" class="form-label">Nomor WhatsApp</label>
          <input id="merchant-whatsapp" v-model="form.whatsapp" class="form-control" type="tel" maxlength="30" required :disabled="profile.busy.value || !allowed" placeholder="08xxxxxxxxxx atau +628xxxxxxxxxx" autocomplete="tel" />
        </div>
        <p v-if="errorMessage" role="alert" class="text-danger">{{ errorMessage }}</p>
        <div class="d-flex align-items-center gap-3">
          <button type="submit" class="btn my-btn-primary" :disabled="profile.busy.value || !allowed">{{ profile.busy.value ? 'Menyimpan...' : 'Daftarkan Percetakan' }}</button>
          <NuxtLink to="/product-list">Kembali berbelanja</NuxtLink>
        </div>
      </form>
    </template>
  </section>
</template>

<style scoped>
.registration-photo, .registration-placeholder { width: 88px; height: 88px; flex-shrink: 0; object-fit: cover; }
.registration-placeholder { display: flex; align-items: center; justify-content: center; background: #f5edf0; color: #922247; }
</style>
