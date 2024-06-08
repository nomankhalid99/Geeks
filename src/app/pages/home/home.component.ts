import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseService } from '../../core/course.service';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SliderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: any[] = []; 

  recommendedCourses : any[] = []
  mostPopularCourses : any[] = []
  trendingCourses : any[] = []

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.recommendedCourses = this.getRandomCourses(this.courses);
    this.mostPopularCourses = this.getRandomCourses(this.courses);
    this.trendingCourses = this.getRandomCourses(this.courses);
  }

  getRandomCourses(courses: any[]): any[] {
    const shuffled = [...courses].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5); 
  }

}
