<template>
  <div aria-hidden="true" aria-labelledby="qtyModalLabel" class="modal fade text-standard" id="qtyModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-2">
          <h5 class="modal-title" id="qtyModalLabel">Input Your Quantity</h5>
          <div class="d-flex align-items-center">
            <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>
        </div>
        <div class="modal-body">
          <div class="row align-items-center">
            <div class="col-5">
              <label class="custom-label text-standard">Qty Pesanan (Rim)</label>
            </div>
            <div class="col-7 pe-4 d-flex list-spec align-items-center" id="qty">
              <button class="btn quantity-btn" id="minQty" type="button">-</button>
              <input class="form-control rounded-0 bg-white mx-2 number-separator" id="qtyInput" inputmode="numeric" pattern="[0-9]*" placeholder="0" required="" type="text"/>
              <input class="result-input" type="hidden" value="0"/>
              <button class="btn quantity-btn" id="plusQty" type="button">+</button>
            </div>
          </div>
          <div class="text-end mt-3">
            <button aria-label="Close" class="btn my-btn-primary w-50" data-bs-dismiss="modal" type="button">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
