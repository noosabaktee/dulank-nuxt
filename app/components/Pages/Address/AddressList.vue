<script setup lang="ts">
import type { UserAddress } from "#server/types/user";

defineProps<{ addresses: UserAddress[] }>();
</script>

<template>
  <div class="profile-content bg-white p-4 rounded-3 shadow-sm">
    <div class="mb-4"><h4 class="fw-bold m-0">Addresses</h4></div>
    <div class="address-list row">
      <div
        v-for="address in addresses"
        :key="`${address.type}-${address.street}`"
        class="col-md-6 mb-4 px-2"
      >
        <div class="address-item pb-4">
          <div class="fw-semibold small">{{ address.recipientName }}</div>
          <div class="text-standard mb-2">{{ address.phone }}</div>
          <div class="text-standard mb-3">
            {{ address.name }},<br />{{ address.street }}<br />
            {{ address.city }} - {{ address.district }}, {{ address.province }},
            {{ address.country }} {{ address.postalCode }}
          </div>
          <span class="text-standard border border-2 p-1 my-text-primary">{{
            address.type
          }}</span>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <button
        class="btn btn-dark my-bg-primary px-4 py-2 rounded-0"
        data-bs-target="#addAddressModal"
        data-bs-toggle="modal"
        type="button"
      >
        Add a new address
      </button>
    </div>
  </div>
</template>
