<script setup lang="ts">
withDefaults(defineProps<{
  subject: string
  href?: string
  submitted: string
  type: string
  priority: string
  status: string
}>(), { href: '/support-ticket-detail' })
</script>

<template>
  <div class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0 flex flex-wrap -mx-3 py-4 px-4">
    <div class="col-12 col-md-4 w-12/12 px-3 w-full md:w-4/12" data-label="Ticket Subject"><NuxtLink :to="href">{{ subject }}</NuxtLink></div>
    <div class="col-12 col-md-3 w-12/12 px-3 w-full md:w-3/12" data-label="Data Submitted | Update">{{ submitted }}</div>
    <div class="col-12 col-md-2 w-12/12 px-3 w-full md:w-2/12" data-label="Type">{{ type }}</div>
    <div class="col-12 col-md-1 w-12/12 px-3 w-full md:w-1/12" data-label="Priority">{{ priority }}</div>
    <div class="col-12 col-md-2 text-start text-md-end w-12/12 px-3 w-full md:w-2/12 text-left md:text-right" data-label="Status">{{ status }}</div>
  </div>
</template>
