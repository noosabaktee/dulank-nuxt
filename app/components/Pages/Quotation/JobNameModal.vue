<template>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalLabel"
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="exampleModalLabel">Your Job Name</h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body bg-light">
          <label class="text-standard mb-2">Job Name</label>
          <input
            class="form-control"
            placeholder="enter your job name"
            type="text"
          />
        </div>
        <div class="modal-footer border-0">
          <button
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            type="button"
          >
            Close
          </button>
          <button class="btn btn-primary" type="button">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
