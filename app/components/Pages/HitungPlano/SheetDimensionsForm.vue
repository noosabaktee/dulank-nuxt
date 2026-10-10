<template>
  <form
    class="d-md-flex d-inline-block align-items-end"
    data-js-submit="hitung-plano-001"
    id="planoForm"
  >
    <div class="me-3">
      <label class="mb-2">Ukuran Plano</label>
      <div class="d-flex align-items-center">
        <input class="form-control" id="plano_x" min="1" type="number" />
        <span class="mx-1">X</span>
        <input class="form-control" id="plano_y" min="1" type="number" />
      </div>
    </div>
    <div class="me-3 mt-md-0 mt-3">
      <label class="mb-2">Ukuran Cetak</label>
      <div class="d-flex align-items-center">
        <input class="form-control" id="ukuran_cetak_x" min="1" type="number" />
        <span class="mx-1">X</span>
        <input class="form-control" id="ukuran_cetak_y" min="1" type="number" />
      </div>
    </div>
  </form>
</template>
