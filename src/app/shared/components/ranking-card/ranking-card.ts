import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../../models/user.model';

@Component({
  selector: 'app-ranking-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ranking-card.html',
  styleUrl: './ranking-card.scss'
})
export class RankingCard {

  @Input() student!: Student;
  @Input() rank!: number;

}
