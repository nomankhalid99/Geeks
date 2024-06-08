import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../../core/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInModalComponent } from '../../sign-in-modal/sign-in-modal.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule,SignInModalComponent ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {

  course: any;

  selectedTab: string = 'content';
  isSignInModalVisible = false;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.course = this.courseService.getCourse(id);
    this.setTitle(this.course.title);
  }

  getStars(rating: number): (boolean | null)[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = Array(5)
      .fill(null)
      .map((_, i) =>
        i < fullStars ? true : i === fullStars && halfStar ? false : null
      );
    return stars;
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  toggleAccordion(section: any): void {
    section.open = !section.open;
  }

  openSignInModal(): void {
    this.isSignInModalVisible = true;
  }

  closeSignInModal(): void {
    this.isSignInModalVisible = false;
  }

  private setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  enroll(): void {
    this.router.navigate(['/courses', this.course.id, 'play']);
  }

  viewInstructorDetail(instructorName: string) {
    this.router.navigate(['/courses', this.course.id, 'instructor', instructorName]);
  }

}
