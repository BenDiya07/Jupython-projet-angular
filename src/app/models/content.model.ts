export interface Resource {
  id: number;
  title: string;
  category: 'Livre' | 'Lien' | 'Outil';
  description: string;
  link: string;
}