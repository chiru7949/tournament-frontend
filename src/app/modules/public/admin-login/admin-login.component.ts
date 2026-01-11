import { Component } from '@angular/core';       // 👈 import Component
import { CommonModule } from '@angular/common';  // 👈 import CommonModule

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-login.component.html',   // 👈 correct filename
  styleUrls: ['./admin-login.component.scss']    // 👈 rename css → scss if needed
})
export class AdminLoginComponent { }
