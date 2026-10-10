<script setup lang="ts">
import type { Quotation } from "~/composables/useQuotations";

defineProps<{ quotation: Quotation }>();

const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
</script>

<template>
  <div class="px-2 px-md-0">
    <div>
      <div class="row my-3 my-bg-primary h-100 text-white">
        <div class="col-1 col-md-3 py-2 d-md-flex">
          <span class="text-standard my-auto w-25">No</span>
          <span class="text-standard my-auto d-md-inline-block d-none w-75">
            Qty
          </span>
        </div>
        <div class="col-11 col-md-5 py-2 ps-md-0 ps-4">
          <p class="text-standard my-auto">Product</p>
        </div>
        <div class="col-3 d-none d-md-inline-block">
          <div class="row">
            <div class="col-6 py-2">
              <p class="text-standard my-auto">Price</p>
            </div>
            <div class="col-6 py-2">
              <p class="text-standard my-auto">Amount</p>
            </div>
          </div>
        </div>
        <div class="col-1 py-2 text-center d-none d-md-inline-block">
          <p class="text-standard my-auto">Action</p>
        </div>
      </div>
    </div>

    <div>
      <div
        v-for="(item, index) in quotation.items"
        :key="item.productId"
        class="row my-3"
      >
        <div class="col-1 col-md-3 d-md-flex">
          <div class="w-25">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="d-md-flex w-75 d-none">
            <button class="quantity-btn quantity-minus" type="button">−</button>
            <input
              class="quantity-input w-50"
              min="1"
              readonly
              type="number"
              :value="item.quantity"
            />
            <button class="quantity-btn quantity-plus" type="button">+</button>
          </div>
        </div>
        <div
          class="d-md-flex col-11 col-md-5 justify-content-md-between d-flex ps-md-0 ps-4"
        >
          <img
            :alt="item.name"
            class="object-fit-cover rounded-2"
            height="64"
            src="/images/yasin.jpg"
            width="64"
          />
          <div class="ms-3">
            <div class="fw-semibold text-color small">
              {{ item.name }}
              <span
                class="text-standard fst-italic text-primary"
                data-bs-target="#jobModal"
                data-bs-toggle="modal"
                role="button"
              >
                Your Job Name <i class="fa-solid fa-pen-to-square"></i>
              </span>
            </div>
            <div class="text-secondary text-standard">
              {{ item.spec }}
            </div>
            <div class="d-md-none d-flex mx-auto my-2">
              <button class="quantity-btn quantity-minus" type="button">
                −
              </button>
              <input
                class="quantity-input w-50"
                min="1"
                readonly
                type="number"
                :value="item.quantity"
              />
              <button class="quantity-btn quantity-plus" type="button">
                +
              </button>
            </div>
            <span class="fw-semibold d-md-none text-dark total-item">
              {{ money(item.total) }}
            </span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="row">
            <div class="col-md-6 mt-2 mt-md-0">
              <span
                class="fw-semibold d-md-inline-block d-none text-dark total-item"
              >
                {{ money(item.unitPrice) }}
              </span>
            </div>
            <div class="col-md-6 mt-2 mt-md-0 text-md-start text-end">
              <span class="fw-semibold text-dark total-item">
                {{ money(item.total) }}
              </span>
            </div>
          </div>
        </div>
        <div
          class="col-md-1 text-md-center text-end justify-content-end mt-2 mt-md-0"
        >
          <h4 class="mx-2 btn-remove-save" role="button">
            <i class="bi bi-trash"></i>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
