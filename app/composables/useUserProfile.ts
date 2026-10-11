export interface UserProfile {
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

export function useUserProfile() {
  const { data, pending, error } = useApi<UserProfile>("/auth/me");
  const user = computed<UserProfile | null>(() => data.value ?? null);
  return { user, pending, error };
}
