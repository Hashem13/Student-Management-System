import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service'; // Adjust the path if necessary

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];
  errorMessage: string = '';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      data => {
        this.courses = data;
      },
      error => {
        this.errorMessage = 'Error fetching courses. Please try again.';
        console.error('Error fetching courses', error);
      }
    );
  }
}
