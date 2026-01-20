import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-team',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.scss']
})
export class RegisterTeamComponent {
  teamName = '';
  players = '';
  submitted = false;
  isAdmin = false;

  constructor(private auth: AuthService) {
    this.isAdmin = this.auth.isAdmin();
  }

  submitForm() {
    if (!this.submitted) {
      this.submitted = true;
      console.log('Team registered:', this.teamName, this.players);
      // TODO: Save to backend or localStorage
    }
  }

  resetForm() {
    this.submitted = false;
    this.teamName = '';
    this.players = '';
  }
}
