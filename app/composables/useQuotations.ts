export interface QuotationItem {
  productId: number;
  name: string;
  category?: string;
  quantity: number;
  spec?: string;
  artwork?: string;
  printResult?: string;
  note?: string;
  unitPrice: number;
  total: number;
}

export interface Quotation {
  id: string;
  userId: number;
  date: string;
  validUntil?: string;
  status: string;
  items: QuotationItem[];
  customerInfo: { name: string; email: string; phone: string };
  subtotal?: number;
  tax?: number;
  shippingCost?: number;
  total?: number;
}

export function getQuotationTotals(quotation: Quotation | null) {
  if (!quotation) return { subtotal: 0, tax: 0, shippingCost: 0, total: 0 };
  return {
    subtotal: quotation.subtotal ?? 0,
    tax: quotation.tax ?? 0,
    shippingCost: quotation.shippingCost ?? 0,
    total: quotation.total ?? 0,
  };
}

export function useQuotations() {
  const { data, pending, error } = useApi<Quotation[]>("/quotations");
  const quotations = computed(() => data.value ?? []);
  return { quotations, pending, error };
}
