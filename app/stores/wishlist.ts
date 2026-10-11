import type { ApiResponse } from "#server/types/api";
import type { WishlistEntry } from "#server/types/wishlist";

export interface AddWishlistInput {
  productId: number;
  spec?: string;
  expireDate?: string;
}

/**
 * Wishlist — state bersama (navbar badge, /wishlist, tombol hati di PriceList/CartItems).
 */
export const useWishlistStore = defineStore("wishlist", () => {
  const items = ref<WishlistEntry[]>([]);
  /** Hindari double fetch (SSR + client, atau beberapa komponen sekaligus). */
  const fetched = ref(false);
  const pending = ref(false);
  /** Fetch in-flight bersama: pemanggil lain (navbar, halaman) ikut menunggu. */
  let inflight: Promise<void> | null = null;

  const auth = useAuthStore();

  const count = computed(() => items.value.length);

  /** Status tombol hati: apakah productId+spec sudah ada di wishlist. */
  function has(productId: number, spec = "") {
    return items.value.some(
      (item) => item.productId === productId && (item.spec ?? "") === spec,
    );
  }

  async function fetch() {
    // Hindari double fetch: sudah dimuat (payload SSR/SSR) atau ada request
    // in-flight (MainNavbar + halaman) — jangan mulai paralel.
    if (!auth.isAuthenticated || fetched.value) return;
    if (inflight) return inflight;
    pending.value = true;
    inflight = (async () => {
      try {
        const { $api } = useNuxtApp();
        const res = await $api<ApiResponse<WishlistEntry[]>>("/wishlist");
        items.value = res.data;
        fetched.value = true;
      } finally {
        pending.value = false;
        inflight = null;
      }
    })();
    return inflight;
  }

  async function ensure() {
    if (fetched.value || !auth.isAuthenticated) return;
    if (inflight) return inflight;
    await fetch();
  }

  async function add(input: AddWishlistInput) {
    if (!auth.isAuthenticated) return;
    const { $api } = useNuxtApp();
    const res = await $api<ApiResponse<WishlistEntry>>("/wishlist", {
      method: "POST",
      body: {
        productId: input.productId,
        spec: input.spec ?? "",
        ...(input.expireDate ? { expireDate: input.expireDate } : {}),
      },
    });
    const entry = res.data;
    upsert(entry);
    return entry;
  }

  async function remove(itemId: number) {
    const { $api } = useNuxtApp();
    if (auth.isAuthenticated) {
      await $api<ApiResponse<{ id: string; removed: boolean }>>(
        `/wishlist/${itemId}`,
        { method: "DELETE" },
      );
    }
    items.value = items.value.filter((item) => item.id !== itemId);
  }

  /** Toggle berdasarkan productId+spec (untuk tombol hati di PriceList). */
  async function toggle(input: AddWishlistInput) {
    const existing = items.value.find(
      (item) =>
        item.productId === input.productId &&
        (item.spec ?? "") === (input.spec ?? ""),
    );
    if (existing) {
      await remove(existing.id);
      return { added: false, entry: existing };
    }
    const entry = await add(input);
    return { added: true, entry };
  }

  function upsert(entry: WishlistEntry) {
    const exists = items.value.some(
      (item) =>
        item.productId === entry.productId &&
        (item.spec ?? "") === (entry.spec ?? ""),
    );
    items.value = exists
      ? items.value.map((item) =>
          item.productId === entry.productId &&
          (item.spec ?? "") === (entry.spec ?? "")
            ? entry
            : item,
        )
      : [...items.value, entry];
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
    count,
    has,
    fetch,
    ensure,
    add,
    remove,
    toggle,
    reset,
  };
});