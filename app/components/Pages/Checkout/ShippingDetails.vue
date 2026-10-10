<template>
  <div class="pb-2 border-bottom border-2 mb-4" id="shipping-section">
    <div class="row">
      <div class="col-md-6">
        <h4 class="fs-5 ms-3">Checkout</h4>
        <div class="mt-1 ms-4">
          <h4 class="fs-6 text-dark mt-2">Bill To:</h4>
          <div class="bill-to-address">
            <div class="align-items-center">
              <span class="fw-semibold text-dark">Ahmad Dhani</span>
              <span class="text-secondary ms-2">(+62) 852053769 </span>
              <span class="badge my-bg-primary text-white align-middle ms-2"
                >Office</span
              >
            </div>
            <div class="text-standard text-dark small mt-1">
              Toko Kelontong Depan Desa Teluk Jambe, <br />
              515 Sarah Shore Suite 828, Port Kennethstad (Depan Stasiun) <br />
              KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
            </div>
          </div>
          <button
            class="btn my-btn-outline-primary float-end mb-2"
            data-bs-target="#addressSelectBillModal"
            data-bs-toggle="modal"
            type="button"
          >
            Pilih Alamat Lainnya
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mt-1 ms-4">
          <div>
            <div class="d-flex mt-3 align-items-center">
              <h4 class="fs-6 text-dark mt-2">Shiping Method:</h4>
              <div class="form-check ms-3 align-items-center">
                <input
                  checked=""
                  class="form-check-input"
                  data-js-click="checkout-001"
                  id="radioShipping1"
                  name="radioShipping"
                  type="radio"
                />
                <label
                  class="form-check-label text-standard"
                  for="radioShipping1"
                >
                  Shipping
                </label>
              </div>
              <div class="form-check ms-3 align-items-center">
                <input
                  class="form-check-input"
                  data-js-click="checkout-002"
                  id="radioShipping2"
                  name="radioShipping"
                  type="radio"
                />
                <label
                  class="form-check-label text-standard"
                  for="radioShipping2"
                >
                  Pickup
                </label>
              </div>
            </div>
          </div>
          <div id="shipping-method">
            <div class="shipping-address">
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
            <button
              class="btn my-btn-outline-primary float-end mb-2"
              data-bs-target="#addressSelectShippingModal"
              data-bs-toggle="modal"
              type="button"
            >
              Ubah Alamat
            </button>
          </div>
          <div class="d-none" id="pickup-method">
            <div id="pickup-method-address">
              <span class="fw-semibold text-dark"
                >Dulank Pickup 2
                <span class="text-dark">(081906855554)</span></span
              >
              <div class="mt-1 mb-2 text-color text-standard pickup-list-value">
                Toko Kelontong Depan Desa Teluk Jambe<br />
                515 Sarah Shore Suite 828, Port Kennethstad, Iowa, TH,<br />
                KAB. KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                <br /><br />
              </div>
            </div>
            <button
              class="btn my-btn-outline-primary float-end mb-2"
              id="pickup-btn-select"
              type="button"
            >
              Pilih Alamat Pickup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
