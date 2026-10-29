<script setup lang="ts">
import type { RegionAddressValue } from '~/composables/useMerchantRegionPicker';
const props = withDefaults(defineProps<{ form: RegionAddressValue; disabled?: boolean; required?: boolean; inputId?: string; idPrefix?: string }>(), { inputId: 'alamat-lengkap', idPrefix: '' });
const picker = useMerchantRegionPicker(props.form);
const addressField = ref<HTMLElement | null>(null);
const id = (value: string) => props.idPrefix ? `${props.idPrefix}-${value}` : value;
function search(event: Event) {
  if (props.disabled) return;
  const value = (event.target as HTMLInputElement).value;
  if (!value) { picker.clear(); return; }
  picker.query.value = value; picker.open.value = true;
}
function clear() { if (!props.disabled) picker.clear(); }
function choose(row: { id: number; name: string }, level: number) { if (!props.disabled) picker.choose(row, level); }
function closeAddress(event: Event) {
  if (event.target instanceof Node && !addressField.value?.contains(event.target)) picker.open.value = false;
}
watch(() => props.disabled, value => { if (value) picker.open.value = false; });
onMounted(() => document.addEventListener('pointerdown', closeAddress));
onBeforeUnmount(() => document.removeEventListener('pointerdown', closeAddress));
</script>

<template>
<div ref="addressField" class="form-group position-relative region-address">
            <div
              class="input-group position-relative d-inline-flex align-items-center"
            >
              <input
                class="form-control text-standard"
                :id="inputId" v-model="form.address" :disabled="disabled" :required="required" maxlength="255" :aria-expanded="picker.open.value" :aria-controls="id('alamat-dropdown-wrapper')" autocomplete="off" @focus="picker.open.value = true" @input="search" @keydown.esc="picker.open.value = false"
                placeholder="Provinsi, Kota, Kecamatan"
              />
              <span
                :id="id('clear-address')" class="address-clear position-absolute bg-secondary text-white rounded-circle d-flex align-items-center" :class="{ 'd-none': !form.address }" role="button" tabindex="0" :aria-disabled="disabled" aria-label="Hapus alamat" @click="clear" @keydown.enter.prevent="clear"
              >
                <i class="bi bi-x-lg m-auto"></i>
              </span>
              <span :id="id('search-icon')" class="address-search position-absolute" :class="{ 'd-none': !!form.address }">
                <i class="bi bi-search"></i>
              </span>
            </div>
            <div :id="id('alamat-dropdown-wrapper')" class="address-dropdown" :style="{ display: picker.open.value ? 'block' : 'none' }">
              <ul class="nav nav-tabs" :id="id('alamatTab')" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="btn rounded-0 border-top-0 border-start-0 border-end-0 text-standard"
                    :id="id('provinsi-tab')" :class="{ active: picker.tab.value === 0 }" @click="picker.tab.value = 0; picker.query.value = ''"
                    :disabled="disabled" role="tab"
                    type="button"
                  >
                    Provinsi
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="btn rounded-0 border-top-0 border-start-0 border-end-0 text-standard"
                    :id="id('kota-tab')" :class="{ active: picker.tab.value === 1 }" @click="picker.tab.value = 1; picker.query.value = ''"
                    :disabled="disabled" role="tab"
                    type="button"
                  >
                    Kota
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="btn rounded-0 border-top-0 border-start-0 border-end-0 text-standard"
                    :id="id('kecamatan-tab')" :class="{ active: picker.tab.value === 2 }" @click="picker.tab.value = 2; picker.query.value = ''"
                    :disabled="disabled" role="tab"
                    type="button"
                  >
                    Kecamatan
                  </button>
                </li>
              </ul>
              <div class="tab-content p-2 shadow-sm address-options" :id="id('alamatTabContent')">
                <div class="tab-pane" :id="id('provinsi-pane')" :class="{ 'show active': picker.tab.value === 0 }">
                  <ul
                    class="list-unstyled mb-0 text-standard"
                    :id="id('provinsi-list')"
                  ><li v-for="row in picker.lists.value[0]" :key="row.id" role="button" tabindex="0" @click="choose(row, 0)" @keydown.enter.prevent="choose(row, 0)">{{ row.name }}</li><li v-if="picker.pending.value">Memuat...</li><li v-else-if="picker.error.value">Wilayah belum dapat dimuat.</li><li v-else-if="!picker.lists.value[0]?.length">Data wilayah belum tersedia.</li></ul>
                </div>
                <div class="tab-pane" :id="id('kota-pane')" :class="{ 'show active': picker.tab.value === 1 }">
                  <ul
                    class="list-unstyled mb-0 text-standard"
                    :id="id('kota-list')"
                  ><li v-for="row in picker.lists.value[1]" :key="row.id" role="button" tabindex="0" @click="choose(row, 1)" @keydown.enter.prevent="choose(row, 1)">{{ row.name }}</li><li v-if="picker.pending.value">Memuat...</li><li v-else-if="picker.error.value">Wilayah belum dapat dimuat.</li><li v-else-if="!picker.lists.value[1]?.length">Data wilayah belum tersedia.</li></ul>
                </div>
                <div class="tab-pane" :id="id('kecamatan-pane')" :class="{ 'show active': picker.tab.value === 2 }">
                  <ul
                    class="list-unstyled mb-0 text-standard"
                    :id="id('kecamatan-list')"
                  ><li v-for="row in picker.lists.value[2]" :key="row.id" role="button" tabindex="0" @click="choose(row, 2)" @keydown.enter.prevent="choose(row, 2)">{{ row.name }}</li><li v-if="picker.pending.value">Memuat...</li><li v-else-if="picker.error.value">Wilayah belum dapat dimuat.</li><li v-else-if="!picker.lists.value[2]?.length">Data wilayah belum tersedia.</li></ul>
                </div>
              </div>
              <div class="p-2 address-search-results" :id="id('alamat-search-result')">
                <ul
                  class="list-unstyled mb-0 text-standard fw-light"
                  :id="id('alamat-search-list')"
                ></ul>
              </div>
            </div>
          </div>
</template>

<style scoped>
.address-clear { width: 18px; height: 18px; font-size: 8px; right: 10px; cursor: pointer; z-index: 100; }
.address-search { width: 16px; height: 16px; font-size: 12px; right: 10px; z-index: 99; pointer-events: none; }
.address-dropdown { position: absolute; width: 100%; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,.08); border-radius: 8px; z-index: 1000; }
.address-options { position: absolute; width: 100%; background: #fff; z-index: 1000; max-height: 220px; overflow-y: auto; }
.address-dropdown .nav-item { padding: 0; }
.address-dropdown .nav-item .btn { min-width: 100px; text-align: center; padding: 13px 0; }
.address-dropdown .btn.active { font-weight: 600; color: var(--primary-color); border-bottom: 2px solid var(--primary-color); }
.address-dropdown ul li { padding: 6px 8px; cursor: pointer; border-radius: 4px; }
.address-dropdown ul li:hover { background: #f5f5f5; }
.address-search-results { display: none; }
@media (max-width: 768px) { .address-dropdown .nav-item .btn { min-width: 90px; } }
</style>
