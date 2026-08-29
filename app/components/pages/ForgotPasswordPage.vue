<script setup lang="ts">
useLegacyPage({
  "title": "Forgot Password",
  "styles": [
    "/css/style.css"
  ],
  "scripts": [
    "/js/component.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-forgot-password">

<header>
<nav class="navbar">
<div class="container d-flex justify-content-between">
<a class="navbar-brand fw-bold" href="/">Dulank.</a>
<span class="navbar-brand fw-light">Forgot Password</span>
<a class="navbar-brand text-standard" href="/register">Belum punya akun?</a>
</div>
</nav>
</header>
<main>

<div class="container my-5">
<div class="row justify-content-center">
<div class="col-md-8 col-lg-7">
<div class="card border-0">
<div class="card-body p-5">
<h3 class="text-center mb-4 fw-normal">Forgot Account Password</h3>

<form>

<div class="mb-4">
<input class="form-control" id="email" placeholder="Email address" required="" type="text"/>
</div>

<button class="btn btn-primary my-bg-primary w-100 py-2 mb-3" type="submit">
                                    Send Password Reset Link
                                </button>

<div class="text-center">
<a class="text-primary text-standard" href="/login">
<i class="fas fa-arrow-left me-2"></i>Back to login page
                                    </a>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</main>






</div>
</template>
