<script setup lang="ts">
useLegacyPage({
  title: "Quotation Success",
  styles: ["/css/style.css", "/css/pages/quotation-success-inline.css"],
  scripts: ["/js/component.js"],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-quotation-success">
    <main>
      <section class="py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-center">
            <PagesQuotationSuccessMessage />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
