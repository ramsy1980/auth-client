import React from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useColorScheme } from "../../hooks";

interface ThemeProviderProps {

}

export const ThemeContext = React.createContext({})

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (props) => {

    const [colorScheme, toggleColorScheme] = useColorScheme();

    console.log({colorScheme})

    return (
        <ThemeContext.Provider value={{toggleColorScheme}}>
            <StyledThemeProvider theme={{mode: colorScheme}}>
                {props.children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}