import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FinanceService } from '../../../services/finance.service';

@Component({
  selector: 'app-register-team',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.scss']
})
export class RegisterTeamComponent {
  teamForm: FormGroup;
  entryFee = 500; // set your fee here

  constructor(private fb: FormBuilder, private finance: FinanceService) {
    this.teamForm = this.fb.group({
      teamName: ['', Validators.required],
      captainName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      players: this.fb.array([]),
      substitutes: this.fb.array([])
    });
  }

  get players() { return this.teamForm.get('players') as FormArray; }
  get substitutes() { return this.teamForm.get('substitutes') as FormArray; }

  addPlayer() {
    this.players.push(this.fb.group({ name: ['', Validators.required], position: ['', Validators.required] }));
  }

  addSubstitute() {
    this.substitutes.push(this.fb.group({ name: [''], position: [''] }));
  }

  registerTeam() {
    if (!this.teamForm.valid) return;

    // Save team (later to backend), and record payment
    const teamName = this.teamForm.value.teamName;
    this.finance.addPayment({
      source: 'Team',
      name: teamName,
      amount: this.entryFee,
      date: new Date().toISOString()
    });

    // Reset form or show success
    this.teamForm.reset();
    this.players.clear();
    this.substitutes.clear();
    alert(`Team registered and entry fee ₹${this.entryFee} recorded for ${teamName}`);
  }
}
