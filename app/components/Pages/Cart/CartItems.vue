<script setup lang="ts">
import type { CartItem } from "#server/types/cart";
import { formatRupiah } from "~/utils/currency";

defineProps<{ cartItems: CartItem[] }>();
</script>

<template>
  <div class="col-lg-8">
    <h1 class="fs-5">Your Cart</h1>
    <div
      v-for="item in cartItems"
      :key="item.id"
      class="card-product-list save-item"
    >
      <div class="align-items-center my-3">
        <div class="d-flex">
          <div class="me-3">
            <input class="fs-4 form-check-input border-3" type="checkbox" />
          </div>
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
              <span class="fw-semibold">{{ item.name }}</span>
              <div v-if="item.spec" class="text-secondary text-standard">
                {{ item.spec }}
              </div>
              <div class="text-standard">
                Rp<span class="price">{{ formatRupiah(item.price) }}</span>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div
                class="mt-2 mt-md-0 text-center d-inline-block justify-content-between"
              >
                <div
                  class="d-flex mb-2 justify-md-content-center justify-content-end"
                >
                  <button class="quantity-btn quantity-minus" type="button">
                    &#8722;
                  </button>
                  <input
                    class="quantity-input number-separator form-control"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                    :value="item.quantity"
                  />
                  <input
                    class="quantity result-input"
                    type="hidden"
                    :value="item.quantity"
                  />
                  <button class="quantity-btn quantity-plus" type="button">
                    +
                  </button>
                </div>
                <span class="fw-semibold text-dark total-item"
                  >Rp{{ formatRupiah(item.price * item.quantity) }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end mt-4">
          <div class="d-flex">
            <h5
              class="mx-2 d-flex align-items-center add-wishlist-btn"
              role="button"
            >
              <i class="bi bi-heart me-2 my-text-primary"></i
              ><span class="text-standard my-text-primary"
                >Add to Wishlist</span
              >
            </h5>
          </div>
          <h5
            class="mx-2 d-flex align-items-center btn-remove-save"
            role="button"
          >
            <i class="bi bi-trash me-2 my-text-primary"></i
            ><span class="text-standard my-text-primary">Remove</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
