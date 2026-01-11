import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Match {
  id: string;
  teamA: string;
  captainA: string;
  poolA: 'A' | 'B';
  teamB: string;
  captainB: string;
  poolB: 'A' | 'B';
  scheduledAt: string;
  status: 'scheduled' | 'completed' | 'eliminated';
  scoreA?: number;
  scoreB?: number;
  winner?: string;
  loser?: string;
}

@Component({
  selector: 'app-pools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-schedule.component.html',
  styleUrls: ['./match-schedule.component.scss']
})
export class MatchScheduleComponent {
  // Dummy data for now; later we’ll wire this to PoolsComponent or backend
  poolA = [
    { team: 'Team Alpha', captain: 'Alice' },
    { team: 'Team Bravo', captain: 'Bob' },
    { team: 'Team Charlie', captain: 'Chandra' }
  ];
  poolB = [
    { team: 'Team Delta', captain: 'David' },
    { team: 'Team Echo', captain: 'Esha' },
    { team: 'Team Foxtrot', captain: 'Farhan' }
  ];

  matches: Match[] = [];

  constructor() {
    this.generateFirstRound();
  }

  // First-round knockout: pair by index, one match per team across pools
  generateFirstRound() {
    const count = Math.min(this.poolA.length, this.poolB.length);
    this.matches = Array.from({ length: count }).map((_, i) => ({
      id: `R1-${i + 1}`,
      teamA: this.poolA[i].team,
      captainA: this.poolA[i].captain,
      poolA: 'A',
      teamB: this.poolB[i].team,
      captainB: this.poolB[i].captain,
      poolB: 'B',
      scheduledAt: new Date().toISOString(),
      status: 'scheduled'
    }));
  }

  // Record result and mark loser; keep history in UI
  submitResult(match: Match, scoreA: number, scoreB: number) {
    match.scoreA = scoreA;
    match.scoreB = scoreB;
    match.status = 'completed';

    if (scoreA > scoreB) {
      match.winner = `${match.teamA} (Captain: ${match.captainA}, Pool ${match.poolA})`;
      match.loser = `${match.teamB} (Captain: ${match.captainB}, Pool ${match.poolB})`;
    } else if (scoreB > scoreA) {
      match.winner = `${match.teamB} (Captain: ${match.captainB}, Pool ${match.poolB})`;
      match.loser = `${match.teamA} (Captain: ${match.captainA}, Pool ${match.poolA})`;
    } else {
      match.winner = 'Draw';
      match.loser = 'Draw';
    }
  }
}
