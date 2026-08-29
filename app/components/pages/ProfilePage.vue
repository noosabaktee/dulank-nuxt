<script setup lang="ts">
useLegacyPage({
  "title": "Profile",
  "styles": [
    "/css/style.css",
    "/css/pages/profile.css",
    "/css/pages/profile-inline.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/profile.js",
    "/js/pages/profile.js"
  ],
  "sweetAlert": false
})
</script>

<template>
<div class="dulank-page dulank-page-profile">
<main>

<div class="container my-5">
<div class="row">

<div class="col-lg-3 mb-4"><ProfileSidebar /></div>

<div class="col-lg-9">
<div class="profile-header d-flex align-items-center mb-4">
<div class="profile-avatar">
<img alt="User Avatar" class="rounded-circle" src="/images/profile.png"/>
<div class="profile-avatar-badge">
<i class="fas fa-camera"></i>
</div>
</div>
<div class="profile-header-info ms-3">
<h5 class="profile-name fs-6 mb-1">Hello Ahmad Dhani</h5>
<span class="text-standard text-muted d-block">Join Date: 19.30 15/12/2025</span>
<span class="text-standard text-muted d-block">Last Login: 15.25 25/12/2025</span>
</div>
</div>
<div class="profile-content bg-white p-4 rounded-3 shadow-sm">

<div class="d-md-flex border-bottom mb-4">
<button class="tab-btn btn p-0 me-md-4 d-block mt-md-0 active" id="previewTab" target-form="previewForm" type="button">
<span class="mb-0">Profile</span>
</button>
<button class="tab-btn btn p-0 me-md-4 d-block mt-md-0" id="passwordTab" target-form="passwordForm" type="button">
<span class="mb-0">Change Password</span>
</button>
<button class="tab-btn btn p-0 me-md-4 d-block mt-md-0" id="2FaTab" target-form="2FaForm" type="button">
<span class="mb-0">2 Factor Authentication</span>
</button>
</div>

<div class="tab-form" id="previewForm">
<div class="row g-4">

<div class="col-6 col-lg-4">
<div class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center d-md-flex d-block text-md-start text-center">
<div class="widget-icon fw-bold">4</div>
<div class="widget-content">
<h3 class="widget-title">Orders</h3>
<a class="widget-link" href="/orders">View All</a>
</div>
</div>
</div>

<div class="col-6 col-lg-4">
<div class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center">
<div class="widget-icon fw-bold">2</div>
<div class="widget-content">
<h3 class="widget-title">Pesanan Saya</h3>
<a class="widget-link" href="/history">View All</a>
</div>
</div>
</div>

<div class="col-6 col-lg-4">
<div class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center">
<div class="widget-icon fw-bold">1</div>
<div class="widget-content">
<h3 class="widget-title">Quotations</h3>
<a class="widget-link" href="/quotation-send">View All</a>
</div>
</div>
</div>

<div class="col-6 col-lg-4">
<div class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center">
<div class="widget-icon fw-bold">3</div>
<div class="widget-content">
<h3 class="widget-title">Addresses</h3>
<a class="widget-link" href="/address">View All</a>
</div>
</div>
</div>

<div class="col-6 col-lg-4">
<div class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center">
<div class="widget-icon fw-bold">2</div>
<div class="widget-content">
<h3 class="widget-title">Billings</h3>
<a class="widget-link" href="/billing">View All</a>
</div>
</div>
</div>

<div class="col-6 col-lg-4">
<div class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center">
<div class="widget-icon">
<i class="fas fa-user"></i>
</div>
<div class="widget-content">
<h3 class="widget-title">Account Details</h3>
<a class="widget-link" href="#">Edit</a>
</div>
</div>
</div>
<form>

<span class="fs-6 d-block border-bottom border-1 py-2 my-2">Login ID</span>
<div class="mb-4 row">
<div class="col-md-4">
<label class="form-label text-standard" for="email">Alamat Email (Login ID)</label>
</div>
<div class="col-md-8">
<input class="form-control my-1 w-100" disabled="" id="email" type="text" value="ahmad@gmail.com"/>
</div>
</div>

