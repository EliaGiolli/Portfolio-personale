{/*
import React, {useEffect} from 'react'
import { FaPhp, FaHtml5 } from "react-icons/fa";
import { SiMysql, SiAssemblyscript } from "react-icons/si";
import Card from './Card';
import Button from '../components/Button';

function ModalCard({ open, onClose }) {


    //prevention of the scrolling when the modal is open
    useEffect(()=>{
        if(open){
            //overflow = 'hidden' prevent the scrolling
            document.body.style.overflow = 'hidden';
        } else{
            document.body.style.overflow = 'auto';
        }

        return () =>{
            document.body.style.overflow = 'auto';
        }
    },[open]);

    
    if(!open){
        return null;
    } 

    
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/75 z-50'>
        <Card variant='skill' className="cards max-w-md w-full">
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='subtitle'>Competenze tecniche</h2>
                    <div className='grid grid-cols-2 gap-6 py-4'>
                        <div className='flex justify-center items-center text-center gap-3'>
                            <FaHtml5 className='icon'/>
                            <p className='text-accent-secondary'>HTML5</p>
                        </div>
                        <div className='flex justify-center items-center text-center gap-3'>
                            <FaPhp className='icon' />
                            <p className='text-accent-secondary'>PHP</p>
                        </div>
                        <div className='flex justify-center items-center text-center gap-3'>
                            <SiAssemblyscript className='icon' />
                            <p className='text-accent-secondary'>Assembly</p>
                        </div>
                        <div className='flex justify-center items-center text-center gap-3'>
                            <SiMysql className='icon' />
                            <p className='text-accent-secondary'>MySQL</p>
                        </div>
                    </div>
                    <div className='px-4'>
                        <p className='paragraph p-1'>Durante la mia formazione scolastica ho avuto modo di appassionarmi alla programmazione</p>
                        <p className='paragraph p-1'>I primi linguaggi che ho studiato sono stati C++ e Assembly</p>
                        <p className='paragraph p-1'>In quarta e quinta liceo iniziai a studiare effettivamente HTML, PHP e alcuni concetti di MySQL</p>
                    </div>
                </div>
            <div className='flex justify-center items-center text-center gap-4 py-4'>
                <p className='text-accent-secondary'>Torna alla pagina principale</p>
                <Button variant="arrowBtn" onClick={onClose}>X</Button>
            </div>
        </Card>
    </div>
  )


  <Button 
                className='buttons'
                onClick={() => setOpenModal(true)}
              >
                <Link to='https://github.com/EliaGiolli'>Guarda il mio profilo su Github</Link>
              </Button>
   ì
}

export default ModalCard  */}