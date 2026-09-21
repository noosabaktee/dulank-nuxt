<template>
  <div class="section-card pt-2 pb-1">
    <ul class="nav nav-tabs mb-4" id="panduanTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button aria-controls="panduan" aria-selected="true" class="nav-link text-standard fw-normal active" data-bs-target="#panduan" data-bs-toggle="tab" id="panduan-tab" role="tab" type="button">Panduan Design</button>
      </li>
      <li class="nav-item" role="presentation">
        <button aria-controls="faq" aria-selected="false" class="nav-link text-standard fw-normal" data-bs-target="#faq" data-bs-toggle="tab" id="faq-tab" role="tab" type="button">FAQ</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div aria-labelledby="panduan-tab" class="tab-pane fade show active" id="panduan" role="tabpanel">
        <div class="table-responsive">
          <table class="table align-middle mb-0">
            <thead>
              <tr><th class="text-standard">Download Panduan Design Pdf</th></tr>
            </thead>
            <tbody>
              <tr><td class="text-standard"><i class="fa-solid fa-file-pdf download-icon"></i>Kalender Dinding 31x43</td></tr>
              <tr><td class="text-standard"><i class="fa-solid fa-file-pdf download-icon"></i>Kalender Dinding 35x50</td></tr>
              <tr><td class="text-standard"><i class="fa-solid fa-file-pdf download-icon"></i>Kalender Meja 15x21cm</td></tr>
              <tr><td class="text-standard"><i class="fa-solid fa-file-pdf download-icon"></i>Kalender Bolak Balik Sprial Tengah</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div aria-labelledby="faq-tab" class="tab-pane fade" id="faq" role="tabpanel">
        <div class="faq-section">
          <span class="text-standard">
            <strong>Q: Apakah bisa request ukuran khusus?</strong><br/>
            A: Bisa, silakan konsultasikan dengan tim kami.
            <br/><br/>
            <strong>Q: Berapa lama proses pengerjaan?</strong><br/>
            A: Estimasi sesuai tabel dan variasi pesanan.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
