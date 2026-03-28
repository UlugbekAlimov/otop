import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  password: string = '';
  email: string = '';
  showPassword = false;
  error: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.password === 'admin' && this.email === 'admin@example.com') {
      this.router.navigate(['/admin']);
      this.error = '';
    } else {
      this.error = 'Incorrect credentials. Please try again.';
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  };
}