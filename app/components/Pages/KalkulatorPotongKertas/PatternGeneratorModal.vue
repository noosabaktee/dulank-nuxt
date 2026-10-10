<template>
  <div
    aria-hidden="true"
    aria-labelledby="generatePatternModalLabel"
    class="modal fade"
    id="generatePatternModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 class="modal-title" id="generatePatternModalLabel">
            Generate Pattern Potongan
          </h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <h2 id="inline-style-kalkulator-potong-kertas-001">Plano</h2>
            <form
              class="d-md-flex d-inline-block align-items-end"
              data-js-submit="kalkulator-potong-kertas-002"
              id="planoForm"
            >
              <div class="me-3">
                <label class="mb-2">Ukuran Plano</label>
                <div class="d-flex align-items-center">
                  <input
                    class="form-control"
                    id="plano_x"
                    min="1"
                    type="number"
                  />
                  <span class="mx-1">X</span>
                  <input
                    class="form-control"
                    id="plano_y"
                    min="1"
                    type="number"
                  />
                </div>
              </div>
              <div class="me-3 mt-md-0 mt-3">
                <label class="mb-2">Ukuran Cetak</label>
                <div class="d-flex align-items-center">
                  <input
                    class="form-control"
                    id="ukuran_cetak_x"
                    min="1"
                    type="number"
                  />
                  <span class="mx-1">X</span>
                  <input
                    class="form-control"
                    id="ukuran_cetak_y"
                    min="1"
                    type="number"
                  />
                </div>
              </div>
            </form>
            <div class="row p-2 mt-3">
              <p>Layout Potong Kertas</p>
              <div class="col-lg-6">
                <div
                  class="svg-wrap p-2 d-none"
                  id="inline-style-kalkulator-potong-kertas-002"
                >
                  <svg id="planoSVG"></svg>
                  <br />
                  <div class="d-flex justify-content-end">
                    <button
                      class="btn my-btn-primary mt-2 me-2"
                      id="downloadSVG"
                      type="button"
                    >
                      Download SVG
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div id="mainForm">
                  <span class="text-standard my-2 d-block"
                    ><b>Qty PCS</b>
                    <input
                      class="form-control number-separator"
                      id="qty"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Panjang Canvas X</b>
                    <input
                      class="form-control number-separator"
                      id="canvas_x"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Panjang Canvas Y</b>
                    <input
                      class="form-control number-separator"
                      id="canvas_y"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Panjang Cetak X</b>
                    <input
                      class="form-control number-separator"
                      id="cetak_x"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Panjang Cetak Y</b>
                    <input
                      class="form-control number-separator"
                      id="cetak_y"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Posisi Kotak awal</b>
                    <select class="form-select text-standard" id="posisi_awal">
                      <option value="Portrait">Portrait</option>
                      <option value="Landscape">Landscape</option>
                    </select>
                  </span>
                  <span class="text-standard my-2 d-block"
                    ><b>Duplikat Kotak center X</b>
                    <input
                      class="form-control number-separator"
                      id="dup_x"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Duplikat Kotak center Y</b>
                    <input
                      class="form-control number-separator"
                      id="dup_y"
                      type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>Penempatan Arah Sisa</b>
                    <select class="form-select text-standard" id="arah_sisa">
                      <option value="-">-</option>
                      <option value="Kanan">Kanan</option>
                      <option value="Bawah">Bawah</option>
                    </select>
                  </span>
                  <span class="text-standard my-2 d-block"
                    ><b>Posisi Kotak Sisa</b>
                    <select class="form-select text-standard" id="posisi_sisa">
                      <option value="-">-</option>
                      <option value="Portrait">Portrait</option>
                      <option value="Landscape">Landscape</option>
                    </select>
                  </span>
                  <span class="text-standard my-2 d-block"
                    ><b>kotak sisa X</b>
                    <input class="form-control" id="sisa_x" type="text"
                  /></span>
                  <span class="text-standard my-2 d-block"
                    ><b>kotak sisa Y</b>
                    <input class="form-control" id="sisa_y" type="text"
                  /></span>
                </div>
                <div class="mt-md-0 mt-3">
                  <button
                    class="my-btn-primary btn"
                    id="generateBtn"
                    type="button"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
