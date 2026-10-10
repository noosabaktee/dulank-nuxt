<script setup lang="ts">
import type { SupportTicket } from "#server/types/ticket";
const props = withDefaults(
  defineProps<{ tickets: SupportTicket[]; detailPath?: string }>(),
  {
    detailPath: "/support-ticket-detail",
  },
);
const query = ref("");
const visible = computed(() =>
  props.tickets.filter((ticket) =>
    `${ticket.subject} ${ticket.id}`
      .toLowerCase()
      .includes(query.value.toLowerCase()),
  ),
);
</script>

<template>
  <div class="recent-orders">
    <div class="mt-2 mt-md-0 d-flex justify-content-between">
      <h5 class="section-title mb-0">Support Ticket</h5>
      <input
        v-model="query"
        class="form-control w-auto"
        aria-label="Search tickets"
        placeholder="Search"
        type="search"
      />
    </div>
    <hr />
    <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
      <div class="col-md-4 small">Ticket Subject</div>
      <div class="col-md-3 small">Date Submitted</div>
      <div class="col-md-2 small">Type</div>
      <div class="col-md-1 small">Priority</div>
      <div class="col-md-2 small text-end">Status</div>
    </div>
    <div
      v-for="ticket in visible"
      :key="ticket.id"
      class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0"
    >
      <div class="col-12 col-md-4" data-label="Ticket Subject">
        <a :href="`${detailPath}?id=${ticket.id}`">{{ ticket.subject }}</a>
      </div>
      <div class="col-12 col-md-3" data-label="Date Submitted">
        {{ ticket.date }}
      </div>
      <div class="col-12 col-md-2" data-label="Type">
        {{ ticket.type || "Support" }}
      </div>
      <div class="col-12 col-md-1" data-label="Priority">
        {{ ticket.priority }}
      </div>
      <div class="col-12 col-md-2 text-start text-md-end" data-label="Status">
        {{ ticket.status }}
      </div>
    </div>
    <p v-if="!visible.length" class="text-muted py-3">
      Tidak ada tiket yang cocok.
    </p>
    <button
      class="btn my-btn-primary my-4"
      data-bs-target="#addNewTicketModal"
      data-bs-toggle="modal"
      type="button"
    >
      Submit New Ticket
    </button>
  </div>
</template>
