export type UserRole = 'USER' | 'ADMIN';
export interface User {
  id: number;
  full_name: string;
  email: string;
  role: UserRole;
  rank: number;
  points: number;
  avatar?: string;
}

export interface Student{

points: number;
  rank: number;
  name: string;
  university: string;
  certificate: number;
}