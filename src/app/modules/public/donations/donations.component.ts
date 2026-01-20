import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanceService } from '../../../services/finance.service';
import { Payment } from '../../../services/finance.model';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent {
  donorForm: FormGroup;
  showDonorList: boolean = false;

  constructor(private fb: FormBuilder, public finance: FinanceService) {
    this.donorForm = this.fb.group({
      name: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      paymentMode: ['', Validators.required],
      toWhom: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  addDonation(): void {
    if (!this.donorForm.valid) return;
    const donation: Payment = {
      source: 'Donation',
      name: this.donorForm.value.name,
      amount: this.donorForm.value.amount,
      date: new Date().toISOString(),
      paymentMode: this.donorForm.value.paymentMode,
      toWhom: this.donorForm.value.toWhom,
      phoneNumber: this.donorForm.value.phoneNumber
    };
    this.finance.addPayment(donation);
    this.donorForm.reset();
    alert('Donation recorded. Thank you!');
  }

  toggleDonorList(): void {
    this.showDonorList = !this.showDonorList;
  }
}
