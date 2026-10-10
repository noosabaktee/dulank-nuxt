<template>
  <div class="position-fixed bottom-0 start-0 p-3" id="inline-style-index-008">
    <div
      aria-atomic="true"
      aria-live="assertive"
      class="toast product-toast hide"
      id="newProductToast"
      role="alert"
    >
      <div class="toast-header">
        <strong class="me-auto">New Product Alert!</strong>
        <small>Just now</small>
        <button
          aria-label="Close"
          class="btn-close"
          data-bs-dismiss="toast"
          type="button"
        ></button>
      </div>
      <div class="toast-body p-0">
        <div class="d-flex">
          <div class="product-toast-img">
            <img alt="New Product" class="img-fluid" src="/images/sticker.jpg" />
          </div>
          <div class="product-toast-content p-3">
            <h6 class="product-toast-title mb-1">Sticker A3+</h6>
            <p class="product-toast-price mb-1">Rp10.000 - Rp30.000</p>
            <a class="btn btn-sm btn-danger" href="#">View Product</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
