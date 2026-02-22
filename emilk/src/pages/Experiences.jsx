import { useTranslation } from "react-i18next";

function Experiences() {
  const { t } = useTranslation();
  return (
    <section
      className="flex flex-col md:flex-row justify-center m-0 min-h-screen w-full items-center pt-[15vh] pb-[5vh] snap-start bg-[#EAE8E3] gap-8 px-4"
      id="sec3"
    >
      <div className="w-full md:w-2/5 h-auto md:h-[80%] flex flex-col justify-between border-2 md:border-4 border-black p-4 md:p-10 bg-white shadow-[6px_6px_0px_0px_#2C1810] md:shadow-[12px_12px_0px_0px_#2C1810]">
        <h1 className="text-4xl md:text-7xl font-black uppercase border-b-2 md:border-b-4 border-black pb-4 mb-8">
          {t("experiences.formations")}
        </h1>
        <div className="flex flex-col gap-6 flex-grow justify-center">
            {/* Mock Item */}
            <div className="group flex items-center gap-4 cursor-crosshair">
                <div className="w-4 h-4 bg-black group-hover:bg-[#C04D25] transition-colors"></div>
                <h2 className="font-league-spartan text-xl md:text-3xl font-bold uppercase transition-transform group-hover:translate-x-2 duration-200">
                {t("experiences.barista_course")}
                </h2>
            </div>
        </div>
      </div>

      <div className="w-full md:w-2/5 h-auto md:h-[80%] flex flex-col justify-between border-2 md:border-4 border-black p-4 md:p-10 bg-[#1A1A1A] text-[#EAE8E3] shadow-[6px_6px_0px_0px_#C04D25] md:shadow-[12px_12px_0px_0px_#C04D25]">
        <h1 className="text-4xl md:text-7xl font-black uppercase border-b-2 md:border-b-4 border-[#EAE8E3] pb-4 mb-8 text-right">
          {t("experiences.title")}
        </h1>
        <div className="flex flex-col gap-8 flex-grow justify-center items-end">
          
          <div className="flex items-center gap-4 group justify-end w-full">
            <div className="flex items-center gap-2">
              <h2 className="font-league-spartan text-2xl md:text-3xl font-bold uppercase hover:text-[#C04D25] transition-colors text-right">
                {t("experiences.local_cafe")}
              </h2>
              <a href="https://www.instagram.com/local.cafe.briancon/" className="bg-[#EAE8E3] p-2 border-2 border-transparent hover:border-[#C04D25] hover:bg-black transition-all group-hover:border-[#C04D25] shrink-0 aspect-square flex items-center justify-center">
                <img
                  src="/instagramicon.png"
                  alt="Instagram"
                  className="w-8 h-8 filter brightness-0 group-hover:invert transition-all block object-contain"
                />
              </a>
            </div>
             <div className="w-4 h-4 bg-[#EAE8E3] group-hover:bg-[#C04D25] ml-4 transition-colors"></div>
          </div>

          <div className="flex items-center gap-4 group justify-end w-full">
            <div className="flex items-center gap-2">
              <h2 className="font-league-spartan text-2xl md:text-3xl font-bold uppercase hover:text-[#C04D25] transition-colors text-right">
                {t("experiences.heidi_kitchen")}
              </h2>
              <a href="https://www.instagram.com/_heidikitchen_/" className="bg-[#EAE8E3] p-2 border-2 border-transparent hover:border-[#C04D25] hover:bg-black transition-all group-hover:border-[#C04D25] shrink-0 aspect-square flex items-center justify-center">
                 <img
                  src="/instagramicon.png"
                  alt="Instagram"
                  className="w-8 h-8 filter brightness-0 group-hover:invert transition-all block object-contain"
                />
              </a>
            </div>
            <div className="w-4 h-4 bg-[#EAE8E3] group-hover:bg-[#C04D25] ml-4 transition-colors"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Experiences;