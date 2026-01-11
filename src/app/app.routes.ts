import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/public/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./modules/public/teams/teams.component').then(m => m.TeamsComponent)
  },
  {
    path: 'register-team',
    loadComponent: () =>
      import('./modules/public/register-team/register-team.component').then(m => m.RegisterTeamComponent)
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./modules/public/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'admin-login',
    loadComponent: () =>
      import('./modules/public/admin-login/admin-login.component').then(m => m.AdminLoginComponent)
  },
  {
    path: 'match-results',
    loadComponent: () =>
      import('./modules/public/match-results/match-results.component').then(m => m.MatchResultsComponent)
  },
  {
    path: 'pools',
    loadComponent: () =>
      import('./modules/public/pools/pools.component').then(m => m.PoolsComponent)
  },
  {
    path: 'match-schedule',
    loadComponent: () =>
      import('./modules/public/match-schedule/match-schedule.component').then(m => m.MatchScheduleComponent)
  }
];
