import React, {useState} from 'react'
import Card from './Card'
import { projectsData } from '../data/projectsData'
import { FaGithub } from 'react-icons/fa'
import { FaRegArrowAltCircleLeft } from "react-icons/fa"
import { FaRegArrowAltCircleRight } from "react-icons/fa"

function Carousel() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
    const currentProject = projectsData[currentProjectIndex];

    const nextProject = () => {
        setCurrentProjectIndex((prevIndex) => 
            prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevProject = () => {
        setCurrentProjectIndex((prevIndex) => 
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    };

  return (
    <div className='carousel-div'>
       <Card variant="project" >
          <div className="flex flex-col text-white scale-100">
            <img 
              src={currentProject.imageUrl} 
              alt={currentProject.title} 
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="subtitle mb-2">{currentProject.title}</h2>
            <p className="paragraph mb-4">
              {currentProject.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {currentProject.technologies.map((tech, index) => (
                <span key={index} className="bg-text-tretiary/20 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-auto">
              <a 
                href={currentProject.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="custom-button"
              >
                Demo
              </a>
              <a 
                href={currentProject.githubLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-white hover:text-sky-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </Card>
        <div className='flex justify-center items-center w-full gap-5 p-2 my-2'>
            <FaRegArrowAltCircleLeft className='icon cursor-pointer' onClick={prevProject} />
            <FaRegArrowAltCircleRight className='icon cursor-pointer' onClick={nextProject}/>
        </div>
    </div>
  )
}

export default Carousel
