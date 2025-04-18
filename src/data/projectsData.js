export const projectsData = [
    {
        id: 1,
        title: "VeggieVibes",
        description: "Sito vetrina interattivo per la ricerca di ricette vegetariane e vegane.",
        longDescription: "The VeggieVibes è un progetto sviluppato per esplorare la chiamata alla API di Spoonacular e il nuovo React-router v7. Ogni chiamata API è gestita anche dal debounce e dall'abortController. Tecnologie principali: React, TypeScript, Tailwind CSS e Vite.",
        imageUrl: "/img/VeggieVibes.png",
        githubLink: "https://github.com/EliaGiolli/VeggieVibes-react",
        demoLink: "https://veggie-vibes-react.vercel.app/",
        technologies: ["React","Typescript", "Tailwind CSS", "Vite"]
    },
    {
        id: 2,
        title: "PennyWise",
        description: "App per tenere traccia delle spese e calcolare il totale.",
        longDescription: "PennyWise è un'applicazione pensata per chi vuole monitorare le proprie spese quotidiane in modo semplice e intuitivo. Offre funzionalità base come inserimento spese, visualizzazione di una lista e calcolo automatico del totale. Progetto ideale per approfondire la gestione dello stato con React.",
        imageUrl: "/img/pennywise.png",
        githubLink: "https://github.com/EliaGiolli/Expense-handler-app",
        demoLink: "https://pennywise-expense-tracker.netlify.app/",
        technologies: ["React", "Tailwind CSS","Vite"]
    },
    {
        id: 3,
        title: "TaskFlow ",
        description: "Lista di cose da fare per gestire le attività quotidiane.",
        longDescription: "TaskFlow è un'applicazione per la gestione delle attività personali. Permette di aggiungere, modificare e cancellare task in modo rapido. Include anche la persistenza dei dati in localStorage e la possibilità di cambiare tema (dark/light). Sviluppata per esercitarmi nelle best practices di React e gestione dello stato.",
        imageUrl: "/img/taskFlow.jpg",
        githubLink: "https://github.com/EliaGiolli/React-todo-app",
        demoLink: "https://taskflow-todo.netlify.app/",
        technologies: ["React", "Tailwind CSS", "Vite"]
    },
    {
        id: 4,
        title: "Ricerca Libri",
        description: "Sito per cercare libri per titolo o autore da un database online.",
        longDescription: "Questo progetto consente di cercare libri tramite l'integrazione con un'API pubblica. L'utente può cercare libri per titolo o autore e visualizzare i dettagli principali. È stato un esercizio utile per prendere confidenza con fetch API, gestione degli errori e design responsive con Tailwind.",
        imageUrl: "/img/booksearch.png",
        githubLink: "https://github.com/EliaGiolli/search4yourbook_react",
        demoLink: "https://search4booksreact.netlify.app/",
        technologies: ["React","Typescript", "Tailwind CSS", "Vite"]
    },
];
