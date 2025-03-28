import { useState, useEffect } from "react"
//components
import Navbar from "../layouts/Navbar"
import HeroSection from "../layouts/HeroSection"
import Card from "../layouts/Card"
import Button from '../components/Button'
import Carousel from "../layouts/Carousel"
import Footer from '../layouts/Footer'

//Icons

import { ReactTyped } from 'react-typed'
import { RiTeamFill } from "react-icons/ri"
import { FaUserGear } from "react-icons/fa6"
import { FaBusinessTime } from "react-icons/fa6"
import { MdOutlineTimelapse } from "react-icons/md"
import { TbWorld } from "react-icons/tb"
import { FaTasks } from "react-icons/fa"
import { LuArrowUpToLine } from "react-icons/lu";



function Homepage() {

  //logic for the scrollBtn
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
      window.addEventListener("scroll", toggleVisibility);
    
      return () => window.removeEventListener("scroll", toggleVisibility);
  },[]);




  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="container mx-auto py-8">
        {/* Profile Card Example */}
        <Card variant="profile" className="mb-7">
         
            <div className="flex flex-col justify-around items-center text-center p-3 my-4 w-full">
              <div className="flex flex-col items-center text-center md:text-left">
                <div className="foto-container w-1/2 mb-4">
                  <img 
                    src="/img/foto_curriculum.png" 
                    alt="Profile" 
                    className="foto w-full"
                  />
                </div>
                <h2 className="text-2xl text-primary mb-2">Elia Giolli</h2>
                <span className="text-3xl md:text-4xl text-tretiary font-bold mb-4">
                  <ReactTyped
                    strings={[
                      "Jr React developer",
                      "Traduttore",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </span>
                <p className="paragraph">
                  Ciao, sono <strong className="text-tretiary">Elia Giolli</strong>, un sviluppatore web front-end con esperienza in <strong className="text-tretiary">HTML, CSS, JavaScript, React e Node.js</strong>. Parlo fluentemente <strong className="text-tretiary">inglese, russo e spagnolo</strong>. 
                </p>
                <p className="paragraph">
                  Ho lavorato su diversi progetti web, utilizzando tecnologie moderne per creare esperienze utente coinvolgenti e performanti. Scopri i miei progetti per vedere il mio lavoro!
                </p>
              </div>
            <Button>
              Contattami
            </Button>
          </div>
        </Card>


         {/* Project cards carousel */}
        <Carousel />

        {/* Skills Card Example */}
        <Card variant="skill">
          <div className="text-white flex flex-col justify-center items-center h-screen">
            <h2 className="subtitle p-2 mb-5">Competenze</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center border-white border rounded-md px-3 hover:bg-sky-100">
                    <RiTeamFill className="icon"/>
                    <p className="paragraph hover:text-black">Lavoro di squadra</p>
              </div>
              <div className="flex items-center border-white border rounded-md px-3 hover:bg-sky-100">
                    <FaUserGear className="icon"/>
                    <p className="paragraph hover:text-black">Problem solving</p>
              </div>
              <div className="flex items-center border-white border rounded-md px-3 hover:bg-sky-100">
                    <FaBusinessTime className="icon"/>
                    <p className="paragraph hover:text-black">Gestione del tempo</p>
              </div>
              <div className="flex items-center border-white border rounded-md px-3 hover:bg-sky-100">
                    <MdOutlineTimelapse className="icon"/>
                    <p className="paragraph hover:text-black">Gestione dello stress</p>
              </div>
              <div className="flex items-center border-white border rounded-md px-3 hover:bg-sky-100">
                    <TbWorld className="icon"/>
                    <p className="paragraph hover:text-black">Lavoro con clienti internazionali</p>
              </div>
              <div className="flex items-center border-white border rounded-md px-3 hover:bg-sky-100">
                    <FaTasks className="icon"/>
                    <p className="paragraph hover:text-black">Multitasking</p>
              </div>
            </div>
          </div>
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

export default Homepage