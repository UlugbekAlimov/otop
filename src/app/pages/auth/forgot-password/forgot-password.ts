import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  email: string = '';
  showPassword = false;
  error: string = '';

  constructor(private router: Router) {}

  resetPassword() {
    if (this.email === 'admin') {
      this.router.navigate(['/admin']);
      this.error = '';
    } else {
      this.error = 'Incorrect email. Please try again.';
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
