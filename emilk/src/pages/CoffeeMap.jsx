import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function CoffeeMap() {
    const { t } = useTranslation();
    
    // Style de la carte personnalisé (Google Maps style retro/coffee) - à appliquer via l'URL d'intégration si possible ou CSS filter
    return (
        <section className="flex flex-col m-0 min-h-screen w-full pt-[12vh] pb-10 items-center snap-start bg-[#EAE8E3]" id="sec2">
             <div className="w-full text-center px-4 mb-4">
                 <h1 className="font-league-spartan text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-black">
                    Carte des <span className="text-[#EAE8E3] italic bg-black px-2 md:px-6">Cafés</span>
                 </h1>
                 <p className="font-bold text-xl md:text-2xl mt-4 uppercase tracking-widest text-[#2C1810]">Selection by Emil</p>
            </div>

            <div className="w-[90%] md:w-[85%] h-[50vh] md:h-[60vh] border-4 border-black bg-white shadow-[12px_12px_0px_0px_#2C1810] p-2 relative group overflow-hidden">
                {/* Filtre Sépia/Contrast pour styliser la map */}
                <div className="w-full h-full filter sepia-[.3] contrast-[1.1] grayscale-[0.2] group-hover:filter-none transition-all duration-700">
                    <iframe 
                        src="https://www.google.com/maps/d/u/0/edit?mid=1eH_qJ0pMcbFt4y0-diRdPd1a3gW2nf4&usp=sharing" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    ></iframe>
                </div>
                
                {/* Overlay explicatif qui disparaît au hover pour interagir avec la map */}
                <div className="absolute bottom-6 left-6 bg-black text-[#EAE8E3] p-4 pointer-events-none border-2 border-[#EAE8E3] max-w-[300px] z-10 transition-opacity group-hover:opacity-0 hidden md:block">
                    <h3 className="font-league-spartan font-bold text-xl uppercase mb-1">Explorer</h3>
                    <p className="text-sm font-light">Découvrez mes adresses préférées à travers le monde. Zoomer pour explorer.</p>
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                 <Link to="/creations" className="brutalist-button text-lg no-underline inline-block">
                    Voir mes Créations
                 </Link>
            </div>
        </section>
    );
}

export default CoffeeMap;
