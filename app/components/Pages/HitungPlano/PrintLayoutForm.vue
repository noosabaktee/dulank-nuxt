<template>
  <div class="col-lg-6">
    <div id="mainForm">
      <span class="text-standard my-2 d-block"
        ><b>Qty PCS</b>
        <input class="form-control number-separator" id="qty" type="text"
      /></span>
      <span class="text-standard my-2 d-block"
        ><b>Panjang Canvas X</b>
        <input class="form-control number-separator" id="canvas_x" type="text"
      /></span>
      <span class="text-standard my-2 d-block"
        ><b>Panjang Canvas Y</b>
        <input class="form-control number-separator" id="canvas_y" type="text"
      /></span>
      <span class="text-standard my-2 d-block"
        ><b>Panjang Cetak X</b>
        <input class="form-control number-separator" id="cetak_x" type="text"
      /></span>
      <span class="text-standard my-2 d-block"
        ><b>Panjang Cetak Y</b>
        <input class="form-control number-separator" id="cetak_y" type="text"
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
        <input class="form-control number-separator" id="dup_x" type="text"
      /></span>
      <span class="text-standard my-2 d-block"
        ><b>Duplikat Kotak center Y</b>
        <input class="form-control number-separator" id="dup_y" type="text"
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
      <button class="my-btn-primary btn" id="generateBtn" type="button">
        Generate
      </button>
    </div>
  </div>
</template>
