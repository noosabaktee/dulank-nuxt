<script setup lang="ts">
definePageMeta({ middleware: "auth" });
useLegacyPage({
  title: "Quotation",
  styles: ["/css/style.css", "/css/pages/quotation-send.css"],
  scripts: ["/js/component.js", "/js/profile.js"],
  sweetAlert: false,
});

const { quotations } = useQuotations();
</script>

<template>
  <div class="dulank-page dulank-page-quotation-send">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><ProfileSidebar /></div>

          <div class="col-lg-9">
            <PagesQuotationSendEmptyQuotationState v-if="!quotations.length" />
            <PagesQuotationSendQuotationHistory v-else :quotations="quotations" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
