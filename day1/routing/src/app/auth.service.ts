import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  isAuthenticated() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
