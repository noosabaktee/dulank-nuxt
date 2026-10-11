<script setup lang="ts">
definePageMeta({ middleware: "auth" });
useLegacyPage({
  title: "Billing",
  styles: ["/css/style.css"],
  scripts: ["/js/component.js", "/js/profile.js"],
  sweetAlert: false,
});

interface Billing {
  id: string;
  userId: number;
  orderId?: string;
  invoiceDate: string;
  dueDate: string;
  total: number;
  status: string;
}
const { data } = useApi<Billing[]>("/invoices");
const billings = computed(() => data.value ?? []);
</script>

<template>
  <div class="dulank-page dulank-page-billing">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><ProfileSidebar /></div>

          <div class="col-lg-9">
            <PagesBillingEmptyBillingState v-if="!billings.length" />
            <PagesBillingHistory v-else :billings="billings" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
