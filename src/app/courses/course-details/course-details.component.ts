import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/common/model/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  currentCourse: Course;
  originalTitle = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set course(value) {
    if (!value) return;
    this.currentCourse = { ...value };
    this.originalTitle = this.currentCourse.title;
  }

  saveCourse(course) {}

  reset() {}
}
