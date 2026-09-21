<template>
  <div class="col-lg-7 mb-4 mb-md-0 ps-md-4 mt-5 mt-md-0">
    <h1 class="fs-4 mb-md-4 bg-light p-3 title">Tentukan Spesifikasi</h1>

    <div class="sorting-nav">
      <p class="nav-product fw-bold" role="button">Kalender Dinding</p>
      <p class="nav-product fw-light" role="button">Kalender Meja</p>
      <p class="nav-product fw-light" role="button">Kalender Bolak Balik Sprial Tengah</p>
    </div>
    <p class="text-standard" id="spec-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, harum repudiandae nihil sint obcaecati构veniam dignissimos saepe nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore consectetur!</p>
    <form id="specForm">
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Jumlah Isi</label>
          </div>
          <div class="col-9">
            <div class="d-inline list-spec" id="content">
              <label class="btn text-standard btn-spec me-2 mb-2 selected"><input checked="" class="visually-hidden spec-input" name="kalender-content" type="radio" value="1 Lembar"/>1 Lembar<span class="ribbon"></span></label>
              <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="kalender-content" type="radio" value="2 Lembar"/>2 Lembar<span class="ribbon d-none"></span></label>
              <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="kalender-content" type="radio" value="3 Lembar"/>3 Lembar<span class="ribbon d-none"></span></label>
              <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="kalender-content" type="radio" value="4 Lembar"/>4 Lembar<span class="ribbon d-none"></span></label>
              <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="kalender-content" type="radio" value="6 Lembar"/>6 Lembar<span class="ribbon d-none"></span></label>
              <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="kalender-content" type="radio" value="7 Lembar"/>7 Lembar<span class="ribbon d-none"></span></label>
              <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="kalender-content" type="radio" value="12 Lembar"/>12 Lembar<span class="ribbon d-none"></span></label>
              <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="kalender-content" type="radio" value="13 Lembar"/>13 Lembar<span class="ribbon d-none"></span></label>
            </div>
            <div class="d-flex d-none mb-2" id="custom-content">
              <div class="input-group" id="inline-style-kalender-001">
                <input class="form-control rounded-0 text-standard number-separator custom-content-input" data-js-input="kalender-001" id="contentCustomInput" inputmode="numeric" pattern="[0-9]*" placeholder="Jumlah isi" type="text"/>
                <input class="result-input" id="contentCustomValue" type="hidden"/>
                <span class="input-group-text rounded-0 text-standard">Lembar</span>
              </div>
            </div>
            <button class="btn btn-spec custom-content-btn d-md-inline d-block" data-navs="Kalender Dinding|Kalender Meja" type="button">Custom</button><br/>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Ukuran Kalender</label>
          </div>
          <div class="col-9">
            <div class="d-inline list-spec" id="size">
              <label class="btn btn-spec me-2 mb-2 selected" data-price="50000"><input checked="" class="visually-hidden spec-input" name="kalender-size" type="radio" value="Kecil 31x43"/>Kecil 31x43<span class="ribbon"></span></label>
              <label class="btn btn-spec me-2 mb-2" data-price="35000"><input class="visually-hidden spec-input" name="kalender-size" type="radio" value="Kecil 31x48"/>Kecil 31x48<span class="ribbon d-none"></span></label>
              <label class="btn btn-spec me-2 mb-2" data-price="90000"><input class="visually-hidden spec-input" name="kalender-size" type="radio" value="Sedang 35x50"/>Sedang 35x50<span class="ribbon d-none"></span></label>
              <label class="btn btn-spec me-2 mb-2" data-price="90000"><input class="visually-hidden spec-input" name="kalender-size" type="radio" value="Sedang 38x54"/>Sedang 38x54<span class="ribbon d-none"></span></label>
              <label class="btn btn-spec me-2 mb-2" data-price="90000"><input class="visually-hidden spec-input" name="kalender-size" type="radio" value="Besar 43x64"/>Besar 43x64<span class="ribbon d-none"></span></label>
            </div>
            <div class="d-flex d-none mb-2" id="custom-size">
              <div class="flex-fill me-2">
                <input class="text-standard form-control rounded-0 number-separator" data-js-input="kalender-002" id="widthSize" inputmode="numeric" min="0" pattern="[0-9]*" placeholder="Width" type="text"/>
                <input class="result-input" id="widthSizeValue" type="hidden"/>
              </div>
              <div class="flex-fill me-2">
                <input class="text-standard form-control rounded-0 number-separator" data-js-input="kalender-003" id="heightSize" inputmode="numeric" min="0" pattern="[0-9]*" placeholder="Height" type="text"/>
                <input class="result-input" id="heightSizeValue" type="hidden"/>
              </div>
              <select aria-label="Default select example" class="form-select w-auto rounded-0 text-standard" data-js-change="kalender-004" id="unit">
                <option value="cm">centimeter</option>
                <option value="mm">milimeter</option>
              </select>
            </div>
            <small class="d-none text-standard text-danger" id="info-custom"><i class="fa-solid fa-circle-info"></i> Min Max</small>
            <button class="btn btn-spec custom-size-btn d-md-inline d-block" type="button">Custom</button><br/>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Hanger/Gantungan</label>
          </div>
          <div class="col-9 list-spec" id="hanger">
            <label class="btn text-standard btn-spec me-2 mb-2 selected"><input checked="" class="visually-hidden spec-input" name="kalender-hanger" type="radio" value="Spiral"/>Spiral<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="kalender-hanger" type="radio" value="Jepit Kaleng"/>Jepit Kaleng<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="kalender-hanger" type="radio" value="Mata Ayam"/>Mata Ayam<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Jenis Bahan</label>
          </div>
          <div class="col-9 list-spec" id="type">
            <label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="12000"><input checked="" class="visually-hidden spec-input" name="kalender-type" type="radio" value="Art Paper"/>Art Paper<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="kalender-type" type="radio" value="Art Carton"/>Art Carton<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="kalender-type" type="radio" value="Karton BW"/>Karton BW<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="kalender-type" type="radio" value="Karton Duplex"/>Karton Duplex<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Laminasi</label>
          </div>
          <div class="col-9 list-spec" id="lamination">
            <label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="0"><input checked="" class="visually-hidden spec-input" name="kalender-lamination" type="radio" value="Tanpa Laminasi"/>Tanpa Laminasi<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="kalender-lamination" type="radio" value="Glossy"/>Glossy<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="kalender-lamination" type="radio" value="Doff"/>Doff<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="kalender-lamination" type="radio" value="UV Vernish"/>UV Vernish<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="kalender-lamination" type="radio" value="Spot UV"/>Spot UV<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Jenis Cetak</label>
          </div>
          <div class="col-9 list-spec" id="side">
            <label class="btn text-standard btn-spec me-2 mb-2 selected"><input checked="" class="visually-hidden spec-input" name="kalender-side" type="radio" value="Cetak Full Color"/>Cetak Full Color<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="kalender-side" type="radio" value="Cetak 2 Warna"/>Cetak 2 Warna<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Cover Amplop</label>
          </div>
          <div class="col-9 list-spec" id="cover">
            <label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="3000"><input checked="" class="visually-hidden spec-input" name="kalender-cover" type="radio" value="Tanpa Cover Amplop"/>Tanpa Cover Amplop<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="kalender-cover" type="radio" value="Pakai Amplop Kertas"/>Pakai Amplop Kertas<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="kalender-cover" type="radio" value="Pakai Amplop Plastik"/>Pakai Amplop Plastik<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Posisi</label>
          </div>
          <div class="col-9 list-spec" id="position">
            <label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="3000"><input checked="" class="visually-hidden spec-input" name="kalender-position" type="radio" value="Landscape (Tidur)"/>Landscape (Tidur)<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="kalender-position" type="radio" value="Portrait (Berdiri)"/>Portrait (Berdiri)<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <small class="d-none text-standard text-danger" id="info-selected-all"><i class="fa-solid fa-circle-info"></i> please select your specification<br/></small>
      <button class="btn my-btn-primary rounded-0 w-100" id="btnHitung" type="button">Hitung Harga</button>
    </form>
  </div>
</template>
