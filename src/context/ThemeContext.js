import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState('light');

    const handleThemeToggle = () => {
        setTheme(theme === 'light'? 'dark' : 'light');
      }
  

    const value = { theme, handleThemeToggle }



    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider;