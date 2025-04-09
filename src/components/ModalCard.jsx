import React from 'react'

import { useTheme } from '../contexts/ThemeContext';
//EXTERNAL LIBRARIES
import { Dialog, DialogPanel } from '@headlessui/react'

//REACT ICONS
import { MdCloseFullscreen } from "react-icons/md";


function ModalCard({ closeModal, project, getTechIcon }) {

    const {title,longDescription, imageUrl, githubLink, technologies, demoLink} = project;

    const {themeMode} = useTheme();

  return (
    <Dialog 
        open={true} 
        onClose={closeModal}
        className="relative z-50"
    >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />        
        <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className={`w-full max-w-3xl rounded-xl shadow-xl overflow-hidden ${themeMode ==='dark'?'bg-primary text-primary':'bg-white text-gray-900'}`}>
                <div className={`flex justify-center items-center py-2 ${themeMode==='dark'?'bg-secondary text-primary':'bg-yellow-100 text-gray-900'}`}>
                    
                    <button 
                        onClick={closeModal}
                        className={`${themeMode ==='dark'?'icon':'bg-yellow-400 hover:bg-yellow-500 text-gray-900 hover:text-white rounded-lg p-1'}`}
                    >
                        <MdCloseFullscreen size={24} />
                    </button>
                </div>
                
                <div className="px-6 py-2">
                    <div className="mb-4">
                        <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg" />
                    </div>
                    
                    <p className={`my-5 ${themeMode==='dark'?'text-primary':'text-gray-900'}`}>{longDescription}</p>
                    
                    <h3 className="text-lg font-semibold mb-2">Tecnologie:</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, index) => (
                            <span key={index} className='flex items-center text-sm px-3 py-1 my-3'>
                                {getTechIcon(tech, themeMode === 'dark' ? 'bg-cyan-500 hover:bg-cyan-800 text-white rounded-lg' : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-xl')}
                                <span className="ml-1">{tech}</span>
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex gap-3">
                        <a 
                            href={githubLink} 
                            className={`btn ${themeMode==='dark'?'bg-cyan-600 hover:bg-cyan-800 text-primary':'bg-yellow-400 hover:bg-yellow-500 text-gray-900 hover:text-white'}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a 
                            href={demoLink} 
                            className={`btn ${themeMode==='dark'?'bg-cyan-600 hover:bg-cyan-800 text-primary':'bg-yellow-400 hover:bg-yellow-500 text-gray-900 hover:text-white'}`} 
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