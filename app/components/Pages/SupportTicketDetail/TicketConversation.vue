<script setup lang="ts">
import type { SupportTicket } from "#server/types/ticket";
defineProps<{ ticket: SupportTicket | null }>();
defineEmits<{ submitted: [] }>();
</script>

<template>
  <SupportTicketConversation :ticket="ticket" @submitted="$emit('submitted')" />
</template>
