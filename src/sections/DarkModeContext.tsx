/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useState } from "react";


interface DarkModeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
    children: React.ReactNode
  }
  
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined) 

const DarkModeProvider = ({children}:DarkModeContextType) => {

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    };
    return (
        <DarkModeContext.Provider value={{children,darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
};
const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if(!context) {
        throw new Error(
            'useDarkMode must be used within a darkModeProvider');
    }
    return context
}

export {DarkModeProvider, useDarkMode}

