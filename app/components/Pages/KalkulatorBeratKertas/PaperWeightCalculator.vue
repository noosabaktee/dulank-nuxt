<script setup lang="ts">
const calculator = usePaperWeight();
provide('paper-weight', calculator);
</script>

<template>
  <PagesKalkulatorBeratKertasCalculatorIntroduction />
  <PagesKalkulatorBeratKertasCalculatorTitle />
  <PagesKalkulatorBeratKertasUnitSelector />
  <PagesKalkulatorBeratKertasPaperSizeFields />
  <PagesKalkulatorBeratKertasPaperWeightField />
  <PagesKalkulatorBeratKertasQuantityFields />
  <p v-if="calculator.sizes.error.value" role="alert" class="text-danger text-standard">{{ 'Ukuran kertas belum dapat dimuat. Periksa akses langganan Anda.' }}</p>
  <PagesKalkulatorBeratKertasCalculationResults />
  <Teleport to="body"><PagesKalkulatorBeratKertasAddPaperModal /></Teleport>
</template>
