<template>
  <div
    aria-hidden="true"
    aria-labelledby="addNewPisauModalLabel"
    class="modal fade text-standard"
    id="addNewPisauModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 class="modal-title" id="addNewPisauModalLabel">
            Update Die Cung Blades
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
                  <label class="form-label" for="knife-name">Nama</label>
                </div>
                <div class="col-7">
                  <input class="form-control" id="knife-name" type="text" />
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
              <small
                class="d-none text-standard text-danger"
                id="info-selected-all-2"
                ><i class="fa-solid fa-circle-info"></i> please input your
                specification<br
              /></small>
              <div class="row mb-3">
                <div class="col-5">
                  <button class="btn w-100" id="cancel-btn-2" type="button">
                    Batal
                  </button>
                </div>
                <div class="col-7">
                  <button class="btn my-btn-primary w-100" id="update-btn">
                    Update
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
