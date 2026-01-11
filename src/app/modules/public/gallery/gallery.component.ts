import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',   // ✅ correct filename
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent { }
