import { Parallax } from "react-parallax"
import { useTheme } from "../contexts/ThemeContext"
//IMG
import Scrivania from '../../public/img/ambiente-lavoro.jpg'
import { FaRocket } from "react-icons/fa"


function ParallaxOne() {
  const {themeMode} = useTheme();
    return (
      <Parallax
          bgImage={Scrivania}
          strength={800}
          bgImageAlt="immagine della scrivania col laptop e un libro di Javascript"
          className="relative h-screen"
          >
          <div className="bg-gradient-to-br bg-primary opacity-70 absolute inset-0 h-screen w-full z-20"></div>
          <div className="flex items-center justify-center flex-col w-full h-screen z-20 relative">
              <div className={`flex flex-col justify-center items-center w-full max-w-3xl max-h-fit p-10 sm:p-14 rounded-lg shadow-lg mx-auto ${themeMode === 'dark'?'bg-primary':'bg-white'}`}>
                <div className="flex justify-between items-center text-center p-2">
                    <FaRocket size={30} className={`${themeMode === 'dark' ? 'icon': 'p-2 text-4xl text-yellow-400 sm:text-5xl hover:text-yellow-600 transition-colors duration-300'}`} />
                    <span className={`text-lg sm:text-xl ${themeMode === 'dark' ? 'text-tertiary':'text-yellow-400'}`}>Scopri cosa posso fare per te</span>
                </div>
                <p className="paragraph">Imparo facendo. Questi sono alcuni dei miei progetti che mi hanno aiutato a crescere.</p>
              </div>
          </div>
      </Parallax>
    )
  }
export default ParallaxOne