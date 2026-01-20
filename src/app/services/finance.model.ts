export interface Payment {
  source: 'Team' | 'Donation';
  name: string;
  amount: number;
  date: string;
  paymentMode?: string;   // Cash or UPI
  toWhom?: string;        // Recipient name
  phoneNumber?: string;   // Recipient phone number
}

export interface Expenditure {
  description: string;
  amount: number;
  date: string;
  spentBy: string;
}
