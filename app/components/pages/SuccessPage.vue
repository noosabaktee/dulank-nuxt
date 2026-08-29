<script setup lang="ts">
useLegacyPage({
  "title": "Order Success",
  "styles": [
    "/css/style.css",
    "/css/pages/success-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/pages/success-events.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-success">
<main>
<section class="py-3 py-md-5 py-xl-8">
<div class="container">
<div class="row justify-content-center">
<div class="col-lg-8 text-center">
<h2 class="fw-bold mb-3" id="inline-style-success-001">TERIMA KASIH</h2>
<p class="mb-2 text-standard">
                            Anda telah berhasil melakukan pemesanan pada hari ini <b>23 June 2025</b> dengan nomor pesanan
                            <a class="text-primary fw-semibold text-decoration-none" href="/quotation-view">#600449168</a>
</p>
<div class="mb-3">
                            Jumlah yang perlu dibayarkan : <b>Rp46.620</b>
</div>
<div class="bg-light border rounded-2 p-4 mb-3">
<div class="mb-2">
<img alt="BCA" id="inline-style-success-002" src="https://image.cermati.com/v1428073854/brands/avqoa9rfng8bklutfhm6.jpg"/>
</div>
<div class="mb-2 text-secondary" id="inline-style-success-003">Transfer Bank</div>
<div class="fw-bold fs-4 mb-2" id="va-number">109-2993242</div>
<button class="btn btn-outline-secondary btn-sm mb-2" data-js-click="success-001" id="liveToastBtn" type="button">Salin Nomor</button>
<div class="fw-semibold mt-2 text-standard" id="inline-style-success-004">
                                Batas waktu pembayaran hingga <span class="fw-bold">26 June 2025</span>
</div>
<a class="btn my-btn-primary mt-2" href="/invoice-view">Konfirmasi Pembayaran</a>
</div>
<div class="mb-3 text-standard">
                            Mohon segera lakukan pembayaran. Pengiriman pesanan produk diprioritaskan berdasarkan status pembayaran yang kami terima terlebih dahulu. Terima kasih
                        </div>
<img alt="empty box" class="mb-3" id="inline-style-success-005" src="https://img.freepik.com/premium-vector/cute-cardboard-box-cartoon-character-vector-illustration_1323048-21310.jpg"/>
<div class="fw-semibold mb-2 mt-2 text-standard">
                            Jika Anda menginginkan untuk mengambil sendiri pesanan Anda di gudang dulank.com, <a class="text-primary text-decoration-none" href="#">silahkan klik disini</a>
</div>
<div class="mb-1">
<a class="text-primary text-decoration-none text-standard" href="/billing">Klik disini untuk mencetak pesanan Anda</a>
</div>
<div class="mb-2 text-standard">
                            Untuk penerbitan faktur pajak, silahkan daftarkan nomor NPWP Anda <a class="text-primary text-decoration-none" href="/profile">disini</a> (jika belum pernah mendaftar sebelumnya)
                        </div>
</div>
</div>
</div>
</section>
</main>
<div class="toast-container position-fixed bottom-0 p-3">
<div aria-atomic="true" aria-live="assertive" class="toast bg-dark" id="liveToast" role="alert">
<div class="toast-body text-white">
            Nomor berhasil disalin!
            </div>
</div>
</div>
<footer>
<div><LayoutAppFooter /></div>
</footer>






</div>
</template>
