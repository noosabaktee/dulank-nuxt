<script setup lang="ts">
useLegacyPage({
  title: "Contact Us | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/contact-inline.css"
  ],
  scripts: [
    "/js/component.js",
    "/js/pages/contact.js"
  ],
  sweetAlert: false
})
</script>

<template>
  <div class="dulank-page dulank-page-contact">
    <main>
      <div class="container my-5">
        <div class="row text-standard">
          <PagesContactForm />
          <PagesContactLocationMap />
        </div>
      </div>
    </main>
    <footer>
      <div><LayoutAppFooter /></div>
    </footer>
  </div>
</template>
