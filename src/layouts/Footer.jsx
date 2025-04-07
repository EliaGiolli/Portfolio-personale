import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
// React Icons
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'

function Footer() {
  return (
    <>
      <footer className="bg-inherit text-primary border-t-2 border-t-cyan-500 p-3">
        <div className="w-full px-4 py-8">
          <div className="text-center space-y-4">
            {/* Logo e Titolo */}
            <div className="flex items-center justify-center gap-2">
              <ScrollLink to="heroSection" smooth={true} duration={500}>
                <img src="/img/logo.jpg" alt="Logo Giolli Design" className="w-12 h-11 object-cover rounded" />
              </ScrollLink>
              <h6 className="subtitle">GIOLLI DESIGN</h6>
            </div>

            {/* Connettiti con me */}
            <h5 className="subtitle-secondary">Connettiti con me!</h5>
            <p className="paragraph">Mail: info@giollidesign.com</p>

            {/* Icone Social */}
            <div className="flex justify-center gap-8">
              <Link to="https://www.linkedin.com/in/eliagiolli/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white transition-colors">
                <FaLinkedinIn className="icon" />
              </Link>
              <Link to="https://github.com/EliaGiolli" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white transition-colors">
                <FaGithub className="icon" />
              </Link>
            </div>

            {/* Icone Tecnologie */}
            <div className="flex justify-center gap-6 mt-4">
              <FaReact className="icon" />
              <IoLogoJavascript className="icon" />
              <FaHtml5 className="icon" />
              <FaCss3 className="icon" />
              <FaNodeJs className="icon" />
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
