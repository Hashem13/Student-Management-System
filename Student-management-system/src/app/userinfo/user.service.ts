import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userApiUrl = 'https://reqres.in/api/login';  // Replace with your user API URL
  private coursesApiUrl = 'https://jsonplaceholder.typicode.com/posts';  // Replace with your courses API URL

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    return this.http.get<any>(this.userApiUrl);
  }

  getUserCourses(): Observable<any> {
    return this.http.get<any>(this.coursesApiUrl);
  }
}
