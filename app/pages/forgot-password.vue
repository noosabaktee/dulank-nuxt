<script setup lang="ts">
useLegacyPage({
  title: "Forgot Password",
  styles: ["/css/style.css"],
  scripts: ["/js/component.js"],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-forgot-password">
    <PagesForgotPasswordAccountHeader />
    <main>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-7">
            <PagesForgotPasswordResetForm />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
