import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';  // 👈 add FormArray here
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register-team',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],   // 👈 include here
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.scss']
})
export class RegisterTeamComponent {
  teamForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.teamForm = this.fb.group({
      teamName: ['', Validators.required],
      captainName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      players: this.fb.array([]),
      substitutes: this.fb.array([])
    });
  }

  get players() {
    return this.teamForm.get('players') as FormArray;
  }

  get substitutes() {
    return this.teamForm.get('substitutes') as FormArray;
  }

  addPlayer() {
    this.players.push(
      this.fb.group({
        name: ['', Validators.required],
        position: ['', Validators.required]
      })
    );
  }

  addSubstitute() {
    this.substitutes.push(
      this.fb.group({
        name: [''],
        position: ['']
      })
    );
  }

  registerTeam() {
    if (this.teamForm.valid) {
      console.log('Team registered:', this.teamForm.value);
      // Save to localStorage or send to backend
    } else {
      console.log('Form is invalid');
    }
  }
}
