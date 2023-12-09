import { red } from "@mui/material/colors"; // importamos un tema predefinido de MUI, red para mostrar errores
import { createTheme } from "@mui/material"; 

export const purpleTheme = createTheme({ // en si tiene un tema por defecto, pero nosotros reescribimos sus propiedades
    palette: { // este basicamente es el tema, definimos una paleta de colores
        primary: {
            main: '#262254'
        },
        secondary:{
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }

})
