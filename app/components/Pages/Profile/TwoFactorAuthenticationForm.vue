<template>
  <div class="tab-form" id="2FaForm">
    <div class="card-body text-standard">
      <div id="step1">
        <h5 class="mb-4 fs-6">
          <i class="fas fa-mobile-alt my-text-primary me-2"></i>
          Pilih Metode Autentikasi
        </h5>
        <div class="row g-3">
          <div class="col-md-6">
            <div class="card method-card h-100" data-method="app">
              <div class="card-body text-center">
                <i class="fas fa-mobile fs-1 text-primary mb-3"></i>
                <h5 class="fs-6">Aplikasi Authenticator</h5>
                <p class="text-muted text-standard mb-3">
                  Gunakan aplikasi Google Authenticator
                </p>
                <div class="badge bg-primary">Lebih aman</div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <button
            class="btn my-btn-primary btn-lg"
            disabled=""
            id="nextStep1"
            type="button"
          >
            Lanjutkan <i class="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>

      <div class="fade-in" id="step2-app">
        <h5 class="mb-4 fs-6">
          <i class="fas fa-mobile text-primary me-2"></i>
          Setup Aplikasi Authenticator
        </h5>
        <div class="row">
          <div class="col-md-6">
            <h6 class="mb-3 text-standard">1. Scan QR Code</h6>
            <div class="qr-code-placeholder mb-3">
              <div class="text-center">
                <i class="fas fa-qrcode fs-1 text-muted mb-2"></i>
                <div class="small text-muted">QR Code akan muncul di sini</div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h6 class="mb-3 text-standard">
              2. Download Aplikasi (jika belum ada)
            </h6>
            <div class="list-group mb-3">
              <div class="list-group-item">
                <i class="fab fa-google-play text-success me-2"></i>
                Google Authenticator
              </div>
            </div>
            <h6 class="mb-3 text-standard">3. Masukkan Kode Verifikasi</h6>
            <div class="mb-3">
              <input
                class="form-control text-center fs-4"
                id="appCode"
                maxlength="6"
                placeholder="123456"
                type="text"
              />
            </div>
            <div class="text-center">
              <button class="btn my-btn-primary" id="verifyApp" type="button">
                <i class="fas fa-check me-2"></i>
                Verifikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
