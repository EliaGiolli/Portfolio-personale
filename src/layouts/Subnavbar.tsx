import LanguageSwitcher from "../components/LanguageSwitcher"
import { useTheme } from "../contexts/ThemeContext"

function Subnavbar() {
  const { themeMode } = useTheme();

  return (
    <nav className={`${themeMode === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-blue-50 text-gray-900 '} flex justify-end px-4 py-2 sticky top-20 z-50`}>
     <div className={`flex gap-4 max-w-[1200px] mx-auto px-4
      ${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
      <span>Scegli la lingua</span>
      <LanguageSwitcher />
     </div>
    </nav>
  )
}

export default Subnavbar