<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

defineProps<{ order: Order }>();
</script>

<template>
  <div class="row mb-3">
    <div class="col-6">
      <div class="mb-2 fw-semibold text-standard">Pay To:</div>
      <div class="text-standard">
        PT. DULANK SEMESTA CIDA<br />
        Cecep Sudirman<br />
        gading elok 2 blok e1 no.1,<br />
        Karawang, Jawa Barat, 41371<br />
        Indonesia
      </div>
    </div>
    <div class="col-6 mb-3">
      <div>
        <div class="mb-2 fw-semibold text-standard">Invoiced To:</div>
        <div class="text-standard">
          {{ order.shippingAddress.name }}<br />
          {{ order.shippingAddress.street }}<br />
          {{ order.shippingAddress.city }}, {{ order.shippingAddress.province }}
          {{ order.shippingAddress.postalCode }}
        </div>
      </div>
      <div>
        <div class="mb-2 fw-semibold text-standard">Shipping To:</div>
        <div class="text-standard">
          {{ order.shippingAddress.name }}<br />
          {{ order.shippingAddress.street }}<br />
          {{ order.shippingAddress.district }}, {{ order.shippingAddress.city
          }}<br />
          {{ order.shippingAddress.province }} {{ order.shippingAddress.postalCode
          }}<br />
          T: {{ order.shippingAddress.phone }}
        </div>
      </div>
    </div>
  </div>
</template>
