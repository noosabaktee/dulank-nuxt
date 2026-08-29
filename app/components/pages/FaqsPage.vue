<script setup lang="ts">
useLegacyPage({
  "title": "FAQ |Dulank",
  "styles": [
    "/css/style.css",
    "/css/pages/faqs.css"
  ],
  "scripts": [
    "/js/component.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-faqs">
<div class="container mt-3">
<p class="text-standard">Home > Faqs</p>
</div>
<main>

<div class="container my-5">
<div class="row">
<div class="col-md-10 mx-auto">
<div class="mb-4">
<h1 class="fs-5">Frequently Asked Questions</h1>
<p>Berikut ini pertanyaan umum yang sering ditanyakan kepada kami, mungkin salah satunya adalah
							pertanyaan
							yang ingin kamu tanyakan.</p>
</div>
<div class="accordion" id="accordionExample">
<div class="accordion-item">
<h2 class="accordion-header">
<button aria-controls="collapseOne" aria-expanded="true" class="accordion-button text-standard" data-bs-target="#collapseOne" data-bs-toggle="collapse" type="button">
									Pertanyaan #1
								</button>
</h2>
<div class="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseOne">
<div class="accordion-body text-standard">
<strong>This is the first item's accordion body.</strong> It is shown by default,
									until the collapse
									plugin adds the appropriate classes that we use to style each element. These classes
									control the
									overall appearance, as well as the showing and hiding via CSS transitions. You can
									modify any of this
									with custom CSS or overriding our default variables. It's also worth noting that
									just about any HTML
									can go within the <code>.accordion-body</code>, though the transition does limit
									overflow.
								</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header">
<button aria-controls="collapseTwo" aria-expanded="true" class="accordion-button text-standard" data-bs-target="#collapseTwo" data-bs-toggle="collapse" type="button">
									Pertanyaan #2
								</button>
</h2>
<div class="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseTwo">
<div class="accordion-body text-standard">
<strong>This is the first item's accordion body.</strong> It is shown by default,
									until the collapse
									plugin adds the appropriate classes that we use to style each element. These classes
									control the
									overall appearance, as well as the showing and hiding via CSS transitions. You can
									modify any of this
									with custom CSS or overriding our default variables. It's also worth noting that
									just about any HTML
									can go within the <code>.accordion-body</code>, though the transition does limit
									overflow.
								</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header">
<button aria-controls="collapseThree" aria-expanded="true" class="accordion-button text-standard" data-bs-target="#collapseThree" data-bs-toggle="collapse" type="button">
									Pertanyaan #3
								</button>
</h2>
<div class="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseThree">
<div class="accordion-body text-standard">
<strong>This is the first item's accordion body.</strong> It is shown by default,
									until the collapse
									plugin adds the appropriate classes that we use to style each element. These classes
									control the
									overall appearance, as well as the showing and hiding via CSS transitions. You can
									modify any of this
									with custom CSS or overriding our default variables. It's also worth noting that
									just about any HTML
									can go within the <code>.accordion-body</code>, though the transition does limit
									overflow.
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
