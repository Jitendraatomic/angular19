import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(this.checkAuthStatus()); // Initialize with the token status

  constructor() {}

  // Function to log in and store the token
  login(token: string): void {
    localStorage.setItem('auth_token', token);
    this.isAuthenticated.next(true);
  }

  // Function to log out and remove the token
  logout(): void {
    localStorage.removeItem('auth_token');
    this.isAuthenticated.next(false);
  }

  // Check if the token exists in localStorage to determine authentication status
  checkAuthStatus(): boolean {
    const token = localStorage.getItem('auth_token');
    return token ? true : false; // Return true if token exists, otherwise false
  }

  // Get authentication status as an observable
  getAuthenticationStatus() {
    return this.isAuthenticated.asObservable();
  }
}
