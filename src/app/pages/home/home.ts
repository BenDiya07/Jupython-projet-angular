import { Component } from '@angular/core';
import { Ranking } from '../ranking/ranking';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';


@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink, Ranking],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  user$;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.currentUser$;
  }

  logout() {
    this.authService.logout();
  }
}
