import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  constructor() { }

  loggingIn: boolean = true;
  loading: boolean = false;
  error: string | null = null;

  changeMode() {
    this.loggingIn = !this.loggingIn;
  }

  mode(btn?: string): string {
    if (btn === 'switch') {
      return this.loggingIn ? 'Sign Up' : 'Login';
    }
    return this.loggingIn ? 'Login' : 'Sign Up';
  }

  onSubmit(form: NgForm): void {
    if (this.loggingIn) {
      // perform login start
    } else {
      // perform signup start
    }
  }
}
