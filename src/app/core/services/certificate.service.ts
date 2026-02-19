import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Certificate } from '../../models/certificate.model';

@Injectable({ providedIn: 'root' })
export class CertificateService {
  private readonly STORAGE_KEY = 'jupython_certificates';

  // On initialise le tableau avec ce qui est stocké dans le navigateur
  private certificates: Certificate[] = this.loadFromLocalStorage();
  private certificatesSubject = new BehaviorSubject<Certificate[]>(this.certificates);

  // Pour afficher la liste dans le dashboard
  getCertificates$(): Observable<Certificate[]> {
    return this.certificatesSubject.asObservable();
  }

  submitCertificate(certificate: Certificate): Observable<boolean> {
    const newCert: Certificate = {
      ...certificate,
      id: Date.now(),
      status: 'PENDING',
      submittedAt: new Date(),
      // On s'assure qu'il y a toujours un lien vers ton fichier de test
      fileUrl: certificate.fileUrl || '/docs/mon_certificat.pdf'
    };

    this.certificates = [newCert, ...this.certificates]; // On ajoute au début
    this.updateState();

    return of(true);
  }

  // NOUVEAU : Supprimer un certificat
  deleteCertificate(id: number): void {
    this.certificates = this.certificates.filter(c => c.id !== id);
    this.updateState();
  }

  // Met à jour le BehaviorSubject et le LocalStorage
  private updateState() {
    this.certificatesSubject.next([...this.certificates]);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.certificates));
  }

  // Extrait de certificate.service.ts
  updateStatus(id: number, newStatus: 'APPROVED' | 'REJECTED') {
    const certs = this.certificatesSubject.value;
    const index = certs.findIndex(c => c.id === id);
    if (index !== -1) {
      certs[index].status = newStatus;
      this.certificatesSubject.next([...certs]);
      // Ici, tu pourrais ajouter un appel API pour sauvegarder en base de données
    }
  }

  // Récupérer les données au démarrage
  private loadFromLocalStorage(): Certificate[] {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  }
  // certificate.service.ts
  getStats() {
    const all = this.certificates;
    return {
      total: all.length,
      pending: all.filter(c => c.status === 'PENDING').length,
      approved: all.filter(c => c.status === 'APPROVED').length,
      rejected: all.filter(c => c.status === 'REJECTED').length
    };
  }
}