<script setup lang="ts">
import type { MachineRecord } from "~/composables/useMachineCatalog";

useLegacyPage({
  title: "Percetaan Grafika 1",
  styles: ["/css/style.css"],
  scripts: [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/store.js",
    "/js/pages/store-events.js",
  ],
  sweetAlert: false,
});

interface PrintingShop {
  id: number;
  name: string;
  address?: string;
  whatsapp?: string;
  province: string;
  city: string;
  district: string;
  followers: string;
  following: number;
  paperCount: number;
  printingCount: number;
  laminationCount: number;
  dieCuttingCount: number;
  foilCount: number;
  image: string;
}

interface PaperTypeRecord {
  dimension?: string;
  id: number;
  source: string;
  merchantId?: number | null;
  name: string;
  group?: string;
  gsm: number;
  updatedAt: string;
}

interface PaperSizeRecord {
  id: number;
  source: string;
  merchantId?: number | null;
  name: string;
  width: number;
  height: number;
  unit: string;
  updatedAt: string;
}

const route = useRoute();
const merchantId = computed(() => String(route.query.id || ''));
const { data: shop, pending: shopPending, error: shopError, refresh: refreshShop } = useApi<PrintingShop>(() => `/merchants/${encodeURIComponent(merchantId.value || 'missing')}`);

const { items: machines } = useCatalog<MachineRecord>("printing-machines");
const { items: paperTypes } = useCatalog<PaperTypeRecord>("paper-types");
const { items: paperSizes } = useCatalog<PaperSizeRecord>("paper-sizes");

const shopName = computed(() => String(shop.value?.name ?? ""));
const allMachines = computed(() =>
  machines.value.filter((machine) => (machine.merchantId != null ? machine.merchantId === Number(merchantId.value) : machine.source === shopName.value)),
);
const printingMachines = computed(() =>
  allMachines.value.filter((machine) => machine.kind === "printing"),
);
const laminationMachines = computed(() =>
  allMachines.value.filter((machine) => machine.kind === "lamination"),
);
const dieCuttingMachines = computed(() =>
  allMachines.value.filter((machine) => machine.kind === "die-cutting"),
);
const foilMachines = computed(() =>
  allMachines.value.filter((machine) => machine.kind === "foil"),
);

const paperRows = computed(() => {
  const size = paperSizes.value.find((item) => (item.merchantId != null ? item.merchantId === Number(merchantId.value) : item.source === shopName.value));
  const sizeLabel = size
    ? `${size.width}x${size.height} ${size.unit}`
    : "";
  return paperTypes.value
    .filter((item) => (item.merchantId != null ? item.merchantId === Number(merchantId.value) : item.source === shopName.value))
    .map((item) => ({
      name:
        item.group && item.group !== item.name
          ? `${item.name} - ${item.group}`
          : item.name,
      size: item.dimension || sizeLabel,
      gsm: `${item.gsm} GSM`,
      updatedAt: item.updatedAt,
    }));
});
</script>

<template>
  <div class="dulank-page dulank-page-store">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <p v-if="shopPending">Memuat profil usaha...</p>
            <div v-else-if="shopError || !shop" role="alert" class="alert alert-warning">Profil usaha tidak tersedia atau belum dipublikasikan. <button class="btn" type="button" @click="refreshShop()">Coba lagi</button></div>
            <template v-else>
            <PagesStoreHeader
              :name="shop?.name"
              :city="shop?.city"
              :province="shop?.province"
              :followers="shop?.followers"
              :following="shop?.following"
              :paper-count="shop?.paperCount"
              :printing-count="shop?.printingCount"
              :lamination-count="shop?.laminationCount"
              :die-cutting-count="shop?.dieCuttingCount"
              :foil-count="shop?.foilCount"
              :avatar="shop?.image"
            />
            <div class="text-standard my-2">{{ shop?.address || "" }}<template v-if="shop?.whatsapp"> {{ shop.whatsapp }}</template></div>
            <PagesStoreServiceTabs />
            <div class="tab-content" id="myTabContent">
              <PagesStorePaperServicesPanel :rows="paperRows" />

              <PagesStorePrintingServicesPanel :machines="printingMachines" />

              <PagesStoreLaminationServicesPanel
                :machines="laminationMachines"
              />

              <PagesStoreDieCuttingServicesPanel
                :machines="dieCuttingMachines"
              />

              <PagesStoreFoilServicesPanel :machines="foilMachines" />
            </div>
            </template>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>