<template>
  <div
    aria-hidden="true"
    aria-labelledby="addNewDieCuttingModalLabel"
    class="modal fade text-standard"
    id="addNewDieCuttingModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 class="modal-title" id="addNewDieCuttingModalLabel">
            Add New Die Cutting Profile
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
                  <label class="form-label" for="name">Nama (Opsional))</label>
                </div>
                <div class="col-7">
                  <input class="form-control" id="name" type="text" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label">Ukuran Mesin Pond</label>
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
              <hr />
              <span class="text-standard">Teknik Pond Standard</span>
              <div class="row my-3">
                <div class="col-5">
                  <label class="form-label" for="price-jasa-standard"
                    >Harga Jasa per pcs</label
                  >
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator price-input"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input
                    class="result-input"
                    id="price-jasa-standard"
                    type="hidden"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="price-min-standard"
                    >Harga Minimal</label
                  >
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator price-input"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input
                    class="result-input"
                    id="price-min-standard"
                    type="hidden"
                  />
                </div>
              </div>
              <hr />
              <span class="text-standard mb-3">Teknik Pond Setengah Putus</span>
              <div class="row my-3">
                <div class="col-5">
                  <label class="form-label" for="price-jasa-setengah"
                    >Harga Jasa per pcs</label
                  >
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator price-input"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input
                    class="result-input"
                    id="price-jasa-setengah"
                    type="hidden"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="price-min-setengah"
                    >Harga Minimal</label
                  >
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator price-input"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input
                    class="result-input"
                    id="price-min-setengah"
                    type="hidden"
                  />
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
