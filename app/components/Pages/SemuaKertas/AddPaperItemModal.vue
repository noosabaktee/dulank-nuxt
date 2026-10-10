<template>
  <div
    aria-hidden="true"
    aria-labelledby="addNewPaperItemModalLabel"
    class="modal fade text-standard"
    id="addNewPaperItemModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 class="modal-title" id="addNewPaperItemModalLabel">
            Add New Paper Item
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
                  <label class="form-label" for="name-paper-item"
                    >Nama Kertas (Opsional)</label
                  >
                </div>
                <div class="col-7">
                  <input
                    class="form-control"
                    id="name-paper-item"
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
                  <label class="form-label" for="gramatur-paper-item"
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
                    id="gramatur-paper-item"
                    type="hidden"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <label class="form-label" for="pilihSatuan"
                    >Ukuran Plano Tersedia</label
                  >
                </div>
                <div class="col-7">
                  <button class="btn btn-spec me-2 selected" type="button">
                    90 x 120<span class="ribbon"></span>
                  </button>
                  <button class="btn btn-spec me-2" type="button">
                    97 x 109<span class="ribbon d-none"></span>
                  </button>
                  <button class="btn btn-spec me-2" type="button">
                    65 x 100<span class="ribbon d-none"></span>
                  </button>
                  <button class="btn btn-spec me-2" type="button">
                    65 x 90<span class="ribbon d-none"></span>
                  </button>
                  <button class="btn btn-spec me-2" type="button">
                    61 x 92<span class="ribbon d-none"></span>
                  </button>
                  <button class="btn btn-spec me-2" type="button">
                    61 x 68<span class="ribbon d-none"></span>
                  </button>
                </div>
              </div>
              <small
                class="d-none text-standard text-danger"
                id="info-selected-all-3"
                ><i class="fa-solid fa-circle-info"></i> please input your
                specification<br
              /></small>
              <div class="row mb-3">
                <div class="col-5">
                  <button class="btn w-100" id="cancel-btn-3" type="button">
                    Batal
                  </button>
                </div>
                <div class="col-7">
                  <button class="btn my-btn-primary w-100" id="save-btn-3">
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
