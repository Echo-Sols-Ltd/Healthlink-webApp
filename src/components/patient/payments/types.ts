export interface Invoice {
  id: string;
  hospital: string;
  doctor: string;
  serviceDate: string;
  dueDate: string;
  amount: string;
  status: "pending" | "overdue";
  serviceType: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  subDescription: string;
  method: string;
  reference: string;
  amount: string;
  status: "completed" | "failed";
  type: "credit" | "debit";
}

export interface PaymentMethod {
  id: string;
  provider: string;
  phoneNumber: string;
  isDefault: boolean;
}
