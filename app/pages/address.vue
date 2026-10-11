<script setup lang="ts">
definePageMeta({ middleware: "auth" });
useLegacyPage({
  title: "Addresses",
  styles: ["/css/style.css", "/css/pages/address-inline.css"],
  scripts: [
    "/js/component.js",
    "/js/profile.js",
    "/js/address-input.js",
    "/js/pages/address.js",
  ],
  sweetAlert: false,
});

const { addresses } = useUserAddresses();
</script>

<template>
  <div class="dulank-page dulank-page-address">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><ProfileSidebar /></div>

          <div class="col-lg-9">
            <PagesAddressNoAddressesState v-if="!addresses.length" />

            <PagesAddressAddAddressModal />
            <PagesAddressList
              v-if="addresses.length"
              :addresses="addresses"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
