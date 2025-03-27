import { useState, useEffect } from 'react'

import Navbar from '../layouts/Navbar'
import Footer from "../layouts/Footer"
import Card from '../layouts/Card'
import ModalCard from '../layouts/ModalCard'
import Button from '../components/Button'

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

  //Logic for the modal view
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full h-fit p-2">
        <Card variant='profile' className='cards'>
          <article className="flex flex-col md:grid md:grid-cols-3 gap-3">
            <div className="grid col-span-2 order-2 md:order-1">
              <h2 className="subtitle uppercase">Vuoi un sito web veloce, responsive e ottimizzato per la SEO?</h2>
              <p className="paragraph">Oppure vuoi <strong className='text-accent'>migliorare le performance</strong> del tuo sito attuale per offrire un'esperienza fluida e intuitiva ai tuoi utenti?</p>
              <p className="paragraph text-accent-secondary">Guarda i miei progetti e scopri come posso aiutarti!</p>
              <Button className='buttons'>Guarda i miei progetti!</Button>
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
              <Button className='buttons'>Guarda i miei progetti!</Button>
            </div>
          </div>
        </Card>
      </main>

        {/* Presentation card */}
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
              <Button className='buttons'>Guarda i miei progetti!</Button>
            </div>
          </div>
        </Card>



        {/* Formazione & Esperienza card */}
        <Card variant='profile' className='cards'>
          <div className="flex flex-col md:grid md:grid-cols-3 text-center gap-3">
            <div className="w-full flex justify-center">
              <img src="/img/img-principale.png" alt="Formazione" className="object-cover rounded-lg" />
            </div>
            <div className="grid col-span-2">
              <h2 className="subtitle uppercase">Formazione & Esperienza</h2>
              <p className="paragraph">Percorso scolastico: <strong className='block text-accent-secondary'>Liceo tecnico industriale E.Marconi, Pontedera(PI)</strong></p>
              <p className="paragraph">Percorso universitario: <strong className='block text-accent-secondary'>Laurea in lingue e letterature straniere - Università di Pisa</strong></p>
              <p className="paragraph">Specializzazione: <strong className='block text-accent-secondary'>React, Tailwind CSS, JavaScript (ES6+), TypeScript</strong></p>
              <p className="paragraph mb-6">Esperienza nel settore: <strong className='block text-accent-secondary'>Progetti personali sul mio profilo <Link to="https://github.com/EliaGiolli" className='text-accent'>GitHub</Link> e formazione continua nel mondo del web development</strong></p>
              <Button 
                className='buttons'
                onClick={() => setOpenModal(true)}
              >
                Guarda i miei progetti!
              </Button>
            </div>
            <ModalCard open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </Card>

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