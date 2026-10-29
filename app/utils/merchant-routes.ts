/** Private calculator workspace; public store/catalog/product pages remain separate. */
export const merchantRoutes = new Set([
  '/kalkulator-potong-kertas', '/kalkulator-berat-kertas', '/kalkulator-percetakan', '/hitung-plano',
  '/profile-merchant', '/mesin-cetak', '/mesin-laminasi', '/mesin-pond', '/mesin-poli',
  '/pengaturan-keuntungan', '/semua-percetakan', '/semua-toko-kertas', '/semua-kertas',
  '/support-ticket-kalkulator', '/support-ticket-detail-kalkulator',
]);
export function normalizeMerchantPath(path: string) { return path.replace(/\.html$/i, '').replace(/\/$/, '').toLowerCase() || '/'; }
export function requiresMerchant(path: string) { return merchantRoutes.has(normalizeMerchantPath(path)); }
export function calculatorFeature(path: string): string {
  const normalized = normalizeMerchantPath(path);
  if (normalized === '/kalkulator-potong-kertas' || normalized === '/hitung-plano') return 'paper_cutting';
  if (normalized === '/kalkulator-berat-kertas') return 'paper_weight';
  if (normalized.startsWith('/mesin-') || normalized === '/semua-kertas') return 'catalog_manage';
  return 'merchant_profile';
}
