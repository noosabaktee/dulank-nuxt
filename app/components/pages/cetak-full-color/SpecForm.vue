<template>
  <div class="col-lg-7 mb-4 mb-md-0 ps-md-4 mt-5 mt-md-0">
    <h1 class="fs-4 mb-md-4 bg-light p-3 title">Tentukan Spesifikasi</h1>

    <div class="sorting-nav">
      <p class="nav-product fw-bold" role="button">Brosur</p>
      <p class="nav-product fw-light" role="button">Produk Label</p>
      <p class="nav-product fw-light" role="button">Tiket Karcis</p>
      <p class="nav-product fw-light" role="button">Flyer</p>
    </div>
    <p class="text-standard" id="spec-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, harum repudiandae nihil sint obcaecati consequuntur veniam dignissimos saepe nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore consectetur!</p>
    <form id="specForm">
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Ukuran Brosur</label>
          </div>
          <div class="col-9">
            <div class="d-inline list-spec" id="size">
              <label class="btn btn-spec me-2 mb-2 selected" data-price="50000"><input checked="" class="visually-hidden spec-input" name="cetak-full-color-size" type="radio" value="A4 (210x297mm)"/>A4 (210x297mm)<span class="ribbon"></span></label>
              <label class="btn btn-spec me-2 mb-2" data-price="35000"><input class="visually-hidden spec-input" name="cetak-full-color-size" type="radio" value="A5 (148x210mm)"/>A5 (148x210mm)<span class="ribbon d-none"></span></label>
              <label class="btn btn-spec me-2 mb-2" data-price="90000"><input class="visually-hidden spec-input" name="cetak-full-color-size" type="radio" value="A3 (297x420mm)"/>A3 (297x420mm)<span class="ribbon d-none"></span></label>
            </div>
            <div class="d-flex d-none mb-2" id="custom-size">
              <div class="flex-fill me-2">
                <input class="text-standard form-control rounded-0 number-separator" data-js-input="cetak-full-color-001" id="widthSize" inputmode="numeric" min="0" pattern="[0-9]*" placeholder="Width" type="text"/>
                <input class="result-input" id="widthSizeValue" type="hidden"/>
              </div>
              <div class="flex-fill me-2">
                <input class="text-standard form-control rounded-0 number-separator" data-js-input="cetak-full-color-002" id="heightSize" inputmode="numeric" min="0" pattern="[0-9]*" placeholder="Height" type="text"/>
                <input class="result-input" id="heightSizeValue" type="hidden"/>
              </div>
              <select aria-label="Default select example" class="form-select w-auto rounded-0 text-standard" data-js-change="cetak-full-color-003" id="unit">
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
            <label class="custom-label text-standard">Jenis Bahan Kertas</label>
          </div>
          <div class="col-9 list-spec" id="type">
            <label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="12000"><input checked="" class="visually-hidden spec-input" name="cetak-full-color-type" type="radio" value="Art paper 150gr"/>Art paper 150gr<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-full-color-type" type="radio" value="Art paper 120gr"/>Art paper 120gr<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="cetak-full-color-type" type="radio" value="HVS 100gr"/>HVS 100gr<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Laminasi</label>
          </div>
          <div class="col-9 list-spec" id="lamination">
            <label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="0"><input checked="" class="visually-hidden spec-input" name="cetak-full-color-lamination" type="radio" value="Tanpa Laminasi"/>Tanpa Laminasi<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-full-color-lamination" type="radio" value="Laminasi Doff"/>Laminasi Doff<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-full-color-lamination" type="radio" value="Laminasi Glossy"/>Laminasi Glossy<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-full-color-lamination" type="radio" value="Laminasi Doff + Spot UV"/>Laminasi Doff + Spot UV<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Sisi Cetak</label>
          </div>
          <div class="col-9 list-spec" id="side">
            <label class="btn text-standard btn-spec me-2 mb-2 selected"><input checked="" class="visually-hidden spec-input" name="cetak-full-color-side" type="radio" value="Cetak 1 Sisi"/>Cetak 1 Sisi<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-full-color-side" type="radio" value="Cetak Bolak Balik"/>Cetak Bolak Balik<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Lipatan</label>
          </div>
          <div class="col-9 list-spec" id="fold">
            <label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="3000"><input checked="" class="visually-hidden spec-input" name="cetak-full-color-fold" type="radio" value="Tanpa Lipatan"/>Tanpa Lipatan<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="cetak-full-color-fold" type="radio" value="1 Lipatan"/>1 Lipatan<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="cetak-full-color-fold" type="radio" value="2 Lipatan"/>2 Lipatan<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <small class="d-none text-standard text-danger" id="info-selected-all"><i class="fa-solid fa-circle-info"></i> please select your specification<br/></small>
      <button class="btn my-btn-primary rounded-0 w-100" id="btnHitung" type="button">Hitung Harga</button>
    </form>
  </div>
</template>
