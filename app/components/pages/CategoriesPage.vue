<script setup lang="ts">
useLegacyPage({
  "title": "Percetakan Dulank - Online Printing Shop",
  "styles": [
    "/css/style.css",
    "/css/category.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/profile.js",
    "/js/pages/categories.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-categories">
<div class="category-navbar py-3 bg-light">
<div class="container mt-3">
<h4>Categories</h4>
<p>Home > Categories</p>
</div>
</div>
<main>

<div class="container my-5">

<section class="categories-section">
<div class="container">
<div class="row mb-4">
<div class="col-md-7 p-2">
<div class="bg-light rounded-1 h-100 category-sale" role="button">
<div class="row">
<div class="col-md-7 my-md-auto my-4 text-md-start text-center">
<div class="ms-md-4 py-2">
<p class="fs-6">Sale 20% off all store</p>
<h4>Brosur Flyer ukuran A4</h4>
<button class="btn my-btn-primary mt-2" type="button">Shop Now</button>
</div>
</div>
<div class="col-md-5 overflow-hidden">
<img alt="" class="category-sale-image w-100 object-fit-cover" height="200" src="/images/brosur.jpg"/>
</div>
</div>
</div>
</div>
<div class="col-md-5 p-2">
<div class="bg-info-subtle rounded-1 h-100 category-sale" role="button">
<div class="row">
<div class="col-md-7 my-md-auto my-4 text-md-start text-center">
<div class="ms-md-4 py-2">
<p class="fs-6">Sale 35%</p>
<h4>Buku Yasin</h4>
<button class="btn my-btn-primary mt-2" type="button">Shop Now</button>
</div>
</div>
<div class="col-md-5 overflow-hidden">
<img alt="" class="category-sale-image w-100 object-fit-cover" height="200" src="/images/yasin.jpg"/>
</div>
</div>
</div>
</div>
</div>
<div class="row" id="categories-grid">
<a class="category-card col-md-4 mb-1" href="#">
<div class="px-2 py-5 bg-light">
<div class="category-image">
<img alt="Business Cards" class="object-fit-cover" height="300" loading="lazy" src="https://images.unsplash.com/photo-1532017737543-8743f2938776?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
</img></div>
<div class="category-name">Stationary - ATK</div>
<div class="category-count">18 products</div>
</div>
</a>
<a class="category-card col-md-4 mb-1" href="#">
<div class="px-2 py-5 bg-light">
<div class="category-image">
<img alt="Banners" class="object-fit-cover" height="300" loading="lazy" src="https://images.unsplash.com/photo-1596382940920-9f73b2d15901?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
</img></div>
<div class="category-name">Nota, Buku, Compro, Majalah</div>
<div class="category-count">9 products</div>
</div>
</a>
<a class="category-card col-md-4 mb-1" href="#">
<div class="px-2 py-5 bg-light">
<div class="category-image">
<img alt="Stickers" class="object-fit-cover" height="300" loading="lazy" src="https://images.unsplash.com/photo-1606937492590-2c6e942b1951?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
</div>
<div class="category-name">Packaging</div>
<div class="category-count">22 products</div>
</div>
</a>
<a class="category-card col-md-4 mb-1" href="#">
<div class="px-2 py-5 bg-light">
<div class="category-image">
<img alt="Booklets" class="object-fit-cover" height="300" loading="lazy" src="https://images.unsplash.com/photo-1712903276903-8122212c35fe?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
</div>
<div class="category-name">Promotion</div>
<div class="category-count">15 products</div>
</div>
</a>
<a class="category-card col-md-4 mb-1" href="#">
<div class="px-2 py-5 bg-light">
<div class="category-image">
<img alt="Flyers" class="object-fit-cover" height="300" loading="lazy" src="https://images.unsplash.com/photo-1696192505937-08400f91e631?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
</div>
<div class="category-name">Merchandise</div>
<div class="category-count">12 products</div>
</div>
</a>
<a class="category-card col-md-4 mb-1" href="#">
<div class="px-2 py-5 bg-light">
<div class="category-image">
<img alt="Brochures" class="object-fit-cover" height="300" loading="lazy" src="https://images.unsplash.com/photo-1558452919-08ae4aea8e29?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
</div>
<div class="category-name">Banner</div>
<div class="category-count">17 products</div>
</div>
</a>
</div>
</div>
</section>

</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>







</div>
</template>
