import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseService } from '../../core/course.service';
import { CourseProps } from '../../core/Constants';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-instructor-detail',
  standalone:true,
  imports:[CommonModule, RouterLink],
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {
  instructorName: string | undefined;
  courses$: Observable<CourseProps[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    private browerserTitle :Title,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.instructorName = this.route.snapshot.paramMap.get('name') ?? undefined;
    if (this.instructorName) {
      this.courses$ = this.courseService.getCoursesByInstructor(this.instructorName);
    }
    if(this.instructorName){
      this.setTitle(this.instructorName);
     }
  }

  getInstructorCourses(courses: CourseProps[]): CourseProps[] {
    return courses.filter(course => course.instructor.some(instr => instr.name === this.instructorName));
  }

  getInstructorDetails(courses: CourseProps[]): any {
    const course = courses.find(course => course.instructor.some(instr => instr.name === this.instructorName));
    return course ? course.instructor.find(instr => instr.name === this.instructorName) : null;
  }

  private setTitle(title: string): void {
    this.browerserTitle.setTitle(title);
  }

}
