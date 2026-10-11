<script setup lang="ts">
import type { SupportTicket } from "#server/types/ticket";
definePageMeta({ middleware: "auth" });
useLegacyPage({
  title: "Support Ticket",
  styles: [
    "/css/style.css",
    "/css/pages/support-ticket-detail-kalkulator-inline.css",
  ],
  scripts: ["/js/component.js", "/js/kalkulator.js"],
  sweetAlert: false,
});

const route = useRoute();
const id = computed(() => String(route.query.id || "TK-001"));
const { data, refresh } = useApi<SupportTicket>(`/tickets/${id.value}`);
const ticket = computed(() => data.value ?? null);
</script>

<template>
  <div class="dulank-page dulank-page-support-ticket-detail-kalkulator">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <PagesSupportTicketDetailKalkulatorTicketConversation
              :ticket="ticket"
              @submitted="refresh"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
