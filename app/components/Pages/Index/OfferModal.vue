<template>
  <div
    aria-hidden="true"
    aria-labelledby="offerModalLabel"
    class="modal fade"
    id="offerModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <button
          aria-label="Close"
          class="btn-close position-absolute top-0 end-0 m-3 z-3"
          data-bs-dismiss="modal"
          type="button"
        ></button>
        <div class="modal-body p-0">
          <div class="row g-0">
            <div class="col-md-6">
              <div class="offer-modal-img h-100">
                <img
                  alt="offer"
                  class="img-fluid w-100 object-fit-cover"
                  src="/images/brosur.jpg"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="offer-modal-content p-4 p-md-5">
                <div class="text-center">
                  <h5 class="offer-modal-subtitle mb-2">
                    Special Ramadhan!
                  </h5>
                  <h3 class="offer-modal-title mb-2">
                    Brosur Flyer ukuran A4
                  </h3>
                  <p class="offer-modal-desc mb-4">
                    <span class="mb-2 d-block"
                      ><del>Rp90.000 - Rp400.000</del></span
                    >
                    <span class="font-weight-bold h4 font-italic">
                      Rp50.000 - Rp300.000
                    </span>
                  </p>
                  <form class="offer-modal-form mb-4">
                    <p>Promotion will ends on 1 April 2025!</p>
                    <button class="btn btn-primary w-100" type="submit">
                      View Product
                    </button>
                  </form>
                </div>
                <div class="offer-modal-checkbox">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      id="dontShowAgain"
                      type="checkbox"
                    />
                    <label class="form-check-label" for="dontShowAgain">
                      Don't show this popup again
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
