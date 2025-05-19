import { useState } from 'react'
import Button from '../components/Button';
import { useTheme } from '../contexts/ThemeContext';
//External libraries
import  { Link } from 'react-scroll'

//React icons
import { FaBars} from 'react-icons/fa'
import { CiLight } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";


function Navbar() {
    const {themeMode, toggleTheme} = useTheme();

    const handleThemeToggler =()=>{
        toggleTheme();
    }
    //DROPDWON MENU LOGIC 
    const [isDropDown, setIsDropDown] = useState(false)

    const toggleDropdown = ()=>{
        setIsDropDown(!isDropDown)

     }

  return (
    <nav className={`flex justify-around items-center border-b-2  w-full h-20 py-3 px-4 sticky top-0 z-50 ${themeMode === 'dark' ? 'bg-primary text-secondary border-b-cyan-700' : 'bg-blue-500 text-gray-200 border-b-4 border-b-blue-200' }`}>
        {/* Logo */}
        <Link to="heroSection">
            <img src="/img/logo.jpg" alt="Logo Giolli Design" className="w-12 h-11 object-cover rounded" />
        </Link>
        {/* Desktop Menu */}
        <ul className='hidden sm:flex justify-end items-center gap-4 '>
            <li className={` ${themeMode === 'dark' ? 'text-secondary hover:bg-cyan-800 hover:text-white hover:rounded-lg' : 'text-gray-200 hover:bg-blue-900 hover:text-white hover:rounded-lg'} text-lg md:text-xl px-3 py-2 transition-colors duration-200 ease-in-out`}>
                <Link to='about' className='block w-full h-full'>Su di me</Link>
            </li>
            <li className={` ${themeMode === 'dark' ? 'text-secondary hover:bg-cyan-800 hover:text-white hover:rounded-lg' : 'ext-gray-200 hover:bg-blue-900 hover:text-white hover:rounded-lg'} text-lg md:text-xl px-3 py-2 transition-colors duration-200 ease-in-out`}>
                <Link to='projects'>Progetti</Link>
            </li>
            <li className={` ${themeMode === 'dark' ? 'text-secondary hover:bg-cyan-800 hover:text-white hover:rounded-lg' : 'ext-gray-200 hover:bg-blue-900 hover:text-white hover:rounded-lg'} text-lg md:text-xl px-3 py-2 transition-colors duration-200 ease-in-out`}>
                <Link to='contacts'>Contatti</Link>
            </li>
        </ul>
        {/* theme button */}
        <Button onClick={handleThemeToggler}>
            {themeMode === 'light' ? <CiLight size={24}/> : <LuSunMoon size={24} />}
        </Button>
        {/* Search and Mobile Menu */}
        <div className='flex items-center gap-4'>
            {/* Hamburger Menu */}
            <button className='block md:hidden cursor-pointer' onClick={toggleDropdown}>
                <FaBars className={`text-3xl ${themeMode === 'dark' ? 'text-primary': 'text-gray-900'}`}/>
            </button>
        </div>
        {/* Mobile Dropdown */}
        {isDropDown && (
            <div className={`absolute top-full right-0 w-full sm:hidden p-8 z-50 border-b-2 border-t-2 ${themeMode === 'dark' ? 'bg-primary border-b-cyan-700 border-t-gray-400' : 'bg-gray-100 text-gray-900 border-b-yellow-400'}`}>
                <ul className='flex flex-col items-center gap-4'>
                    <li className={`text-right text-lg sm:text-xl px-4 ${themeMode === 'dark' ? 'hover:bg-cyan-800 hover:text-white hover:rounded-lg' : 'hover:bg-yellow-400 hover:text-white hover:rounded-lg border-b-1 rounded-sm shadow-md'}`}>
                        <Link to="about">Su di me</Link>
                    </li>
                    <li className={`text-right text-lg sm:text-xl px-4 ${themeMode === 'dark' ? 'text-primary hover:bg-cyan-800 hover:text-white hover:rounded-lg' : 'hover:bg-yellow-400 hover:text-white hover:rounded-lg border-b-1 rounded-sm shadow-md'}`}>
                        <Link to="projects">Progetti</Link>
                    </li>
                    <li className={`text-right text-lg sm:text-xl px-4 ${themeMode === 'dark' ? 'hover:bg-cyan-800 hover:text-white hover:rounded-lg' : 'hover:bg-yellow-400 hover:text-white hover:rounded-lg border-b-1 rounded-sm shadow-md'}`}>
                        <Link to="contacts">Contatti</Link>
                    </li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar