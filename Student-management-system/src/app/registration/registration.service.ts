import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'https://reqres.in/api/users'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  registerCourse(userId: string, courseId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { userId, courseId });
  }
}
