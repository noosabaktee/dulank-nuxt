import type { UserAddress } from "#server/types/user";

export function useUserAddresses() {
  const { data } = useApi<UserAddress[]>("/addresses");
  const addresses = computed<UserAddress[]>(() => data.value ?? []);
  return { addresses };
}
