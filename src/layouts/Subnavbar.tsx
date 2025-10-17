// Components
import LanguageSwitcher from "../components/LanguageSwitcher";
// Internal imports
import { useThemeStore } from "../store/store";
//External libs
import { useTranslation } from "react-i18next";

function Subnavbar() {
  const { t } = useTranslation('common');
  const initialTheme = useThemeStore((state) => state.initialTheme);
  const isDark = initialTheme === "dark";

  const navClasses = `
    sticky top-20 z-50 flex justify-end px-4 py-2 
    backdrop-blur-sm transition-colors duration-300
    ${isDark ? "bg-gray-800/90 text-gray-200" : "bg-blue-50/80 text-gray-900"}
  `;

  const containerClasses = `
    flex items-center gap-4 max-w-[1200px] mx-auto px-4
  `;

  return (
    <nav className={navClasses} aria-label="Selettore lingua">
      <div className={containerClasses}>
        <label
          htmlFor="language-switcher"
          className={`font-medium ${isDark ? "text-gray-300" : "text-gray-800"}`}
        >
          {t('languageselector')}
        </label>
        <LanguageSwitcher id="language-switcher" />
      </div>
    </nav>
  );
}

export default Subnavbar;
