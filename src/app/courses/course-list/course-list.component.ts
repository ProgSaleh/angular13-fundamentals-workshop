import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../common/model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  // selectCourse(course) {
  //   this.selected.emit(course);
  // }

  // deleteCourse(courseId) {
  //   this.deleted.emit(courseId);
  // }
}
