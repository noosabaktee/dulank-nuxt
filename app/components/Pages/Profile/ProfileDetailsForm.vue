<script setup lang="ts">
import type { UserProfile } from "~/composables/useUserProfile";

defineProps<{
  user: UserProfile;
  stats: {
    orders: number;
    history: number;
    quotations: number;
    addresses: number;
    billings: number;
    cart: number;
    wishlist: number;
  };
}>();
</script>

<template>
  <div class="tab-form" id="previewForm">
    <div class="row g-4">
      <div class="col-6 col-lg-4">
        <div
          class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center d-md-flex d-block text-md-start text-center"
        >
          <div class="widget-icon fw-bold">{{ stats.orders }}</div>
          <div class="widget-content">
            <h3 class="widget-title">Orders</h3>
            <a class="widget-link" href="/orders">View All</a>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-4">
        <div
          class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center"
        >
          <div class="widget-icon fw-bold">{{ stats.history }}</div>
          <div class="widget-content">
            <h3 class="widget-title">Pesanan Saya</h3>
            <a class="widget-link" href="/history">View All</a>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-4">
        <div
          class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center"
        >
          <div class="widget-icon fw-bold">{{ stats.quotations }}</div>
          <div class="widget-content">
            <h3 class="widget-title">Quotations</h3>
            <a class="widget-link" href="/quotation-send">View All</a>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-4">
        <div
          class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center"
        >
          <div class="widget-icon fw-bold">{{ stats.addresses }}</div>
          <div class="widget-content">
            <h3 class="widget-title">Addresses</h3>
            <a class="widget-link" href="/address">View All</a>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-4">
        <div
          class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center"
        >
          <div class="widget-icon fw-bold">{{ stats.billings }}</div>
          <div class="widget-content">
            <h3 class="widget-title">Billings</h3>
            <a class="widget-link" href="/billing">View All</a>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-4">
        <div
          class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center"
        >
          <div class="widget-icon">
            <i class="fas fa-user"></i>
          </div>
          <div class="widget-content">
            <h3 class="widget-title">Account Details</h3>
            <a class="widget-link" href="#">Edit</a>
          </div>
        </div>
      </div>
      <div class="row g-4 mt-1">
        <div class="col-6 col-lg-4">
          <div
            class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center"
          >
            <div class="widget-icon fw-bold">{{ stats.cart }}</div>
            <div class="widget-content">
              <h3 class="widget-title">Cart</h3>
              <a class="widget-link" href="/cart">View All</a>
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-4">
          <div
            class="dashboard-widget shadow-sm d-md-flex d-block text-md-start text-center"
          >
            <div class="widget-icon fw-bold">{{ stats.wishlist }}</div>
            <div class="widget-content">
              <h3 class="widget-title">Wishlist</h3>
              <a class="widget-link" href="/wishlist">View All</a>
            </div>
          </div>
        </div>
      </div>
      <form>
        <span class="fs-6 d-block border-bottom border-1 py-2 my-2"
          >Login ID</span
        >
        <div class="mb-4 row">
          <div class="col-md-4">
            <label class="form-label text-standard" for="email"
              >Alamat Email (Login ID)</label
            >
          </div>
          <div class="col-md-8">
            <input
              class="form-control my-1 w-100"
              disabled=""
              id="email"
              type="text"
              :value="user.email"
            />
          </div>
        </div>

        <span class="fs-6 d-block border-bottom border-1 py-2 my-2"
          >Informasi Saya</span
        >
        <div class="mb-4 row">
          <div class="col-md-4">
            <label class="form-label text-standard" for="companyName"
              >Nama Perusahaan</label
            >
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-4">
                <select
                  aria-label="Default select example"
                  class="form-select text-standard my-1"
                  :value="user.companyType"
                >
                  <option disabled="" selected="">
                    Pilih Jenis Badan Usaha
                  </option>
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
                <input
                  class="form-control my-1 w-100"
                  id="companyName"
                  type="text"
                  :value="user.companyName"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mb-4 row">
          <div class="col-md-4">
            <span class="form-label text-standard" for="departmenName"
              >Nama Departemen</span
            >
            <span class="text-standard text-muted fst-italic d-block"
              >(Optional)</span
            >
          </div>
          <div class="col-md-8">
            <input
              class="form-control w-100"
              id="departmenName"
              type="text"
              :value="user.departmentName"
            />
          </div>
        </div>
        <div class="mb-4 row">
          <div class="col-md-4">
            <label class="form-label text-standard" for="fullName"
              >Nama Lengkap</label
            >
          </div>
          <div class="col-md-8">
            <input
              class="form-control w-100"
              id="fullName"
              type="text"
              :value="user.name"
            />
          </div>
        </div>
        <div class="mb-4 row">
          <div class="col-md-4">
            <label class="form-label text-standard" for="phone"
              >No. Handphone</label
            >
          </div>
          <div class="col-md-8">
            <input
              class="form-control w-100"
              id="phone"
              type="text"
              :value="user.phone"
            />
          </div>
        </div>

        <span class="fs-6 d-block border-bottom border-1 py-2 my-2"
          >Informasi Perusahaan Saya</span
        >
        <div>
          <div id="settingFormFakturValue mt-2">
            <div class="mb-4 row">
              <div class="col-md-4">
                <span class="form-label text-standard" for="npwp"
                  >NPWP Perusahaan</span
                >
                <span class="text-standard text-muted fst-italic d-block"
                  >(NPWP 16 Digit)</span
                >
              </div>
              <div class="col-md-8">
                <input
                  class="form-control w-100"
                  data-grouplength="4"
                  id="npwp"
                  maxlength="19"
                  type="text"
                  :value="user.npwp"
                />
              </div>
            </div>
            <div class="mb-4 row">
              <div class="col-md-4">
                <label class="form-label text-standard" for="kode-transaksi"
                  >Kode Transaksi</label
                >
              </div>
              <div class="col-md-8">
                <select
                  aria-label="Default select example"
                  class="form-select text-standard"
                  :value="user.transactionCode"
                >
                  <option disabled="" selected="">
                    Pilih Jenis Kode Transaksi
                  </option>
                  <option value="01 - Kepada selain pemungut PPN">
                    01 - Kepada selain pemungut PPN
                  </option>
                  <option value="02 - Kepada Pemungut PPN Instansi Pemerintah">
                    02 - Kepada Pemungut PPN Instansi Pemerintah
                  </option>
                  <option
                    value="03 - Kepada Pemungut PPN selain Instansi Pemerintah"
                  >
                    03 - Kepada Pemungut PPN selain Instansi Pemerintah
                  </option>
                  <option value="04 - DPP Nilai Lain">
                    04 - DPP Nilai Lain
                  </option>
                  <option value="05 -  Besaran tertentu">
                    05 - Besaran tertentu
                  </option>
                  <option
                    value="06 - Kepada pribadi pemegang paspor luar negeri (16E UU PPN)"
                  >
                    06 - Kepada pribadi pemegang paspor luar negeri (16E UU PPN)
                  </option>
                  <option
                    value="07 - Penyerahan dengan fasilitas PPn atau PPN dan PPnBM tidak dipungut/ditanggung pemerintah"
                  >
                    07 - Penyerahan dengan fasilitas PPn atau PPN dan PPnBM
                    tidak dipungut/ditanggung pemerintah
                  </option>
                  <option
                    value="08 - Penyerahan dengan fasilitas dibebaskan PPN atau PPN dan PPnBM"
                  >
                    08 - Penyerahan dengan fasilitas dibebaskan PPN atau PPN dan
                    PPnBM
                  </option>
                  <option
                    value="09 - Penyerahan aktiva yang tujuan semula tidak diperjualbelikan (16D UU PPN)"
                  >
                    09 - Penyerahan aktiva yang tujuan semula tidak
                    diperjualbelikan (16D UU PPN)
                  </option>
                  <option value="10 - Penyerahan Lainnya">
                    10 - Penyerahan Lainnya
                  </option>
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
                    <input
                      class="form-control my-1 w-100"
                      disabled=""
                      type="text"
                      :value="`${user.companyType || ''} `"
                    />
                  </div>
                  <div class="col-md-8">
                    <input
                      class="form-control my-1 w-100"
                      disabled=""
                      type="text"
                      :value="user.companyName"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-4 row">
              <div class="col-md-4">
                <label class="form-label text-standard" for="addressFaktur"
                  >Alamat Perusahaan</label
                >
              </div>
              <div class="col-md-8">
                <textarea
                  class="form-control w-100"
                  id="addressFaktur"
                  type="text"
                  :value="user.taxAddress"
                ></textarea>
              </div>
            </div>
            <div
              class="d-md-flex justify-content-between align-items-center mb-3"
            >
              <div>
                <div class="d-flex mt-3 align-items-center">
                  <span class="text-standard"
                    >Apakah setiap transaksi selalu lampirkan softcopy faktur
                    pajak <i>(PDF)</i> pada sistem billing?</span
                  >
                  <div class="form-check ms-3 align-items-center">
                    <input
                      class="form-check-input"
                      id="radioDefault1"
                      name="radioDefault"
                      type="radio"
                      :checked="user.attachTaxInvoice === true"
                    />
                    <label
                      class="form-check-label text-standard"
                      for="radioDefault1"
                    >
                      Ya
                    </label>
                  </div>
                  <div class="form-check ms-3 align-items-center">
                    <input
                      class="form-check-input"
                      id="radioDefault2"
                      name="radioDefault"
                      type="radio"
                      :checked="user.attachTaxInvoice !== true"
                    />
                    <label
                      class="form-check-label text-standard"
                      for="radioDefault2"
                    >
                      Tidak
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <small
              class="d-none text-standard text-danger"
              id="info-selected-all"
              ><i class="fa-solid fa-circle-info"></i> please input your
              message<br
            /></small>
          </div>
        </div>
        <div class="mt-4 d-flex justify-content-end">
          <button
            class="btn btn-primary px-4 py-2"
            id="inline-style-profile-001"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
