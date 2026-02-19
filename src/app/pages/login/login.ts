import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export default class Login {
  private authService = inject(AuthService);

  email = '';
  password = '';
  isLoading = false;
  errorMessage = '';

 onLogin() {
  if (!this.email || !this.password) {
    this.errorMessage = "Veuillez remplir tous les champs.";
    return;
  }

  this.isLoading = true;
  this.errorMessage = '';

  // On simule le délai
  setTimeout(() => {
    const success = this.authService.login(this.email, this.password);

    if (!success) {
      this.errorMessage = "Email ou mot de passe incorrect. ❌";
      this.isLoading = false; // On arrête le spinner pour que l'utilisateur réessaie
    } else {
      // OPTIONNEL : On force l'arrêt juste avant que le composant ne disparaisse
      // pour éviter les bugs visuels lors de la transition vers le dashboard
      this.isLoading = false;
    }
  }, 1000);
}
}