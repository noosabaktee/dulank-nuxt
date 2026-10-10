<script setup lang="ts">
defineEmits<{ created: [] }>();
</script>

<template><SupportCreateTicketModal @created="$emit('created')" /></template>
