
//components
import HeroSection from "../components/HeroSection"
import About from "../layouts/About"
import Contacts from "../layouts/Contacts"
import Projects from "../layouts/Projects"
import ParallaxOne from "../layouts/ParallaxOne"
import ParallaxTwo from "../layouts/ParallaxTwo"



function Homepage() {
  

  return (
    <>
      <main className='mx-auto bg-inherit'>
        <HeroSection />
        <About />
        <ParallaxOne />
        <Projects />
        <ParallaxTwo />
        <Contacts />
      </main>   
    </>
  )
}

export default Homepage