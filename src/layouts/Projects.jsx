import { useState } from 'react';
import React from 'react';

import { useTheme } from '../contexts/ThemeContext';

import Card from '../components/Card'
import Button from '../components/Button';
import ModalCard from '../components/ModalCard';
import { projectsData } from '../data/projectsData'

// React icons
import { FaJs, FaReact, FaCss3Alt } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript, SiAxios } from 'react-icons/si';
import { TbBrandVite } from "react-icons/tb";

// External libraries
import { Element } from 'react-scroll';


function Projects() {
  const {themeMode} = useTheme();
  // Stato per aprire/chiudere la modale
  const [isOpen, setIsOpen] = useState(false);
  // Aggiungiamo uno stato per il progetto selezionato
  const [selectedProject, setSelectedProject] = useState(null);

  const getTechIcon = (tech, className) => {
    switch (tech) {
      case 'Javascript':
        return <FaJs className={`icon ${className}`} />;
      case 'React':
        return <FaReact className={`icon ${className}`} />;
      case 'CSS':
        return <FaCss3Alt className={`icon ${className}`} />;
      case 'Tailwind CSS':
        return <RiTailwindCssFill className={`icon ${className}`} />;
      case 'Typescript':
        return <SiTypescript className={`icon ${className}`} />;
      case 'Axios':
        return <SiAxios className={`icon ${className}`} />;
      case 'Vite':
        return <TbBrandVite className={`icon ${className}`} />;
      default:
        return null;
    }
  };

  return (
    <>  
      <Element name='projects' className='carousel-div'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-96 gap-6 px-10'>
          {projectsData.map((project, index) => (
            <Card key={index} variant="project">
              <div className="flex flex-col text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className='max-w-3xl'>
                  <img src={project.imageUrl} alt={project.title} className='object-cover rounded-lg mb-4' />
                </div>
                <h2 className={`subtitle mb-2 ${themeMode ==='dark'?'text-primary':'text-yellow-100'}`}>{project.title}</h2>
                <p className="paragraph mb-4">{project.description}</p>
                <Button onClick={() => {
                  setSelectedProject(project);
                  setIsOpen(true);
                }}>Scopri di più!</Button>
              </div>
            </Card>
          ))}
        </div>
      </Element>

      {/* Passiamo il progetto selezionato alla modale */}
      {isOpen && <ModalCard 
        closeModal={() => setIsOpen(false)} 
        getTechIcon={getTechIcon} 
        project={selectedProject} 
      />}
    </>
  );
}

export default Projects;
