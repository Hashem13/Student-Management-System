import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, { email, password }).pipe(
      tap((response) => {
        if (response.message === 'Login successful') {
          localStorage.setItem('token', response.token); // Example: storing token in localStorage
        }
      })
    );
  }

  isLoggedIn(): boolean {
    // Check if the user is logged in; e.g., by checking localStorage for a token
    return !!localStorage.getItem('token');
  }

  logout(): void {
    // Example: Clear token from localStorage upon logout
    localStorage.removeItem('token');
  }
}
