<script setup lang="ts">
useLegacyPage({
  title: "Our Client",
  styles: ["/css/style.css"],
  scripts: ["/js/component.js"],
  sweetAlert: false,
});

interface Client {
  id: number;
  name: string;
  logo: string;
}
const { items: clients } = useCatalog<Client>("clients");
</script>

<template>
  <div class="dulank-page dulank-page-our-client">
    <main>
      <div class="container my-5">
        <section class="py-3 py-md-5 py-xl-8">
          <PagesOurClientIntroduction />
          <PagesOurClientGrid :clients="clients" />
        </section>
      </div>
    </main>
  </div>
</template>
