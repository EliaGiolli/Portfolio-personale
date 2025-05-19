import { createContext,useContext, useState, useEffect } from "react";
import { ReactNode } from "react";
import { ContextTypes, Theme } from "../types/generalTypes";

const ThemeContext= createContext<ContextTypes>({
    themeMode: 'dark',
    toggleTheme: ()=>{},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [themeMode, setThemeMode] = useState<Theme>('dark');

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme === "light" || savedTheme === "dark"){
            setThemeMode(savedTheme)
        }else{
            setThemeMode('light')
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