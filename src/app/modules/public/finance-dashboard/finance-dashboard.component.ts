import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceService } from '../../../services/finance.service';
import { Payment, Expenditure } from '../../../services/finance.model';

@Component({
  selector: 'app-finance-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.scss']
})
export class FinanceDashboardComponent {
  showDonorList: boolean = false;

  constructor(public finance: FinanceService) {}

  toggleDonorList(): void {
    this.showDonorList = !this.showDonorList;
  }
}
