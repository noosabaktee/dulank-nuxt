<script setup lang="ts">
useLegacyPage({
  "title": "Result Page",
  "styles": [
    "/css/style.css",
    "/css/pages/result-page-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/profile.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-result-page">
<main>

<div class="container my-5">

<h5 class="fw-semibold mb-3">pencarian “brosur“ untuk product</h5>
<div class="row">
<a class="col-md-2 me-3" href="" role="button">
<div>
<img alt="Brosur" class="w-100 object-fit-cover" src="/images/brosur.jpg"/>
</div>
<div>
<span class="small fw-bold d-block mt-1">Brosur Full Color</span>
<span class="text-standard">Rp150.000</span>
</div>
</a>
<a class="col-md-2 me-3" href="" role="button">
<div>
<img alt="Brosur" class="w-100 object-fit-cover" src="/images/kaos.jpg"/>
</div>
<div>
<span class="small fw-bold d-block mt-1">Kaos Anime</span>
<span class="text-standard">Rp50.000</span>
</div>
</a>
<a class="col-md-2 me-3" href="" role="button">
<div>
<img alt="Brosur" class="w-100 object-fit-cover" src="/images/yasin.jpg"/>
</div>
<div>
<span class="small fw-bold d-block mt-1">Yasin Tahlil</span>
<span class="text-standard">Rp150.000</span>
</div>
</a>
</div>

<h5 class="fw-semibold mt-5 mb-3">pencarian “brosur“ untuk blog</h5>
<div class="row">
<div class="col-12">
<div class="mb-5 shadow row g-0 d-flex align-items-stretch">

<div class="col-md-5 p-0">
<a href="/post">
<img alt="Blog 1" class="img-fluid rounded-start object-fit-cover w-100 h-100" id="inline-style-result-page-001" src="/images/brosur.jpg">
</img></a>
</div>

<div class="col-md-7 p-md-5 p-3 d-flex flex-column justify-content-between">
<div>
<div class="mb-2">
<span class="badge bg-light text-dark">Marketing</span>
<span class="text-muted text-standard ms-2"><i class="bi bi-calendar"></i> 09 Mei 2025</span>
</div>
<h5 class="card-title mb-2"><a class="text-decoration-none" href="/post">Brosur Full Color</a></h5>
<p class="card-text text-standard mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis earum voluptatem doloremque, praesentium quisquam provident odio aspernatur recusandae, dolore error magni pariatur! Ducimus iusto labore, vero nulla deleniti molestias!</p>
</div>
<a class="btn my-btn-outline-primary btn-sm mt-auto" href="/post">Baca Selengkapnya</a>
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
