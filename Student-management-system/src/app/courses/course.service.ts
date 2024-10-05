import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/courses'; // Your backend URL for courses

  constructor(private http: HttpClient, private authService: AuthService) {}

  getCourses(): Observable<any[]> {
    const token = this.authService.getToken(); // Get the token from AuthService
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(this.apiUrl, { headers })
      .pipe(catchError(this.handleError)); // Add error handling
  }

  getCourseById(courseId: number): Observable<any> {
    const token = this.authService.getToken(); // Get the token from AuthService
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/${courseId}`, { headers })
      .pipe(catchError(this.handleError)); // Add error handling
  }

  enrollInCourse(enrollmentData: any): Observable<any> {
    const token = this.authService.getToken(); // Retrieve the token for authorization
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>('http://localhost:8080/enrollments/enroll', enrollmentData, { headers })
      .pipe(catchError(this.handleError)); // Add error handling
  }
  
  getUserCourses(userId: number): Observable<any[]> {
    const token = this.authService.getToken(); // Retrieve the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`http://localhost:8080/users/${userId}/courses`, { headers })
      .pipe(catchError(this.handleError)); // Add error handling
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); // Log the error
    throw error; // Throw the error to the caller
  }
}
