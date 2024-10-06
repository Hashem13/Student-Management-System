import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

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

  getUserId(): number | null {
    const token = this.getToken(); // Retrieve the token
    if (token) {
      const decodedToken: any = jwtDecode(token); // Decode the token
      return decodedToken.id; // Extract the user ID
    }
    return null; // Return null if no token
  }
  
  getUserInfo() {
    const token = this.getToken(); // Assuming you have a method to get the token
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded; // This will contain the user info
    }
    return null;
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
