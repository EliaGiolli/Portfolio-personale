import { useTheme } from '../contexts/ThemeContext'

import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
// React Icons
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'

function Footer() {
  const {themeMode} =useTheme();
  return (
    <>
      <footer className={`border-t-2 p-3 ${themeMode ==='dark'?'bg-primary text-primary border-t-cyan-500':'bg-blue-50 text-gray-900 border-t-blue-500'}`}>
        <div className="w-full px-4 py-8">
          <div className="text-center space-y-4">
            {/* Logo e Titolo */}
            <div className="flex items-center justify-center gap-4">
              <ScrollLink to="heroSection" smooth={true} duration={500}>
                <img src="/img/logo.jpg" alt="Logo Giolli Design" className="w-12 h-11 object-cover rounded" />
              </ScrollLink>
              <h6 className={`subtitle ${themeMode ==='dark'?'text-tertiary':'text-blue-400'}`}>GIOLLI DESIGN</h6>
            </div>

            {/* Connettiti con me */}
            <h5 className="subtitle-secondary">Connettiti con me!</h5>
            <p className="paragraph">Mail: info@giollidesign.com</p>

            {/* Icone Social */}
            <div className="flex justify-center gap-8">
              <Link to="https://www.linkedin.com/in/eliagiolli/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className={`${themeMode==='dark'?'icon':'text-blue-400 hover:text-blue-500 p-2 text-4xl transition-colors duration-300'}`} />
              </Link>
              <Link to="https://github.com/EliaGiolli" target="_blank" rel="noopener noreferrer">
                <FaGithub className={`${themeMode==='dark'?'icon':'text-blue-400 hover:text-blue-500 p-2 text-4xl transition-colors duration-300'}`} />
              </Link>
            </div>

            {/* Icone Tecnologie */}
            <div className="flex justify-center gap-6 mt-4">
              <FaReact className={`${themeMode==='dark'?'icon':'text-blue-400 hover:text-blue-500 p-2 text-4xl transition-colors duration-300'}`} />
              <IoLogoJavascript className={`${themeMode==='dark'?'icon':'text-blue-400 hover:text-blue-500 p-2 text-4xl transition-colors duration-300'}`} />
              <FaHtml5 className={`${themeMode==='dark'?'icon':'text-blue-400 hover:text-blue-500 p-2 text-4xl transition-colors duration-300'}`} />
              <FaCss3 className={`${themeMode==='dark'?'icon':'text-blue-400 hover:text-blue-500 p-2 text-4xl transition-colors duration-300'}`} />
              <FaNodeJs className={`${themeMode==='dark'?'icon':'text-blue-400 hover:text-blue-500 p-2 text-4xl transition-colors duration-300'}`} />
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
