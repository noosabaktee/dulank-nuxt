<script setup lang="ts">
useLegacyPage({
  title: "Toko Kertasindo",
  styles: ["/css/style.css"],
  scripts: [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/store-kertas.js",
    "/js/pages/store-kertas-events.js",
  ],
  sweetAlert: false,
});

interface PaperStore {
  id: number;
  name: string;
  province: string;
  city: string;
  district: string;
  followers: string;
  following: number;
  groupCount: number;
  typeCount: number;
  image: string;
}

interface PaperGroupRecord {
  id: number;
  source: string;
  name: string;
  brand?: string;
  updatedAt: string;
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
const merchantId = computed(() => String(route.query.id || 3));
const { data: shop } = useApi<PaperStore>(`/merchants/${merchantId.value}`);

const { items: paperGroups } = useCatalog<PaperGroupRecord>("paper-groups");
const { items: paperTypes } = useCatalog<PaperTypeRecord>("paper-types");
const { items: paperSizes } = useCatalog<PaperSizeRecord>("paper-sizes");

const shopName = computed(() => String(shop.value?.name ?? ""));
const groupRows = computed(() =>
  paperGroups.value
    .filter((item) => item.source === shopName.value)
    .map((item) => ({
      name: item.name,
      brand: item.brand ?? "",
      updatedAt: item.updatedAt,
    })),
);
const typeRows = computed(() => {
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
  <div class="dulank-page dulank-page-store-kertas">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <PagesStoreKertasStoreHeader
              :name="shop?.name"
              :city="shop?.city"
              :province="shop?.province"
              :followers="shop?.followers"
              :following="shop?.following"
              :group-count="shop?.groupCount"
              :type-count="shop?.typeCount"
              :avatar="shop?.image"
            />
            <div class="text-standard my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              voluptate soluta excepturi, aperiam velit laudantium hic fugit
              aliquid molestias sit a commodi consequatur natus repudiandae,
              blanditiis expedita iusto. Quaerat, inventore!
            </div>
            <PagesStoreKertasInventoryTabs />
            <div class="tab-content" id="myTabContent">
              <PagesStoreKertasPaperGroupsPanel :groups="groupRows" />

              <PagesStoreKertasPaperTypesPanel :rows="typeRows" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>