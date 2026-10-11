<script setup lang="ts">
import type { SupportTicket } from "#server/types/ticket";
definePageMeta({ middleware: "auth" });
useLegacyPage({
  title: "Support Ticket",
  styles: ["/css/style.css", "/css/pages/support-ticket-kalkulator-inline.css"],
  scripts: ["/js/component.js", "/js/kalkulator.js"],
  sweetAlert: false,
});

const { data, refresh } = useApi<SupportTicket[]>("/tickets");
const tickets = computed(() => data.value ?? []);
</script>

<template>
  <div class="dulank-page dulank-page-support-ticket-kalkulator">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <PagesSupportTicketList
              :tickets="tickets"
              detail-path="/support-ticket-detail-kalkulator"
            />
          </div>
        </div>
      </div>
    </main>

    <PagesSupportTicketKalkulatorCreateTicketModal @created="refresh" />
  </div>
</template>
