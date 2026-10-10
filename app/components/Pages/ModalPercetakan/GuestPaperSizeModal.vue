<template>
  <div
    aria-hidden="true"
    aria-labelledby="modal1Label"
    class="modal fade"
    id="modal1"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal1Label">modal visitor</h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <h5>Input Ukuran Kertas Baru</h5>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-5">
                  <label class="form-label" for="satuanUkuran1"
                    >Pilih Satuan Ukuran</label
                  >
                </div>
                <div class="col-md-7">
                  <div class="input-group">
                    <select class="form-select" id="satuanUkuran1">
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
                  <label class="form-label" for="namaMesin1"
                    >Masukan Nama Mesin</label
                  >
                </div>
                <div class="col-md-7">
                  <input
                    class="form-control"
                    id="namaMesin1"
                    type="text"
                    value="Mesin SM 52 4 Warna"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-5">
                  <label class="form-label">Ukuran Area Kertas</label>
                </div>
                <div class="col-md-7">
                  <div class="row">
                    <div class="col-2 text-center">P</div>
                    <div class="col-4">
                      <input class="form-control" type="text" value="52" />
                    </div>
                    <div class="col-2 text-center">L</div>
                    <div class="col-4">
                      <input class="form-control" type="text" value="37" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-5">
                  <label class="form-label" for="lebarJepitan1"
                    >Lebar Jepitan</label
                  >
                </div>
                <div class="col-md-7">
                  <input
                    class="form-control"
                    id="lebarJepitan1"
                    type="text"
                    value="1.2"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-5">
                  <label class="form-label" for="hargaMinimum1"
                    >Harga Minimum</label
                  >
                </div>
                <div class="col-md-7">
                  <input
                    class="form-control"
                    id="hargaMinimum1"
                    type="text"
                    value="240.000"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-5">
                  <label class="form-label" for="qtyMinimum1"
                    >Qty Minimum</label
                  >
                </div>
                <div class="col-md-7">
                  <input
                    class="form-control"
                    id="qtyMinimum1"
                    type="text"
                    value="1.000"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-5">
                  <label class="form-label" for="hargaDruck1"
                    >Harga Druck</label
                  >
                </div>
                <div class="col-md-7">
                  <input
                    class="form-control"
                    id="hargaDruck1"
                    type="text"
                    value="60"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col-md-5">
                  <label class="form-label" for="hargaPlat1">Harga Plat</label>
                </div>
                <div class="col-md-7">
                  <input
                    class="form-control"
                    id="hargaPlat1"
                    type="text"
                    value="80.000"
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
