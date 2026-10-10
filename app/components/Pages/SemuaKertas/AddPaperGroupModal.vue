<template>
  <div
    aria-hidden="true"
    aria-labelledby="addNewPaperGroupModalLabel"
    class="modal fade text-standard"
    id="addNewPaperGroupModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 class="modal-title" id="addNewPaperGroupModalLabel">
            Add New Paper Group
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
                  <label class="form-label" for="name-group"
                    >Nama Group Kertas</label
                  >
                </div>
                <div class="col-7">
                  <input class="form-control" id="name-group" type="text" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <span class="form-label" for="merk">Merk</span>
                  <span class="text-standard d-block fst-italic"
                    >(optional)</span
                  >
                </div>
                <div class="col-7">
                  <input class="form-control" id="merk" type="text" />
                </div>
              </div>
              <small
                class="d-none text-standard text-danger"
                id="info-selected-all-1"
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
                  <button class="btn my-btn-primary w-100" id="save-btn-1">
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
