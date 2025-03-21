import React, {useState} from 'react'
import Card from './Card'
import { projectsData, getTechIcon } from '../data/projectsData'
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
            <div className='grid grid-cols-1 md:grid-cols-2 mb-4'>
              <div className='bg-[#1F2937] rounded-xl p-1'>
                <div className='flex flex-wrap gap-2 justify-center items-center mb-4'>
                  {currentProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-text-tretiary/20 px-2 py-1 rounded text-sm flex items-center">
                      {getTechIcon(tech)}
                      <span className="ml-1">{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className='p-2'>
                <h2 className="subtitle mb-2">{currentProject.title}</h2>
                <p className="paragraph mb-4">
                  {currentProject.description}
                </p>
              </div>
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
