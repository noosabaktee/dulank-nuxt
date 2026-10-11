import type { ApiResponse } from "#server/types/api";

/**
 * Profil user store (parity UserResource / users.json).
 * Dipakai oleh sesi auth: state bersama lintas route/komponen.
 */
export interface AuthUser {
  id: number;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  joinDate?: string;
  lastLogin?: string;
  companyType?: string;
  companyName?: string;
  departmentName?: string;
  npwp?: string;
  transactionCode?: string;
  taxAddress?: string;
  attachTaxInvoice?: boolean;
  twoFactorEnabled?: boolean;
}

interface AuthPayload {
  token: string;
  user: AuthUser;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone?: string;
  deviceName?: string;
}

const TOKEN_COOKIE = "dulank_store_token";

/**
 * Sesi & identitas user store.
 *
 * Token disimpan di cookie (SSR-friendly, tidak perlu localStorage).
 * Semua aksi memakai `$api` (plugin) — tidak terikat lifecycle komponen.
 */
export const useAuthStore = defineStore("auth", () => {
  const token = useCookie<string | null>(TOKEN_COOKIE, {
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
  });
  const user = ref<AuthUser | null>(null);
  const initialized = ref(false);

  const isAuthenticated = computed(() => Boolean(token.value));

  function applyAuth(payload: AuthPayload) {
    token.value = payload.token;
    user.value = payload.user;
  }

  async function login(email: string, password: string, deviceName?: string) {
    const { $api } = useNuxtApp();
    const res = await $api<ApiResponse<AuthPayload>>("/auth/login", {
      method: "POST",
      body: {
        email,
        password,
        ...(deviceName ? { device_name: deviceName } : {}),
      },
    });
    applyAuth(res.data);
    return res.data;
  }

  async function register(input: RegisterInput) {
    const { $api } = useNuxtApp();
    const res = await $api<ApiResponse<AuthPayload>>("/auth/register", {
      method: "POST",
      body: {
        name: input.name,
        email: input.email,
        phone: input.phone,
        password: input.password,
        password_confirmation: input.passwordConfirmation,
        ...(input.deviceName ? { device_name: input.deviceName } : {}),
      },
    });
    applyAuth(res.data);
    return res.data;
  }

  async function fetchMe() {
    if (!token.value) return null;
    const { $api } = useNuxtApp();
    try {
      const res = await $api<ApiResponse<AuthUser>>("/auth/me");
      user.value = res.data;
      return res.data;
    } catch {
      // 401 (token invalid/expired) sudah ditangani plugin ($api reset).
      reset();
      return null;
    }
  }

  async function logout() {
    const { $api } = useNuxtApp();
    if (token.value) {
      try {
        await $api<ApiResponse<{ revoked: boolean }>>("/auth/logout", {
          method: "POST",
        });
      } catch {
        // Token sudah tidak valid — tetap bersihkan sesi lokal.
      }
    }
    reset();
  }

  function reset() {
    token.value = null;
    user.value = null;
  }

  /**
   * Inisialisasi sekali per lifecycle: baca cookie → validasi via /auth/me.
   * Dipakai plugin init (client) dan halaman protected (SSR).
   */
  async function initialize() {
    if (initialized.value) return;
    initialized.value = true;
    if (token.value) await fetchMe();
  }

  return {
    token,
    user,
    initialized,
    isAuthenticated,
    login,
    register,
    fetchMe,
    logout,
    reset,
    initialize,
  };
});