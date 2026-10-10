<template>
  <div class="col-md-7 col-lg-6 bg-light">
    <div class="card border-0 bg-light">
      <div class="card-body p-lg-5 p-md-4">
        <h3 class="text-center mb-4 fw-normal">Login to your account</h3>

        <form action="/profile">
          <div class="mb-3">
            <input
              class="form-control"
              id="email"
              placeholder="Email address"
              required=""
              type="email"
            />
          </div>

          <div class="mb-3">
            <input
              class="form-control"
              id="password"
              placeholder="Password"
              required=""
              type="password"
            />
          </div>

          <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="form-check">
              <input class="form-check-input" id="rememberMe" type="checkbox" />
              <label class="form-check-label text-standard" for="rememberMe"
                >Remember me</label
              >
            </div>
            <a class="text-primary text-standard" href="/forgot-password"
              >Forgot password?</a
            >
          </div>

          <button
            class="btn btn-primary my-bg-primary w-100 py-2 mb-3"
            type="submit"
          >
            Login →
          </button>
          <p class="text-muted text-standard mb-4">
            Don't have an account?
            <a class="text-primary" href="/register">Register now</a>
          </p>

          <div class="text-center mb-4">
            <hr />
            <span class="bg-white px-3 text-muted"> or login with </span>
          </div>

          <div class="row g-2">
            <div class="col-6">
              <a class="btn btn-outline-primary w-100" href="#">
                <i class="fab fa-facebook-f me-2"></i> Sign in with Facebook
              </a>
            </div>
            <div class="col-6">
              <a class="btn btn-outline-danger w-100" href="#">
                <i class="fab fa-google me-2"></i> Sign in with Google
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
