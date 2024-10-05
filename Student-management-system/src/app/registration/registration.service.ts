import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:8080/enrollments/enroll'; // Your backend URL for enrollments

  constructor(private http: HttpClient, private authService: AuthService) {}

  enroll(courseId: number, userId: number): Observable<any> {
    const token = this.authService.getToken(); // Get the token from AuthService
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    const body = {
      course: { id: courseId },
      userInfo: { id: userId }
    };

    return this.http.post<any>(this.apiUrl, body, { headers }); // Make the enrollment request
  }
}
