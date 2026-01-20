import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  constructor(private auth: AuthService) {}

  loginAsAdmin() {
    this.auth.setRole('admin');
  }

  loginAsUser() {
    this.auth.setRole('user');
  }
}
