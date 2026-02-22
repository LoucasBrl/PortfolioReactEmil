// api/index.js
import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import { google } from "googleapis";
import process from "process";

const app = express();
app.use(cors());

// --- Configuration Google Drive ---

// Fonction pour nettoyer la clé privée (gérer les sauts de ligne)
const getPrivateKey = () => {
    const key = process.env.GOOGLE_PRIVATE_KEY;
    if (!key) return null;
    return key.replace(/\\n/g, '\n');
};

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

async function getDriveClient() {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = getPrivateKey();

    if (!clientEmail || !privateKey) {
        throw new Error("Credentials Google manquants (GOOGLE_CLIENT_EMAIL ou GOOGLE_PRIVATE_KEY)");
    }

    const auth = new google.auth.JWT(
        clientEmail,
        null,
        privateKey,
        SCOPES
    );

    // Initialisation
    await auth.authorize();
    
    // Le client sera utilisé pour les requêtes
    const drive = google.drive({ version: 'v3', auth });
    return drive;
}

// --- Routes API ---

app.get("/api/gallery", async (req, res) => {
    try {
        const folderId = process.env.GOOGLE_FOLDER_ID;
        if (!folderId) {
            console.error("GOOGLE_FOLDER_ID manquant");
            res.status(500).json({ error: "Configuration serveur incomplète (Folder ID)" });
            return;
        }

        const drive = await getDriveClient();

        // Lister les fichiers du dossier
        const response = await drive.files.list({
            q: `'${folderId}' in parents and trashed = false and mimeType contains 'image/'`,
            fields: 'files(id, name, thumbnailLink, webContentLink, mimeType, description)',
            orderBy: 'createdTime desc', // Plus récents en premier
            pageSize: 100 
        });

        const files = response.data.files;
        if (!files || files.length === 0) {
           res.json([]);
           return;
        }

        // Transformer les données pour le frontend
        const images = files.map(file => {
            // Astuce : thumbnailLink renvoie par défaut une petite image (=s220).
            // On remplace pour avoir une haute résolution.
            let highResImage = null;
            if (file.thumbnailLink) {
                 // Remplace =s220 par =s1920 pour avoir une grande image
                 highResImage = file.thumbnailLink.replace(/=s\d+$/, "=s1920");
            }
            
            return {
                id: file.id,
                src: highResImage || file.webContentLink,
                caption: file.name.replace(/\.[^/.]+$/, "").replace(/_/g, " "), // Nom sans extension
                description: file.description || "",
                width: 0, // Sera calculé par le frontend ou masonry
                height: 0
            };
        });

        res.json(images);

    } catch (error) {
        console.error("Erreur API Drive:", error);
        res.status(500).json({ error: "Erreur lors de la récupération des images", details: error.message });
    }
});

// Route de test simple
app.get("/api/test", (req, res) => {
    res.json({ status: "OK", message: "API is running" });
});

// En production serverless, on exporte le handler
// En development (node api/dev-server.js), on exporte l'app express
const handler = serverless(app);

// Pour permettre l'import dans dev-server.js tout en gardant la compat serverless
app.handler = handler;
export default app;
export { handler };
