<script setup lang="ts">
useLegacyPage({
  "title": "Register",
  "styles": [
    "/css/style.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/profile.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-register">

<header>
<nav class="navbar">
<div class="container d-flex justify-content-between">
<a class="navbar-brand fw-bold" href="/">Dulank.</a>
<span class="navbar-brand fw-light">Register</span>
<a class="navbar-brand text-standard" href="/login">Sudah punya akun?</a>
</div>
</nav>
</header>
<main>

<div class="container my-5">
<div class="row justify-content-center">
<div class="col-lg-10 col-md-12">
<div class="row justify-content-center">
<div class="col-md-5 col-lg-6">

</div>
<div class="col-md-7 col-lg-6 bg-light">
<div class="card border-0 bg-light">
<div class="card-body p-lg-5 p-md-4">
<h3 class="text-center mb-4 fw-normal">Register an account</h3>

<form action="/verify-email">



<div class="mb-3">
<input class="form-control" id="email" placeholder="Email address" required="" type="email"/>
</div>



<button class="btn btn-primary my-bg-primary w-100 py-2 mb-3" type="submit">
                                            Register→
                                        </button>
<p class="text-muted text-standard mb-4">
                                            Already have an account? <a class="text-primary" href="/login">Login now</a>
</p>

<div class="text-center mb-4">
<hr/>
<span class="bg-white px-3 text-muted">
                                                or login with
                                            </span>
</div>

<div class="row g-2">
<div class="col-6">
<a class="btn btn-outline-primary w-100" href="#">
<i class="fab fa-facebook-f me-2"></i> Sign in with Facebook
                                                </a>
</div>
<div class="col-6">
<a class="btn btn-outline-danger w-100" href="#">
<i class="fab fa-google me-2"></i> Sign in with Google
                                                </a>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>






</div>
</template>
