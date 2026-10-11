<script setup lang="ts">
// Halaman yang dikelola store (Pinia): `save.js` tidak boleh double-handling.
if (import.meta.client) document.documentElement.dataset.dulankStore = "1";
onBeforeUnmount(() => {
  if (import.meta.client) delete document.documentElement.dataset.dulankStore;
});

definePageMeta({ middleware: "auth" });

useLegacyPage({
  title: "Wishlist | Dulank",
  styles: ["/css/style.css", "/css/save.css"],
  scripts: ["/js/component.js", "/js/save.js"],
  sweetAlert: true,
});

const wishlist = useWishlistStore();
await wishlist.ensure().catch(() => {});
</script>

<template>
  <div class="dulank-page dulank-page-wishlist">
    <div class="container mt-3">
      <p class="text-standard">Home &gt; Wishlist</p>
    </div>
    <main>
      <div class="container my-5">
        <div class="row save justify-content-md-center">
          <div class="col-md-8">
            <h1 class="fs-5">Your Wishlist</h1>
            <PagesWishlistItems
              v-if="wishlist.items.length"
              :wishlist-items="wishlist.items"
            />
            <PagesWishlistEmptyWishlistState v-else />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>