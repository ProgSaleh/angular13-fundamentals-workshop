import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'typeScript Solid Fundamentals',
      description: 'Learn the hard parts of Typescript',
      percentComplete: 26,
      favorite: true,
    },
  ];

  selectedCourse = null;

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId: number) {
    console.log('deleted course', courseId);
  }

  constructor() {}

  ngOnInit(): void {}
}
