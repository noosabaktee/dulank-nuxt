<script setup lang="ts">
useLegacyPage({
  "title": "Support Ticket",
  "styles": [
    "/css/style.css",
    "/css/pages/support-ticket-detail-kalkulator-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/kalkulator.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-support-ticket-detail-kalkulator">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

<div class="col-lg-9">

<div class="mb-4">

<div class="mb-3">
<div class="d-flex mb-2">
<img alt="avatar" class="object-fit-cover rounded-circle me-2" id="inline-style-support-ticket-detail-kalkulator-001" src="/images/profile.png"/>
<div>
<div class="fw-semibold small">159651</div>
<div class="small my-1">Cara Minta Bukti/Resi Pengiriman</div>
<div class="text-secondary text-standard mb-2">2025-08-07 12:38:00</div>
</div>
</div>
<hr class="my-3"/>
<div class="d-flex mb-2">
<img alt="avatar" class="object-fit-cover rounded-circle me-2" id="inline-style-support-ticket-detail-kalkulator-002" src="/images/profile.png"/>
<div>
<div class="small my-1">halo</div>
<div class="text-secondary text-standard">2025-08-14 12:18:06</div>
</div>
</div>
<hr class="my-3"/>
</div>

<div class="mb-2 fw-semibold small">Leave a Message</div>
<form>
<div class="mb-3">
<textarea class="form-control text-standard" placeholder="Write your message here..." rows="4"></textarea>
</div>
<div class="mb-3 form-check">
<input class="form-check-input" id="closeTicket" type="checkbox"/>
<label class="form-check-label text-standard" for="closeTicket">Submit and close the ticket</label>
</div>
<div class="d-flex justify-content-end">
<button class="btn my-btn-primary px-4" type="submit">Submit message</button>
</div>
</form>
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
