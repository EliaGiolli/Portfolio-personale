import { Parallax } from "react-parallax"

//IMG
import Scrivania from '../../public/img/ambiente-lavoro.jpg'
import { FaRocket } from "react-icons/fa"


function ParallaxOne() {
    return (
      <Parallax
          bgImage={Scrivania}
          strength={800}
          bgImageAlt="immagine della scrivania col laptop e un libro di Javascript"
          className="relative h-screen"
          >
          <div className="bg-gradient-to-br bg-primary opacity-70 absolute inset-0 h-screen w-full z-20"></div>
          <div className="flex items-center justify-center flex-col w-full h-screen z-20 relative">
              <div className="bg-primary flex flex-col justify-center items-center w-full max-w-3xl max-h-fit p-10 sm:p-14 rounded-lg shadow-lg mx-auto">
                <div className="flex justify-between items-center text-center p-2">
                    <FaRocket size={30} className="icon" />
                    <span className="text-lg sm:text-xl text-tretiary">Scopri cosa posso fare per te</span>
                </div>
                <h3 className="text-white text-xl sm:text-2xl text-center">Imparo facendo. Questi sono alcuni dei miei progetti che mi hanno aiutato a crescere.</h3>
              </div>
          </div>
      </Parallax>
    )
  }
export default ParallaxOne