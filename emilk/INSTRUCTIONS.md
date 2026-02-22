# Instructions d'Implémentation : Galerie Synchronisée Google Drive

Ce document détaille les étapes pour connecter votre portfolio à un dossier Google Drive public. Une fois en place, **toute photo ajoutée à ce dossier apparaîtra automatiquement sur le site**.

## Etape 1 : Création de la Clé API (Google Cloud Console)

Cette étape permet à votre site de "lire" les informations publiques de votre Google Drive.

1.  Aller sur la [Google Cloud Console](https://console.cloud.google.com/).
2.  Créer un **Nouveau Projet** (nom: "Portfolio-Emil-Gallery") ou sélectionner l'existant.
3.  Dans le menu de gauche, aller sur **APIs & Services > Library**.
4.  Rechercher **Google Drive API** et cliquer sur **Enable**.
5.  Aller sur **APIs & Services > Credentials**.
6.  Cliquer sur **Create Credentials > API Key**.
    - Une clé API (suite de caractères) va s'afficher. **Notez-la**.
    - (Optionnel mais recommandé) Cliquer sur "Edit API key" pour restreindre son usage (par exemple aux domaines de votre site).

## Etape 2 : Configuration du Dossier Drive

1.  Aller sur votre Google Drive perso (`drive.google.com`).
2.  Créer ou utiliser le dossier contenant vos images.
3.  Faire un clic droit sur votre dossier Drive > **Partager** > **Accès général**.
4.  Sélectionner **"Tous les utilisateurs disposant du lien"** (Anyone with the link) en mode **Lecteur**.
5.  Ouvrir le dossier. Regarder l'URL dans la barre d'adresse :
    - `https://drive.google.com/drive/folders/1abcDEfgHIjkLMnOpQrStUvWxYz_12345`
    - La partie après `folders/` est votre **ID de dossier** (`1abcDEfgHIjkLMnOpQrStUvWxYz_12345`). Notez-le.

## Etape 3 : Configuration des Variables d'Environnement

Dans votre projet VS Code, modifiez le fichier `.env` à la racine :

```env
GOOGLE_API_KEY="votre_clé_api_créée_étape_1"
GOOGLE_FOLDER_ID="l'ID_de_votre_dossier_noté_étape_2"
# Les anciennes variables (GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY) peuvent être supprimées.
```

## Etape 4 : Installation des dépendances

```bash
npm install googleapis
```

## Etape 5 : Création de l'API Backend (Vercel)

Nous allons modifier `api/index.js` pour qu'il interroge Google Drive.

Le code devra :
1.  S'authentifier avec les credentials du `.env`.
2.  Lister les fichiers dans le dossier spécifié.
3.  Retourner une liste JSON avec les liens des images (Web Content Link ou Thumbnail Link).

## Etape 6 : Composant Frontend

Créer un composant `Gallery.jsx` qui :
1.  Fait un `fetch('/api/gallery')` au chargement.
2.  Affiche les images reçues dans une grille Masonry.

C'est parti ! Dites-moi quand vous avez le fichier JSON du Service Account et l'ID du dossier.
