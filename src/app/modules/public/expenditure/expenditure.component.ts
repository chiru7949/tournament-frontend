import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FinanceService } from '../../services/finance.service'; // 👈 adjust path to ../../ if you're inside modules/public
//import { FinanceService } from '../../services/finance.service';
//import { FinanceService } from '../../services/finance.service';
import { FinanceService } from '../../../services/finance.service';

@Component({
  selector: 'app-expenditure',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss']
})
export class ExpenditureComponent {
  expForm: FormGroup; // 👈 declare property only

  constructor(private fb: FormBuilder, private finance: FinanceService) {
    // 👇 initialize inside constructor
    this.expForm = this.fb.group({
      description: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      spentBy: ['', Validators.required]
    });
  }

  addExpenditure(): void {
    if (!this.expForm.valid) return;
    const { description, amount, spentBy } = this.expForm.value;
    this.finance.addExpenditure({
      description: description!,
      amount: amount!,
      date: new Date().toISOString(),
      spentBy: spentBy!
    });
    this.expForm.reset();
    alert('Expenditure recorded.');
  }
}
