import { Injectable } from '@angular/core';
import { Student } from '../../models/user.model';


@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    {
      rank: 1, name: 'Benit Diyavanga', university: 'Université  Pedagogique National', certificate: 14,
      points: 100
      
    },
    {
      rank: 2, name: 'Exauce Mavinga', university: 'Université  Pedagogique National', certificate: 11,
      points: 50
    },
    {
      rank: 3, name: 'Jean Mukendi', university: 'Université  de Kinshasa', certificate: 10,
      points: 15
    },
    {
      rank: 4, name: 'Exauce Mavuidi', university: 'Université Pedagogique National', certificate: 9,
      points: 5
    },
    
  ];

  constructor () {}

  getAllStudents(): Student[] {
    return this.students;
  }

  getRanking(limit: number = 3): Student[] {
    return this.students.sort((a: Student, b: Student) => b.certificate - a.certificate).slice(0, limit);
  }

}
