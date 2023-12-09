import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';


export const loadNotes = async( uid = '') => { // recibe el id
    if ( !uid ) throw new Error('El UID del usuario no existe'); // por si el id no viene, no hay usuario

    // si usamos collection para traer documentos o viceversa, nos dará un error.
    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` ); // referenciamos a la colección que necesitamos
    const docs = await getDocs(collectionRef); // traemos los documentos de la colleción

    // console.log(docs) // retorna el una lista con los docs

    const notes = []; // arreglo que almacena las notas

    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() }); // pushiamos como un objeto, ponemos el id y exparsimos lo que retorna la función data
    });
    
    return notes;
}