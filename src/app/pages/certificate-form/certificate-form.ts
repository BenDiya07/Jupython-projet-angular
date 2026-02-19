import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CertificateService } from '../../core/services/certificate.service';
import { Certificate } from '../../models/certificate.model';

@Component({
  selector: 'app-certificate-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.scss'
})
export class CertificateForm {
  
  // Initialisation du modèle
  newCert: Certificate = this.createEmptyCert();
  
  loading = false;
  successMessage = false;

  constructor(private certificateService: CertificateService) {}

  onSubmit() {
    if (this.newCert.courseName && this.newCert.platform) {
      this.loading = true;

      // Si l'utilisateur n'a pas chargé de fichier, on met le PDF de test par défaut
      if (!this.newCert.fileUrl) {
        this.newCert.fileUrl = 'docs/mon-certificat.pdf';
      }

      this.certificateService.submitCertificate({ ...this.newCert }).subscribe({
        next: (success) => {
          if (success) {
            this.showSuccess();
            this.resetForm();
          }
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          alert('Erreur lors de la soumission. Vérifiez votre connexion.');
        }
      });
    }
  }

  // Simulation d'un upload de fichier
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Dans un vrai projet, ici on uploaderait le fichier vers un serveur
      // Pour l'instant, on pointe vers ton fichier dans le dossier public
      this.newCert.fileUrl = 'docs/mon-certificat.pdf';
    }
  }

  private showSuccess() {
    this.successMessage = true;
    setTimeout(() => this.successMessage = false, 3000);
  }

  private resetForm() {
    this.newCert = this.createEmptyCert();
  }

  private createEmptyCert(): Certificate {
    return {
      id: 0,
      courseName: '',
      platform: '',
      issueDate: '',
      fileUrl: '',
      status: 'PENDING',
      submittedAt: new Date()
    };
  }
}