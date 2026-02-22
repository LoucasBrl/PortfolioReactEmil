import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Galleries() {
    const [cafeImg, setCafeImg] = useState([]);
    const [matchaImg, setMatchaImg] = useState([]);
    const [latteImg, setLatteImg] = useState([]);

    // Ajout de l'état pour l'upload
    const [uploadType, setUploadType] = useState('cafe');
    const [uploadFile, setUploadFile] = useState(null);
    const [uploadMsg, setUploadMsg] = useState("");
    const [uploadName, setUploadName] = useState(""); // État pour le nom du fichier

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const resCafe = await fetch("https://portfolio-react-emil.vercel.app/api/cafe-images");
                const resMatcha = await fetch("https://portfolio-react-emil.vercel.app/api/matcha-images");
                const resLatte = await fetch("https://portfolio-react-emil.vercel.app/api/latte-images");

                const dataCafe = await resCafe.json();
                const dataMatcha = await resMatcha.json();
                const dataLatte = await resLatte.json();

                setCafeImg(dataCafe);
                setMatchaImg(dataMatcha);
                setLatteImg(dataLatte);
            } catch (err) {
                console.error("Erreur API images:", err);
            }
        }
        fetchImages();
    },[]);

    const handleDelete = async (type, filename) => {
        try {
            const res = await fetch(`https://portfolio-react-emil.vercel.app/api/${type}-images/delete/${filename}`, { method: 'DELETE' });
            const result = await res.json();
            if (result.success) {
                if (type === 'cafe') setCafeImg(imgs => imgs.filter(img => img.src.split('/').pop() !== filename));
                if (type === 'matcha') setMatchaImg(imgs => imgs.filter(img => img.src.split('/').pop() !== filename));
                if (type === 'latte') setLatteImg(imgs => imgs.filter(img => img.src.split('/').pop() !== filename));
            }
        } catch (err) {
            console.error('Erreur suppression image:', err);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!uploadFile) {
            setUploadMsg("Veuillez sélectionner une image.");
            return;
        }
        const formData = new FormData();
        formData.append('image', uploadFile);
        if (uploadName) formData.append('name', uploadName); // Ajout du nom du fichier si présent
        try {
            const res = await fetch(`https://portfolio-react-emil.vercel.app/api/${uploadType}-images/upload`, {
                method: 'POST',
                body: formData
            });
            const result = await res.json();
            if (result.success) {
                setUploadMsg("Image ajoutée !");
                // Rafraîchir la liste
                const filename = result.filename;
                if (uploadType === 'cafe') setCafeImg(imgs => [...imgs, {
                    id: `cafe-img-${imgs.length}`,
                    alt: `Café ${imgs.length + 1}`,
                    caption: `Café ${imgs.length + 1}`,
                    src: `/Gallery/cafe/${filename}`
                }]);
                if (uploadType === 'matcha') setMatchaImg(imgs => [...imgs, {
                    id: `matcha-img-${imgs.length}`,
                    alt: `Matcha ${imgs.length + 1}`,
                    caption: `Matcha ${imgs.length + 1}`,
                    src: `/Gallery/matcha/${filename}`
                }]);
                if (uploadType === 'latte') setLatteImg(imgs => [...imgs, {
                    id: `latte-img-${imgs.length}`,
                    alt: `Latte ${imgs.length + 1}`,
                    caption: `Latte ${imgs.length + 1}`,
                    src: `/Gallery/latte/${filename}`
                }]);
                setUploadFile(null);
                setUploadName(""); // Réinitialiser le nom du fichier
            } else {
                setUploadMsg(result.error || "Erreur lors de l'ajout.");
            }
        } catch (err) {
            setUploadMsg("Erreur lors de l'ajout.");
        }
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#EAE8E3] p-8 font-league-spartan">
        <h1 className="text-4xl md:text-6xl font-black mb-8 text-black uppercase border-b-4 border-[#C04D25] pb-2">Admin - Gestion</h1>
        
        {/* Upload Section */}
        <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#2C1810] mb-12 w-full max-w-2xl">
            <h2 className="text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Ajouter une Photo (Old API)</h2>
            <form onSubmit={handleUpload} className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <select 
                        value={uploadType} 
                        onChange={(e) => setUploadType(e.target.value)}
                        className="border-2 border-black p-2 bg-[#EAE8E3] font-bold"
                    >
                        <option value="cafe">Café</option>
                        <option value="matcha">Matcha</option>
                        <option value="latte">Latte</option>
                    </select>
                    <input 
                        type="file" 
                        onChange={(e) => setUploadFile(e.target.files[0])}
                        className="border-2 border-black p-2 w-full file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-[#C04D25]"
                    />
                </div>
                <input 
                    type="text" 
                    placeholder="Nom du fichier (optionnel, sans extension)" 
                    value={uploadName} 
                    onChange={(e) => setUploadName(e.target.value)}
                    className="border-2 border-black p-2 font-mono"
                />
                <button type="submit" className="bg-black text-[#EAE8E3] font-bold uppercase py-3 hover:bg-[#C04D25] hover:shadow-[4px_4px_0px_0px_black] transition-all">
                    Envoyer
                </button>
            </form>
            <p className="mt-4 font-bold text-[#C04D25]">{uploadMsg}</p>
        </div>

        {/* Existing Images */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
             {/* Café Section */}
             <div className="border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_black]">
                <h2 className="text-2xl font-black uppercase mb-4 text-center bg-black text-white py-1">Café</h2>
                <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {cafeImg.map((img) => (
                        <div key={img.id} className="flex justify-between items-center border-b-2 border-[#EAE8E3] pb-2">
                             <div className="flex items-center gap-2 overflow-hidden">
                                <img src={img.src} className="w-8 h-8 object-cover border border-black" />
                                <span className="font-mono text-xs truncate">{img.src.split('/').pop()}</span>
                             </div>
                            <button 
                                onClick={() => handleDelete('cafe', img.src.split('/').pop())}
                                className="bg-[#C04D25] text-white px-2 py-1 text-xs font-bold uppercase hover:bg-black"
                            >Delete</button>
                        </div>
                    ))}
                </div>
             </div>

             {/* Matcha Section */}
             <div className="border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_#6A7F48]">
                <h2 className="text-2xl font-black uppercase mb-4 text-center bg-[#6A7F48] text-white py-1">Matcha</h2>
                 <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {matchaImg.map((img) => (
                        <div key={img.id} className="flex justify-between items-center border-b-2 border-[#EAE8E3] pb-2">
                             <div className="flex items-center gap-2 overflow-hidden">
                                <img src={img.src} className="w-8 h-8 object-cover border border-black" />
                                <span className="font-mono text-xs truncate">{img.src.split('/').pop()}</span>
                             </div>
                            <button 
                                onClick={() => handleDelete('matcha', img.src.split('/').pop())}
                                className="bg-[#C04D25] text-white px-2 py-1 text-xs font-bold uppercase hover:bg-black"
                            >Delete</button>
                        </div>
                    ))}
                </div>
             </div>
             
             {/* Latte Section */}
             <div className="border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_#2C1810]">
                <h2 className="text-2xl font-black uppercase mb-4 text-center bg-[#2C1810] text-white py-1">Latte</h2>
                 <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {latteImg.map((img) => (
                        <div key={img.id} className="flex justify-between items-center border-b-2 border-[#EAE8E3] pb-2">
                             <div className="flex items-center gap-2 overflow-hidden">
                                <img src={img.src} className="w-8 h-8 object-cover border border-black" />
                                <span className="font-mono text-xs truncate">{img.src.split('/').pop()}</span>
                             </div>
                            <button 
                                onClick={() => handleDelete('latte', img.src.split('/').pop())}
                                className="bg-[#C04D25] text-white px-2 py-1 text-xs font-bold uppercase hover:bg-black"
                            >Delete</button>
                        </div>
                    ))}
                </div>
             </div>

        </div>
      </div>
    );
}
export default Galleries;
// This code defines a React component for a "Galleries" section of a webpage.