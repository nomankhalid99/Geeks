import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private router: Router) {} 

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
    this.router.navigate(['/courses'], { queryParams: { search: this.searchQuery } });
  }

  handleKeypress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.searchCourses();
    }
  }
}
