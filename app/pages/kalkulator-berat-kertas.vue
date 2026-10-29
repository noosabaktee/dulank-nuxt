<script setup lang="ts">
definePageMeta({ middleware: 'auth' });
useLegacyPage({ title: 'Berat Kertas', styles: ['/css/style.css', '/css/pages/kalkulator-berat-kertas.css'], scripts: [], sweetAlert: false });
</script>

<template>
  <div class="dulank-page dulank-page-kalkulator-berat-kertas">
    <main>
      <div class="container text-standard">
        <div class="calculator-container" id="calculator">
          <div><LayoutCalculatorHeader /></div>
          <PagesKalkulatorBeratKertasPaperWeightCalculator />
        </div>
      </div>
    </main>
  </div>
</template>
