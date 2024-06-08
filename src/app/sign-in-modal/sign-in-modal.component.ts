import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in-modal',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.css']
})
export class SignInModalComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  register(regdata: any): void {
    console.log('Form Data:', regdata.value);
    this.closeModal(); 
  }
}
