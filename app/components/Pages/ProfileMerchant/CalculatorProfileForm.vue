<script setup lang="ts">
import type { MerchantProfile } from '~/composables/useMerchantProfile';
const props = defineProps<{ merchant: MerchantProfile | null; busy?: boolean }>();
const emit = defineEmits<{ save: [form: Partial<MerchantProfile>] }>();
const form = reactive<Partial<MerchantProfile>>({ type: 'printing_shop', name: '', province: '', city: '', district: '', address: '', whatsapp: '', calculatorTitle: 'Kalkulator Cetak', displayOn: ['paper_cutting', 'paper_weight'] });
watch(() => props.merchant, value => { if (value) Object.assign(form, value); }, { immediate: true });
const displays = [{ key: 'paper_weight', label: 'Header Hitung Berat Kertas' }, { key: 'paper_cutting', label: 'Header Potong Kertas' }, { key: 'printing', label: 'Header Kalkulator Percetakan' }];
function toggleDisplay(key: string) { form.displayOn = form.displayOn?.includes(key) ? form.displayOn.filter(value => value !== key) : [...(form.displayOn ?? []), key]; }
</script>

<template>
  <div class="text-standard mt-5">
    <div class="row mb-4">
      <div class="col-4">
        <label class="form-label" for="lots-print">Judul</label>
      </div>
      <div class="col-8">
        <input
          class="form-control"
          id="title"
          placeholder="your title"
          type="text"
          v-model="form.calculatorTitle" :disabled="busy"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-4">
        <label class="form-label" for="lots-print">Nama Percetakan</label>
      </div>
      <div class="col-8">
        <input
          class="form-control"
          id="name"
          placeholder="your name"
          type="text"
          v-model="form.name" :disabled="busy"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-4">
        <label class="form-label" for="alamat-lengkap">Alamat</label>
      </div>
      <div class="col-8">
        <div>
          <CommonRegionAddressInput :form="form" :disabled="busy" />
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-4">
        <label class="form-label" for="lots-print">Whatsapp</label>
      </div>
      <div class="col-8">
        <input
          class="form-control"
          id="wa"
          placeholder="your whatsapp number"
          type="text"
          v-model="form.whatsapp" :disabled="busy"
        />
      </div>
    </div>
    <div class="mb-4 row">
      <div class="col-4">
        <label class="form-label" for="jumlah">Tampilkan Profile pada</label>
      </div>
      <div class="col-8 multiple-select" id="display">
        <button v-for="display in displays" :key="display.key" class="btn btn-spec me-2" :class="{ selected: form.displayOn?.includes(display.key) }" type="button" :disabled="busy" @click="toggleDisplay(display.key)">
          {{ display.label }}<span class="ribbon" :class="{ 'd-none': !form.displayOn?.includes(display.key) }"></span>
        </button>
        <br />
        <div class="mt-5">
          <small class="d-none text-standard text-danger" id="info-selected-all"
            ><i class="fa-solid fa-circle-info"></i> please select your
            specification<br
          /></small>
          <button
            class="btn my-btn-primary w-100 mt-2"
            id="update-btn" :disabled="busy" @click="emit('save', { ...form })"
            type="button"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
