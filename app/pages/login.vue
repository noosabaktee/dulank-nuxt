<script setup lang="ts">
useLegacyPage({
  title: "Login",
  styles: ["/css/style.css"],
  scripts: ["/js/component.js"],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-login">
    <PagesLoginAccountHeader />
    <main>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-12">
            <div class="row justify-content-center">
              <PagesLoginIllustration />
              <PagesLoginForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
