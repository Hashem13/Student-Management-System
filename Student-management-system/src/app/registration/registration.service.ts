import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  // Updated method to accept userId and courseId
  registerForCourse(userId: string, courseId: string): Observable<any> {
    const registrationData = { userId, courseId }; // Ensure both are sent in the payload
    console.log("Registration payload:", registrationData); // For debugging
  
    return this.http.post<any>(`${this.apiUrl}/register`, registrationData);
  }
  
}
