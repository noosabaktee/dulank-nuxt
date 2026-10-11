<script setup lang="ts">
const route = useRoute();
const auth = useAuthStore();

const name = ref("");
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");
const errorMessage = ref("");
const errors = ref<Record<string, string[]>>({});
const submitting = ref(false);

function firstFieldError(error: any): string | undefined {
  const fieldErrors: Record<string, string[]> | undefined =
    error?.data?.errors;
  const field =
    Object.keys(fieldErrors ?? {}).find((key) => fieldErrors?.[key]?.length) ??
    undefined;
  return field && fieldErrors?.[field]?.length
    ? fieldErrors[field][0]
    : undefined;
}

async function onSubmit() {
  errorMessage.value = "";
  errors.value = {};
  if (!name.value || !email.value || !password.value) {
    errorMessage.value = "Nama, email, dan password wajib diisi.";
    return;
  }
  if (password.value !== passwordConfirmation.value) {
    errorMessage.value = "Konfirmasi password tidak cocok.";
    return;
  }
  submitting.value = true;
  try {
    await auth.register({
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value,
      passwordConfirmation: passwordConfirmation.value,
    });
    await navigateTo(String(route.query.redirect || "/"));
  } catch (error: any) {
    errorMessage.value =
      firstFieldError(error) ??
      error?.data?.message ??
      "Registrasi gagal. Silakan coba lagi.";
    if (error?.data?.errors) errors.value = error.data.errors;
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <div class="col-md-7 col-lg-6 bg-light">
    <div class="card border-0 bg-light">
      <div class="card-body p-lg-5 p-md-4">
        <h3 class="text-center mb-4 fw-normal">Register an account</h3>

        <form action="/verify-email" @submit.prevent="onSubmit">
          <div class="mb-3">
            <input
              v-model="name"
              class="form-control"
              id="name"
              placeholder="Full Name"
              required
              type="text"
            />
            <small v-if="errors.name" class="text-danger">{{
              errors.name[0]
            }}</small>
          </div>

          <div class="mb-3">
            <input
              v-model="email"
              class="form-control"
              id="email"
              placeholder="Email address"
              required
              type="email"
            />
            <small v-if="errors.email" class="text-danger">{{
              errors.email[0]
            }}</small>
          </div>

          <div class="mb-3">
            <input
              v-model="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
              type="password"
            />
            <small v-if="errors.password" class="text-danger">{{
              errors.password[0]
            }}</small>
          </div>

          <div class="mb-3">
            <input
              v-model="passwordConfirmation"
              class="form-control"
              id="password_confirmation"
              placeholder="Confirm Password"
              required
              type="password"
            />
            <small v-if="errors.password" class="text-danger">{{
              errors.password[0]
            }}</small>
          </div>

          <div
            v-if="errorMessage"
            class="alert alert-danger text-standard mb-3"
            role="alert"
          >
            {{ errorMessage }}
          </div>

          <button
            class="btn btn-primary my-bg-primary w-100 py-2 mb-3"
            type="submit"
            :disabled="submitting"
          >
            {{ submitting ? "Register..." : "Register→" }}
          </button>
          <p class="text-muted text-standard mb-4">
            Already have an account?
            <a class="text-primary" href="/login">Login now</a>
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