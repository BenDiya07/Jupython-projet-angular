import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateService } from '../../core/services/certificate.service';
import { Certificate } from '../../models/certificate.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss'
})
export class AdminPanel {
  private certService = inject(CertificateService);
  
  // On récupère uniquement les certificats en attente pour le travail de modération
  pendingCertificates$: Observable<Certificate[]> = this.certService.getCertificates$().pipe(
    map(certs => certs.filter(c => c.status === 'PENDING'))
  );

  onApprove(id: number) {
    this.certService.updateStatus(id, 'APPROVED');
    // Ici on pourrait ajouter une logique pour donner des points à l'étudiant
  }

  onReject(id: number) {
    const reason = confirm("Voulez-vous vraiment rejeter ce certificat ?");
    if (reason) {
      this.certService.updateStatus(id, 'REJECTED');
    }
  }
}