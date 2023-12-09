
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({ 
    name: 'journal',
    initialState: { 
        isSaving: false,
        messageSaved: '',
        notes: [], // almacenamos las notas
        active: null
        // active: { // mensaje activo, como va a lucir una nota
        //     id: 'ABC1232',
        //     title: '',
        //     body: '',
        //     date: 234214,
        //     imageUrls: [], // arreglo de urls, 
        // }
    },
    reducers: { // recordemos que los reducer hacen trabajo sincrono
        savingNewNote: (state) => { // lo guardo
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => { // añade la nota creada al store de redux
            state.notes.push(action.payload) // el payload contien los datos de la nota, hacemos push para que añada la nota a la lista, pues este es un conjunto de notas
            state.isSaving = false // decimos que no esta guardando para que el boton se active
        },
        setActiveNote: (state, action) => { // activamos la nota, no es colocarla en true, si no almacenar la nota en el active
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state, action) => { 
            state.isSaving = true
            // mientras esta guardando la nota, este no debe tener mensaje de guardo
            state.messageSaved = ''
        },
        updateNote: (state, action) => { 
            state.isSaving = false;
            state.notes = state.notes.map( note => { // corremos el arreglo notes

                if ( note.id === action.payload.id ) { // debe coincidir con el id
                    return action.payload; // actualizamos la data en esa nota
                }

                return note; // retornamos la misma nota, si no encuentra el id
            });
            // mensaje de actulizado
            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },
        setPhotosToActiveNote: (state, action) => {
            // juntamos las imagenes que tenemos en active.imageUrls y las juntamos con las nuevas imagenes action.payload.
            // en caso de que no haya imagenes en un inicio, entonces solo se mantienen la del payload, nos permite agregar imaganes en cualquier momento y que estas no se reemplacen.
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ]; // unimos las imagenes que habian con las que estamos seleccionando ahora mismo
            state.isSaving = false; // termina el estado de carga
        },
        clearNotesLogout: (state) => {
            // vaciamos los valores del journal al cerrar sesión
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => { 
            state.active = null;// eliminamos la nota activa
            state.notes = state.notes.filter( note => note.id !== action.payload ); // eliminamos la nota del arreglo de notas
        }
    }
});

//exportamos las acciones
export const { 
    addNewEmptyNote, 
    setActiveNote, 
    setNotes, 
    setSaving, 
    updateNote, 
    deleteNoteById, 
    savingNewNote, 
    setPhotosToActiveNote,
    clearNotesLogout
} = journalSlice.actions;