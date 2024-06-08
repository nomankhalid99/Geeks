import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../core/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  filteredCourses: any[] = [];
  paginatedCourses: any[] = [];
  categories: string[] = [
    'Angular',
    'Bootstrap',
    'CSS3',
    'GatsBy',
    'GraphQL',
    'Javascript',
    'Node',
    'Python',
    'React',
    'WordPress'
  ];
  levels: string[] = ['Expert', 'Intermediate', 'Beginner'];

  selectedCategories: { [key: string]: boolean } = {};
  selectedLevels: { [key: string]: boolean } = {};

  currentPage: number = 1;
  coursesPerPage: number = 9;
  totalPages: number = 4;

  showDrawer: boolean = false;
  searchQuery: string = ''; // Add this line

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.initializeFilters();
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
      this.applyFilters();
    });
  }

  initializeFilters(): void {
    this.categories.forEach(category => (this.selectedCategories[category] = false));
    this.levels.forEach(level => (this.selectedLevels[level] = false));
  }

  applyFilters(): void {
    this.filteredCourses = this.courses.filter(course => {
      const categoryMatch = Object.keys(this.selectedCategories).some(
        category => this.selectedCategories[category] && course.category === category
      );
      const levelMatch = Object.keys(this.selectedLevels).some(
        level => this.selectedLevels[level] && course.level === level
      );
      const searchMatch = course.title.toLowerCase().includes(this.searchQuery.toLowerCase());

      return (categoryMatch || !Object.values(this.selectedCategories).includes(true)) &&
             (levelMatch || !Object.values(this.selectedLevels).includes(true)) &&
             searchMatch;
    });
    this.currentPage = 1;
    this.updatePagination();
  }

  clearFilters(): void {
    this.initializeFilters();
    this.filteredCourses = this.courses;
    this.searchQuery = ''; // Clear search query
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredCourses.length / this.coursesPerPage);
    this.paginatedCourses = this.filteredCourses.slice(
      (this.currentPage - 1) * this.coursesPerPage,
      this.currentPage * this.coursesPerPage
    );
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
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

  toggleDrawer(): void {
    this.showDrawer = !this.showDrawer;
  }
}
