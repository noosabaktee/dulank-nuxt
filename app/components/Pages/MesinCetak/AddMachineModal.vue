<template>
  <div
    aria-hidden="true"
    aria-labelledby="addNewMachineModalLabel"
    class="modal fade text-standard"
    id="addNewMachineModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 class="modal-title" id="addNewMachineModalLabel">
            Add New Machine Profile
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
                  <label class="form-label" for="name">Nama Mesin</label>
                </div>
                <div class="col-7">
                  <input class="form-control" id="name" type="text" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="warna-unit">Warna Unit</label>
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator"
                    id="warna-unit"
                    type="text"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label">Area Kertas</label>
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
                          id="width-add"
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
                          id="height-add"
                          type="hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="width-jepitan"
                    >Lebar Jepitan</label
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
                    id="width-jepitan"
                    type="hidden"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="max-gms">Maksimal GSM</label>
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input class="result-input" id="max-gms" type="hidden" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="price-plat">Harga Plat</label>
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator price-input"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input class="result-input" id="price-plat" type="hidden" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="endurance-plat"
                    >Ketahanan Plat (Lbr)</label
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
                    id="endurance-plat"
                    type="hidden"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="insit">Insit Setelan</label>
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input class="result-input" id="insit" type="hidden" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="min-qty">Minimum Qty</label>
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input class="result-input" id="min-qty" type="hidden" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="min-price"
                    >Harga Minimum</label
                  >
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator price-input"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input class="result-input" id="min-price" type="hidden" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="price-duck">Harga Druck</label>
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator price-input"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input class="result-input" id="price-duck" type="hidden" />
                </div>
              </div>
              <small
                class="d-none text-standard text-danger"
                id="info-selected-all"
                ><i class="fa-solid fa-circle-info"></i> please input your
                specification<br
              /></small>
              <div class="row mb-3">
                <div class="col-5">
                  <button class="btn w-100" id="cancel-btn-1" type="button">
                    Batal
                  </button>
                </div>
                <div class="col-7">
                  <button class="btn my-btn-primary w-100" id="save-btn">
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
