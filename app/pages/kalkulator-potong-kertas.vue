<script setup lang="ts">
definePageMeta({ middleware: 'auth' });
useLegacyPage({ title: 'Hitung Potong Kertas', styles: ['/css/style.css', '/css/pages/kalkulator-potong-kertas.css', '/css/pages/kalkulator-potong-kertas-inline.css'], scripts: [], sweetAlert: false });
const calculator = usePaperCutting();
</script>

<template>
  <div class="dulank-page dulank-page-kalkulator-potong-kertas">
    <main>
      <div class="container">
        <div class="calculator-container text-standard">
          <div><LayoutCalculatorHeader /></div>
          <p v-if="calculator.sizesRequest.pending.value">Memuat ukuran kertas...</p>
          <div v-else-if="calculator.sizesRequest.error.value" role="alert" class="alert alert-warning">
            Ukuran kertas belum tersedia atau fitur belum termasuk langganan aktif Anda.
            <NuxtLink to="/profile-merchant">Periksa langganan</NuxtLink>
            <button class="btn" type="button" @click="calculator.sizesRequest.refresh()">Coba lagi</button>
          </div>
          <template v-else>
            <div class="row mt-5">
              <PagesKalkulatorPotongKertasCuttingSpecificationForm :form="calculator.form" :sizes="calculator.sizesRequest.data.value ?? []" :title="calculator.content.data.value?.title ?? 'Hitung Potong Kertas'" :introduction="calculator.content.data.value?.introduction ?? ''" :busy="calculator.busy.value" @calculate="calculator.calculate" />
              <PagesKalkulatorPotongKertasCuttingResults :results="calculator.results.value" @preview="calculator.preview.value = $event" />
            </div>
          </template>
        </div>
      </div>
    </main>
    <PagesKalkulatorPotongKertasPatternGeneratorModal :result="calculator.preview.value" @close="calculator.preview.value = null" />
  </div>
</template>
