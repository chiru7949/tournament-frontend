import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private role: 'admin' | 'user' = 'user';

  setRole(role: 'admin' | 'user') {
    localStorage.setItem('userRole', role);
    this.role = role;
  }

  getRole(): 'admin' | 'user' {
    return (localStorage.getItem('userRole') as 'admin' | 'user') || 'user';
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }
}
