<script setup lang="ts">
useLegacyPage({
  "title": "Contact Us | Dulank",
  "styles": [
    "/css/style.css",
    "/css/pages/contact-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/pages/contact.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-contact">
<main>

<div class="container my-5">
<div class="row text-standard">
<div class="col-md-6">
<p class="fs-6">Contact Us</p>
<form>
<div class="form-group my-4">
<label class="my-1" for="name">Name</label>
<input class="form-control" id="name" placeholder="Your Name" type="text"/>
</div>
<div class="form-group my-4">
<label class="my-1" for="email">Email</label>
<input class="form-control" id="email" placeholder="Your Email" type="text"/>
</div>
<div class="form-group my-4">
<label class="my-1" for="phone">Phone</label>
<input class="form-control" id="phone" placeholder="Your Phone" type="text"/>
</div>
<div class="form-group my-4">
<label class="my-1" for="message">Message</label>
<textarea class="form-control" id="message" rows="3"></textarea>
</div>
<small class="d-none text-standard text-danger" id="info-selected-all"><i class="fa-solid fa-circle-info"></i> please input your message<br/></small>
<div class="d-flex justify-content-end">
<button class="btn my-btn-primary my-4 w-50" id="send" type="submit">Send</button>
</div>
</form>
</div>
<div class="col-md-6">
<p class="fs-6">Our Shop Location</p>
<p>Alamat kami : Jl. Arif Rahman Hakim / Niaga (depan stasiun) Karawang Kel. Nagasari Kec. Karawang Barat Kab. Karawang Jawa Barat</p>
<div>
<iframe allowfullscreen="" class="w-100" height="400" id="inline-style-contact-001" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.718289330365!2d107.299863!3d-6.305763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69765284335fd5%3A0x91110be4c9c4c9d4!2sPercetakan%20Dulank%20PT.%20Dulank%20Semesta%20Cida!5e0!3m2!1sid!2sid!4v1746143056651!5m2!1sid!2sid"></iframe>
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
