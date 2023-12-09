import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';

// le pasamos el ancho del elemento Sidebar como prop y por defecto será 240
export const NavBar = ({ drawerWidth = 240 }) =>{ 

    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch( startLogout()) // disparamos la función de los thunks
    }

    return(
        <AppBar 
            position='fixed'
            sx={{ 
                // el ancho sera de el 100% menos el ancho Sidebar
                width: { sm: `calc(100% - ${ drawerWidth }px)` },
                // tendrá un margin left del tamaño del sidebar
                ml: { sm: `${ drawerWidth }px` }
                // todo esto lo hacemos con el fin de que deje un espacio para el sidebar
                // en pantallas pequeñas que sm ocupará todo el ancho
            }}
        >
            <Toolbar>
                {/* icono de menu, que aparece en pantallas menores a sm */}
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                {/* para el titulo y icono de salir de la barra */}
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'> JournalApp </Typography>

                    <IconButton 
                        color='error'
                        onClick={onLogout}
                    >
                        {/* icono de salir */}
                        <LogoutOutlined />
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
