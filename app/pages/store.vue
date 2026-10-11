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
  id: number;
  source: string;
  name: string;
  group?: string;
  gsm: number;
  updatedAt: string;
}

interface PaperSizeRecord {
  id: number;
  source: string;
  name: string;
  width: number;
  height: number;
  unit: string;
  updatedAt: string;
}

const route = useRoute();
const merchantId = computed(() => String(route.query.id || 1));
const { data: shop } = useApi<PrintingShop>(`/merchants/${merchantId.value}`);

const { items: machines } = useCatalog<MachineRecord>("printing-machines");
const { items: paperTypes } = useCatalog<PaperTypeRecord>("paper-types");
const { items: paperSizes } = useCatalog<PaperSizeRecord>("paper-sizes");

const shopName = computed(() => String(shop.value?.name ?? ""));
const allMachines = computed(() =>
  machines.value.filter((machine) => machine.source === shopName.value),
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
  const size = paperSizes.value.find((item) => item.source === shopName.value);
  const sizeLabel = size
    ? `${size.width}x${size.height} ${size.unit}`
    : "";
  return paperTypes.value
    .filter((item) => item.source === shopName.value)
    .map((item) => ({
      name:
        item.group && item.group !== item.name
          ? `${item.name} - ${item.group}`
          : item.name,
      size: sizeLabel,
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
            <div class="text-standard my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              voluptate soluta excepturi, aperiam velit laudantium hic fugit
              aliquid molestias sit a commodi consequatur natus repudiandae,
              blanditiis expedita iusto. Quaerat, inventore!
            </div>
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
          </div>
        </div>
      </div>
    </main>
  </div>
</template>