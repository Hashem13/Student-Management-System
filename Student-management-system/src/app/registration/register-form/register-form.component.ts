import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../courses/course.service';
import { RegistrationService } from '../registration.service'; // Adjust the path if necessary

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  course: any;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private registrationService: RegistrationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.courseService.getCourseById(courseId).subscribe(
        data => {
          this.course = data;
        },
        error => {
          console.error('Error fetching course details', error);
        }
      );
    }
  }

  register(): void {
    // Replace with actual user ID if available, or retrieve from authentication service
    const userId = 'user123'; // Example user ID
    const courseId = this.course?.id;

    if (courseId) {
      this.registrationService.registerCourse(userId, courseId).subscribe(
        response => {
          // Handle successful registration
          console.log('Registration successful', response);
          this.router.navigate(['/courses']);
        },
        error => {
          // Handle error
          this.errorMessage = 'Registration failed. Please try again.';
          console.error('Registration failed', error);
        }
      );
    } else {
      this.errorMessage = 'Invalid course ID.';
    }
  }
}
