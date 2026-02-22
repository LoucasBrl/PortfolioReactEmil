# Prochaines Étapes : Lancement & Test

Tout est configuré ! Voici comment tester votre nouvelle galerie synchronisée avec Google Drive.

## 1. Vérification Locale (Important)

L'API Google Drive a besoin d'accéder aux variables d'environnement (`GOOGLE_CLIENT_EMAIL`, etc.) que vous avez mises dans `.env`.

⚠️ **Attention :** Par défaut, `npm run dev` (Vite) ne lance que le Frontend. Il ne lance pas l'API `api/index.js` en local.

Pour tester le site complet (Frontend + API) en local, le moyen le plus simple est d'utiliser l'outil Vercel :

1.  Installez Vercel CLI (si pas déjà fait) :
    ```bash
    npm i -g vercel
    ```
2.  Lancez le site avec Vercel Dev :
    ```bash
    vercel dev
    ```
    *Il vous demandera peut-être de vous connecter à votre compte Vercel la première fois (`vercel login`).*

Cela permet de simuler l'environnement de production localement. L'API `/api/gallery` sera accessible.

## 2. Déploiement sur Vercel

C'est la méthode la plus fiable pour voir le résultat final.

1.  Poussez votre code sur GitHub.
2.  Allez sur votre tableau de bord Vercel.
3.  Importez le projet.
4.  **Crucial :** Dans les **Settings > Environment Variables** du projet sur Vercel, ajoutez les 3 variables de votre fichier `.env` :
    - `GOOGLE_CLIENT_EMAIL`
    - `GOOGLE_PRIVATE_KEY` (Copiez tout le contenu, y compris les `-----BEGIN...`)
    - `GOOGLE_FOLDER_ID`
5.  Redéployez.

## 3. Utilisation au quotidien

Une fois le site en ligne :
1.  Ouvrez votre dossier "Portfolio_Gallery" sur votre Google Drive.
2.  Glissez-y une photo (JPG, PNG).
3.  Attendez quelques secondes.
4.  Rafraîchissez votre site (`/creations`) : La photo apparaît !
    *(Note : Si vous changez le nom du fichier sur Drive, le titre changera sur le site).*

## Dépannage
- Si les images ne chargent pas, vérifiez les logs de la fonction API sur Vercel (onglet "Logs").
- Si l'erreur mentionne "insufficient permissions", vérifiez que vous avez bien partagé le dossier Drive avec l'email du Service Account (voir Etape 2 des instructions).
