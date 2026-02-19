import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

import { StudentService } from '../../core/services/student.service';
import { Student } from '../../models/user.model';
import { RankingCard } from '../../shared/components/ranking-card/ranking-card';

@Component({
  standalone: true,
  selector: 'app-ranking',
  imports: [CommonModule, RankingCard],
  templateUrl: './ranking.html',
  styleUrl: './ranking.scss',
})
export class Ranking  implements OnInit{

  @Input() limit: number = 100; // Valeur par defaut élevée
  
  

  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getRanking(this.limit);
  }
}
