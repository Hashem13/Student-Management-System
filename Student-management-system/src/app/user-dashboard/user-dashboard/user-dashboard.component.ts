import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../courses/course.service';
import { AuthService } from '../../login/auth.service';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  // Add any other relevant fields
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user: User | null = null; // Define the user type
  userId: number | null = null; // Initialize with null
  courses: any[] = []; // Initialize as an empty array

  constructor(private courseService: CourseService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId(); // Get the logged-in user ID
    this.loadUserInfo(); // Load user information
    if (this.userId) {
      this.loadUserCourses(this.userId); // Load courses if userId is found
    } else {
      console.error('User ID not found');
    }
  }
  
  loadUserInfo(): void {
    const user = JSON.parse(localStorage.getItem('user') || 'null'); // Retrieve user from local storage
    if (user) {
      this.user = user; // Assign user info to the component's user property
    } else {
      console.error('User information not found');
      // Optionally, display a user-friendly message in the UI
    }
  }
  
  loadUserCourses(userId: number): void {
    this.courseService.getUserCourses(userId).subscribe(
      (courses: any[]) => {
        this.courses = courses; // Update courses
      },
      (error: any) => {
        console.error('Error fetching user courses', error);
      }
    );
  }
}
