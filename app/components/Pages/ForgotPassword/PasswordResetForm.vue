<template>
  <div class="card border-0">
    <div class="card-body p-5">
      <h3 class="text-center mb-4 fw-normal">Forgot Account Password</h3>

      <form>
        <div class="mb-4">
          <input
            class="form-control"
            id="email"
            placeholder="Email address"
            required=""
            type="text"
          />
        </div>

        <button
          class="btn btn-primary my-bg-primary w-100 py-2 mb-3"
          type="submit"
        >
          Send Password Reset Link
        </button>

        <div class="text-center">
          <a class="text-primary text-standard" href="/login">
            <i class="fas fa-arrow-left me-2"></i>Back to login page
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
