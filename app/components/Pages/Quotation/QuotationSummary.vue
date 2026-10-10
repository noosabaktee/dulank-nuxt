<script setup lang="ts">
import type { Quotation } from "~/composables/useQuotations";

const props = defineProps<{ quotation: Quotation }>();

const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
const subtotal = computed(
  () =>
    props.quotation.subtotal ??
    props.quotation.items.reduce((sum, item) => sum + item.total, 0),
);
const tax = computed(() => props.quotation.tax ?? Math.round(subtotal.value * 0.11));
const total = computed(
  () =>
    props.quotation.total ??
    subtotal.value + tax.value + (props.quotation.shippingCost ?? 0),
);
</script>

<template>
  <div class="mt-5 row">
    <div class="col-md-8">
      <label class="mb-2">Terms and Conditions</label>
      <div class="text-standard">
        1. Jangka waktu pembayaran 30 hari sejak tanggal faktur. <br />
        2. jika tidak termasuk dalam cover area pengirman gratis, maka harga
        belum termasuk biaya pengiriman <br />
        3. pengerjaan dimulai setelah ada PO atau down payment 50% <br />
        4. Pembayaran dapat dilakukan melalui transfer bank ke rekening BCA
        109-2993242 an PT. DULANK Semesta Cida
      </div>
    </div>
    <div class="col-md-4 text-end mt-3 mt-md-0">
      <div class="d-flex">
        <p class="text-standard w-50">Subtotal</p>
        <p class="text-standard text-end w-50">{{ money(subtotal) }}</p>
      </div>
      <div class="d-flex">
        <p class="text-standard w-50">PPN (11%)</p>
        <p class="text-standard text-end w-50">{{ money(tax) }}</p>
      </div>
      <div class="d-flex">
        <p class="text-standard w-50">Biaya Pengiriman</p>
        <p class="text-standard text-end w-50">
          {{ money(quotation.shippingCost ?? 0) }}
        </p>
      </div>
      <div class="d-flex pt-3" id="inline-style-quotation-002">
        <p class="text-standard my-text-primary w-50">Jumlah Total</p>
        <p class="my-text-primary text-end w-50" id="grandTotal">
          {{ money(total) }}
        </p>
      </div>
      <br />
      <small class="d-none text-standard text-danger" id="info-selected-all"
        ><i class="fa-solid fa-circle-info"></i> please input your quotation
        for<br
      /></small>
      <button class="btn my-btn-primary mt-2" id="view-btn" type="button">
        View Quotation
      </button>
    </div>
  </div>
</template>
