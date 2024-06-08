import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../core/course.service';
import { CommonModule } from '@angular/common';
import { CourseProps } from '../../core/Constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  course: CourseProps | undefined;
  currentVideoUrl: string | undefined;
  currentVideoTitle: string | undefined;
  courseTitle : string | undefined;
  prevVideoIndex: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private browerserTitle :Title,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.course = this.courseService.getCourse(id);

    if (this.course && this.course.videos && this.course.videos.length > 0) {
      this.playVideo(this.course.videos[0].url, this.course.videos[0].title, 0); 
      this.courseTitle = this.course.title;
    } else {
      console.error('No videos found for this course.');
    }
   if(this.course){
    this.setTitle(this.course.title);
   }
  }

  playVideo(url: string, title: string, index: number): void {
    if (this.currentVideoUrl) {
      // Mark the previous video as watched only when moving to the next video
      if (this.prevVideoIndex !== undefined && index !== this.prevVideoIndex) {
        if (this.course) {
          this.course.videos[this.prevVideoIndex].watched = true;
        }
      }
    }
  
    this.currentVideoUrl = url;
    this.currentVideoTitle = title;
    this.prevVideoIndex = index;
  }
  
  private setTitle(title: string): void {
    this.browerserTitle.setTitle(title);
  }

}
