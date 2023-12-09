import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';
// import { ImageGallery } from '../components'

export const NoteView = () => { // note view se muestra cuando hay una nota activa

    const dispatch = useDispatch();
    // extraemos active, que tiene los datos de la nota. El nombre será note, ya no active
    const { active:note, messageSaved, isSaving } = useSelector(state => state.journal);

    // Para manejar la nota activa hacemos uso del useForm
    const { body, title, date, onInputChange, formState} = useForm(note); // el estado inicial es note

    const dateString = useMemo(() => {
        const newDate = new Date (date) // pasamos date porque este date se guarda como número y no como fecha
        return newDate.toUTCString() // le damos formato a la fecha
    }, [date])


    useEffect(() => {
        dispatch( setActiveNote(formState) ); // actualizamos la nota activa
    }, [formState]) // cualquier valor que cambie del formulario, se dispara el efecto

    useEffect(() => {
        if(messageSaved.length > 0){ // si hay un mensaje
            Swal.fire('Nota actulizada', messageSaved, 'success')
            console.log(messageSaved)
        }
    }, [messageSaved]) // cada vez que cambia el mensaje de guardado

    // Guardamos los nota en firebase
    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    const fileInputRef = useRef(); // para referencia el input mendiante el icono de subir archivos

    // para la selección de archivos
    const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return; // si no hay ningun archivo seleccionado no retorna nada
        console.log(target.files)
        dispatch( startUploadingFiles( target.files ) ); //subimos los archivos 
    }

    // acción para borrar la nota
    const onDelete = () => {
        dispatch( startDeletingNote() ); // función de los thunks
    }

    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid item>
                {/* le dimos formato a la fecha */}
                <Typography fontSize={ 39 } fontWeight='light' >{ dateString }</Typography>
            </Grid>
            <Grid item>
                {/* Boton para subir los archivos */}
                <input 
                    type="file" // tipo archivo
                    multiple // va a poder seleccionar muchos archivos
                    ref={ fileInputRef } // colocamos una referencia para que el IconButton dispare la acción de este input
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }} // visualmente no se ve
                />

                <IconButton 
                    color="primary" 
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() } // dispara la acción del click del input que sube archivos
                >
                    <UploadOutlined /> {/* icono para la subida de archivos */}
                </IconButton>


                {/* Boton de guardar */}
                <Button 
                    disabled={ isSaving }
                    color="primary" 
                    sx={{ padding: 2 }}
                    onClick={onSaveNote}
                >
                    {/* icono de guardar */}
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                {/* Caja de texto para colocar el titulo*/}
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title} // para que el valor del input sea el que extrajimos de value
                    onChange= {onInputChange}
                />
                {/* Caja de texto para ingresar el texto del diario */}
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={ 5 }
                    name="body"
                    value={body} // para que el valor del input sea el que extrajimos de value
                    onChange= {onInputChange}
                />
            </Grid>

            {/* Botón para borrar la nota que actualmente esta activa */}
            <Grid container justifyContent='end'>
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>


            {/* Image gallery: aqui vamos a colocar una galeria de imagenes de lo que paso en el día */}
            {/* ahora podemos tomar las imagenes de la nota activa */}
            <ImageGallery 
                images={note.imageUrls}
            />

        </Grid>
    )
}