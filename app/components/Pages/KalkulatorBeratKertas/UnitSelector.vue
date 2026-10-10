<template>
  <div class="mb-4 row">
    <div class="col-5">
      <label class="form-label" for="jumlah">Satuan Panjang</label>
    </div>
    <div class="col-7" id="unit">
      <button
        class="btn btn-spec me-2 selected"
        data-value="Centimeter"
        type="button"
      >
        Centimeter<span class="ribbon"></span>
      </button>
      <button class="btn btn-spec me-2" data-value="Milimeter" type="button">
        Milimeter<span class="ribbon d-none"></span>
      </button>
      <div>
        <br />
        <a
          class="text-center text-primary"
          data-js-click="kalkulator-berat-kertas-001"
          role="button"
          >Lihat ukuran yang tersedia</a
        >
        <div class="d-none mt-2" id="size">
          <button
            class="btn btn-spec me-2"
            data-gram="260"
            data-height="79"
            data-js-click="kalkulator-berat-kertas-002"
            data-unit="cm"
            data-width="109"
            type="button"
          >
            Art Carton Pindo, 109 x 79 cm, 260 gram<span
              class="ribbon d-none"
            ></span>
          </button>
          <button
            class="btn btn-spec me-2"
            data-gram="275"
            data-height="85"
            data-js-click="kalkulator-berat-kertas-003"
            data-unit="mm"
            data-width="112"
            type="button"
          >
            Art Carton Ika, Neuva, 112 x 85 mm, 275 gram<span
              class="ribbon d-none"
            ></span>
          </button>
          <a
            class="d-block text-primary mt-2"
            data-bs-target="#addNewPaperModal"
            data-bs-toggle="modal"
            role="button"
            >+Tambah ukuran baru</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
