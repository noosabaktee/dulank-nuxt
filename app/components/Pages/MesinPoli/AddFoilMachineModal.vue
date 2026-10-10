<template>
  <div
    aria-hidden="true"
    aria-labelledby="addNewLaminateModalLabel"
    class="modal fade text-standard"
    id="addNewLaminateModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 class="modal-title" id="addNewLaminateModalLabel">
            Add New Hot Foil
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
                  <label class="form-label" for="name">Nama</label>
                </div>
                <div class="col-7">
                  <input class="form-control" id="name" type="text" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label">Ukuran Maksimal (cm)</label>
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
                  <label class="form-label" for="price-per-cm"
                    >Harga per Centimeter</label
                  >
                </div>
                <div class="col-7">
                  <input
                    class="form-control number-separator price-input"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    type="text"
                  />
                  <input class="result-input" id="price-per-cm" type="hidden" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="price-min"
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
                  <input class="result-input" id="price-min" type="hidden" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="price-min-count"
                    >Harga Minim Hitungan</label
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
                    id="price-min-count"
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
