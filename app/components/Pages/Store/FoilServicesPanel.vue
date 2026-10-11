<script setup lang="ts">
import type { MachineRecord } from "~/composables/useMachineCatalog";

defineProps<{ machines: MachineRecord[] }>();
</script>

<template>
  <div
    aria-labelledby="poli-tab"
    class="tab-pane fade"
    id="poli-tab-pane"
    role="tabpanel"
    tabindex="0"
  >
    <div class="row mt-3">
      <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
        <div class="col-md-2 small">Nama</div>
        <div class="col-md-2 small">Ukuran Max</div>
        <div class="col-md-2 small">Harga (cm)</div>
        <div class="col-md-2 small">Harga Minim</div>
        <div class="col-md-2 small">Update</div>
        <div class="col-md-1 small text-end"></div>
      </div>

      <div
        v-if="machines.length"
        v-for="machine in machines"
        :key="machine.id"
        class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0"
      >
        <div class="col-12 col-md-2" data-label="Nama">{{ machine.name }}</div>
        <div class="col-12 col-md-2" data-label="Ukuran Max">
          {{ machine.size }}
        </div>
        <div class="col-12 col-md-2" data-label="Harga per cm">
          Rp{{ machine.unitPrice?.toLocaleString("id-ID") }}
        </div>
        <div class="col-12 col-md-2" data-label="Harga Minim">
          Rp{{ machine.price?.toLocaleString("id-ID") }} <br />
          Hitungan: Rp{{ machine.unitPrice?.toLocaleString("id-ID") }}
        </div>
        <div class="col-12 col-md-2" data-label="Update">
          {{ machine.updatedAt }}
        </div>
        <div class="col-12 col-md-1"></div>
      </div>
      <p v-if="!machines.length" class="text-muted text-standard py-3 px-3">
        Belum ada data mesin poli untuk toko ini.
      </p>
    </div>
  </div>
</template>