<template>
  <div
    aria-hidden="true"
    aria-labelledby="addressSelectBillModalLabel"
    class="modal fade text-standard"
    id="addressSelectBillModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 class="modal-title" id="addressSelectBillModalLabel">
            Alamat Saya
          </h5>
          <div class="d-flex align-items-center">
            <button
              aria-label="Close"
              class="btn-close"
              data-bs-dismiss="modal"
              type="button"
            ></button>
          </div>
        </div>
        <div class="modal-body">
          <div class="address-bill-to-list">
            <div class="d-flex align-items-start py-3 border-bottom">
              <input
                checked=""
                class="form-check-input mt-1 me-2 p-2"
                id="addressBill1"
                name="addressBill"
                type="radio"
              />
              <div class="flex-grow-1 address-bill-to-list-value" role="button">
                <div class="align-items-center">
                  <span class="fw-semibold text-dark">Ahmad Dhani</span>
                  <span class="text-secondary ms-2">(+62) 852053769 </span>
                  <span class="badge my-bg-primary text-white align-middle ms-2"
                    >Office</span
                  >
                </div>
                <div class="text-standard text-dark small mt-1">
                  Toko Kelontong Depan Desa Teluk Jambe, <br />
                  515 Sarah Shore Suite 828, Port Kennethstad (Depan Stasiun)
                  <br />
                  KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                </div>
              </div>
            </div>
            <div class="d-flex align-items-start py-3">
              <input
                class="form-check-input mt-1 me-2 p-2"
                id="addressBill2"
                name="addressBill"
                type="radio"
              />
              <div class="flex-grow-1 address-bill-to-list-value" role="button">
                <div class="d-flex align-items-center">
                  <span class="fw-semibold text-dark">Once Mekel</span>
                  <span class="text-secondary ms-2">(+62) 852053769 </span>
                  <span class="badge my-bg-primary text-white align-middle ms-2"
                    >Home</span
                  >
                </div>
                <div class="text-standard text-dark small mt-1">
                  Toko Kelontong Depan Desa Teluk Jambe, <br />
                  515 Sarah Shore Suite 828, Port Kennethstad (Depan Stasiun)
                  <br />
                  KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                </div>
              </div>
            </div>
          </div>
          <div class="text-end mt-2">
            <button
              aria-label="Close"
              class="btn my-btn-primary w-50"
              data-bs-dismiss="modal"
              id="save-bill-to-address"
              type="button"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
