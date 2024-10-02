import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/courses'; // Mock API endpoint

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCourseById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
  getUserCourses(userId: string): Observable<any[]> {
    // Adjust the endpoint if needed
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}/courses`);
  }
  
}
