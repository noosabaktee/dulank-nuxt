<script setup lang="ts">
import type { ProductPageSpecGroup } from "#server/types/product-page";

const props = defineProps<{ specs: ProductPageSpecGroup[] }>();

interface SpecGroupWithCustom extends ProductPageSpecGroup {
  hasCustom?: boolean;
}

const visibleSpecs = computed<SpecGroupWithCustom[]>(() =>
  props.specs.map((spec) => ({
    ...spec,
    hasCustom: spec.id === "content" || spec.id === "size",
  })),
);
</script>

<template>
  <div class="col-lg-7 mb-4 mb-md-0 ps-md-4 mt-5 mt-md-0">
    <h1 class="fs-4 mb-md-4 bg-light p-3 title">Tentukan Spesifikasi</h1>

    <div class="sorting-nav">
      <p class="nav-product fw-bold" role="button">Kalender Dinding</p>
      <p class="nav-product fw-light" role="button">Kalender Meja</p>
      <p class="nav-product fw-light" role="button">Kalender Spiral</p>
      <p class="nav-product fw-light" role="button">Kalender Bolak Balik</p>
    </div>
    <p class="text-standard" id="spec-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, harum
      repudiandae nihil sint obcaecati consequuntur veniam dignissimos saepe
      nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore
      consectetur!
    </p>
    <form id="specForm">
      <div v-for="spec in visibleSpecs" :key="spec.id" class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">{{ spec.label }}</label>
          </div>
          <div v-if="spec.hasCustom" class="col-9">
            <div class="d-inline list-spec" :id="spec.id">
              <label
                v-for="option in spec.options"
                :key="option.value"
                class="btn text-standard btn-spec me-2 mb-2"
                :class="{ selected: option.selected, 'd-none': option.hidden }"
                :data-price="option.price ?? undefined"
              >
                <input
                  :checked="option.selected"
                  class="visually-hidden spec-input"
                  :name="spec.name ?? undefined"
                  type="radio"
                  :value="option.value"
                />{{ option.label }}<span
                  class="ribbon"
                  :class="{ 'd-none': !option.selected }"
                ></span>
              </label>
            </div>
            <div v-if="spec.id === 'content'" class="d-flex d-none mb-2" id="custom-content">
              <div class="input-group" id="inline-style-kalender-001">
                <input
                  class="form-control rounded-0 text-standard number-separator custom-content-input"
                  data-js-input="kalender-001"
                  id="contentCustomInput"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  placeholder="Jumlah isi"
                  type="text"
                />
                <input
                  class="result-input"
                  id="contentCustomValue"
                  type="hidden"
                />
                <span class="input-group-text rounded-0 text-standard"
                  >Lembar</span
                >
              </div>
            </div>
            <div v-if="spec.id === 'size'" class="d-flex d-none mb-2" id="custom-size">
              <div class="flex-fill me-2">
                <input
                  class="text-standard form-control rounded-0 number-separator"
                  data-js-input="kalender-002"
                  id="widthSize"
                  inputmode="numeric"
                  min="0"
                  pattern="[0-9]*"
                  placeholder="Width"
                  type="text"
                />
                <input
                  class="result-input"
                  id="widthSizeValue"
                  type="hidden"
                />
              </div>
              <div class="flex-fill me-2">
                <input
                  class="text-standard form-control rounded-0 number-separator"
                  data-js-input="kalender-003"
                  id="heightSize"
                  inputmode="numeric"
                  min="0"
                  pattern="[0-9]*"
                  placeholder="Height"
                  type="text"
                />
                <input
                  class="result-input"
                  id="heightSizeValue"
                  type="hidden"
                />
              </div>
              <select
                aria-label="Default select example"
                class="form-select w-auto rounded-0 text-standard"
                data-js-change="kalender-004"
                id="unit"
              >
                <option value="cm">centimeter</option>
                <option value="mm">milimeter</option>
              </select>
            </div>
            <small class="d-none text-standard text-danger" id="info-custom"
              ><i class="fa-solid fa-circle-info"></i> Min Max</small
            >
            <button
              v-if="spec.id === 'content'"
              class="btn btn-spec custom-content-btn d-md-inline d-block"
              data-navs="Kalender Dinding|Kalender Meja"
              type="button"
            >
              Custom</button
            >
            <button
              v-if="spec.id === 'size'"
              class="btn btn-spec custom-size-btn d-md-inline d-block"
              type="button"
            >
              Custom</button
            ><br />
          </div>
          <div v-else class="col-9 list-spec" :id="spec.id">
            <label
              v-for="option in spec.options"
              :key="option.value"
              class="btn text-standard btn-spec me-2 mb-2"
              :class="{ selected: option.selected, 'd-none': option.hidden }"
              :data-price="option.price ?? undefined"
            >
              <input
                :checked="option.selected"
                class="visually-hidden spec-input"
                :name="spec.name ?? undefined"
                type="radio"
                :value="option.value"
              />{{ option.label }}<span
                class="ribbon"
                :class="{ 'd-none': !option.selected }"
              ></span>
            </label>
          </div>
        </div>
      </div>

      <small class="d-none text-standard text-danger" id="info-selected-all"
        ><i class="fa-solid fa-circle-info"></i> please select your
        specification<br
      /></small>
      <button
        class="btn my-btn-primary rounded-0 w-100"
        id="btnHitung"
        type="button"
      >
        Hitung Harga
      </button>
    </form>
  </div>
</template>