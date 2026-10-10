<template>
  <div
    aria-hidden="true"
    aria-labelledby="modal4Label"
    class="modal fade"
    id="modal4"
    tabindex="-1"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal4Label">modal user regist</h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <div class="accordion mb-3" id="satuanUkuran">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne-2">
                <button
                  aria-controls="collapseSatuanUkuran"
                  aria-expanded="true"
                  class="accordion-button"
                  data-bs-target="#collapseSatuanUkuran"
                  data-bs-toggle="collapse"
                  type="button"
                >
                  + Harga Group Acuan Kertas per Rim
                </button>
              </h2>
              <div
                aria-labelledby="headingOne-2"
                class="accordion-collapse collapse show"
                data-bs-parent="#satuanUkuran"
                id="collapseSatuanUkuran"
              >
                <div class="accordion-body">
                  <form>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label" for="satuanUkuran4"
                            >Pilih Satuan Ukuran</label
                          >
                        </div>
                        <div class="col-md-7">
                          <div class="input-group">
                            <select class="form-select" id="satuanUkuran4">
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
                          <label class="form-label" for="pilihGroup4"
                            >Pilih Group Kertas</label
                          >
                        </div>
                        <div class="col-md-7">
                          <div class="input-group">
                            <select class="form-select" id="pilihGroup4">
                              <option selected="">Art Carton</option>
                              <option>Art Paper</option>
                              <option>HVS</option>
                            </select>
                          </div>
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
                              <input
                                class="form-control"
                                type="text"
                                value="65"
                              />
                            </div>
                            <div class="col-2 text-center">L</div>
                            <div class="col-4">
                              <input
                                class="form-control"
                                type="text"
                                value="100"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label" for="gramatur4"
                            >Gramatur/Gsm</label
                          >
                        </div>
                        <div class="col-md-7">
                          <input
                            class="form-control"
                            id="gramatur4"
                            type="text"
                            value="230"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label" for="hargaPerRim4"
                            >Harga Per Rim</label
                          >
                        </div>
                        <div class="col-md-7">
                          <input
                            class="form-control"
                            id="hargaPerRim4"
                            type="text"
                            value="850.000"
                          />
                          <button class="btn btn-primary mb-4" type="submit">
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
          <h6>Tabel Harga Acuan Kertas Per Rim dalam Group</h6>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Group Kertas</th>
                  <th>Gsm</th>
                  <th>Panjang</th>
                  <th>Lebar</th>
                  <th>Harga</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Art Paper</td>
                  <td>100</td>
                  <td>65</td>
                  <td>100</td>
                  <td>450.000</td>
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
                  <td>Art Carton</td>
                  <td>260</td>
                  <td>79</td>
                  <td>109</td>
                  <td>1850.000</td>
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
                  <td>Duplex</td>
                  <td>310</td>
                  <td>79</td>
                  <td>109</td>
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
                  <td>Hvs/paper</td>
                  <td>100</td>
                  <td>70</td>
                  <td>100</td>
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
            <a class="generate-button" href="#">Generate Harga Aktual</a>
          </div>
          <div class="accordion mb-3" id="accordionHargaGroup">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne-3">
                <button
                  aria-controls="collapseHargaGroup"
                  aria-expanded="true"
                  class="accordion-button"
                  data-bs-target="#collapseHargaGroup"
                  data-bs-toggle="collapse"
                  type="button"
                >
                  + Jenis Kertas Baru berdasarkan group kertas
                </button>
              </h2>
              <div
                aria-labelledby="headingOne-3"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionHargaGroup"
                id="collapseHargaGroup"
              >
                <div class="accordion-body">
                  <form>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label" for="pilihGroup4-2"
                            >Pilih Group Kertas</label
                          >
                        </div>
                        <div class="col-md-7">
                          <div class="input-group">
                            <select class="form-select" id="pilihGroup4-2">
                              <option selected="">Art Carton</option>
                              <option>Art Paper</option>
                              <option>HVS</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label" for="gramatur4-2"
                            >Masukan Gramatur</label
                          >
                        </div>
                        <div class="col-md-7">
                          <input
                            class="form-control"
                            id="gramatur4-2"
                            type="text"
                            value="230"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="row">
                        <div class="col-md-5">
                          <label class="form-label">Pilih Ukuran Plano</label>
                        </div>
                        <div class="col-md-7">
                          <div class="form-check mb-2">
                            <input
                              checked=""
                              class="form-check-input"
                              id="size1"
                              type="checkbox"
                              value=""
                            />
                            <label class="form-check-label" for="size1">
                              90 x 120
                            </label>
                          </div>
                          <div class="form-check mb-2">
                            <input
                              class="form-check-input"
                              id="size2"
                              type="checkbox"
                              value=""
                            />
                            <label class="form-check-label" for="size2">
                              79 x 109
                            </label>
                          </div>
                          <div class="form-check mb-2">
                            <input
                              class="form-check-input"
                              id="size3"
                              type="checkbox"
                              value=""
                            />
                            <label
                              class="form-check-label text-muted"
                              for="size3"
                            >
                              70 x 100 (cocok untuk ukuran A4/A3 genap)
                            </label>
                          </div>
                          <div class="form-check mb-2">
                            <input
                              class="form-check-input"
                              id="size4"
                              type="checkbox"
                              value=""
                            />
                            <label class="form-check-label" for="size4">
                              65 x 90
                            </label>
                          </div>
                          <div class="form-check mb-2">
                            <input
                              class="form-check-input"
                              id="size5"
                              type="checkbox"
                              value=""
                            />
                            <label class="form-check-label" for="size5">
                              61 x 92
                            </label>
                          </div>
                          <div class="form-check mb-2">
                            <input
                              class="form-check-input"
                              id="size6"
                              type="checkbox"
                              value=""
                            />
                            <label class="form-check-label" for="size6">
                              61 x 86
                            </label>
                          </div>
                          <button class="btn btn-primary mb-4" type="submit">
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
          <h6>Tabel Jenis Kertas</h6>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Group Kertas</th>
                  <th>Gsm</th>
                  <th>Panjang</th>
                  <th>Lebar</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Art Paper</td>
                  <td>150</td>
                  <td>79</td>
                  <td>109</td>
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
                  <td>Art Paper</td>
                  <td>150</td>
                  <td>65</td>
                  <td>100</td>
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
                  <td>Art Paper</td>
                  <td>150</td>
                  <td>65</td>
                  <td>90</td>
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
                  <td>Art Paper</td>
                  <td>150</td>
                  <td>61</td>
                  <td>92</td>
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
                  <td>5</td>
                  <td>Art Carton</td>
                  <td>210</td>
                  <td>79</td>
                  <td>109</td>
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
                  <td>6</td>
                  <td>Art Carton</td>
                  <td>210</td>
                  <td>65</td>
                  <td>100</td>
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
                  <td>7</td>
                  <td>Art Carton</td>
                  <td>210</td>
                  <td>61</td>
                  <td>92</td>
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
        </div>
      </div>
    </div>
  </div>
</template>
