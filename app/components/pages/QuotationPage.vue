<script setup lang="ts">
useLegacyPage({
  "title": "Quotation | Dulank",
  "styles": [
    "/css/style.css",
    "/css/save.css",
    "/css/pages/quotation.css",
    "/css/pages/quotation-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/save.js",
    "/js/pages/quotation.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-quotation">
<div class="container mt-3">
<p class="text-standard">Home > Quotation</p>
</div>
<main>

<div class="container my-5">

<div class="mb-1">
<h1 class="text-center fs-3 fw-bold my-text-primary mb-5">Quotation</h1>
<div class="row mb-4">
<div class="col-md-5">
<h6>PT. DULANK SEMESTA CIDA</h6>
<p>Percetakan Dulank</p>
<p>Jl. Arif Rahman Hakim / Niaga (depan stasiun) Karawang Kel. Nagasari Kec. Karawang Barat Kab. Karawang Jawa Barat</p>
</div>
<div class="col-md-4">
</div>
<div class="col-md-3 align-items-end">
<div class="ratio" id="inline-style-quotation-001">
<img alt="" class="w-75" src="/images/brosur.jpg"/>
</div>
</div>
</div>
<h6>Quotation For</h6>
<div class="row">
<div class="col-md-5">
<form action="" class="quotation-for-form">
<label class="text-standard">Company</label>
<input class="form-control mt-1 mb-3" placeholder="Your Company Name" type="text"/>
<label class="text-standard">Address</label>
<input class="form-control mt-1 mb-3" placeholder="Company Address" type="text"/>
<label class="text-standard">Phone</label>
<input class="form-control mt-1 mb-3" placeholder="Your Phone" type="text"/>
<label class="text-standard">Attention</label>
<input class="form-control mt-1 mb-3" placeholder="Attention Name" type="text"/>
</form>
<div class="d-flex justify-content-end">
<button class="btn my-btn-outline-primary" type="button">Ganti</button>
</div>
</div>
<div class="col-md-3"></div>
<div class="col-md-4">
<div class="d-flex">
<p class="text-standard w-50">Qoute Number</p>
<p class="text-standard text-end w-50">00001</p>
</div>
<div class="d-flex">
<p class="text-standard w-50">Quote Date</p>
<p class="text-standard text-end w-50">20-05-2025</p>
</div>
<div class="d-flex">
<p class="text-standard w-50">Due Date</p>
<p class="text-standard text-end w-50">04-05-2025</p>
</div>
<div class="d-flex">
<p class="text-standard w-50">Quote Currency</p>
<p class="text-standard text-end w-50">IDR</p>
</div>
<div class="d-flex">
<p class="text-standard w-50">Term of Payment</p>
<p class="text-standard text-end w-50">One Month</p>
</div>
</div>
</div>
</div>
<div class="px-2 px-md-0">

<div>

<div class="row my-3 my-bg-primary h-100 text-white">
<div class="col-1 col-md-3 py-2 d-md-flex">
<span class="text-standard my-auto w-25">No</span>
<span class="text-standard my-auto d-md-inline-block d-none w-75">Qty</span>
</div>
<div class="col-11 col-md-5 py-2 ps-md-0 ps-4">
<p class="text-standard my-auto">Product</p>
</div>
<div class="col-3 d-none d-md-inline-block">
<div class="row">
<div class="col-6 py-2">
<p class="text-standard my-auto">Price</p>
</div>
<div class="col-6 py-2">
<p class="text-standard my-auto">Amount</p>
</div>
</div>
</div>
<div class="col-1 py-2 text-center d-none d-md-inline-block">
<p class="text-standard my-auto">Action</p>
</div>
</div>
</div>

<div>

<div class="row my-3">
<div class="col-1 col-md-3 d-md-flex">
<div class="w-25">
<span>1</span>
</div>
<div class="d-md-flex w-75 d-none">
<button class="quantity-btn quantity-minus" type="button">−</button>
<input class="quantity-input w-50" min="1" type="number"/>
<button class="quantity-btn quantity-plus" type="button">+</button>
</div>
</div>
<div class="d-md-flex col-11 col-md-5 justify-content-md-between d-flex ps-md-0 ps-4">
<img alt="Kaos" class="object-fit-cover rounded-2" height="64" src="/images/yasin.jpg" width="64"/>
<div class="ms-3">
<div class="fw-semibold text-color small">Yasin Tahlil <span class="text-standard fst-italic text-primary" data-bs-target="#jobModal" data-bs-toggle="modal" role="button">Your Job Name <i class="fa-solid fa-pen-to-square"></i></span></div>
<div class="text-secondary text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</div>
<div class="d-md-none d-flex mx-auto my-2">
<button class="quantity-btn quantity-minus" type="button">−</button>
<input class="quantity-input w-50" min="1" type="number"/>
<button class="quantity-btn quantity-plus" type="button">+</button>
</div>
<span class="fw-semibold d-md-none text-dark total-item">Rp65.000</span>
</div>
</div>
<div class="col-md-3">
<div class="row">
<div class="col-md-6 mt-2 mt-md-0">
<span class="fw-semibold d-md-inline-block d-none text-dark total-item">Rp65.000</span>
</div>
<div class="col-md-6 mt-2 mt-md-0 text-md-start text-end">
<span class="fw-semibold text-dark total-item">Rp65.000</span>
</div>
</div>
</div>
<div class="col-md-1 text-md-center text-end justify-content-end mt-2 mt-md-0">
<h4 class="mx-2 btn-remove-save" role="button"><i class="bi bi-trash"></i></h4>
</div>
</div>
</div>
</div>
<div class="d-flex justify-content-start mt-5">
<div class="alert alert-info text-standard py-1 px-2" role="alert">
                    *untuk menambahkan produk pada list qoutation, silahkan ke halaman produk pilih spesifikasi dan klik qoutation
                </div>
</div>
<div class="mt-5 row">
<div class="col-md-8">
<label class="mb-2">Terms and Conditions</label>
<div class="text-standard">
                        1. Jangka waktu pembayaran 30 hari sejak tanggal faktur. <br/>
                        2. jika tidak termasuk dalam cover area pengirman gratis, maka harga belum termasuk biaya pengiriman <br/>
                        3. pengerjaan dimulai setelah ada PO atau down payment 50% <br/>
                        4. Pembayaran dapat dilakukan melalui transfer bank ke rekening BCA 109-2993242 an PT. DULANK Semesta Cida
                    </div>
</div>
<div class="col-md-4 text-end mt-3 mt-md-0">
<div class="d-flex">
<p class="text-standard w-50">Subtotal</p>
<p class="text-standard text-end w-50">Rp130.000</p>
</div>
<div class="d-flex">
<p class="text-standard w-50">PPN (5%)</p>
<p class="text-standard text-end w-50">Rp6.500</p>
</div>
<div class="d-flex pt-3" id="inline-style-quotation-002">
<p class="text-standard my-text-primary w-50">Jumlah Total</p>
<p class="my-text-primary text-end w-50" id="grandTotal">Rp0</p>
</div><br/>
<small class="d-none text-standard text-danger" id="info-selected-all"><i class="fa-solid fa-circle-info"></i> please input your quotation for<br/></small>
<button class="btn my-btn-primary mt-2" id="view-btn" type="button">View Quotation</button>
</div>
</div>

<div class="empty-save-container d-none text-center py-5">
<i class="fa-regular fa-file-lines empty-save-icon fa-4x text-muted mb-4"></i>
<h4>Your quotation is empty</h4>
<p class="text-muted mb-4">You don't have any products added to quotation yet.</p>
<a class="btn btn-danger my-bg-primary px-4 py-2 rounded-0" href="#">Continue Shopping</a>
</div>
</div>
</main>

<div aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" id="exampleModal" tabindex="-1">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header border-0">
<h5 class="modal-title" id="exampleModalLabel">Your Job Name</h5>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body bg-light">
<label class="text-standard mb-2">Job Name</label>
<input class="form-control" placeholder="enter your job name" type="text"/>
</div>
<div class="modal-footer border-0">
<button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
<button class="btn btn-primary" type="button">Save changes</button>
</div>
</div>
</div>
</div>
<footer>
<div><LayoutAppFooter /></div>
</footer>







</div>
</template>
