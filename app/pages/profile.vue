<script setup lang="ts">
import type { UserProfile } from "~/composables/useUserProfile";
import type { Order } from "~/composables/useOrders";
import type { Quotation } from "~/composables/useQuotations";
import type { UserAddress } from "#server/types/user";
import type { WishlistEntry } from "#server/types/wishlist";
import type { CartItem } from "#server/types/cart";

definePageMeta({ middleware: "auth" });

useLegacyPage({
  title: "Profile",
  styles: [
    "/css/style.css",
    "/css/pages/profile.css",
    "/css/pages/profile-inline.css",
  ],
  scripts: ["/js/component.js", "/js/profile.js", "/js/pages/profile.js"],
  sweetAlert: false,
});

const auth = useAuthStore();
await auth.initialize();

const [
  ordersResponse,
  quotationResponse,
  addressResponse,
  wishlistResponse,
  cartResponse,
  billingResponse,
] = await Promise.all([
  apiRequest<Order[]>("/orders"),
  apiRequest<Quotation[]>("/quotations"),
  apiRequest<UserAddress[]>("/addresses"),
  apiRequest<WishlistEntry[]>("/wishlist"),
  apiRequest<CartItem[]>("/cart"),
  apiRequest<Array<{ id: string }>>("/invoices"),
]);

const user = computed<UserProfile | null>(() => auth.user);
const orders = ordersResponse;
const quotations = quotationResponse;
const addresses = addressResponse;
const wishlistItems = wishlistResponse;
const cartItems = cartResponse;
const billings = billingResponse;

const profileStats = computed(() => ({
  orders: orders.length,
  history: orders.reduce((sum, order) => sum + order.items.length, 0),
  quotations: quotations.length,
  addresses: addresses.length,
  billings: billings.length,
  cart: cartItems.length,
  wishlist: wishlistItems.length,
}));
</script>

<template>
  <div class="dulank-page dulank-page-profile">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><ProfileSidebar /></div>

          <div class="col-lg-9">
            <PagesProfileHeader v-if="user" :user="user" />
            <div v-if="user" class="profile-content bg-white p-4 rounded-3 shadow-sm">
              <PagesProfileTabs />

              <PagesProfileDetailsForm
                :user="user"
                :stats="profileStats"
              />

              <PagesProfilePasswordForm />

              <PagesProfileTwoFactorAuthenticationForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
