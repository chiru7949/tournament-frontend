import { Injectable } from '@angular/core';
import { Payment, Expenditure } from './finance.model';

@Injectable({ providedIn: 'root' })
export class FinanceService {
  private payments: Payment[] = JSON.parse(localStorage.getItem('payments') || '[]');
  private expenditures: Expenditure[] = JSON.parse(localStorage.getItem('expenditures') || '[]');

  addPayment(payment: Payment): void {
    this.payments.push(payment);
    localStorage.setItem('payments', JSON.stringify(this.payments));
  }

  addExpenditure(exp: Expenditure): void {
    this.expenditures.push(exp);
    localStorage.setItem('expenditures', JSON.stringify(this.expenditures));
  }

  get totalIncome(): number {
    return this.payments.reduce((sum, p) => sum + p.amount, 0);
  }

  get totalExpenditure(): number {
    return this.expenditures.reduce((sum, e) => sum + e.amount, 0);
  }

  get balance(): number {
    return this.totalIncome - this.totalExpenditure;
  }

  get allPayments(): Payment[] {
    return this.payments;
  }

  get allExpenditures(): Expenditure[] {
    return this.expenditures;
  }
}
