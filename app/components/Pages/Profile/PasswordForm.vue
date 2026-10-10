<template>
  <div class="tab-form" id="passwordForm">
    <form>
      <div class="mb-3">
        <label class="form-label text-standard" for="currentPassword"
          >Current password <span class="text-danger">*</span></label
        >
        <input
          class="form-control w-100"
          id="currentPassword"
          placeholder="Current password"
          type="password"
        />
      </div>
      <div class="mb-3">
        <label class="form-label text-standard" for="newPassword"
          >Password <span class="text-danger">*</span></label
        >
        <input
          class="form-control w-100"
          id="newPassword"
          placeholder="New password"
          type="password"
        />
      </div>
      <div class="mb-3">
        <label class="form-label text-standard" for="confirmPassword"
          >Password confirmation <span class="text-danger">*</span></label
        >
        <input
          class="form-control w-100"
          id="confirmPassword"
          placeholder="Confirm password"
          type="password"
        />
      </div>
      <div class="mt-4">
        <button
          class="btn btn-primary px-4 py-2"
          id="inline-style-profile-003"
          type="submit"
        >
          Change password
        </button>
      </div>
    </form>
  </div>
</template>
