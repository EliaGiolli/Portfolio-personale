import { useState } from 'react'

//External libraries
import  { Link } from 'react-scroll'

//React icons
import { FaBars} from 'react-icons/fa'



function Navbar() {
 
   //DROPDWON MENU LOGIC 
  const [isDropDown, setIsDropDown] = useState(false)

  const toggleDropdown = ()=>{
    setIsDropDown(!isDropDown)

  }

  return (
    <nav className='navbar bg-primary text-primary border-b-2 border-b-cyan-700'>
        {/* Logo */}
        <Link to="heroSection">
            <img src="/img/logo.jpg" alt="Logo Giolli Design" className="w-12 h-11 object-cover rounded" />
        </Link>
        {/* Desktop Menu */}
        <ul className='hidden sm:flex flex-1 justify-end items-center gap-4 p-6'>
            <li className='hover:bg-cyan-800 hover:text-white hover:rounded-lg text-primary text-lg md:text-xl px-3 py-2 transition-colors duration-200 ease-in-out'>
                <Link to='about' className='block w-full h-full'>Su di me</Link>
            </li>
            <li className='hover:bg-cyan-800 hover:text-white hover:rounded-lg text-primary text-lg md:text-xl px-3 py-2 transition-colors duration-200 ease-in-out'>
                <Link to='projects'>Progetti</Link>
            </li>
            <li className='hover:bg-cyan-800 hover:text-white hover:rounded-lg text-primary text-lg md:text-xl px-3 py-2 transition-colors duration-200 ease-in-out'>
                <Link to='contacts'>Contatti</Link>
            </li>
        </ul>
        {/* Search and Mobile Menu */}
        <div className='flex items-center gap-4'>
            {/* Hamburger Menu */}
            <button className='block md:hidden cursor-pointer' onClick={toggleDropdown}>
                <FaBars className='text-3xl text-primary'/>
            </button>
        </div>
        {/* Mobile Dropdown */}
        {isDropDown && (
            <div className='dropdown bg-primary border-b-cyan-700 border-t-gray-400'>
                <ul className='flex flex-col items-center gap-4'>
                    <li className='text-primary text-right text-lg sm:text-xl px-4'>
                        <Link to="about">Su di me</Link>
                    </li>
                    <li className='text-primary text-right text-lg sm:text-xl px-4'>
                        <Link to="projects">Progetti</Link>
                    </li>
                    <li className='text-primary text-right text-lg sm:text-xl px-4'>
                        <Link to="contacts">Contatti</Link>
                    </li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar