<template>
  <div class="mb-2" id="payment-section">
    <div class="bg-white rounded-2 border border-custom">
      <div class="px-4 pt-3">
        <span class="fw-semibold text-color">Punya kode voucher?</span>
        <div class="input-group mt-1">
          <input
            aria-describedby="voucher-apply"
            aria-label="Recipient’s username"
            class="form-control"
            id="voucher-input"
            placeholder="Enter your voucher"
            type="text"
          />
          <button
            class="text-standard input-group-text my-text-primary"
            id="voucher-apply"
            type="button"
          >
            Apply
          </button>
        </div>
        <div
          class="alert alert-warning text-standard text-center mt-2 d-none"
          id="voucher-info"
          role="alert"
        >
          Kode Promo Sukses!
        </div>
        <span
          class="text-standard text-primary"
          data-bs-target="#voucherModal"
          data-bs-toggle="modal"
          role="button"
          >Kupon promo yang tersedia</span
        >
      </div>
      <div class="row align-items-center px-4 pt-3 pb-2">
        <div class="col">
          <span class="fw-semibold text-color">Metode Pembayaran</span>
        </div>
        <div class="col-auto">
          <span class="text-secondary small me-2">Transfer Bank</span><br />
          <span class="text-secondary small me-2">Bank BCA 109-2993242</span
          ><br />
          <span class="text-secondary small me-2"
            >A/n PT. Dulank Semesta Cida</span
          >
        </div>
      </div>
      <div class="px-4 pt-3 pb-2">
        <div class="row">
          <span class="fw-semibold text-color">Rangkuman Pesanan</span>
          <div class="col">
            <table
              class="table table-borderless mb-0 w-100 text-color"
              id="inline-style-checkout-005"
            >
              <tbody class="text-standard">
                <tr>
                  <td class="ps-0 pe-3">Subtotal sebelum PPN</td>
                  <td class="text-end">Rp195.000</td>
                </tr>
                <tr>
                  <td class="ps-0 pe-3">Biaya Pengiriman</td>
                  <td class="text-end">Rp20.000</td>
                </tr>
                <tr>
                  <td class="ps-0 pe-3">PPN (11%)</td>
                  <td class="text-end">Rp9.750</td>
                </tr>
                <tr>
                  <td class="ps-0 pe-3">Diskon Voucher</td>
                  <td class="text-end">-Rp10.000</td>
                </tr>
                <tr class="border-top">
                  <td class="ps-0 pe-3 fw-semibold my-text-primary fs-6">
                    Total Pesanan
                  </td>
                  <td class="text-end fw-bold my-text-primary fs-6">
                    Rp205.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="bg-light px-4 py-3 text-start rounded-bottom">
        <a class="btn my-btn-primary w-100 px-4" href="/success"
          >Beli Sekarang</a
        >
      </div>
    </div>
  </div>
</template>
