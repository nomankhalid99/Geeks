import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';
import { InstructorDetailComponent } from './pages/instructor-detail/instructor-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title :"Home" },
  { path: 'courses', component: CoursesComponent, title:"Courses" },
  { path: 'courses/:id', component: CourseDetailComponent, },
  { path: 'courses/:id/play', component: VideoPlayerComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent, title:"Forgot Password" },
  { path: 'courses/:id/instructor/:name', component: InstructorDetailComponent },
];
