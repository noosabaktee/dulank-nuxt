<script setup lang="ts">
useLegacyPage({
  "title": "Invoice",
  "styles": [
    "/css/style.css",
    "/css/pages/invoice-view-inline.css"
  ],
  "scripts": [
    "/js/component.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-invoice-view">
<main>
<section class="py-3 py-md-5 py-xl-8">
<div class="container">
<div class="row justify-content-center">
<h2 class="fw-bold">Invoice view</h2>
<span class="text-standard mb-md-4">Profile > Billing > Payment Confirm</span>

<div class="col-lg-9">
<div class="mb-4">
<div class="shadow p-5">
<div class="row mb-3">
<div class="col-md-6 mb-2 d-flex justify-content-between align-items-center">
<div>
<h2 class="fw-normal fs-4 mb-0" id="inline-style-invoice-view-001">Proforma Invoice</h2>
<div class="fs-4 fw-light mb-2">#2337775</div>
</div>
<div><span class="badge text-bg-danger">Unpaid</span></div>
</div>
<div class="col-md-4">
<div class="d-flex justify-content-between text-standard"><span class="fw-semibold text-standard">Invoice Date :</span>26/06/2025</div>
<div class="d-flex justify-content-between text-standard"><span class="fw-semibold text-standard">Due Date :</span>03/07/2025</div>
<div class="d-flex justify-content-between text-standard"><span class="fw-semibold text-standard">Nomor PO :</span>600449168</div>
</div>
</div>
<div class="row">
<div class="col-6 mb-3">
<div class="mb-2 fw-semibold text-standard">Pay To:</div>
<div class="text-standard">
                                            PT. DULANK SEMESTA CIDA<br/>
                                            Cecep Sudirman<br/>
                                            gading elok 2 blok e1 no.1,<br/>
                                            Karawang, Jawa Barat, 41371<br/>
                                            Indonesia
                                        </div>
</div>
<div class="col-6">
<div class="mb-2 fw-semibold text-standard">Invoiced To:</div>
<div class="text-standard">
                                            PT. Exabytes Network Indonesia<br/>
                                            Cyber 2 Tower, Lantai 29,<br/>
                                            Jalan HR Rasuna Said,<br/>
                                            XS No. 13, Jakarta Selatan, 12950.
                                        </div>
</div>
</div>
<div class="row mb-5">
<div class="col-6 offset-6">
<div class="mb-2 fw-semibold text-standard">Shipping To:</div>
<div class="text-standard">
                                            PT. Exabytes Network Indonesia<br/>
                                            Cyber 2 Tower, Lantai 29,<br/>
                                            Jalan HR Rasuna Said,<br/>
                                            XS No. 13, Jakarta Selatan, 12950.
                                        </div>
</div>
</div>
<div class="mb-3">
<div class="fw-semibold text-standard mb-2">Invoice Items</div>
<div class="table-responsive">
<table class="table table-bordered align-middle mb-0">
<thead>
<tr>
<th class="text-standard">Products</th>
<th class="text-end text-standard">Amount</th>
</tr>
</thead>
<tbody>
<tr>
<td class="text-standard">
<span class="fw-semibold text-standard">Brosur PPDN SMAN 1 Bandung</span><br/><br/>
<span class="text-standard fst-italic">Description:</span><br/>
<span class="text-standard">Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa Laminasi, Tanpa Lipatan</span><br/>
<span class="text-standard">Artwork : Ada file ready to print</span><br/>
<span class="text-standard">Hasil Cetak : Warna Standard CMYK</span><br/>
<span class="text-standard fst-italic">Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
<div class="d-flex justify-content-between">
<span class="text-standard">Rp34.000 x 1 Pcs</span>
</div>
</td>
<td class="text-end text-standard">Rp.899,500</td>
</tr>
<tr>
<td class="text-end text-standard fw-semibold" colspan="1">Total Harga</td>
<td class="text-end text-standard">Rp.899,500</td>
</tr>
<tr>
<td class="text-end text-standard fw-semibold" colspan="1">Voucher (DUL4NK12)</td>
<td class="text-end text-standard">Rp.899,500</td>
</tr>
<tr>
<td class="text-end text-standard fw-semibold" colspan="1">Biaya Pengiriman</td>
<td class="text-end text-standard">Rp.89,500</td>
</tr>
<tr>
<td class="text-end text-standard fw-semibold" colspan="1">Sub total sebelum PPN</td>
<td class="text-end text-standard">Rp.98,945</td>
</tr>
<tr>
<td class="text-end text-standard fw-semibold" colspan="1">PPN (11%)</td>
<td class="text-end text-standard">Rp.0</td>
</tr>
<tr>
<td class="text-end text-standard fw-semibold" colspan="1">Grand Total</td>
<td class="text-end text-standard fw-semibold">Rp.998,445</td>
</tr>
</tbody>
</table>
<div class="text-standard mt-1">* Indicates a taxed item.</div>
</div>
</div>
</div>
</div>
</div>

<div class="col-lg-3">
<div class="card mb-4 my-bg-primary">
<div class="card-body text-white">
<div class="mb-2">
<div class="fw-semibold text-standardfs-6">Total Due</div>
<div class="fw-semibold fs-3">Rp. 998,445</div>
</div>
<div class="mb-2">
<label class="form-label text-standard mb-1">Payment Method:</label>
<select class="form-select text-standard" id="inline-style-invoice-view-002">
<option selected="">Transfer Bank (BCA)</option>
</select>
</div>
<button class="btn bg-white my-text-primary w-100 mb-3" data-bs-target="#uploadReceiptModal" data-bs-toggle="modal" type="button">Upload Tanda Terima</button>
<div class="text-standard">
                                    Verifikasi pembayaran bank transfer hanya dilakukan pada Senin–Jumat.<br/><br/>
                                    Nama Bank: BCA<br/>
                                    Nama Penerima: PT. Exabytes Network Indonesia<br/>
                                    No. Rekening: 007 053 0188<br/>
<br/><span class="text-standard">Catatan: Setelah mengunggah bukti transfer, Tim Billing
                                        kami akan memverifikasi pembayaran Anda maksimal 1 x 24 jam.</span><br/>
                                    Reference Number: 2337775<br/>
</div>
</div>
</div>
<div class="card">
<div class="card-body">
<div class="fw-semibold mb-2">Actions</div>
<a class="btn btn-outline-primary w-100" href="/print-order"><i class="bi bi-download me-1"></i>Download</a>
</div>
</div>
</div>
</div>
</div>
</section>

<div aria-hidden="true" aria-labelledby="uploadReceiptModalLabel" class="modal fade" id="uploadReceiptModal" tabindex="-1">
<div class="modal-dialog">
<div class="modal-content" id="inline-style-invoice-view-003">
<div class="modal-header border-0 pb-0">
<h5 class="modal-title fw-semibold" id="uploadReceiptModalLabel">Informasi Pembayaran:</h5>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<form>
<div class="modal-body">
<div class="mb-3">
<label class="form-label text-standard">Invoice:</label>
<input class="form-control" disabled="" type="text" value="#2337775"/>
</div>
<div class="mb-3">
<label class="form-label text-standard">Tanggal Transfer:</label>
<input class="form-control" placeholder="hh/bb/tttt" type="date"/>
</div>
<div class="mb-3">
<label class="form-label text-standard">Metode Pembayaran:</label>
<input class="form-control" disabled="" type="text" value="Transfer Bank (BCA)"/>
</div>
<div class="mb-3">
<label class="form-label text-standard">Jumlah yang Ditransfer:</label>
<input class="form-control" placeholder="" type="text"/>
</div>
<div class="mb-3">
<label class="form-label text-standard">Tanda Terima: <span class="text-danger">*</span> <span class="small text-danger">2MB maksimum. (PDF, JPG, JPEG, PNG
                                        saja)</span></label>
<input accept=".pdf,.jpg,.jpeg,.png" class="form-control text-standard" type="file"/>
</div>
</div>
<div class="modal-footer border-0 pt-0">
<button class="btn my-btn-primary w-100" type="submit">Upload</button>
</div>
</form>
</div>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>





</div>
</template>
