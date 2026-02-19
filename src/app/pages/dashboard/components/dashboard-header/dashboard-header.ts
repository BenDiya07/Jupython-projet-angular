import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  imports: [CommonModule],
  templateUrl: './dashboard-header.html',
  styleUrl: './dashboard-header.scss',
})
export class DashboardHeader {
  @Input() username: string = '';
  @Input() rank: number = 0;
  @Input() points: number = 0;
  @Input() role: string = 'Student';
}
