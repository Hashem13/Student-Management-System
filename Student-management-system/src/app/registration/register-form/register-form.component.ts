import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { CourseService } from 'src/app/courses/course.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  availableCourses: any[] = [];
  selectedCourse: string = '';

  constructor(private registrationService: RegistrationService, private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(
      courses => {
        this.availableCourses = courses;
      },
      error => {
        console.error('Error fetching courses', error);
      }
    );
  }

  register() {
    this.registrationService.registerCourse(this.selectedCourse).subscribe(
      response => {
        // Handle successful registration here
        console.log('Registration successful', response);
      },
      error => {
        // Handle error here
        console.error('Registration failed', error);
      }
    );
  }
}
