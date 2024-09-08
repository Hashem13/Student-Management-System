import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api/login'; // API URL for login
  private loggedInUser: any = null; // Store logged-in user details

  constructor(private http: HttpClient) { }

  // Method to authenticate the user
  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap(response => {
        // Store the response (token or user info)
        this.loggedInUser = { email, token: response.token };
        localStorage.setItem('token', response.token); // Store token in localStorage for persistence
      })
    );
  }

  // Method to retrieve the logged-in user details
  getLoggedInUser() {
    return this.loggedInUser;
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.loggedInUser || !!localStorage.getItem('token');
  }

  // Logout method to clear user info
  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('token');
  }
}
