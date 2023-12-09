import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
// import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({ drawerWidth = 240 }) => { // el ancho del sidebar lo recibimos como prop
    
    // extraemos el nombre del usuario del stores para mostrarlo
    const {displayName} = useSelector(state => state.auth)

    const {notes} = useSelector(state => state.journal) // extraemos las notas

    return (
        <Box
            component='nav'
            // en pantallas sm tiene ese ancho de la prop
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' // temporary, para que quede a la vistas simpere, no lo ocultamos
                open = {true} // al ser true, solo podemos dejarlo en solo open
                sx={{ 
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar> {/* para el contenido de la barra */}
                    <Typography variant='h6' noWrap component='div'>
                        <p>{displayName}</p>
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        // mostramos las notas, exparsimos sus propiedades con ...note
                        notes.map( note => (
                            <SideBarItem key={ note.id } {...note}/> 
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}