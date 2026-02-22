# Instructions d'Implémentation : Galerie Synchronisée Google Drive

Ce document détaille les étapes pour connecter votre portfolio à un dossier Google Drive. Une fois en place, **toute photo ajoutée à ce dossier apparaîtra automatiquement sur le site**.

## Etape 1 : Création du Service Account Google (Back-office)

C'est la partie la plus "technique", mais à faire une seule fois. Ce compte permettra à votre site de lire votre Drive sans que les visiteurs aient besoin de se connecter.

1.  Aller sur la [Google Cloud Console](https://console.cloud.google.com/).
2.  Créer un **Nouveau Projet** (nom: "Portfolio-Emil-Gallery").
3.  Dans le menu de gauche, aller sur **APIs & Services > Library**.
4.  Rechercher **Google Drive API** et cliquer sur **Enable**.
5.  Aller sur **APIs & Services > Credentials**.
6.  Cliquer sur **Create Credentials > Service Account**.
    - Nom : `portfolio-gallery-reader`.
    - Role : `Viewer` (Lecteur).
7.  Une fois créé, cliquer sur le Service Account dans la liste.
8.  Aller dans l'onglet **Keys** > **Add Key** > **Create new key** > **JSON**.
    - Un fichier `.json` va se télécharger. **Gardez-le précieusement**, il contient vos secrets.

## Etape 2 : Configuration du Dossier Drive

1.  Aller sur votre Google Drive perso (`drive.google.com`).
2.  Créer un nouveau dossier nommé **"Portfolio_Gallery"** (ou ce que vous voulez).
3.  Ouvrir le fichier `.json` téléchargé à l'étape 1 et copier l'adresse email `client_email` (ex: `portfolio-gallery-reader@...iam.gserviceaccount.com`).
4.  Faire un clic droit sur votre dossier Drive > **Partager**.
5.  Coller l'email du Service Account et lui donner les droits de **Lecteur (Viewer)**.
6.  Ouvrir le dossier. Regarder l'URL dans la barre d'adresse :
    - `https://drive.google.com/drive/folders/1abcDEfgHIjkLMnOpQrStUvWxYz_12345`
    - La partie après `folders/` est votre **ID de dossier** (`1abcDEfgHIjkLMnOpQrStUvWxYz_12345`). Notez-le.

## Etape 3 : Configuration des Variables d'Environnement

Dans votre projet VS Code, créez ou modifier le fichier `.env` à la racine :

```env
GOOGLE_CLIENT_EMAIL="l'email de votre service account"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nVotre clé privée très longue...\n-----END PRIVATE KEY-----\n"
GOOGLE_FOLDER_ID="l'ID de votre dossier noté à l'étape 2"
```5

*Note : Pour la clé privée, copiez tout le contenu entre les guillemets dans le fichier JSON, y compris les `\n` si présents.*

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
