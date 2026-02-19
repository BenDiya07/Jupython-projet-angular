import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-leaderboard.html'
})
export class ManageLeaderboard {
  // Simulation des données du classement
  leaderboard = [
    { rank: 1, name: 'Jean-Paul L.', points: 15400, status: 'Vérifié' },
    { rank: 2, name: 'Esther M.', points: 12100, status: 'Vérifié' },
    { rank: 3, name: 'Bruno K.', points: 11850, status: 'En attente' }, // Points récents non vérifiés
    { rank: 4, name: 'Clara T.', points: 9200, status: 'Vérifié' }
  ];

  resetPoints(name: string) {
    if(confirm(`Voulez-vous réinitialiser les points de ${name} ?`)) {
      const user = this.leaderboard.find(u => u.name === name);
      if (user) user.points = 0;
    }
  }

  boostUser(name: string) {
    const user = this.leaderboard.find(u => u.name === name);
    if (user) user.points += 500; // Bonus pour événement spécial
  }
}