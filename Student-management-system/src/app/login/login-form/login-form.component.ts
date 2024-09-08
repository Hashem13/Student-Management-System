import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
      response => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['/courses']);
        } else {
          this.errorMessage = 'Unexpected response from the server.';
        }
      },
      error => {
        this.errorMessage = 'Invalid email or password';
      }
    );
  }
}
