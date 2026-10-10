<template>
  <div
    aria-hidden="true"
    aria-labelledby="detailModalLabel"
    class="modal modal-sm fade"
    id="detailModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-4 pb-1">
        <div class="modal-header">
          <h5 class="modal-title" id="detailModalLabel">Detail</h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body" id="inline-style-mesin-cetak-002">
          <div>
            <div class="mb-4">
              <span class="text-standard fw-semibold"
                >Sumber : Percetakan Warna Grafika</span
              ><br />
              <span class="text-secondary text-standard"
                >Jakarta Pusat, Jakarta</span
              ><br />
              <span class="text-secondary text-standard"
                >Update : 20 Januari 2024</span
              >
            </div>
            <div class="mb-2 d-flex justify-content-between">
              <span class="text-standard">Nama Mesin</span>
              <span class="text-standard fw-semibold text-end"
                >Heidelberg GTO52</span
              >
            </div>
            <div class="mb-2 d-flex justify-content-between">
              <span class="text-standard">Warna Unit</span>
              <span class="text-standard fw-semibold text-end">4 Warna</span>
            </div>
            <div class="mb-2 d-flex justify-content-between">
              <span class="text-standard">Area Kertas</span>
              <span class="text-standard fw-semibold text-end"
                >520 x 430 Milimeter</span
              >
            </div>
            <div class="mb-2 d-flex justify-content-between">
              <span class="text-standard">Lebar Jepitan</span>
              <span class="text-standard fw-semibold text-end"
                >15 Milimeter</span
              >
            </div>
            <div class="mb-2 d-flex justify-content-between">
              <span class="text-standard">Maksimal GSM</span>
              <span class="text-standard fw-semibold text-end">310 gsm</span>
            </div>
            <div class="mb-2 d-flex justify-content-between">
              <span class="text-standard">Harga Plat</span>
              <span class="text-standard fw-semibold text-end">Rp60.000</span>
            </div>
            <div class="mb-2 d-flex justify-content-between">
              <span class="text-standard">Ketahanan Plat</span>
              <span class="text-standard fw-semibold text-end"
                >20.000 Lembar</span
              >
            </div>
            <div class="mb-2 d-flex justify-content-between">
              <span class="text-standard">Insit Setelan</span>
              <span class="text-standard fw-semibold text-end">100 Lembar</span>
            </div>
            <div class="mb-2 d-flex justify-content-between">
              <span class="text-standard">Minimum QTY</span>
              <span class="text-standard fw-semibold text-end"
                >1.000 Lembar</span
              >
            </div>
            <div class="mb-2 d-flex justify-content-between">
              <span class="text-standard">Harga Minimum</span>
              <span class="text-standard fw-semibold text-end">Rp240.000</span>
            </div>
            <div class="mb-2 d-flex justify-content-between">
              <span class="text-standard">Harga Druck</span>
              <span class="text-standard fw-semibold text-end">Rp60</span>
            </div>
            <div class="mt-3 mb-2">
              <button
                class="btn btn-outline-info w-100 py-1"
                id="inline-style-mesin-cetak-003"
                type="button"
              >
                <i class="bi bi-arrow-repeat me-1"></i> synchronize
              </button>
            </div>
            <div class="text-center mt-2">
              <button class="btn text-danger" type="button">
                <i class="bi bi-trash"></i> Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
