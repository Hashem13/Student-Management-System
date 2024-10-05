import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = ''; // Initialize with empty string
  password: string = ''; // Initialize with empty string
  loginError: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/courses']); // Redirect to /courses after successful login
      },
      error: (err) => {
        this.loginError = 'Login failed. Please check your credentials.';
        console.error('Login error:', err);
      }
    });
  }
}
