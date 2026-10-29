<script setup lang="ts">
const profile = useMerchantProfile();
const merchant = computed(() => profile.state.value?.access.active ? profile.state.value.merchant : null);
const brokenImage = ref(false);
watch(() => merchant.value?.avatar, () => { brokenImage.value = false; });
const initials = computed(() => (merchant.value?.name ?? 'Percetakan Anda').split(/\s+/).filter(Boolean).slice(0, 2).map(word => word[0]).join('').toUpperCase());
</script>

<template>
<div>
<div class="d-flex align-items-center my-2">
<div class="me-4 d-flex justify-content-center">
<div class="profile-avatar">
<img v-if="merchant?.avatar && !brokenImage" :alt="`Logo ${merchant.name}`" class="rounded-circle" :src="merchant.avatar" @error="brokenImage = true"/>
<span v-else class="merchant-initials rounded-circle" aria-label="Logo percetakan belum tersedia">{{ initials }}</span>
</div>
</div>
<div>
<h1 class="fs-5 fw-light">{{ merchant?.calculatorTitle || 'Kalkulator Cetak' }}</h1>
<h1 class="fs-5 fw-light">{{ merchant?.name || 'Percetakan Anda' }}</h1>
<h5 class="text-standard">{{ merchant?.address || '' }}</h5>
<h5 class="text-standard mt-2">{{ merchant?.whatsapp || '' }}</h5>
</div>
</div>

</div>
</template>

<style scoped>
.merchant-initials { display: flex; width: 100%; height: 100%; min-width: 80px; min-height: 80px; align-items: center; justify-content: center; background: #f5edf0; color: #922247; font-size: 24px; }
</style>