<span class="fs-6 d-block border-bottom border-1 py-2 my-2">Informasi Saya</span>
<div class="mb-4 row">
<div class="col-md-4">
<label class="form-label text-standard" for="companyName">Nama Perusahaan</label>
</div>
<div class="col-md-8">
<div class="row">
<div class="col-md-4">
<select aria-label="Default select example" class="form-select text-standard my-1">
<option disabled="" selected="">Pilih Jenis Badan Usaha</option>
<option value="PT">PT</option>
<option value="CV">CV</option>
<option value="Firma">Firma</option>
<option value="PD">PD</option>
<option value="UD">UD</option>
<option value="BUMD">BUMD</option>
<option value="BUMN">BUMN</option>
<option value="Kementerian">Kementerian</option>
<option value="Lembaga">Lembaga</option>
<option value="Koperasi">Koperasi</option>
<option value="BUT">BUT</option>
<option value="Lainnya">Lainnya</option>
</select>
</div>
<div class="col-md-8">
<input class="form-control my-1 w-100" id="companyName" type="text" value="Dulank Semesta Cida"/>
</div>
</div>
</div>
</div>
<div class="mb-4 row">
<div class="col-md-4">
<span class="form-label text-standard" for="departmenName">Nama Departemen</span>
<span class="text-standard text-muted fst-italic d-block">(Optional)</span>
</div>
<div class="col-md-8">
<input class="form-control w-100" id="departmenName" type="text" value=""/>
</div>
</div>
<div class="mb-4 row">
<div class="col-md-4">
<label class="form-label text-standard" for="fullName">Nama Lengkap</label>
</div>
<div class="col-md-8">
<input class="form-control w-100" id="fullName" type="text" value="Ahmad Dhani"/>
</div>
</div>
<div class="mb-4 row">
<div class="col-md-4">
<label class="form-label text-standard" for="phone">No. Handphone</label>
</div>
<div class="col-md-8">
<input class="form-control w-100" id="phone" type="text" value="08727645627"/>
</div>
</div>

<span class="fs-6 d-block border-bottom border-1 py-2 my-2">Informasi Perusahaan Saya</span>
<div>
<div id="settingFormFakturValue mt-2">
<div class="mb-4 row">
<div class="col-md-4">
<span class="form-label text-standard" for="npwp">NPWP Perusahaan</span>
<span class="text-standard text-muted fst-italic d-block">(NPWP 16 Digit)</span>
</div>
<div class="col-md-8">
<input class="form-control w-100" data-grouplength="4" id="npwp" maxlength="19" type="text"/>
</div>
</div>
<div class="mb-4 row">
<div class="col-md-4">
<label class="form-label text-standard" for="kode-transaksi">Kode Transaksi</label>
</div>
<div class="col-md-8">
<select aria-label="Default select example" class="form-select text-standard">
<option disabled="" selected="">Pilih Jenis Kode Transaksi</option>
<option value="01 - Kepada selain pemungut PPN">01 - Kepada selain pemungut PPN</option>
<option value="02 - Kepada Pemungut PPN Instansi Pemerintah">02 - Kepada Pemungut PPN Instansi Pemerintah</option>
<option value="03 - Kepada Pemungut PPN selain Instansi Pemerintah">03 - Kepada Pemungut PPN selain Instansi Pemerintah</option>
<option value="04 - DPP Nilai Lain">04 - DPP Nilai Lain</option>
<option value="05 -  Besaran tertentu">05 -  Besaran tertentu</option>
<option value="06 - Kepada pribadi pemegang paspor luar negeri (16E UU PPN)">06 - Kepada pribadi pemegang paspor luar negeri (16E UU PPN)</option>
<option value="07 - Penyerahan dengan fasilitas PPn atau PPN dan PPnBM tidak dipungut/ditanggung pemerintah">07 - Penyerahan dengan fasilitas PPn atau PPN dan PPnBM tidak dipungut/ditanggung pemerintah</option>
<option value="08 - Penyerahan dengan fasilitas dibebaskan PPN atau PPN dan PPnBM">08 - Penyerahan dengan fasilitas dibebaskan PPN atau PPN dan PPnBM</option>
<option value="09 - Penyerahan aktiva yang tujuan semula tidak diperjualbelikan (16D UU PPN)">09 - Penyerahan aktiva yang tujuan semula tidak diperjualbelikan (16D UU PPN)</option>
<option value="10 - Penyerahan Lainnya">10 - Penyerahan Lainnya</option>
</select>
</div>
</div>
<div class="mb-4 row">
<div class="col-md-4">
<label class="form-label text-standard">Nama Perusahaan</label>
</div>
<div class="col-md-8">
<div class="row">
<div class="col-md-4">
<input class="form-control my-1 w-100" disabled="" type="text" value="CV "/>
</div>
<div class="col-md-8">
<input class="form-control my-1 w-100" disabled="" type="text" value="Dulank Semesta Cida"/>
</div>
</div>
</div>
</div>
<div class="mb-4 row">
<div class="col-md-4">
<label class="form-label text-standard" for="addressFaktur">Alamat Perusahaan</label>
</div>
<div class="col-md-8">
<textarea class="form-control w-100" id="addressFaktur" type="text"></textarea>
</div>
</div>
<div class="d-md-flex justify-content-between align-items-center mb-3">
<div>
<div class="d-flex mt-3 align-items-center">
<span class="text-standard">Apakah setiap transaksi selalu lampirkan softcopy faktur pajak <i>(PDF)</i> pada sistem billing?</span>
<div class="form-check ms-3 align-items-center">
<input class="form-check-input" id="radioDefault1" name="radioDefault" type="radio"/>
<label class="form-check-label text-standard" for="radioDefault1">
                                                                Ya
                                                            </label>
