<template>
  <div
    class="empty d-flex flex-column align-items-center justify-content-center text-center py-5 w-100"
    style="min-height: 420px"
  >
    <img
      alt="No addresses"
      class="mb-4 d-block mx-auto"
      src="/images/address.svg"
      width="180"
    />
    <h4>No addresses here!</h4>
    <p class="text-muted mb-4">Add your home</p>
    <a
      class="btn btn-dark my-bg-primary px-4 py-2 rounded-0"
      data-bs-target="#addAddressModal"
      data-bs-toggle="modal"
      href="#"
      >Add a new address</a
    >
  </div>
</template>
