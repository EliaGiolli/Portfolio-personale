import React from "react"
import Navbar from '../layouts/Navbar'
import Footer from "../layouts/Footer"
import Card from '../layouts/Card'
import Button from '../components/Button'


function About() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full h-fit p-2">
        <Card variant='profile' className='cards'>
          <div className="grid grid-cols-3 gap-3">
            <div className="grid col-span-2">
              <p className="paragraph">Hai bisogno di un sito internet <strong className="text-accent">moderno ed efficace?</strong></p>
              <p className="paragraph">Hai bisogno di <strong className="text-accent">portare online</strong> la tua attività?</p>
              <Button className='buttons'>Guarda i miei progetti!</Button>
            </div>
            <div className="w-full flex justify-center">
              <img src="/img/talks.jpg" alt="due persone che parlano fra di loro" className="object-cover rounded-lg"/>
            </div>
          </div>
        </Card>
        <Card variant='profile' className='cards'>
          <div className="grid grid-cols-3 gap-3">
            <div className="w-full flex justify-center">
              <img src="/img/talks2.jpg" alt="due persone che parlano fra di loro" className="object-cover rounded-lg"/>
            </div>
            <div className="grid col-span-2">
              <p className="paragraph">Creo siti con le tecnologie più in voga al momento come <strong className="text-accent">React, Tailwind CSS e Typescript</strong>.</p>
              <p className="paragraph">Contattami per fissare una chiamata e diamo vita ai tuoi progetti!</p>
              <Button className='buttons'>Contattami</Button>
            </div>
          </div>
        </Card>
      </main>
      <Footer />    
    </>
  )
}

export default About