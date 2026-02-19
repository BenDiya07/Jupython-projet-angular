export interface UserStats {
  rank: number;
  points: number;
  hours: number;
  completedCourses: number;
  certifications: number;
  successRate: number;
}

export interface Certificate {
  title: string;
  platform: string;
  date: string;
  link: string;
}
