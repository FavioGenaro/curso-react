import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPage = () =>{ // por se un layout

    const dispatch = useDispatch();
    const onClickNewNote = () => {  
        dispatch ( startNewNote() ) // disparamos la acción de crear nota (thunks)
    }

    const {isSaving, active} = useSelector(state => state.journal) // traemos el isSaving para habilitar o no el botón
    // si tenemos una nota activa cambia la interfaz al formulario

    return(
        // importamos el layout
        <JournalLayout> 
            {/* añadimos Typography para que pueda tomar la typografia correcta*/}
            {/* <Typography variant='h1' >Journal Page</Typography> */}
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi odio voluptatum quaerat, molestias dolore. Quos a, est soluta at aliquid enim animi quod. Error nemo aliquid quas illo ex.</Typography> */}
        
            {/* aqui vamos añadir elementos para cuando no hay nada seleccionado (NothinSelected)
                y la pantalla cuando hay una nota (NoteView)
            */}

            {
                (!!active) // verifica su nulidad
                    ? <NoteView/> /* NoteView para cuando hay una nota activa */
                    : <NothingSelectedView/> /* View: Para cuando no hay nada seleccionado */
            }

            <IconButton
                onClick={ onClickNewNote }
                disabled = {isSaving} //habilitamos o no el boton
                size='large'
                sx={{
                color: 'white',
                backgroundColor: 'error.main',
                ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                position: 'fixed',
                right: 50,
                bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} /> {/* icono de material para agregar */}
            </IconButton>

        </JournalLayout>
        
    )
}