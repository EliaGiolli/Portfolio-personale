import { Parallax } from "react-parallax"
import { useTheme } from "../contexts/ThemeContext"
//IMG
import Riunione from '../../public/img/talks2.jpg'
import { FaHandshake } from "react-icons/fa"


function ParallaxTwo() {
  const {themeMode} =useTheme();
    return (
      <Parallax
          bgImage={Riunione}
          strength={800}
          bgImageAlt="immagine della scrivania col laptop e un libro di Javascript"
          className="relative h-screen"
          >
          <div className="bg-gradient-to-br bg-primary opacity-70 absolute inset-0 h-screen w-full z-20"></div>
          <div className="flex items-center justify-center flex-col w-full h-screen z-20 relative">
              <div className={`flex flex-col justify-center items-center w-full max-w-3xl max-h-fit p-10 sm:p-14 rounded-lg shadow-lg mx-auto ${themeMode ==='dark'?'bg-primary':'bg-white text-gray-900'}`}>
                <div className="flex justify-between items-center text-center p-2">
                    <FaHandshake size={30} className={`${themeMode ==='dark'?'icon':'text-yellow-400 hover:text-yellow-500 mr-2'}`} />
                    <span className={`text-lg sm:text-xl ${themeMode==='dark'?'bg-primary':'text-yellow-400'}`}>Raccontami il tuo progetto</span>
                </div>
                <p className="paragraph">Sono sempre curioso di ascoltare nuove idee. Scrivimi senza impegno!</p>
              </div>
          </div>
      </Parallax>
    )
  }
export default ParallaxTwo