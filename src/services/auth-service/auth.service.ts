// auth.service.ts
import { Injectable } from '@angular/core';
import { UtilityFunctions } from '../../utility-functions/utility-functions';

const DIRECTI0N = '1542516553';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(pw: string): boolean {
    if (UtilityFunctions.hash(pw) == DIRECTI0N) {
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('auth');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('auth') === 'true';
  }
}
