//components
import HeroSection from "../components/HeroSection"
import About from "../layouts/About"
import Contacts from "../layouts/Contacts"
import Projects from "../layouts/Projects"


function Homepage() {  

  return (
    <>
      <main className="min-h-screen mx-auto">
        <HeroSection />
        <About />
        <Projects />
        <Contacts />
      </main>   
    </>
  )
}

export default Homepage