import React from 'react'
import  {Link} from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { FaBars} from 'react-icons/fa'
import InputField from '../components/InputField'
import { useState } from 'react'

function Navbar() {
  const [searchValue, setSearchValue] = useState('')
  const [isDropDown, setIsDropDown] = useState(false)

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const toggleDropdown = ()=>{
    setIsDropDown(!isDropDown)
  }

  return (
    <nav className='navbar'>
        {/* Logo */}
        <Link to="/">
            <img src="/img/logo.jpg" alt="Logo Giolli Design" className="w-12 h-11 object-cover rounded" />
        </Link>


        {/* Desktop Menu */}
        <ul className='nav-links'>
            <li className='li-style'>
                <Link to='/about'>Su di me</Link>
            </li>
            <li className='li-style'>
                <Link to='/projects'>Progetti</Link>
            </li>
            <li className='li-style'>
                <Link to='/contacts'>Contatti</Link>
            </li>
        </ul>

        {/* Search and Mobile Menu */}
        <div className='flex items-center gap-4'>
            <div className="nav-search">
                <InputField 
                    className='w-52'
                    placeholder="Cerca..."
                    value={searchValue}
                    onChange={handleSearch}
                >
                    <FaSearch className='nav-icon'/>
                </InputField>
            </div>
            
            {/* Hamburger Menu */}
            <section className='block md:hidden cursor-pointer' onClick={toggleDropdown}>
                <FaBars className='text-3xl text-[--text-primary-color]'/>
            </section>
        </div>

        {/* Mobile Dropdown */}
        {isDropDown && (
            <div className='dropdown'>
                <ul>
                    <li className='li-style'>
                        <Link to="/about">Su di me</Link>
                    </li>
                    <li className='li-style'>
                        <Link to="/projects">Progetti</Link>
                    </li>
                    <li className='li-style'>
                        <Link to="/contacts">Contatti</Link>
                    </li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar