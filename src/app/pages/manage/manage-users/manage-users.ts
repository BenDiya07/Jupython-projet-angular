import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './manage-users.html'
})
export class ManageUsers {
  private authService = inject(AuthService);
  
  // En situation réelle, on appellerait authService.getAllUsers()
  // Ici, on utilise nos mockUsers pour la démo
  users = [
    { id: 1, full_name: 'Ben Diyavanga', email: 'ben@jupython.cd', role: 'Student', points: 2450, rank: 5 },
    { id: 2, full_name: 'Exauce Mavinga', email: 'exauce@jupython.cd', role: 'Student', points: 3100, rank: 2 },
    { id: 3, full_name: 'Admin Jupython', email: 'admin@jupython.cd', role: 'Admin', points: 0, rank: 0 }
  ];

  updatePoints(userId: number, newPoints: number) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.points = newPoints;
      console.log(`Points mis à jour pour ${user.full_name}: ${newPoints}`);
      // Appeler ici le service pour sauvegarder
    }
  }

  deleteUser(userId: number) {
    if(confirm("Supprimer cet utilisateur définitivement ?")) {
      this.users = this.users.filter(u => u.id !== userId);
    }
  }
}