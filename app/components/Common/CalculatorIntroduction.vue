<script setup lang="ts">
import { showActionToast } from '~/utils/actionToast';
const props = defineProps<{ page: 'paper_cutting' | 'paper_weight' | 'printing'; fallback: string }>();
const profile = useMerchantProfile();
const editing = ref(false);
const draft = ref('');
const text = computed(() => profile.state.value?.merchant?.introductions?.[props.page] ?? props.fallback);
const canEdit = computed(() => !!profile.state.value?.merchant && profile.state.value.access.active && profile.state.value.access.features.includes('merchant_profile'));
watch(() => profile.state.value?.merchant?.id, () => { editing.value = false; draft.value = ''; });
function edit() { draft.value = text.value; editing.value = true; }
async function save() {
  if (profile.busy.value || !canEdit.value) return;
  try {
    await profile.saveIntroduction(props.page, draft.value);
    editing.value = false;
    showActionToast('Teks pengantar berhasil disimpan.');
  } catch { /* Request toast displays validation or access errors; keep the draft. */ }
}
</script>

<template>
  <p v-if="!editing || !canEdit" class="text-muted text-standard calculator-introduction">
    <span>{{ text }}</span>
    <button v-if="canEdit" type="button" class="edit-introduction" aria-label="Ubah teks pengantar" title="Ubah teks pengantar" @click="edit">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m16 3 5 5M3 21l5-1L21 7a2.1 2.1 0 0 0-4-4L4 16l-1 5Z"/></svg>
      <span v-if="!text">Tambah pengantar</span>
    </button>
  </p>
  <form v-else class="mb-3" @submit.prevent="save" @keydown.esc.prevent="editing = false">
    <label class="text-standard" :for="`introduction-${page}`">Teks pengantar</label>
    <textarea :id="`introduction-${page}`" v-model="draft" class="form-control text-standard mt-2" rows="4" maxlength="10000" :disabled="profile.busy.value" autofocus />
    <div class="d-flex gap-2 mt-2">
      <button type="submit" class="btn my-btn-primary" :disabled="profile.busy.value">{{ profile.busy.value ? 'Menyimpan...' : 'Simpan' }}</button>
      <button type="button" class="btn btn-outline-secondary" :disabled="profile.busy.value" @click="editing = false">Batal</button>
    </div>
  </form>
</template>

<style scoped>
.calculator-introduction > span { white-space: pre-line; }
.edit-introduction { display: inline-flex; align-items: center; gap: 5px; margin-left: 6px; padding: 3px; border: 0; background: transparent; color: #922247; cursor: pointer; vertical-align: middle; }
.edit-introduction:focus-visible { outline: 2px solid #922247; outline-offset: 2px; }
</style>
