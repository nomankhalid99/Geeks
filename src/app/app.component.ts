import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CourseService } from './core/course.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SignInModalComponent, RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'udemy-clone';
  date: number = 0;
  menuHidden = true;
  isSignInModalVisible = false;
  searchQuery: string = '';
  searchSuggestions$: Observable<string[]> | undefined;
  selectedSuggestion: string | undefined;

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }

  toggleMenu(): void {
    this.menuHidden = !this.menuHidden;
  }

  openSignInModal(): void {
    this.isSignInModalVisible = true;
  }

  closeSignInModal(): void {
    this.isSignInModalVisible = false;
  }

  searchCourses(): void {
    if (this.selectedSuggestion) {
      this.searchQuery = this.selectedSuggestion;
    }
    this.router.navigate(['/courses'], { queryParams: { search: this.searchQuery } });
  }

  // handleKeypress(event: KeyboardEvent): void {
  //   if (event.key === 'Enter') {
  //     this.searchCourses();
  //   }  
  // }

  onInputChange(): void {
    if (this.searchQuery.length >= 1) {
      const courses = this.courseService.getCourses();
      const filteredSuggestions = courses
        .map(course => course.title)
        .filter(title => title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        .slice(0, 14);
  
      this.searchSuggestions$ = of(filteredSuggestions);
    } else {
      this.searchSuggestions$ = of([]);
    }
  }

  selectSuggestion(suggestion: string): void {
    this.selectedSuggestion = suggestion;
    this.searchQuery = suggestion;
    this.searchSuggestions$ = undefined;
    this.router.navigate(['/courses'], { queryParams: { search: this.searchQuery } });
  }
}