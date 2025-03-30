import { useState, useEffect } from 'react';

import Card from '../layouts/Card'
import Navbar from '../layouts/Navbar'
import Button from '../components/Button';
import Footer from '../layouts/Footer'
import { projectsData } from '../data/projectsData'

//React icons
import { FaJs, FaReact,FaCss3Alt,FaGithub } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript,SiAxios } from 'react-icons/si';
import {LuArrowUpToLine} from 'react-icons/lu';
import { TbBrandVite } from "react-icons/tb";

//React-Router
import { Link } from 'react-router-dom';

function ProjectsPage() {
    //logic for the scrollBtn
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(()=>{
      const toggleVisibility = () => setIsVisible(window.scrollY > 300);
        window.addEventListener("scroll", toggleVisibility);
      
        return () => window.removeEventListener("scroll", toggleVisibility);
    },[]);
  

  const getTechIcon = (tech) => {

          switch (tech) {
              case 'Javascript':
                  return <FaJs className='icon'/>;
              case 'React':
                  return <FaReact className='icon'/>;
              case 'CSS':
                  return <FaCss3Alt className='icon'/>;
              case 'Tailwind CSS':
                  return < RiTailwindCssFill className='icon'/>;
              case 'Typescript':
                  return < SiTypescript className='icon'/>;
              case 'Axios':
                return <SiAxios className='icon'/>;
              case 'Vite':
                return <TbBrandVite className='icon'/>;
              default:
                  return null;
          }
      };


  return (
    <>
      <Navbar />
      <section className='bg-inherit w-full p-8 my-11'>
        <h1 className="title-primary p-4 mb-6">Portfolio Progetti: Applicazioni Web Moderne e Performanti</h1>
        <h2 className="subtitle">Scopri le mie creazioni, sviluppate con React e con le tecnologie di ultima generazione</h2>
        <p className="paragraph px-4">
          Dai progetti front-end dinamici alle applicazioni interattive, questa sezione raccoglie i lavori che rappresentano la mia crescita come sviluppatore. 
          Ogni progetto è ottimizzato per garantire velocità, accessibilità e usabilità. Se sei alla ricerca di 
          ispirazione o soluzioni digitali innovative, sei nel posto giusto.
        </p>
      </section>
      
        
      <main className='bg-inherit w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 px-6'>
            {projectsData.map((project, index) => (
              <Card key={index} variant="project">
                <div className="flex flex-col text-white scale-100">
                  <div className='w-full'>
                    <img src={project.imageUrl} alt={project.title} className='object-cover rounded-lg mb-4' />
                  </div>
                  <h2 className="subtitle mb-2">{project.title}</h2>
                  <p className="paragraph mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-text-tretiary/20 px-2 py-1 rounded text-sm flex items-center">
                        {getTechIcon(tech)}
                        <span className="ml-1">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <Button 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Demo
                  </Button>
                  <Link
                        to={project.githubLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-2xl text-white hover:text-sky-300 cursor-pointer" />
                    </Link>
                </div>
              </Card>
            ))}
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

export default ProjectsPage