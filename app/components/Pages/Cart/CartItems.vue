<script setup lang="ts">
import type { CartItem } from "#server/types/cart";
import { formatRupiah } from "~/utils/currency";

const props = defineProps<{ cartItems: CartItem[] }>();

const cart = useCartStore();
const wishlist = useWishlistStore();

function parseQty(raw: string): number {
  const digits = raw.replace(/[^\d]/g, "");
  return Math.max(Number(digits) || 1, 1);
}

let qtyTimer: ReturnType<typeof setTimeout> | undefined;

// Legacy `save.js` memformat input via easyNumberSeparator; kita cukup
// menyinkronkan nilai numerik ke store (debounce) saat `input` terjadi.
function onQuantityInput(item: CartItem, event: Event) {
  const raw = (event.target as HTMLInputElement).value;
  const qty = parseQty(raw);
  clearTimeout(qtyTimer);
  qtyTimer = setTimeout(() => {
    if (qty !== item.quantity) {
      cart.updateQuantity(item.id, qty).catch(() => {});
    }
  }, 400);
}

// Tombol +/−: tiru perilaku legacy (ubah nilai + dispatch input) supaya
// easyNumberSeparator tetap memformat; sinkronisasi store lewat onQuantityInput.
function onStep(item: CartItem, delta: number, event: Event) {
  const input = (event.currentTarget as HTMLElement)
    .closest(".quantity-btn")
    ?.parentElement?.querySelector(".quantity-input") as HTMLInputElement | null;
  if (!input) return;
  const next = Math.max(parseQty(input.value) + delta, 1);
  input.value = String(next);
  input.dispatchEvent(new Event("input"));
}

function fadeOut(el: HTMLElement | null) {
  if (!el) return;
  el.style.transition = "opacity 0.3s ease";
  el.style.opacity = "0";
  setTimeout(() => el.remove(), 300);
}

function onRemove(item: CartItem, event: Event) {
  // Block handler legacy `save.js` (double-handling) — store yang memproses.
  event.stopImmediatePropagation();
  const row = (event.currentTarget as HTMLElement).closest(
    ".card-product-list",
  ) as HTMLElement | null;
  fadeOut(row);
  cart.remove(item.id).catch(() => {});
  // Parity snackbar legacy `sweetDelete()`.
  (window as any).sweetDelete?.();
}

async function onToggleWishlist(item: CartItem, event: Event) {
  event.stopImmediatePropagation();
  await wishlist.toggle({ productId: item.productId, spec: item.spec });
}
</script>

<template>
  <div class="col-lg-8">
    <h1 class="fs-5">Your Cart</h1>
    <div
      v-for="item in props.cartItems"
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
                  <button
                    class="quantity-btn quantity-minus"
                    type="button"
                    @click="onStep(item, -1, $event)"
                  >
                    &#8722;
                  </button>
                  <input
                    class="quantity-input number-separator form-control"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                    :value="formatRupiah(item.quantity)"
                    @input="onQuantityInput(item, $event)"
                  />
                  <input
                    class="quantity result-input"
                    type="hidden"
                    :value="item.quantity"
                  />
                  <button
                    class="quantity-btn quantity-plus"
                    type="button"
                    @click="onStep(item, 1, $event)"
                  >
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
              @click="onToggleWishlist(item, $event)"
            >
              <i
                :class="[
                  'bi',
                  wishlist.has(item.productId, item.spec)
                    ? 'bi-heart-fill'
                    : 'bi-heart',
                  'me-2',
                  'my-text-primary',
                ]"
              ></i
              ><span class="text-standard my-text-primary"
                >Add to Wishlist</span
              >
            </h5>
          </div>
          <h5
            class="mx-2 d-flex align-items-center btn-remove-save"
            role="button"
            @click="onRemove(item, $event)"
          >
            <i class="bi bi-trash me-2 my-text-primary"></i
            ><span class="text-standard my-text-primary">Remove</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>