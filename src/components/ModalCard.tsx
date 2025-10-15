//Components
import { ModalButton } from './ModalButton';
//Libs
import { useTranslation } from 'react-i18next';
import { Dialog, DialogPanel } from '@headlessui/react'
//Icons
import { MdCloseFullscreen } from "react-icons/md";
//Internal imports
import { useThemeStore } from '../store/store';
import { useFocusRef } from '../custom hooks/useFocusRef';
//Types
import { ModalCardProps } from '../types/generalTypes';

function ModalCard({ closeModal, project, getTechIcon }: ModalCardProps) {
    const { title, longDescription, imageUrl, githubLink, technologies, demoLink } = project;

    const initialTheme = useThemeStore(state => state.initialTheme);
    const { t } = useTranslation();

    // Use the custom focus management hook
    const { modalRef, closeButtonRef, firstLinkRef } = useFocusRef({
        onClose: closeModal,
        autoFocus: true
    });

    const key = project.slug;

    return (
        <Dialog 
            open={true} 
            onClose={closeModal}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/70" aria-hidden="true" />        
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel
                    ref={modalRef}
                    className={`
                        w-[90%] max-w-xl 
                        rounded-2xl shadow-2xl overflow-hidden 
                        ${initialTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-50 text-gray-700'}
                    `}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div className={`flex justify-between items-center py-2 px-4 ${initialTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-50 text-gray-700 border-b border-gray-200'}`}>
                        <h2 id="modal-title" className="text-lg font-semibold">{title}</h2>
                        <button 
                            ref={closeButtonRef}
                            onClick={closeModal}
                            className={`${initialTheme === 'dark' ? 'icon' : 'text-blue-600 hover:text-blue-700 rounded-lg p-1'}`}
                            aria-label="Close modal"
                        >
                            <MdCloseFullscreen size={24} />
                        </button>
                    </div>
                    
                    <div className="px-6 py-4">
                        <div className="mb-4">
                            <img 
                                src={imageUrl} 
                                alt={title} 
                                className="w-full max-h-64 object-cover rounded-lg"
                            />
                        </div>
                        
                        <p className={`my-5 ${initialTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                            {t(`projects.${key}.long`, longDescription)}
                        </p>
                        
                        <h3 className="text-lg font-semibold mb-2">{t('projects.technologies', 'Technologies:')}</h3>
                        <div className="md:flex flex-wrap gap-2 mb-4 hidden">
                            {technologies.map((tech, index) => (
                                <span key={index} className='flex items-center text-sm px-3 py-1 my-3'>
                                    {getTechIcon(tech, initialTheme === 'dark' ? 'bg-cyan-500 hover:bg-cyan-800 text-white rounded-lg' : 'bg-blue-600 hover:bg-blue-700 text-white rounded-xl')}
                                    <span className="ml-1">{tech}</span>
                                </span>
                            ))}
                        </div>
                        
                        <div className="flex gap-3">
                            <ModalButton
                                ref={firstLinkRef}
                                href={githubLink}   
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`View ${title} on GitHub`}
                            >
                                GitHub
                            </ModalButton>
                            <ModalButton 
                                href={demoLink}   
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`View ${title} live demo`}
                            >
                                Demo
                            </ModalButton>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default ModalCard