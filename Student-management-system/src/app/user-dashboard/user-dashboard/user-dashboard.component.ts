import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../courses/course.service';
import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user: any; // Store user info from token
  courses: any[] = []; // Store enrolled courses

  constructor(private courseService: CourseService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserInfo(); // Load user information
    this.loadUserCourses(); // Load enrolled courses
  }

  loadUserInfo(): void {
    this.user = this.authService.getUserInfo(); // Get user info from token
    if (!this.user) {
      console.error('User information not found');
    }
  }

  loadUserCourses(): void {
    if (this.user) {
      this.courseService.getUserCourses(this.user.id).subscribe(
        (enrollments: any[]) => {
          this.courses = enrollments.map(enrollment => enrollment.course); // Extract only the course details
        },
        (error: any) => {
          console.error('Error fetching user courses', error);
        }
      );
    }
  }
}
