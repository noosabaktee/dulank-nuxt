<script setup lang="ts">
import type { Quotation } from "~/composables/useQuotations";

defineProps<{ quotation: Quotation }>();

const date = (value?: string) =>
  value ? new Date(`${value}T00:00:00`).toLocaleDateString("id-ID") : "-";
</script>

<template>
  <div class="mb-1">
    <h1 class="text-center fs-3 fw-bold my-text-primary mb-5">Quotation</h1>
    <div class="row mb-4">
      <div class="col-md-5">
        <h6>PT. DULANK SEMESTA CIDA</h6>
        <p>Percetakan Dulank</p>
        <p>
          Jl. Arif Rahman Hakim / Niaga (depan stasiun) Karawang Kel. Nagasari
          Kec. Karawang Barat Kab. Karawang Jawa Barat
        </p>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-3 align-items-end">
        <div class="ratio" id="inline-style-quotation-001">
          <img alt="" class="w-75" src="/images/brosur.jpg" />
        </div>
      </div>
    </div>
    <h6>Quotation For</h6>
    <div class="row">
      <div class="col-md-5">
        <form action="" class="quotation-for-form">
          <label class="text-standard">Company</label>
          <input
            class="form-control mt-1 mb-3"
            placeholder="Your Company Name"
            readonly
            type="text"
            :value="quotation.customerInfo.name"
          />
          <label class="text-standard">Address</label>
          <input
            class="form-control mt-1 mb-3"
            placeholder="Company Address"
            readonly
            type="text"
            value="Jl. Arif Rahman Hakim, Karawang"
          />
          <label class="text-standard">Phone</label>
          <input
            class="form-control mt-1 mb-3"
            placeholder="Your Phone"
            readonly
            type="text"
            :value="quotation.customerInfo.phone"
          />
          <label class="text-standard">Attention</label>
          <input
            class="form-control mt-1 mb-3"
            placeholder="Attention Name"
            readonly
            type="text"
            :value="quotation.customerInfo.email"
          />
        </form>
        <div class="d-flex justify-content-end">
          <button class="btn my-btn-outline-primary" type="button">
            Ganti
          </button>
        </div>
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-4">
        <div class="d-flex">
          <p class="text-standard w-50">Qoute Number</p>
          <p class="text-standard text-end w-50">{{ quotation.id }}</p>
        </div>
        <div class="d-flex">
          <p class="text-standard w-50">Quote Date</p>
          <p class="text-standard text-end w-50">{{ date(quotation.date) }}</p>
        </div>
        <div class="d-flex">
          <p class="text-standard w-50">Due Date</p>
          <p class="text-standard text-end w-50">
            {{ date(quotation.validUntil) }}
          </p>
        </div>
        <div class="d-flex">
          <p class="text-standard w-50">Quote Currency</p>
          <p class="text-standard text-end w-50">IDR</p>
        </div>
        <div class="d-flex">
          <p class="text-standard w-50">Term of Payment</p>
          <p class="text-standard text-end w-50">One Month</p>
        </div>
      </div>
    </div>
  </div>
</template>
