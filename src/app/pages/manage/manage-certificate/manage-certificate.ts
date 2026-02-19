import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CertificateService } from '../../../core/services/certificate.service';

@Component({
  selector: 'app-manage-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-certificate.html'
})
export class ManageCertificates {
  private certService = inject(CertificateService);
  
  filterStatus: string = 'ALL';
  certificates$ = this.certService.getCertificates$();

  getFilteredCertificates(certs: any[]) {
    if (this.filterStatus === 'ALL') return certs;
    return certs.filter(c => c.status === this.filterStatus);
  }

  approve(id: number) {
    this.certService.updateStatus(id, 'APPROVED');
  }

  reject(id: number) {
    this.certService.updateStatus(id, 'REJECTED');
  }
}