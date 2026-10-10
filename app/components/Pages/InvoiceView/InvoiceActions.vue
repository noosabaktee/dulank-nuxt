<template>
  <div class="col-lg-3">
    <div class="card mb-4 my-bg-primary">
      <div class="card-body text-white">
        <div class="mb-2">
          <div class="fw-semibold text-standardfs-6">Total Due</div>
          <div class="fw-semibold fs-3">Rp. 998,445</div>
        </div>
        <div class="mb-2">
          <label class="form-label text-standard mb-1">Payment Method:</label>
          <select
            class="form-select text-standard"
            id="inline-style-invoice-view-002"
          >
            <option selected="">Transfer Bank (BCA)</option>
          </select>
        </div>
        <button
          class="btn bg-white my-text-primary w-100 mb-3"
          data-bs-target="#uploadReceiptModal"
          data-bs-toggle="modal"
          type="button"
        >
          Upload Tanda Terima
        </button>
        <div class="text-standard">
          Verifikasi pembayaran bank transfer hanya dilakukan pada
          Senin–Jumat.<br /><br />
          Nama Bank: BCA<br />
          Nama Penerima: PT. Exabytes Network Indonesia<br />
          No. Rekening: 007 053 0188<br />
          <br /><span class="text-standard"
            >Catatan: Setelah mengunggah bukti transfer, Tim Billing kami akan
            memverifikasi pembayaran Anda maksimal 1 x 24 jam.</span
          ><br />
          Reference Number: 2337775<br />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="fw-semibold mb-2">Actions</div>
        <a class="btn btn-outline-primary w-100" href="/print-order"
          ><i class="bi bi-download me-1"></i>Download</a
        >
      </div>
    </div>
  </div>
</template>
