<script setup lang="ts">
const requiredPieces = ref('');
import type { CuttingForm, PaperSizeOption } from '~/composables/usePaperCutting';
const props = defineProps<{ form: CuttingForm; sizes: PaperSizeOption[]; title: string; introduction: string; busy: boolean }>();
const emit = defineEmits<{ calculate: [] }>();
const showSizes = ref(false);
const allSelected = computed(() => props.sizes.length > 0 && props.sizes.every(size => props.form.selected.includes(size.id)));
function toggle(id: number) {
  props.form.selected = props.form.selected.includes(id) ? props.form.selected.filter(value => value !== id) : [...props.form.selected, id];
}
</script>

<template>
  <div>
    <div>
      <h1 class="fs-4">{{ title }}</h1>
      <CommonCalculatorIntroduction page="paper_cutting" :fallback="introduction" />
    </div>
    <div class="mt-5">
      <h3 class="fs-6">Hitung potong kertas</h3>
      <div class="mb-4 row">
        <div class="col-4">
          <label class="form-label" for="jumlah">Satuan Panjang</label>
        </div>
        <div class="col-8" id="unit-1">
          <button class="btn btn-spec me-2" :class="{ selected: form.unit === 'cm' }" @click="form.unit = 'cm'" type="button">
            Centimeter<span class="ribbon" :class="{ 'd-none': form.unit !== 'cm' }"></span>
          </button>
          <button class="btn btn-spec me-2" :class="{ selected: form.unit === 'mm' }" @click="form.unit = 'mm'" type="button">
            Milimeter<span class="ribbon" :class="{ 'd-none': form.unit !== 'mm' }"></span>
          </button>
        </div>
      </div>
      <div class="mb-4 row">
        <div class="col-4">
          <label class="form-label" for="jumlah">Ukuran Potongan</label>
        </div>
        <div class="col-8" id="unit-2">
          <div class="row">
            <div class="col-6">
              <div class="input-group input-group-sm">
                <span class="input-group-text">P</span>
                <input
                  v-model.number="form.cutWidth" class="form-control number-separator"
                  inputmode="decimal"

                  type="text"
                />
                <input class="result-input" id="width-potong" :value="form.cutWidth" type="hidden" />
              </div>
            </div>
            <div class="col-6">
              <div class="input-group input-group-sm">
                <span class="input-group-text">L</span>
                <input
                  v-model.number="form.cutHeight" class="form-control number-separator"
                  inputmode="decimal"

                  type="text"
                />
                <input class="result-input" id="height-potong" :value="form.cutHeight" type="hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 row">
        <div class="col-4">
          <label class="form-label">Pilihan Ukuran Plano</label>
        </div>
        <div class="col-8">
          <div v-if="!form.custom" class="mb-2">
            <a
              class="text-center text-primary"
              @click="showSizes = !showSizes"
              role="button"
              >Lihat ukuran yang tersedia</a
            >
            <div class="mt-2" :class="{ 'd-none': !showSizes }" id="size">
              <button v-for="size in sizes" :key="size.id" class="btn btn-spec me-2" :class="{ selected: form.selected.includes(size.id) }" type="button" @click="toggle(size.id)">
                {{ size.name }}<span class="ribbon" :class="{ 'd-none': !form.selected.includes(size.id) }"></span>
              </button>
            </div>
          </div>
          <div>
            <div v-if="!form.custom" class="multiple-select" id="ukuran-plano">
              <button v-for="size in sizes" :key="size.id" class="btn btn-spec me-2" :class="{ selected: form.selected.includes(size.id) }" type="button" @click="toggle(size.id)">
                {{ size.name }}<span class="ribbon" :class="{ 'd-none': !form.selected.includes(size.id) }"></span>
              </button>
              <button class="btn btn-spec me-2" :class="{ selected: allSelected }" id="select-all-btn" type="button" @click="form.selected = sizes.map(row => row.id)">
                Pilih Semua<span class="ribbon" :class="{ 'd-none': !allSelected }"></span>
              </button>
            </div>
            <div v-else id="ukuran-plano-custom">
              <div class="row">
                <div class="col-6">
                  <div class="input-group input-group-sm">
                    <span class="input-group-text">P</span>
                    <input
                      v-model.number="form.width" class="form-control number-separator"
                      inputmode="decimal"

                      type="text"
                    />
                    <input
                      class="result-input"
                      id="width-plano" :value="form.width"
                      type="hidden"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group input-group-sm">
                    <span class="input-group-text">L</span>
                    <input
                      v-model.number="form.height" class="form-control number-separator"
                      inputmode="decimal"

                      type="text"
                    />
                    <input
                      class="result-input"
                      id="height-plano" :value="form.height"
                      type="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-spec me-2" id="custom-btn" type="button" @click="form.custom = !form.custom">
              {{ form.custom ? 'Cancel' : 'Custom' }}<span class="ribbon d-none"></span>
            </button>
          </div>
        </div>
      </div>
      <div class="mb-4 row">
        <div class="col-4">
          <label class="form-label" for="jumlah"
            >Kebutuhan Potongan (optional)</label
          >
        </div>
        <div class="col-8" id="unit-3">
          <input v-model="requiredPieces" class="form-control number-separator" type="text" inputmode="numeric" />
          <small class="d-none text-standard text-danger" id="info-selected-all"
            ><i class="fa-solid fa-circle-info"></i> please input your
            specification<br
          /></small>
          <div class="mb-4 mt-3">
            <button
              class="btn my-btn-primary btn-block w-100"
              id="btn-hitung" :disabled="busy" @click="emit('calculate')"
              type="button"
            >
              Hitung
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
