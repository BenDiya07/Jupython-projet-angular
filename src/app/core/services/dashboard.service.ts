import { Injectable } from '@angular/core';
import { UserStats, Certificate } from '../../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getUserStats(): UserStats {
    return {
      rank: 5,
      points: 2450,
      hours: 127,
      completedCourses: 15,
      certifications: 8,
      successRate: 92
    };
  }

  getCertificates(): Certificate[] {
    return [
      {
        title: "Introduction to Cybersecurity",
        platform: "Cisco Academy",
        date: "2025-01-10",
        link: "https://www.netacad.com/"
      },
      {
        title: "Angular Fundamentals",
        platform: "OpenClassrooms",
        date: "2025-02-03",
        link: "https://openclassrooms.com/"
      },
      {
        title: "Cloud Basics",
        platform: "Microsoft Learn",
        date: "2025-03-12",
        link: "https://learn.microsoft.com/"
      }
    ];
  }
}
