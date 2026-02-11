Ahh tres bon choix
Franchement, vous avez raison.

Si tout votre projet Angular est deja en **SCSS**, alors forcer Tailwind maintenant va juste vous faire perdre du temps.

=> Bootstrap est parfait pour votre cas :

* fonctionne directement avec SCSS
* rapide pour construire un site professionnel
* pas de config compliquee
* ideal pour une equipe Master 1 qui veut avancer vite

---

# OK Plan clair : Abandon Tailwind -> Passer a Bootstrap SCSS

---

## OK Etape 1 : Supprimer Tailwind proprement

Dans ton terminal :

```bash
npm remove tailwindcss postcss autoprefixer
```

(ca nettoie tout)

---

## OK Etape 2 : Installer Bootstrap

```bash
npm install bootstrap
```

---

## OK Etape 3 : Importer Bootstrap dans `styles.scss`

Ouvre :

`src/styles.scss`

Ajoute tout en haut :

```scss
@import "bootstrap/scss/bootstrap";
```

OK Bootstrap est maintenant actif partout.

---

## OK Etape 4 : Verifier `angular.json`

Assure-toi que Angular charge bien SCSS :

Dans `angular.json` :

```json
"styles": [
  "src/styles.scss"
]
```

---

## OK Etape 5 : Lancer le projet

```bash
ng serve
```

Ouvre ton navigateur :

```
http://localhost:4200
```

---

# OK Test rapide Bootstrap

Dans `home.component.html` mets :

```html
<div class="container mt-5">
  <h1 class="text-primary">Bienvenue sur Jupython RDC</h1>

  <button class="btn btn-success mt-3">
    Voir les certificats
  </button>
</div>
```

=> Si le bouton est style -> Bootstrap marche OK

---

# Objectif Pourquoi Bootstrap est parfait pour Jupython RDC ?

Vous allez creer :

* Classements des certificats
* Dashboard etudiant
* Ressources gratuites (Cisco, Microsoft Learn, OpenClassrooms)
* Admin panel
* Site moderne rapide

Bootstrap vous donne deja :

* navbar
* cards
* tables
* forms
* responsive design
* dashboard layout

---

# Organisation ideale de votre projet Angular + Bootstrap

```
src/app/
|
|-- core/
|   |-- services/
|   |   |-- auth.service.ts
|   |   |-- certificate.service.ts
|   |   `-- ranking.service.ts
|   |
|   |-- guards/
|   |   `-- auth.guard.ts
|
|-- pages/
|   |-- home/
|   |-- login/
|   |-- certificates/
|   |-- ranking/
|   |-- dashboard/
|   `-- admin-panel/
|
|-- shared/
|   |-- navbar/
|   |-- footer/
|   `-- components/
|
`-- app.routes.ts
```

---

# Logique du site Jupython (algorithme principal)

## Objectif :

1. Les etudiants ajoutent leurs certificats
2. Le systeme calcule automatiquement le classement
3. On affiche les meilleurs profils

---

## Exemple logique :

```text
Pour chaque etudiant :
   compter ses certificats valides

Trier les etudiants par nombre decroissant

Afficher Top 10
```

---

# Bootstrap pour votre systeme de classement

Vous pourrez utiliser :

```html
<table class="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Nom</th>
      <th>Certificats</th>
      <th>Liens</th>
    </tr>
  </thead>
</table>
```

---

# Prochaine etape (la meilleure)

Maintenant que Bootstrap est OK, on peut commencer serieusement :

## Etape 1 : Construire la Navbar officielle

## Etape 2 : Page Home

## Etape 3 : Page Classement

## Etape 4 : Dashboard etudiant

## Etape 5 : Backend Django API
