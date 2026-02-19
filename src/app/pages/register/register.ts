import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../core/services/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  fullname = '';
  email = '';
  password = '';
  confirmPassword = '';
  university = '';

  loading = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  onRegister() {
    this.errorMessage = '';

    // 1. Validation de base
    if (!this.fullname || !this.email || !this.password) {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    // 2. Activer le chargement
    this.loading = true;

    // 3. Simuler un délai réseau (indispensable pour voir le bouton tourner)
    setTimeout(() => {
      try {
        const success = this.authService.register(
          this.fullname,
          this.email,
          this.password
        );

        if (success) {
          // On arrête le chargement avant de rediriger
          this.loading = false; 
          alert('Compte créé avec succès 🎉');
          this.router.navigate(['/login']);
        } else {
          this.errorMessage = "Erreur lors de l'inscription.";
          this.loading = false; // <-- On débloque le bouton ici
        }
      } catch (error) {
        this.errorMessage = "Une erreur technique est survenue.";
        this.loading = false; // <-- Et ici aussi en cas de crash
      }
    }, 1000); // 1 seconde de délai pour le feeling "réel"
  }
}
