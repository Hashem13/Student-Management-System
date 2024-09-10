import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      (data: any) => {
        this.courses = data; // Adjust based on actual API response
      },
      error => {
        console.error('Error fetching courses', error);
      }
    );
  }

  registerCourse(courseId: string): void {
    this.router.navigate(['/register', courseId]);
  }
}
