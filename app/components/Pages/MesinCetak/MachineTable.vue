<script setup lang="ts">
import type { MachineRecord } from "~/composables/useMachineCatalog";
defineProps<{ records: MachineRecord[] }>();
</script>

<template>
  <CatalogMachineRecordsTable :records="records" kind="printing" />
</template>
