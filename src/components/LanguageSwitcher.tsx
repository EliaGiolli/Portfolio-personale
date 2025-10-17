import { useTranslation } from "react-i18next";
import { useThemeStore } from "../store/store";

const languages = [
  { code: "it", label: "🇮🇹 Italiano" },
  { code: "en", label: "🇬🇧 English" },
  { code: "ru", label: "🇷🇺 Русский" },
  { code: "es", label: "🇪🇸 Español" },
];

function LanguageSwitcher({ id }: { id?: string }) {
  const { i18n } = useTranslation();
  const theme = useThemeStore((state) => state.initialTheme);
  const isDark = theme === "dark";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const selectClasses = `
    px-3 py-2 rounded-md border cursor-pointer text-sm 
    focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300
    ${isDark 
      ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-cyan-500 focus:ring-offset-gray-800"
      : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:ring-offset-blue-50"
    }
  `;

  return (
    <select
      id={id}
      onChange={handleChange}
      value={i18n.language}
      title="Seleziona la lingua"
      aria-label="Seleziona la lingua"
      className={selectClasses}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
