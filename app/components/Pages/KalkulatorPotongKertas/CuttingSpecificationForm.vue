<template>
  <div>
    <div>
      <h1 class="fs-4">Hitung Potong Kertas</h1>
      <p class="text-muted text-standard">
        Isi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras metu
        mautu, mattis eget ipsum ut, finibus pellentesque lectus. Etiam pulvinar
        ipsum vel sagittis facilisis. Suspendisse non porta porta. Proin id
        lobortis sapien, id ultricies elit. Donec lectus mauris, dignissim vel
        facilisis id, varius ut lacinia. Fusce dignissim neque eu effringeresr,
        at auctor nulla rutrum. Vestibulum sit amet felis quis quam
        accumsanlativis vitae et eros.
      </p>
    </div>
    <div class="mt-5">
      <h3 class="fs-6">Hitung potong kertas</h3>
      <div class="mb-4 row">
        <div class="col-4">
          <label class="form-label" for="jumlah">Satuan Panjang</label>
        </div>
        <div class="col-8" id="unit-1">
          <button class="btn btn-spec me-2 selected" type="button">
            Centimeter<span class="ribbon"></span>
          </button>
          <button class="btn btn-spec me-2" type="button">
            Milimeter<span class="ribbon d-none"></span>
          </button>
        </div>
      </div>
      <div class="mb-4 row">
        <div class="col-4">
          <label class="form-label" for="jumlah">Ukuran Potongan</label>
        </div>
        <div class="col-8" id="unit-2">
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
                <input class="result-input" id="width-potong" type="hidden" />
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
                <input class="result-input" id="height-potong" type="hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 row">
        <div class="col-4">
          <label class="form-label">Pilihan Ukuran Plano</label>
        </div>
        <div class="col-8">
          <div class="mb-2">
            <a
              class="text-center text-primary"
              data-js-click="kalkulator-potong-kertas-001"
              role="button"
              >Lihat ukuran yang tersedia</a
            >
            <div class="d-none mt-2" id="size">
              <button
                class="btn btn-spec me-2"
                data-kertas="Art Carton"
                type="button"
              >
                Art Carton<span class="ribbon d-none"></span>
              </button>
              <button
                class="btn btn-spec me-2"
                data-kertas="Art Paper"
                type="button"
              >
                Art Paper<span class="ribbon d-none"></span>
              </button>
              <button class="btn btn-spec me-2" data-kertas="HVS" type="button">
                HVS<span class="ribbon d-none"></span>
              </button>
            </div>
          </div>
          <div>
            <div class="multiple-select" id="ukuran-plano">
              <button class="btn btn-spec me-2 selected" type="button">
                Plano 650 x 900 Min<span class="ribbon"></span>
              </button>
              <button class="btn btn-spec me-2" type="button">
                Plano 650 x 1.000 Min<span class="ribbon d-none"></span>
              </button>
              <button class="btn btn-spec me-2" type="button">
                Plano 720 x 1.000 Min<span class="ribbon d-none"></span>
              </button>
              <button class="btn btn-spec me-2" type="button">
                Plano 610 x 860 Min<span class="ribbon d-none"></span>
              </button>
              <button class="btn btn-spec me-2" type="button">
                Plano 610 x 930 Min<span class="ribbon d-none"></span>
              </button>
              <button
                class="btn btn-spec me-2"
                id="select-all-btn"
                type="button"
              >
                Pilih Semua<span class="ribbon d-none"></span>
              </button>
            </div>
            <div class="d-none" id="ukuran-plano-custom">
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
                      id="width-plano"
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
                      id="height-plano"
                      type="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-spec me-2" id="custom-btn" type="button">
              Custom<span class="ribbon d-none"></span>
            </button>
          </div>
        </div>
      </div>
      <div class="mb-4 row">
        <div class="col-4">
          <label class="form-label" for="jumlah"
            >Kebutuhan Potongan (optional)</label
          >
        </div>
        <div class="col-8" id="unit-3">
          <input class="form-control number-separator" type="text" />
          <small class="d-none text-standard text-danger" id="info-selected-all"
            ><i class="fa-solid fa-circle-info"></i> please input your
            specification<br
          /></small>
          <div class="mb-4 mt-3">
            <button
              class="btn my-btn-primary btn-block w-100"
              id="btn-hitung"
              type="button"
            >
              Hitung
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
