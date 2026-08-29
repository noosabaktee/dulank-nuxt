<script setup lang="ts">
useLegacyPage({
  "title": "Blog List",
  "styles": [
    "/css/style.css",
    "/css/blog.css"
  ],
  "scripts": [
    "/js/component.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-blog">
<main class="container my-md-5 my-2">
<div class="row">
<div class="my-4 d-block d-md-none">
<form action="" class="d-flex">
<input class="form-control" placeholder="Search Article Title" type="text"/>
<button class="ms-2 btn my-btn-primary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
</form>
</div>
<h5 class="fw-bold mb-3">Artikel Terbaru</h5>

<div class="col-lg-8">

<div class="row g-4 mb-4">
<a class="col-md-6 blog-card" href="/post">
<div class="border-0">
<img class="blog-img object-fit-cover w-100" src="/images/brosur.jpg"/>
<div class="pb-2">
<span class="my-3 d-inline-block border blog-badge rounded-pill py-1 px-2">TIPS & TRIKS</span>
<h6 class="fw-semibold mb-2">Cara Efektif Meningkatkan Call To Action (CTA) untuk Digital Marketing</h6>
<div class="d-flex align-items-center text-muted">
<span class="fw-semibold text-standard">Eriga Syifaudin</span>
<span class="mx-1">-</span>
<span class="text-standard">December 13, 2024</span>
</div>
</div>
</div>
</a>
<a class="col-md-6 blog-card" href="/post">
<div class="border-0">
<img class="blog-img object-fit-cover w-100" src="/images/kaos.jpg"/>
<div class="pb-2">
<span class="my-3 d-inline-block border blog-badge rounded-pill py-1 px-2">UMUM</span>
<h6 class="fw-semibold mb-2">Perbedaan IP Public dan IP Private: Panduan Lengkap</h6>
<div class="d-flex align-items-center text-muted">
<span class="fw-semibold text-standard">Eriga Syifaudin</span>
<span class="mx-1">-</span>
<span class="text-standard">September 8, 2024</span>
</div>
</div>
</div>
</a>
<a class="col-md-6 blog-card" href="/post">
<div class="border-0">
<img class="blog-img object-fit-cover w-100" src="/images/sticker.jpg"/>
<div class="pb-2">
<span class="my-3 d-inline-block border blog-badge rounded-pill py-1 px-2">TIPS & TRIKS</span>
<h6 class="fw-semibold mb-2">Cara Mengamankan Data di Cloud: Tips dan Trik Terbaik</h6>
<div class="d-flex align-items-center text-muted">
<span class="fw-semibold text-standard">Eriga Syifaudin</span>
<span class="mx-1">-</span>
<span class="text-standard">September 7, 2024</span>
</div>
</div>
</div>
</a>
<a class="col-md-6 blog-card" href="/post">
<div class="border-0">
<img class="blog-img object-fit-cover w-100" src="/images/yasin.jpg"/>
<div class="pb-2">
<span class="my-3 d-inline-block border blog-badge rounded-pill py-1 px-2">TUTORIAL</span>
<h6 class="fw-semibold mb-2">Rekomendasi 12 Situs Freelance Yang Dapat Menghasilkan Uang</h6>
<div class="d-flex align-items-center text-muted">
<span class="fw-semibold text-standard">Siti Rohmah Noviah</span>
<span class="mx-1">-</span>
<span class="text-standard">August 14, 2024</span>
</div>
</div>
</div>
</a>
</div>

<div class="d-flex align-items-center justify-content-center gap-2">
<button class="btn btn-outline-secondary btn-sm" disabled="" type="button"><i class="bi bi-chevron-left"></i></button>
<button class="btn btn-secondary btn-sm" type="button">1</button>
<button class="btn btn-outline-secondary btn-sm" type="button">2</button>
<button class="btn btn-outline-secondary btn-sm" type="button">3</button>
<button class="btn btn-outline-secondary btn-sm" type="button">...</button>
<button class="btn btn-outline-secondary btn-sm" type="button"><i class="bi bi-chevron-right"></i></button>
</div>
</div>

<div class="col-lg-4">
<div class="mb-4 d-none d-md-block">
<form action="" class="d-flex">
<input class="form-control" placeholder="Search Article Title" type="text"/>
<button class="ms-2 btn my-btn-primary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
</form>
</div>
<div class="mb-4">
<h6 class="fw-bold mb-3">Artikel Populer</h6>
<ul class="list-unstyled sidebar-list">
<li class="mb-4">
<a class="d-flex align-items-center" href="/post">
<img alt="pop1" class="me-3" height="64" src="/images/yasin.jpg" width="64"/>
<div>
<span class="fw-semibold small mb-1 text-decoration-none d-block">21+ Rekomendasi Template Blogger Gratis dan Responsive</span>
<div class="text-muted text-standard">April 19, 2023</div>
</div>
</a>
</li>
<li class="mb-4">
<a class="d-flex align-items-center" href="/post">
<img alt="pop2" class="me-3" height="64" src="/images/kaos.jpg" width="64"/>
<div>
<span class="fw-semibold small mb-1 text-decoration-none d-block">7 Raksasa Industri Bisnis Indonesia Yang (segera) Bangkrut [Update 2018]</span>
<div class="text-muted text-standard">July 21, 2017</div>
</div>
</a>
</li>
<li class="mb-4">
<a class="d-flex align-items-center" href="/post">
<img alt="pop3" class="me-3" height="64" src="/images/sticker.jpg" width="64"/>
<div>
<span class="fw-semibold small mb-1 text-decoration-none d-block">19 Istilah dalam Dunia Hacking yang Wajib Anak IT Ketahui</span>
<div class="text-muted text-standard">March 31, 2020</div>
</div>
</a>
</li>
<li class="mb-4">
<a class="d-flex align-items-center" href="/post">
<img alt="pop4" class="me-3" height="64" src="/images/brosur.jpg" width="64"/>
<div>
<span class="fw-semibold small mb-1 text-decoration-none d-block">Cara Mudah Membuat LinkTree di Instagram untuk Bisnis Online</span>
<div class="text-muted text-standard">June 3, 2020</div>
</div>
</a>
</li>
</ul>
</div>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>





</div>
</template>
