import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Creation = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/gallery');
        if (!response.ok) throw new Error('Failed to fetch images');
        
        const data = await response.json();
        
        // Transformer les données pour le composant
        const formattedImages = data.map((img, index) => {
          // Essayer de deviner le type (pour le filtre) via le nom du fichier
          const nameLower = img.caption.toLowerCase();
          let type = 'other';
          if (nameLower.includes('latte')) type = 'latte';
          else if (nameLower.includes('cafe') || nameLower.includes('coffee')) type = 'cafe';
          else if (nameLower.includes('matcha')) type = 'matcha';

          return {
            id: img.id,
            src: img.src,
            alt: img.caption,
            caption: img.caption,
            type: type,
            // Aspect ratio inconnu pour l'instant donc on laisse le CSS gérer
          };
        });

        setImages(formattedImages);
      } catch (err) {
        console.error('Error fetching gallery:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Filtrage simple
  const displayedImages = filter === 'all' 
    ? images 
    : images.filter(img => img.type === filter);

  return (
    <section id="sec2" className="min-h-screen w-full bg-[#EAE8E3] text-[#1A1A1A] pt-28 px-4 md:px-8 snap-start flex flex-col">
      {/* Header Brutalist */}
      {/* Bouton retour */}
      <div className="mb-8">
            <a href="/" className="uppercase font-bold text-sm tracking-widest border-b-2 border-black pb-1 hover:text-[#C04D25] hover:border-[#C04D25] transition-colors">
                ← Retour Accueil
            </a>
      </div>

      <header className="mb-8 border-b-[6px] border-black pb-4 flex flex-col md:flex-row justify-between items-end">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
          Crea<span className="text-[#C04D25]">tions</span>
        </h1>
        <div className="flex gap-4 mt-4 md:mt-0 font-bold overflow-x-auto pb-2 md:pb-0">
          {['all', 'latte', 'cafe', 'matcha'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 border-2 border-black uppercase text-sm transition-all 
                ${filter === cat 
                  ? 'bg-black text-[#EAE8E3] translate-x-1 translate-y-1 shadow-none' 
                  : 'bg-transparent hover:bg-[#C04D25] hover:text-white hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Masonry Grid using CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-20">
        {displayedImages.map((img, index) => (
          <motion.div
            key={img.id + index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="break-inside-avoid mb-6 group relative"
          >
            <div className="border-4 border-black bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:shadow-[12px_12px_0px_0px_#C04D25]">
              <div className="relative overflow-hidden w-full">
                 {/* Placeholder color block if image fails, strictly layout test */}
                <motion.img 
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  viewport={{  amount: 0.3, once: true }}
                  transition={{ duration: 0.5 }}
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
              </div>
              <div className="pt-3 flex justify-between items-center border-t-2 border-black mt-2">
                <span className="font-bold uppercase text-sm">{img.type}</span>
                <span className="text-xs font-mono opacity-60">#{index + 1}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Creation;
