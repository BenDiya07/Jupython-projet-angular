export type CertificateStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface Certificate {
  id: number;
  courseName: string;
  platform: string;
  issueDate?: string; // La date est optionnelle
  fileUrl: string;
  status: CertificateStatus;
  submittedAt: Date;
}