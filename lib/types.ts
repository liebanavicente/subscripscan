export type PaymentFrequency = "monthly" | "annual" | "quarterly";

export type Category =
  | "phone_internet"
  | "tv_streaming"
  | "music"
  | "ai_tools"
  | "software"
  | "gaming"
  | "cloud_storage"
  | "other";

export interface Subscription {
  id: string;
  name: string;
  category: Category;
  price: number;
  frequency: PaymentFrequency;
  renewalDate: string; // ISO date string
  notes?: string;
  color?: string;
}

export type ExpenseCategory =
  | "alimentacion"
  | "transporte"
  | "ocio"
  | "salud"
  | "hogar"
  | "ropa"
  | "educacion"
  | "viajes"
  | "otros";

export interface Expense {
  id: string;
  name: string;
  category: ExpenseCategory;
  amount: number;
  date: string; // ISO date string
  notes?: string;
}

export interface CategoryStats {
  category: Category;
  label: string;
  total: number;
  count: number;
  color: string;
}
