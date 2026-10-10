<template>
  <div class="mb-4" id="product-section">
    <div class="bg-white rounded-2 border border-custom p-0">
      <div class="px-4 py-3 rounded-bottom">
        <div class="row mb-2">
          <div class="col-md-4 mb-2 mb-md-0">
            <span class="text-standard fw-semibold">Nomor PO</span>
          </div>
          <div class="col-md-8 mb-2 mb-md-0">
            <input
              class="form-control border-custom bg-white text-color nomor-po-input"
              placeholder="Nomor PO"
              type="text"
            />
            <span class="text-standard"
              >Kami akan menerbitkan Invoice sesuai dengan nomor PO permintaan
              Anda</span
            >
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-md-4 mb-2 mb-md-0">
            <span class="text-standard fw-semibold"
              >Informasi Faktur Pajak</span
            >
          </div>
          <div class="col-md-8 mb-2 mb-md-0">
            <span class="text-standard">
              85.836.002.7-408.000 <br />
              CV. DULANK SEJAHTERA CIDA <br />
              JL. ARIF RAHMAN HAKIM, NAGASARI, KARAWANG BARAT, KAB. KARAWANG,
              JAWA BARAT
            </span>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-md-4 mb-2 mb-md-0">
            <span class="text-standard fw-semibold">Preferensi Pengiriman</span>
          </div>
          <div class="col-md-8 mb-2 mb-md-0 d-flex">
            <div class="form-check align-items-center">
              <input
                checked=""
                class="form-check-input"
                id="lengkap"
                name="radioPengiriman"
                type="radio"
              />
              <label class="form-check-label text-standard" for="lengkap">
                Pengiriman Lengkap
              </label>
            </div>
            <div class="form-check ms-3 align-items-center">
              <input
                class="form-check-input"
                id="sebagian"
                name="radioPengiriman"
                type="radio"
              />
              <label class="form-check-label text-standard" for="sebagian">
                Pengiriman Sebagian
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 mt-3 pt-3 pb-2 border-bottom border-custom bg-white">
      <div class="align-items-center">
        <div class="d-flex">
          <img
            alt="Kaos"
            class="object-fit-cover rounded-2"
            height="64"
            src="/images/brosur.jpg"
            width="64"
          />
          <div class="ps-2">
            <div class="fw-semibold text-color small">
              Brosur PPDB SMAN 1 Bandung
            </div>
            <div class="fw-semibold text-color text-standard">
              Brosur Full Color
            </div>
            <div class="text-secondary text-standard">
              Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa
              Laminasi, Tanpa Lipatan
            </div>
            <div class="text-color text-standard">
              Art Work : Ada file ready to print
            </div>
            <div class="text-color text-standard">
              Hasil Cetak : Warna standard CMYK
            </div>
            <div class="text-color text-standard">Note :</div>
            <span class="text-color text-standard"
              >Lama Proses Produki (PO)</span
            >
            <span
              class="text-standard border border-2 p-1 my-text-primary d-inline-block"
              id="inline-style-checkout-001"
              >5-10 Hari</span
            ><br />
            <span class="fw-semibold text-dark text-standard">Rp65.000</span>
            <span class="text-color text-standard">x2</span><br />
          </div>
        </div>
        <div class="text-end">
          <span class="fw-semibold text-dark" id="inline-style-checkout-002"
            >Rp130.000</span
          >
        </div>
      </div>
      <div class="align-items-center">
        <div class="d-flex">
          <img
            alt="Kaos"
            class="object-fit-cover rounded-2"
            height="64"
            src="/images/yasin.jpg"
            width="64"
          />
          <div class="ps-2">
            <div class="fw-semibold text-color small">
              Yasin Tahlil 100 Hari
            </div>
            <div class="fw-semibold text-color text-standard">Yasin</div>
            <div class="text-secondary text-standard">
              Brosur Full Color A4 (210x297 Milimeter), Art paper 150gr, Tanpa
              Laminasi, Tanpa Lipatan
            </div>
            <div class="text-color text-standard">
              Art Work : Belum ada designs
            </div>
            <div class="text-color text-standard">
              Hasil Cetak : Warna standard CMYK
            </div>
            <div class="text-color text-standard">Note :</div>
            <span class="text-color text-standard"
              >Lama Proses Produki (PO)</span
            >
            <span
              class="text-standard border border-2 p-1 my-text-primary d-inline-block"
              id="inline-style-checkout-003"
              >5-10 Hari</span
            ><br />
            <span class="fw-semibold text-dark text-standard">Rp65.000</span>
            <span class="text-color text-standard">x1</span>
          </div>
        </div>
        <div class="text-end">
          <span class="fw-semibold text-dark" id="inline-style-checkout-004"
            >Rp65.000</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
