export interface UserAddress {
  id?: number;
  userId?: number;
  recipientName: string;
  phone: string;
  type: string;
  name: string;
  street: string;
  district: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
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
}
