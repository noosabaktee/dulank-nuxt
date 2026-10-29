import { requiresMerchant, normalizeMerchantPath } from './merchant-routes';
/** Halaman yang butuh sesi user store (sinonim "protected"). */
export const protectedRoutes = new Set([
  "/daftar-percetakan", "/profile-merchant", "/kalkulator-potong-kertas", "/kalkulator-berat-kertas",
  "/cart",
  "/next",
  "/checkout",
  "/wishlist",
  "/profile",
  "/address",
  "/orders",
  "/history",
  "/billing",
  "/invoice-view",
  "/order-view",
  "/print-order",
  "/quotation",
  "/quotation-send",
  "/quotation-view",
  "/quotation-add",
  "/quotation-success",
  "/support-ticket",
  "/support-ticket-detail",
  "/support-ticket-kalkulator",
  "/support-ticket-detail-kalkulator",
]);

export function isProtectedRoute(path: string): boolean {
  const normalized = normalizeMerchantPath(path);
  return protectedRoutes.has(normalized) || requiresMerchant(normalized);
}

export function loginRedirectQuery(path: string): string {
  return `?redirect=${encodeURIComponent(path)}`;
}