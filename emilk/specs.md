# Spécifications du Projet : Portfolio Barista "Emilk"

## 1. Vue d'ensemble
Refonte et modernisation du portfolio pour un barista, mettant l'accent sur une esthétique **Brutaliste & Audacieuse**. L'objectif clé est d'ajouter une **section "Création"** dont le contenu est **automatiquement synchronisé avec un dossier Google Drive**. Plus besoin d'upload manuel sur le site : glissez une photo dans le dossier Drive, elle apparaît sur le site.

## 2. Stack Technique
- **Frontend** : React (Vite)
- **Styling** : Tailwind CSS (v4)
- **Backend / API** : Vercel Serverless Function (Express via `api/index.js`)
- **Stockage** : Google Drive (Dossier partagé)
- **Déploiement** : Vercel

## 3. Design System (Brutalisme & Audace)
- **Typographie** : Grande, grasse, impactante (ex: League Spartan existante, ou nouvelle police brutaliste).
- **Couleurs** : "Coffee Brutalism" - Dominante Monochrome (Noir/Blanc/Crème) avec accents "Torréfaction" (Brun profond, Rouille, Ambre) ou "Matcha" (Vert acide/foncé). Éviter le "tout marron", utiliser les touches de couleur pour la hiérarchie.
- **Mise en page** : Grilles visibles, bordures épaisses, espacement brut, composition asymétrique.
- **Animations** : Transition rapides, effets de survol marqués (glitch ou inversion de couleurs).

## 4. Fonctionnalités

### A. Galerie Publique (Section "Création")
- **Affichage** : Grille "Masonry" (mosaïque auto-agencée) pour mélanger les formats portrait/paysage.
- **Source** : Les images sont récupérées dynamiquement depuis l'API `/api/gallery` qui interroge Google Drive.
- **Mise à jour** : Automatique (délai de cache possible).
- **Performance** : Utilisation des miniatures (thumbnails) générées par Drive pour un chargement rapide.

### B. Administration (Zéro-Interface)
- **Principe** : L'administration se fait directement dans l'interface Google Drive de l'utilisateur.
- **Action** : Ajouter, supprimer ou renommer des fichiers dans le dossier Drive dédié met à jour le site.
- **Avantage** : Pas de mot de passe à gérer sur le site, pas d'interface d'upload à coder, gestion native mobile/desktop via l'app Drive.

## 5. Structure des Données (Google Drive)
- **Dossier Racine** : Un dossier unique "Portfolio_Gallery".
- **Métadonnées** : Le nom du fichier peut servir de titre/description si nécessaire (ex: `Latte_Art_Swan.jpg`).

## 6. Plan d'Implémentation
1.  **Google Cloud Console** : Créer un projet, activer l'API Drive, créer un Service Account (compte de service).
2.  **Configuration Drive** : Créer un dossier sur le Drive perso, le partager avec l'email du Service Account.
3.  **Backend (Vercel)** : Modifier `api/index.js` pour utiliser `googleapis` et lister le contenu du dossier.
4.  **Frontend** : Créer le composant `Gallery` qui fetch `/api/gallery` et affiche les images.
5.  **Refonte Design** : Appliquer le style Brutaliste sur l'ensemble du site.
