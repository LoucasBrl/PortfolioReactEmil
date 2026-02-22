import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang); // change instantanément la langue
  };

  return (
    <select
      id="language"
      name="language"
      className="bg-transparent border-2 border-black rounded-none text-black font-bold text-lg md:text-xl px-2 py-1 uppercase focus:ring-0 focus:outline-none cursor-pointer hover:bg-black hover:text-[#EAE8E3] transition-colors"
      value={i18n.language} // garde la langue sélectionnée
      onChange={handleChange}
    >
      <option value="fr">FR</option>
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="de">DE</option>
    </select>
  );
}
