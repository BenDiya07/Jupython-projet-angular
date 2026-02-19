import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ongoing-courses',
  imports: [CommonModule],
  templateUrl: './ongoing-courses.html',
  styleUrl: './ongoing-courses.scss',
})
export class OngoingCourses {
   @Input() courses!: any[];
}
