import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Update the path if needed
import { CourseService } from 'src/app/courses/course.service'; // Update the path if needed

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user: any;
  courses: any[] = [];

  constructor(
    private userService: UserService,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(
      data => {
        this.user = data;
        this.loadUserCourses(data.id); // Assuming user ID is needed to fetch courses
      },
      error => {
        console.error('Error fetching user info', error);
      }
    );
  }

  loadUserCourses(userId: string): void {
    this.courseService.getUserCourses(userId).subscribe(
      courses => {
        this.courses = courses;
      },
      error => {
        console.error('Error fetching user courses', error);
      }
    );
  }
}
