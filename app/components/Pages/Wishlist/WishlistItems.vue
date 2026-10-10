<script setup lang="ts">
import type { WishlistEntry } from "#server/types/wishlist";
import { formatRupiah } from "~/utils/currency";

defineProps<{ wishlistItems: WishlistEntry[] }>();

function isExpired(item: WishlistEntry) {
  if (typeof item.expired === "boolean") return item.expired;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const expireDate = item.expireDate;
  const date = new Date(expireDate);
  date.setHours(0, 0, 0, 0);
  return date < today;
}
</script>

<template>
  <template v-for="item in wishlistItems" :key="item.id">
    <div class="card-product-list">
      <div
        v-if="isExpired(item)"
        class="d-flex align-items-start gap-2"
      >
        <span class="text-standard text-muted my-2 d-block">
          <i class="fa-solid fa-circle-info me-2"></i>
          Produk yang anda simpan sudah terlalu lama, silahkan update harga
          dengan mengirimkan produk ini ke dalam cart-keranjang
        </span>
      </div>

      <div class="justify-content-between">
        <div class="align-items-start">
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
              <div class="d-md-flex align-items-center">
                <div class="me-md-5">
                  <div class="fw-light text-standard float-end">
                    <span class="text-standard" v-if="isExpired(item)">Expired</span>
                    <span class="text-standard" v-else>Expire until {{ item.expireDate }}</span>
                  </div>
                  <div class="fw-semibold text-color small">{{ item.name }}</div>
                  <div class="text-secondary text-standard">{{ item.spec }}</div>
                </div>
                <div
                  class="me-md-5 mt-2 mt-md-0 text-md-center d-flex d-md-inline-block justify-content-between"
                >
                  <span class="fw-semibold text-dark total-item"
                    >Rp{{ formatRupiah(item.price) }}</span
                  >
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-2 mt-md-4">
              <h5 class="mx-2 align-items-center add-cart-btn" role="button">
                <i class="bi bi-cart3 me-2 my-text-primary"></i
                ><span class="text-standard my-text-primary">Add to cart</span>
              </h5>
              <h5 class="mx-2 align-items-center btn-remove-save" role="button">
                <i class="bi bi-trash me-2 my-text-primary"></i
                ><span class="text-standard my-text-primary">Remove</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
