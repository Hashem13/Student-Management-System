import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.example.com/users'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    // Adjust the endpoint if needed
    return this.http.get<any>(`${this.apiUrl}/me`);
  }
}
