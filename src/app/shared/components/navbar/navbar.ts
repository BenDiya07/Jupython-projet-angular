import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Obligatoire pour le pipe async
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs'; // Ajoute cet import !
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  // Déclare user$ correctement
  user$: Observable<User | null>; 

  constructor(private authService: AuthService) {
    // Initialise user$ directement ici
    this.user$ = this.authService.currentUser$;
  }

  ngOnInit() {}

  onLogout() {
    this.authService.logout();
  }
}