<script setup lang="ts">
import type { Quotation } from "~/composables/useQuotations";

definePageMeta({ middleware: "auth" });

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

useLegacyPage({
  title: "Quotation | Dulank",
  styles: [
    "/css/style.css",
    "/css/save.css",
    "/css/pages/quotation.css",
    "/css/pages/quotation-inline.css",
  ],
  scripts: ["/js/component.js", "/js/save.js", "/js/pages/quotation.js"],
  sweetAlert: false,
});

const { data: quotationData } = useApi<Quotation[]>("/quotations");

const quotation = computed(
  () =>
    quotationData.value?.find((item) => item.status === "draft") ??
    quotationData.value?.[0] ??
    null,
);
</script>

<template>
  <div class="dulank-page dulank-page-quotation">
    <div class="container mt-3">
      <p class="text-standard">Home > Quotation</p>
    </div>
    <main>
      <div class="container my-5">
        <template v-if="quotation">
          <PagesQuotationDetails :quotation="quotation" />
          <PagesQuotationItems :quotation="quotation" />
          <PagesQuotationNotice />
          <PagesQuotationSummary :quotation="quotation" />
        </template>

        <PagesQuotationEmptyQuotationState v-else />
      </div>
    </main>

    <PagesQuotationJobNameModal />
  </div>
</template>
