import React from "react";
import TiltedCard from '../components/TiltedCard/TiltedCard';
import { useTranslation } from "react-i18next";
import AnimatedText from '../components/TextAnimation';
import { motion } from "framer-motion";

function Presentation() {
  const { t } = useTranslation();
  return (
    <>
        {/* Section 1 */}
        <section className="flex flex-col md:flex-row m-0 min-h-screen w-full justify-around items-center pt-[15vh] pb-[5vh] align-center snap-start bg-[#EAE8E3]" id="sec1">
          {/* Image Container (Visual aspect) */}
          <div className="relative h-[60vh] md:h-[80vh] w-[90%] md:w-[30%] hidden md:flex flex-col justify-center order-2 md:order-1 transition-all" id="aroundimg">
            <div className="relative z-0 group h-full">
                <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                 <motion.img
                  initial={{ filter: "grayscale(100%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  viewport={{  amount: 0.3, once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  id="imgemil"
                  src="./emil.jpeg"
                  alt="Emil"
                  className="relative h-full w-full object-cover border-2 md:border-4 border-black"
                />
            </div>
          </div>

          {/* Text Container (Presentation) */}
          <div className="flex flex-col w-[90%] md:w-[60%] order-1 md:order-2 mb-8 md:mb-0 relative select-none">
             {/* Hero Title moving here */}
             <div className="w-full text-center md:text-left mb-6">
                 <h1 className="font-league-spartan text-3xl md:text-6xl font-black uppercase tracking-normal leading-tight text-black">
                    <AnimatedText text={t("hero")} />
                 </h1>
             </div>

             <div className="p-4 md:p-10 text-lg w-full bg-white border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-around z-20">
                <h1 className="font-league-spartan text-3xl md:text-5xl font-black uppercase mb-4 border-b-2 md:border-b-4 border-[#C04D25] w-fit pb-2">
                    {t("presentation.name")}
                </h1>
                <p className="font-medium text-base md:text-xl leading-relaxed text-justify">
                  {t("presentation.description")}
                </p>
             </div>
          </div>
        </section>
    </>
  );
}

export default Presentation;