import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  password: string = '';
  showPassword = false;
  error: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.password === 'admin') {
      this.router.navigate(['/admin']);
      this.error = '';
    } else {
      this.error = 'Incorrect password. Please try again.';
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  };
}
