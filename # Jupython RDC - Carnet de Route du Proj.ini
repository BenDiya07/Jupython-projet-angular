# Jupython RDC - Carnet de Route du Projet

Ce document sert de carnet de route pour le développement de l'application frontend Angular de Jupython RDC. Il s'inspire de la structure et du plan de développement définis pour assurer une approche professionnelle, scalable et organisée.

## 1. Vision du Projet

Créer une plateforme web moderne pour la communauté Jupython RDC afin de permettre aux membres de soumettre leurs certifications, de suivre leur progression via un système de points, de consulter un classement général et d'accéder à des ressources de formation partagées.

## 2. Structure Cible du Projet

L'application suivra une architecture modulaire et scalable pour faciliter la maintenance et l'évolution future.

```
jupython-frontend/
└── src/
    ├── app/
    │   ├── core/
    │   │   ├── services/       # Logique métier (API, Auth)
    │   │   ├── guards/         # Protection des routes (auth, admin)
    │   │   └── interceptors/   # Injection de token JWT
    │   │
    │   ├── models/             # Interfaces et types de données (User, Certificate, etc.)
    │   │
    │   ├── shared/             # Composants et modules réutilisables (Navbar, Footer, Cards, UI elements)
    │   │
    │   ├── pages/              # Pages principales de l'application (Home, Login, Dashboard, etc.)
    │   │
    │   ├── app.routes.ts       # Définition de la navigation et des routes
    │   └── ...
    │
    └── environments/           # Fichiers de configuration pour les différents environnements (dev, prod)
```

## 3. Plan d'Implémentation par Étapes

### Étape 1 : Initialisation et Configuration (Les Fondations)
1.  **Création du projet Angular** : Initialiser un nouveau projet avec Angular CLI.
2.  **Mise en place de Git** : Créer un dépôt Git, effectuer le premier commit et le lier à un dépôt distant (par ex: GitHub).
3.  **Vérification** : S'assurer que le projet de base se lance correctement sur `localhost:4200` avec `ng serve`.

### Étape 2 : Squelette de l'Application (L'Ossature)
1.  **Génération des composants de base** :
    *   Composants partagés : `shared/components/navbar`, `shared/components/footer`.
    *   Pages principales : `pages/home`, `pages/login`, `pages/ranking`, `pages/dashboard`, `pages/resources`.
2.  **Configuration du routing initial** : Définir les routes de base dans `app.routes.ts` pour permettre la navigation entre les pages nouvellement créées.

### Étape 3 : Page d'Accueil (La Vitrine)
1.  **Objectif** : Créer une page d'accueil statique mais professionnelle pour présenter le projet.
2.  **Contenu** : Section "Héros", mission de Jupython RDC, aperçu des fonctionnalités, appel à l'action et intégration du `Navbar` et du `Footer`.

### Étape 4 : Authentification (La Porte d'Entrée)
1.  **Objectif** : Mettre en place les interfaces pour la connexion (`login`) et l'inscription (`register`).
2.  **Logique Frontend** : Créer les formulaires, le `AuthService` pour gérer l'état de l'utilisateur et le `AuthGuard` pour protéger les routes. La connexion réelle au backend viendra plus tard.

### Étape 5 : Dashboard Étudiant (Le Hub Personnel)
1.  **Objectif** : Afficher les informations personnelles de l'utilisateur connecté.
2.  **Contenu** : Informations de l'utilisateur, liste de ses certificats (avec des données factices au début), total de ses points et son rang.
3.  **Protection** : La route `/dashboard` doit être protégée par le `AuthGuard`.

### Étape 6 : Module de Gestion des Certificats
1.  **Objectif** : Permettre aux utilisateurs de soumettre leurs certificats pour validation.
2.  **Fonctionnalités** : Créer un formulaire de soumission et un service (`CertificateService`) pour gérer l'envoi des données.

### Étape 7 : Page de Classement
1.  **Objectif** : Afficher publiquement le classement des meilleurs étudiants.
2.  **Contenu** : Tableau ou liste affichant le rang, le nom, les points et le nombre de certificats. Des filtres pourront être ajoutés ultérieurement.

### Étape 8 : Section des Ressources
1.  **Objectif** : Partager des liens de cours, des articles et des coupons.
2.  **Fonctionnalités** : Afficher une liste de ressources et prévoir une interface pour que les administrateurs puissent en ajouter.

### Étape 9 : Panneau d'Administration (Validation)
1.  **Objectif** : Permettre aux administrateurs de valider les certificats soumis.
2.  **Fonctionnalités** : Créer une page `AdminPanel` listant les certificats en attente avec des actions pour "Valider" ou "Rejeter".
3.  **Protection** : La route `/admin` sera protégée par un `AdminGuard`.

### Étape 10 : Intégration API et Finalisation
1.  **Objectif** : Connecter le frontend à l'API backend (Django REST).
2.  **Actions** : Remplacer toutes les données factices par de vrais appels API, mettre en place l'intercepteur de token JWT, et gérer les états de chargement et les erreurs.

## 4. Priorisation Recommandée des Tâches

| Priorité | Page / Fonctionnalité      | Objectif                                           |
| -------- | -------------------------- | -------------------------------------------------- |
| 1        | Home Page & Vitrine        | Avoir un site présentable rapidement.              |
| 2        | Login / Register           | Débloquer l'accès aux fonctionnalités utilisateur. |
| 3        | Dashboard Étudiant         | Fournir le hub central pour l'utilisateur.         |
| 4        | Soumission de Certificats  | Activer la fonctionnalité cœur de l'application.   |
| 5        | Classement                 | Concrétiser la fonctionnalité phare de Jupython.   |
| 6        | Panneau d'Administration   | Rendre le cycle de validation fonctionnel.         |

## 5. Proposition de Plan sur 4 Semaines

*   **Semaine 1** : Setup du projet, création de la structure, développement de la **Home Page**, du **Navbar** et du **Footer**.
*   **Semaine 2** : Développement des pages **Login/Register** et de l'interface du **Dashboard** (avec des données factices).
*   **Semaine 3** : Implémentation du module de **soumission de certificats** et de la page de **classement**.
*   **Semaine 4** : Développement du **Panneau d'Administration**, intégration avec l'API backend, et préparation au déploiement.
