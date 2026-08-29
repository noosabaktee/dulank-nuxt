<template>
  <div class="col-lg-4 px-3 h-100 position-sticky top-0 w-full lg:w-4/12 px-4 h-full">
    <h1 class="fs-5 bg-light p-2 text-lg bg-gray-100" id="inline-style-cart-001">Order Summary</h1>
    <div class="mb-3 mb-4"><span class="text-standard">PPN (11%)</span> <span class="float-end text-standard text-primary float-right">Rp0</span></div>
    <div class="mb-3 mt-2 mb-4">
      <div class="text-standard text-start text-left">Jumlah Total</div>
      <h4 class="text-primary text-end text-right" id="grandTotal">Rp0</h4>
    </div>
    <div class="alert alert-warning text-standard text-center d-none hidden rounded-md border p-4" id="update-info" role="alert">Silakan klik update keranjang belanja untuk memperbarui rangkuman belanja Anda!</div>
    <div class="alert alert-danger text-standard text-center d-none hidden rounded-md border p-4" id="job-name-info" role="alert">Silakan isi semua Job Name pada product yang dipilih!</div>
    <div class="text-end text-right">
      <NuxtLink class="btn me-2 my-btn-primary w-100 mr-2 w-full inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors cursor-pointer" to="/next">Lanjutkan ke Checkout</NuxtLink>
      <NuxtLink class="btn me-2 btn-warning w-100 my-2 mr-2 w-full inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors cursor-pointer bg-amber-400 text-gray-900 hover:opacity-90" to="/next">Buat Surat Penawaran (Quotation)</NuxtLink>
    </div>
    <div class="text-start my-2 text-left">
      <span class="text-standard">*) Belum termasuk biaya pengiriman berikut PPN pengiriman</span><br />
      <span class="text-standard">*) Kode voucher dapat digunakan di halaman checkout</span>
    </div>
    <div class="bg-light border bg-gray-100 border-gray-200">
      <p class="text-standard p-2" id="inline-style-cart-002">Promo GRATIS ONGKIR kirim ke Jakarta, Bogor, Bekasi, Karawang, Purwakarta dengan minimum pembelian Rp500.000</p>
    </div>
  </div>
</template>
