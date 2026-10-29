<script setup lang="ts">
import { showActionToast } from '~/utils/actionToast';
import type { MerchantProfile, MerchantAccessState } from '~/composables/useMerchantProfile';
defineProps<{
    merchant: MerchantProfile | null;
    access?: MerchantAccessState;
    busy?: boolean;
}>();
const emit = defineEmits<{
    upload: [
        file: File
    ];
    remove: [
    ];
}>();
const photoError = ref('');
const fileInput = ref<HTMLInputElement | null>(null);
const auth = useAuthStore();
function date(value?: string) { return value ? new Date(value).toLocaleDateString('id-ID') : '-'; }
function choose(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    photoError.value = '';
    if (!file)
        return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 2 * 1024 * 1024) {
        showActionToast('Gunakan JPG, PNG atau WebP, maksimal 2 MB.', 'error');
        return;
    }
    emit('upload', file);
}
</script>

<template>
  <div class="row justify-content-start">
    <h4 class="fs-5 mb-md-5 mb-3">Profile Merchant</h4>
    <div class="col-md-3 col-6">
      <div class="text-center">
        <div class="profile-avatar ratio ratio-4x3">
          <img
            alt="User Avatar"
            class="rounded-circle"
            id="inline-style-profile-merchant-001"
            :src="merchant?.avatar || '/images/tab.png'"
          />
          <div class="profile-avatar-badge" role="button" tabindex="0" aria-label="Ganti logo usaha" :aria-disabled="busy || !merchant || !access?.active" @click="merchant && access?.active && !busy && fileInput?.click()" @keydown.enter="merchant && access?.active && !busy && fileInput?.click()">
            <i class="fas fa-camera"></i><input ref="fileInput" class="d-none" type="file" accept="image/jpeg,image/png,image/webp" :disabled="busy || !merchant || !access?.active" @click.stop @change="choose" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-6">
      <p class="text-standard">ID User {{ auth.user?.id || '-' }}</p>
      <p class="text-standard">
        {{ access?.plan || 'Free User' }} <span class="badge bg-primary">{{ access?.active ? 'Active Member' : 'Upgrade Member' }}</span>
      </p>
      <p class="text-standard">Join {{ date(auth.user?.joinDate) }}</p>
      <p class="text-standard">Active until : {{ date(access?.expiresOn ?? undefined) }}</p>
    </div>
  </div>
</template>
