import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'https://api.example.com/registration'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  registerCourse(courseId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { courseId });
  }
}
