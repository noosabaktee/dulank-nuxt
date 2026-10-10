<script setup lang="ts">
useLegacyPage({
  title: "Checkout",
  styles: [
    "/css/style.css",
    "/css/checkout.css",
    "/css/pages/checkout-inline.css",
  ],
  scripts: [
    "/js/component.js",
    "/js/checkout.js",
    "/js/pages/checkout-events.js",
  ],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-checkout">
    <PagesCheckoutHeader />
    <main class="container py-4">
      <div class="row">
        <div class="col-md-8">
          <PagesCheckoutShippingDetails />

          <PagesCheckoutPickupOptions />
          <PagesCheckoutProductSummary />
        </div>
        <div class="col-md-4 h-100 position-sticky top-0">
          <PagesCheckoutPaymentSummary />

          <div class="bg-light border">
            <p class="text-standard p-2" id="inline-style-checkout-006">
              Promo GRATIS ONGKIR kirim ke Jakarta, Bogor, Bekasi, Karawang,
              Purwakarta dengan minimum pembelian Rp500.000
            </p>
          </div>
          <div>
            <p class="text-standard text-center p-2">
              Dengan melakukan pemesanan ini, Anda setuju dengan
              <a
                class="text-primary"
                data-bs-target="#privacyPolicyModal"
                data-bs-toggle="modal"
                href="#"
                >kebijakan privasi</a
              >
              dan
              <a
                class="text-primary"
                data-bs-target="#termsModal"
                data-bs-toggle="modal"
                href="#"
                >syarat dan ketentuan</a
              >
              dulank.com
            </p>
          </div>
        </div>
      </div>
    </main>

    <PagesCheckoutBillingAddressModal />

    <PagesCheckoutShippingAddressModal />

    <PagesCheckoutVoucherModal />
    <div id="privacy-terms-placeholder"></div>
  </div>
</template>
