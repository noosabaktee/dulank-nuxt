<template>
  <div class="row mt-md-3" id="scrollTo">
    <div class="col-md-12">
      <div class="mb-2 mt-4">
        <h1 class="fs-4 bg-light p-3 title">List Harga Kalender 2027</h1>
      </div>
      <div class="d-md-flex justify-content-between mt-4">
        <p>Silahkan Pilih Harga Yang Terbaik</p>

        <div class="text-md-end share-disabled" id="share-section">
          <span class="me-2">Share:</span>
          <a class="social-share-icon me-2" href="#" id="inline-style-kalender-002"><i class="fab fa-facebook-f"></i></a>
          <a class="social-share-icon me-2" href="#" id="inline-style-kalender-003"><i class="fab fa-whatsapp"></i></a>
          <a class="social-share-icon" href="#" id="inline-style-kalender-004"><i class="fa-solid fa-link"></i></a>
        </div>
      </div>
      <div class="mb-3 mt-4">
        <p class="text-standard fw-bold" id="result">Tentukan pilihan produk yang anda inginkan pada Spesifikasi</p>
      </div>
      <button class="btn my-btn-primary" data-bs-target="#qtyModal" data-bs-toggle="modal" type="button">Ubah Quantity</button>
      <div class="text-center empty-spec d-none py-5">
        <i class="bi bi-journal fs-1 mb-4"></i>
        <h6>Please select the specification</h6>
        <p class="text-muted text-standard mb-4">You have not selected product specifications</p>
      </div>
      <div class="table-responsive table-spec my-3">
        <table class="table table-hover align-middle text-center mb-0" id="hargaTable">
          <thead class="bg-light">
            <tr>
              <th class="fw-normal">Qty</th>
              <th class="fw-normal">Harga Satuan</th>
              <th class="fw-normal">Sub Total</th>
              <th class="fw-normal">Berat</th>
              <th class="fw-normal">Pengerjaan</th>
              <th class="fw-normal" id="inline-style-kalender-005"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-list">
              <td><span class="qty-value">10</span> Rim</td><td class="my-text-primary">Rp<span class="price-value">65.000</span></td><td>Rp<span class="sub-total">650.000</span></td><td>30 Kg</td><td>3 Hari</td>
              <td>
                <button class="align-items-center me-5 add-wishlist-btn btn" type="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></button>
                <a class="btn my-btn-primary px-5 buy-btn" href="/checkout">Beli</a>
              </td>
            </tr>
            <tr class="table-list">
              <td><span class="qty-value">13</span> Rim</td><td class="my-text-primary">Rp<span class="price-value">64.000</span></td><td>Rp<span class="sub-total">832.000</span><br/><span class="table-disc">Hemat Rp130.000</span></td><td>38 Kg</td><td>3 Hari</td>
              <td>
                <button class="align-items-center me-5 add-wishlist-btn btn" type="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></button>
                <a class="btn my-btn-primary px-5 buy-btn" href="/checkout">Beli</a>
              </td>
            </tr>
            <tr class="table-list">
              <td><span class="qty-value">17</span> Rim</td><td class="my-text-primary">Rp<span class="price-value">64.000</span></td><td>Rp<span class="sub-total">1.088.000</span><br/><span class="table-disc">Hemat Rp170.000</span></td><td>42 Kg</td><td>3 Hari</td>
              <td>
                <button class="align-items-center me-5 add-wishlist-btn btn" type="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></button>
                <a class="btn my-btn-primary px-5 buy-btn" href="/checkout">Beli</a>
              </td>
            </tr>
            <tr class="table-list">
              <td><span class="qty-value">20</span> Rim</td><td class="my-text-primary">Rp<span class="price-value">62.000</span></td><td>Rp<span class="sub-total">1.240.000</span><br/><span class="table-disc">Hemat Rp600.000</span></td><td>49 Kg</td><td>3 Hari</td>
              <td>
                <button class="align-items-center me-5 add-wishlist-btn btn" type="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></button>
                <a class="btn my-btn-primary px-5 buy-btn" href="/checkout">Beli</a>
              </td>
            </tr>
            <tr class="table-list">
              <td><span class="qty-value">25</span> Rim</td><td class="my-text-primary">Rp<span class="price-value">60.000</span></td><td>Rp<span class="sub-total">1.500.000</span><br/><span class="table-disc">Hemat Rp1.250.000</span></td><td>55 Kg</td><td>4 Hari</td>
              <td>
                <button class="align-items-center me-5 add-wishlist-btn btn" type="button"><i class="bi bi-heart me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to Wishist</span></button>
                <a class="btn my-btn-primary px-5 buy-btn" href="/checkout">Beli</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
