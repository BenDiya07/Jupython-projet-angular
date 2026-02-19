import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Certificate, CertificateStatus } from '../../../models/certificate.model';

@Component({
  selector: 'app-certificate-card',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './certificate-card.html',
  styleUrl: './certificate-card.scss'
})
export class CertificateCard {
  @Input() data!: Certificate;
  @Output() delete = new EventEmitter<number>();

  // État pour gérer la visibilité du lecteur PDF
  pdfVisible = false;

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * NÉCESSAIRE : Pour que l'iframe puisse afficher le PDF.
   * Angular bloque les URL directes dans les iframes par sécurité.
   * DomSanitizer permet de marquer cette URL comme étant sûre.
   */
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Gère l'affichage/masquage du PDF
  togglePdfViewer(): void {
    this.pdfVisible = !this.pdfVisible;
  }

  // Gère l'événement de clic sur le bouton de suppression
  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce certificat ?')) {
      this.delete.emit(id);
    }
  }

  // Fonctions utilitaires pour l'affichage des badges de statut
  getStatusLabel(status: CertificateStatus): string {
    const labels: Record<CertificateStatus, string> = {
      PENDING: 'En attente',
      APPROVED: 'Approuvé',
      REJECTED: 'Rejeté'
    };
    return labels[status] || 'Inconnu';
  }

  getStatusClass(status: CertificateStatus): string {
    const classes: Record<CertificateStatus, string> = {
      PENDING: 'bg-warning text-dark', // Ajout de text-dark pour le contraste
      APPROVED: 'bg-success',
      REJECTED: 'bg-danger'
    };
    return classes[status] || 'bg-secondary';
  }
}