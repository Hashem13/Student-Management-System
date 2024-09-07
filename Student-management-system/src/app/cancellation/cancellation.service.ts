import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancellationService {
  private apiUrl = 'https://api.example.com/cancellation'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  cancelRegistration(courseId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cancel`, { courseId });
  }
}
