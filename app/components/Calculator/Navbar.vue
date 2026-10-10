<template>
<nav class="navbar navbar-expand-md relative flex flex-wrap items-center justify-between">
<div class="container-fluid w-full px-3">
<a class="navbar-brand d-md-none md:hidden" href="#">Kalkulator</a>
<button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarNav" data-bs-toggle="collapse" type="button">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-center justify-center w-full" id="navbarNav">
<ul class="navbar-nav flex flex-col md:flex-row">
<li class="nav-item">
<a aria-current="page" class="nav-link inline-flex items-center cursor-pointer" href="/"><i class="fa-solid fa-house me-2 mr-2"></i>Home</a>
</li>
<li class="nav-item">
<a class="nav-link inline-flex items-center cursor-pointer" href="/kalkulator-berat-kertas"><i class="fa-solid fa-calculator me-2 mr-2"></i>Kalkulator Berat Kertas</a>
</li>
<li class="nav-item">
<a class="nav-link inline-flex items-center cursor-pointer" href="/kalkulator-potong-kertas"><i class="fa-solid fa-calculator me-2 mr-2"></i>Kalkulator Potong Kertas</a>
</li>
<li class="nav-item">
<a class="nav-link inline-flex items-center cursor-pointer" href="/kalkulator-percetakan"><i class="fa-solid fa-calculator me-2 mr-2"></i>Kalkulator Percetakan</a>
</li>
<li class="nav-item">
<a class="nav-link inline-flex items-center cursor-pointer" href="/profile-kalkulator"><i class="fa-solid fa-gear me-2 mr-2"></i>Pengaturan</a>
</li>
</ul>
</div>
</div>
</nav>
</template>
