import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/courses/course.service';
import { RegistrationService } from '../registration.service'; 
import { AuthService } from 'src/app/login/auth.service';

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
    private authService: AuthService,
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
    const user = this.authService.getLoggedInUser(); // Fetch user from AuthService
    const courseId = this.course?.id;
  
    if (user && courseId) {
      this.registrationService.registerForCourse(user.id, courseId).subscribe(
        response => {
          console.log('Registration successful', response);
          this.router.navigate(['/userinfo']);
        },
        error => {
          this.errorMessage = 'Registration failed. Please try again.';
          console.error('Registration failed', error);
        }
      );
    } else {
      this.errorMessage = 'Invalid course ID or user not found.';
    }
  }
  
}
