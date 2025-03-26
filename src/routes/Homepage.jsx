import { useState, useEffect } from "react"
//components
import Navbar from "../layouts/Navbar"
import Card from "../layouts/Card"
import Button from '../components/Button'
import Carousel from "../layouts/Carousel"
import Footer from '../layouts/Footer'

//Icons
import { FaHtml5 } from "react-icons/fa"
import { FaCss3 } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiTypescript } from "react-icons/si"
import { FaReact } from "react-icons/fa6"
import { FaNodeJs } from "react-icons/fa"
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
      <main className="container mx-auto py-8">
        {/* Profile Card Example */}
        <Card variant="profile" className="mb-7">
          <div className="min-h-fit flex flex-col items-center text-text-primary py-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 p-3 my-4 w-full">
              <div className="flex flex-col justify-center items-center text-center">
                <h2 className="text-2xl text-primary mb-2">Elia Giolli</h2>
                <span className="text-4xl md:text-3xl text-tretiary font-bold mb-4">
                  <ReactTyped
                    strings={[
                      "Jr front-end web developer",
                      "Traduttore",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </span>
                <p className="paragraph">
                Ho 30 anni e sono uno studente di front-end web development. <br />
                
                Le tecnologie che conosco sono HTML, CSS, Javascript, React e Nodejs
                </p>
                <p className="paragraph">
                Parlo fluentemente in 4 lingue straniere: inglese, russo, spagnolo e tedesco.
                </p>
              </div>
              <div className="flex justify-center items-center p-4">
                <div className="foto-container">
                  <img 
                    src="/img/foto_curriculum.png" 
                    alt="Profile" 
                    className="foto"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center p-4 my-6">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 p-4 my-4 max-w-5xl">
                    <FaHtml5 className="icon"/>
                    <FaCss3 className="icon"/>
                    <IoLogoJavascript className="icon"/>
                    <SiTypescript className="icon"/>
                    <FaReact className="icon"/>
                    <FaNodeJs className="icon"/>
              </div>
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