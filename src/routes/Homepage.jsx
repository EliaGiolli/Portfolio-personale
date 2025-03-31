
//components
import Navbar from "../layouts/Navbar"
import HeroSection from "../layouts/HeroSection"
import Footer from '../layouts/Footer'
import About from "../layouts/About"
import Contacts from "../layouts/Contacts"
import ProjectsPage from "../layouts/ProjectsPage"




function Homepage() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="bg-primary mx-auto py-8">
        <About />
        <ProjectsPage />
        <Contacts />
      </main>   
      <Footer />
    </>
  )
}

export default Homepage