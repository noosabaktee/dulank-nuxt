<script setup lang="ts">
useLegacyPage({
  title: "Contact Us | Dulank",
  styles: ["/css/style.css", "/css/pages/contact-inline.css"],
  scripts: ["/js/component.js", "/js/pages/contact.js"],
  sweetAlert: false,
});

interface CompanySettings {
  name?: string;
  profile?: {
    name?: string;
    address?: string;
    mapEmbedUrl?: string;
  };
}

const { data } = useApi<CompanySettings>("/settings/company");
const companyAddress = computed(
  () => data.value?.profile?.address ?? "Alamat belum diatur.",
);
const mapEmbedUrl = computed(() => data.value?.profile?.mapEmbedUrl ?? "");
</script>

<template>
  <div class="dulank-page dulank-page-contact">
    <main>
      <div class="container my-5">
        <div class="row text-standard">
          <PagesContactForm />
          <PagesContactStoreLocation
            :address="companyAddress"
            :map-embed-url="mapEmbedUrl"
          />
        </div>
      </div>
    </main>
  </div>
</template>
