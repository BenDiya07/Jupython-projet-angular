import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-settings.html'
})
export class ManageSettings {
  // Paramètres système
  appSettings = {
    maintenanceMode: false,
    registrationOpen: true,
    maxFileSizeMB: 5,
    pointsPerCertificate: 500,
    notificationEmail: 'admin@jupython.cd'
  };

  saveSettings() {
    console.log('Paramètres sauvegardés :', this.appSettings);
    alert("Configuration mise à jour !");
  }

  clearCache() {
    if(confirm("Vider le cache système ? Cela peut ralentir le site quelques instants.")) {
      alert("Cache vidé avec succès.");
    }
  }
}