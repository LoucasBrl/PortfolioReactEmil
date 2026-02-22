import GalleryCard from "../components/GalleryCard";
import { useTranslation } from "react-i18next";
import AnimatedText from '../components/TextAnimation';
import { Link } from "react-router-dom";

function Galleries() {
  const { t } = useTranslation();
    return (
    <section
          className="flex flex-col justify-between m-0 h-[100vh] w-full items-center snap-start pt-[10vh]"
          id="sec2"
        >
          <div className="w-full h-[30%] flex items-end justify-center">
            <h1 className="text-[50px] font-league-spartan" style={{ fontSize: "clamp(2rem, 4vw, 5rem)", fontWeight: "900" }}>
              <AnimatedText text={t("galleries.title")} />
            </h1>
          </div>
          <div className="w-full  h-auto md:h-[60%] grow md:grow-0 flex flex-col md:flex-row pb-10 md:pb-0">
            <Link to="/gallery/cafe" className="hover:flex-[2] flex-1 transition-[flex-grow] duration-400 ease-in-out h-full w-full">
              <GalleryCard
                title={t("galleries.specialty")}
                background={"./cafespe.jpeg"}
              />
            </Link>
            <Link to="/gallery/matcha" className="hover:flex-[2] flex-1 transition-[flex-grow] duration-400 ease-in-out h-full w-full">
              <GalleryCard
                title={t("galleries.matcha")}
                background={"./matcha.jpeg"}
              />
            </Link>
            <Link to="/gallery/latte" className="hover:flex-[2] flex-1 transition-[flex-grow] duration-400 ease-in-out h-full w-full">
              <GalleryCard
                title={t("galleries.latte")}
                background={"./latte.jpeg"}
              />
            </Link>
          </div>
        </section>
    )
}
export default Galleries;
// This code defines a React component for a "Galleries" section of a webpage.