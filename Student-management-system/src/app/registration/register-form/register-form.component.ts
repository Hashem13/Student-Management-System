import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../courses/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../login/auth.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  courseId: number = 0; // Initialize with a default value
  course: any; // Define the type based on your course structure
  errorMessage: string | null = null; // Initialize the errorMessage property
  userId: number | null = null; // To store the user ID

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute, // Inject ActivatedRoute
    private authService: AuthService,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = +params['id']; // Get the courseId from route parameters
      this.loadCourse(); // Load the course details using the courseId
      this.userId = this.authService.getUserId(); // Retrieve user ID from AuthService
    });
  }

  loadCourse(): void {
    this.courseService.getCourseById(this.courseId).subscribe(
      (data: any) => {
        console.log('Course data fetched:', data); // Log the fetched data
        this.course = data;
      },
      (error: any) => {
        console.error('Error fetching course', error);
        this.errorMessage = 'Failed to load course details.';
      }
    );
  }

  confirmEnrollment(): void {
    if (this.userId) {
      // Correctly pass the courseId and userId as arguments
      this.registrationService.enroll(this.courseId, this.userId).subscribe(
        (response) => {
          console.log('Enrollment successful', response);
          this.router.navigate(['/user-dashboard']); // Redirect to user dashboard after successful enrollment
        },
        (error) => {
          console.error('Error enrolling in course', error);
        }
      );
    } else {
      console.error('User ID not found');
    }
  }
}
