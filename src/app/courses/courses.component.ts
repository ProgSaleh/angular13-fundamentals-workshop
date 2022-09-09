import { Component, OnInit } from '@angular/core';
import { Course } from '../common/model/course';
import { CoursesService } from '../common/services/courses.service';
import { Observable } from 'rxjs';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // courses = [];
  courses$: Observable<Course[]>;
  selectedCourse = emptyCourse;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courses$ = this.coursesService.all();
    // this.coursesService.all().subscribe((res: any) => (this.courses = res));
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  saveCourse(course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    this.coursesService
      .create(course)
      .subscribe((result) => this.fetchCourses());
  }

  updateCourse(course) {
    this.coursesService
      .update(course)
      .subscribe((result) => this.fetchCourses());
  }

  deleteCourse(courseId: number) {
    console.log('deleted course', courseId);
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }
}
