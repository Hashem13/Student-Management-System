import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userId: number | null = null; // Example variable to hold user ID
  private apiUrl = 'http://localhost:8080/auth'; // Your backend URL for authentication

  constructor(private http: HttpClient) {}

  // Method to log in and receive a JWT token
  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/generateToken`, { username, password }, { responseType: 'text' as 'json' }).pipe(
      tap((token: string) => {
        localStorage.setItem('token', token); // Save token to local storage
      })
    );
  }

  getUserId(): number {
    const user = JSON.parse(localStorage.getItem('user') || '{}'); // Retrieve user from local storage
    return user.id; // Assuming the user object has an 'id' property
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Check if token exists
  }

  // Method to get the token from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Method to log out the user
  logout(): void {
    localStorage.removeItem('token');
  }
}
