import { useState, useEffect } from 'react'

import Navbar from '../layouts/Navbar'
import Footer from "../layouts/Footer"
import Card from '../layouts/Card'
import Button from '../components/Button'
import { FaHtml5, FaPhp } from 'react-icons/fa'
import { SiAssemblyscript, SiMysql } from 'react-icons/si'
import { LuArrowUpToLine } from "react-icons/lu";
import { Link } from 'react-router-dom'

function About() {
  
  //logic for the scrollBtn
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    const toggleVisibility = ()=> setIsVisible(window.scrollY > 300);
      window.addEventListener("scroll",toggleVisibility);

      return () => window.removeEventListener("scroll", toggleVisibility);
  },[]);
{/*
  //Logic for the modal view
  const [openModal, setOpenModal] = useState(false);
*/}
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full h-fit p-2 mb-10">
        <Card variant='profile' className='cards'>
          <article className="flex flex-col md:grid md:grid-cols-3 gap-3">
            <div className="grid col-span-2 order-2 md:order-1">
              <h2 className="subtitle uppercase">Vuoi un sito web veloce, responsive e ottimizzato per la SEO?</h2>
              <p className="paragraph">Oppure vuoi <strong className='text-accent'>migliorare le performance</strong> del tuo sito attuale per offrire un&apos;esperienza fluida e intuitiva ai tuoi utenti?</p>
              <p className="paragraph text-accent-secondary">Guarda i miei progetti e scopri come posso aiutarti!</p>
            </div>
            <div className="w-full flex justify-center order-1 md:order-2">
              <img src="/img/talks.jpg" alt="due persone che parlano fra di loro" className="object-cover rounded-lg"/>
            </div>
          </article>
        </Card>
        <Card variant='profile' className='cards'>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
            <div className="w-full flex justify-center">
              <img src="/img/talks2.jpg" alt="due persone che parlano fra di loro" className="object-cover rounded-lg"/>
            </div>
            <div className="grid col-span-2">
            <h2 className="subtitle uppercase">Creo interfacce moderne e reattive con React, Tailwind CSS e TypeScript, per siti web veloci e performanti.</h2>
              <p className="paragraph">Il tuo sito sarà: </p>
              <ul className='flex flex-col justify-center items-center text-center p-3'>
                <li className='li-style-body'><strong className='text-accent'>Responsivo</strong> su tutti i dispositivi</li>
                <li className='li-style-body'><strong className='text-accent'>Ottimizzato</strong> per la velocità e la SEO</li>
                <li className='li-style-body'><strong className='text-accent'>Facile da navigare</strong> per i tuoi clienti</li>
              </ul>
              <p className='paragraph text-accent-secondary mb-4'>Prenota una call gratuita e trasformiamo la tua idea in un sito web efficace e professionale!</p>
            </div>
          </div>
        </Card>
        
        {/* Presentation card */}
        <Card variant='profile' className='cards'>
          <article className="flex flex-col md:grid md:grid-cols-3 gap-3">
            <div className="w-full flex justify-center md:order-2">
              <img src="/img/foto-laurea.jpg" alt="la foto della mia laurea" className="object-cover rounded-lg"/>
            </div>
            <div className="grid col-span-2 md:order-1">
              <h2 className="subtitle uppercase"> Ciao, sono Giolli ELia, un React Developer orientato alla costruzione di design interattivi e accessibili.</h2>
                <div className='flex flex-col text-center'>
                  <h3 className='subtitle-secondary mt-5'>Chi sono:</h3>
                  <p className="paragraph">Mi piace trasformare idee in interfacce web moderne, intuitive e performanti. Ogni progetto per me è un&apos;opportunità per unire <strong className='text-tretiary'>design e tecnologia</strong>, creando esperienze utente fluide e coinvolgenti. </p>
                  <h3 className='subtitle-secondary'>Il mio obitttivo:</h3>              
                  <p className='paragraph mb-3'>Sviluppo <strong className='text-tretiary'>soluzioni web scalabili e multilingue</strong>, ideali per chi vuole espandere il proprio business oltre i confini nazionali.</p>
                  <p className='text-secondary mb-5'>Se ti interessa conoscere meglio di cosa mi occupo, guarda miei progetti!</p>
                </div>
                <Button className='buttons'>
                  <Link to='/projects'>Guarda i miei progetti!</Link>
                </Button>
            </div>
          </article>
        </Card>
        {/* Formazione & Esperienza card */}
        <Card variant='profile' className='cards mb-10'>
          <article className="flex flex-col md:grid md:grid-cols-3 text-center gap-3">
            <div className="w-full flex justify-center">
              <img src="/img/img-principale.png" alt="Formazione" className="object-cover rounded-lg" />
            </div>
            <div className="grid col-span-2">
              <h2 className="subtitle uppercase mt-8 md:mt-0">Formazione & Esperienza</h2>
              <div className='flex flex-col text-center px-4 mb-5'>
              <h3 className="subtitle-secondary mt-5">Percorso scolastico: </h3>
              <p className='paragraph text-secondary'>Liceo tecnico industriale E.Marconi, Pontedera(PI)</p>
                <div className='px-4'>
                          <p className='paragraph p-1'>Durante la mia formazione scolastica ho avuto modo di appassionarmi alla programmazione</p>
                          <p className='paragraph p-1'>I primi linguaggi che ho studiato sono stati <strong className='text-tretiary'>C++ e Assembly</strong></p>
                          <p className='paragraph p-1'>In quarta e quinta liceo iniziai a studiare effettivamente <strong className='text-tretiary'>HTML, PHP e MySQL</strong></p>
                      </div>
                </div>
                <div className='flex flex-col justify-center items-center mb-8'>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex justify-center items-center text-center gap-3'>
                            <FaHtml5 className='icon'/>
                            <p className='text-accent-secondary'>HTML5</p>
                        </div>
                        <div className='flex justify-center items-center text-center gap-3'>
                            <FaPhp className='icon' />
                            <p className='text-accent-secondary'>PHP</p>
                        </div>
                        <div className='flex justify-center items-center text-center gap-3'>
                            <SiAssemblyscript className='icon' />
                            <p className='text-accent-secondary'>Assembly</p>
                        </div>
                        <div className='flex justify-center items-center text-center gap-3'>
                            <SiMysql className='icon' />
                            <p className='text-accent-secondary'>MySQL</p>
                        </div>
                    </div>
                </div>
                
              <p className="text-secondary mb-6">Se vuoi saperne di più dai guarda mio profilo <strong className='text-tretiary'>Github</strong></p>
              
            </div>
           {/* <ModalCard open={openModal} onClose={() => setOpenModal(false)} /> */}
          </article>
        </Card>

      </main>

      {/* button for scroll-to-top */}
    {isVisible && 
      <Button 
        variant="scrollBtn" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <LuArrowUpToLine />
      </Button>}
      <Footer />    
    </>
  )
}

export default About