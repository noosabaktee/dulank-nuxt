<template>
  <div
    aria-hidden="true"
    aria-labelledby="addNewPaperPriceModalLabel"
    class="modal fade text-standard"
    id="addNewPaperPriceModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 class="modal-title" id="addNewPaperPriceModalLabel">
            Add New Paper Price Item
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
          <div>
            <form>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="name-paper-price"
                    >Nama Kertas (Opsional)</label
                  >
                </div>
                <div class="col-7">
                  <input
                    class="form-control"
                    id="name-paper-price"
                    type="text"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="pilihSatuan"
                    >Group Kertas tersedia</label
                  >
                </div>
                <div class="col-7">
                  <button class="btn btn-spec me-2 selected" type="button">
                    Art Carton<span class="ribbon"></span>
                  </button>
                  <button class="btn btn-spec me-2" type="button">
                    Art Paper<span class="ribbon d-none"></span>
                  </button>
                  <button class="btn btn-spec me-2" type="button">
                    HVS<span class="ribbon d-none"></span>
                  </button>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label">Ukuran Area Kertas</label>
                </div>
                <div class="col-7">
                  <div class="row">
                    <div class="col-6">
                      <div class="input-group input-group-sm">
                        <span class="input-group-text">P</span>
                        <input
                          class="form-control number-separator"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          type="text"
                        />
                        <input
                          class="result-input"
                          id="width-plano-paper-price"
                          type="hidden"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-group input-group-sm">
                        <span class="input-group-text">L</span>
                        <input
                          class="form-control number-separator"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          type="text"
                        />
                        <input
                          class="result-input"
                          id="height-plano-paper-price"
                          type="hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="pilihSatuan"
                    >Pilih Satuan Ukuran</label
                  >
                </div>
                <div class="col-7">
                  <button class="btn btn-spec me-2 selected" type="button">
                    Centimeter<span class="ribbon"></span>
                  </button>
                  <button class="btn btn-spec me-2" type="button">
                    Milimeter<span class="ribbon d-none"></span>
                  </button>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="gramatur-paper-price"
                    >Masukan Gramatur</label
                  >
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input
                    class="result-input"
                    id="gramatur-paper-price"
                    type="hidden"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="min-order"
                    >Minimal Order</label
                  >
                </div>
                <div class="col-7 d-flex align-items-center">
                  <div>
                    <input
                      class="form-control number-separator price-input"
                      inputmode="numeric"
                      pattern="[0-9]*"
                      type="text"
                    />
                    <input class="result-input" id="min-order" type="hidden" />
                  </div>
                  <div class="d-flex ms-1">
                    <button class="btn btn-spec me-2 selected" type="button">
                      Lembar<span class="ribbon"></span>
                    </button>
                    <button class="btn btn-spec me-2" type="button">
                      Rim<span class="ribbon d-none"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="multiple-order"
                    >Order Kelipatan</label
                  >
                </div>
                <div class="col-7 d-flex align-items-center">
                  <div>
                    <input
                      class="form-control number-separator price-input"
                      inputmode="numeric"
                      pattern="[0-9]*"
                      type="text"
                    />
                    <input
                      class="result-input"
                      id="multiple-order"
                      type="hidden"
                    />
                  </div>
                  <div class="d-flex ms-1">
                    <button class="btn btn-spec me-2 selected" type="button">
                      Lembar<span class="ribbon"></span>
                    </button>
                    <button class="btn btn-spec me-2" type="button">
                      Rim<span class="ribbon d-none"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="paper-price"
                    >Harga Kertas</label
                  >
                </div>
                <div class="col-7 d-flex align-items-center">
                  <div>
                    <input
                      class="form-control number-separator price-input"
                      inputmode="numeric"
                      pattern="[0-9]*"
                      type="text"
                    />
                    <input
                      class="result-input"
                      id="paper-price"
                      type="hidden"
                    />
                  </div>
                  <div class="d-flex ms-1">
                    <button class="btn btn-spec me-2 selected" type="button">
                      Lembar<span class="ribbon"></span>
                    </button>
                    <button class="btn btn-spec me-2" type="button">
                      Rim<span class="ribbon d-none"></span>
                    </button>
                  </div>
                </div>
              </div>
              <small
                class="d-none text-standard text-danger"
                id="info-selected-all-4"
                ><i class="fa-solid fa-circle-info"></i> please input your
                specification<br
              /></small>
              <div class="row mb-3">
                <div class="col-5">
                  <button class="btn w-100" id="cancel-btn-4" type="button">
                    Batal
                  </button>
                </div>
                <div class="col-7">
                  <button class="btn my-btn-primary w-100" id="save-btn-4">
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
