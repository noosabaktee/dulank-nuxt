<template>
  <div class="d-md-flex border-bottom mb-4">
    <button
      class="tab-btn btn p-0 me-md-4 d-block mt-md-0 active"
      id="previewTab"
      target-form="previewForm"
      type="button"
    >
      <span class="mb-0">Profile</span>
    </button>
    <button
      class="tab-btn btn p-0 me-md-4 d-block mt-md-0"
      id="passwordTab"
      target-form="passwordForm"
      type="button"
    >
      <span class="mb-0">Change Password</span>
    </button>
    <button
      class="tab-btn btn p-0 me-md-4 d-block mt-md-0"
      id="2FaTab"
      target-form="2FaForm"
      type="button"
    >
      <span class="mb-0">2 Factor Authentication</span>
    </button>
  </div>
</template>
