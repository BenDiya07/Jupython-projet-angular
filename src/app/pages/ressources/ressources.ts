import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RessourceService } from '../../core/services/ressource.service';
import { Article } from '../../models/resource.model';

@Component({
  standalone: true,
  selector: 'app-ressources',
  imports: [CommonModule],
  templateUrl: './ressources.html',
  styleUrls: ['./ressources.scss'],
})
export class Ressources implements OnInit {
  articles: Article[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private ressourceService: RessourceService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.ressourceService.getArticles().subscribe({
      next: (data) => {
        this.articles = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage =
          "Impossible de charger les ressources Medium.";
        this.isLoading = false;
      },
    });
  }

  refresh(): void {
    this.isLoading = true;

    this.ressourceService.refreshArticles().subscribe({
      next: (data) => {
        this.articles = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage =
          "Impossible d’actualiser les articles.";
        this.isLoading = false;
      },
    });
  }
}
