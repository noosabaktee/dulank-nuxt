<template>
  <div
    aria-hidden="true"
    aria-labelledby="modal3Label"
    class="modal fade"
    id="modal3"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal3Label">modal visitor</h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <h5>Input Harga Kertas Baru</h5>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-5">
                  <label class="form-label" for="satuanUkuran3"
                    >Pilih Satuan Ukuran</label
                  >
                </div>
                <div class="col-md-7">
                  <div class="input-group">
                    <select class="form-select" id="satuanUkuran3">
                      <option selected="">Centimeter</option>
                      <option>Inch</option>
                      <option>Millimeter</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-5">
                  <label class="form-label" for="namaKertas3"
                    >Nama Kertas</label
                  >
                </div>
                <div class="col-md-7">
                  <input class="form-control" id="namaKertas3" type="text" />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-5">
                  <label class="form-label">Ukuran</label>
                </div>
                <div class="col-md-7">
                  <div class="row">
                    <div class="col-2 text-center">P</div>
                    <div class="col-4">
                      <input class="form-control" type="text" value="65" />
                    </div>
                    <div class="col-2 text-center">L</div>
                    <div class="col-4">
                      <input class="form-control" type="text" value="100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-5">
                  <label class="form-label" for="hargaPerRim3"
                    >Harga Per Rim</label
                  >
                </div>
                <div class="col-md-7">
                  <input
                    class="form-control"
                    id="hargaPerRim3"
                    type="text"
                    value="850.000"
                  />
                  <button class="btn btn-primary" type="submit">Simpan</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
