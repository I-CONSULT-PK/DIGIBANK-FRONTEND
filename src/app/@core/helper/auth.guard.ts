import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token'); // Adjust key as necessary

    if (token) {
      // If token exists, allow access
      return true;
    } else {
      // If no token, redirect to login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
