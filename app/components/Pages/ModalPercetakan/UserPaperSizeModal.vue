<template>
  <div
    aria-hidden="true"
    aria-labelledby="modal2Label"
    class="modal fade"
    id="modal2"
    tabindex="-1"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal2Label">modal user</h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <div class="accordion mb-3" id="accordionUkuranKertas">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  aria-controls="collapseUkuranKertas"
                  aria-expanded="true"
                  class="accordion-button"
                  data-bs-target="#collapseUkuranKertas"
                  data-bs-toggle="collapse"
                  type="button"
                >
                  + Input Ukuran Kertas Baru
                </button>
              </h2>
              <div
                aria-labelledby="headingOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionUkuranKertas"
                id="collapseUkuranKertas"
              >
                <div class="accordion-body">
                  <form>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label" for="satuanUkuran1-2"
                            >Pilih Satuan Ukuran</label
                          >
                        </div>
                        <div class="col-md-7">
                          <div class="input-group">
                            <select class="form-select" id="satuanUkuran1-2">
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
                          <label class="form-label" for="namaMesin1-2"
                            >Masukan Nama Mesin</label
                          >
                        </div>
                        <div class="col-md-7">
                          <input
                            class="form-control"
                            id="namaMesin1-2"
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
                              <input
                                class="form-control"
                                type="text"
                                value="52"
                              />
                            </div>
                            <div class="col-2 text-center">L</div>
                            <div class="col-4">
                              <input
                                class="form-control"
                                type="text"
                                value="37"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label" for="lebarJepitan1-2"
                            >Lebar Jepitan</label
                          >
                        </div>
                        <div class="col-md-7">
                          <input
                            class="form-control"
                            id="lebarJepitan1-2"
                            type="text"
                            value="1.2"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label" for="hargaMinimum1-2"
                            >Harga Minimum</label
                          >
                        </div>
                        <div class="col-md-7">
                          <input
                            class="form-control"
                            id="hargaMinimum1-2"
                            type="text"
                            value="240.000"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label" for="qtyMinimum1-2"
                            >Qty Minimum</label
                          >
                        </div>
                        <div class="col-md-7">
                          <input
                            class="form-control"
                            id="qtyMinimum1-2"
                            type="text"
                            value="1.000"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label" for="hargaDruck1-2"
                            >Harga Druck</label
                          >
                        </div>
                        <div class="col-md-7">
                          <input
                            class="form-control"
                            id="hargaDruck1-2"
                            type="text"
                            value="60"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label" for="hargaPlat1-2"
                            >Harga Plat</label
                          >
                        </div>
                        <div class="col-md-7">
                          <input
                            class="form-control"
                            id="hargaPlat1-2"
                            type="text"
                            value="80.000"
                          />
                          <button class="btn btn-primary" type="submit">
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Mesin</th>
                  <th>Panjang Area</th>
                  <th>Lebar Area</th>
                  <th>Lebar Jepitan</th>
                  <th>Harga Min</th>
                  <th>Qty Min</th>
                  <th>Druck</th>
                  <th>Harga Plat</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>GTO 52 4 Warna</td>
                  <td>52</td>
                  <td>35</td>
                  <td>1.2</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>Aktif</td>
                  <td>
                    <button class="icon-button" type="button">
                      <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="icon-button" type="button">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>SM 52 4 Warna</td>
                  <td>52</td>
                  <td>37</td>
                  <td>1.2</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>Aktif</td>
                  <td>
                    <button class="icon-button" type="button">
                      <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="icon-button" type="button">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>SM 72 4 Warna</td>
                  <td>72</td>
                  <td>37</td>
                  <td>1.2</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>Aktif</td>
                  <td>
                    <button class="icon-button" type="button">
                      <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="icon-button" type="button">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SM 102 4 Warna</td>
                  <td>102</td>
                  <td>72</td>
                  <td>1.5</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>Aktif</td>
                  <td>
                    <button class="icon-button" type="button">
                      <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="icon-button" type="button">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center my-3">
            <a class="generate-button" href="#">Generate Data Harga Aktual</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
