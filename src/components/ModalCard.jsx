import React from 'react'

//EXTERNAL LIBRARIES
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

//REACT ICONS
import { MdCloseFullscreen } from "react-icons/md";

function ModalCard({ closeModal, project, getTechIcon }) {
    const {title, description, imageUrl, githubLink, technologies, demoLink} = project;

  return (
    <Dialog 
        open={true} 
        onClose={closeModal}
        className="relative z-50"
    >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />        
        <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="w-full max-w-3xl bg-primary text-primary rounded-xl shadow-xl overflow-hidden">
                <div className="bg-secondary text-primary flex justify-between items-center p-4">
                    <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
                    <button 
                        onClick={closeModal}
                        className="icon"
                    >
                        <MdCloseFullscreen size={24} />
                    </button>
                </div>
                
                <div className="p-6">
                    <div className="mb-4">
                        <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
                    </div>
                    
                    <p className="text-primary mb-4">{description}</p>
                    
                    <h3 className="text-lg font-semibold mb-2">Tecnologie:</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, index) => (
                            <span key={index} className="bg-secondary px-3 py-1 rounded-full text-sm flex items-center my-3">
                                {getTechIcon(tech)}
                                <span className="ml-1">{tech}</span>
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex gap-3">
                        <a 
                            href={githubLink} 
                            className="btn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a 
                            href={demoLink} 
                            className="btn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                    </div>
                </div>
            </DialogPanel>
        </div>
    </Dialog>
  )
}

export default ModalCard