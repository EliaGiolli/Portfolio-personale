import { 
    SiTypescript, 
    SiJavascript, 
    SiTailwindcss,
} from 'react-icons/si';

import {
    FaCss3,
    FaReact,
    FaNodeJs,
} from 'react-icons/fa';

// Function to return the corresponding icon based on technology name
export const getTechIcon = (tech) => {
    switch (tech) {
        case 'Typescript':
            return <SiTypescript className='icon' />;
        case 'Javascript':
            return <SiJavascript className='icon' />;
        case 'React':
            return <FaReact className='icon' />;
        case 'Tailwind CSS':
            return <SiTailwindcss className='icon' />;
        case 'CSS':
            return <FaCss3 className='icon' />;
        case 'Node':
            return <FaNodeJs className='icon' />;
        default:
            return null; // Return null if no matching technology
    }
};

export const projectsData = [
    {
        id: 1,
        title: "Applicazione per il controllo delle spese",
        description: "Un'applicazione focalizzata sull'utilizzo dell'hook useReducer() e sulla libreria react-parallax. Effettua il calcolo automatico delle spese inserite dall'utente",
        githubLink: "https://github.com/EliaGiolli/Expense-handler-app",
        demoLink: "https://pennywise-expense-tracker.netlify.app/",
        technologies: ["React", "Tailwind CSS"], 
    },
    {
        id: 2,
        title: "Applicazione meteo w/ Typescript",
        description: "Il mio primo progetto con Typescript: un'app meteo",
        githubLink: "https://github.com/EliaGiolli/weather-app-ts",
        demoLink: "https://imagegallery-modalview.netlify.app/",
        technologies: ["Typescript", "Tailwind CSS"], 
    },
    {
        id: 3,
        title: "Galleria di immagini con funzione modale",
        description: "Una semplice applicazione per imparare a creare un carosello di immagini con javascript vanilla",
        githubLink: "https://github.com/tuouser/todo-app",
        demoLink: "https://imagegallery-modalview.netlify.app/",
        technologies: ["Javascript", "CSS"], 
    },
    {
        id: 4,
        title: "Sito per la ricerca dei libri",
        description: "Un semplice progetto con React che consuma una API esterna e restituisce i libri ricercati dall'utente",
        githubLink: "https://github.com/tuouser/todo-app",
        demoLink: "https://app.netlify.com/sites/search4booksreact/overview",
        technologies: ["React","Tailwind CSS"], 
    },
]; 