import { useTranslation } from "react-i18next";
import AnimatedText from '../components/TextAnimation';

function Contact() {
  const { t } = useTranslation();
  return (
    <section
          className="flex flex-col justify-center m-0 min-h-screen pt-[10vh] w-full items-center snap-start bg-[#EAE8E3] pb-20"
          id="sec4"
        >
          <div className="w-full text-center mb-12 relative">
             <h1 className="text-[12vw] md:text-[8rem] font-league-spartan font-black uppercase tracking-tighter leading-none text-transparent stroke-black z-10 relative opacity-20 select-none pb-0 mb-[-6vh]" style={{ WebkitTextStroke: '3px black' }}>
                Contact
             </h1>
             <h1 className="text-[8vw] md:text-[5rem] font-league-spartan font-black uppercase tracking-normal relative z-20 text-[#2C1810]">
                <AnimatedText text={t("contact.title")} />
             </h1>
          </div>
          
          <div className="w-full max-w-6xl flex flex-wrap justify-center gap-8 md:gap-12 p-4">
            
            {/* Card 1: Mail & Phone */}
            <div className="w-full md:w-[45%] bg-white border-2 md:border-4 border-black p-4 md:p-8 shadow-[4px_4px_0px_0px_#C04D25] md:shadow-[8px_8px_0px_0px_#C04D25] hover:shadow-[8px_8px_0px_0px_#2C1810] md:hover:shadow-[12px_12px_0px_0px_#2C1810] hover:translate-x-[-2px] md:hover:translate-x-[-4px] hover:translate-y-[-2px] md:hover:translate-y-[-4px] transition-all duration-300">
               <div className="mb-8 border-b-2 border-black pb-4">
                  <h2 className="text-xl md:text-4xl font-black uppercase mb-2 text-[#C04D25]">{t("contact.mail")}</h2>
                  <a href="mailto:emil.duchemin@gmail.com" className="text-sm md:text-2xl font-bold hover:underline decoration-4 underline-offset-4 overflow-hidden text-ellipsis block">
                    emil.duchemin@gmail.com
                  </a>
               </div>
               <div>
                  <h2 className="text-xl md:text-4xl font-black uppercase mb-2 text-[#C04D25]">{t("contact.telephone")}</h2>
                  <a href="tel:+33695139255" className="text-sm md:text-2xl font-bold hover:underline decoration-4 underline-offset-4">
                    +33 6 95 13 92 55
                  </a>
               </div>
            </div>

            <div className="w-full md:w-[45%] flex flex-col gap-4 md:gap-8">
                {/* Card 2: CV */}
                <div className="bg-[#1A1A1A] text-[#EAE8E3] border-2 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_white] md:shadow-[8px_8px_0px_0px_white] hover:shadow-[8px_8px_0px_0px_#C04D25] md:hover:shadow-[12px_12px_0px_0px_#C04D25] hover:translate-x-[-2px] md:hover:translate-x-[-4px] hover:translate-y-[-2px] md:hover:translate-y-[-4px] transition-all duration-300 flex justify-between items-center group cursor-pointer">
                    <h2 className="text-xl md:text-4xl font-black uppercase group-hover:text-[#C04D25] transition-colors">{t("contact.cv")}</h2>
                    <a href="./cv.pdf" download className="bg-[#EAE8E3] p-3 border-2 border-transparent group-hover:bg-[#C04D25] group-hover:border-black transition-colors rounded-none">
                        <img
                        className="w-8 h-8 filter grayscale-0 group-hover:invert transition-all"
                        src="./downloadicon.png"
                        alt="Download CV"
                        />
                    </a>
                </div>

                {/* Card 3: Social */}
                <div className="bg-[#EAE8E3] border-2 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_black] md:shadow-[8px_8px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_#C04D25] md:hover:shadow-[12px_12px_0px_0px_#C04D25] hover:translate-x-[-2px] md:hover:translate-x-[-4px] hover:translate-y-[-2px] md:hover:translate-y-[-4px] transition-all duration-300 flex justify-between items-center">
                    <h2 className="text-xl md:text-4xl font-black uppercase text-black">{t("contact.social")}</h2>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/cafemilk_barista/" target="_blank" className="p-2 border-2 border-transparent hover:border-black hover:bg-[#C04D25] transition-all shrink-0 aspect-square flex items-center justify-center">
                            <img
                                className="w-8 h-8 filter hover:brightness-200 block object-contain"
                                src="./instagramicon.png"
                                alt="Instagram"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/emil-duchemin-287a79332/" target="_blank" className="p-2 border-2 border-transparent hover:border-black hover:bg-[#C04D25] transition-all shrink-0 aspect-square flex items-center justify-center">
                            <img
                                className="w-8 h-8 filter hover:brightness-200 block object-contain"
                                src="./linkedinicon.png"
                                alt="LinkedIn"
                            />
                        </a>
                    </div>
                </div>
            </div>

          </div>
        </section>
  );
}
export default Contact;