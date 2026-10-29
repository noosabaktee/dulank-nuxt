<script setup lang="ts">
definePageMeta({ middleware: 'auth' });
useLegacyPage({ title: 'Daftarkan Percetakan', styles: ['/css/style.css'], scripts: [], sweetAlert: false });
</script>

<template>
  <div class="dulank-page dulank-page-daftar-percetakan">
    <main class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-9">
          <PagesDaftarPercetakanBusinessRegistrationForm />
        </div>
      </div>
    </main>
  </div>
</template>
