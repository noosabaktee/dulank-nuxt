<template>
  <div
    aria-hidden="true"
    aria-labelledby="addAddressModalLabel"
    class="modal fade"
    id="addAddressModal"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold" id="addAddressModalLabel">
            Add new address
          </h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3 row">
              <div class="col-6">
                <input
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  required=""
                  type="text"
                />
              </div>
              <div class="col-6">
                <input
                  class="form-control"
                  id="phone"
                  placeholder="Phone"
                  required=""
                  type="text"
                />
              </div>
            </div>
            <div class="my-3">
              <div class="form-group position-relative">
                <div
                  class="input-group position-relative d-inline-flex align-items-center"
                >
                  <input
                    class="form-control text-standard"
                    id="alamat-lengkap"
                    placeholder="Provinsi, Kota, Kecamatan"
                  />
                  <span
                    class="d-none position-absolute bg-secondary text-white rounded-circle d-flex align-items-center"
                    id="clear-address"
                  >
                    <i class="bi bi-x-lg m-auto"></i>
                  </span>
                  <span class="position-absolute" id="search-icon">
                    <i class="bi bi-search"></i>
                  </span>
                </div>
                <div id="alamat-dropdown-wrapper">
                  <ul class="nav nav-tabs" id="alamatTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="btn rounded-0 border-top-0 border-start-0 border-end-0 text-standard active"
                        id="provinsi-tab"
                        role="tab"
                        type="button"
                      >
                        Provinsi
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="btn rounded-0 border-top-0 border-start-0 border-end-0 text-standard"
                        id="kota-tab"
                        role="tab"
                        type="button"
                      >
                        Kota
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="btn rounded-0 border-top-0 border-start-0 border-end-0 text-standard"
                        id="kecamatan-tab"
                        role="tab"
                        type="button"
                      >
                        Kecamatan
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content p-2 shadow-sm" id="alamatTabContent">
                    <div class="tab-pane show active" id="provinsi-pane">
                      <ul
                        class="list-unstyled mb-0 text-standard"
                        id="provinsi-list"
                      ></ul>
                    </div>
                    <div class="tab-pane" id="kota-pane">
                      <ul
                        class="list-unstyled mb-0 text-standard"
                        id="kota-list"
                      ></ul>
                    </div>
                    <div class="tab-pane" id="kecamatan-pane">
                      <ul
                        class="list-unstyled mb-0 text-standard"
                        id="kecamatan-list"
                      ></ul>
                    </div>
                  </div>
                  <div class="p-2" id="alamat-search-result">
                    <ul
                      class="list-unstyled mb-0 text-standard fw-light"
                      id="alamat-search-list"
                    ></ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <textarea
                class="form-control text-standard"
                id="detail"
                placeholder="Detail"
                required=""
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <input
                class="form-control"
                id="other"
                placeholder="Other Detail (e.g block, st)"
                required=""
                type="text"
              />
            </div>
            <div class="mb-3">
              <label class="text-standard d-block">Mark AS:</label>
              <button class="btn btn-spec me-2 selected" type="button">
                Home<span class="ribbon"></span>
              </button>
              <button class="btn btn-spec me-2" type="button">
                Office<span class="ribbon d-none"></span>
              </button>
              <button class="btn btn-spec me-2" type="button">
                Warehouse<span class="ribbon d-none"></span>
              </button>
            </div>
          </form>
          <small class="d-none text-standard text-danger" id="info-selected-all"
            ><i class="fa-solid fa-circle-info"></i> please input your
            address<br
          /></small>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            type="button"
          >
            Cancel
          </button>
          <button class="btn my-btn-primary" id="save-address" type="button">
            Save address
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
