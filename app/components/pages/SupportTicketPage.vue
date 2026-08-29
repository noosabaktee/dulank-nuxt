<script setup lang="ts">
useLegacyPage({
  "title": "Support Ticket",
  "styles": [
    "/css/style.css",
    "/css/pages/support-ticket-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/profile.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-support-ticket">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><ProfileSidebar /></div>

<div class="col-lg-9">
<div class="recent-orders">
<div class="mt-2 mt-md-0 d-flex justify-content-between">
<h5 class="section-title mb-0">Support Ticket</h5>
<div class="d-flex">
<form action="" class="d-flex">
<input class="form-control" placeholder="search" type="text"/>
<button class="ms-2 btn my-btn-primary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
</form>
<div class="dropdown ms-2">
<button aria-expanded="false" class="btn my-btn-primary dropdown-toggle" data-bs-toggle="dropdown" id="dropdownMenuButton1" type="button">
                                        Sorting
                                    </button>
<ul aria-labelledby="dropdownMenuButton1" class="dropdown-menu">
<li><a class="dropdown-item" href="#">Newest</a></li>
<li><a class="dropdown-item" href="#">Oldest</a></li>
<li><a class="dropdown-item" href="#">Highest</a></li>
</ul>
</div>
</div>
</div>
<hr/>
<div>
<div class="row align-items-center py-2 px-3 d-none d-md-flex fw-bold">
<div class="col-md-4 small">Ticket Subject</div>
<div class="col-md-3 small">Data Submitted | Update</div>
<div class="col-md-2 small">Type</div>
<div class="col-md-1 small">Priority</div>
<div class="col-md-2 small text-end">Status</div>
</div>

<div class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-4" data-label="Ticket Subject"><a href="/support-ticket-detail">Tidak bisa upload</a></div>
<div class="col-12 col-md-3" data-label="Data Submitted | Update">13/06/25, 13:50</div>
<div class="col-12 col-md-2" data-label="Type">Website problem</div>
<div class="col-12 col-md-1" data-label="Priority">Urgent</div>
<div class="col-12 col-md-2 text-start text-md-end" data-label="Status">On proses</div>
</div>

<div class="row table-product align-items-md-center py-3 px-3 border-bottom-md-0">
<div class="col-12 col-md-4" data-label="Ticket Subject"><a href="/support-ticket-detail">Hasil cetak kurang 500 pcs</a></div>
<div class="col-12 col-md-3" data-label="Data Submitted | Update">13/06/25, 13:50</div>
<div class="col-12 col-md-2" data-label="Type">Complaint</div>
<div class="col-12 col-md-1" data-label="Priority">Urgent</div>
<div class="col-12 col-md-2 text-start text-md-end" data-label="Status">Closed</div>
</div>
</div>
<button class="btn my-btn-primary my-4" data-bs-target="#addNewTicketModal" data-bs-toggle="modal" type="button">Submit New Ticket</button>
<div class="text-standard d-flex justify-content-end mt-2">
                            Tampilkan
                            <select aria-label="Default select example" class="text-standard mx-2">
<option value="10">10</option>
<option value="20">20</option>
<option value="50">50</option>
</select>
                            Per Halaman
                        </div>
</div>
</div>
</div>
</div>
</main>

<div aria-hidden="true" aria-labelledby="addNewTicketModalLabel" class="modal fade text-standard" id="addNewTicketModal" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header py-2">
<h5 class="modal-title" id="addNewTicketModalLabel">Submit New Ticket</h5>
<div class="d-flex align-items-center">
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
</div>
<div class="modal-body">
<div class="mb-4">
<div class="text-secondary mb-4" id="inline-style-support-ticket-001">
                            We normally respond tickets within 2 business days.
                        </div>
<form>
<div class="mb-3">
<label class="form-label small">Subject</label>
<input class="form-control" placeholder="Enter subject" type="text"/>
</div>
<div class="row g-3 mb-3">
<div class="col-md-6">
<label class="form-label small">Type</label>
<select class="form-select text-standard">
<option selected="">Choose Type</option>
<option>Website Problem</option>
<option>Partner Request</option>
<option>Complaint</option>
<option>Info Inquiry</option>
</select>
</div>
<div class="col-md-6">
<label class="form-label small">Priority</label>
<select class="form-select text-standard">
<option selected="">How urgent is your issue?</option>
<option>Urgent</option>
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>
</div>
</div>
<div class="mb-3">
<label class="form-label small">Describe your issue</label>
<textarea class="form-control border-danger-subtle text-standard" placeholder="Describe your issue" rows="4"></textarea>
</div>
<div class="mb-4">
<div class="input-group">
<input class="form-control text-standard" type="file"/>
</div>
</div>
<div class="d-flex justify-content-end gap-2">
<button aria-label="Close" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button class="btn my-btn-primary" type="submit">Submit Ticket</button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
<footer>
<div><LayoutAppFooter /></div>
</footer>






</div>
</template>
