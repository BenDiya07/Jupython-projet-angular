import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateService } from '../../../core/services/certificate.service';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboard {
  private certService = inject(CertificateService);
  private authService = inject(AuthService);

  stats = this.certService.getStats();
  // Simulation : En réel, on compterait la longueur de la liste users du AuthService
  totalStudents = 124; 
  
  popularCourses = [
    { name: 'Python for Data Science', count: 45 },
    { name: 'Cisco Networking Essentials', count: 32 },
    { name: 'Microsoft Azure Fundamentals', count: 28 }
  ];
}