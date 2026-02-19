import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// Composants
import { CertificateCard } from "../../shared/components/certificate-card/certificate-card";
import { CertificateForm } from "../certificate-form/certificate-form"; // N'oublie pas l'import du form !
import { DashboardHeader } from './components/dashboard-header/dashboard-header';
import { DashboardStats } from './components/dashboard-stats/dashboard-stats';
import { OngoingCourses } from './components/ongoing-courses/ongoing-courses';
import { Recommendations } from './components/recommendations/recommendations';

// Services & Modèles
import { AuthService } from '../../core/services/auth.service';
import { CertificateService } from '../../core/services/certificate.service';
import { Certificate } from '../../models/certificate.model';
import { RouterLink, RouterModule } from '@angular/router';
import { AdminCharts } from "../admin-panel/admin-charts/admin-charts";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardHeader,
    DashboardStats,
    OngoingCourses,
    Recommendations,
    CertificateCard,
    CertificateForm, // Ajoute-le ici
    AsyncPipe,
    CommonModule, // Ajouté pour que *ngFor ou @for fonctionne dans le template
    RouterModule,
    RouterLink,
    AdminCharts
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  username = "Invité";
  rank = 0;
  points = 0;
  userRole = 'Student'; // Valeur par défaut

  stats: { label: string; value: string | number }[] = [];
  courses: { title: string; module: string; progress: number }[] = [];
  recommendations: { title: string; description: string }[] = [];

  // CORRECTION : On définit correctement l'observable
  certificate$: Observable<Certificate[]>;

  constructor(
    private authService: AuthService,
    private certificateService: CertificateService // On injecte le service
  ) { 
    // On initialise l'observable ici
    this.certificate$ = this.certificateService.getCertificates$();
  }

  ngOnInit(): void {
    this.authService.currentUser$.pipe(take(1)).subscribe(user => {
      if (user) {
        this.username = user.full_name;
        this.userRole = user.role; // Stocke le rôle de l'utilisateur
        this.rank = user.rank || 5;
        this.points = user.points || 2450;

        this.stats = [
        { label: "Heures d'apprentissage", value: "127h" },
        { label: "Formations complétées", value: "15" },
        { label: "Certifications obtenues", value: "8" },
        { label: "Taux de réussite", value: "92%" }
      ];

      this.courses = [
        { title: "Cisco CCNP Routing", module: "4 sur 6", progress: 65 },
        { title: "AWS Cloud Practitioner", module: "2 sur 5", progress: 40 },
        { title: "CompTIA Security+", module: "3 sur 5", progress: 55 }
      ];

      this.recommendations = [
        { title: "Python pour Débutants", description: "Apprenez Python avec des projets pratiques." },
        { title: "Gestion Bases de Données", description: "Maîtrisez SQL et les bases relationnelles." },
        { title: "DevOps Essentials", description: "Docker, Kubernetes, CI/CD." }
      ];
      }
    });
  }

  // Gère la suppression d'un certificat émise par la carte enfant
  onDeleteCertificate(id: number): void {
    this.certificateService.deleteCertificate(id);
    // Optionnel : vous pourriez ajouter une notification de succès ici
  }
}