</div>
<div class="form-check ms-3 align-items-center">
<input checked="" class="form-check-input" id="radioDefault2" name="radioDefault" type="radio"/>
<label class="form-check-label text-standard" for="radioDefault2">
                                                                Tidak
                                                            </label>
</div>
</div>
</div>
</div>
<small class="d-none text-standard text-danger" id="info-selected-all"><i class="fa-solid fa-circle-info"></i> please input your message<br/></small>
</div>
</div>
<div class="mt-4 d-flex justify-content-end">
<button class="btn btn-primary px-4 py-2" id="inline-style-profile-001" type="submit">Update</button>
</div>
</form>
</div>
</div>

<div class="tab-form" id="passwordForm">
<form>
<div class="mb-3">
<label class="form-label text-standard" for="currentPassword">Current password <span class="text-danger">*</span></label>
<input class="form-control w-100" id="currentPassword" placeholder="Current password" type="password"/>
</div>
<div class="mb-3">
<label class="form-label text-standard" for="newPassword">Password <span class="text-danger">*</span></label>
<input class="form-control w-100" id="newPassword" placeholder="New password" type="password"/>
</div>
<div class="mb-3">
<label class="form-label text-standard" for="confirmPassword">Password confirmation <span class="text-danger">*</span></label>
<input class="form-control w-100" id="confirmPassword" placeholder="Confirm password" type="password"/>
</div>
<div class="mt-4">
<button class="btn btn-primary px-4 py-2" id="inline-style-profile-003" type="submit">Change password</button>
</div>
</form>
</div>

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
<p class="text-muted text-standard mb-3">Gunakan aplikasi Google Authenticator </p>
<div class="badge bg-primary">Lebih aman</div>
</div>
</div>
</div>
</div>
<div class="text-center mt-4">
<button class="btn my-btn-primary btn-lg" disabled="" id="nextStep1" type="button">
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
<h6 class="mb-3 text-standard">2. Download Aplikasi (jika belum ada)</h6>
<div class="list-group mb-3">
<div class="list-group-item">
<i class="fab fa-google-play text-success me-2"></i>
                                                    Google Authenticator
                                                </div>
</div>
<h6 class="mb-3 text-standard">3. Masukkan Kode Verifikasi</h6>
<div class="mb-3">
<input class="form-control text-center fs-4" id="appCode" maxlength="6" placeholder="123456" type="text"/>
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
</div>
</div>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>







</div>
</template>
