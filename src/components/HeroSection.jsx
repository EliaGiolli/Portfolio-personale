//React components
import Button from './Button'

import ImgHero from '../../public/img/foto-laurea.jpg'
//External libraries
import { Link } from 'react-scroll'
import { Parallax } from 'react-parallax'

import { useTheme } from '../contexts/ThemeContext'

function HeroSection() {
    const {themeMode} = useTheme()
  return (
    <>
        <Parallax 
            name='heroSection' 
            bgImage={ImgHero}
            strength={800} 
            bgImageAlt='foto di un mio snippet di codice con React'
            className="relative h-screen w-full overflow-hidden"
        >
            <div className="absolute inset-0 w-full h-screen bg-gradient-to-br bg-primary opacity-70 z-20"></div>
            <div className="flex flex-col items-center justify-center relative z-30 text-white px-8 py-4 h-screen">
                <h3 className='subtitle-secondary py-3'>Pronto a fare il prossimo passo?</h3>
                <h1 className={`title-primary ${themeMode === 'dark' ? 'text-tertiary' : 'text-yellow-400'} `}>Trasformo la tua idea in un sito web efficace e professionale!</h1>
                <p className="paragraph text-lg sm:text-2xl w-full sm:max-w-3xl my-5">Ogni progetto è un’opportunità per crescere. Voglio portare la tua idea online e farla diventare realtà. Scopri cosa posso fare per te!</p>
                <div className="w-full flex flex-col items-center justify-center p-4">
                    <Button>
                        <Link className='block w-full h-full' to="contacts" smooth={true} duration={500}>Contattami!</Link>
                    </Button>
                </div>
            </div>
        </Parallax>
    </>
  )
}

export default HeroSection