import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';  // 👈 Correct import

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],   // 👈 Only one imports array
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {}
