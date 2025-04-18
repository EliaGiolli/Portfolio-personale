import { createContext,useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: ()=>{},
});

export const ThemeProvider = ({children})=>{
    const [themeMode, setThemeMode] = useState('dark');

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if(themeMode){
            setThemeMode(savedTheme)
        }
    },[]);

    useEffect(()=>{
        document.body.classList.remove('dark','light');
        document.body.classList.add(themeMode);
        localStorage.setItem('theme',themeMode);
    },[])


    const toggleTheme = ()=>{
        setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, themeMode}} >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme =()=>useContext(ThemeContext);