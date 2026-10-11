<script setup lang="ts">
import type { MachineRecord } from "~/composables/useMachineCatalog";

defineProps<{ machines: MachineRecord[] }>();
</script>

<template>
  <div
    aria-labelledby="pond-tab"
    class="tab-pane fade"
    id="pond-tab-pane"
    role="tabpanel"
    tabindex="0"
  >
    <div class="row mt-3">
      <div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
        <div class="col-md-3 small">Nama</div>
        <div class="col-md-2 small">Ukuran</div>
        <div class="col-md-2 small">Standard</div>
        <div class="col-md-2 small">Setengah Putus</div>
        <div class="col-md-2 small">Update</div>
        <div class="col-md-1 small text-end"></div>
      </div>

      <div
        v-for="machine in machines"
        :key="machine.id"
        class="row table-product align-items-md-center py-md-2 py-3 px-3 border-bottom-md-0"
      >
        <div class="col-12 col-md-3" data-label="Nama">{{ machine.name }}</div>
        <div class="col-12 col-md-2" data-label="Ukuran">
          {{ machine.size }}
        </div>
        <div class="col-12 col-md-2" data-label="Pond Standard">
          Harga: Rp{{ machine.unitPrice?.toLocaleString("id-ID") }} <br />
          Minim: Rp{{ machine.price?.toLocaleString("id-ID") }}
        </div>
        <div class="col-12 col-md-2" data-label="Setengah Putus">
          Harga: Rp{{ machine.unitPrice?.toLocaleString("id-ID") }} <br />
          Minim: Rp{{ machine.price?.toLocaleString("id-ID") }}
        </div>
        <div class="col-12 col-md-2" data-label="Update">
          {{ machine.updatedAt }}
        </div>
        <div class="col-12 col-md-1 text-center"></div>
      </div>
    </div>
  </div>
</template>