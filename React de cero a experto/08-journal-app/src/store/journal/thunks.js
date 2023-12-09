import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { fileUpload } from "../../helpers/fileUpload"
import { loadNotes } from "../../helpers/loadNotes"
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from "./journalSlice"

export const startNewNote = () => { // boton del +, creamos la nota, la insertamos en firebase y luego retornamos el id de esa nota para editarla
    // podemos usar el getState para obtener todo el state del store
    return async (dispatch, getState) => {
        // console.log('startNewNote')

        // cambiamos el valor de isSaving a treu para que el boton se deshabilite, hasta que termine de agregar la nota
        dispatch( savingNewNote()) 

        // obtener el uid del usuario
        const { uid } = getState().auth

        const newNote = { //datos de la nueva nota
            title: '',
            body: '',
            date: new Date().getTime()
        }

        // INSERTAMOS UNA NUEVA NOTA
        // doc es una función de firestore, que crea el nuevo documento(nos generará el id)
        // dentro del doc buscamos una colección, le pasamos como 1er parametro a FirebaseDB de fiebase config y 
        // el 2do parametro es el path o ruta donde vamos a insertar esa nota
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes/`))

        // setDoc es para insertar la nota, nos pide la referencia al doc y luego la data que vamos a insertar
        const setDocResp = await setDoc(newDoc, newNote); // no retorna nada, solo inserta la data
    
        // console.log({newDoc, setDocResp})

        // añadimos el id al newNote
        newNote.id = newDoc.id // del newDoc generó el id

        dispatch(addNewEmptyNote(newNote)) // guardamos la nota en el store

        dispatch(setActiveNote(newNote)) // guardamos la nota como activa
    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        
        const { uid } = getState().auth; // extraemos el id
        if ( !uid ) throw new Error('El UID del usuario no existe');// por si el id no viene, no hay usuario

        const notes = await loadNotes( uid ); // obtenemos las notas, loadNotes de helpers
        dispatch( setNotes( notes ) );
    }
}

// Guarda los datos configurado de la nota activa en firestore
export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() ); // esta cargando la subida, isSaving = true

        const { uid } = getState().auth; // ide del usuario
        const { active:note } = getState().journal; // traemos la nota activa

        // creamos una variable auxiliar sin el id, pues si lo mandamos así firestore creara con ese id, esta variable la emviamos a firebase
        const noteToFireStore = { ...note };// esparcimos todos los datos de la nota 
        delete noteToFireStore.id;// eliminamos el id de la nota
    
        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` ); // construirmos el path o ruta para la nota en firebase
        await setDoc( docRef, noteToFireStore, { merge: true }); // insertamos la nueva data, el merge hace los campos que envio y no exiten en firestore se fusionen con los que estan

        // mandamos note, porque este tiene el id
        dispatch( updateNote( note ) ); // actualizamos la data en el arreglo notes de redux y se actualiza en la interfaz
    }
}

// Para subir archivos a couldinary
export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() ); // para colocarlo en estado de carga
            
        // await fileUpload( files[0] ); // subimos solo un archivo como muestra

        const fileUploadPromises = []; // alverga funciones tipo promesas
        for ( const file of files ) {
            // haremos la subida uno por uno con la ayuda de fileUpload de helpers
            fileUploadPromises.push( fileUpload( file ) ) // fileUpload es un helper que sube un archivo, en el arreglo almacenamos cada promesa o función fileUpload
        }

        const photosUrls = await Promise.all( fileUploadPromises ); // Promise.all espera un arreglo de promesas, para ejecutarlas y cada una emite una respuesta que es el enlace de cada foto
        // console.log(photosUrls)
        dispatch( setPhotosToActiveNote( photosUrls )); // actulizamos las fotos en el arreglo de notas
        
    }
}
// Para elimnar una nota
export const startDeletingNote = () => {
    return async( dispatch, getState) => {

        const { uid } = getState().auth; // traemos el id del usuario
        const { active: note } = getState().journal; // traemos la nota activa

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`); // armamos el path o la ruta, con el id del usuario y id de la nota
        await deleteDoc( docRef ); // elimanmos el documento de firebase

        dispatch( deleteNoteById(note.id) ); // actualizamos la data en el redux, eliminamos la nota del arreglo y de active

    }
}