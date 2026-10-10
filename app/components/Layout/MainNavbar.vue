<script setup lang="ts">
const quoteOpen = ref(false)
const profileOpen = ref(false)
const calculatorOpen = ref(false)
const route = useRoute()

function closeDropdowns() {
  quoteOpen.value = false
  profileOpen.value = false
  calculatorOpen.value = false
}

function toggleQuote() {
  const next = !quoteOpen.value
  closeDropdowns()
  quoteOpen.value = next
}

function toggleProfile() {
  const next = !profileOpen.value
  closeDropdowns()
  profileOpen.value = next
}

function toggleCalculator() {
  const next = !calculatorOpen.value
  closeDropdowns()
  calculatorOpen.value = next
}

function handleDocumentClick() {
  closeDropdowns()
}

onMounted(() => document.addEventListener('click', handleDocumentClick))
onBeforeUnmount(() => document.removeEventListener('click', handleDocumentClick))
watch(() => route.fullPath, closeDropdowns)
</script>

<template>
  <nav id="my-navbar" class="navbar navbar-light navbar-expand-md py-1 dulank-main-navbar">
    <div class="container-fluid">
      <a class="navbar-brand d-block d-md-none fw-bold" href="/">Dulank.</a>
      <button
        class="navbar-toggler"
        data-bs-target="#navcol-1"
        data-bs-toggle="collapse"
        type="button"
        aria-controls="navcol-1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navcol-1" class="collapse navbar-collapse">
        <div class="row w-100">
          <div id="inline-style-navbar-001" class="col-12 mb-2 py-3">
            <div class="row justify-content-between container mx-auto dulank-navbar-top-row">
              <div class="col-12 col-md-6 d-md-flex align-items-center">
                <a href="/" class="dulank-navbar-logo-link">
                  <h4 class="d-none d-md-block fw-bold mt-1">Dulank.</h4>
                </a>
                <div class="search-form ms-md-4">
                  <form class="d-flex" @submit.prevent>
                    <input class="form-control" placeholder="Search for Products..." aria-label="Search" />
                    <button class="btn search-btn" type="submit" aria-label="Search">
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              <div class="col-12 col-md-6 align-items-center mt-1">
                <div class="d-flex float-none float-md-end dulank-navbar-action-wrap">
                  <div class="action-icons d-md-flex d-block">
                    <div class="d-flex mb-3 mb-md-0 justify-content-center align-items-center">
                      <a href="/wishlist" class="icon-link me-3 link dulank-nav-static-action">
                        <span class="position-relative fs-5">
                          <i class="bi bi-heart"></i>
                          <span class="badge rounded-pill icon-badge">2</span>
                        </span>
                        <span>Wishlist</span>
                      </a>

                      <a href="/cart" class="icon-link me-3 dulank-nav-static-action">
                        <span class="position-relative fs-5">
                          <i class="bi bi-cart3"></i>
                          <span class="badge rounded-pill icon-badge">2</span>
                        </span>
                        <span>Cart</span>
                      </a>
                    </div>

                    <div class="d-flex justify-content-center align-items-center dulank-navbar-secondary-actions">
                      <div class="icon-link me-3 dropdown dulank-nav-action" @click.stop>
                        <a href="/quotation-send" class="dulank-nav-icon-link" aria-label="Ask For Quote">
                          <span class="position-relative fs-5">
                            <i class="bi bi-journal-text me-1"></i>
                            <span class="badge rounded-pill icon-badge">2</span>
                          </span>
                        </a>
                        <button
                          type="button"
                          class="dulank-nav-action-trigger"
                          :aria-expanded="quoteOpen"
                          aria-haspopup="true"
                          @click="toggleQuote"
                        >
                          Ask For Quote
                        </button>

                        <div
                          id="inline-style-navbar-002"
                          class="dropdown-menu py-2 px-3 dulank-quote-dropdown"
                          :class="{ show: quoteOpen }"
                        >
                          <span class="fw-bold">Online Quotation</span>
                          <a href="/quotation-view" class="py-1 d-block d-flex align-items-center dulank-quote-item">
                            <img src="/images/rp-pdf.png" alt="" width="30" height="30" class="me-2" />
                            <div>
                              <div id="inline-style-navbar-003" class="fw-semibold small">Penawaran Harga #Q21000220213 masih tersedia.</div>
                              <div id="inline-style-navbar-004" class="text-standard">Segera lakukan pemesanan sebelum Penawaran Harga kadaluarsa!</div>
                            </div>
                          </a>
                          <hr />
                          <a href="/quotation-view" class="py-1 d-block d-flex align-items-center dulank-quote-item">
                            <img src="/images/rp-pdf.png" alt="" width="30" height="30" class="me-2" />
                            <div>
                              <div id="inline-style-navbar-005" class="fw-semibold small">Penawaran Harga #Q21000220213 masih tersedia.</div>
                              <div id="inline-style-navbar-006" class="text-standard">Segera lakukan pemesanan sebelum Penawaran Harga kadaluarsa!</div>
                            </div>
                          </a>
                          <div class="text-end mb-2">
                            <a href="/quotation-send" class="text-standard my-text-primary">Selengkapnya</a>
                          </div>
                        </div>
                      </div>

                      <div class="icon-link dropdown dulank-nav-action dulank-profile-action" @click.stop>
                        <a href="/profile" class="dulank-nav-icon-link" aria-label="Profile">
                          <span class="position-relative fs-5">
                            <i class="bi bi-person-circle me-1"></i>
                          </span>
                        </a>
                        <button
                          type="button"
                          class="dulank-nav-action-trigger"
                          :aria-expanded="profileOpen"
                          aria-haspopup="true"
                          @click="toggleProfile"
                        >
                          Profile
                        </button>

                        <div class="dropdown-menu dulank-profile-dropdown" :class="{ show: profileOpen }">
                          <a href="/profile" class="d-block w-100 small dropdown-item py-2 px-3">Akun Saya</a>
                          <a href="/orders" class="d-block w-100 small dropdown-item py-2 px-3">Pesanan Saya</a>
                          <a href="/history" class="d-block w-100 small dropdown-item py-2 px-3">Beli Lagi</a>
                          <a href="/billing" class="d-block w-100 small dropdown-item py-2 px-3">Billing</a>
                          <a href="/address" class="d-block w-100 small dropdown-item py-2 px-3">Alamat</a>
                          <a href="/quotation-send" class="d-block w-100 small dropdown-item py-2 px-3">Quotation</a>
                          <a href="/login" class="d-block w-100 small dropdown-item py-2 px-3">Login</a>
                          <a href="/register" class="d-block w-100 small dropdown-item py-2 px-3">Sign In</a>
                          <a href="#" class="d-block w-100 small dropdown-item py-2 px-3" @click.prevent>Logout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <ul class="navbar-nav mb-2 mb-lg-0 justify-content-center align-items-md-center">
              <li class="nav-item"><a class="nav-link" href="/product-list">All Product</a></li>
              <li class="nav-item"><a class="nav-link" href="/categories">Categories</a></li>
              <li class="nav-item"><a class="nav-link" href="/cetak-full-color">Cetak Full Color</a></li>
              <li class="nav-item"><a class="nav-link" href="/kalender">Kalender</a></li>
              <li class="nav-item"><a class="nav-link" href="/cetak-buku">Cetak Buku</a></li>
              <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
              <li class="nav-item dropdown" @click.stop>
                <button
                  id="calculatorDropdown"
                  type="button"
                  class="nav-link dropdown-toggle dulank-nav-menu-button"
                  :aria-expanded="calculatorOpen"
                  @click="toggleCalculator"
                >
                  Kalkulator
                </button>
                <ul class="dropdown-menu" :class="{ show: calculatorOpen }" aria-labelledby="calculatorDropdown">
                  <li><a class="dropdown-item" href="/kalkulator-berat-kertas">Berat Kertas</a></li>
                  <li><a class="dropdown-item" href="/kalkulator-potong-kertas">Potong Kertas</a></li>
                  <li><a class="dropdown-item" href="/kalkulator-percetakan">Percetakan</a></li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link" href="https://dulank-admin.netlify.app/">Admin</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
