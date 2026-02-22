import LanguageChoose from './LanguageChoose';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    // Génère le lien vers la section sur la page principale
    const getSectionLink = (hash) => location.pathname === '/' ? hash : `/${hash}`;
    
    return (
    <nav className="fixed w-full top-0 bg-[#EAE8E3]/90 backdrop-blur-sm border-b-[3px] border-black z-[1000] h-[10vh] flex justify-center items-center">
        <div className="w-full md:w-3/4 flex justify-between items-center px-4 md:px-0">
          <div className="flex-1 text-left hidden md:block">
            <LanguageChoose />
          </div>

          <div className="flex-2 flex justify-center items-center gap-2 md:gap-8">

            <a href="/" className="group order-first md:order-none">
              <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-black rounded-full flex items-center justify-center border-2 border-black group-hover:bg-[#C04D25] transition-colors">
                 <img
                  src="./cafetiere.png"
                  alt="Emilk"
                  className="w-[20px] md:w-[30px] h-auto invert brightness-0 filter group-hover:invert-0 group-hover:brightness-200"
                />
              </div>
            </a>

            <Link
              to="/creations"
              className="uppercase font-black text-base md:text-2xl tracking-tighter hover:text-[#C04D25] hover:underline decoration-4 underline-offset-4 transition-all !text-black"
            >
              Créations
            </Link>
            
            <Link
              to={getSectionLink('#sec3')}
              className="uppercase font-black text-base md:text-2xl tracking-tighter hover:text-[#C04D25] hover:underline decoration-4 underline-offset-4 transition-all !text-black hidden md:block"
            >
              Parcours
            </Link>
             <Link
              to={getSectionLink('#sec4')}
              className="uppercase font-black text-base md:text-2xl tracking-tighter hover:text-[#C04D25] hover:underline decoration-4 underline-offset-4 transition-all !text-black md:hidden"
            >
              Contact
            </Link>
          </div>

          <div className="flex-1 text-right hidden md:block">
            <Link
              to={getSectionLink('#sec4')}
              className="brutalist-button text-sm !no-underline inline-block"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;