import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.scss']
})
export class PoolsComponent {
  allTeams: string[] = ['Team Alpha', 'Team Bravo', 'Team Charlie', 'Team Delta', 'Team Echo'];
  poolA: string[] = [];
  poolB: string[] = [];

  assignToPool(pool: 'A' | 'B', team: string) {
    if (pool === 'A') {
      this.poolA.push(team);
    } else {
      this.poolB.push(team);
    }
    this.allTeams = this.allTeams.filter(t => t !== team);
  }
}
