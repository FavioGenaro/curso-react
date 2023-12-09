// import { Typography } from "@mui/material"
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar, SideBar } from '../components';

// este va a ser el tamaño del sidebar, y lo usamos tmb para calcular hasta donde deb ocupar el navbar, asi que lo declaramos como constante
const drawerWidth = 280;

export const JournalLayout = ({children}) =>{ // por se un layout recibe un children

    return(
        // podemos hacerlo con gird o en este caso usamos Box que es como un div
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
            {/* Navbar */}
            <NavBar drawerWidth={ drawerWidth } />
            {/* Sidebar, que es la barra lateral */}
            <SideBar drawerWidth={ drawerWidth } />
    

            <Box 
                component='main'// la etiqueta se convertirá en <main>
                sx={{ flexGrow: 1, p: 3 /* pading para los hijos, es decir que van a tener un espacio para que no esten pegados sl side y nav bar */}}
            >
                <Toolbar /> {/* para darle cierto espacio */}
                { children }
            </Box>
        </Box>
    )
}