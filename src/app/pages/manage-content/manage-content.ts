import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Resource } from '../../models/content.model';

@Component({
  selector: 'app-manage-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-content.html'
})
export class ManageContent {
  resources: Resource[] = [
    { id: 1, title: 'Documentation Python', category: 'Lien', description: 'Site officiel', link: '#' },
    { id: 2, title: 'Roadmap Cyber RDC', category: 'Outil', description: 'Guide de carrière', link: '#' }
  ];

  newResource: Partial<Resource> = {};

  addResource() {
    if (this.newResource.title && this.newResource.link) {
      const id = this.resources.length + 1;
      this.resources.push({ id, ...this.newResource } as Resource);
      this.newResource = {}; // Reset du formulaire
      alert("Contenu publié avec succès !");
    }
  }

  deleteResource(id: number) {
    this.resources = this.resources.filter(r => r.id !== id);
  }
}