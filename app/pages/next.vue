<script setup lang="ts">
definePageMeta({ middleware: "auth" });

useLegacyPage({
  title: "Cart | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/next.css",
    "/css/pages/next-inline.css",
  ],
  scripts: [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/pages/next.js",
    "/js/pages/next-events.js",
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
  <div class="dulank-page dulank-page-next">
    <div class="container mt-3">
      <p class="text-standard">Home > Cart > Next</p>
    </div>
    <main>
      <div class="container my-5">
        <div class="row save">
          <PagesNextCheckoutSteps />
          <PagesNextCartItems v-if="cart.items.length" :cart-items="cart.items" />

          <PagesNextOrderSummary
            v-if="cart.items.length"
            :subtotal="cartSubtotal"
            :tax="cartTax"
            :total="cartTotal"
          />
        </div>

        <PagesNextEmptyCartState v-if="!cart.items.length" />
      </div>
    </main>
  </div>
</template>