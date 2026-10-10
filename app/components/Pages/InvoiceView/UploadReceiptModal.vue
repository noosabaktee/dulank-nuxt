<template>
  <div
    aria-hidden="true"
    aria-labelledby="uploadReceiptModalLabel"
    class="modal fade"
    id="uploadReceiptModal"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content" id="inline-style-invoice-view-003">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title fw-semibold" id="uploadReceiptModalLabel">
            Informasi Pembayaran:
          </h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label text-standard">Invoice:</label>
              <input
                class="form-control"
                disabled=""
                type="text"
                value="#2337775"
              />
            </div>
            <div class="mb-3">
              <label class="form-label text-standard">Tanggal Transfer:</label>
              <input
                class="form-control"
                placeholder="hh/bb/tttt"
                type="date"
              />
            </div>
            <div class="mb-3">
              <label class="form-label text-standard">Metode Pembayaran:</label>
              <input
                class="form-control"
                disabled=""
                type="text"
                value="Transfer Bank (BCA)"
              />
            </div>
            <div class="mb-3">
              <label class="form-label text-standard"
                >Jumlah yang Ditransfer:</label
              >
              <input class="form-control" placeholder="" type="text" />
            </div>
            <div class="mb-3">
              <label class="form-label text-standard"
                >Tanda Terima: <span class="text-danger">*</span>
                <span class="small text-danger"
                  >2MB maksimum. (PDF, JPG, JPEG, PNG saja)</span
                ></label
              >
              <input
                accept=".pdf,.jpg,.jpeg,.png"
                class="form-control text-standard"
                type="file"
              />
            </div>
          </div>
          <div class="modal-footer border-0 pt-0">
            <button class="btn my-btn-primary w-100" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
