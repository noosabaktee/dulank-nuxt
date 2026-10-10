<template>
  <div class="card border-0">
    <div class="card-body p-5">
      <h3 class="text-center mb-4 fw-normal">Verify your email address</h3>

      <form action="/profile">
        <div class="mb-4">
          <input
            class="form-control"
            id="code"
            placeholder="your code"
            required=""
            type="text"
          /><br />
          <p class="text-standard">
            don't see it? <a class="text-primary" href="">resend code</a>
          </p>
        </div>

        <button
          class="btn btn-primary my-bg-primary w-100 py-2 mb-3"
          type="submit"
        >
          Verify Now
        </button>
      </form>
    </div>
  </div>
</template>
