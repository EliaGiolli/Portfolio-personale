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
    <nav className='bg-primary text-primary flex justify-between items-center border-b-2 border-b-cyan-700 w-full h-20 py-3 px-4 sticky top-0 z-50'>
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
            <div className='bg-primary border-b-cyan-700 border-t-gray-400 absolute top-full right-0 w-full sm:hidden p-8 z-50 border-b-2 border-t-2'>
                <ul className='flex flex-col items-center gap-4'>
                    <li className='text-primary text-right text-lg sm:text-xl hover:bg-cyan-800 hover:text-white hover:rounded-lg px-4'>
                        <Link to="about">Su di me</Link>
                    </li>
                    <li className='text-primary text-right text-lg sm:text-xl hover:bg-cyan-800 hover:text-white hover:rounded-lg px-4'>
                        <Link to="projects">Progetti</Link>
                    </li>
                    <li className='text-primary text-right text-lg sm:text-xl  hover:bg-cyan-800 hover:text-white hover:rounded-lg px-4'>
                        <Link to="contacts">Contatti</Link>
                    </li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar