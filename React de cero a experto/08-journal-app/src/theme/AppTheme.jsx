import { ThemeProvider } from '@emotion/react';
import { CssBaseline }  from '@mui/material';
import { purpleTheme } from './';

// este va ser un component superior, pues va a recibir a sus hijos
export const AppTheme = ({children}) =>{

    return(
        // el theme debemos crearlo en un archivo aparte, en este caso lo importamos de purpleTheme donde definimos el tema
        <ThemeProvider theme={purpleTheme}> 
            <CssBaseline />
            {children} {/* colocamos en vez de App, al children, para que los hijos que tengan AppTheme se envuelva de ThemeProvider y tenga de hermano a CssBaseline*/}
        </ThemeProvider> 
    )
}
