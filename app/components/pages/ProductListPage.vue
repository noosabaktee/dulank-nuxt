<script setup lang="ts">
useLegacyPage({
  "title": "Produk",
  "styles": [
    "/css/style-product-list.css"
  ],
  "scripts": [
    "/js/pages/product-list-01.js",
    "/js/component.js",
    "/js/profile.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-product-list">
<div class="category-navbar-pl py-3 bg-light" id="navigasi">
<div class="container mt-5">
<h1>Products</h1>
<p>Home > Products </p>
</div>
</div>
<main>

<div class="slider mt-5 mb-5">
<div class="container">
<div class="carousel-wrapper">

<button class="nav-button" id="prev" type="button">❮</button>
<div class="carousel-container">
<div class="carousel" id="carousel">
<div class="itemz"><img alt="Brandit" src="/images/brandit.png"/></div>
<div class="itemz"><img alt="Brandit" src="/images/brandit.png"/></div>
<div class="itemz"><img alt="Brandit" src="/images/brandit.png"/></div>
<div class="itemz"><img alt="Brandit" src="/images/brandit.png"/></div>
<div class="itemz"><img alt="Brandit" src="/images/brandit.png"/></div>
<div class="itemz"><img alt="Brandit" src="/images/brandit.png"/></div>
<div class="itemz"><img alt="Brandit" src="/images/brandit.png"/></div>
<div class="itemz"><img alt="Brandit" src="/images/brandit.png"/></div>
<div class="itemz"><img alt="Brandit" src="/images/brandit.png"/></div>
<div class="itemz"><img alt="Brandit" src="/images/brandit.png"/></div>

</div>
</div>
<button class="nav-button" id="next" type="button">❯</button>
</div>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>









</div>
</template>
