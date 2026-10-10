<template>
  <div
    aria-hidden="true"
    aria-labelledby="orderTrackingModalLabel"
    class="modal fade"
    id="orderTrackingModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold small" id="orderTrackingModalLabel">
            NO. PESANAN 2504027H2DQ68B
          </h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-success mb-4 small">
            <i class="fas fa-check-circle me-2"></i>
            <strong>Status: Delivered</strong> - The order has delivered.
          </div>

          <div class="progress-steps mb-4">
            <div class="steps-container position-relative">
              <div class="step completed">
                <div class="step-icon">
                  <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="step-label">Ordered</div>
              </div>
              <div class="step completed">
                <div class="step-icon"><i class="fa-solid fa-gear"></i></div>
                <div class="step-label">Proses</div>
              </div>
              <div class="step completed">
                <div class="step-icon">
                  <i class="fas fa-shipping-fast"></i>
                </div>
                <div class="step-label">Out For Delivery</div>
              </div>
              <div class="step completed">
                <div class="step-icon bg-success">
                  <i class="fas fa-check"></i>
                </div>
                <div class="step-label">Delivered</div>
              </div>
              <div id="inline-style-history-001">
                <div class="progress-connector"></div>
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-3 border border-custom mt-4 px-0 pb-4 mb-4"
          >
            <div class="px-4 pb-2 pt-4">
              <div class="row align-items-start">
                <div class="col-md-6 pe-lg-5">
                  <div class="mb-2">
                    <span class="fw-semibold text-dark small"
                      >Alamat Pengiriman</span
                    >
                  </div>
                  <div class="fw-semibold small">Ahmad Dhani</div>
                  <div class="small mb-2 small">(+62) 852053769</div>
                  <div class="small mb-3 text-standard">
                    Toko Kelontong Depan Desa Teluk Jambe,<br />
                    515 Sarah Shore Suite 828, Port Kennethstad, Iowa, TH,<br />KAB.
                    KARAWANG - TELUK JAMBE TIMUR, JAWA BARAT, ID 41360
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="timeline">
                    <div class="timeline-item">
                      <div class="timeline-marker bg-success"></div>
                      <div class="timeline-content">
                        <div
                          class="d-flex justify-content-between align-items-start"
                        >
                          <div>
                            <h6 class="fw-bold mb-1 small">Out For Delivery</h6>
                            <p class="mb-0 text-standard">Out For Delivery</p>
                          </div>
                          <small class="text-muted">2025-04-14 10:33 WIB</small>
                        </div>
                      </div>
                    </div>
                    <div class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                        <div
                          class="d-flex justify-content-between align-items-start"
                        >
                          <div>
                            <h6 class="fw-bold mb-1 small">Out For Delivery</h6>
                            <p class="mb-0 text-standard">Out For Delivery</p>
                          </div>
                          <small class="text-muted">2025-04-14 10:33 WIB</small>
                        </div>
                      </div>
                    </div>
                    <div class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                        <div
                          class="d-flex justify-content-between align-items-start"
                        >
                          <div>
                            <h6 class="fw-bold mb-1 small">Proses</h6>
                            <p class="mb-0 text-standard">
                              Arrived at Post Office
                            </p>
                          </div>
                          <small class="text-muted">2025-04-14 04:28 WIB</small>
                        </div>
                      </div>
                    </div>
                    <div class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                        <div
                          class="d-flex justify-content-between align-items-start"
                        >
                          <div>
                            <h6 class="fw-bold mb-1 small">Ordered</h6>
                            <p class="mb-0 text-standard">You ordered</p>
                          </div>
                          <small class="text-muted">2025-04-14 04:17 WIB</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3 border border-custom px-0 mb-4">
            <div class="px-4 pt-3 pb-2 border-bottom border-custom">
              <div class="align-items-center">
                <div class="d-flex">
                  <img
                    alt="Kaos"
                    class="object-fit-cover rounded-2"
                    height="64"
                    src="/images/brosur.jpg"
                    width="64"
                  />
                  <div class="ps-2">
                    <div class="fw-semibold text-color small">
                      Brosur Full Color
                    </div>
                    <div class="text-secondary text-standard">
                      Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr,
                      Tanpa Laminasi, Tanpa Lipatan
                    </div>
                    <span class="fw-semibold text-dark text-standard"
                      >Rp65.000</span
                    >
                    <span class="text-color text-standard">x2</span>
                  </div>
                </div>
                <div class="text-end">
                  <span
                    class="fw-semibold text-dark"
                    id="inline-style-history-002"
                    >Rp130.000</span
                  >
                </div>
              </div>
              <div class="align-items-center">
                <div class="d-flex">
                  <img
                    alt="Kaos"
                    class="object-fit-cover rounded-2"
                    height="64"
                    src="/images/yasin.jpg"
                    width="64"
                  />
                  <div class="ps-2">
                    <div class="fw-semibold text-color small">Yasin Tahlil</div>
                    <div class="text-secondary text-standard">
                      Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr,
                      Tanpa Laminasi, Tanpa Lipatan
                    </div>
                    <span class="fw-semibold text-dark text-standard"
                      >Rp65.000</span
                    >
                    <span class="text-color text-standard">x1</span>
                  </div>
                </div>
                <div class="text-end">
                  <span
                    class="fw-semibold text-dark"
                    id="inline-style-history-003"
                    >Rp65.000</span
                  >
                </div>
              </div>
            </div>
            <div class="px-4 pt-3 pb-4">
              <div class="row small mb-1">
                <div class="col text-end text-secondary">Subtotal Produk</div>
                <div class="col-auto" id="inline-style-history-004">
                  Rp195.000
                </div>
              </div>
              <div class="row small mb-1">
                <div class="col text-end text-secondary">
                  Subtotal Pengiriman
                </div>
                <div class="col-auto" id="inline-style-history-005">
                  Rp20.000
                </div>
              </div>
              <div class="row small mb-1">
                <div class="col text-end text-secondary">
                  Subtotal Diskon Pengiriman
                </div>
                <div
                  class="col-auto text-success"
                  id="inline-style-history-006"
                >
                  -Rp10.000
                </div>
              </div>
              <div class="row small">
                <div class="col text-end fw-semibold my-text-primary">
                  Total Pesanan
                </div>
                <div
                  class="col-auto fw-bold my-text-primary fs-6"
                  id="inline-style-history-007"
                >
                  Rp205.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
