import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router); // On garde uniquement l'inject

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  // On différencie ici par la propriété 'role'
  private mockUsers: any[] = [
    {
      email: 'student@test.com',
      password: '123',
      profile: { id: 1, full_name: 'Ben Diyavanga', email: 'student@test.com', role: 'Student', rank: 5, points: 2450 }
    },
    {
      email: 'admin@jupython.cd',
      password: 'admin',
      profile: { id: 99, full_name: 'Modérateur Jupython', email: 'admin@jupython.cd', role: 'Admin' }
    }
  ];

  constructor() {
    this.loadUser();
  }

  private loadUser() {
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        this.currentUserSubject.next(user);
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
  }

  login(email: string, password: string): boolean {
    // Dans auth.service.ts, méthode login :
    console.log('Tentative avec :', email, password);
    const foundUser = this.mockUsers.find(u => u.email === email && u.password === password);
    console.log('Utilisateur trouvé ?', foundUser);
    if (foundUser) {
      this.saveAndNotify(foundUser.profile);

      // REDIRECTION DIFFÉRENCIÉE
      if (foundUser.profile.role === 'Admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/dashboard']);
      }
      return true;
    }
    return false;
  }

  register(full_name: string, email: string, password: string): boolean {
    const newUserEntry = {
      email: email,
      password: password,
      profile: {
        id: Math.floor(Math.random() * 10000),
        full_name: full_name,
        email: email,
        role: 'Student', // Par défaut, tout le monde est étudiant
        rank: 0,
        points: 0
      }
    };

    this.mockUsers.push(newUserEntry);
    return true;
  }

  private saveAndNotify(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }
}