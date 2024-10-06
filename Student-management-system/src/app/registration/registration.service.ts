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

  enroll(enrollmentData: any): Observable<any> {
    const token = this.authService.getToken(); // Get the token from AuthService
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post<any>(this.apiUrl, enrollmentData, { headers }); // Make the enrollment request
  }
  
}
