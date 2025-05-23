
//components
import HeroSection from "../components/HeroSection"
import About from "../layouts/About"
import Contacts from "../layouts/Contacts"
import Projects from "../layouts/Projects"
import ParallaxOne from "../layouts/ParallaxOne"
import ParallaxTwo from "../layouts/ParallaxTwo"

//Theme
import { useTheme } from '../contexts/ThemeContext';

function Homepage() {

  const { themeMode } = useTheme();  

  return (
    <>
      <main className={`min-h-screen ${themeMode === 'dark' ? 'bg-primary text-primary' : 'bg-blue-50 text-gray-900'} mx-auto`}>
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