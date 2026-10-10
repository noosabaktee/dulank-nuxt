<script setup lang="ts">
import type { CartItem } from "#server/types/cart";

defineProps<{ cartItems: CartItem[] }>();
</script>

<template>
  <div class="col-lg-8">
    <h1 class="fs-5">Your Cart</h1>

    <div
      v-for="(item, index) in cartItems"
      :key="item.id"
      class="card-product-list save-item"
    >
      <div class="align-items-center my-3">
        <div class="d-flex">
          <div class="me-2">
            <img
              :alt="item.name"
              class="object-fit-cover rounded-2"
              height="64"
              :src="item.image"
              width="64"
            />
          </div>
          <div class="ms-md-1 w-100">
            <div class="desc">
              <div class="text-secondary text-standard">{{ item.spec }}</div>
              <div class="title row mt-1">
                <div class="col-3">
                  <span class="text-standard">Job Name</span>
                </div>
                <div class="col">
                  <input class="input-edit p-0 fw-semibold d-none" type="text" />
                  <span class="job-name fw-semibold">{{ item.name }}</span>
                  <span
                    class="text-standard fst-italic text-primary job-name-btn ms-2"
                    role="button"
                    style="cursor: pointer"
                    >Edit <i class="fa-solid fa-pen-to-square ms-1"></i
                  ></span>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div>
                <div class="row my-2">
                  <div class="col-3">
                    <label class="custom-label text-standard">Art Work</label>
                  </div>
                  <div class="col">
                    <div class="d-inline">
                      <button
                        class="btn btn-spec me-2 selected"
                        data-design-link-action="hide"
                        :data-js-click="`next-${index * 2 + 1}`"
                        type="button"
                      >
                        Belum ada design<span class="ribbon"></span>
                      </button>
                      <button
                        class="btn btn-spec me-2"
                        data-design-link-action="show"
                        :data-js-click="`next-${index * 2 + 2}`"
                        type="button"
                      >
                        Ada file ready to print<span
                          class="ribbon d-none"
                        ></span>
                      </button>
                    </div>
                    <input
                      class="form-control mt-2 d-none design-link-input"
                      placeholder="Masukkan link design"
                      type="text"
                    />
                  </div>
                </div>

                <div class="row my-2">
                  <div class="col-3">
                    <label class="custom-label text-standard">Hasil Cetak</label>
                  </div>
                  <div class="col">
                    <div class="d-inline">
                      <button class="btn btn-spec me-2 selected" type="button">
                        Warna Standard CMYK<span class="ribbon"></span>
                      </button>
                      <button class="btn btn-spec me-2" type="button">
                        Warna sesuai sampel<span class="ribbon d-none"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="row my-2">
                  <div class="col-3">
                    <label class="custom-label text-standard">Note</label>
                  </div>
                  <div class="col">
                    <input
                      class="form-control text-standard mt-2"
                      placeholder="Note (opsional)"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
