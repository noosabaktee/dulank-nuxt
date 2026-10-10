<script setup lang="ts">
defineProps<{
  subtotal: number;
  tax: number;
  total: number;
}>();

const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
</script>

<template>
  <div class="col-lg-4 px-3 h-100 position-sticky top-0">
    <h1 id="inline-style-cart-001" class="fs-5 bg-light p-2">Order Summary</h1>
    <div class="mb-3">
      <span class="text-standard">Subtotal</span>
      <span class="float-end text-standard text-primary">{{
        money(subtotal)
      }}</span>
    </div>
    <div class="mb-3">
      <span class="text-standard">PPN (11%)</span>
      <span class="float-end text-standard text-primary">{{ money(tax) }}</span>
    </div>
    <div class="mb-3 mt-2">
      <div class="text-standard text-start">Jumlah Total</div>
      <h4 id="grandTotal" class="text-primary text-end">{{ money(total) }}</h4>
    </div>
    <div
      id="update-info"
      class="alert alert-warning text-standard text-center d-none"
      role="alert"
    >
      Silakan klik update keranjang belanja untuk memperbarui rangkuman belanja
      Anda!
    </div>
    <div
      id="job-name-info"
      class="alert alert-danger text-standard text-center d-none"
      role="alert"
    >
      Silakan isi semua Job Name pada product yang dipilih!
    </div>
    <div class="text-end">
      <a class="btn me-2 my-btn-primary w-100" href="/next"
        >Lanjutkan ke Checkout</a
      >
      <a class="btn me-2 btn-warning w-100 my-2" href="/next"
        >Buat Surat Penawaran (Quotation)</a
      >
    </div>
    <div class="text-start my-2">
      <span class="text-standard"
        >*) Belum termasuk biaya pengiriman berikut PPN pengiriman</span
      ><br />
      <span class="text-standard"
        >*) Kode voucher dapat digunakan di halaman checkout</span
      >
    </div>
    <div class="bg-light border">
      <p id="inline-style-cart-002" class="text-standard p-2">
        Promo GRATIS ONGKIR kirim ke Jakarta, Bogor, Bekasi, Karawang,
        Purwakarta dengan minimum pembelian Rp500.000
      </p>
    </div>
  </div>
</template>
