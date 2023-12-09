import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();
    // cuando agamos clic, este va a pasar a ser nota activa
    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date, imageUrls }) ) // esperamos las propiedades de note
    }

    // newTitle para agregar ... por si el titulo es muy grande
    const newTitle = useMemo( () => { // useMemo por si hay cambios en el titulo
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    },[ title ])

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={ onClickNote }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}