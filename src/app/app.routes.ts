import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { RegisterTeamComponent } from './pages/register-team/register-team.component';
import { PoolsComponent } from './pages/pools/pools.component';
import { MatchScheduleComponent } from './pages/match-schedule/match-schedule.component';
import { MatchResultsComponent } from './pages/match-results/match-results.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ExpenditureComponent } from './pages/expenditure/expenditure.component';
import { FinanceDashboardComponent } from './pages/finance-dashboard/finance-dashboard.component';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'register-team', component: RegisterTeamComponent },
  { path: 'pools', component: PoolsComponent },
  { path: 'match-schedule', component: MatchScheduleComponent },
  { path: 'match-results', component: MatchResultsComponent },
  { path: 'donations', component: DonationsComponent },

  // Admin login should be public
  { path: 'admin-login', component: AdminLoginComponent },

  // Admin-only pages
  { path: 'expenditure', component: ExpenditureComponent, canActivate: [AdminGuard] },
  { path: 'finance-dashboard', component: FinanceDashboardComponent, canActivate: [AdminGuard] },
];
