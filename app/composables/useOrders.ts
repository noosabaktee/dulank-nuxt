export interface OrderItem {
  productId: number;
  name: string;
  category?: string;
  quantity: number;
  price: number;
  total: number;
  spec?: string;
  artwork?: string;
  printResult?: string;
  note?: string;
}

export interface Order {
  id: string;
  userId: number;
  status: string;
  date: string;
  items: OrderItem[];
  shippingAddress: {
    name: string;
    phone: string;
    type: string;
    street: string;
    district: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  total: number;
  timeline?: Array<{
    status: string;
    date: string;
  }>;
}

export function useOrders() {
  const { data, pending, error } = useApi<Order[]>("/orders");
  const orders = computed(() => data.value ?? []);
  return { orders, pending, error };
}
