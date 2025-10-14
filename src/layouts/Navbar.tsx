//Internal imports
import { useThemeStore } from '../store/store';
import { useMobileMenu } from '../custom hooks/useMobileMenu';
//External libraries
import  { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';
//React icons
import { FaBars} from 'react-icons/fa'
import { CiLight } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";
//Components
import Button from '../components/Button';

function Navbar() {
    const { t } = useTranslation('common');
    const initialTheme = useThemeStore(state => state.initialTheme);
    const toggleTheme = useThemeStore(state => state.toggleTheme);
    // Use the custom mobile menu hook
    const {
        isDropDown,
        mobileMenuRef,
        hamburgerRef,
        toggleDropdown,
        handleLinkClick
    } = useMobileMenu();

    const handleThemeToggler = () => {
        toggleTheme;
    }

    return (
        <header className={`flex justify-around items-center w-full h-28 py-3 px-4 sticky top-0 z-50 
            ${initialTheme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-blue-50 text-gray-700'}`}>
            <nav className='flex justify-center max-w-[1200px] mx-auto px-4 gap-10'>
                {/* Logo */}
                <Link to="heroSection">
                    <img src="/img/logo.jpg" alt="Logo Giolli Design" className={`w-12 h-11 object-cover rounded ${initialTheme === 'dark' ? 'border-2 border-gray-300' : 'border-2 border-blue-600'}`} />
                </Link>
                
                {/* Desktop Menu */}
                <ul className='hidden sm:flex justify-end items-center gap-4'>
                    <li className={`${initialTheme === 'dark' ? 'text-gray-300 hover:bg-cyan-800 hover:text-white hover:rounded-lg' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:rounded-lg'} text-lg md:text-xl px-3 py-2 transition-colors duration-200 ease-in-out`}>
                        <Link to='about' className='block w-full h-full'>{t('navbar.about')}</Link>
                    </li>
                    <li className={`${initialTheme === 'dark' ? 'text-gray-300 hover:bg-cyan-800 hover:text-white hover:rounded-lg' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:rounded-lg'} text-lg md:text-xl px-3 py-2 transition-colors duration-200 ease-in-out`}>
                        <Link to='projects'>{t('navbar.projects')}</Link>
                    </li>
                    <li className={`${initialTheme === 'dark' ? 'text-gray-300 hover:bg-cyan-800 hover:text-white hover:rounded-lg' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:rounded-lg'} text-lg md:text-xl px-3 py-2 transition-colors duration-200 ease-in-out`}>
                        <Link to='contacts'>{t('navbar.contact')}</Link>
                    </li>
                </ul>
                
                {/* Theme button */}
                <Button onClick={handleThemeToggler}>
                    {initialTheme === 'light' ? <CiLight size={24}/> : <LuSunMoon size={24} />}
                </Button>
                
                {/* Mobile Menu */}
                <div className='flex items-center gap-4'>
                    {/* Hamburger Menu */}
                    <button 
                        ref={hamburgerRef}
                        className='block md:hidden cursor-pointer' 
                        onClick={toggleDropdown}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isDropDown}
                        >
                        <FaBars className={`text-3xl ${initialTheme === 'dark' ? 'text-white': 'text-gray-900'}`}/>
                    </button>
                </div>
                
                {/* Mobile Dropdown */}
                {isDropDown && (
                    <div 
                    ref={mobileMenuRef}
                    className={`absolute top-full right-0 w-full sm:hidden p-8 z-50 border-b-2 border-t-2 ${initialTheme === 'dark' ? 'bg-gray-800 border-cyan-800' : 'bg-white border-gray-200'}`}
                    role="menu"
                    aria-label="Mobile navigation menu"
                    >
                        <ul className='flex flex-col gap-4'>
                            <li className={`${initialTheme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-blue-600'} text-lg md:text-xl transition-colors duration-200 ease-in-out`}>
                                <Link to='about' onClick={handleLinkClick} role="menuitem">{t('navbar.about')}</Link>
                            </li>
                            <li className={`${initialTheme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-blue-600'} text-lg md:text-xl transition-colors duration-200 ease-in-out`}>
                                <Link to='projects' onClick={handleLinkClick} role="menuitem">{t('navbar.projects')}</Link>
                            </li>
                            <li className={`${initialTheme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-blue-600'} text-lg md:text-xl transition-colors duration-200 ease-in-out`}>
                                <Link to='contacts' onClick={handleLinkClick} role="menuitem">{t('navbar.contact')}</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar