import type { ApiResponse } from "#server/types/api";
import type { CartItem } from "#server/types/cart";

export interface AddCartItemInput {
  productId: number;
  quantity?: number;
  price?: number;
  spec?: string;
}

/**
 * Keranjang belanja — state bersama (navbar badge, /cart, /next, /checkout).
 * Satu-satunya sumber subtotal/tax/total (getter).
 */
export const useCartStore = defineStore("cart", () => {
  const items = ref<CartItem[]>([]);
  /** Hindari double fetch (SSR + client, atau beberapa komponen sekaligus). */
  const fetched = ref(false);
  const pending = ref(false);
  /** Fetch in-flight bersama: pemanggil lain (navbar, halaman) ikut menunggu. */
  let inflight: Promise<void> | null = null;

  const auth = useAuthStore();

  // Badge navbar: jumlah baris (parity perilaku legacy "+1 per tambah").
  const itemCount = computed(() => items.value.length);
  const subtotal = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );
  const tax = computed(() => Math.round(subtotal.value * 0.11));
  const total = computed(() => subtotal.value + tax.value);

  async function fetch() {
    // Hindari double fetch: sudah dimuat (payload SSR/SSR) atau ada request
    // in-flight (MainNavbar + halaman) — jangan mulai paralel.
    if (!auth.isAuthenticated || fetched.value) return;
    if (inflight) return inflight;
    pending.value = true;
    inflight = (async () => {
      try {
        const { $api } = useNuxtApp();
        const res = await $api<ApiResponse<CartItem[]>>("/cart");
        items.value = res.data;
        fetched.value = true;
      } finally {
        pending.value = false;
        inflight = null;
      }
    })();
    return inflight;
  }

  /** Fetch sekali saja (SSR-safe); komponen cukup memanggil `ensure()`. */
  async function ensure() {
    if (fetched.value || !auth.isAuthenticated) return;
    if (inflight) return inflight;
    await fetch();
  }

  async function add(input: AddCartItemInput) {
    if (!auth.isAuthenticated) return;
    const { $api } = useNuxtApp();
    // POST /cart mengembalikan seluruh koleksi → replace state.
    const res = await $api<ApiResponse<CartItem[]>>("/cart", {
      method: "POST",
      body: {
        productId: input.productId,
        quantity: input.quantity ?? 1,
        price: input.price,
        spec: input.spec ?? "",
      },
    });
    items.value = res.data;
    fetched.value = true;
  }

  async function updateQuantity(itemId: string, quantity: number) {
    if (!auth.isAuthenticated) return;
    const qty = Math.max(quantity, 1);
    const { $api } = useNuxtApp();
    const res = await $api<ApiResponse<CartItem>>(`/cart/${itemId}`, {
      method: "PUT",
      body: { quantity: qty },
    });
    const updated = res.data;
    const index = items.value.findIndex((item) => item.id === itemId);
    if (index >= 0) {
      // Pertahankan urutan item; cukup perbarui field kuantitas.
      items.value = items.value.map((item) =>
        item.id === itemId ? { ...item, quantity: updated.quantity } : item,
      );
    }
  }

  async function remove(itemId: string) {
    const { $api } = useNuxtApp();
    if (auth.isAuthenticated) {
      await $api<ApiResponse<{ id: string; removed: boolean }>>(
        `/cart/${itemId}`,
        { method: "DELETE" },
      );
    }
    items.value = items.value.filter((item) => item.id !== itemId);
  }

  async function clear() {
    const { $api } = useNuxtApp();
    if (auth.isAuthenticated) {
      await $api<ApiResponse<{ cleared: boolean }>>("/cart/clear", {
        method: "POST",
      });
    }
    items.value = [];
    fetched.value = false;
  }

  function reset() {
    items.value = [];
    fetched.value = false;
    pending.value = false;
  }

  return {
    items,
    fetched,
    pending,
    itemCount,
    subtotal,
    tax,
    total,
    fetch,
    ensure,
    add,
    updateQuantity,
    remove,
    clear,
    reset,
  };
});