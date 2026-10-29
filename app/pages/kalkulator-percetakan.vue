<script setup lang="ts">
definePageMeta({ middleware: 'auth' });
useLegacyPage({
  title: "Kalkulator Percetakan",
  styles: ["/css/style.css"],
  scripts: [
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/easy-number-separator.js",
    "/js/pages/kalkulator-percetakan.js",
    "/js/pages/kalkulator-percetakan-events.js",
  ],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-kalkulator-percetakan">
    <main>
      <div class="container">
        <div class="calculator-container text-standard">
          <div class="row">
            <div><LayoutCalculatorHeader /></div>

            <PagesKalkulatorPercetakanPrintSpecificationForm />
            <PagesKalkulatorPercetakanCalculationResults />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
