import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal/thunks';

export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect( () => {
        // debemos revisar cual es el usuario activo
        onAuthStateChanged( FirebaseAuth, async (user) => {// onAuthStateChanged, revisa si el estado de la autenticación cambia y  se vuelve a disparar
            // console.log(user) // retorna los datos del usuario activo
            if( !user ) return dispatch( logout() )// si no existe un usuario, hace el cerrar sesión, además de cambiar el status

            const { uid, email, displayName, photoURL } = user
            dispatch( login({uid, email, displayName, photoURL})) // pasamos los datos de nuestro usuario al stores, además de cambiar el status
            dispatch( startLoadingNotes() ) // retorna las notas del usuario
        } ) 
    }, [])

    return {status};
}