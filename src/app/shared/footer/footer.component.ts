import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',   // ✅ correct file
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isAdmin = false;

  ngOnInit() {
    const role = localStorage.getItem('userRole');
    this.isAdmin = role === 'admin';
  }
}
