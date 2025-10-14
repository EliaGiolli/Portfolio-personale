//Components
import LanguageSwitcher from "../components/LanguageSwitcher"
//Internal imports
import { useThemeStore } from "../store/store";

function Subnavbar() {
  const initialTheme = useThemeStore(state => state.initialTheme);

  return (
    <nav className={`${initialTheme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-blue-50 text-gray-900 '} flex justify-end px-4 py-2 sticky top-20 z-50`}>
     <div className={`flex gap-4 max-w-[1200px] mx-auto px-4
      ${initialTheme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
      <span>Scegli la lingua</span>
      <LanguageSwitcher />
     </div>
    </nav>
  )
}

export default Subnavbar