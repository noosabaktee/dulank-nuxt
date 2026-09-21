<template>
  <div class="col-lg-7 mb-4 mb-md-0 ps-md-4 mt-5 mt-md-0">
    <h1 class="fs-4 mb-md-4 bg-light p-3 title">Tentukan Spesifikasi</h1>

    <div class="sorting-nav">
      <p class="nav-product fw-bold" role="button">Buku Bacaan / Buku Paket</p>
      <p class="nav-product fw-light" role="button">Buku Tulis Custom</p>
    </div>
    <p class="text-standard" id="spec-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, harum repudiandae nihil sint obcaecati consequuntur veniam dignissimos saepe nobis ipsa velit eum. Perferendis sed nulla alias veniam? Illum, dolore consectetur!</p>
    <form id="specForm">
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Orientasi</label>
          </div>
          <div class="col-9 list-spec" id="orientation">
            <label class="btn text-standard btn-spec me-2 mb-2 selected"><input checked="" class="visually-hidden spec-input" name="cetak-buku-orientation" type="radio" value="Portrait (Berdiri)"/>Portrait (Berdiri)<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-orientation" type="radio" value="Landscape (Tidur)"/>Landscape (Tidur)<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Ukuran</label>
          </div>
          <div class="col-9">
            <div class="d-inline list-spec" id="size">
              <label class="btn btn-spec me-2 mb-2 selected" data-price="50000"><input checked="" class="visually-hidden spec-input" name="cetak-buku-size" type="radio" value="A4 (210x297mm)"/>A4 (210x297mm)<span class="ribbon"></span></label>
              <label class="btn btn-spec me-2 mb-2" data-price="35000"><input class="visually-hidden spec-input" name="cetak-buku-size" type="radio" value="A5 (148x210mm)"/>A5 (148x210mm)<span class="ribbon d-none"></span></label>
              <label class="btn btn-spec me-2 mb-2" data-price="90000"><input class="visually-hidden spec-input" name="cetak-buku-size" type="radio" value="B4 (250x353mm)"/>B4 (250x353mm)<span class="ribbon d-none"></span></label>
              <label class="btn btn-spec me-2 mb-2" data-price="90000"><input class="visually-hidden spec-input" name="cetak-buku-size" type="radio" value="B5 (250x176mm)"/>B5 (250x176mm)<span class="ribbon d-none"></span></label>
            </div>
            <div class="d-flex d-none mb-2" id="custom-size">
              <div class="flex-fill me-2">
                <input class="text-standard form-control rounded-0 number-separator" data-js-input="cetak-buku-001" id="widthSize" inputmode="numeric" min="0" pattern="[0-9]*" placeholder="Width" type="text"/>
                <input class="result-input" id="widthSizeValue" type="hidden"/>
              </div>
              <div class="flex-fill me-2">
                <input class="text-standard form-control rounded-0 number-separator" data-js-input="cetak-buku-002" id="heightSize" inputmode="numeric" min="0" pattern="[0-9]*" placeholder="Height" type="text"/>
                <input class="result-input" id="heightSizeValue" type="hidden"/>
              </div>
              <select aria-label="Default select example" class="form-select w-auto rounded-0 text-standard" data-js-change="cetak-buku-003" id="unit">
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
            <label class="custom-label text-standard">Binding/Jilid</label>
          </div>
          <div class="col-9 list-spec" id="binding">
            <label class="btn text-standard btn-spec me-2 mb-2 selected"><input checked="" class="visually-hidden spec-input" name="cetak-buku-binding" type="radio" value="Lem Panas"/>Lem Panas<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-binding" type="radio" value="Spiral"/>Spiral<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-binding" type="radio" value="Steples"/>Steples<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-binding" type="radio" value="Perfect Binding"/>Perfect Binding<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Jenis Kertas Isi Buku</label>
          </div>
          <div class="col-9 list-spec" id="type">
            <label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="12000"><input checked="" class="visually-hidden spec-input" name="cetak-buku-type" type="radio" value="HVS 70gr"/>HVS 70gr<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-buku-type" type="radio" value="Bookpaper 70gr"/>Bookpaper 70gr<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="cetak-buku-type" type="radio" value="Art Paper 100gr"/>Art Paper 100gr<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2 d-none" data-price="5000"><input class="visually-hidden spec-input" name="cetak-buku-type" type="radio" value="HVS 80gr"/>HVS 80gr<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Laminasi Cover</label>
          </div>
          <div class="col-9 list-spec" id="lamination">
            <label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="0"><input checked="" class="visually-hidden spec-input" name="cetak-buku-lamination" type="radio" value="Tanpa Laminasi"/>Tanpa Laminasi<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-buku-lamination" type="radio" value="Glossy"/>Glossy<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-buku-lamination" type="radio" value="Doff"/>Doff<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-buku-lamination" type="radio" value="UV Vernish"/>UV Vernish<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="8000"><input class="visually-hidden spec-input" name="cetak-buku-lamination" type="radio" value="Spot UV"/>Spot UV<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Tipe Cetak</label>
          </div>
          <div class="col-9 list-spec" id="side">
            <label class="btn text-standard btn-spec me-2 mb-2 selected"><input checked="" class="visually-hidden spec-input" name="cetak-buku-side" type="radio" value="1 Warna"/>1 Warna<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-side" type="radio" value="Full Color"/>Full Color<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2"><input class="visually-hidden spec-input" name="cetak-buku-side" type="radio" value="1 Warna & Full Color"/>1 Warna & Full Color<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Jenis Cover</label>
          </div>
          <div class="col-9 list-spec" id="cover">
            <label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="3000"><input checked="" class="visually-hidden spec-input" name="cetak-buku-cover" type="radio" value="Softcover"/>Softcover<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="cetak-buku-cover" type="radio" value="HardCover"/>HardCover<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="row spec">
          <div class="col-3">
            <label class="custom-label text-standard">Finishing Cover</label>
          </div>
          <div class="col-9 list-spec" id="position">
            <label class="btn text-standard btn-spec me-2 mb-2 selected" data-price="3000"><input checked="" class="visually-hidden spec-input" name="cetak-buku-position" type="radio" value="Glossy"/>Glossy<span class="ribbon"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="cetak-buku-position" type="radio" value="Doff"/>Doff<span class="ribbon d-none"></span></label>
            <label class="btn text-standard btn-spec me-2 mb-2" data-price="5000"><input class="visually-hidden spec-input" name="cetak-buku-position" type="radio" value="Spot UV"/>Spot UV<span class="ribbon d-none"></span></label>
          </div>
        </div>
      </div>
      <div class="mb-3 page-row page-bw-row">
        <div class="row">
          <div class="col-3">
            <label class="custom-label text-standard" id="pageBwLabel">Jumlah Halaman 1 Warna</label>
          </div>
          <div class="col-9">
            <div class="input-group" id="inline-style-cetak-buku-001">
              <input class="form-control rounded-0 text-standard number-separator" data-js-input="cetak-buku-004" id="pageBw" inputmode="numeric" min="1" pattern="[0-9]*" type="text"/>
              <input class="result-input" id="pageBwValue" type="hidden"/>
              <span class="input-group-text rounded-0 text-standard">Page</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 page-row page-color-row">
        <div class="row">
          <div class="col-3">
            <label class="custom-label text-standard">Jumlah Halaman Full Color</label>
          </div>
          <div class="col-9">
            <div class="input-group" id="inline-style-cetak-buku-002">
              <input class="form-control rounded-0 text-standard number-separator" data-js-input="cetak-buku-005" id="pageColor" inputmode="numeric" min="1" pattern="[0-9]*" type="text"/>
              <input class="result-input" id="pageColorValue" type="hidden"/>
              <span class="input-group-text rounded-0 text-standard">Page</span>
            </div>
          </div>
        </div>
      </div>
      <small class="d-none text-standard text-danger" id="info-selected-all"><i class="fa-solid fa-circle-info"></i> please select your specification<br/></small>
      <button class="btn my-btn-primary rounded-0 w-100" id="btnHitung" type="button">Hitung Harga</button>
    </form>
  </div>
</template>
