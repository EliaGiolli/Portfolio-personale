import { ThemeProvider } from "../contexts/ThemeContext"
//components
import Navbar from "../layouts/Navbar"
import HeroSection from "../components/HeroSection"
import Footer from '../layouts/Footer'
import About from "../layouts/About"
import Contacts from "../layouts/Contacts"
import Projects from "../layouts/Projects"
import ParallaxOne from "../layouts/ParallaxOne"
import ParallaxTwo from "../layouts/ParallaxTwo"



function Homepage() {


  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-inherit mx-auto">
        <HeroSection />
        <About />
        <ParallaxOne />
        <Projects />
        <ParallaxTwo />
        <Contacts />
      </main>   
      <Footer />
    </ThemeProvider>
  )
}

export default Homepage