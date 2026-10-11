<script setup lang="ts">
import type { Quotation } from "~/composables/useQuotations";

definePageMeta({ middleware: "auth" });

useLegacyPage({
  title: "Quotation View",
  styles: [
    "/css/style.css",
    "/css/pages/quotation-view.css",
    "/css/pages/quotation-view-inline.css",
  ],
  scripts: ["/js/component.js", "/js/profile.js"],
  sweetAlert: false,
});

const route = useRoute();
const quotationId = computed(() => String(route.query.id || "QT-001"));
const { data, error } = useApi<Quotation>(`/quotations/${quotationId.value}`);
const quotation = computed(() => data.value ?? null);
const totals = computed(() => getQuotationTotals(quotation.value));
const date = (value?: string) =>
  value ? new Date(`${value}T00:00:00`).toLocaleDateString("id-ID") : "-";
</script>

<template>
  <div class="dulank-page dulank-page-quotation-view">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><ProfileSidebar /></div>

          <div v-if="quotation" class="col-lg-9">
            <h4 class="small">Quotation # {{ quotation.id }}</h4>
            <p class="text-standard">
              Quotation Request Date: {{ date(quotation.date) }}
            </p>
            <p class="text-standard">
              Proposal Valid Until: {{ date(quotation.validUntil) }}
            </p>
            <p class="text-standard">
              Customer: {{ quotation.customerInfo.name }} ({{
                quotation.customerInfo.email
              }})
            </p>

            <h4 class="small">Item Requested</h4>

            <PagesQuotationViewDesktopQuotationTable :items="quotation.items" />

            <PagesQuotationViewMobileQuotationList :items="quotation.items" />
            <PagesQuotationViewQuotationTotals
              :subtotal="totals.subtotal"
              :tax="totals.tax"
              :shipping-cost="totals.shippingCost"
              :total="totals.total"
            />
            <PagesQuotationViewQuotationActions />
          </div>
          <div v-else class="col-lg-9">
            <p class="text-muted py-4">
              {{
                error
                  ? "Quotation tidak ditemukan."
                  : "Memuat data quotation..."
              }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
