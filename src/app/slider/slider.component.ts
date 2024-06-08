import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule, SlickCarouselComponent } from 'ngx-slick-carousel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterLink],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() courses: any[] = [];
  @ViewChild('slickCarousel') slickCarousel!: SlickCarouselComponent;
  uniqueId: string = '';

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    autoplay: false,
    prevArrow: '',
    nextArrow: '',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor() {}

  ngOnInit(): void {
    this.uniqueId = this.generateUniqueId();
    this.slideConfig.prevArrow = `#${this.uniqueId} .slick-prev`;
    this.slideConfig.nextArrow = `#${this.uniqueId} .slick-next`;
  }

  generateUniqueId(): string {
    return `carousel-${Math.random().toString(36).substr(2, 9)}`;
  }

  getStars(rating: number): (boolean | null)[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = Array(5).fill(null).map((_, i) => i < fullStars ? true : (i === fullStars && halfStar ? false : null));
    return stars;
  }

  slickPrev() {
    this.slickCarousel.slickPrev();
  }

  slickNext() {
    this.slickCarousel.slickNext();
  }
}
