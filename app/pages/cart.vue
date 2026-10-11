<script setup lang="ts">
// Halaman yang dikelola store (Pinia): legacy `save.js` memeriksa marker ini
// agar tidak double-handling tomlbol quantity/remove/add-wishlist.
if (import.meta.client) document.documentElement.dataset.dulankStore = "1";
onBeforeUnmount(() => {
  if (import.meta.client) delete document.documentElement.dataset.dulankStore;
});

definePageMeta({ middleware: "auth" });

useLegacyPage({
  title: "Cart | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/cart.css",
    "/css/pages/cart-inline.css",
  ],
  scripts: [
    "/js/component.js",
    "/js/save.js",
    "/js/easy-number-separator.js",
    "/js/pages/cart.js",
  ],
  sweetAlert: true,
});

const cart = useCartStore();
await cart.ensure().catch(() => {});

const cartSubtotal = computed(() => cart.subtotal);
const cartTax = computed(() => cart.tax);
const cartTotal = computed(() => cart.total);
</script>

<template>
  <div class="dulank-page dulank-page-cart">
    <div class="container mt-3">
      <p class="text-standard">Home &gt; Cart</p>
    </div>
    <main>
      <div class="container my-5">
        <div class="row save">
          <PagesCartCheckoutSteps />
          <PagesCartItems v-if="cart.items.length" :cart-items="cart.items" />
          <PagesCartEmptyCartState v-else />
          <PagesCartOrderSummary
            :subtotal="cartSubtotal"
            :tax="cartTax"
            :total="cartTotal"
          />
        </div>
      </div>
    </main>
  </div>
</template>