import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { CourseService } from 'src/app/courses/course.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  user: any;
  registeredCourses: any[] = [];

  constructor(
    private authService: AuthService,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser(); // Fetch user from AuthService
    if (this.user) {
      this.courseService.getRegisteredCourses(this.user.id).subscribe(
        data => {
          this.registeredCourses = data;
        },
        error => {
          console.error('Error fetching registered courses', error);
        }
      );
    }
  }
}
