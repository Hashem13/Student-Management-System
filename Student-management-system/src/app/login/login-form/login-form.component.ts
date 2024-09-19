import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        if (response.message === 'Login successful') {
          this.router.navigate(['/courses']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      (error) => {
        console.error('Error during login:', error);
        this.errorMessage = 'Login failed. Please try again.';
      }
    );
  }
}
