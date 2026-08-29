<script setup lang="ts">
useLegacyPage({
  "title": "Verify Email",
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
<div class="dulank-page dulank-page-verify-email">

<header>
<nav class="navbar">
<div class="container d-flex justify-content-between">
<a class="navbar-brand fw-bold" href="/">Dulank.</a>
<span class="navbar-brand fw-light">Verify Email</span>
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
<h3 class="text-center mb-4 fw-normal">Verify your email address</h3>

<form action="/profile">

<div class="mb-4">
<input class="form-control" id="code" placeholder="your code" required="" type="text"/><br/>
<p class="text-standard">don't see it? <a class="text-primary" href="">resend code</a></p>
</div>

<button class="btn btn-primary my-bg-primary w-100 py-2 mb-3" type="submit">
                                    Verify Now
                                </button>
</form>
</div>
</div>
</div>
</div>
</div>
</main>






</div>
</template>
