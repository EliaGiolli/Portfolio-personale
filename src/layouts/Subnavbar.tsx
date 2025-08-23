import LanguageSwitcher from "../components/LanguageSwitcher"
import { useTheme } from "../contexts/ThemeContext"

function Subnavbar() {
  const { themeMode } = useTheme();

  return (
    <nav className={`${themeMode === 'dark' ? 'bg-cyan-300 text-gray-900' : 'bg-gray-50 text-gray-900 border-b border-gray-200'} w-full flex justify-end px-4 py-2 sticky top-20 z-30`}>
      <LanguageSwitcher />
    </nav>
  )
}

export default Subnavbar