import { useTranslation } from "react-i18next"

import { useThemeStore } from "../store/store";

const languages = [
     { code: 'it', label: '🇮🇹 Italiano' },
     { code: 'en', label: '🇬🇧 English' },
     { code: 'ru', label: '🇷🇺 Русский' }
];


function LanguageSwitcher() {

    const initialTheme = useThemeStore(state => state.initialTheme);

    const { i18n } = useTranslation();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{ 
        i18n.changeLanguage(e.target.value);
    }

  return (
    <select
        onChange={handleChange}
        value={i18n.language}
        className={`${initialTheme === 'dark' ? 'bg-white text-gray-900' : 'bg-gray-600 text-gray-200'} border px-2 py-1 rounded text-sm`}
    >
        {languages.map((lang)=>(
            <option key={lang.code} value={lang.code}>
                {lang.label}
            </option>
        ))}
    </select>
  )
}

export default LanguageSwitcher