import type { Product } from "#server/types/product";

/**
 * Bantuan tombol hati `add-wishlist-btn` pada halaman PriceList statis
 * (Cetak Buku, Cetak Full Color, Kalender).
 *
 * Produk halaman di-resolve dari katalog backend (`GET /products`) dengan
 * mencocokkan slug/nama terhadap keyword halaman. Selama produk tersebut
 * belum ada di katalog, tombol tetap inert seperti aslinya (legacy).
 */
export function usePageWishlist(keywords: string[]) {
  const wishlist = useWishlistStore();
  const { data } = useApi<Product[]>("/products?limit=100");

  const pageProduct = computed<Product | null>(() => {
    const list = data.value ?? [];
    const needle = keywords.map((k) => k.toLowerCase());
    return (
      list.find(
        (product) =>
          needle.some(
            (k) =>
              product.slug?.toLowerCase().includes(k) ||
              product.name?.toLowerCase().includes(k),
          ),
      ) ?? null
    );
  });

  const hasInWishlist = (spec: string) =>
    pageProduct.value ? wishlist.has(pageProduct.value.id, spec) : false;

  async function toggleFromRow(event: Event) {
    const product = pageProduct.value;
    if (!product) {
      // Belum ada produk katalog yang cocok — jaga perilaku inert legacy.
      console.warn(
        "[dulank] add-wishlist: produk halaman ini belum tersedia di katalog backend",
      );
      return;
    }
    const row = (event.currentTarget as HTMLElement).closest("tr.table-list");
    const spec = row?.querySelector("td:first-child")?.textContent?.trim() ?? "";
    await wishlist.toggle({ productId: product.id, spec });
  }

  return { pageProduct, hasInWishlist, toggleFromRow };
}