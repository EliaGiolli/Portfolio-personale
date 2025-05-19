import Card from '../components/Card'
import Button from '../components/Button'
import immaginePrincipale from '../../public/img/img-principale.png'

import { useTheme } from '../contexts/ThemeContext'

//LIBRARIES
import { ReactTyped } from 'react-typed'
import { Element, Link } from 'react-scroll'
//ICONS
import { FaLaptopCode } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { TiTick } from "react-icons/ti";


function About() {
    const {themeMode} = useTheme();
  
  return (
    <>
    
      <Element name='about' className="flex flex-col w-full min-h-screen p-2 mb-10 sm:mb-16">
        <Card variant="profile" className="mb-11">
              <div className="flex flex-col items-center text-center md:text-left px-8 py-5 grow">
                <h3 className={`subtitle-secondary ${themeMode === 'dark' ? 'text-primary':'text-gray-900'}`}>Elia Giolli</h3>
                <span className={`text-3xl sm:text-5xl font-bold my-4 ${themeMode === 'dark' ? 'text-tertiary':'text-yellow-400'}`}>
                  <ReactTyped
                    strings={[
                      "Jr React developer",
                      "Jr Front-end developer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </span>
                <p className={`paragraph ${themeMode === 'dark'?'text-white':'text-gray-900'}`}> Ciao, sono Giolli Elia, un React Developer orientato alla costruzione di design interattivi e accessibili.</p>
                <p className={`paragraph ${themeMode === 'dark'?'text-white':'text-gray-900'}`}>Sviluppo soluzioni web scalabili e multilingue, ideali per chi vuole espandere il proprio business oltre i confini nazionali.</p>
              </div>
        </Card>
        <Card variant='profile'>
            <div className="grid col-span-2 px-4">
                <h2 className={`subtitle ${themeMode === 'dark'?'text-tertiary':'text-yellow-400'}`}>Creo interfacce moderne per siti web veloci e performanti.</h2>
                <p className="paragraph">Il tuo sito sarà: </p>
                <ul className='flex flex-col justify-center items-center text-center p-3'>
                  <li className={`md:text-xl text-center p-2 flex items-center ${themeMode === 'dark'? 'text-primary':'text-grey-900'}`}>
                    <FaLaptopCode size={30} className='mr-3'/>
                      Responsivo su tutti i dispositivi    
                  </li>
                  <li className={`md:text-xl text-center p-2 flex items-center ${themeMode === 'dark'? 'text-primary':'text-grey-900'}`}>
                    <TbManualGearbox size={30} className='mr-3' />
                      Ottimizzato per la velocità e la SEO
                    </li>
                  <li className={`md:text-xl text-center p-2 flex items-center ${themeMode === 'dark'? 'text-primary':'text-grey-900'}`}>
                    <TiTick size={30} className='mr-3' />
                    Facile da navigare per i tuoi clienti
                  </li>
                </ul>
                <p className='paragraph text-accent-secondary mb-4'>Prenota una call gratuita e trasformiamo la tua idea in un sito web efficace e professionale!</p>
              <Button>
               <Link to="contacts" smooth={true} duration={500}>Contattami!</Link>
              </Button>
            </div>
        </Card>

      </Element>

    </>
  )
}

export default About