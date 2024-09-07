import { Component } from '@angular/core';
import { CancellationService } from '../cancellation.service';
import { CourseService } from "src/app/courses/course.service"

@Component({
  selector: 'app-cancel-registration',
  templateUrl: './cancel-registration.component.html',
  styleUrls: ['./cancel-registration.component.css']
})
export class CancelRegistrationComponent {
  registeredCourses: any[] = [];
  selectedCourse: string = '';

  constructor(private cancellationService: CancellationService, private courseService: CourseService) { }

  ngOnInit() {
    // You might need to implement logic to get registered courses
    this.courseService.getCourses().subscribe(
      courses => {
        this.registeredCourses = courses; // Replace with actual registered courses if available
      },
      error => {
        console.error('Error fetching registered courses', error);
      }
    );
  }

  cancel() {
    this.cancellationService.cancelRegistration(this.selectedCourse).subscribe(
      response => {
        // Handle successful cancellation here
        console.log('Cancellation successful', response);
      },
      error => {
        // Handle error here
        console.error('Cancellation failed', error);
      }
    );
  }
}
